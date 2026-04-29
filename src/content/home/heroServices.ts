import type { FunctionComponent, SVGProps } from "react";
import UiUxDesignIcon from "@/assets/icons/ui-ux-design.svg";
import MobileAppsIcon from "@/assets/icons/mobile-apps.svg";
import WebsitesIcon from "@/assets/icons/websites.svg";
import AiSolutionsIcon from "@/assets/icons/ai-solutions.svg";

export type THeroService = {
  /** Index into `t.hero.services` translation array */
  translationIndex: number;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

export const heroServices: THeroService[] = [
  { translationIndex: 3, Icon: UiUxDesignIcon },
  { translationIndex: 0, Icon: MobileAppsIcon },
  { translationIndex: 1, Icon: WebsitesIcon },
  { translationIndex: 2, Icon: AiSolutionsIcon },
];
