import type { Metadata } from "next";
import { getRequestLanguage, isRTL, type SiteLanguage } from "@/i18n/serverLanguage";

type DisclosureRow = {
  label: string;
  lines?: string[];
  listItems?: string[];
};

type CommerceContent = {
  metadataTitle: string;
  metadataDescription: string;
  pageTitle: string;
  rows: DisclosureRow[];
  establishedDate: string;
  updatedDate: string;
};

const disclosureByLanguage: Record<SiteLanguage, CommerceContent> = {
  ja: {
    metadataTitle: "特定商取引法に基づく表記 | Nipporia",
    metadataDescription: "特定商取引法に基づく表記についてご説明します。",
    pageTitle: "特定商取引法に基づく表記",
    rows: [
      { label: "販売事業者名", lines: ["Nipporia（ニッポリア）"] },
      { label: "代表者", lines: ["アルジンムハンマドガイス"] },
      { label: "所在地", lines: ["埼玉県久喜市久喜中央1丁目9番4-902号"] },
      { label: "電話番号", lines: ["(+81) 070-8905-8857"] },
      { label: "メールアドレス", lines: ["info@nipporia.com"] },
      {
        label: "サービス提供価格",
        lines: [
          "【初期制作費用】",
          "¥1,000,000〜¥3,000,000（税込）",
          "【月額サポート費用】",
          "Basic: ¥250,000/月（税込）",
          "Growth: ¥350,000/月（税込）",
          "Enterprise: ¥500,000/月（税込）",
        ],
      },
      {
        label: "サービス提供価格以外に必要な費用",
        listItems: [
          "ドメイン取得・維持費用（実費）",
          "サーバー利用料（実費）",
          "外部サービス利用料（実費）",
          "銀行振込手数料（お客様負担）",
        ],
      },
      {
        label: "支払方法",
        listItems: ["銀行振込", "クレジットカード決済（Stripe）"],
      },
      {
        label: "支払時期",
        lines: [
          "【初期制作費用】",
          "契約時に50%、納品時に50%",
          "【月額サポート費用】",
          "毎月末締め、翌月末払い",
        ],
      },
      {
        label: "サービス提供時期",
        lines: [
          "契約成立後、別途定める納期までに提供いたします。",
          "通常、初期制作は1〜3ヶ月程度を要します。",
        ],
      },
      {
        label: "返品・キャンセルについて",
        lines: [
          "【制作開始前】",
          "契約締結後7日以内であれば、全額返金いたします。",
          "【制作開始後】",
          "制作進捗に応じた費用をご請求いたします。",
          "【月額サポート】",
          "解約希望月の前月末までにお申し出ください。",
        ],
      },
      {
        label: "動作環境",
        lines: ["【推奨ブラウザ】"],
        listItems: [
          "Google Chrome（最新版）",
          "Safari（最新版）",
          "Firefox（最新版）",
          "Microsoft Edge（最新版）",
        ],
      },
    ],
    establishedDate: "制定日：2025年1月1日",
    updatedDate: "最終更新日：2025年2月1日",
  },
  en: {
    metadataTitle: "Commercial Disclosure | Nipporia",
    metadataDescription: "Information provided in accordance with Japan's Act on Specified Commercial Transactions.",
    pageTitle: "Commercial Disclosure (Specified Commercial Transactions Act)",
    rows: [
      { label: "Business Name", lines: ["Nipporia"] },
      { label: "Representative", lines: ["Arjin Muhammad Ghais"] },
      { label: "Address", lines: ["1-9-4-902 Kukichuo, Kuki City, Saitama, Japan"] },
      { label: "Phone Number", lines: ["(+81) 070-8905-8857"] },
      { label: "Email Address", lines: ["info@nipporia.com"] },
      {
        label: "Service Fees",
        lines: [
          "[Initial Production Fee]",
          "JPY 1,000,000 - 3,000,000 (tax included)",
          "[Monthly Support Fee]",
          "Basic: JPY 250,000 / month (tax included)",
          "Growth: JPY 350,000 / month (tax included)",
          "Enterprise: JPY 500,000 / month (tax included)",
        ],
      },
      {
        label: "Additional Costs",
        listItems: [
          "Domain registration and renewal fees (actual cost)",
          "Server usage fees (actual cost)",
          "Third-party service fees (actual cost)",
          "Bank transfer fees (borne by customer)",
        ],
      },
      {
        label: "Payment Methods",
        listItems: ["Bank transfer", "Credit card (Stripe)"],
      },
      {
        label: "Payment Timing",
        lines: [
          "[Initial Production Fee]",
          "50% at contract signing, 50% upon delivery",
          "[Monthly Support Fee]",
          "Billed monthly, payable by the end of the following month",
        ],
      },
      {
        label: "Service Delivery Timing",
        lines: [
          "Services are provided after contract formation and by the separately agreed delivery date.",
          "Initial production typically takes around 1 to 3 months.",
        ],
      },
      {
        label: "Returns and Cancellation",
        lines: [
          "[Before Production Starts]",
          "Full refund is available within 7 days after contract signing.",
          "[After Production Starts]",
          "Fees will be charged according to actual production progress.",
          "[Monthly Support]",
          "Please submit cancellation by the end of the month before the intended cancellation month.",
        ],
      },
      {
        label: "System Requirements",
        lines: ["[Recommended Browsers]"],
        listItems: [
          "Google Chrome (latest version)",
          "Safari (latest version)",
          "Firefox (latest version)",
          "Microsoft Edge (latest version)",
        ],
      },
    ],
    establishedDate: "Established: January 1, 2025",
    updatedDate: "Last updated: February 1, 2025",
  },
  ar: {
    metadataTitle: "الإفصاح التجاري | Nipporia",
    metadataDescription: "معلومات مقدمة وفقا لقانون المعاملات التجارية المحددة في اليابان.",
    pageTitle: "الإفصاح التجاري (وفق قانون المعاملات التجارية المحددة)",
    rows: [
      { label: "اسم الجهة التجارية", lines: ["Nipporia"] },
      { label: "الممثل", lines: ["Arjin Muhammad Ghais"] },
      { label: "العنوان", lines: ["1-9-4-902 Kukichuo, Kuki City, Saitama, Japan"] },
      { label: "رقم الهاتف", lines: ["(+81) 070-8905-8857"] },
      { label: "البريد الإلكتروني", lines: ["info@nipporia.com"] },
      {
        label: "أسعار الخدمات",
        lines: [
          "[رسوم التنفيذ الأولي]",
          "1,000,000 - 3,000,000 ين ياباني (شامل الضريبة)",
          "[رسوم الدعم الشهري]",
          "Basic: 250,000 ين / شهريا (شامل الضريبة)",
          "Growth: 350,000 ين / شهريا (شامل الضريبة)",
          "Enterprise: 500,000 ين / شهريا (شامل الضريبة)",
        ],
      },
      {
        label: "تكاليف إضافية",
        listItems: [
          "رسوم حجز وتجديد النطاق (حسب التكلفة الفعلية)",
          "رسوم استخدام الخادم (حسب التكلفة الفعلية)",
          "رسوم الخدمات الخارجية (حسب التكلفة الفعلية)",
          "رسوم التحويل البنكي (على العميل)",
        ],
      },
      {
        label: "طرق الدفع",
        listItems: ["تحويل بنكي", "بطاقة ائتمان (Stripe)"],
      },
      {
        label: "مواعيد الدفع",
        lines: [
          "[رسوم التنفيذ الأولي]",
          "50% عند توقيع العقد و50% عند التسليم",
          "[رسوم الدعم الشهري]",
          "تُحتسب شهريا وتُدفع بنهاية الشهر التالي",
        ],
      },
      {
        label: "موعد تقديم الخدمة",
        lines: [
          "تُقدم الخدمة بعد إبرام العقد وحتى الموعد المتفق عليه للتسليم.",
          "عادة يستغرق التنفيذ الأولي من شهر إلى ثلاثة أشهر.",
        ],
      },
      {
        label: "الاسترجاع والإلغاء",
        lines: [
          "[قبل بدء التنفيذ]",
          "يتوفر استرداد كامل خلال 7 أيام من توقيع العقد.",
          "[بعد بدء التنفيذ]",
          "يتم احتساب الرسوم وفقا لمستوى التقدم الفعلي في العمل.",
          "[الدعم الشهري]",
          "يرجى طلب الإلغاء قبل نهاية الشهر السابق لشهر الإلغاء المطلوب.",
        ],
      },
      {
        label: "بيئة التشغيل",
        lines: ["[المتصفحات الموصى بها]"],
        listItems: [
          "Google Chrome (أحدث إصدار)",
          "Safari (أحدث إصدار)",
          "Firefox (أحدث إصدار)",
          "Microsoft Edge (أحدث إصدار)",
        ],
      },
    ],
    establishedDate: "تاريخ الإقرار: 1 يناير 2025",
    updatedDate: "آخر تحديث: 1 فبراير 2025",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getRequestLanguage();
  const content = disclosureByLanguage[lang];

  return {
    title: content.metadataTitle,
    description: content.metadataDescription,
  };
}

export default async function CommerceDisclosurePage() {
  const lang = await getRequestLanguage();
  const content = disclosureByLanguage[lang];
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
                      } ${index === 0 ? (rtl ? "rounded-r-lg" : "rounded-l-lg") : ""} ${
                        index === content.rows.length - 1 ? (rtl ? "rounded-br-lg" : "rounded-bl-lg") : ""
                      }`}
                    >
                      {row.label}
                    </th>
                    <td className={`py-4 px-4 text-gray-600 ${rtl ? "text-right" : "text-left"}`}>
                      {row.lines?.map((line, lineIndex) => (
                        <p
                          key={`${row.label}-line-${lineIndex}`}
                          className={lineIndex < row.lines!.length - 1 ? "mb-2" : ""}
                        >
                          {line}
                        </p>
                      ))}

                      {row.listItems ? (
                        <ul className={`list-disc list-inside space-y-1 ${rtl ? "mr-2" : "ml-2"}`}>
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

          <div className={`text-gray-500 text-sm pt-8 mt-8 border-t border-gray-200 ${rtl ? "text-left" : "text-right"}`}>
            <p>{content.establishedDate}</p>
            <p>{content.updatedDate}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
