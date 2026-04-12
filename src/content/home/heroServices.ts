export type THeroService = {
  /** Index into `t.hero.services` translation array */
  translationIndex: number;
  iconSrc: string;
};

export const heroServices: THeroService[] = [
  { translationIndex: 3, iconSrc: "/images/icons/ui-ux-design.svg" },
  { translationIndex: 0, iconSrc: "/images/icons/mobile-apps.svg" },
  { translationIndex: 1, iconSrc: "/images/icons/websites.svg" },
  { translationIndex: 2, iconSrc: "/images/icons/ai-solutions.svg" },
];
