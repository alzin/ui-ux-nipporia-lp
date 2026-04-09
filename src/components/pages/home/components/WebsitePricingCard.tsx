"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function WebsitePricingCard() {
  const { t } = useLanguage();
  const w = t.pricing.websiteDev;

  return (
    <motion.div
      className="max-w-[1000px] mx-auto mb-16 pt-8"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 border border-purple-200 shadow-xl relative overflow-hidden">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400" />

        <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">{w.title}</h3>
            <p className="text-xl text-gray-600 mb-6">{w.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Price tile */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 text-center border border-purple-100">
              <h4 className="text-lg font-semibold mb-2 text-gray-700">{w.priceLabel}</h4>
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                ¥1,000,000 - ¥3,000,000
              </p>
              <p className="text-sm text-gray-500 mt-2">{w.priceNote}</p>
            </div>

            {/* Duration tile */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 text-center border border-pink-100">
              <h4 className="text-lg font-semibold mb-2 text-gray-700">{w.durationLabel}</h4>
              <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">
                {w.duration}
              </p>
              <p className="text-sm text-gray-500 mt-2">{w.durationNote}</p>
            </div>

            {/* Included tile */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center border border-cyan-100">
              <h4 className="text-lg font-semibold mb-2 text-gray-700">{w.includedLabel}</h4>
              <ul className="text-sm text-left space-y-1 text-gray-600">
                {w.includedItems.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
