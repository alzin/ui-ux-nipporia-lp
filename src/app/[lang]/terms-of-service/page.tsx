import { getLocalizedPageContent } from "@/content/localizedPages";
import { resolveSiteLanguage } from "@/i18n/serverLanguage";
import { LegalPageLayout } from "@/components/pages/legal/sections/LegalPageLayout";
import { SchemaInjector } from "@/components/common/components/SchemaInjector";
import { buildTermsOfServiceSchemas } from "@/lib/schemas/termsOfServiceSchemas";
import { generateTermsOfServiceMetadata } from "@/lib/metadata/termsOfServiceMetadata";

interface TermsOfServicePageProps {
  params: Promise<{ lang: string }>;
}

export { generateTermsOfServiceMetadata as generateMetadata };

export default async function TermsOfServicePage({
  params,
}: TermsOfServicePageProps) {
  const lang = resolveSiteLanguage((await params).lang);
  const content = getLocalizedPageContent(lang).termsOfService;
  const schemas = buildTermsOfServiceSchemas(lang, content);
  return (
    <>
      <SchemaInjector schemas={schemas} />
      <LegalPageLayout content={content} lang={lang} />
    </>
  );
}
