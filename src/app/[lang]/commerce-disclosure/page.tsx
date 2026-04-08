import type { Metadata } from "next";
import { getLocalizedPageContent } from "@/content/localizedPages";
import { isRTL, resolveSiteLanguage } from "@/i18n/serverLanguage";
import { LegalPageLayout } from "@/components/pages/legal/LegalPageLayout";
import { CommerceTable } from "@/components/pages/legal/CommerceTable";
import { SchemaInjector } from "@/components/common/components/SchemaInjector";
import { buildCommerceDisclosureSchemas } from "@/lib/schemas/commerceDisclosureSchemas";

interface CommerceDisclosurePageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: CommerceDisclosurePageProps): Promise<Metadata> {
  const lang = resolveSiteLanguage((await params).lang);
  const { metadataTitle: title, metadataDescription: description } =
    getLocalizedPageContent(lang).commerceDisclosure;
  return { title, description };
}

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
