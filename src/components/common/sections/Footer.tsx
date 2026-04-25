"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { socialLinks } from "@/content/social";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, localizePath } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-[#f6effb] via-[#eddcf6] to-[#e7d2f1] text-slate-900 py-16 pb-28 md:pb-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href={localizePath("/")}
              className="inline-flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden relative shrink-0">
                <Image
                  src="/images/logo.svg"
                  alt="Nipporia"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
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
            <h3 className="text-lg font-bold mb-4 text-[#7E22CE]">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={localizePath("/#services")}
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  {t.footer.quickLinkItems.services}
                </Link>
              </li>
              {/* <li>
                <Link
                  href={localizePath("/#pricing")}
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  {t.footer.quickLinkItems.pricing}
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href={localizePath("/templates")}
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  {t.nav.templates}
                </Link>
              </li> */}
              <li>
                <Link
                  href={localizePath("/blogs")}
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  {t.footer.quickLinkItems.blog}
                </Link>
              </li>
              <li>
                <Link
                  href={localizePath("/business-overview")}
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  {t.nav.businessOverview}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#7E22CE]">{t.footer.legalTitle}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={localizePath("/privacy-policy")}
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  {t.footer.legalItems.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={localizePath("/terms-of-service")}
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  {t.footer.legalItems.terms}
                </Link>
              </li>
              <li>
                <Link
                  href={localizePath("/commerce-disclosure")}
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
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                aria-label={social.label}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.pathD} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
