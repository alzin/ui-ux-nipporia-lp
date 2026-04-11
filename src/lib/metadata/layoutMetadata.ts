import type { Metadata } from "next";
import { getLocalizedPageContent } from "@/content/localizedPages";
import { resolveSiteLanguage } from "@/i18n/serverLanguage";
import { baseUrl } from "@/utils/baseUrl";

export async function generateLayoutMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = resolveSiteLanguage((await params).lang);
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
