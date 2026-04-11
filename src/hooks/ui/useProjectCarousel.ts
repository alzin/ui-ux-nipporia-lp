"use client";

import { useState } from "react";
import { projects, type Project } from "@/content/home/projectData";

interface UseProjectCarouselReturn {
  activeIndex: number;
  isTransitioning: boolean;
  activeProject: Project;
  handleSelect: (index: number) => void;
  handlePrev: () => void;
  handleNext: () => void;
}

export function useProjectCarousel(): UseProjectCarouselReturn {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = (index: number) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    handleSelect(activeIndex === 0 ? projects.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    handleSelect(activeIndex === projects.length - 1 ? 0 : activeIndex + 1);
  };

  return {
    activeIndex,
    isTransitioning,
    activeProject: projects[activeIndex],
    handleSelect,
    handlePrev,
    handleNext,
  };
}
