import { GoogleTagManager } from "@next/third-parties/google";
import "@/styles/globals.css";
import Header from "@/components/common/sections/Header";
import Footer from "@/components/common/sections/Footer";
import FloatingSocial from "@/components/common/components/FloatingSocial";
import TawkChat from "@/components/common/components/TawkChat";
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
    <html lang={lang} dir={rtl ? "rtl" : "ltr"} className="scroll-smooth">
      <head>
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
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
        <TawkChat
          lang={lang}
          propertyId={process.env.TAWK_PROPERTY_ID ?? ""}
          widgetId={process.env.TAWK_WIDGET_ID_JA ?? ""}
        />
      </body>
    </html>
  );
}
