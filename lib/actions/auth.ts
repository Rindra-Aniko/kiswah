'use server';

import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { eq, or } from 'drizzle-orm';
import { verifyPassword, encrypt } from '@/lib/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// --- Rate Limiting ---
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 menit

interface LoginAttempt {
  count: number;
  lastAttempt: number;
  lockedUntil: number | null;
}

const loginAttempts = new Map<string, LoginAttempt>();

function cleanupStaleEntries() {
  const now = Date.now();
  for (const [key, entry] of loginAttempts.entries()) {
    // Hapus entry yang sudah tidak locked dan sudah lewat 30 menit dari attempt terakhir
    if (!entry.lockedUntil && now - entry.lastAttempt > 30 * 60 * 1000) {
      loginAttempts.delete(key);
    }
    // Hapus entry yang lockout-nya sudah expired lebih dari 30 menit lalu
    if (entry.lockedUntil && now - entry.lockedUntil > 30 * 60 * 1000) {
      loginAttempts.delete(key);
    }
  }
}

function checkRateLimit(identifier: string): { blocked: boolean; remainingMinutes?: number } {
  // Bersihkan entry lama secara berkala
  if (loginAttempts.size > 100) {
    cleanupStaleEntries();
  }

  const attempt = loginAttempts.get(identifier);
  if (!attempt) return { blocked: false };

  // Cek apakah masih dalam lockout
  if (attempt.lockedUntil && Date.now() < attempt.lockedUntil) {
    const remainingMinutes = Math.ceil((attempt.lockedUntil - Date.now()) / 60000);
    return { blocked: true, remainingMinutes };
  }

  // Jika lockout sudah lewat, reset
  if (attempt.lockedUntil && Date.now() >= attempt.lockedUntil) {
    loginAttempts.delete(identifier);
    return { blocked: false };
  }

  return { blocked: false };
}

function recordFailedAttempt(identifier: string) {
  const attempt = loginAttempts.get(identifier) || { count: 0, lastAttempt: 0, lockedUntil: null };
  attempt.count += 1;
  attempt.lastAttempt = Date.now();

  if (attempt.count >= MAX_ATTEMPTS) {
    attempt.lockedUntil = Date.now() + LOCKOUT_DURATION_MS;
  }

  loginAttempts.set(identifier, attempt);
  return MAX_ATTEMPTS - attempt.count;
}

function clearAttempts(identifier: string) {
  loginAttempts.delete(identifier);
}

// --- Actions ---

export async function loginAction(prevState: any, formData: FormData) {
  const emailOrUsername = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!emailOrUsername || !password) {
    return { error: 'Email dan password wajib diisi' };
  }

  // Cek rate limit
  const rateLimit = checkRateLimit(emailOrUsername.toLowerCase());
  if (rateLimit.blocked) {
    return { 
      error: `Terlalu banyak percobaan login. Coba lagi dalam ${rateLimit.remainingMinutes} menit.` 
    };
  }

  const user = await db.query.users.findFirst({
    where: or(eq(users.email, emailOrUsername), eq(users.name, emailOrUsername)),
  });

  if (!user) {
    const remaining = recordFailedAttempt(emailOrUsername.toLowerCase());
    if (remaining <= 0) {
      return { error: 'Terlalu banyak percobaan login. Akun dikunci selama 15 menit.' };
    }
    return { error: `Login gagal. Sisa ${remaining} percobaan sebelum akun dikunci.` };
  }

  const isPasswordValid = await verifyPassword(password, user.password);

  if (!isPasswordValid) {
    const remaining = recordFailedAttempt(emailOrUsername.toLowerCase());
    if (remaining <= 0) {
      return { error: 'Terlalu banyak percobaan login. Akun dikunci selama 15 menit.' };
    }
    return { error: `Login gagal. Sisa ${remaining} percobaan sebelum akun dikunci.` };
  }

  // Login berhasil — reset attempts
  clearAttempts(emailOrUsername.toLowerCase());

  // Create session
  const expires = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 hours
  const session = await encrypt({ 
    userId: user.id, 
    role: user.role,
    name: user.name,
    expires 
  });

  // Set cookie
  (await cookies()).set('session', session, {
    expires,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });

  redirect('/admin/dashboard');
}

export async function logoutAction() {
  (await cookies()).set('session', '', {
    expires: new Date(0),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
  redirect('/admin');
}
