import "@/styles/globals.css";
import Header from "@/components/common/sections/Header";
import Footer from "@/components/common/sections/Footer";
import FloatingSocial from "@/components/common/components/FloatingSocial";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { DEFAULT_LANGUAGE } from "@/i18n/languageConfig";
import { isRTL } from "@/i18n/serverLanguage";
import NotFoundPage from "@/components/pages/404";

export default function GlobalNotFound() {
  // Global 404s don't have a language param in the URL, so we fallback to the default
  const lang = DEFAULT_LANGUAGE;

  return (
    <html lang={lang} dir={isRTL(lang) ? "rtl" : "ltr"}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col">
        {/* We wrap the page in the LanguageProvider so your translations work */}
        <LanguageProvider currentLang={lang}>
          <Header />
          <FloatingSocial />
          
          <main className="flex-grow">
            {/* Your beautifully styled 404 component */}
            <NotFoundPage />
          </main>
          
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}