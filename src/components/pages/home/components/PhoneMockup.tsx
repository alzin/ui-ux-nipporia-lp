"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface PhoneMockupProps {
  url: string;
  isActive: boolean;
}

const PHONE_ZOOM_MOBILE = 0.55;
const SCROLLBAR_MASK_PX = 18;
const LOADER_VISIBLE_MS = 900;


export default function PhoneMockup({ url, isActive }: PhoneMockupProps) {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const phoneZoom = PHONE_ZOOM_MOBILE;
  const localeText = t.visualTransformation;

  const phoneZoomPercent = `${100 / phoneZoom}%`;
  const phoneZoomMaskedPercent = `calc(${phoneZoomPercent} + ${SCROLLBAR_MASK_PX}px)`;

  useEffect(() => {
    setIsLoaded(false);
    setShowLoader(true);

    const timer = window.setTimeout(() => {
      setShowLoader(false);
    }, LOADER_VISIBLE_MS);

    return () => window.clearTimeout(timer);
  }, [url]);

  return (
    <div
      className={`transition-all duration-700 ${
        isActive
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-90 translate-y-8"
      }`}
    >
      {/* Phone Frame */}
      <div className="relative w-full">
        {/* Outer frame */}
        <div className="bg-[#1c1c1e] rounded-[2.5rem] p-[6px] shadow-[0_30px_60px_-34px_rgba(2,6,23,0.9)] ring-1 ring-[#3a3a3e]">
          {/* Inner frame */}
          <div className="bg-black rounded-[2.2rem] overflow-hidden relative">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-[10px]">
              <div className="w-[90px] h-[26px] bg-black rounded-full flex items-center justify-center gap-2">
                <div className="w-[8px] h-[8px] rounded-full bg-[#1a1a2e] ring-1 ring-[#2a2a3e]" />
              </div>
            </div>

            {/* Screen content with iframe */}
            <div
              className="relative overflow-hidden bg-white w-full max-w-[420px] md:max-w-[380px] mx-auto"
              style={{ aspectRatio: "1 / 2" }}
              dir="ltr"
            >
              {/* Loading state */}
              {!isLoaded && showLoader && (
                <div className="absolute inset-0 bg-[#1c1c1e] flex items-center justify-center z-10">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-6 h-6 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
                    <span className="text-[10px] text-slate-400">
                      {localeText.loadingPreview}
                    </span>
                  </div>
                </div>
              )}

              <iframe
                src={url}
                title={localeText.mobilePreview}
                className="block border-0 transition-opacity duration-300"
                style={{
                  width: phoneZoomMaskedPercent,
                  height: phoneZoomMaskedPercent,
                  transform: `scale(${phoneZoom})`,
                  transformOrigin: "top left",
                  overflow: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  direction: "ltr",
                  opacity: isLoaded ? 1 : 0.96,
                }}
                onLoad={() => {
                  setIsLoaded(true);
                  setShowLoader(false);
                }}
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                loading={isActive ? "eager" : "lazy"}
                scrolling="yes"
              />

              {/* Subtle screen reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Home indicator */}
            <div className="flex justify-center py-[6px] bg-black">
              <div className="w-[100px] h-[4px] bg-[#555] rounded-full" />
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute -left-[2px] top-[80px] w-[3px] h-[30px] bg-[#2a2a2e] rounded-l-sm" />
        <div className="absolute -left-[2px] top-[120px] w-[3px] h-[50px] bg-[#2a2a2e] rounded-l-sm" />
        <div className="absolute -left-[2px] top-[175px] w-[3px] h-[50px] bg-[#2a2a2e] rounded-l-sm" />
        <div className="absolute -right-[2px] top-[130px] w-[3px] h-[60px] bg-[#2a2a2e] rounded-r-sm" />
      </div>
    </div>
  );
}
