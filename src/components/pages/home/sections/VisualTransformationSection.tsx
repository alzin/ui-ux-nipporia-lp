"use client";

import { useState } from "react";
import SectionTitle from "@/components/common/components/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import LaptopMockup from "../components/LaptopMockup";
import PhoneMockup from "../components/PhoneMockup";
import { projects } from "../components/ProjectData";

export default function VisualTransformationSection() {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    staggerDelay: 230,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = (index: number) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const activeProject = projects[activeIndex];

  const handlePrev = () => {
    if (isTransitioning) return;
    const newIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
    handleSelect(newIndex);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    const newIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
    handleSelect(newIndex);
  };

  return (
    <section
      id="visual-examples"
      className="py-8 md:py-12 bg-gradient-to-br from-white via-purple-50/40 to-cyan-50/40 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl" />

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle
          title="制作実績"
          description="クライアント様の実際のプロジェクトをご覧ください"
        />

        {/* Device Mockups and Navigation */}
        <div className="animate-slide relative group mb-12 px-2 md:px-14">
          
          {/* Main Device Mockups */}
          <div className="flex items-center justify-center w-full mx-auto">
            {/* Laptop */}
            <div className="hidden md:block w-full">
              <LaptopMockup
                url={activeProject.desktopUrl}
                isActive={!isTransitioning}
              />
            </div>

            {/* Phone */}
            <div className="block md:hidden flex-shrink-0 transform scale-90">
              <PhoneMockup
                url={activeProject.mobileUrl}
                isActive={!isTransitioning}
              />
            </div>
          </div>

          {/* Floating Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 lg:left-0 top-[40%] md:top-1/2 -translate-y-1/2 z-30 p-2.5 md:p-4 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 text-purple-600 shadow-xl shadow-purple-900/10 hover:bg-white hover:text-purple-700 transition-all duration-500 hover:scale-110 opacity-0 group-hover:opacity-100 sm:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="前のプロジェクト"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 lg:right-0 top-[40%] md:top-1/2 -translate-y-1/2 z-30 p-2.5 md:p-4 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 text-purple-600 shadow-xl shadow-purple-900/10 hover:bg-white hover:text-purple-700 transition-all duration-500 hover:scale-110 opacity-0 group-hover:opacity-100 sm:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="次のプロジェクト"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>


      </div>
    </section>
  );
}
