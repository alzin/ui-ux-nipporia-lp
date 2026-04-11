"use client";
import SectionTitle from "@/components/common/components/SectionTitle";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

import { problemsMeta } from "@/content/home/problems";

export default function ProblemSection() {

  // Framer Motion variants for section and cards
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const, staggerChildren: 0.08 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const { t } = useLanguage();

  return (
    <motion.section
      id="problems"
      className="py-24 bg-gradient-to-br from-white via-purple-50/50 to-cyan-50/50 relative fade-in overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <SectionTitle title={t.problems.sectionTitle} />

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={sectionVariants}>
          {t.problems.items.map((problem, index) => {
            const { Icon, color, iconColor } = problemsMeta[index];
            return (
              <motion.div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20"
                variants={cardVariants}
              >
                {/* Gradient wash on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                />

                {/* Icon (SVG) */}
                <div className="relative w-16 h-16 mb-6">
                  {/* icon background */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-10 group-hover:opacity-15 transition-opacity duration-300`}
                  />
                  {/* icon itself */}
                  <div
                    className={`relative z-10 h-full w-full flex items-center justify-center ${iconColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-10 h-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
