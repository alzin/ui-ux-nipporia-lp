import type { Metadata } from "next";
import { getLocalizedPageContent } from "@/content/localizedPages";
import { isRTL, resolveSiteLanguage } from "@/i18n/serverLanguage";

interface CommerceDisclosurePageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: CommerceDisclosurePageProps): Promise<Metadata> {
  const { lang: routeLang } = await params;
  const lang = resolveSiteLanguage(routeLang);
  const content = getLocalizedPageContent(lang).commerceDisclosure;

  return {
    title: content.metadataTitle,
    description: content.metadataDescription,
  };
}

export default async function CommerceDisclosurePage({
  params,
}: CommerceDisclosurePageProps) {
  const { lang: routeLang } = await params;
  const lang = resolveSiteLanguage(routeLang);
  const content = getLocalizedPageContent(lang).commerceDisclosure;
  const rtl = isRTL(lang);

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-lavender pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          {content.pageTitle}
        </h1>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                {content.rows.map((row, index) => (
                  <tr key={row.label}>
                    <th
                      className={`py-4 px-4 text-gray-800 font-bold bg-purple-50 w-1/3 align-top ${
                        rtl ? "text-right" : "text-left"
                      } ${
                        index === 0
                          ? rtl
                            ? "rounded-r-lg"
                            : "rounded-l-lg"
                          : ""
                      } ${
                        index === content.rows.length - 1
                          ? rtl
                            ? "rounded-br-lg"
                            : "rounded-bl-lg"
                          : ""
                      }`}
                    >
                      {row.label}
                    </th>
                    <td
                      className={`py-4 px-4 text-gray-600 ${
                        rtl ? "text-right" : "text-left"
                      }`}
                    >
                      {row.lines?.map((line, lineIndex) => (
                        <p
                          key={`${row.label}-line-${lineIndex}`}
                          className={
                            lineIndex < (row.lines?.length || 0) - 1 ? "mb-2" : ""
                          }
                        >
                          {line}
                        </p>
                      ))}

                      {row.listItems ? (
                        <ul
                          className={`list-disc list-inside space-y-1 ${
                            rtl ? "mr-2" : "ml-2"
                          }`}
                        >
                          {row.listItems.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className={`text-gray-500 text-sm pt-8 mt-8 border-t border-gray-200 ${
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
