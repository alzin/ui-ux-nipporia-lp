import { getLocalizedPageContent } from "@/content/localizedPages";
import { resolveSiteLanguage } from "@/i18n/serverLanguage";
import TemplatesPage from "@/components/pages/templates";
import { SchemaInjector } from "@/components/common/components/SchemaInjector";
import { buildTemplatesPageSchemas } from "@/lib/schemas/templatesPageSchemas";
import { generateTemplatesMetadata } from "@/lib/metadata/templatesMetadata";

interface TemplatesRouteProps {
  params: Promise<{ lang: string }>;
}

export { generateTemplatesMetadata as generateMetadata };

export default async function Page({ params }: TemplatesRouteProps) {
  const { lang: routeLang } = await params;
  const lang = resolveSiteLanguage(routeLang);
  const localized = getLocalizedPageContent(lang).templates;
  const schemas = buildTemplatesPageSchemas(lang, localized);
  return (
    <>
      <SchemaInjector schemas={schemas} />
      <TemplatesPage />
    </>
  );
}
