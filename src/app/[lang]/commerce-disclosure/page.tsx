import { getLocalizedPageContent } from "@/content/localizedPages";
import { isRTL, resolveSiteLanguage } from "@/i18n/serverLanguage";
import { LegalPageLayout } from "@/components/pages/legal/LegalPageLayout";
import { CommerceTable } from "@/components/pages/legal/CommerceTable";
import { SchemaInjector } from "@/components/common/components/SchemaInjector";
import { buildCommerceDisclosureSchemas } from "@/lib/schemas/commerceDisclosureSchemas";
import { generateCommerceDisclosureMetadata } from "@/lib/metadata/commerceDisclosureMetadata";

interface CommerceDisclosurePageProps {
  params: Promise<{ lang: string }>;
}

export { generateCommerceDisclosureMetadata as generateMetadata };

export default async function CommerceDisclosurePage({
  params,
}: CommerceDisclosurePageProps) {
  const lang = resolveSiteLanguage((await params).lang);
  const content = getLocalizedPageContent(lang).commerceDisclosure;
  const schemas = buildCommerceDisclosureSchemas(lang, content);
  return (
    <>
      <SchemaInjector schemas={schemas} />
      <LegalPageLayout content={content} lang={lang}>
        <CommerceTable rows={content.rows} rtl={isRTL(lang)} />
      </LegalPageLayout>
    </>
  );
}
