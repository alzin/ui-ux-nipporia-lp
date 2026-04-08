import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/jsonld";
import { baseUrl } from "@/utils/baseUrl";
import type { SiteLanguage } from "@/i18n/languageConfig";

export function buildBlogSlugSchemas(
  lang: SiteLanguage,
  slug: string,
  metadata: { title?: string; description?: string; date?: string; images?: string[]; tags?: string[] },
  blogsTitle: string
) {
  return [
    buildArticleSchema({ lang, slug, ...metadata }),
    buildBreadcrumbSchema([
      { name: "Nipporia", url: `${baseUrl}/${lang}` },
      { name: blogsTitle, url: `${baseUrl}/${lang}/blogs` },
      { name: metadata.title ?? slug, url: `${baseUrl}/${lang}/blogs/${encodeURIComponent(slug)}` },
    ]),
  ];
}
