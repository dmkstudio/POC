import { NextResponse, type NextRequest } from 'next/server';
import { LOCALE_COOKIE, isLocale, locales, matchLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const alreadyLocalised = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (alreadyLocalised) return NextResponse.next();

  // A previously chosen language wins over the browser's preference.
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale =
    saved && isLocale(saved) ? saved : matchLocale(request.headers.get('accept-language'));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Everything except API routes, Next internals and static files.
  matcher: ['/((?!api|_next/static|_next/image|images|.*\\.[\\w]+$).*)']
};
