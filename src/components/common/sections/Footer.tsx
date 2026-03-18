"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-[#f6effb] via-[#eddcf6] to-[#e7d2f1] text-slate-900 py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden relative shrink-0">
                <Image
                  src="/images/og-image.jpg"
                  alt="Nipporia"
                  width={200}
                  height={200}
                  className="absolute scale-[2] top-[20%] left-[0%]"
                />
              </div>
              <span className="text-3xl font-bold text-[#1a2744] uppercase tracking-[0.15em]">
                Nipporia
              </span>
            </Link>

            <p className="mt-4 text-slate-700 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#process"
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  {t.nav.process}
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  {t.footer.quickLinkItems.pricing}
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  {t.footer.quickLinkItems.blog}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">{t.footer.legalTitle}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  {t.footer.legalItems.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  {t.footer.legalItems.terms}
                </Link>
              </li>
              <li>
                <Link
                  href="/commerce-disclosure"
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  {t.footer.legalItems.commerce}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            &copy; {currentYear} Nipporia. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61578303825627"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/nipporia_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/nipporia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
