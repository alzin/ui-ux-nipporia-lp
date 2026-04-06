"use client";

import { useState, useEffect } from "react";
import SectionTitle from "@/components/common/components/SectionTitle";
import LaptopMockup from "../components/LaptopMockup";
import PhoneMockup from "../components/PhoneMockup";
import { projects } from "../components/ProjectData";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

type DeviceMode = "laptop" | "phone";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as const },
};

export default function VisualTransformationSection() {
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar";


  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [deviceMode, setDeviceMode] = useState<DeviceMode>("laptop");
  const activeProject = projects[activeIndex];

  // If the current project is video-only, always force phone mode
  useEffect(() => {
    if (activeProject.mediaType === "video" && deviceMode !== "phone") {
      setDeviceMode("phone");
    }
  }, [activeProject.mediaType, deviceMode]);

  const prevArrowPath = isRTL ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7";
  const nextArrowPath = isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7";

  const handleSelect = (index: number) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  // (keep only one activeProject)

  const handlePrev = () => {
    if (isTransitioning) return;
    const newIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
    handleSelect(newIndex);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    const newIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
    handleSelect(newIndex);
  };

  return (
    <section
      id="visual-examples"
      className="py-8 md:py-10 lg:py-12 bg-gradient-to-br from-white via-purple-50/45 to-cyan-50/45 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-16 md:top-20 right-8 md:right-20 w-56 md:w-72 h-56 md:h-72 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 md:bottom-20 left-6 md:left-20 w-64 md:w-80 h-64 md:h-80 bg-cyan-300/20 rounded-full blur-3xl" />

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <SectionTitle
          title={t.visualTransformation.sectionTitle}
          description={t.visualTransformation.description}
        />
      </div>
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        {/* Device Mockups and Navigation */}
        <motion.div
          className="relative group mt-6 md:mt-8 lg:mt-10"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          <div className="absolute inset-0 pointer-events-none rounded-[2rem] bg-white/35 backdrop-blur-[1px]" />

          <div className="relative z-10 px-3 sm:px-5 md:px-8 pt-4 md:pt-5 lg:pt-6">
            <div className={`rounded-2xl border border-white/70 bg-white/70 backdrop-blur-md px-4 md:px-5 py-3 shadow-lg shadow-purple-900/5 flex flex-col lg:items-center lg:justify-between gap-3 md:gap-4 ${isRTL ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
              <div className={`min-w-0 ${isRTL ? "text-right" : "text-left"}`}>
                <p className="text-sm md:text-base font-semibold text-slate-900 truncate">
                  {activeProject.title}
                </p>
                <p className="text-xs md:text-sm text-slate-600 truncate">
                  {activeProject.siteUrl}
                </p>
              </div>
              <div className={`flex flex-wrap items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="inline-flex items-center p-1 rounded-full bg-slate-100 border border-slate-200">
                  {activeProject.mediaType !== "video" ? (
                      <button onClick={() => setDeviceMode("laptop")} className={`px-3 py-1.5 text-xs md:text-sm rounded-full transition-colors ${deviceMode === "laptop" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-800"}`}>
                        {t.visualTransformation.laptop}
                      </button>
                        ) : null}
                      <button onClick={() => setDeviceMode("phone")} className={`px-3 py-1.5 text-xs md:text-sm rounded-full transition-colors ${deviceMode === "phone" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-800"}`}>
                        {t.visualTransformation.phone}
                  </button>
                </div>
                {/* Only show the View Live Site button if not a video */}
                {activeProject.mediaType !== "video" && activeProject.siteUrl && (
                  <a href={activeProject.siteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-900 text-white text-xs md:text-sm font-medium px-4 py-2 hover:bg-slate-800 transition-colors">
                    {t.visualTransformation.viewLiveSite}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8M17 7V16" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Main Device Mockups */}
          <div className="relative z-10 flex items-center justify-center w-full mx-auto px-1 sm:px-4 md:px-10 lg:px-12 xl:px-16 py-3 md:py-5">
            {deviceMode === "laptop" ? (
              <div className="w-full max-w-[1360px] transition-transform duration-500 group-hover:scale-[1.01]" style={{ width: "min(100%, max(620px, calc((100vh - 270px) * 2.13)))" }}>
                <LaptopMockup 
                  url={activeProject.desktopUrl} 
                  videoSrc={activeProject.desktopVideo}
                  mediaType={activeProject.mediaType}
                  isActive={!isTransitioning} 
                />
              </div>
            ) : (
              <div className="w-full max-w-[420px] md:max-w-[380px] transition-transform duration-500 group-hover:scale-[1.01]" style={{ width: "min(420px, 90vw, max(250px, calc((100vh - 230px) / 2)))" }}>
                <PhoneMockup 
                  url={activeProject.mobileUrl} 
                  videoSrc={activeProject.mobileVideo}
                  mediaType={activeProject.mediaType}
                  isActive={!isTransitioning} 
                />
              </div>
            )}
          </div>

          <div className={`relative z-10 md:hidden flex items-center justify-center gap-3 px-4 pb-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            <button onClick={handlePrev} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-lg border border-white/90 text-purple-600 shadow-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500">
              <svg className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={prevArrowPath} /></svg>
            </button>
            <div className="text-xs font-medium text-slate-600 px-3 py-1 rounded-full bg-white/75 border border-white/80">
              {activeIndex + 1} / {projects.length}
            </div>
            <button onClick={handleNext} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-lg border border-white/90 text-purple-600 shadow-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500">
              <svg className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={nextArrowPath} /></svg>
            </button>
          </div>

          <button onClick={handlePrev} className={`hidden md:inline-flex absolute top-[42%] md:top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-white/65 backdrop-blur-xl border border-white/80 text-purple-600 shadow-xl shadow-purple-900/10 hover:bg-white hover:text-purple-700 transition-all duration-500 hover:scale-110 hover:shadow-2xl md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500 ${isRTL ? "right-1 sm:right-2 md:right-3 lg:right-4" : "left-1 sm:left-2 md:left-3 lg:left-4"}`}>
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={prevArrowPath} /></svg>
          </button>

          <button onClick={handleNext} className={`hidden md:inline-flex absolute top-[42%] md:top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-white/65 backdrop-blur-xl border border-white/80 text-purple-600 shadow-xl shadow-purple-900/10 hover:bg-white hover:text-purple-700 transition-all duration-500 hover:scale-110 hover:shadow-2xl md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500 ${isRTL ? "left-1 sm:left-2 md:left-3 lg:left-4" : "right-1 sm:right-2 md:right-3 lg:right-4"}`}>
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={nextArrowPath} /></svg>
          </button>

          <div className="relative z-10 mt-3 md:mt-4 px-2 sm:px-3 md:px-5 lg:px-8 pb-4 md:pb-5 flex flex-wrap items-center gap-2 md:gap-3">
            {projects.map((project, index) => {
              const isActiveProject = index === activeIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => handleSelect(index)}
                  disabled={isTransitioning}
                  className={`${isRTL ? "text-right" : "text-left"} rounded-full border px-3.5 md:px-4 py-2 md:py-2.5 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${isActiveProject ? "bg-white/95 border-purple-200 shadow-lg shadow-purple-900/10" : "bg-white/70 border-white/75 hover:bg-white/90 hover:border-purple-100 hover:shadow-md hover:shadow-purple-900/5"} ${isTransitioning ? "cursor-wait" : "cursor-pointer"}`}
                >
                  <p className="text-xs md:text-sm font-semibold text-slate-900 truncate">
                    {project.title}
                  </p>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}