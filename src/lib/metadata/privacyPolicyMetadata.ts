import type { Metadata } from "next";
import { getLocalizedPageContent } from "@/content/localizedPages";
import { resolveSiteLanguage } from "@/i18n/serverLanguage";

export async function generatePrivacyPolicyMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = resolveSiteLanguage((await params).lang);
  const { metadataTitle: title, metadataDescription: description } =
    getLocalizedPageContent(lang).privacyPolicy;
  return { title, description };
}
