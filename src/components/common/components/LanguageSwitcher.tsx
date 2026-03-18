"use client";

import { useLanguage, Language } from "@/i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const toggle = () => {
    setLang(lang === "ja" ? "en" : "ja");
  };

  return (
    <button
      onClick={toggle}
      className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-200 bg-white/80 backdrop-blur-sm text-sm font-medium text-gray-700 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300"
      aria-label={`Switch to ${lang === "ja" ? "English" : "Japanese"}`}
    >
      <span className={lang === "ja" ? "font-bold text-purple-600" : "text-gray-400"}>
        JP
      </span>
      <span className="text-gray-300">/</span>
      <span className={lang === "en" ? "font-bold text-purple-600" : "text-gray-400"}>
        EN
      </span>
    </button>
  );
}
