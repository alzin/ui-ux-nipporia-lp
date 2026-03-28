import type { Metadata } from "next";
import NotFoundPage from "@/components/pages/404";
import { getLocalizedPageContent } from "@/content/localizedPages";
import { DEFAULT_LANGUAGE, resolveSiteLanguage } from "@/i18n/languageConfig";

interface NotFoundMetadataProps {
  params?: Promise<{ lang: string }>;
}

export async function generateMetadata(
  props: NotFoundMetadataProps = {},
): Promise<Metadata> {
  const routeLang = props.params ? (await props.params).lang : DEFAULT_LANGUAGE;
  const lang = resolveSiteLanguage(routeLang);
  return getLocalizedPageContent(lang).notFound;
}

export default function NotFound() {
  return <NotFoundPage />;
}