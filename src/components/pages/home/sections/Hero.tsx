"use client";

import Link from "next/link";
import TechLogoMarquee from "../components/TechLogoMarquee";
import { useLanguage } from "@/i18n/LanguageContext";
import { useFixedActionsVisibility } from "@/hooks/useFixedActionsVisibility";
import { motion } from "framer-motion";

export default function Hero() {
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar";
  const { isVisible: showStickyCTA } = useFixedActionsVisibility({
    scrollThreshold: 300,
    hideWhenSectionVisibleId: "visual-examples",
    sectionThreshold: 0.15,
  });

  const stickyArrowPath = isRTL ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7";

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-cream via-peach/50 to-lavender px-4 sm:px-6 lg:px-10 pb-32 sm:pb-32"
    >
      <div className="relative z-20 mx-auto w-full max-w-screen-xl pt-32 sm:pt-40 lg:pt-48">
        <div className="flex flex-col items-center text-center">
          {/* LCP Element: Removed Framer Motion, using pure CSS animation */}
          <h1 className="opacity-0 animate-fade-in-up text-gray-800 font-bold text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.1] tracking-tight mb-6 max-w-4xl">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
              {t.hero.title}
            </span>
          </h1>

          {/* Subtitle: Pure CSS animation with delay */}
          <p className="opacity-0 animate-fade-in-up-delay text-gray-600 text-[clamp(1.2rem,3vw,1.8rem)] leading-relaxed mb-4 max-w-2xl">
            {t.hero.subtitle}
          </p>

          <p className="opacity-0 animate-fade-in-up-delay text-gray-500 text-base sm:text-lg mb-10">
            {t.hero.cta}
          </p>

          {/* We can keep motion for secondary elements below the fold/LCP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 w-full overflow-hidden"
          >
            <TechLogoMarquee />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full max-w-md sm:max-w-xl"
          >
            <div
              className={`flex flex-col gap-4 ${isRTL ? "sm:flex-row-reverse" : "sm:flex-row"}`}
            >
              {/* Buttons remain the same */}
              <Link href="#contact" className="...">
                {t.hero.primaryButton}
              </Link>
              <Link href="#visual-examples" className="...">
                {t.hero.secondaryButton}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sticky CTAs remain exactly the same */}
      <div
        className={`hidden md:flex fixed top-1/2 -translate-y-1/2 z-[9999] flex-col gap-3 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isRTL ? "left-0 items-start" : "right-0 items-end"} ${showStickyCTA ? "translate-x-0 opacity-100" : isRTL ? "-translate-x-full opacity-0 pointer-events-none" : "translate-x-full opacity-0 pointer-events-none"}`}
        aria-hidden={!showStickyCTA}
      >
        <Link
          href="#contact"
          className={`group relative flex items-center gap-3 py-3.5 bg-[#1a2744] text-white font-semibold text-sm shadow-xl shadow-[#1a2744]/30 hover:shadow-2xl hover:shadow-[#1a2744]/40 transition-all duration-300 ${isRTL ? "rounded-r-full pr-5 pl-4 hover:pr-7" : "rounded-l-full pl-5 pr-4 hover:pl-7"}`}
        >
          <span
            className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 ${isRTL ? "right-3" : "left-3"}`}
          >
            <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
            <span className="relative block w-2 h-2 bg-emerald-400 rounded-full" />
          </span>
          <svg
            className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12 ${isRTL ? "mr-2" : "ml-2"}`}
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
          <svg
            className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${isRTL ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={stickyArrowPath}
            />
          </svg>
        </Link>
      </div>

      <div
        className={`md:hidden fixed left-0 right-0 bottom-3 z-[9999] px-4 transition-all duration-500 ease-out ${showStickyCTA ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"}`}
        aria-hidden={!showStickyCTA}
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
              className="flex-1 text-center px-4 py-3 rounded-xl bg-white border-2 border-purple-200 text-purple-600 font-semibold text-sm"
            >
              {t.hero.stickyPortfolio}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
