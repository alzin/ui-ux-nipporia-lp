import { buildWebPageSchema, buildBreadcrumbSchema } from "@/lib/jsonld";
import { baseUrl } from "@/utils/baseUrl";
import type { SiteLanguage } from "@/i18n/languageConfig";

export function buildCommerceDisclosureSchemas(
  lang: SiteLanguage,
  localized: { metadataTitle: string; metadataDescription: string }
) {
  return [
    buildWebPageSchema({ lang, title: localized.metadataTitle, description: localized.metadataDescription, path: "/commerce-disclosure" }),
    buildBreadcrumbSchema([
      { name: "Nipporia", url: `${baseUrl}/${lang}` },
      { name: localized.metadataTitle, url: `${baseUrl}/${lang}/commerce-disclosure` },
    ]),
  ];
}
