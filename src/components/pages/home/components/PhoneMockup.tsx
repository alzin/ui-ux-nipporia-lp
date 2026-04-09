"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { useMockupLoader } from "./hooks/useMockupLoader";
import MockupLoader from "./HeroMockups/MockupLoader";

const PHONE_ZOOM = 0.55;
const SCROLLBAR_MASK_PX = 18;

interface PhoneMockupProps {
  url?: string;
  videoSrc?: string;
  mediaType?: "url" | "video" | "mixed";
  isActive: boolean;
}

export default function PhoneMockup({ url, videoSrc, mediaType = "url", isActive }: PhoneMockupProps) {
  const { t } = useLanguage();
  const localeText = t.visualTransformation;
  const { isLoaded, showLoader, onMediaLoaded } = useMockupLoader(url, videoSrc);

  const zoomPercent = `${100 / PHONE_ZOOM}%`;
  const maskedZoomPercent = `calc(${zoomPercent} + ${SCROLLBAR_MASK_PX}px)`;

  return (
    <div
      className={`transition-all duration-700 ${
        isActive ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-8"
      }`}
    >
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

            {/* Screen */}
            <div
              className="relative overflow-hidden bg-white w-full max-w-[420px] md:max-w-[380px] mx-auto"
              style={{ aspectRatio: "1 / 2" }}
              dir="ltr"
            >
              {!isLoaded && showLoader && mediaType !== "video" && mediaType !== "mixed" && (
                <MockupLoader text={localeText.loadingPreview} size="sm" />
              )}

              {(mediaType === "video" || mediaType === "mixed") && videoSrc ? (
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="block w-full h-full object-cover transition-opacity duration-300"
                  style={{ opacity: isLoaded ? 1 : 0.96 }}
                  onLoadedData={onMediaLoaded}
                />
              ) : (mediaType === "video" || mediaType === "mixed") && !videoSrc ? (
                <div className="w-full h-full flex items-center justify-center bg-black/80" />
              ) : (
                <iframe
                  src={url}
                  title={localeText.mobilePreview}
                  className="block border-0 transition-opacity duration-300"
                  style={{
                    width: maskedZoomPercent,
                    height: maskedZoomPercent,
                    transform: `scale(${PHONE_ZOOM})`,
                    transformOrigin: "top left",
                    overflow: "auto",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    direction: "ltr",
                    opacity: isLoaded ? 1 : 0.96,
                  }}
                  onLoad={onMediaLoaded}
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  loading={isActive ? "eager" : "lazy"}
                  scrolling="yes"
                />
              )}

              {/* Screen reflection */}
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
