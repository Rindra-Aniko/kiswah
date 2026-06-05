'use server';

import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { eq, and, ne } from 'drizzle-orm';
import { hashPassword, getSession } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

function validatePassword(password: string): string | null {
  if (password.length < 8) {
    return 'Password harus minimal 8 karakter';
  }
  if (!/[A-Z]/.test(password)) {
    return 'Password harus mengandung minimal 1 huruf besar';
  }
  if (!/[a-z]/.test(password)) {
    return 'Password harus mengandung minimal 1 huruf kecil';
  }
  if (!/[0-9]/.test(password)) {
    return 'Password harus mengandung minimal 1 angka';
  }
  return null;
}

export async function addUserAction(formData: FormData) {
  const session = await getSession();
  if (!session || session.role !== 'admin') {
    return { error: 'Unauthorized: Only admins can add users' };
  }

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const role = formData.get('role') as 'admin' | 'operator';

  if (!name || !email || !password || !role) {
    return { error: 'Semua field wajib diisi' };
  }

  const passwordError = validatePassword(password);
  if (passwordError) {
    return { error: passwordError };
  }

  const hashedPassword = await hashPassword(password);

  try {
    await db.insert(users).values({
      name,
      email,
      password: hashedPassword,
      role,
    });
    revalidatePath('/admin/dashboard');
    return { success: true };
  } catch (error: any) {
    if (error.message?.includes('UNIQUE')) {
      return { error: 'Email already exists' };
    }
    return { error: 'Failed to create user' };
  }
}

export async function deleteUserAction(id: number) {
  const session = await getSession();
  if (!session || session.role !== 'admin') {
    return { error: 'Unauthorized: Hanya admin yang dapat menghapus user' };
  }

  // Fetch the user to be deleted to check their role
  const userToDelete = await db.query.users.findFirst({
    where: eq(users.id, id),
  });

  if (!userToDelete) {
    return { error: 'User not found' };
  }

  // Strictly prevent deleting any admin if requested by the user prompt
  if (userToDelete.role === 'admin') {
    return { error: 'Akun Admin tidak bisa dihapus demi keamanan sistem' };
  }
  
  try {
    await db.delete(users).where(eq(users.id, id));
    revalidatePath('/admin/dashboard');
    return { success: true };
  } catch (error) {
    return { error: 'Failed to delete user' };
  }
}

export async function updateUserAction(id: number, formData: FormData) {
  const session = await getSession();
  if (!session || session.role !== 'admin') {
    return { error: 'Unauthorized: Only admins can edit users' };
  }

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const role = formData.get('role') as 'admin' | 'operator';

  if (!name || !email || !role) {
    return { error: 'Name, Email, and Role are required' };
  }

  const updateData: any = { name, email, role };
  
  if (password && password.length > 0) {
    const passwordError = validatePassword(password);
    if (passwordError) {
      return { error: passwordError };
    }
    updateData.password = await hashPassword(password);
  }

  try {
    await db.update(users).set(updateData).where(eq(users.id, id));
    revalidatePath('/admin/dashboard');
    return { success: true };
  } catch (error: any) {
    if (error.message?.includes('UNIQUE')) {
      return { error: 'Email already exists' };
    }
    return { error: 'Failed to update user' };
  }
}
