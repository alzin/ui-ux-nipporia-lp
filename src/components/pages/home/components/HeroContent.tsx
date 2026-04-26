"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import HeroServiceIcons from "./HeroServiceIcons";

export default function HeroContent() {
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar";

  return (
    <div
      className={`flex flex-col items-center lg:items-start text-center z-20 ${isRTL
        ? "lg:text-right lg:-mr-8 xl:-mr-12 lg:pl-8 xl:pl-12"
        : "lg:text-left lg:-ml-8 xl:-ml-12 lg:pr-8 xl:pr-12"
        }`}
    >
      {/* Kicker pill — service tagline as a badge above the title */}
      <div className="opacity-0 animate-fade-in-up mt-4 mb-5 [@media(min-width:1024px)_and_(max-height:800px)]:mt-2 [@media(min-width:1024px)_and_(max-height:800px)]:mb-3">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-purple-200/70 bg-white/70 backdrop-blur-sm px-5 py-2.5 shadow-sm shadow-purple-500/10">
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500" />
          </span>
          <span
            className="text-[15px] sm:text-[16px] font-semibold tracking-[0.01em] leading-none"
            style={{ backgroundImage: "linear-gradient(90deg, #9333EA 0%, #EC4899 50%, #06B6D4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            {t.hero.titleTagline}
          </span>
        </span>
      </div>

      {/* Title */}
      <h1 className="opacity-0 animate-fade-in-up font-bold text-[34px] sm:text-[44px] leading-[1.18] tracking-[-0.025em] mb-6 capitalize whitespace-pre-line [@media(min-width:1024px)_and_(max-height:800px)]:mb-4">
        <span
          className="text-transparent bg-clip-text"
          style={{ backgroundImage: "linear-gradient(90deg, #9333EA 0%, #EC4899 50%, #06B6D4 100%)" }}
        >
          {t.hero.title}
        </span>
      </h1>

      {/* Subtitle */}
      <p className="opacity-0 animate-fade-in-up text-[14.5px] sm:text-[15.5px] font-normal leading-[1.8] tracking-[0.005em] text-gray-600 mb-9 max-w-[500px] whitespace-pre-line [@media(min-width:1024px)_and_(max-height:800px)]:mb-5">
        {t.hero.subtitle}
      </p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full max-w-md sm:max-w-xl mx-auto lg:mx-0 flex justify-center lg:justify-start sm:mt-2"
      >
        <div
          className={`flex flex-col gap-4 ${isRTL ? "sm:flex-row-reverse lg:justify-start" : "sm:flex-row lg:justify-start"
            } w-full sm:w-auto`}
        >
          {/* Primary CTA */}
          <Link
            href="/#contact"
            className="group inline-flex w-full sm:w-[220px] h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 sm:px-8 text-[15px] sm:text-base font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 active:translate-y-0 whitespace-nowrap"
          >
            <svg
              className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
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
            {t.hero.primaryButton}
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/#visual-examples"
            className="group inline-flex w-full sm:w-[220px] h-14 items-center justify-center gap-2 rounded-full border-2 border-purple-500 bg-white/85 px-6 sm:px-8 text-[15px] sm:text-base font-semibold text-purple-700 backdrop-blur-sm transition-all duration-300 hover:bg-purple-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 whitespace-nowrap"
          >
            <svg
              className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M7 17L17 7M17 7H8M17 7V16"
              />
            </svg>
            {t.hero.secondaryButton}
          </Link>
        </div>
      </motion.div>

      {/* Mobile only: icons after CTAs */}
      <div className="w-full mt-14">
        <HeroServiceIcons />
      </div>
    </div>
  );
}
