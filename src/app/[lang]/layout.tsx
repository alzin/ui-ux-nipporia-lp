import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
// import Script from "next/script";
import "@/styles/globals.css";
import Header from "@/components/common/sections/Header";
import Footer from "@/components/common/sections/Footer";
import FloatingSocial from "@/components/common/components/FloatingSocial";
import { getLocalizedPageContent } from "@/content/localizedPages";
import { baseUrl } from "@/utils/baseUrl";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { isRTL, resolveSiteLanguage } from "@/i18n/serverLanguage";

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolveSiteLanguage(resolvedParams.lang);
  const localized = getLocalizedPageContent(lang).layout;
  const localizedBaseUrl = `${baseUrl}/${lang}`;

  return {
    metadataBase: new URL(baseUrl),
    icons: "/favicon.ico",
    title: {
      default: localized.titleDefault,
      template: localized.titleTemplate,
    },
    description: localized.description,
    applicationName: localized.applicationName,
    generator: "Next.js",
    keywords: localized.keywords,
    referrer: "origin",
    creator: localized.applicationName,
    publisher: localized.applicationName,
    alternates: {
      canonical: localizedBaseUrl,
      languages: {
        ja: `${baseUrl}/ja`,
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
    openGraph: {
      type: "website",
      url: localizedBaseUrl,
      title: localized.ogTitle,
      description: localized.ogDescription,
      siteName: localized.applicationName,
      images: [
        {
          url: `/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: localized.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: localized.ogTitle,
      description: localized.ogDescription,
      images: [`/images/og-image.jpg`],
    },
    verification: {
      google: "your-google-verification-id",
    },
    category: "Technology",
    classification: "Web Development Service",
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<LangLayoutProps>) {
  const resolvedParams = await params;
  const lang = resolveSiteLanguage(resolvedParams.lang);

  return (
    <html
      lang={lang}
      dir={isRTL(lang) ? "rtl" : "ltr"}
      className="scroll-smooth"
    >
      <head></head>

      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans JP", "Noto Sans Arabic", sans-serif',
        }}
      >
        <LanguageProvider currentLang={lang}>
          <Header />
          <FloatingSocial />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
        <GoogleTagManager gtmId="GTM-NQGV6M9D" />
        <GoogleAnalytics gaId="G-XLXWCV0Q9V" />
      </body>
    </html>
  );
}
