import type { Metadata } from "next";
import { getLocalizedPageContent } from "@/content/localizedPages";
import { resolveSiteLanguage } from "@/i18n/serverLanguage";
import { LegalPageLayout } from "@/components/pages/legal/LegalPageLayout";

interface PrivacyPolicyPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: PrivacyPolicyPageProps): Promise<Metadata> {
  const lang = resolveSiteLanguage((await params).lang);
  const { metadataTitle: title, metadataDescription: description } =
    getLocalizedPageContent(lang).privacyPolicy;
  return { title, description };
}

export default async function PrivacyPolicyPage({
  params,
}: PrivacyPolicyPageProps) {
  const lang = resolveSiteLanguage((await params).lang);
  const content = getLocalizedPageContent(lang).privacyPolicy;
  return <LegalPageLayout content={content} lang={lang} />;
}
