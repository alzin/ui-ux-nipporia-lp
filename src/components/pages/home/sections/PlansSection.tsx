"use client";

import SectionTitle from "@/components/common/components/SectionTitle";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { plansMeta } from "@/content/home/pricing";
import WebsitePricingCard from "../components/WebsitePricingCard";
import MonthlyPlanCard from "../components/MonthlyPlanCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const PlansSection = () => {
  const { t, localizePath } = useLanguage();

  return (
    <section
      className="relative py-24 bg-gradient-to-br from-lavender/30 via-white to-peach/30 overflow-hidden"
      id="pricing"
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-5 py-15 relative z-10">
        <SectionTitle
          title={t.pricing.sectionTitle}
          description={t.pricing.sectionDescription}
        />

        <WebsitePricingCard />

        {/* Monthly Plans header */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#9333EB] to-[#06B6D4] text-transparent bg-clip-text mb-2">
            {t.pricing.monthlyPlansTitle}
          </h3>
          <p className="text-[#1A1A2E]">{t.pricing.monthlyPlansDescription}</p>
        </motion.div>

        {/* Pricing grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 max-w-[1200px] mx-auto items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          {plansMeta.map((plan, index) => {
            const planTranslation = t.pricing.plans[index];
            return (
              <MonthlyPlanCard
                key={plan.id}
                plan={plan}
                description={planTranslation.description}
                features={planTranslation.features}
                ctaText={planTranslation.ctaText}
              />
            );
          })}
        </motion.div>

        {/* Customize Your Own Plan */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          <div className="relative max-w-[1200px] mx-auto bg-white/90 backdrop-blur-sm rounded-3xl border border-[#E9D6FF] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] overflow-hidden">
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9333EB] via-[#F472B6] to-[#06B6D4]" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-10">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-[#1A1A2E]">
                  {t.pricing.customizePlan.title}
                </h3>
                <p className="text-base text-[#1A1A2E]">
                  {t.pricing.customizePlan.description}
                </p>
              </div>
              <a
                href={localizePath("/#contact")}
                className="w-[312px] shrink-0 text-center bg-gradient-to-r from-[#9333EB] to-[#EC4899] text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 whitespace-nowrap"
              >
                {t.pricing.customizePlan.ctaText}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansSection;
