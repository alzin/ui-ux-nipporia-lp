"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface LaptopMockupProps {
  url: string;
  isActive: boolean;
}

const LOADER_VISIBLE_MS = 900;

const DESKTOP_ZOOM_LG = 0.59;
const DESKTOP_ZOOM_MD = 0.52;
const DESKTOP_ZOOM_SM = 0.43;
const DESKTOP_ZOOM_XS = 0.20;

const getZoomByViewport = () => {
  if (typeof window === "undefined") return DESKTOP_ZOOM_LG;
  const width = window.innerWidth;
  if (width < 420) return DESKTOP_ZOOM_XS;
  if (width < 768) return DESKTOP_ZOOM_SM;
  if (width < 1024) return DESKTOP_ZOOM_MD;
  return DESKTOP_ZOOM_LG;
};

export default function LaptopMockup({ url, isActive }: LaptopMockupProps) {
  const { lang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [desktopZoom, setDesktopZoom] = useState(DESKTOP_ZOOM_LG);

  const localized = {
    ja: {
      viewSite: "サイトを見る",
      loadingPreview: "プレビューを読み込み中...",
      desktopPreview: "デスクトッププレビュー",
    },
    en: {
      viewSite: "View site",
      loadingPreview: "Loading preview...",
      desktopPreview: "Desktop preview",
    },
    ar: {
      viewSite: "عرض الموقع",
      loadingPreview: "جارٍ تحميل المعاينة...",
      desktopPreview: "معاينة سطح المكتب",
    },
  } as const;

  const localeText = localized[lang];

  useEffect(() => {
    const updateZoom = () => setDesktopZoom(getZoomByViewport());
    updateZoom();
    window.addEventListener("resize", updateZoom);
    return () => window.removeEventListener("resize", updateZoom);
  }, []);

  const desktopZoomPercent = `${100 / desktopZoom}%`;

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
          : "opacity-0 scale-[0.99] -translate-y-1"
      }`}
    >
      {/* Laptop Screen */}
      <div className="relative w-full">
        {/* Screen bezel */}
        <div className="bg-[#1c1c1e] rounded-t-[1.2rem] md:rounded-t-[1.5rem] p-[6px] md:p-[8px] pb-0 shadow-[0_24px_58px_-30px_rgba(2,6,23,0.82)] ring-1 ring-white/5">
          {/* Camera notch */}
          <div className="flex justify-center mb-[6px]">
            <div className="w-2 h-2 rounded-full bg-[#2a2a2e] ring-1 ring-[#3a3a3e]" />
          </div>

          {/* Browser chrome */}
          <div className="bg-[#2a2a2e] rounded-t-[6px] px-2 md:px-3 py-1 md:py-1.5 flex items-center gap-1.5 md:gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-1.5 md:mx-2 min-w-0">
              <div className="bg-[#1c1c1e] rounded-md px-2 md:px-3 py-1 text-[9px] md:text-[10px] text-slate-400 font-mono truncate text-center">
                {url}
              </div>
            </div>
            {/* External link icon */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title={localeText.viewSite}
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* Screen area with iframe */}
          <div
            className="relative bg-white overflow-hidden rounded-b-[8px] aspect-[16/8.8] md:aspect-[16/7.5]"
            style={{ width: "100%" }}
            dir="ltr"
          >
            {/* Loading state */}
            {!isLoaded && showLoader && (
              <div className="absolute inset-0 bg-[#1c1c1e] flex items-center justify-center z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
                  <span className="text-xs text-slate-400">{localeText.loadingPreview}</span>
                </div>
              </div>
            )}

            <iframe
              src={url}
              title={localeText.desktopPreview}
              className="block border-0 transition-opacity duration-300"
              style={{
                width: desktopZoomPercent,
                height: desktopZoomPercent,
                transform: `scale(${desktopZoom})`,
                transformOrigin: "top left",
                overflow: "hidden",
                scrollbarWidth: "none",
                direction: "ltr",
                opacity: isLoaded ? 1 : 0.96,
              }}
              onLoad={() => {
                setIsLoaded(true);
                setShowLoader(false);
              }}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              loading={isActive ? "eager" : "lazy"}
            />

            {/* Subtle screen reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Laptop base / hinge */}
        <div className="relative">
          {/* Hinge */}
          <div className="h-[4px] md:h-[5px] bg-gradient-to-b from-[#2a2a2e] to-[#3a3a3e]" />
          {/* Base */}
          <div
            className="bg-gradient-to-b from-[#c8c8cc] to-[#a8a8ac] mx-auto shadow-[0_18px_28px_-25px_rgba(15,23,42,0.9)]"
            style={{
              width: "104%",
              marginLeft: "-2%",
              height: "9px",
              borderRadius: "0 0 9px 9px",
            }}
          >
            {/* Trackpad indent */}
            <div className="flex justify-center pt-[2px]">
              <div className="w-12 md:w-16 h-[3px] bg-[#b0b0b4] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
