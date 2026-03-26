"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

const Index: React.FC = () => {
  const { lang } = useLanguage();

  const localized = {
    ja: {
      message: "お探しのページが見つかりませんでした。",
      backHome: "ホームに戻る",
    },
    en: {
      message: "The page you are looking for could not be found.",
      backHome: "Back to Home",
    },
    ar: {
      message: "تعذر العثور على الصفحة التي تبحث عنها.",
      backHome: "العودة إلى الصفحة الرئيسية",
    },
  } as const;

  const localeText = localized[lang];

  return (
    <section className="relative w-full py-20 text-center px-5 h-[calc(100vh-60px)] flex items-center justify-center bg-gradient-to-br from-cream via-peach to-lavender">
      <div>
        <h1 className="text-9xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text font-bold">404</h1>
        <p className="text-lg lg:text-2xl font-normal text-gray-700 mt-4">
          {localeText.message}
          <br />
          <Link href="/" className="text-purple-600 underline hover:text-pink-500 transition-colors">
            {localeText.backHome}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Index;