import { buildWebPageSchema, buildServiceListSchema } from "@/lib/jsonld";
import type { SiteLanguage } from "@/i18n/languageConfig";

export function buildHomePageSchemas(
  lang: SiteLanguage,
  localized: { titleDefault: string; description: string },
  services: { title: string; description: string }[]
) {
  return [
    buildWebPageSchema({ lang, title: localized.titleDefault, description: localized.description }),
    buildServiceListSchema({ lang, services }),
  ];
}
