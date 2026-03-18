"use client";
import SectionTitle from "@/components/common/components/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

import {
  NextJsDevIcon,
  SeoIcon,
  BlogIcon,
  GoogleAdsIcon,
  UiUxIcon,
  MaintenanceIcon,
} from "./ServiceIcons";

export default function ServicesSection() {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    staggerDelay: 250,
  });

  const { t } = useLanguage();

  const servicesMeta = [
    { number: "01", color: "from-purple-400 to-indigo-400", iconColor: "text-indigo-700", Icon: NextJsDevIcon },
    { number: "02", color: "from-pink-400 to-rose-400", iconColor: "text-rose-700", Icon: SeoIcon },
    { number: "03", color: "from-cyan-400 to-blue-400", iconColor: "text-blue-700", Icon: BlogIcon },
    { number: "04", color: "from-green-400 to-emerald-400", iconColor: "text-emerald-700", Icon: GoogleAdsIcon },
    { number: "05", color: "from-orange-400 to-amber-400", iconColor: "text-amber-700", Icon: UiUxIcon },
    { number: "06", color: "from-violet-400 to-purple-400", iconColor: "text-violet-700", Icon: MaintenanceIcon },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-cream via-white to-lavender/30 relative fade-in overflow-hidden"
      id="services"
    >
      {/* Decorative shapes */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <SectionTitle title={t.services.sectionTitle} />

        <div className="animate-slide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => {
            const { number, color, Icon } = servicesMeta[index];

            return (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
              >
                {/* Number badge */}
                <span className="absolute top-4 right-4 text-4xl font-bold text-gray-100 group-hover:text-purple-100 transition-colors duration-300">
                  {number}
                </span>

                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                />

                {/* Icon tile */}
                <div className="relative w-16 h-16 mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl shadow-lg`} />
                  <div className="relative z-10 w-full h-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-9 h-9 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/25 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
