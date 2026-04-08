import { useEffect, useRef } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
  animationClass?: string;
}

// ─── Shared builder ───────────────────────────────────────────────────────────

function createStaggerObserver(
  onIntersect: (entry: IntersectionObserverEntry, idx: number) => void,
  options: Pick<ScrollAnimationOptions, "threshold" | "rootMargin">
) {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (!entry.isIntersecting) return;
        onIntersect(entry, idx);
      });
    },
    { threshold: options.threshold, rootMargin: options.rootMargin }
  );
}

// ─── Single-element hook ───────────────────────────────────────────────────────

/**
 * Attach to a container ref. When it scrolls into view, adds "visible" to the
 * container and staggers `.{animationClass}` children.
 */
export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -100px 0px",
    staggerDelay = 100,
    animationClass = "animate-fadeInUp",
  } = options;

  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = createStaggerObserver(
      (entry) => {
        entry.target.classList.add("visible");

        element.querySelectorAll(`.${animationClass}`).forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * staggerDelay);
        });

        observer.unobserve(entry.target);
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [threshold, rootMargin, staggerDelay, animationClass]);

  return elementRef;
};

// ─── Global selector hook ─────────────────────────────────────────────────────

/**
 * Observes every `.fade-in` element in the document and staggers them
 * as they scroll into view.
 */
export const useMultipleScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -100px 0px",
    staggerDelay = 200,
  } = options;

  useEffect(() => {
    const observer = createStaggerObserver(
      (entry, idx) => {
        setTimeout(() => {
          entry.target.classList.add("visible");
          (entry.target as HTMLElement).style.animation =
            "fadeInUp 0.6s ease forwards";
        }, idx * staggerDelay);

        observer.unobserve(entry.target);
      },
      { threshold, rootMargin }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, [threshold, rootMargin, staggerDelay]);
};
