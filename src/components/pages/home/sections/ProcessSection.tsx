"use client";
import SectionTitle from "@/components/common/components/SectionTitle";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { processesMeta } from "@/content/home/process";

export default function ProcessSection() {

  // Framer Motion variants for section and cards
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const, staggerChildren: 0.12 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const { t } = useLanguage();

  return (
    <motion.section
      id="process"
      className="py-24 bg-gradient-to-br from-white via-purple-50/50 to-cyan-50/50 fade-in"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    >
      <div className="max-w-[1000px] mx-auto px-4 md:px-8">
        <SectionTitle title={t.process.sectionTitle} />

        <motion.div className="relative mt-16" variants={sectionVariants}>
          {/* Timeline line — desktop only */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400 rounded-full hidden md:block"></div>

          <div className="space-y-8 md:space-y-12">
            {t.process.steps.map((step, index) => {
              const meta = processesMeta[index];
              const isEven = index % 2 !== 0;
              return (
                <motion.div
                  key={index}
                  className={`relative flex items-center gap-2 md:gap-8 ${
                    isEven ? "flex-row-reverse md:flex-row-reverse" : "flex-row md:flex-row"
                  } ${isEven ? "pl-4 md:pl-0" : "pr-4 md:pr-0"}`}
                  variants={cardVariants}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 md:p-8 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-100">
                      <div className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <span
                          className={`w-12 h-12 flex items-center justify-center text-xl font-bold bg-gradient-to-br ${meta.color} rounded-lg text-white shadow-lg`}
                        >
                          {meta.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  {/* Mobile: side connector dot */}
                  <div className={`flex-shrink-0 w-6 h-6 bg-gradient-to-br ${meta.color} rounded-full border-4 border-white shadow-lg z-10 md:hidden`}></div>

                  {/* Desktop: center timeline dot */}
                  <div className="hidden md:flex flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Desktop spacer */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
