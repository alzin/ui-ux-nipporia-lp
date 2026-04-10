"use client";
import { useFixedActionsVisibility } from "@/hooks/scroll/useFixedActionsVisibility";
import { useLanguage } from "@/i18n/LanguageContext";
import { socialLinks } from "@/content/social";

export default function FloatingSocial() {
  const { isVisible } = useFixedActionsVisibility({
    scrollThreshold: 300,
    hideWhenSectionVisibleId: "visual-examples",
    sectionThreshold: 0.15,
  });

  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  const hiddenTranslateClass = isRTL ? "translate-x-full" : "-translate-x-full";

  return (
    <div
      className={`fixed top-1/2 -translate-y-1/2 z-[999] transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-x-0"
          : `opacity-0 ${hiddenTranslateClass} pointer-events-none`
      } ${isRTL ? "right-0" : "left-0"}`}
      aria-hidden={!isVisible}
    >
      <div className="flex flex-col gap-0.5">
        {socialLinks.map((social, i) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`group flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm text-gray-600 hover:text-white ${social.hoverColor} shadow-md transition-all duration-300 hover:w-12 hover:shadow-lg hover:shadow-purple-500/20 ${
              i === 0 ? (isRTL ? "rounded-tl-lg" : "rounded-tr-lg") : ""
            } ${
              i === socialLinks.length - 1
                ? isRTL
                  ? "rounded-bl-lg"
                  : "rounded-br-lg"
                : ""
            }`}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <span className="transition-transform duration-300 group-hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d={social.pathD} />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
