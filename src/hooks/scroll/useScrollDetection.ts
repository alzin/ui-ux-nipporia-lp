"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the page has scrolled past `threshold` pixels.
 * Uses rAF to debounce scroll events.
 */
export const useScrollDetection = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > threshold);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [threshold]);

  return scrolled;
};
