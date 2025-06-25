'use client'
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useFormHandler } from "@/hooks/useFormHandler";
import React from "react";

export default function CTASection() {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    staggerDelay: 320,
  });

  const {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit,
    setClick,
  } = useFormHandler();

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 text-center"
      ref={sectionRef}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="animate-slide text-[clamp(2rem,4vw,3rem)] mb-6 font-bold">
          今すぐWebサイトを変革しましょう
        </h2>
        <p className="animate-slide text-[1.3rem] text-gray mb-8 max-w-[600px] mx-auto">
          無料相談で、あなたのWebサイトの可能性をお見せします
        </p>
        <div className="animate-slide max-w-[600px] mx-auto mt-12 bg-dark-lighter p-12 rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="mb-6">
              <label htmlFor="company" className="block mb-2 text-gray">
                会社名
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-[10px] text-white outline-none focus:border-primary focus:bg-white/8 transition-all duration-300 max-h-[52px] disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-gray">
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-[10px] text-white outline-none focus:border-primary focus:bg-white/8 transition-all duration-300 max-h-[52px] disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-gray">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-[10px] text-white outline-none focus:border-primary focus:bg-white/8 transition-all duration-300 max-h-[52px] disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="website" className="block mb-2 text-gray">
                現在のWebサイトURL（任意）
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-[10px] text-white outline-none focus:border-primary focus:bg-white/8 transition-all duration-300 max-h-[52px] disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-gray">
                お悩み・ご要望
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-[10px] text-white min-h-[120px] resize-y outline-none focus:border-primary focus:bg-white/8 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={() => setClick(true)}
              className="w-full py-5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-[10px] font-bold text-[1.1rem] hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
            >
              {isSubmitting ? "送信中..." : "無料相談を申し込む"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}