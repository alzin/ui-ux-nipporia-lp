"use client";

import { useState } from "react";
import SectionTitle from "@/components/common/components/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import LaptopMockup from "../components/LaptopMockup";
import PhoneMockup from "../components/PhoneMockup";
import ProjectNav from "../components/ProjectNav";
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

  return (
    <section
      id="visual-examples"
      className="py-8 md:py-12 bg-gradient-to-br from-white via-purple-50/40 to-cyan-50/40 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle
          title="制作実績"
          description="クライアント様の実際のプロジェクトをご覧ください"
        />

        {/* Device Mockups */}
        <div className="animate-slide flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-12">
          {/* Laptop */}
          <div className="w-full max-w-[640px] lg:flex-1">
            <LaptopMockup
              url={activeProject.desktopUrl}
              isActive={!isTransitioning}
            />
          </div>

          {/* Phone */}
          <div className="flex-shrink-0">
            <PhoneMockup
              url={activeProject.mobileUrl}
              isActive={!isTransitioning}
            />
          </div>
        </div>

        {/* Project Navigation */}
        <div className="animate-slide">
          <ProjectNav
            projects={projects}
            activeIndex={activeIndex}
            onSelect={handleSelect}
          />
        </div>
      </div>
    </section>
  );
}
