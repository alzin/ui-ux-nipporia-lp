"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const title = "ビジネス成長を生むウェブサイトへ変革します。";
  const subtitle = "プロ品質のデザインで、集客を伸ばす。";

  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyCTA(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-cream via-peach/50 to-lavender px-4 sm:px-6 lg:px-10 pb-32 sm:pb-32"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-[100px] -left-[100px] rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl animate-float" />
        <div
          className="absolute w-[400px] h-[400px] top-1/2 -right-[100px] rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute w-[300px] h-[300px] bottom-[100px] left-1/3 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] left-[10%] w-4 h-4 bg-purple-500 rounded-full opacity-60 animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute top-[30%] right-[15%] w-3 h-3 bg-cyan-500 rounded-full opacity-60 animate-bounce"
          style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-[60%] left-[20%] w-5 h-5 bg-pink-500 rounded-full opacity-50 animate-bounce"
          style={{ animationDuration: "3.5s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-[70%] right-[25%] w-3 h-3 bg-yellow-500 rounded-full opacity-60 animate-bounce"
          style={{ animationDuration: "2.8s", animationDelay: "1.5s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 mx-auto w-full max-w-screen-xl pt-32 sm:pt-40 lg:pt-48">
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <h1 className="text-gray-800 font-bold text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.1] tracking-tight mb-6 max-w-4xl">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
              {title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-[clamp(1.2rem,3vw,1.8rem)] leading-relaxed mb-4 max-w-2xl">
            {subtitle}
          </p>

          <p className="text-gray-500 text-base sm:text-lg mb-10">
            無料相談（60分）・最短7日で改善案をご提案
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {["UI/UX", "Next.js", "SEO", "Google Ads"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200 text-gray-700 text-sm font-medium shadow-sm hover:shadow-md hover:border-purple-400 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
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
                無料相談を申し込む
              </Link>

              <Link
                href="#transformation"
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
                制作実績を見る
              </Link>
            </div>
        </div>
      </div>
    </div>

      {/* ===================== Sticky CTAs (Responsive) ===================== */}

      {/* Desktop Sticky CTA (md+) - Right side vertical */}
      <div
        className={`hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-[9999] transition-all duration-500 ease-out ${
          showStickyCTA
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
        aria-hidden={!showStickyCTA}
      >
        <div className="relative">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-xl rounded-l-3xl" />

          {/* Main container */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-l-2xl shadow-2xl shadow-purple-500/20 border border-purple-100 border-r-0 overflow-hidden">
            {/* Gradient accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500" />

            {/* Content */}
            <div className="flex flex-col gap-3 p-4 pl-5">
              {/* Primary CTA */}
              <Link
                href="#contact"
                className="group relative flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg
                  className="relative w-5 h-5 flex-shrink-0"
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
                <span className="relative whitespace-nowrap">無料相談</span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#transformation"
                className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white border-2 border-purple-200 text-purple-600 font-semibold text-sm hover:border-purple-500 hover:bg-purple-50 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
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
                <span className="whitespace-nowrap">実績を見る</span>
              </Link>

              {/* Subtle indicator */}
              <div className="flex items-center justify-center gap-1.5 pt-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-gray-500">受付中</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA (below md) - Bottom bar */}
      <div
        className={`md:hidden fixed left-0 right-0 bottom-3 z-[9999] px-4 transition-all duration-500 ease-out ${
          showStickyCTA
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
              無料相談
            </Link>

            <Link
              href="#transformation"
              className="flex-1 text-center px-4 py-3 rounded-xl bg-white border-2 border-purple-200 text-purple-600 font-semibold text-sm"
            >
              実績を見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
