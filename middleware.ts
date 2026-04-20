import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const publicPaths = [
    '/locked',
    '/returning-access',
    '/access',
  ]

  const isPublicPath =
    publicPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`))

  const isStaticAsset =
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/public') ||
    pathname.startsWith('/images') ||
    pathname.match(/\.(svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|woff|woff2|ttf|eot)$/)

  if (isPublicPath || isStaticAsset) {
    return NextResponse.next()
  }

  const hasAccess = request.cookies.get('library_access_granted')?.value === 'true'

  if (!hasAccess) {
    const lockedUrl = new URL('/locked', request.url)
    return NextResponse.redirect(lockedUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api).*)'],
}