"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { heroServices } from "@/content/home/heroServices";

export default function HeroServiceIcons() {
  const { t } = useLanguage();

  return (
    <div
      className="animate-fade-in-up-delay-300 grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 w-full mb-10 [@media(min-width:1024px)_and_(max-height:800px)]:mb-6"
    >
      {heroServices.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 [@media(min-width:1024px)_and_(max-height:800px)]:w-16 [@media(min-width:1024px)_and_(max-height:800px)]:h-16 transform transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:drop-shadow-xl drop-shadow-md mx-auto relative">
            <Image
              src={item.iconSrc}
              alt={t.hero.services[item.translationIndex]}
              fill
              priority
              className="object-contain"
            />
          </div>
          <span className="text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-700 text-center leading-tight mt-1 w-full break-words hyphens-auto">
            {t.hero.services[item.translationIndex]}
          </span>
        </div>
      ))}
    </div>
  );
}
