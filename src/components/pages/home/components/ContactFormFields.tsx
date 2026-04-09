"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { TFormData } from "@/types/formData.type";

const inputClass =
  "w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

type Props = {
  formData: TFormData;
  isSubmitting: boolean;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  onSubmitClick: () => void;
};

export default function ContactFormFields({
  formData,
  isSubmitting,
  handleInputChange,
  onSubmitClick,
}: Props) {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <>
      <div className="mb-4 md:mb-6">
        <label htmlFor="company" className="block mb-2 text-gray-700 font-medium">
          {c.companyLabel}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className={inputClass}
        />
      </div>

      <div className="mb-4 md:mb-6">
        <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">
          {c.nameLabel}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className={inputClass}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
          {c.emailLabel}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className={inputClass}
        />
      </div>

      <div className="mb-4 md:mb-6">
        <label htmlFor="website" className="block mb-2 text-gray-700 font-medium">
          {c.websiteLabel}
        </label>
        <input
          type="url"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className={inputClass}
        />
      </div>

      <div className="mb-4 md:mb-6">
        <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
          {c.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className={`${inputClass} min-h-[120px] resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        onClick={onSubmitClick}
        className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-bold text-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
      >
        {isSubmitting ? c.submitting : c.submitButton}
      </button>
    </>
  );
}
