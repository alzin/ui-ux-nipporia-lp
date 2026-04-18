"use client";

import { useFixedActionsVisibility } from "@/hooks/scroll/useFixedActionsVisibility";
import StickyDesktopCTA from "@/components/pages/home/components/StickyDesktopCTA";
import StickyMobileCTA from "@/components/pages/home/components/StickyMobileCTA";

export default function StickyCTA() {
  const { isVisible } = useFixedActionsVisibility({
    scrollThreshold: 100,
    hideWhenSectionVisibleId: "visual-examples",
    sectionThreshold: 0.15,
  });

  return (
    <>
      <StickyDesktopCTA isVisible={isVisible} />
      <StickyMobileCTA isVisible={isVisible} />
    </>
  );
}
