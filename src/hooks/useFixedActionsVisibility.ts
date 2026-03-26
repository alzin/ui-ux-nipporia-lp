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
    let observedElement: HTMLElement | null = null;
    let sectionObserver: IntersectionObserver | null = null;

    const disconnectSectionObserver = () => {
      if (sectionObserver) {
        sectionObserver.disconnect();
        sectionObserver = null;
      }
      observedElement = null;
    };

    const connectSectionObserver = () => {
      const target = document.getElementById(hideWhenSectionVisibleId);

      if (!target) {
        disconnectSectionObserver();
        setIsHiddenSectionVisible(false);
        return;
      }

      if (observedElement === target && sectionObserver) return;

      disconnectSectionObserver();

      observedElement = target;
      sectionObserver = new IntersectionObserver(
        ([entry]) => setIsHiddenSectionVisible(entry.isIntersecting),
        { threshold: sectionThreshold },
      );
      sectionObserver.observe(target);
    };

    connectSectionObserver();

    const mutationObserver = new MutationObserver(connectSectionObserver);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      disconnectSectionObserver();
    };
  }, [hideWhenSectionVisibleId, sectionThreshold]);

  return {
    isVisible: isPastThreshold && !isHiddenSectionVisible,
    isPastThreshold,
    isHiddenSectionVisible,
  };
};
