import { buildBlogCollectionPageSchema, buildBreadcrumbSchema } from "@/lib/jsonld";
import { baseUrl } from "@/utils/baseUrl";
import type { SiteLanguage } from "@/i18n/languageConfig";

export function buildBlogsPageSchemas(
  lang: SiteLanguage,
  localized: { title: string; description: string },
  blogs: { slug: string; title?: string; description?: string; date?: string }[]
) {
  return [
    buildBlogCollectionPageSchema({ lang, title: localized.title, description: localized.description, blogs }),
    buildBreadcrumbSchema([
      { name: "Nipporia", url: `${baseUrl}/${lang}` },
      { name: localized.title, url: `${baseUrl}/${lang}/blogs` },
    ]),
  ];
}
