"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import ja from "./translations/ja";
import en from "./translations/en";
import type { Translations } from "./translations/types";

export type Language = "ja" | "en";

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

const translations: Record<Language, Translations> = { ja, en };

const LanguageContext = createContext<LanguageContextType>({
  lang: "ja",
  t: ja,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ja");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved && (saved === "ja" || saved === "en")) {
      setLangState(saved);
    }
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
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
