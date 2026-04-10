"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";
import Flag from "react-world-flags";
import { useClickOutside } from "@/hooks/ui/useClickOutside";
import { languageOptions, TLanguageOption } from "@/content/header/languageOptions";

function SyriaThreeStarsFlag({ className, label }: { className?: string; label: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={className}
      role="img"
      aria-label={label}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="60" height="13.333" y="0" fill="#198754" />
      <rect width="60" height="13.334" y="13.333" fill="#FFFFFF" />
      <rect width="60" height="13.333" y="26.667" fill="#111111" />
      <polygon points="15,16.3 16.1,19.1 19,19.1 16.65,20.85 17.55,23.6 15,21.9 12.45,23.6 13.35,20.85 11,19.1 13.9,19.1" fill="#D62828" />
      <polygon points="30,16.3 31.1,19.1 34,19.1 31.65,20.85 32.55,23.6 30,21.9 27.45,23.6 28.35,20.85 26,19.1 28.9,19.1" fill="#D62828" />
      <polygon points="45,16.3 46.1,19.1 49,19.1 46.65,20.85 47.55,23.6 45,21.9 42.45,23.6 43.35,20.85 41,19.1 43.9,19.1" fill="#D62828" />
    </svg>
  );
}

function LanguageFlag({ option }: { option: TLanguageOption }) {
  if (option.value === "ar") {
    return (
      <SyriaThreeStarsFlag
        className="h-4 w-6 rounded-[2px] object-cover shadow-sm"
        label={option.title}
      />
    );
  }

  return (
    <Flag
      code={option.countryCode ?? "US"}
      className="h-4 w-6 rounded-[2px] object-cover shadow-sm"
      alt={option.title}
    />
  );
}

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();
  const isRtl = lang === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const localeText = t.languageSwitcher;

  const selectedOption =
    languageOptions.find((option) => option.value === lang) ?? languageOptions[0];

  return (
    <div
      ref={containerRef}
      className="relative"
      aria-label={localeText.switcher}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-gray-700 backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:bg-purple-50"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={localeText.selectLanguage}
      >
        {/* <LanguageFlag option={selectedOption} /> */}
        <span className="hidden sm:inline">{selectedOption.title}</span>
        <span className="sm:hidden">{selectedOption.label}</span>
        <svg
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen ? (
        <div
          role="menu"
          className={`absolute top-full z-20 mt-2 min-w-[180px] overflow-hidden rounded-xl border border-purple-100 bg-white shadow-xl ${isRtl ? "text-right left-0" : "text-left right-0"}`}
        >
          {languageOptions.map((option) => {
            const isActive = option.value === lang;

            return (
              <button
                key={option.value}
                onClick={() => {
                  setLang(option.value);
                  setIsOpen(false);
                }}
                role="menuitemradio"
                aria-checked={isActive}
                aria-label={`${localeText.switchTo} ${option.title}`}
                className={`flex w-full items-center gap-3 px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-purple-50 text-purple-700"
                    : "text-gray-700 hover:bg-gray-50"
                } ${isRtl ? "text-right" : "text-left"}`}
              >
                {/* <LanguageFlag option={option} /> */}
                <span>{option.title}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
