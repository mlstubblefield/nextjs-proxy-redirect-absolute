import { NextResponse, userAgent } from 'next/server'

export default async function middleware(req, res) {
  const redirectUrl = req.nextUrl.clone()
  redirectUrl.pathname = '/'
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    '/redirect',
  ],
}
