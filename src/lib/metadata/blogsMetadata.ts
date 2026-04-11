import type { Metadata } from "next";
import { getLocalizedPageContent } from "@/content/localizedPages";
import { resolveSiteLanguage } from "@/i18n/serverLanguage";

export async function generateBlogsMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = resolveSiteLanguage((await params).lang);
  return getLocalizedPageContent(lang).blogs;
}
