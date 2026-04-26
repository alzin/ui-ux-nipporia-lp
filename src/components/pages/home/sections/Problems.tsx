"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import Image from "next/image";

export default function ProblemSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const, staggerChildren: 0.12 },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const { t, lang } = useLanguage();
  const isRTL = lang === "ar";

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
      <div className={`absolute top-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl ${isRTL ? "right-10" : "left-10"}`} />
      <div className={`absolute bottom-20 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl ${isRTL ? "left-10" : "right-10"}`} />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold bg-gradient-to-r from-purple-700 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
            {t.problems.sectionTitle}
          </h2>
        </div>

        {/* 3-column grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-10"
          variants={sectionVariants}
        >
          {t.problems.items.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col h-full group"
              variants={cardVariants}
            >
              {/* Problem block */}
              <div className="text-center px-2">
                {/* Problem pill */}
                <div className="inline-flex items-center justify-center px-5 py-1 rounded-full bg-[#1a1a2e] text-white text-xs md:text-sm font-bold mb-5 shadow-md tracking-wide">
                  {t.problems.problemLabel}
                </div>

                {/* Problem text */}
                <p className="text-base md:text-[17px] font-bold text-[#1a1a2e] leading-relaxed mb-4 md:mb-5 whitespace-pre-line">
                  {item.problem}
                </p>

                {/* Person illustration */}
                <div className="flex justify-center">
                  <Image
                    src={`/images/problems/problem_${index + 1}.png`}
                    alt=""
                    width={280}
                    height={280}
                    className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain"
                  />
                </div>

                {/* Down arrow */}
                <div className="flex justify-center my-4 md:my-5">
                  <DownArrow />
                </div>
              </div>

              {/* Solution card */}
              <div className="relative flex-1 mt-2">
                {/* Solution pill — overlapping top of card */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="inline-flex items-center justify-center px-5 py-1 rounded-full bg-white text-xs md:text-sm font-bold shadow-md tracking-wide">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                      {t.problems.solutionLabel}
                    </span>
                  </div>
                </div>

                <div
                  className={`relative h-full bg-gradient-to-br from-purple-500 via-purple-500 to-cyan-500 rounded-3xl p-6 md:p-7 pt-8 md:pt-9 shadow-xl shadow-purple-500/25 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-purple-500/40 overflow-hidden ${isRTL ? "text-right" : "text-left"
                    }`}
                >
                  {/* Subtle inner highlight */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/20" />
                  <div className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

                  <div className="relative">
                    <h3 className="text-base md:text-lg font-bold text-white mb-3 leading-snug text-center">
                      {item.solution.title}
                    </h3>
                    <p className="text-sm md:text-[15px] text-white/90 leading-relaxed">
                      {item.solution.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function DownArrow() {
  return (
    <svg
      viewBox="0 0 24 16"
      className="w-6 h-4 md:w-7 md:h-5"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="arrow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path d="M0 0 L24 0 L12 16 Z" fill="url(#arrow-grad)" />
    </svg>
  );
}
