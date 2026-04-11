export const sceneVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

export const itemFade = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const itemPop = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.35, type: "spring" as const } },
};

export const itemSlideRight = {
  initial: { opacity: 0, x: -14 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

export const itemSlideLeft = {
  initial: { opacity: 0, x: 14 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};
