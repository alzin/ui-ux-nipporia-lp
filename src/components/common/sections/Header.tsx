"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/common/components/LanguageSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#services", title: t.nav.services },
    { href: "/#pricing", title: t.nav.pricing },
    { href: "/blogs", title: t.nav.blog },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${
      scrolled
        ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-purple-500/10"
        : "bg-white/70 backdrop-blur-md"
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center">
        {/* Logo - fixed left */}
        <Link
          href={"/"}
          className="shrink-0 hover:scale-105 transition-transform duration-300 flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-lg overflow-hidden relative">
            <Image
              src="/images/og-image.jpg"
              alt="Nipporia"
              width={200}
              height={200}
              className="absolute scale-[2] top-[20%] left-[0%]"
            />
          </div>
          <span className="text-xl font-bold text-[#1a2744] uppercase tracking-[0.15em]">
            Nipporia
          </span>
        </Link>

        {/* Nav links - center */}
        <ul className="hidden lg:flex gap-8 items-center justify-center flex-1 mx-4">
          {navLinks.map((link, _index) => (
            <li key={_index}>
              <Link
                href={link.href}
                className="text-gray-700 text-base font-semibold whitespace-nowrap relative hover:text-purple-600 transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-600 after:to-cyan-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button & Language - right */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href="/#contact"
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-sm whitespace-nowrap"
          >
            {t.nav.contact}
          </Link>
          <LanguageSwitcher />
        </div>
        <div className="flex items-center gap-3 lg:hidden ml-auto">
          <LanguageSwitcher />
          <div
            role="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className={`flex flex-col gap-1.5 cursor-pointer p-2 ${
              isMenuOpen ? "open" : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsMenuOpen(!isMenuOpen);
              }
            }}
          >
            <span
              className="w-6 h-0.5 bg-purple-600 transition-all duration-300 ease-in-out rounded-full"
              style={
                isMenuOpen
                  ? { transform: "rotate(45deg) translate(4px, 4px)" }
                  : {}
              }
            ></span>
            <span
              className="w-6 h-0.5 bg-purple-600 transition-all duration-300 ease-in-out rounded-full"
              style={isMenuOpen ? { opacity: 0 } : {}}
            ></span>
            <span
              className="w-6 h-0.5 bg-purple-600 transition-all duration-300 ease-in-out rounded-full"
              style={
                isMenuOpen
                  ? { transform: "rotate(-45deg) translate(5px, -5px)" }
                  : {}
              }
            ></span>
          </div>
        </div>
      </div>
      <ul
        className={`lg:hidden bg-white/95 backdrop-blur-xl p-6 transition-all duration-300 ease-in-out border-t border-purple-100 ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 hidden"
        }`}
      >
        {navLinks.map((link, _index) => (
          <li key={_index} className="py-3">
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
            href="/#contact"
            className="inline-block px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
