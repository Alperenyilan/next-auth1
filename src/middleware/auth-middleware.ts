import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const adminRoutes = ['/admin'];
const userRoutes = ['/dashboard'];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Giriş yapılmamışsa login sayfasına yönlendir
  if (!token && (adminRoutes.includes(pathname) || userRoutes.includes(pathname))) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  // Admin route'ları için admin rolü kontrolü
  if (adminRoutes.includes(pathname) && token?.role !== 'admin') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // User route'ları için user veya admin rolü kontrolü
  if (userRoutes.includes(pathname) && !['user', 'admin'].includes(token?.role as string)) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/dashboard'],
}; 