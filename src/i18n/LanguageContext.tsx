"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import ja from "@/i18n/translations/ja";
import en from "@/i18n/translations/en";
import ar from "@/i18n/translations/ar";
import type { Translations } from "@/i18n/translations/types";

export type Language = "ja" | "en" | "ar";

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

const translations: Record<Language, Translations> = { ja, en, ar };

const rtlLanguages = new Set<Language>(["ar"]);

const isLanguage = (value: string): value is Language =>
  value === "ja" || value === "en" || value === "ar";

const LanguageContext = createContext<LanguageContextType>({
  lang: "ja",
  t: ja,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ja");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && isLanguage(saved)) {
      setLangState(saved);
      return;
    }

    const htmlLang = document.documentElement.lang;
    if (htmlLang && isLanguage(htmlLang)) {
      setLangState(htmlLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.cookie = `lang=${lang}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = lang;
    document.documentElement.dir = rtlLanguages.has(lang) ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
