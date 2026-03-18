"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useFormHandler } from "@/hooks/useFormHandler";
import SectionTitle from "@/components/common/components/SectionTitle";
import { useLanguage } from "@/i18n/LanguageContext";

export default function CTASection() {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    staggerDelay: 320,
  });

  const { formData, isSubmitting, handleInputChange, handleSubmit, setClick } =
    useFormHandler();
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-purple-50 via-white to-cyan-50 text-center relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <SectionTitle
          title={t.contact.sectionTitle}
          description={t.contact.sectionDescription}
        />
        <div className="animate-slide max-w-[600px] mx-auto mt-12 bg-white/90 backdrop-blur-sm py-8 px-6 md:p-12 rounded-3xl shadow-xl border border-purple-100">
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="mb-4 md:mb-6">
              <label htmlFor="company" className="block mb-2 text-gray-700 font-medium">
                {t.contact.companyLabel}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div className="mb-4 md:mb-6">
              <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div className="mb-4 md:mb-6">
              <label htmlFor="website" className="block mb-2 text-gray-700 font-medium">
                {t.contact.websiteLabel}
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div className="mb-4 md:mb-6">
              <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                {t.contact.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 min-h-[120px] resize-y outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              onClick={() => setClick(true)}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-bold text-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
            >
              {isSubmitting ? t.contact.submitting : t.contact.submitButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
