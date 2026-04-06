"use client";
import SectionTitle from "@/components/common/components/SectionTitle";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function TransformationSection() {
  const { t } = useLanguage();
  const m = t.transformation.metrics;

  return (
    <section
      id="transformation"
      className="py-24 bg-gradient-to-br from-purple-50 via-white to-cyan-50"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <SectionTitle title={t.transformation.sectionTitle} />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          {/* Before Card */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-red-100">
            <div className="bg-gradient-to-r from-red-400 to-orange-400 text-white text-center py-5 font-bold text-xl">
              {t.transformation.before}
            </div>
            <div className="p-8 space-y-4">
              {[
                { label: m.monthlyLeads, value: "12" },
                { label: m.acquisitionCost, value: "¥50,000" },
                { label: m.conversionRate, value: "0.8%" },
                { label: m.digitalChannels, value: "1" },
                { label: m.automationRate, value: "0%" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-600 flex items-center gap-2">
                    {item.label}
                  </span>
                  <span className="text-lg font-bold text-red-500">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-green-100">
            <div className="bg-gradient-to-r from-green-400 to-cyan-400 text-white text-center py-5 font-bold text-xl">
              {t.transformation.after}
            </div>
            <div className="p-8 space-y-4">
              {[
                { label: m.monthlyLeads, value: "280" },
                { label: m.acquisitionCost, value: "¥8,500" },
                { label: m.conversionRate, value: "5.2%" },
                { label: m.digitalChannels, value: "6" },
                { label: m.automationRate, value: "65%" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-600 flex items-center gap-2">
                    {item.label}
                  </span>
                  <span className="text-lg font-bold text-green-500">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}