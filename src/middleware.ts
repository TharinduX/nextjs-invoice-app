import { NextRequest, NextResponse } from 'next/server';
import { verifyAuth } from './lib/auth';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('user-token')?.value;

  const verifiedToken =
    token && (await verifyAuth(token).catch((err) => console.log(err)));

  if (req.nextUrl.pathname.startsWith('/auth/login') && !verifiedToken) {
    return;
  }

  if (req.url.includes('/auth/login') && verifiedToken) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  if (!verifiedToken) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }
}

export const config = {
  matcher: ['/dashboard', '/auth/login'],
};
