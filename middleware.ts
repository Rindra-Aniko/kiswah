import { NextRequest, NextResponse } from 'next/server';
import { decrypt, encrypt } from '@/lib/auth';

const LOCALE_COOKIE = 'NEXT_LOCALE';

function detectLocale(request: NextRequest): 'id' | 'en' {
  // Check common geolocation headers (Vercel, Cloudflare, Netlify, AWS Cloudfront)
  const country = (
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    request.headers.get('x-country') ||
    (request as { geo?: { country?: string } }).geo?.country ||
    ''
  ).toUpperCase();

  if (country) {
    return country === 'ID' ? 'id' : 'en';
  }

  // Fallback: Check Accept-Language header from browser
  const acceptLang = request.headers.get('accept-language') || '';
  if (acceptLang.toLowerCase().includes('id')) {
    return 'id';
  }

  // Default fallback if location cannot be determined
  return 'id';
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  let response = NextResponse.next();

  // Handle Locale Cookie if not present or invalid
  const existingLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  let activeLocale = existingLocale;

  if (!existingLocale || (existingLocale !== 'id' && existingLocale !== 'en')) {
    activeLocale = detectLocale(request);
    response.cookies.set({
      name: LOCALE_COOKIE,
      value: activeLocale,
      path: '/',
      maxAge: 365 * 24 * 60 * 60,
      sameSite: 'lax',
    });
  }

  // -------------------------------------------------------------
  // Admin Protection Logic
  // -------------------------------------------------------------

  // If user is already logged in and visits /admin, redirect to /admin/dashboard
  if (pathname === '/admin') {
    const session = request.cookies.get('session')?.value;
    if (session) {
      try {
        await decrypt(session);
        const redirectRes = NextResponse.redirect(new URL('/admin/dashboard', request.url));
        if (!existingLocale && activeLocale) {
          redirectRes.cookies.set({
            name: LOCALE_COOKIE,
            value: activeLocale,
            path: '/',
            maxAge: 365 * 24 * 60 * 60,
            sameSite: 'lax',
          });
        }
        return redirectRes;
      } catch (error) {
        // Session invalid, let them access /admin to log in again
      }
    }
  }

  // Protect /admin/dashboard and /admin/user
  if (pathname.startsWith('/admin/dashboard') || pathname.startsWith('/admin/user')) {
    const session = request.cookies.get('session')?.value;

    if (!session) {
      const redirectRes = NextResponse.redirect(new URL('/admin', request.url));
      if (!existingLocale && activeLocale) {
        redirectRes.cookies.set({
          name: LOCALE_COOKIE,
          value: activeLocale,
          path: '/',
          maxAge: 365 * 24 * 60 * 60,
          sameSite: 'lax',
        });
      }
      return redirectRes;
    }

    try {
      const parsed = await decrypt(session);

      // Refresh the session so active users don't get logged out
      const newExpires = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 hours
      parsed.expires = newExpires;
      const refreshedToken = await encrypt(parsed);

      response.cookies.set({
        name: 'session',
        value: refreshedToken,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        expires: newExpires,
      });
      return response;
    } catch (error) {
      // Invalid or expired session — redirect to login
      const redirectRes = NextResponse.redirect(new URL('/admin', request.url));
      redirectRes.cookies.set({
        name: 'session',
        value: '',
        expires: new Date(0),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      });
      if (!existingLocale && activeLocale) {
        redirectRes.cookies.set({
          name: LOCALE_COOKIE,
          value: activeLocale,
          path: '/',
          maxAge: 365 * 24 * 60 * 60,
          sameSite: 'lax',
        });
      }
      return redirectRes;
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with extensions (e.g. .svg, .png, .jpg, .webp)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

