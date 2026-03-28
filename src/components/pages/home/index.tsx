"use client";
import CTASection from "./sections/CTASection";
import Hero from "./sections/Hero";
import ProblemSection from "./sections/Problems";
import ProcessSection from "./sections/ProcessSection";
import ServicesSection from "./sections/ServicesSection";
import TransformationSection from "./sections/Transformation";
import VisualTransformationSection from "./sections/VisualTransformationSection";
import PricingSection from "./sections/PlansSection";
import { useEffect } from "react";
import { initHomeScript } from "@/lib/homeScript";

const Index = () => {
  useEffect(() => {
    const cleanup = initHomeScript();
    return cleanup;
  }, []);

  return (
    <>
      <Hero />
      <ProblemSection />
      <TransformationSection />
      <VisualTransformationSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <CTASection />
    </>
  );
};

export default Index;