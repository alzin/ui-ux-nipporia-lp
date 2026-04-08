import type { Metadata } from "next";
import { getLocalizedPageContent } from "@/content/localizedPages";
import { resolveSiteLanguage } from "@/i18n/serverLanguage";
import { LegalPageLayout } from "@/components/pages/legal/LegalPageLayout";

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
  return <LegalPageLayout content={content} lang={lang} />;
}
