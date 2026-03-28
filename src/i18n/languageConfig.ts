export const SUPPORTED_LANGUAGES = ["ja", "en", "ar"] as const;

export type SiteLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: SiteLanguage = "ja";

export const isSiteLanguage = (value: string): value is SiteLanguage =>
  SUPPORTED_LANGUAGES.includes(value as SiteLanguage);

export const resolveSiteLanguage = (
  value: string | null | undefined,
): SiteLanguage => {
  if (!value) {
    return DEFAULT_LANGUAGE;
  }

  return isSiteLanguage(value) ? value : DEFAULT_LANGUAGE;
};

export const isRTL = (lang: SiteLanguage) => lang === "ar";