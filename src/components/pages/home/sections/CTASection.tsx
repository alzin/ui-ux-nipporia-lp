"use client";

import { motion } from "framer-motion";
import { useFormHandler } from "@/hooks/form/useFormHandler";
import { useLanguage } from "@/i18n/LanguageContext";
import SectionTitle from "@/components/common/components/SectionTitle";
import ContactFormFields from "../components/ContactFormFields";

const formVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as const },
};

export default function CTASection() {
  const { formData, isSubmitting, handleInputChange, handleSubmit, setClick } = useFormHandler();
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar";

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-purple-50 via-white to-cyan-50 text-center relative overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <SectionTitle
          title={
            lang === "ja" ? (
              <>
                {t.contact.sectionTitle.split("・")[0]}
                <br className="md:hidden" />
                <span className="md:inline hidden">・</span>
                {t.contact.sectionTitle.split("・")[1]}
              </>
            ) : (
              t.contact.sectionTitle
            )
          }
          description={t.contact.sectionDescription}
        />

        <motion.div
          className="max-w-[600px] mx-auto mt-12 bg-white/90 backdrop-blur-sm py-8 px-6 md:p-12 rounded-3xl shadow-xl border border-purple-100"
          variants={formVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          <form
            onSubmit={handleSubmit}
            className={isRTL ? "space-y-6 text-right" : "space-y-6 text-left"}
          >
            <ContactFormFields
              formData={formData}
              isSubmitting={isSubmitting}
              handleInputChange={handleInputChange}
              onSubmitClick={() => setClick(true)}
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
}
