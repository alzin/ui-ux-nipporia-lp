"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { heroServices } from "@/content/home/heroServices";

export default function HeroServiceIcons() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex w-full justify-center lg:justify-start flex-nowrap gap-4 sm:gap-4 lg:gap-5 mb-10 [@media(min-width:1024px)_and_(max-height:800px)]:mb-6 overflow-x-auto pb-4 hide-scrollbar"
    >
      {heroServices.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-2 flex-shrink-0 group cursor-pointer w-[104px] sm:w-[128px] lg:min-w-[128px] [@media(min-width:1024px)_and_(max-height:800px)]:min-w-[100px]"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 [@media(min-width:1024px)_and_(max-height:800px)]:w-16 [@media(min-width:1024px)_and_(max-height:800px)]:h-16 transform transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:drop-shadow-xl drop-shadow-md lg:mx-auto text-purple-600">
            <item.Icon className="w-full h-full" />
          </div>
          <span className="text-xs sm:text-sm lg:text-[15px] font-semibold text-gray-700 text-center leading-tight whitespace-nowrap mt-1 w-full">
            {t.hero.services[item.translationIndex]}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
