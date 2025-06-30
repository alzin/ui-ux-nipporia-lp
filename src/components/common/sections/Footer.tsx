import navLinks from "@/content/header/navLinks";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-dark-lighter text-center border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          {navLinks.map((link, _index) => (
            <Link
              key={_index}
              href={link.href}
              className="text-gray hover:text-primary transition-colors duration-300"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <p className="text-gray text-[0.9rem]">
          © {currentYear} WebTransform. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
