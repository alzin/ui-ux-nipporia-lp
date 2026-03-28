"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

const Index: React.FC = () => {
  const { t, localizePath } = useLanguage();
  const localeText = t.notFoundPage;

  return (
    <section className="relative w-full py-20 text-center px-5 h-[calc(100vh-60px)] flex items-center justify-center bg-gradient-to-br from-cream via-peach to-lavender">
      <div>
        <h1 className="text-9xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text font-bold">404</h1>
        <p className="text-lg lg:text-2xl font-normal text-gray-700 mt-4">
          {localeText.message}
          <br />
          <Link href={localizePath("/")} className="text-purple-600 underline hover:text-pink-500 transition-colors">
            {localeText.backHome}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Index;