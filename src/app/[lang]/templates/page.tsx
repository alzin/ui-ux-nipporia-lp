import { Metadata } from "next";
import { getLocalizedPageContent } from "@/content/localizedPages";
import { resolveSiteLanguage } from "@/i18n/serverLanguage";
import TemplatesPage from "@/components/pages/templates";

interface TemplatesRouteProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: TemplatesRouteProps): Promise<Metadata> {
  const { lang: routeLang } = await params;
  const lang = resolveSiteLanguage(routeLang);
  return getLocalizedPageContent(lang).templates;
}

export default async function Page({ params }: TemplatesRouteProps) {
  const { lang: routeLang } = await params;
  resolveSiteLanguage(routeLang);

  return <TemplatesPage />;
}
