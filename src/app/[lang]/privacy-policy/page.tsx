import { getLocalizedPageContent } from "@/content/localizedPages";
import { resolveSiteLanguage } from "@/i18n/serverLanguage";
import { LegalPageLayout } from "@/components/pages/legal/LegalPageLayout";
import { SchemaInjector } from "@/components/common/components/SchemaInjector";
import { buildPrivacyPolicySchemas } from "@/lib/schemas/privacyPolicySchemas";
import { generatePrivacyPolicyMetadata } from "@/lib/metadata/privacyPolicyMetadata";

interface PrivacyPolicyPageProps {
  params: Promise<{ lang: string }>;
}

export { generatePrivacyPolicyMetadata as generateMetadata };

export default async function PrivacyPolicyPage({
  params,
}: PrivacyPolicyPageProps) {
  const lang = resolveSiteLanguage((await params).lang);
  const content = getLocalizedPageContent(lang).privacyPolicy;
  const schemas = buildPrivacyPolicySchemas(lang, content);
  return (
    <>
      <SchemaInjector schemas={schemas} />
      <LegalPageLayout content={content} lang={lang} />
    </>
  );
}
