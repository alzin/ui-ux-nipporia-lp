"use client";
import CTASection from "./sections/CTASection";
import Hero from "./sections/Hero";
import ProblemSection from "./sections/Problems";
import ProcessSection from "./sections/ProcessSection";
import ServicesSection from "./sections/ServicesSection";
import TransformationSection from "./sections/Transformation";
import VisualTransformationSection from "./sections/VisualTransformationSection";
import { useEffect } from "react";
import { initHomeScript } from "@/lib/homeScript";
import TeamMembers from "./sections/TeamMembers";

const Index = () => {
  useEffect(() => {
    initHomeScript();
  }, []);

  return (
    <>
      <Hero />
      <ProblemSection />
      <TransformationSection />
      <VisualTransformationSection />
      <ServicesSection />
      <TeamMembers />
      <ProcessSection />
      <CTASection />
    </>
  );
};

export default Index;
