import {
  UiUxIcon,
  MobileAppIcon,
  NextJsDevIcon,
  AiIcon,
} from "@/components/pages/home/sections/ServiceIcons";

export type THeroService = {
  /** Index into `t.hero.services` translation array */
  translationIndex: number;
  Icon: React.ComponentType<{ className?: string }>;
};

export const heroServices: THeroService[] = [
  { translationIndex: 3, Icon: UiUxIcon },
  { translationIndex: 0, Icon: MobileAppIcon },
  { translationIndex: 1, Icon: NextJsDevIcon },
  { translationIndex: 2, Icon: AiIcon },
];
