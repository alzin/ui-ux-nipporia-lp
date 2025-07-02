"use client";
import Link from "next/link";
import { useState } from "react";
import navLinks from "@/content/header/navLinks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur-[20px] border-b border-white/10 z-[1000] transition-all duration-300 ease-in-out">
      <div className="max-w-[1200px] mx-auto px-8 py-4 flex justify-between items-center">
        <Link
          href={"/"}
          className="text-[1.5rem] font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text bg-[length:200%_200%] animate-gradientShift hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          WebTransform
        </Link>
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link, _index) => (
            <li key={_index}>
              <Link
                href={link.href}
                className="text-white relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-width after:duration-300 hover:after:w-full"
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
          className={`md:hidden flex flex-col gap-1 cursor-pointer ${
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
            className="w-[25px] h-[3px] bg-white transition-all duration-300 ease-in-out"
            style={
              isMenuOpen
                ? { transform: "rotate(45deg) translate(5px, 5px)" }
                : {}
            }
          ></span>
          <span
            className="w-[25px] h-[3px] bg-white transition-all duration-300 ease-in-out"
            style={isMenuOpen ? { opacity: 0 } : {}}
          ></span>
          <span
            className="w-[25px] h-[3px] bg-white transition-all duration-300 ease-in-out"
            style={
              isMenuOpen
                ? { transform: "rotate(-45deg) translate(6px, -6px)" }
                : {}
            }
          ></span>
        </div>
      </div>
      <ul
        className={`md:hidden bg-dark/95 backdrop-blur-[20px] p-4 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 hidden"
        }`}
      >
        {navLinks.map((link, _index) => (
          <li key={_index}>
            <Link
              href={link.href}
              className="block py-2 text-white relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-width after:duration-300 hover:after:w-full"
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
