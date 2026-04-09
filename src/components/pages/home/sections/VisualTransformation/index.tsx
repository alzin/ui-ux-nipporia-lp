"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import SectionTitle from "@/components/common/components/SectionTitle";
import LaptopMockup from "../../components/LaptopMockup";
import PhoneMockup from "../../components/PhoneMockup";
import { projects } from "../../components/ProjectData";
import { useProjectCarousel } from "./hooks/useProjectCarousel";
import { useDeviceDetection } from "./hooks/useDeviceDetection";
import DeviceModePicker from "./DeviceModePicker";
import CarouselNavigation from "./CarouselNavigation";
import ProjectSelector from "./ProjectSelector";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as const },
};

export default function VisualTransformationSection() {
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar";

  const { activeIndex, isTransitioning, activeProject, handleSelect, handlePrev, handleNext } =
    useProjectCarousel();
  const { deviceMode, setDeviceMode } = useDeviceDetection(activeProject.mediaType);

  return (
    <section
      id="visual-examples"
      className="py-8 md:py-10 lg:py-12 bg-gradient-to-br from-white via-purple-50/45 to-cyan-50/45 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-16 md:top-20 right-8 md:right-20 w-56 md:w-72 h-56 md:h-72 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 md:bottom-20 left-6 md:left-20 w-64 md:w-80 h-64 md:h-80 bg-cyan-300/20 rounded-full blur-3xl" />

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <SectionTitle
          title={t.visualTransformation.sectionTitle}
          description={t.visualTransformation.description}
        />
      </div>

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <motion.div
          className="relative group mt-6 md:mt-8 lg:mt-10"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          <div className="absolute inset-0 pointer-events-none rounded-[2rem] bg-white/35 backdrop-blur-[1px]" />

          <div className="relative z-10 px-3 sm:px-5 md:px-8 pt-4 md:pt-5 lg:pt-6">
            <DeviceModePicker
              activeProject={activeProject}
              deviceMode={deviceMode}
              setDeviceMode={setDeviceMode}
              isRTL={isRTL}
              t={{
                laptop: t.visualTransformation.laptop,
                phone: t.visualTransformation.phone,
                viewLiveSite: t.visualTransformation.viewLiveSite,
              }}
            />
          </div>

          <div className="relative z-10 flex items-center justify-center w-full mx-auto px-1 sm:px-4 md:px-10 lg:px-12 xl:px-16 py-3 md:py-5">
            {deviceMode === "laptop" ? (
              <div
                className="w-full max-w-[1360px] transition-transform duration-500 group-hover:scale-[1.01]"
                style={{ width: "min(100%, max(620px, calc((100vh - 270px) * 2.13)))" }}
              >
                <LaptopMockup
                  url={activeProject.desktopUrl}
                  videoSrc={activeProject.desktopVideo}
                  mediaType={activeProject.mediaType}
                  isActive={!isTransitioning}
                />
              </div>
            ) : (
              <div
                className="w-full max-w-[420px] md:max-w-[380px] transition-transform duration-500 group-hover:scale-[1.01]"
                style={{ width: "min(420px, 90vw, max(250px, calc((100vh - 230px) / 2)))" }}
              >
                <PhoneMockup
                  url={activeProject.mobileUrl}
                  videoSrc={activeProject.mobileVideo}
                  mediaType={activeProject.mediaType}
                  isActive={!isTransitioning}
                />
              </div>
            )}
          </div>

          <CarouselNavigation
            onPrev={handlePrev}
            onNext={handleNext}
            isRTL={isRTL}
            activeIndex={activeIndex}
            total={projects.length}
          />

          <ProjectSelector
            projects={projects}
            activeIndex={activeIndex}
            isTransitioning={isTransitioning}
            onSelect={handleSelect}
            isRTL={isRTL}
          />
        </motion.div>
      </div>
    </section>
  );
}
