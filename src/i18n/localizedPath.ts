import {
  DEFAULT_LANGUAGE,
  isSiteLanguage,
  type SiteLanguage,
} from "@/i18n/languageConfig";

const ensureLeadingSlash = (pathname: string) =>
  pathname.startsWith("/") ? pathname : `/${pathname}`;

const splitPathParts = (pathOrUrl: string) => {
  const match = pathOrUrl.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);

  return {
    pathname: match?.[1] || "/",
    search: match?.[2] || "",
    hash: match?.[3] || "",
  };
};

const toPathname = (pathOrUrl: string) => {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    try {
      return new URL(pathOrUrl).pathname;
    } catch {
      return "/";
    }
  }

  return splitPathParts(pathOrUrl).pathname;
};

export const removeLanguagePrefix = (pathname: string) => {
  const normalizedPathname = ensureLeadingSlash(pathname);
  const segments = normalizedPathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return "/";
  }

  if (isSiteLanguage(segments[0])) {
    segments.shift();
  }

  return segments.length === 0 ? "/" : `/${segments.join("/")}`;
};

export const getLanguageFromPathname = (
  pathnameOrUrl: string | null | undefined,
): SiteLanguage => {
  if (!pathnameOrUrl) {
    return DEFAULT_LANGUAGE;
  }

  const pathname = toPathname(pathnameOrUrl);
  const firstSegment = ensureLeadingSlash(pathname).split("/").filter(Boolean)[0];

  return firstSegment && isSiteLanguage(firstSegment)
    ? firstSegment
    : DEFAULT_LANGUAGE;
};

export const localizePath = (lang: SiteLanguage, pathOrUrl: string) => {
  const { pathname, search, hash } = splitPathParts(pathOrUrl || "/");
  const normalizedPathname = ensureLeadingSlash(pathname || "/");
  const pathWithoutLocale = removeLanguagePrefix(normalizedPathname);
  const localizedPathname =
    pathWithoutLocale === "/" ? `/${lang}` : `/${lang}${pathWithoutLocale}`;

  return `${localizedPathname}${search}${hash}`;
};

export const switchLanguageInPathname = (
  currentPathOrUrl: string,
  nextLanguage: SiteLanguage,
) => localizePath(nextLanguage, currentPathOrUrl);