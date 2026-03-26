import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import "../styles/globals.css";
import Header from "@/components/common/sections/Header";
import Footer from "@/components/common/sections/Footer";
import FloatingSocial from "@/components/common/components/FloatingSocial";
import { baseUrl } from "@/utils/baseUrl";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { getRequestLanguage, isRTL, type SiteLanguage } from "@/i18n/serverLanguage";

const metadataByLanguage: Record<SiteLanguage, {
  titleDefault: string;
  titleTemplate: string;
  description: string;
  applicationName: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImageAlt: string;
}> = {
  ja: {
    titleDefault:
      "Webサイト変革サービス | 低品質なサイトをプロフェッショナルに変える専門家",
    titleTemplate: "%s | Webサイト変革サービス",
    description:
      "私たちは、デザインが悪く、トラフィックが少ないウェブサイトを、最新のNext.jsとSEO技術を使ってプロフェッショナルなサイトに変革します。実績豊富なWebサイト改善サービス。",
    applicationName: "Webサイト変革サービス",
    keywords: [
      "ウェブサイト改善",
      "UI/UX改善",
      "Next.js開発",
      "SEO対策",
      "Google広告",
      "ウェブデザイン",
      "サイトリニューアル",
    ],
    ogTitle: "Webサイト変革サービス | 低品質なサイトをプロフェッショナルに",
    ogDescription:
      "デザインが悪く、トラフィックが少ないウェブサイトを、最新技術でプロフェッショナルなサイトに変革します",
    ogImageAlt: "Webサイト変革サービスのOG画像",
  },
  en: {
    titleDefault:
      "Website Transformation Service | Turn low-performing websites into professional assets",
    titleTemplate: "%s | Website Transformation Service",
    description:
      "We transform poorly designed, low-traffic websites into professional platforms using modern Next.js and SEO strategies.",
    applicationName: "Website Transformation Service",
    keywords: [
      "website optimization",
      "UI UX improvement",
      "Next.js development",
      "SEO",
      "Google Ads",
      "web design",
      "site redesign",
    ],
    ogTitle:
      "Website Transformation Service | Turn low-performing websites into professional assets",
    ogDescription:
      "Transform poorly designed, low-traffic websites into professional websites with modern technologies.",
    ogImageAlt: "Website Transformation Service OG image",
  },
  ar: {
    titleDefault:
      "خدمة تطوير وتحويل المواقع | حوّل موقعك إلى منصة احترافية تدعم نمو أعمالك",
    titleTemplate: "%s | خدمة تطوير وتحويل المواقع",
    description:
      "نحوّل المواقع ضعيفة التصميم وقليلة الزيارات إلى مواقع احترافية باستخدام Next.js وأفضل ممارسات SEO الحديثة.",
    applicationName: "خدمة تطوير وتحويل المواقع",
    keywords: [
      "تحسين المواقع",
      "تحسين واجهة وتجربة المستخدم",
      "تطوير Next.js",
      "تحسين محركات البحث",
      "إعلانات Google",
      "تصميم مواقع",
      "إعادة تصميم الموقع",
    ],
    ogTitle:
      "خدمة تطوير وتحويل المواقع | حوّل موقعك إلى منصة احترافية",
    ogDescription:
      "نحوّل المواقع ضعيفة الأداء إلى مواقع احترافية باستخدام أحدث التقنيات.",
    ogImageAlt: "صورة المعاينة لخدمة تطوير وتحويل المواقع",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getRequestLanguage();
  const localized = metadataByLanguage[lang];

  return {
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
      canonical: baseUrl,
    },
    openGraph: {
      type: "website",
      url: baseUrl,
      title: localized.ogTitle,
      description: localized.ogDescription,
      siteName: localized.applicationName,
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
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
      images: [`${baseUrl}/images/og-image.jpg`],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getRequestLanguage();

  return (
    <html lang={lang} dir={isRTL(lang) ? "rtl" : "ltr"} className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XLXWCV0Q9V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XLXWCV0Q9V');
          `}
        </Script>
      </head>
      <GoogleTagManager gtmId="G-your-gtm-id" />
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans JP", "Noto Sans Arabic", sans-serif',
        }}
      >
        <LanguageProvider>
          <Header />
          <FloatingSocial />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}