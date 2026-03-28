import { headers } from "next/headers";
import {
  DEFAULT_LANGUAGE,
  isRTL,
  isSiteLanguage,
  resolveSiteLanguage,
  type SiteLanguage,
} from "@/i18n/languageConfig";
import { getLanguageFromPathname } from "@/i18n/localizedPath";

export type { SiteLanguage } from "@/i18n/languageConfig";
export { DEFAULT_LANGUAGE, isRTL, isSiteLanguage, resolveSiteLanguage };

export const getRequestLanguage = async (): Promise<SiteLanguage> => {
  const requestHeaders = await headers();
  const pathname =
    requestHeaders.get("x-pathname") ??
    requestHeaders.get("next-url") ??
    requestHeaders.get("referer") ??
    `/${DEFAULT_LANGUAGE}`;

  return getLanguageFromPathname(pathname);
};