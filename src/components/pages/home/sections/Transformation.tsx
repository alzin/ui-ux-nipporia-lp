"use client";
import SectionTitle from "@/components/common/components/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

export default function TransformationSection() {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    staggerDelay: 200,
  });

  const { t } = useLanguage();
  const m = t.transformation.metrics;

  return (
    <section
      id="transformation"
      className="py-24 bg-gradient-to-br from-purple-50 via-white to-cyan-50 fade-in"
      ref={sectionRef}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <SectionTitle title={t.transformation.sectionTitle} />

        <div className="animate-slide grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Before Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-red-100">
            <div className="bg-gradient-to-r from-red-400 to-orange-400 text-white text-center py-5 font-bold text-xl">
              {t.transformation.before}
            </div>
            <div className="p-8 space-y-4">
              {[
                { label: m.monthlyVisitors, value: "320", icon: "" },
                { label: m.bounceRate, value: "85%", icon: "" },
                { label: m.avgDuration, value: "32s", icon: "" },
                { label: m.mobileReady, value: "×", icon: "" },
                { label: m.pageSpeed, value: "8.2s", icon: "" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-600 flex items-center gap-2">
                    <span>{item.icon}</span>
                    {item.label}
                  </span>
                  <span className="text-lg font-bold text-red-500">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-green-100">
            <div className="bg-gradient-to-r from-green-400 to-cyan-400 text-white text-center py-5 font-bold text-xl">
              {t.transformation.after}
            </div>
            <div className="p-8 space-y-4">
              {[
                { label: m.monthlyVisitors, value: "15,800", icon: "" },
                { label: m.bounceRate, value: "35%", icon: "" },
                { label: m.avgDuration, value: "3m 45s", icon: "" },
                { label: m.mobileReady, value: "✓", icon: "" },
                { label: m.pageSpeed, value: "1.8s", icon: "" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-600 flex items-center gap-2">
                    <span>{item.icon}</span>
                    {item.label}
                  </span>
                  <span className="text-lg font-bold text-green-500">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
