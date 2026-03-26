import type { Metadata } from "next";
import NotFoundPage from "@/components/pages/404"
import { getRequestLanguage, type SiteLanguage } from "@/i18n/serverLanguage";

const notFoundMetadataByLanguage: Record<SiteLanguage, Metadata> = {
  ja: {
    title: "404 - ページが見つかりません",
    description: "お探しのページは見つかりませんでした。ホームページをご確認ください。",
  },
  en: {
    title: "404 - Page Not Found",
    description: "Sorry, the page you are looking for could not be found. Visit our homepage for more information.",
  },
  ar: {
    title: "404 - الصفحة غير موجودة",
    description: "عذرا، الصفحة التي تبحث عنها غير موجودة. يرجى العودة إلى الصفحة الرئيسية.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getRequestLanguage();
  return notFoundMetadataByLanguage[lang];
}

export default function NotFound() {
  return <NotFoundPage />
}