import { arPageContent } from "@/i18n/translations/ar";
import { enPageContent } from "@/i18n/translations/en";
import { jaPageContent } from "@/i18n/translations/ja";
import type { LocalizedPageContent } from "@/i18n/translations/types";
import {
  DEFAULT_LANGUAGE,
  type SiteLanguage,
} from "@/i18n/languageConfig";

export const localizedPageContentByLanguage: Record<
  SiteLanguage,
  LocalizedPageContent
> = {
  ja: jaPageContent,
  en: enPageContent,
  ar: arPageContent,
};

export const getLocalizedPageContent = (
  lang: SiteLanguage,
): LocalizedPageContent =>
  localizedPageContentByLanguage[lang] ??
  localizedPageContentByLanguage[DEFAULT_LANGUAGE];

export type {
  CommerceContent,
  DisclosureRow,
  LayoutSeoContent,
  LocalizedPageContent,
  PrivacyContent,
  PrivacySection,
  SeoMetadata,
  TermsContent,
  TermsSection,
} from "@/i18n/translations/types";
