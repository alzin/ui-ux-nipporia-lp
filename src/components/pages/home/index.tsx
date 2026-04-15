"use client";
import dynamic from "next/dynamic";
import { useMultipleScrollAnimation } from "@/hooks/scroll/useScrollAnimation";
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
  useMultipleScrollAnimation();

  return (
    <>
      <Hero />
      <div className="py-14" style={{ background: "linear-gradient(180deg, rgba(232, 213, 242, 0.3) 0%, rgba(232, 213, 242, 0) 100%)" }}>
        <TechLogoMarquee />
      </div>
      <ProblemSection />
      {/* <TransformationSection /> */}
      <ProcessSection />
      <VisualTransformationSection />
      <ServicesSection />
      {/* <PricingSection /> */}
      <CTASection />
    </>
  );
};

export default Index;