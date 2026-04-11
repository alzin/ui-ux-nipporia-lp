import type { Metadata } from "next";
import { getLocalizedPageContent } from "@/content/localizedPages";
import { resolveSiteLanguage } from "@/i18n/serverLanguage";

export async function generateCommerceDisclosureMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = resolveSiteLanguage((await params).lang);
  const { metadataTitle: title, metadataDescription: description } =
    getLocalizedPageContent(lang).commerceDisclosure;
  return { title, description };
}
