"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function WebsitePricingCard() {
  const { t, localizePath } = useLanguage();
  const w = t.pricing.websiteDev;

  return (
    <motion.div
      className="max-w-[1000px] mx-auto mb-16"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    >
      {/* Card */}
      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 border border-[#E9D5FF] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] overflow-hidden">

        {/* Top accent bar — 4px, 3-stop gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#22D3EE]" />

        <div className="relative z-10 flex flex-col items-center gap-8">

          {/* Title + Description */}
          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-[30px] font-bold text-[#1A1A2E] text-center leading-[36px]">
              {w.title}
            </h3>
            <p className="text-[20px] font-normal text-[#1A1A2E] text-center leading-[28px]">
              {w.description}
            </p>
          </div>

          {/* 3-column info grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

            {/* Price tile */}
            <div className="bg-gradient-to-br from-[#FAF5FF] to-[#EFF6FF] rounded-xl p-6 border border-[#F3E8FF] flex flex-col items-center gap-2">
              <p className="text-[18px] font-bold text-[#1A1A2E] text-center leading-[28px]">
                {w.priceLabel}
              </p>
              <p className="text-[24px] font-bold text-center leading-[32px] bg-gradient-to-r from-[#9333EB] to-[#EC4899] text-transparent bg-clip-text">
                ¥1,000,000 -<br />¥3,000,000
              </p>
              <p className="text-[14px] font-normal text-[#1A1A2E] text-center leading-[20px]">
                {w.priceNote}
              </p>
            </div>

            {/* Timeline tile */}
            <div className="bg-[#EFF6FF] rounded-xl px-6 pt-6 pb-14 border border-[#F3E8FF] flex flex-col items-center gap-2">
              <p className="text-[18px] font-bold text-[#1A1A2E] text-center leading-[28px]">
                {w.durationLabel}
              </p>
              <p className="text-[24px] font-bold text-center leading-[32px] bg-gradient-to-r from-[#EC4899] to-[#06B6D4] text-transparent bg-clip-text">
                {w.duration}
              </p>
              <p className="text-[14px] font-normal text-[#1A1A2E] text-center leading-[20px]">
                {w.durationNote}
              </p>
            </div>

            {/* Included Services tile */}
            <div className="bg-gradient-to-br from-[#F6EFFB] to-[#EFF6FF] rounded-xl p-6 border border-[#CFFAFE] flex flex-col gap-2">
              <p className="text-[18px] font-bold text-[#1A1A2E] text-center leading-[28px]">
                {w.includedLabel}
              </p>
              <ul className="flex flex-col gap-1 mt-1">
                {w.includedItems.map((item, i) => (
                  <li key={i} className="text-[14px] font-normal text-[#1A1A2E] leading-[20px]">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={localizePath("/#contact")}
            className="w-[280px] block text-center bg-gradient-to-r from-[#C084FC] to-[#818CF8] text-white text-[16px] font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            {w.ctaText}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
