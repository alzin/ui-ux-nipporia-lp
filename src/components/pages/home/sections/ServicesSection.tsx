"use client";
import SectionTitle from "@/components/common/components/SectionTitle";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

import { servicesMeta } from "@/content/home/services";

export default function ServicesSection() {

  // Framer Motion variants for section and cards
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const, staggerChildren: 0.08 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const { t, lang } = useLanguage();
  const isRTL = lang === "ar";

  return (
    <motion.section
      className="py-24 bg-gradient-to-br from-cream via-white to-lavender/30 relative fade-in overflow-hidden"
      id="services"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    >
      {/* Decorative shapes */}
      <div className={`absolute top-40 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl ${isRTL ? "right-10" : "left-10"}`} />
      <div className={`absolute bottom-40 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl ${isRTL ? "left-10" : "right-10"}`} />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <SectionTitle title={t.services.sectionTitle} />

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={sectionVariants}>
          {t.services.items.map((service, index) => {
            const { number, color, Icon } = servicesMeta[index];
            return (
              <motion.div
                key={index}
                className={`group relative bg-white/90 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer ${
                  isRTL ? "text-right" : "text-left"
                }`}
                variants={cardVariants}
              >
                {/* Number badge */}
                <span className={`absolute top-4 text-4xl font-bold text-gray-100 group-hover:text-purple-100 transition-colors duration-300 ${isRTL ? "left-4" : "right-4"}`}>
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
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${isRTL ? "origin-right" : "origin-left"}`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
