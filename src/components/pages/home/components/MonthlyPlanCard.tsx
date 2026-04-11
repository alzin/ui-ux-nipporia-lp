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
      className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 h-fit border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
        plan.featured
          ? "border-purple-300 shadow-xl shadow-purple-500/20"
          : "border-gray-100 hover:border-purple-200 hover:shadow-purple-500/10"
      }`}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-purple-600 transition-colors duration-300">
        {plan.name}
      </h3>

      <p className="text-gray-600 text-center mb-8 leading-relaxed min-h-[4rem]">
        {description}
      </p>

      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center mb-2">
          <span className="text-lg font-normal text-gray-500">¥</span>
          <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} text-transparent bg-clip-text`}>
            {plan.price}
          </span>
          <span className="text-lg font-normal text-gray-500 ml-1">{plan.priceSuffix}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <span className="text-green-500 font-bold text-lg mt-[-2px]">✓</span>
            <span className="text-gray-600">{feature}</span>
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
