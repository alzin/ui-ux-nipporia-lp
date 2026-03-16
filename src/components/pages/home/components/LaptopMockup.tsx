"use client";

import { useState } from "react";

interface LaptopMockupProps {
  url: string;
  isActive: boolean;
}

export default function LaptopMockup({ url, isActive }: LaptopMockupProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`transition-all duration-700 ${
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      {/* Laptop Screen */}
      <div className="relative">
        {/* Screen bezel */}
        <div className="bg-[#1c1c1e] rounded-t-2xl p-[8px] pb-0 shadow-2xl shadow-black/50">
          {/* Camera notch */}
          <div className="flex justify-center mb-[6px]">
            <div className="w-2 h-2 rounded-full bg-[#2a2a2e] ring-1 ring-[#3a3a3e]" />
          </div>

          {/* Browser chrome */}
          <div className="bg-[#2a2a2e] rounded-t-[4px] px-3 py-1.5 flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-2">
              <div className="bg-[#1c1c1e] rounded-md px-3 py-1 text-[10px] text-slate-400 font-mono truncate text-center">
                {url}
              </div>
            </div>
          </div>

          {/* Screen area with iframe */}
          <div
            className="relative bg-white overflow-hidden"
            style={{ width: "100%", aspectRatio: "16 / 10" }}
          >
            {/* Loading state */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-[#1c1c1e] flex items-center justify-center z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                  <span className="text-xs text-slate-400">Loading...</span>
                </div>
              </div>
            )}

            <iframe
              src={url}
              title="Desktop preview"
              className="w-full h-full border-0"
              style={{ width: "100%", height: "100%" }}
              onLoad={() => setIsLoaded(true)}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              loading="lazy"
            />

            {/* Subtle screen reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Laptop base / hinge */}
        <div className="relative">
          {/* Hinge */}
          <div className="h-[6px] bg-gradient-to-b from-[#2a2a2e] to-[#3a3a3e]" />
          {/* Base */}
          <div
            className="bg-gradient-to-b from-[#c0c0c4] to-[#a8a8ac] mx-auto"
            style={{
              width: "110%",
              marginLeft: "-5%",
              height: "12px",
              borderRadius: "0 0 12px 12px",
            }}
          >
            {/* Trackpad indent */}
            <div className="flex justify-center pt-[2px]">
              <div className="w-16 h-[3px] bg-[#b0b0b4] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
