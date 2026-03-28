"use client";

import { createContext, useContext, useCallback } from "react";
import { useRouter } from "next/navigation";
import ja from "@/i18n/translations/ja";
import en from "@/i18n/translations/en";
import ar from "@/i18n/translations/ar";
import type { Translations } from "@/i18n/translations/types";
import type { SiteLanguage } from "@/i18n/languageConfig";
import { localizePath, switchLanguageInPathname } from "@/i18n/localizedPath";

export type Language = SiteLanguage;

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
  localizePath: (pathOrUrl: string) => string;
}

const translations: Record<Language, Translations> = { ja, en, ar };

const LanguageContext = createContext<LanguageContextType>({
  lang: "ja",
  t: ja,
  setLang: () => {},
  localizePath: () => "/ja",
});

export function LanguageProvider({
  children,
  currentLang,
}: {
  children: React.ReactNode;
  currentLang: Language;
}) {
  const router = useRouter();
  const setLang = useCallback((newLang: Language) => {
    if (newLang === currentLang || typeof window === "undefined") return;

    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    const newUrl = switchLanguageInPathname(currentUrl, newLang);

    if (newUrl === currentUrl) return;

    router.replace(newUrl);
  }, [currentLang, router]);

  const toLocalizedPath = useCallback(
    (pathOrUrl: string) => localizePath(currentLang, pathOrUrl),
    [currentLang],
  );

  return (
    <LanguageContext.Provider
      value={{
        lang: currentLang,
        t: translations[currentLang],
        setLang,
        localizePath: toLocalizedPath,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}