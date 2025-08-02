import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import "../styles/globals.css";
// sections
import Header from "@/components/common/sections/Header";
import Footer from "@/components/common/sections/Footer";
import { baseUrl } from "@/utils/baseUrl";

// metadata
export const metadata: Metadata = {
  icons: "/favicon.ico",
  title: {
    default:
      "Webサイト変革サービス | 低品質なサイトをプロフェッショナルに変える専門家",
    template: "%s | Webサイト変革サービス",
  },

  description:
    "私たちは、デザインが悪く、トラフィックが少ないウェブサイトを、最新のNext.jsとSEO技術を使ってプロフェッショナルなサイトに変革します。実績豊富なWebサイト改善サービス。",

  applicationName: "Webサイト変革サービス",

  generator: "Next.js",

  keywords: [
    "ウェブサイト改善",
    "UI/UX改善",
    "Next.js開発",
    "SEO対策",
    "Google広告",
    "ウェブデザイン",
    "サイトリニューアル",
  ],

  referrer: "origin",

  creator: "Webサイト変革サービス",

  publisher: "Webサイト変革サービス",

  alternates: {
    canonical: baseUrl,
  },

  openGraph: {
    type: "website",
    url: baseUrl,
    title: "Webサイト変革サービス | 低品質なサイトをプロフェッショナルに",
    description:
      "デザインが悪く、トラフィックが少ないウェブサイトを、最新技術でプロフェッショナルなサイトに変革します",
    siteName: "Webサイト変革サービス",
    images: [{ url: '/images/og-image.jpg' }],
  },

  twitter: {
    card: "summary_large_image",
    description:
      "デザインが悪く、トラフィックが少ないウェブサイトを、最新技術でプロフェッショナルなサイトに変革します",
    title: "Webサイト変革サービス | 低品質なサイトをプロフェッショナルに",
    images: '/images/og-image.jpg',
  },

  verification: {
    google: "your-google-verification-id",
  },

  category: "Technology",

  classification: "Web Development Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
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
        className="min-h-screen flex flex-col"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans JP", sans-serif',
        }}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
