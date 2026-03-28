import type { Metadata } from "next";
import { getLocalizedPageContent } from "@/content/localizedPages";
import { isRTL, resolveSiteLanguage } from "@/i18n/serverLanguage";

interface TermsOfServicePageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: TermsOfServicePageProps): Promise<Metadata> {
  const { lang: routeLang } = await params;
  const lang = resolveSiteLanguage(routeLang);
  const content = getLocalizedPageContent(lang).termsOfService;

  return {
    title: content.metadataTitle,
    description: content.metadataDescription,
  };
}

export default async function TermsOfServicePage({
  params,
}: TermsOfServicePageProps) {
  const { lang: routeLang } = await params;
  const lang = resolveSiteLanguage(routeLang);
  const content = getLocalizedPageContent(lang).termsOfService;
  const rtl = isRTL(lang);

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-lavender pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          {content.pageTitle}
        </h1>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100 space-y-8">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2
                className={`text-2xl font-bold text-gray-800 mb-4 ${
                  rtl
                    ? "border-r-4 pr-4 border-purple-500 text-right"
                    : "border-l-4 pl-4 border-purple-500 text-left"
                }`}
              >
                {section.title}
              </h2>

              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={`${section.title}-${index}`}
                  className={`text-gray-600 leading-relaxed ${
                    index > 0 ? "mt-3" : ""
                  } ${rtl ? "text-right" : "text-left"}`}
                >
                  {paragraph}
                </p>
              ))}

              {section.listItems ? (
                <ul
                  className={`list-disc list-inside text-gray-600 space-y-2 mt-4 ${
                    rtl ? "text-right mr-4" : "text-left ml-4"
                  }`}
                >
                  {section.listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <div
            className={`text-gray-500 text-sm pt-8 border-t border-gray-200 ${
              rtl ? "text-left" : "text-right"
            }`}
          >
            <p>{content.establishedDate}</p>
            <p>{content.updatedDate}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
