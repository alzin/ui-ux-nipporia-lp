import { resolveSiteLanguage } from "@/i18n/serverLanguage";
import ja from "@/i18n/translations/ja";
import en from "@/i18n/translations/en";
import ar from "@/i18n/translations/ar";
import type { SiteLanguage } from "@/i18n/languageConfig";
import { getLocalizedPageContent } from "@/content/localizedPages";
import { buildWebPageSchema, buildServiceListSchema } from "@/lib/jsonld";
import HomePage from "../../components/pages/home/index";

const translationMap = { ja, en, ar } as const;

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: HomePageProps) {
  const { lang: routeLang } = await params;
  const lang = resolveSiteLanguage(routeLang);
  const t = translationMap[lang as SiteLanguage];
  const localized = getLocalizedPageContent(lang).layout;

  const schemas = [
    buildWebPageSchema({
      lang,
      title: localized.titleDefault,
      description: localized.description,
    }),
    buildServiceListSchema({
      lang,
      services: t.services.items,
    }),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <HomePage />
    </>
  );
}
