import { NextRequest, NextResponse } from "next/server";
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
} from "@/i18n/languageConfig";
import { localizePath } from "@/i18n/localizedPath";

const PUBLIC_FILE = /\.[^/]+$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  const pathnameHasLocale = SUPPORTED_LANGUAGES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  const localizedUrl = request.nextUrl.clone();
  const localizedPathname = localizePath(DEFAULT_LANGUAGE, pathname);

  if (localizedPathname === pathname) {
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  localizedUrl.pathname = localizedPathname;

  return NextResponse.redirect(localizedUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
