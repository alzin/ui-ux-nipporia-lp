"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { useFixedActionsVisibility } from "@/hooks/useFixedActionsVisibility";
import HeroMockups from "../components/HeroMockups";
import HeroContent from "../components/HeroContent";
import StickyDesktopCTA from "../components/StickyDesktopCTA";
import StickyMobileCTA from "../components/StickyMobileCTA";

export default function Hero() {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  const { isVisible: showStickyCTA } = useFixedActionsVisibility({
    scrollThreshold: 300,
    hideWhenSectionVisibleId: "visual-examples",
    sectionThreshold: 0.15,
  });

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-cream via-peach/50 to-lavender px-4 sm:px-6 lg:px-10 pb-32 sm:pb-32 [@media(min-width:1024px)_and_(max-height:800px)]:pb-16"
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

      <StickyDesktopCTA isVisible={showStickyCTA} />
      <StickyMobileCTA isVisible={showStickyCTA} />
    </section>
  );
}
