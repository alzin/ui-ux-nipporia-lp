"use client";

import Link from "next/link";
import HeroMockups from "../components/HeroMockups";
import { useLanguage } from "@/i18n/LanguageContext";
import { useFixedActionsVisibility } from "@/hooks/useFixedActionsVisibility";
import { motion } from "framer-motion";
import { heroServices } from "@/content/home/heroServices";

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
      className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-cream via-peach/50 to-lavender px-4 sm:px-6 lg:px-10 pb-32 sm:pb-32 [@media(min-width:1024px)_and_(max-height:800px)]:pb-16"
    >
      <div className="relative z-20 mx-auto w-full max-w-screen-xl pt-28 sm:pt-36 lg:pt-40 [@media(min-width:1024px)_and_(max-height:800px)]:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 [@media(min-width:1024px)_and_(max-height:800px)]:gap-4 items-center">

          {/* Text Column */}
          <div className={`flex flex-col items-center lg:items-start text-center z-20 ${isRTL
            ? "lg:text-right lg:-mr-8 xl:-mr-12 lg:pl-8 xl:pl-12"
            : "lg:text-left lg:-ml-8 xl:-ml-12 lg:pr-8 xl:pr-12"
            }`}>
            {/* Title */}
            <h1 className="opacity-0 animate-fade-in-up text-gray-800 font-bold text-[clamp(2rem,3.5vw,3rem)] leading-[1.2] tracking-tight mb-8 mt-4 [@media(min-width:1024px)_and_(max-height:800px)]:mb-4 [@media(min-width:1024px)_and_(max-height:800px)]:mt-2">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
                {t.hero.title}
              </span>
            </h1>

            {/* Service Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex w-full justify-center lg:justify-start flex-nowrap gap-4 sm:gap-4 lg:gap-5 mb-10 [@media(min-width:1024px)_and_(max-height:800px)]:mb-6 overflow-x-auto pb-4 hide-scrollbar"
            >
              {heroServices.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 flex-shrink-0 group cursor-pointer w-[104px] sm:w-[128px] lg:min-w-[128px] [@media(min-width:1024px)_and_(max-height:800px)]:min-w-[100px]">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 [@media(min-width:1024px)_and_(max-height:800px)]:w-16 [@media(min-width:1024px)_and_(max-height:800px)]:h-16 transform transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:drop-shadow-xl drop-shadow-md lg:mx-auto text-purple-600">
                    <item.Icon className="w-full h-full" />
                  </div>
                  <span className="text-xs sm:text-sm lg:text-[15px] font-semibold text-gray-700 text-center leading-tight whitespace-nowrap mt-1 w-full">{t.hero.services[item.translationIndex]}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full max-w-md sm:max-w-xl mx-auto lg:mx-0 flex justify-center lg:justify-start"
            >
              <div
                className={`flex flex-col gap-4 ${isRTL ? "sm:flex-row-reverse lg:justify-start" : "sm:flex-row lg:justify-start"} w-full sm:w-auto`}
              >
                {/* Primary CTA */}
                <Link
                  href="#contact"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 sm:px-8 py-3.5 sm:py-4 text-[15px] sm:text-base font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 active:translate-y-0"
                >
                  <svg className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {t.hero.primaryButton}
                </Link>

                {/* Secondary CTA */}
                <Link
                  href="#visual-examples"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-purple-500 bg-white/85 px-6 sm:px-8 py-3.5 sm:py-4 text-[15px] sm:text-base font-semibold text-purple-700 backdrop-blur-sm transition-all duration-300 hover:bg-purple-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                >
                  <svg className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                  {t.hero.secondaryButton}
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Mockups Column */}
          <div className={`w-full flex items-center justify-center lg:justify-end h-full`}>
            <div className={`w-full max-w-[500px] sm:max-w-[600px] lg:max-w-none lg:w-[110%] xl:w-[120%] 2xl:w-[130%] ${isRTL
              ? "-ml-4 sm:-ml-8 lg:-ml-24 xl:-ml-32"
              : "-mr-4 sm:-mr-8 lg:-mr-24 xl:-mr-32"
              }`}>
              <HeroMockups />
            </div>
          </div>

        </div>
      </div>

      {/* ===================== Sticky CTAs (Responsive) ===================== */}

      {/* Desktop Sticky CTA (md+) - Right side minimal tab */}
      <div
        className={`hidden md:flex fixed top-1/2 -translate-y-1/2 z-[9999] flex-col gap-3 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isRTL ? "left-0 items-start" : "right-0 items-end"
          } ${showStickyCTA
            ? "translate-x-0 opacity-100"
            : isRTL
              ? "-translate-x-full opacity-0 pointer-events-none"
              : "translate-x-full opacity-0 pointer-events-none"
          }`}
        aria-hidden={!showStickyCTA}
      >
        <Link
          href="#contact"
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
          <svg
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
          <svg
            className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${isRTL
              ? "group-hover:-translate-x-0.5"
              : "group-hover:translate-x-0.5"
              }`}
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

      {/* Mobile Sticky CTA (below md) - Bottom bar */}
      <div
        className={`md:hidden fixed left-0 right-0 bottom-3 z-[9999] px-4 transition-all duration-500 ease-out ${showStickyCTA
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0 pointer-events-none"
          }`}
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
              className="flex-1 text-center px-4 py-3 rounded-xl bg-white border-2 border-purple-200 text-purple-600 font-semibold text-[13px]"
            >
              {t.hero.stickyPortfolio}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
