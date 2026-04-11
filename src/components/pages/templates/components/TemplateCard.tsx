"use client";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

export interface TemplateItem {
  title: string;
  description: string;
  category: string;
  tags: string[];
  previewImage: string;
  liveUrl: string;
  theme: "light" | "dark";
}

export default function TemplateCard({ template }: { template: TemplateItem }) {
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar";

  return (
    <a
      href={template.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-3xl overflow-hidden bg-white/90 backdrop-blur-sm border border-gray-100 transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      {/* Preview image with browser frame */}
      <div className="relative overflow-hidden">
        <div className="bg-gray-50 px-4 py-2.5 flex items-center gap-2 border-b border-gray-100">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-3 text-[11px] text-gray-400 font-mono truncate flex-1">
            {template.liveUrl.replace(/^https?:\/\//, "")}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={template.previewImage}
            alt={template.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Theme badge */}
          <span
            className={`absolute top-3 ${
              isRTL ? "left-3" : "right-3"
            } px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
              template.theme === "dark"
                ? "bg-gray-900/70 text-white border border-white/10"
                : "bg-white/80 text-gray-700 border border-gray-200"
            }`}
          >
            {template.theme === "dark" ? "Dark" : "Light"}
          </span>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
            <span className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-full text-sm font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {t.templatesPage.viewLive} →
            </span>
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6 space-y-3">
        {/* Category badge */}
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 border border-purple-200/50">
          {template.category}
        </span>

        <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
          {template.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {template.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {template.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-md bg-gray-50 text-gray-500 font-medium border border-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className={`h-1 bg-gradient-to-r from-purple-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
          isRTL ? "origin-right" : "origin-left"
        }`}
      />
    </a>
  );
}
