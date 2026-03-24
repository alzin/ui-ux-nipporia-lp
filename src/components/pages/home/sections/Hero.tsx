"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TechLogoMarquee from "../components/TechLogoMarquee";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [mockupVisible, setMockupVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyCTA(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById("visual-examples");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setMockupVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-cream via-peach/50 to-lavender px-4 sm:px-6 lg:px-10 pb-32 sm:pb-32"
    >


      {/* Main content */}
      <div className="relative z-20 mx-auto w-full max-w-screen-xl pt-32 sm:pt-40 lg:pt-48">
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <h1 className="text-gray-800 font-bold text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.1] tracking-tight mb-6 max-w-4xl">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
              {t.hero.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-[clamp(1.2rem,3vw,1.8rem)] leading-relaxed mb-4 max-w-2xl">
            {t.hero.subtitle}
          </p>

          <p className="text-gray-500 text-base sm:text-lg mb-10">
            {t.hero.cta}
          </p>

          {/* Tech Logo Marquee */}
          <div className="mb-12 w-full overflow-hidden">
            <TechLogoMarquee />
          </div>
          {/* CTA Buttons - Stronger hierarchy */}
          <div className="w-full max-w-md sm:max-w-xl">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="group sm:flex-[1.25] inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 text-[15px] sm:text-base font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 active:translate-y-0"
              >
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
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

              <Link
                href="#visual-examples"
                className="sm:flex-1 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-purple-500 bg-white/85 px-8 py-4 text-[15px] sm:text-base font-semibold text-purple-700 backdrop-blur-sm transition-all duration-300 hover:bg-purple-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                {t.hero.secondaryButton}
              </Link>
            </div>
        </div>
      </div>
    </div>

      {/* ===================== Sticky CTAs (Responsive) ===================== */}

      {/* Desktop Sticky CTA (md+) - Right side minimal tab */}
      <div
        className={`hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-[9999] flex-col items-end gap-3 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          showStickyCTA && !mockupVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
        aria-hidden={!showStickyCTA || mockupVisible}
      >
        {/* Primary CTA - consultation tab */}
        <Link
          href="#contact"
          className="group relative flex items-center gap-3 pl-5 pr-4 py-3.5 rounded-l-full bg-[#1a2744] text-white font-semibold text-sm shadow-xl shadow-[#1a2744]/30 hover:shadow-2xl hover:shadow-[#1a2744]/40 transition-all duration-300 hover:pl-7"
        >
          {/* Pulse ring */}
          <span className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2">
            <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
            <span className="relative block w-2 h-2 bg-emerald-400 rounded-full" />
          </span>
          <svg
            className="w-4 h-4 flex-shrink-0 ml-2 transition-transform duration-300 group-hover:rotate-12"
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
          <svg className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>

      </div>

      {/* Mobile Sticky CTA (below md) - Bottom bar */}
      <div
        className={`md:hidden fixed left-0 right-0 bottom-3 z-[9999] px-4 transition-all duration-500 ease-out ${
          showStickyCTA && !mockupVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!showStickyCTA || mockupVisible}
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
