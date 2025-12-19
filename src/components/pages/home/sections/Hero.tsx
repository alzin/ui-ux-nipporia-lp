"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const title = "ビジネス成長を生むウェブサイトへ変革します。";
  const subtitle = "プロ品質のデザインで、集客を伸ばす。";

  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyCTA(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="
        relative min-h-[100dvh] overflow-hidden bg-[#060712]
        px-4 sm:px-6 lg:px-10
        pb-28 sm:pb-32
      "
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/75" />

      {/* Mesh gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[70vw] h-[70vw] -top-[25vw] -left-[25vw] rounded-full bg-primary/18 blur-3xl animate-pulse lg:w-[45vw] lg:h-[45vw] lg:-top-[12vw] lg:-left-[12vw]" />
        <div className="absolute w-[60vw] h-[60vw] bottom-[-25vw] right-[-25vw] rounded-full bg-primary/10 blur-3xl animate-pulse delay-1000 lg:w-[35vw] lg:h-[35vw] lg:bottom-[-10vw] lg:right-[-10vw]" />
      </div>

      {/* Main layout */}
      <div className="relative z-20 mx-auto w-full max-w-screen-2xl pt-20 sm:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* MOBILE: Image first (better hook), DESKTOP: text left */}
          <div className="order-2 lg:order-1 lg:col-span-4">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-5">
                <h1 className="text-white font-bold text-[clamp(2.2rem,8.2vw,4.7rem)] leading-[1.04] tracking-tight drop-shadow-2xl">
                  {title}
                </h1>

                <p className="text-white/92 text-[clamp(1.15rem,4.4vw,2.05rem)] leading-relaxed">
                  {subtitle}
                </p>

                <p className="text-[0.98rem] sm:text-[1.12rem] text-white/65">
                  無料相談（60分）・最短7日で改善案をご提案
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 text-[0.95rem] sm:text-[1.05rem] text-gray-200/90">
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
                  UI/UX
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
                  Next.js
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
                  SEO
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
                  Google Ads
                </span>
              </div>

              {/* Mobile-first CTAs: full width, comfortable tap size */}
              <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4">
                <Link
                  href="#contact"
                  className="
                    w-full sm:w-auto text-center
                    px-10 py-4 sm:py-5 rounded-full text-white
                    bg-gradient-to-r from-primary to-primary-dark
                    font-semibold text-[1.05rem] sm:text-[1.12rem]
                    shadow-[0_10px_30px_rgba(99,102,241,0.35)]
                    hover:shadow-[0_14px_40px_rgba(99,102,241,0.5)]
                    hover:-translate-y-[2px]
                    transition-all duration-300
                  "
                >
                  無料相談を申し込む
                </Link>

                <Link
                  href="#transformation"
                  className="
                    w-full sm:w-auto text-center
                    px-10 py-4 sm:py-5 rounded-full
                    border-2 border-primary
                    text-primary bg-white/5 font-semibold
                    text-[1.05rem] sm:text-[1.12rem]
                    hover:bg-primary hover:text-white
                    transition-all duration-300
                  "
                >
                  変革事例を見る
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT / HERO IMAGE */}
          <div className="order-1 lg:order-2 lg:col-span-8">
            <div
              className="
                relative w-full
                h-[46vh] min-h-[320px]
                sm:h-[52vh] sm:min-h-[380px]
                lg:h-[82vh] lg:min-h-[640px]
                rounded-3xl overflow-hidden
                border border-white/10
                shadow-[0_30px_90px_rgba(0,0,0,0.6)]
                bg-black/20
              "
            >
              <Image
                src="/hero-bg.jpg"
                alt="WebTransform hero visual"
                fill
                priority
                quality={98}
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover object-[60%_50%]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-black/18 pointer-events-none" />
              <div className="absolute inset-0 bg-white/3 pointer-events-none" />
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/14 blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA (mobile-safe, centered, respects sides) */}
      <div
        className={[
          "fixed bottom-0 left-0 w-full z-[9999]",
          "bg-black/70 backdrop-blur-md",
          "transition-all duration-300",
          showStickyCTA
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!showStickyCTA}
      >
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="#contact"
              className="
                w-full sm:w-auto text-center
                px-10 py-4 sm:py-5 rounded-full text-white
                bg-gradient-to-r from-primary to-primary-dark
                font-semibold text-[1.05rem] sm:text-[1.12rem]
                shadow-[0_8px_25px_rgba(99,102,241,0.3)]
                hover:shadow-[0_12px_30px_rgba(99,102,241,0.45)]
                hover:-translate-y-[2px]
                transition-all duration-300
              "
            >
              無料相談を申し込む
            </Link>

            <Link
              href="#transformation"
              className="
                w-full sm:w-auto text-center
                px-10 py-4 sm:py-5 rounded-full
                border-2 border-primary text-primary
                bg-white/5 font-semibold
                text-[1.05rem] sm:text-[1.12rem]
                hover:bg-primary hover:text-white
                transition-all duration-300
              "
            >
              変革事例を見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
