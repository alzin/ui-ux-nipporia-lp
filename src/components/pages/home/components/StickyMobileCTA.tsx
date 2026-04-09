"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

type Props = { isVisible: boolean };

export default function StickyMobileCTA({ isVisible }: Props) {
  const { t } = useLanguage();

  return (
    <div
      className={`md:hidden fixed left-0 right-0 bottom-3 z-[9999] px-4 transition-all duration-500 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isVisible}
    >
      <div className="bg-white/95 backdrop-blur-xl border border-purple-100 shadow-2xl shadow-purple-500/20 rounded-2xl p-2">
        <div className="flex gap-2">
          <Link
            href="#contact"
            className="flex-1 text-center px-4 py-3 rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-500 font-semibold text-sm shadow-lg shadow-purple-500/30"
          >
            {t.hero.stickyConsultation}
          </Link>

          <Link
            href="#visual-examples"
            className="flex-1 text-center px-4 py-3 rounded-xl bg-white border-2 border-purple-200 text-purple-600 font-semibold text-[13px]"
          >
            {t.hero.stickyPortfolio}
          </Link>
        </div>
      </div>
    </div>
  );
}
