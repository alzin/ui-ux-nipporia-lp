import { GoogleTagManager } from "@next/third-parties/google";
import "@/styles/globals.css";
import Header from "@/components/common/sections/Header";
import Footer from "@/components/common/sections/Footer";
import FloatingSocial from "@/components/common/components/FloatingSocial";
import StickyCTA from "@/components/common/components/StickyCTA";
// import TawkChat from "@/components/common/components/TawkChat";
import { SchemaInjector } from "@/components/common/components/SchemaInjector";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { isRTL, resolveSiteLanguage } from "@/i18n/serverLanguage";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/jsonld";
import { resolveFontConfig } from "@/lib/fonts";
import { generateLayoutMetadata } from "@/lib/metadata/layoutMetadata";

export { generateLayoutMetadata as generateMetadata };

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<LangLayoutProps>) {
  const lang = resolveSiteLanguage((await params).lang);
  const rtl = isRTL(lang);
  const { fontVariable, fontFamily } = resolveFontConfig(rtl);

  return (
    <html lang={lang} dir={rtl ? "rtl" : "ltr"} data-scroll-behavior="smooth">
      <head>
        {/* Preload above-the-fold hero service icons for faster LCP */}
        <link rel="preload" href="/images/icons/ui-ux-design.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/images/icons/mobile-apps.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/images/icons/websites.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/images/icons/ai-solutions.svg" as="image" type="image/svg+xml" />
        <SchemaInjector schemas={[buildOrganizationSchema(), buildWebSiteSchema()]} />
      </head>
      <GoogleTagManager gtmId="GTM-NQGV6M9D" />

      <body
        suppressHydrationWarning
        className={`min-h-screen flex flex-col ${fontVariable}`}
        style={{ fontFamily }}
      >
        <LanguageProvider currentLang={lang}>
          <Header />
          <FloatingSocial />
          <StickyCTA />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
        {/* <TawkChat
          lang={lang}
          propertyId={process.env.TAWK_PROPERTY_ID ?? ""}
          widgetId={process.env.TAWK_WIDGET_ID_JA ?? ""}
        /> */}
      </body>
    </html>
  );
}
