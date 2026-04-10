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
    let sectionObserver: IntersectionObserver | null = null;
    let retryFrameId: number | null = null;
    let retries = 0;
    const maxRetries = 120;

    const disconnectObserver = () => {
      if (sectionObserver) {
        sectionObserver.disconnect();
        sectionObserver = null;
      }
    };

    const connectObserver = () => {
      const target = document.getElementById(hideWhenSectionVisibleId);

      if (!target) {
        if (retries < maxRetries) {
          retries += 1;
          retryFrameId = window.requestAnimationFrame(connectObserver);
        } else {
          setIsHiddenSectionVisible(false);
        }
        return;
      }

      disconnectObserver();
      sectionObserver = new IntersectionObserver(
        ([entry]) => setIsHiddenSectionVisible(entry.isIntersecting),
        { threshold: sectionThreshold },
      );
      sectionObserver.observe(target);
    };

    connectObserver();

    return () => {
      if (retryFrameId !== null) {
        window.cancelAnimationFrame(retryFrameId);
      }
      disconnectObserver();
    };
  }, [hideWhenSectionVisibleId, sectionThreshold]);

  return {
    isVisible: isPastThreshold && !isHiddenSectionVisible,
    isPastThreshold,
    isHiddenSectionVisible,
  };
};
