"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import navLinks from "@/content/header/navLinks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${
      scrolled 
        ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-purple-500/10" 
        : "bg-white/70 backdrop-blur-md"
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href={"/"}
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-transparent bg-clip-text bg-[length:200%_200%] animate-gradientShift hover:scale-105 transition-transform duration-300"
        >
          Nipporia
        </Link>
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link, _index) => (
            <li key={_index}>
              <Link
                href={link.href}
                className="text-gray-700 font-medium relative hover:text-purple-600 transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-600 after:to-cyan-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div
          role="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className={`md:hidden flex flex-col gap-1.5 cursor-pointer p-2 ${
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
      <ul
        className={`md:hidden bg-white/95 backdrop-blur-xl p-6 transition-all duration-300 ease-in-out border-t border-purple-100 ${
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
      </ul>
    </nav>
  );
}