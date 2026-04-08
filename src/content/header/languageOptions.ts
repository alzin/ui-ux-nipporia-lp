import { Language } from "@/i18n/LanguageContext";

export type TLanguageOption = {
  value: Language;
  label: string;
  title: string;
  countryCode?: string;
};

export const languageOptions: TLanguageOption[] = [
  { value: "ja", label: "JP", title: "日本語",   countryCode: "JP" },
  { value: "en", label: "EN", title: "English",  countryCode: "US" },
  { value: "ar", label: "AR", title: "العربية" },
];
