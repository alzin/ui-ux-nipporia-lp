"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import ja from "./translations/ja";
import en from "./translations/en";
import ar from "./translations/ar";
import type { Translations } from "./translations/types";

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
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
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
