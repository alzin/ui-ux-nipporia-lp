import { baseUrl } from "@/utils/baseUrl";
import type { SiteLanguage } from "@/i18n/languageConfig";

const LOCALE_MAP: Record<SiteLanguage, string> = {
  ja: "ja-JP",
  en: "en-US",
  ar: "ar",
};

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Nipporia",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/logo.webp`,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+81-70-8905-8857",
      contactType: "customer service",
      email: "info@nipporia.com",
      availableLanguage: ["Japanese", "English", "Arabic"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1-9-4-902 Kukichuo",
      addressLocality: "Kuki City",
      addressRegion: "Saitama",
      addressCountry: "JP",
    },
    founder: {
      "@type": "Person",
      name: "Mohamad Ghaith Alzin",
    },
    knowsLanguage: ["ja", "en", "ar"],
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Nipporia",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: ["ja-JP", "en-US", "ar"],
  };
}

export function buildWebPageSchema({
  lang,
  title,
  description,
  path = "",
}: {
  lang: SiteLanguage;
  title: string;
  description: string;
  path?: string;
}) {
  const pageUrl = `${baseUrl}/${lang}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    isPartOf: { "@id": `${baseUrl}/#website` },
    publisher: { "@id": `${baseUrl}/#organization` },
    inLanguage: LOCALE_MAP[lang],
  };
}

export function buildServiceListSchema({
  lang,
  services,
}: {
  lang: SiteLanguage;
  services: { title: string; description: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${baseUrl}/${lang}/#services`,
    name: "Nipporia Services",
    url: `${baseUrl}/${lang}/#services`,
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: { "@id": `${baseUrl}/#organization` },
        url: `${baseUrl}/${lang}/#services`,
        areaServed: "Worldwide",
      },
    })),
  };
}

export function buildBlogCollectionPageSchema({
  lang,
  title,
  description,
  blogs,
}: {
  lang: SiteLanguage;
  title: string;
  description: string;
  blogs: { slug: string; title?: string; description?: string; date?: string }[];
}) {
  const pageUrl = `${baseUrl}/${lang}/blogs`;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    isPartOf: { "@id": `${baseUrl}/#website` },
    publisher: { "@id": `${baseUrl}/#organization` },
    inLanguage: LOCALE_MAP[lang],
    hasPart: blogs.map((blog) => ({
      "@type": "Article",
      "@id": `${baseUrl}/${lang}/blogs/${encodeURIComponent(blog.slug)}#article`,
      headline: blog.title ?? blog.slug,
      description: blog.description,
      datePublished: blog.date,
      url: `${baseUrl}/${lang}/blogs/${encodeURIComponent(blog.slug)}`,
    })),
  };
}

export function buildArticleSchema({
  lang,
  slug,
  title,
  description,
  date,
  images,
  tags,
}: {
  lang: SiteLanguage;
  slug: string;
  title?: string;
  description?: string;
  date?: string;
  images?: string[];
  tags?: string[];
}) {
  const articleUrl = `${baseUrl}/${lang}/blogs/${encodeURIComponent(slug)}`;
  const image =
    images?.[0]
      ? images[0].startsWith("http")
        ? images[0]
        : `${baseUrl}${images[0]}`
      : `${baseUrl}/images/og-image.jpg`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    headline: title ?? slug,
    description,
    url: articleUrl,
    image: {
      "@type": "ImageObject",
      url: image,
    },
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Nipporia",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Nipporia",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.webp`,
      },
    },
    isPartOf: {
      "@type": "WebPage",
      "@id": `${baseUrl}/${lang}/blogs#webpage`,
    },
    keywords: tags?.join(", "),
    inLanguage: LOCALE_MAP[lang],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${articleUrl}#webpage`,
    },
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
