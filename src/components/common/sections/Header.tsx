"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/common/components/LanguageSwitcher";
import { useScrollDetection } from "@/hooks/scroll/useScrollDetection";
import { socialLinks } from "@/content/social";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollDetection(50);
  const { t, lang, localizePath } = useLanguage();
  const isRTL = lang === "ar";

  const navLinks = [
    { href: localizePath("/#home"), title: t.nav.home },
    { href: localizePath("/#process"), title: t.nav.process },
    { href: localizePath("/#visual-examples"), title: t.nav.visualExamples },
    { href: localizePath("/#services"), title: t.nav.services },
    { href: localizePath("/#pricing"), title: t.nav.pricing },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${scrolled
        ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-purple-500/10"
        : "bg-white/70 backdrop-blur-md"
      }`}>
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center" dir={isRTL ? "rtl" : "ltr"}>
        {/* Logo - fixed left */}
        <Link
          href={localizePath("/")}
          className="shrink-0 hover:scale-105 transition-transform duration-300 flex items-center gap-2"
        >
          <Image
            src="/images/logo.svg"
            alt="Nipporia Logo"
            width={40}
            height={40}
            priority
            className="w-10 h-10 object-contain rounded-lg"
          />
          <span className="text-xl font-bold text-[#1a2744] uppercase tracking-[0.15em]">
            Nipporia
          </span>
        </Link>

        {/* Nav links - center */}
        <ul className="hidden lg:flex items-center justify-center flex-1 mx-4">
          {navLinks.map((link, _index) => (
            <li key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className={`text-gray-700 text-base font-semibold whitespace-nowrap relative hover:text-purple-600 transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-600 after:to-cyan-500 after:transition-all after:duration-300 hover:after:w-full ${isRTL ? "after:right-0" : "after:left-0"
                  }`}
              >
                {link.title}
              </Link>
              {_index < navLinks.length - 1 && (
                <span
                  aria-hidden="true"
                  className="mx-4 h-5 w-px bg-gray-300/70"
                ></span>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button & Language - right */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href={localizePath("/#contact")}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-sm whitespace-nowrap"
          >
            {t.nav.contact}
          </Link>
          <LanguageSwitcher />
        </div>
        <div className={`flex items-center gap-3 lg:hidden ${isRTL ? "mr-auto" : "ml-auto"}`}>
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={isMenuOpen ? t.nav.menu.close : t.nav.menu.open}
            aria-expanded={isMenuOpen}
            className="relative grid place-items-center w-11 h-11 rounded-xl border border-purple-200/70 bg-white/80 shadow-sm shadow-purple-300/30 transition-all duration-300 hover:border-purple-300 hover:shadow-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={(e) => {
              if (e.key === " ") {
                e.preventDefault();
                setIsMenuOpen(!isMenuOpen);
              }
            }}
          >
            <span
              className={`absolute w-6 h-[2.5px] bg-purple-600 rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-[7px]"
                }`}
            ></span>
            <span
              className={`absolute w-6 h-[2.5px] bg-purple-600 rounded-full transition-all duration-200 ease-in-out ${isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
            ></span>
            <span
              className={`absolute w-6 h-[2.5px] bg-purple-600 rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-[7px]"
                }`}
            ></span>
          </button>
        </div>
      </div>
      <ul
        className={`lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl transition-all duration-300 ease-in-out border-purple-100 ${isMenuOpen ? "max-h-[500px] opacity-100 p-6 border-t" : "max-h-0 opacity-0 pointer-events-none"
          } ${isRTL ? "text-right" : "text-left"}`}
      >
        {navLinks.map((link, _index) => (
          <li
            key={link.href}
            className={`py-3 ${_index < navLinks.length - 1 ? "border-b border-purple-100" : ""
              }`}
          >
            <Link
              href={link.href}
              className="block text-gray-700 font-medium hover:text-purple-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </Link>
          </li>
        ))}
        <li className="py-3">
          <Link
            href={localizePath("/#contact")}
            className="inline-block w-full p-3 md:px-5 md:py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium rounded-lg md:rounded-full hover:shadow-lg transition-all duration-300 text-sm text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.contact}
          </Link>
        </li>
        <li className="pt-3 flex items-center justify-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:text-white ${social.hoverColor} transition-all duration-300`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d={social.pathD} />
              </svg>
            </a>
          ))}
        </li>
      </ul>
    </nav>
  );
}
