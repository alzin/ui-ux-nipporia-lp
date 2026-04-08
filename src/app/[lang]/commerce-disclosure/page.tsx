import type { Metadata } from "next";
import { getLocalizedPageContent } from "@/content/localizedPages";
import { isRTL, resolveSiteLanguage } from "@/i18n/serverLanguage";
import { LegalPageLayout } from "@/components/pages/legal/LegalPageLayout";
import { CommerceTable } from "@/components/pages/legal/CommerceTable";

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
  return (
    <LegalPageLayout content={content} lang={lang}>
      <CommerceTable rows={content.rows} rtl={isRTL(lang)} />
    </LegalPageLayout>
  );
}
