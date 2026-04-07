import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Noto_Sans_JP, Noto_Sans_Arabic } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/common/sections/Header";
import Footer from "@/components/common/sections/Footer";
import FloatingSocial from "@/components/common/components/FloatingSocial";
import TawkChat from "@/components/common/components/TawkChat";
import { getLocalizedPageContent } from "@/content/localizedPages";
import { baseUrl } from "@/utils/baseUrl";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { isRTL, resolveSiteLanguage } from "@/i18n/serverLanguage";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/jsonld";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
  preload: false,
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-arabic",
  preload: false,
});

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
    keywords: localized.keywords,
    referrer: "strict-origin-when-cross-origin",
    creator: localized.applicationName,
    publisher: localized.applicationName,
    alternates: {
      canonical: localizedBaseUrl,
      languages: {
        "x-default": `${baseUrl}/ja`,
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
      google: "YlRJy02oscYlTbYz8nzaNfv9e-a_bAHNPKfkC4iBZHg",
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
  const rtl = isRTL(lang);
  const fontVariable = rtl ? notoSansArabic.variable : notoSansJP.variable;
  const fontFamily = rtl
    ? 'var(--font-noto-sans-arabic), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    : 'var(--font-noto-sans-jp), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

  const orgSchema = buildOrganizationSchema();
  const websiteSchema = buildWebSiteSchema();

  return (
    <html
      lang={lang}
      dir={rtl ? "rtl" : "ltr"}
      className="scroll-smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([orgSchema, websiteSchema]),
          }}
        />
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
        <TawkChat lang={lang} />
      </body>
    </html>
  );
}
