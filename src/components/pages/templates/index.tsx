"use client";
import { useLanguage } from "@/i18n/LanguageContext";
import SectionTitle from "@/components/common/components/SectionTitle";
import TemplateCard, { type TemplateItem } from "./components/TemplateCard";

/** Static config per template (not translated) */
const templateMeta = [
  {
    previewImage: "/images/templates/real-estate-v71.webp",
    liveUrl:
      "https://website-examples-topaz.vercel.app/real-estate/v7/index.html",
    theme: "dark" as const,
  },
  {
    previewImage: "/images/templates/jsoms-redesign1.webp",
    liveUrl:
      "https://website-examples-topaz.vercel.app/jsoms-redesign/index.html",
    theme: "light" as const,
  },
];

export default function TemplatesPage() {
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar";

  // Merge translated content with static config
  const templates: TemplateItem[] = t.templatesPage.items.map((item, i) => ({
    ...item,
    ...templateMeta[i],
  }));

  return (
    <section
      className="py-24 pt-32 bg-gradient-to-br from-cream via-white to-lavender/30 relative overflow-hidden min-h-screen"
      id="templates"
    >
      {/* Decorative shapes — same as homepage sections */}
      <div
        className={`absolute top-40 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl ${isRTL ? "right-10" : "left-10"
          }`}
      />
      <div
        className={`absolute bottom-40 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl ${isRTL ? "left-10" : "right-10"
          }`}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-100/20 rounded-full blur-[120px]" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTitle title={t.templatesPage.title} />

          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-500 leading-relaxed mt-4">
            {t.templatesPage.subtitle}
          </p>

          {/* Template count badge */}
          <div className="flex items-center justify-center mt-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/50">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse" />
              <span className="text-xs font-semibold text-purple-600 tracking-wider">
                {templates.length} Templates
              </span>
            </span>
          </div>
        </div>

        {/* Templates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {templates.map((template) => (
            <TemplateCard key={template.liveUrl} template={template} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm">
            More templates coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}
