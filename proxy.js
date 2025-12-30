import { NextResponse, userAgent } from 'next/server'

export default async function proxy(req, res) {
  const redirectUrl = req.nextUrl.clone()
  redirectUrl.pathname = '/'
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    '/redirect',
  ],
}
