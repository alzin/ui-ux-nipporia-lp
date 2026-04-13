"use client";

import { motion } from "framer-motion";
import { TPlanMeta } from "@/content/home/pricing";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

type Props = {
  plan: TPlanMeta;
  description: string;
  features: string[];
  ctaText: string;
};

export default function MonthlyPlanCard({ plan, description, features, ctaText }: Props) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 h-full flex flex-col justify-between border border-[#D4D4D8] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
    >
      <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4 text-center">
        {plan.name}
      </h3>

      <p className="text-[#1A1A2E] text-base text-center mb-8 leading-relaxed min-h-[4rem]">
        {description}
      </p>

      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-3 mb-2">
          <span className="text-lg font-normal text-[#1A1A2E]">¥</span>
          <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} text-transparent bg-clip-text`}>
            {plan.price}
          </span>
          <span className="text-lg font-normal text-[#1A1A2E]">{plan.priceSuffix}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <span className="text-[#22C55E] font-bold text-sm mt-[1px]">✓</span>
            <span className="text-[#1A1A2E]">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`w-full block text-center bg-gradient-to-r ${plan.color} text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
      >
        {ctaText}
      </a>
    </motion.div>
  );
}
