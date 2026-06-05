import 'server-only';
import { SignJWT, jwtVerify } from 'jose';
import { hash, compare } from 'bcrypt-ts';
import { cookies } from 'next/headers';

// We load the key lazily inside encrypt/decrypt functions to prevent build-time failures
function getSecretKey() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    // During next build, process.env.JWT_SECRET might not be set.
    // We return a fallback key for build-time compilation, but throw at runtime if it's missing.
    if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PHASE) {
      throw new Error('JWT_SECRET environment variable is required.');
    }
    return new TextEncoder().encode('temporary-fallback-secret-for-build-purposes');
  }
  return new TextEncoder().encode(secret);
}

export async function hashPassword(password: string) {
  return await hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return await compare(password, hash);
}

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(getSecretKey());
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, getSecretKey(), {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function getSession() {
  const session = (await cookies()).get('session')?.value;
  if (!session) return null;
  try {
    return await decrypt(session);
  } catch (error) {
    return null;
  }
}

