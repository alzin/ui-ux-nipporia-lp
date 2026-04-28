"use client";

import dynamic from "next/dynamic";
import { useLanguage } from "@/i18n/LanguageContext";
import HeroContent from "../components/HeroContent";

const HeroMockups = dynamic(() => import("../components/HeroMockups"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] sm:h-[600px] lg:h-[700px]" />
  ),
});

export default function Hero() {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] overflow-hidden px-4 sm:px-6 lg:px-10 pb-32 sm:pb-32 [@media(min-width:1024px)_and_(max-height:800px)]:pb-16"
      style={{ background: "linear-gradient(135deg, #F3E8FF 0%, rgba(232, 213, 242, 0) 50%, #E8D5F2 100%)" }}
    >
      <div className="relative z-20 mx-auto w-full max-w-screen-xl pt-28 sm:pt-36 lg:pt-40 [@media(min-width:1024px)_and_(max-height:800px)]:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 [@media(min-width:1024px)_and_(max-height:800px)]:gap-4 items-center">

          <HeroContent />

          {/* Mockups column */}
          <div className="w-full flex items-center justify-center lg:justify-end h-full">
            <div
              className={`w-full max-w-[500px] sm:max-w-[600px] lg:max-w-none lg:w-[110%] xl:w-[120%] 2xl:w-[130%] ${
                isRTL
                  ? "-ml-4 sm:-ml-8 lg:-ml-24 xl:-ml-32"
                  : "-mr-4 sm:-mr-8 lg:-mr-24 xl:-mr-32"
              }`}
            >
              <HeroMockups />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
