"use client";

import { useState } from "react";

interface PhoneMockupProps {
  url: string;
  isActive: boolean;
}

export default function PhoneMockup({ url, isActive }: PhoneMockupProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`transition-all duration-700 ${
        isActive
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-90 translate-y-8"
      }`}
    >
      {/* Phone Frame */}
      <div className="relative">
        {/* Outer frame */}
        <div className="bg-[#1c1c1e] rounded-[2.5rem] p-[6px] shadow-2xl shadow-black/60 ring-1 ring-[#3a3a3e]">
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
              className="relative overflow-hidden bg-white"
              style={{ width: "240px", height: "480px" }}
            >
              {/* Loading state */}
              {!isLoaded && (
                <div className="absolute inset-0 bg-[#1c1c1e] flex items-center justify-center z-10">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-6 h-6 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                    <span className="text-[10px] text-slate-400">
                      Loading...
                    </span>
                  </div>
                </div>
              )}

              {/* Scale trick: render at 390px then scale to 240px */}
              <div
                style={{
                  width: "390px",
                  height: "780px",
                  transform: "scale(0.615)",
                  transformOrigin: "top left",
                }}
              >
                <iframe
                  src={url}
                  title="Mobile preview"
                  className="border-0"
                  style={{ width: "390px", height: "780px" }}
                  onLoad={() => setIsLoaded(true)}
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  loading="lazy"
                />
              </div>

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
