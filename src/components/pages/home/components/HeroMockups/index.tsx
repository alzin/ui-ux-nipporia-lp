"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { useWorkflowAnimation } from "@/hooks/animation/useWorkflowAnimation";
import StepIndicator from "./StepIndicator";
import LaptopMockupFrame from "./LaptopMockupFrame";
import PhoneMockupFrame from "./PhoneMockupFrame";
import FlyingNotifications from "./FlyingNotifications";
import StepDots from "./StepDots";
import EnergyStream from "./EnergyStream";

export default function HeroMockups() {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";
  const { currentStep, steps, step } = useWorkflowAnimation();

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center perspective-[2000px]">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={`absolute inset-0 bg-gradient-to-r ${step.gradient} blur-[120px] rounded-full`}
          />
        </AnimatePresence>
      </div>

      <EnergyStream isRTL={isRTL} />
      <StepIndicator step={step} currentStep={currentStep} stepsTotal={steps.length} />
      <LaptopMockupFrame step={step} isRTL={isRTL} />
      <PhoneMockupFrame step={step} isRTL={isRTL} />
      <FlyingNotifications step={step} isRTL={isRTL} />
      <StepDots steps={steps} currentStep={currentStep} />
    </div>
  );
}
