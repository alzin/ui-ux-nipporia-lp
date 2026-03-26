"use client";

import { useEffect, useState } from "react";

interface UseFixedActionsVisibilityOptions {
  scrollThreshold?: number;
  hideWhenSectionVisibleId?: string;
  sectionThreshold?: number;
}

export const useFixedActionsVisibility = (
  options: UseFixedActionsVisibilityOptions = {},
) => {
  const {
    scrollThreshold = 300,
    hideWhenSectionVisibleId = "visual-examples",
    sectionThreshold = 0.15,
  } = options;

  const [isPastThreshold, setIsPastThreshold] = useState(false);
  const [isHiddenSectionVisible, setIsHiddenSectionVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsPastThreshold(window.scrollY > scrollThreshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollThreshold]);

  useEffect(() => {
    const target = document.getElementById(hideWhenSectionVisibleId);
    if (!target) {
      setIsHiddenSectionVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsHiddenSectionVisible(entry.isIntersecting),
      { threshold: sectionThreshold },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [hideWhenSectionVisibleId, sectionThreshold]);

  return {
    isVisible: isPastThreshold && !isHiddenSectionVisible,
    isPastThreshold,
    isHiddenSectionVisible,
  };
};
