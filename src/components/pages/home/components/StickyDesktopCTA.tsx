"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

type Props = { isVisible: boolean };

export default function StickyDesktopCTA({ isVisible }: Props) {
  const { t, lang, localizePath } = useLanguage();
  const isRTL = lang === "ar";
  const arrowPath = isRTL ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7";

  return (
    <div
      className={`hidden md:flex fixed top-1/2 -translate-y-1/2 z-[9999] flex-col gap-3 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isRTL ? "left-0 items-start" : "right-0 items-end"
        } ${isVisible
          ? "translate-x-0 opacity-100"
          : isRTL
            ? "-translate-x-full opacity-0 pointer-events-none"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      inert={!isVisible ? true : undefined}
    >
      <Link
        href={localizePath("/#contact")}
        className={`group relative flex items-center gap-3 py-3.5 bg-[#1a2744] text-white font-semibold text-sm shadow-xl shadow-[#1a2744]/30 hover:shadow-2xl hover:shadow-[#1a2744]/40 transition-all duration-300 ${isRTL
            ? "rounded-r-full pr-5 pl-4 hover:pr-7"
            : "rounded-l-full pl-5 pr-4 hover:pl-7"
          }`}
      >
        {/* Pulse ring */}
        <span
          className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 ${isRTL ? "right-3" : "left-3"}`}
        >
          <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
          <span className="relative block w-2 h-2 bg-emerald-400 rounded-full" />
        </span>

        {/* Chat icon */}
        <svg
          aria-hidden="true"
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12 ${isRTL ? "mr-2" : "ml-2"
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>

        <span className="whitespace-nowrap">{t.hero.stickyConsultation}</span>

        {/* Directional arrow */}
        <svg
          aria-hidden="true"
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${isRTL ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={arrowPath}
          />
        </svg>
      </Link>
    </div>
  );
}
