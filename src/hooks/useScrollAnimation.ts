import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
  animationClass?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -100px 0px",
    staggerDelay = 100,
    animationClass = "animate-fadeInUp"
  } = options;

  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observerOptions = {
      threshold,
      rootMargin,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add visible class to main element
          entry.target.classList.add("visible");
          
          // Find and animate child elements with stagger effect
          const children = entry.target.querySelectorAll(".animate-slide");
          children.forEach((child, i) => {
            setTimeout(() => {
              (child as HTMLElement).style.animation = "slideInUp 0.5s ease forwards";
            }, i * staggerDelay);
          });

          // Apply fadeInUp animation to elements with the specified class
          const fadeElements = entry.target.querySelectorAll(`.${animationClass}`);
          fadeElements.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("visible");
            }, i * staggerDelay);
          });

          // Disconnect observer after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, staggerDelay, animationClass]);

  return elementRef;
};

// Alternative hook for multiple elements
export const useMultipleScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -100px 0px",
    staggerDelay = 200,
  } = options;

  useEffect(() => {
    const observerOptions = { threshold, rootMargin };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
            (entry.target as HTMLElement).style.animation = "fadeInUp 0.6s ease forwards";
          }, idx * staggerDelay);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with the fade-in class
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold, rootMargin, staggerDelay]);
};