import { NextRequest, NextResponse } from 'next/server';
import { decrypt, encrypt } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If user is already logged in and visits /admin, redirect to /admin/dashboard
  if (pathname === '/admin') {
    const session = request.cookies.get('session')?.value;
    if (session) {
      try {
        await decrypt(session);
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      } catch (error) {
        // Session invalid, let them access /admin to log in again
      }
    }
  }

  // Protect /admin/dashboard and /admin/user
  if (pathname.startsWith('/admin/dashboard') || pathname.startsWith('/admin/user')) {
    const session = request.cookies.get('session')?.value;

    if (!session) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    try {
      const parsed = await decrypt(session);

      // Refresh the session so active users don't get logged out
      const newExpires = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 hours
      parsed.expires = newExpires;
      const refreshedToken = await encrypt(parsed);

      const res = NextResponse.next();
      res.cookies.set({
        name: 'session',
        value: refreshedToken,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        expires: newExpires,
      });
      return res;
    } catch (error) {
      // Invalid or expired session — redirect to login
      const res = NextResponse.redirect(new URL('/admin', request.url));
      res.cookies.set({
        name: 'session',
        value: '',
        expires: new Date(0),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      });
      return res;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/dashboard/:path*', '/admin/user/:path*'],
};
