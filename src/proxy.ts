import { NextRequest, NextResponse } from "next/server";
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  isSiteLanguage,
  type SiteLanguage,
} from "@/i18n/languageConfig";
import { localizePath } from "@/i18n/localizedPath";

const PUBLIC_FILE = /\.[^/]+$/;

function detectBrowserLanguage(request: NextRequest): SiteLanguage {
  const acceptLanguage = request.headers.get("accept-language");
  console.log("Accept-Language header:", acceptLanguage);
  if (!acceptLanguage) return DEFAULT_LANGUAGE;

  // Parse "en-US,en;q=0.9,ja;q=0.8" → sorted list of base language codes
  const preferred = acceptLanguage
    .split(",")
    .map((entry) => {
      const [lang, q] = entry.trim().split(";q=");
      return { lang: lang.trim().split("-")[0].toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q)
    .map((entry) => entry.lang);

  return preferred.find((lang) => isSiteLanguage(lang)) as SiteLanguage ?? DEFAULT_LANGUAGE;
}

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

  const browserLang = detectBrowserLanguage(request);
  const localizedUrl = request.nextUrl.clone();
  const localizedPathname = localizePath(browserLang, pathname);

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
