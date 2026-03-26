import { cookies } from "next/headers";

export type SiteLanguage = "ja" | "en" | "ar";

export const isSiteLanguage = (value: string): value is SiteLanguage =>
  value === "ja" || value === "en" || value === "ar";

export const isRTL = (lang: SiteLanguage) => lang === "ar";

export async function getRequestLanguage(defaultLang: SiteLanguage = "ja"): Promise<SiteLanguage> {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("lang")?.value;

  if (langCookie && isSiteLanguage(langCookie)) {
    return langCookie;
  }

  return defaultLang;
}
