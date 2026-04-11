import { buildWebPageSchema, buildBreadcrumbSchema } from "@/lib/jsonld";
import { baseUrl } from "@/utils/baseUrl";
import type { SiteLanguage } from "@/i18n/languageConfig";

export function buildTemplatesPageSchemas(
  lang: SiteLanguage,
  localized: { title: string; description: string }
) {
  return [
    buildWebPageSchema({ lang, title: localized.title, description: localized.description, path: "/templates" }),
    buildBreadcrumbSchema([
      { name: "Nipporia", url: `${baseUrl}/${lang}` },
      { name: localized.title, url: `${baseUrl}/${lang}/templates` },
    ]),
  ];
}
