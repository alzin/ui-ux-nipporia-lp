"use client";
import SectionTitle from "@/components/common/components/SectionTitle";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import Image from "next/image";

import { problemsMeta } from "@/content/home/problems";

export default function ProblemSection() {

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const, staggerChildren: 0.12 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
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

        <motion.div
          className="relative flex flex-col gap-8 mx-auto md:max-w-[684px]"
          variants={sectionVariants}
        >
          {/* Vertical connector line — desktop only */}
          <div className="hidden md:block absolute left-[28px] top-[155px] bottom-[155px] w-[4px] bg-gradient-to-b from-[#ea6a6a] via-[#f9781f] to-[#bde6ad] rounded-full opacity-50" />

          {t.problems.items.map((problem, index) => {
            const { badgeGradient, iconGradient, iconSrc } = problemsMeta[index];
            const num = String(index + 1).padStart(2, "0");
            return (
              <motion.div
                key={index}
                className="flex items-center md:gap-8"
                variants={cardVariants}
              >
                {/* Number badge — desktop only */}
                <div
                  className={`hidden md:flex flex-shrink-0 w-[60px] h-[60px] rounded-[8px] bg-gradient-to-br ${badgeGradient} items-center justify-center shadow-md z-10`}
                >
                  <span className="text-white font-bold text-lg leading-none">{num}</span>
                </div>

                {/* Card body */}
                <div className="group flex-1 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-5 md:p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                  {/* Icon */}
                  <div className="relative w-11 h-11 md:w-16 md:h-16 mb-4 md:mb-5">
                    <div
                      className={`absolute inset-0 rounded-[12px] md:rounded-2xl bg-gradient-to-br ${iconGradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                    />
                    <div className="relative z-10 h-full w-full flex items-center justify-center">
                      <Image
                        src={iconSrc}
                        alt=""
                        width={36}
                        height={36}
                        className="w-7 h-7 md:w-9 md:h-9"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-lg md:text-xl font-bold text-[#1a1a2e] mb-2 md:mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#1a1a2e]/70 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
