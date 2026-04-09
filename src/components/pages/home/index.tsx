"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { initHomeScript } from "@/lib/homeScript";
import Hero from "./sections/Hero";
import TechLogoMarquee from "./components/TechLogoMarquee";

// 1. Dynamically import everything below the fold
// This splits the code, meaning mobile devices don't download this JS until it's needed.
const ProblemSection = dynamic(() => import("./sections/Problems"), { ssr: true });
const TransformationSection = dynamic(() => import("./sections/Transformation"), { ssr: true });
const VisualTransformationSection = dynamic(() => import("./sections/VisualTransformation"), { ssr: true });
const ServicesSection = dynamic(() => import("./sections/ServicesSection"), { ssr: true });
const ProcessSection = dynamic(() => import("./sections/ProcessSection"), { ssr: true });
const PricingSection = dynamic(() => import("./sections/PlansSection"), { ssr: true });
const CTASection = dynamic(() => import("./sections/CTASection"), { ssr: true });

const Index = () => {
  useEffect(() => {
    // 2. Defer this script slightly so it doesn't block the initial React hydration
    let cleanup: (() => void) | undefined;
    const timer = setTimeout(() => {
      cleanup = initHomeScript();
    }, 500); // 500ms delay to let LCP finish

    return () => {
      clearTimeout(timer);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <>
      <Hero />
      <div className="bg-gradient-to-b from-lavender/30 to-transparent py-14">
        <TechLogoMarquee />
      </div>
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