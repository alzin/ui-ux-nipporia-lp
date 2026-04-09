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
  const { t } = useLanguage();

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
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text mb-2">
            {t.pricing.monthlyPlansTitle}
          </h3>
          <p className="text-gray-600">{t.pricing.monthlyPlansDescription}</p>
        </motion.div>

        {/* Pricing grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 max-w-[1200px] mx-auto"
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
      </div>
    </section>
  );
};

export default PlansSection;
