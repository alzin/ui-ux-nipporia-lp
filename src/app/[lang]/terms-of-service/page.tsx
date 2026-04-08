import type { Metadata } from "next";
import { getLocalizedPageContent } from "@/content/localizedPages";
import { resolveSiteLanguage } from "@/i18n/serverLanguage";
import { LegalPageLayout } from "@/components/pages/legal/LegalPageLayout";
import { SchemaInjector } from "@/components/common/components/SchemaInjector";
import { buildTermsOfServiceSchemas } from "@/lib/schemas/termsOfServiceSchemas";

interface TermsOfServicePageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: TermsOfServicePageProps): Promise<Metadata> {
  const lang = resolveSiteLanguage((await params).lang);
  const { metadataTitle: title, metadataDescription: description } =
    getLocalizedPageContent(lang).termsOfService;
  return { title, description };
}

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
