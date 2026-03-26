import type { Metadata } from "next";
import { getRequestLanguage, isRTL, type SiteLanguage } from "@/i18n/serverLanguage";

type TermsSection = {
  title: string;
  paragraphs: string[];
  listItems?: string[];
};

type TermsContent = {
  metadataTitle: string;
  metadataDescription: string;
  pageTitle: string;
  sections: TermsSection[];
  establishedDate: string;
  updatedDate: string;
};

const termsContentByLanguage: Record<SiteLanguage, TermsContent> = {
  ja: {
    metadataTitle: "利用規約 | Nipporia",
    metadataDescription: "Nipporiaのサービス利用規約についてご説明します。",
    pageTitle: "利用規約",
    sections: [
      {
        title: "第1条（適用）",
        paragraphs: [
          "本規約は、当社が提供するすべてのサービス（以下「本サービス」といいます）の利用条件を定めるものです。ユーザーの皆様には、本規約に従って本サービスをご利用いただきます。",
        ],
      },
      {
        title: "第2条（サービス内容）",
        paragraphs: ["当社は以下のサービスを提供します："],
        listItems: [
          "Webサイトの企画・デザイン・開発",
          "SEO対策およびWebマーケティング支援",
          "Webサイトの保守・運用サポート",
          "Google広告運用代行",
          "その他付随するサービス",
        ],
      },
      {
        title: "第3条（契約の成立）",
        paragraphs: [
          "サービス契約は、お客様からのお申し込みに対し、当社が承諾の意思表示をした時点で成立するものとします。契約内容は、別途締結する個別契約書または見積書に記載された内容に従います。",
        ],
      },
      {
        title: "第4条（料金および支払い）",
        paragraphs: ["サービス料金は、個別契約書または見積書に記載された金額とします。支払い条件は以下の通りです："],
        listItems: [
          "初期制作費用：契約時に50%、納品時に50%",
          "月額サポート費用：毎月末締め、翌月末払い",
          "支払い方法：銀行振込またはクレジットカード決済",
        ],
      },
      {
        title: "第5条（禁止事項）",
        paragraphs: ["ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません："],
        listItems: [
          "法令または公序良俗に違反する行為",
          "当社または第三者の知的財産権を侵害する行為",
          "当社のサービス運営を妨害する行為",
          "虚偽の情報を提供する行為",
          "その他、当社が不適切と判断する行為",
        ],
      },
      {
        title: "第6条（知的財産権）",
        paragraphs: [
          "本サービスにより制作された成果物の著作権は、料金の全額支払い完了後にお客様に帰属します。ただし、当社が独自に開発したプログラムやライブラリについては、当社に帰属するものとします。",
        ],
      },
      {
        title: "第7条（免責事項）",
        paragraphs: [
          "当社は、本サービスに関して、その完全性、正確性、確実性、有用性等について、いかなる保証も行いません。また、お客様が本サービスを利用したことにより生じた損害について、当社の故意または重大な過失による場合を除き、責任を負いません。",
        ],
      },
      {
        title: "第8条（契約の解除）",
        paragraphs: [
          "当社は、お客様が本規約に違反した場合、事前の通知なく契約を解除することができます。この場合、既に支払われた料金の返金は行いません。",
        ],
      },
      {
        title: "第9条（規約の変更）",
        paragraphs: [
          "当社は、必要と判断した場合には、ユーザーに通知することなく本規約を変更することができるものとします。変更後の規約は、当サイトに掲載した時点から効力を生じるものとします。",
        ],
      },
      {
        title: "第10条（準拠法・管轄裁判所）",
        paragraphs: [
          "本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
        ],
      },
    ],
    establishedDate: "制定日：2025年1月1日",
    updatedDate: "最終更新日：2025年2月1日",
  },
  en: {
    metadataTitle: "Terms of Service | Nipporia",
    metadataDescription: "Read the terms governing the use of Nipporia services.",
    pageTitle: "Terms of Service",
    sections: [
      {
        title: "Article 1 (Scope)",
        paragraphs: [
          "These Terms define the conditions for using all services provided by our company (the \"Service\"). Users agree to use the Service in accordance with these Terms.",
        ],
      },
      {
        title: "Article 2 (Service Details)",
        paragraphs: ["We provide the following services:"],
        listItems: [
          "Website planning, design, and development",
          "SEO and web marketing support",
          "Website maintenance and operation support",
          "Google Ads operation support",
          "Other related services",
        ],
      },
      {
        title: "Article 3 (Contract Formation)",
        paragraphs: [
          "A service contract is established when we accept a customer's application. Contract details are governed by the applicable individual agreement or quotation.",
        ],
      },
      {
        title: "Article 4 (Fees and Payment)",
        paragraphs: ["Service fees are stated in the individual agreement or quotation. Payment terms are as follows:"],
        listItems: [
          "Initial production fee: 50% at contract signing, 50% upon delivery",
          "Monthly support fee: billed monthly, payable by the end of the following month",
          "Payment methods: bank transfer or credit card",
        ],
      },
      {
        title: "Article 5 (Prohibited Conduct)",
        paragraphs: ["Users must not engage in the following actions when using the Service:"],
        listItems: [
          "Violating laws or public order and morals",
          "Infringing intellectual property rights of our company or third parties",
          "Interfering with the operation of our services",
          "Providing false information",
          "Any other conduct deemed inappropriate by our company",
        ],
      },
      {
        title: "Article 6 (Intellectual Property)",
        paragraphs: [
          "Copyright of deliverables created through the Service transfers to the customer after full payment is completed. However, programs and libraries independently developed by our company remain our property.",
        ],
      },
      {
        title: "Article 7 (Disclaimer)",
        paragraphs: [
          "We make no guarantees regarding completeness, accuracy, reliability, or usefulness of the Service. We are not liable for damages resulting from use of the Service, except in cases of willful misconduct or gross negligence by our company.",
        ],
      },
      {
        title: "Article 8 (Termination)",
        paragraphs: [
          "We may terminate a contract without prior notice if a customer violates these Terms. In such cases, fees already paid are non-refundable.",
        ],
      },
      {
        title: "Article 9 (Changes to Terms)",
        paragraphs: [
          "We may revise these Terms without prior notice when deemed necessary. Revised Terms become effective when posted on this website.",
        ],
      },
      {
        title: "Article 10 (Governing Law and Jurisdiction)",
        paragraphs: [
          "These Terms are governed by the laws of Japan. Any dispute related to the Service shall be subject to the exclusive jurisdiction of the Tokyo District Court as the court of first instance.",
        ],
      },
    ],
    establishedDate: "Established: January 1, 2025",
    updatedDate: "Last updated: February 1, 2025",
  },
  ar: {
    metadataTitle: "شروط الخدمة | Nipporia",
    metadataDescription: "اطّلع على الشروط والأحكام المنظمة لاستخدام خدمات Nipporia.",
    pageTitle: "شروط الخدمة",
    sections: [
      {
        title: "المادة 1 (النطاق)",
        paragraphs: [
          "تحدد هذه الشروط أحكام استخدام جميع الخدمات التي تقدمها شركتنا (ويشار إليها فيما يلي بـ\"الخدمة\"). ويوافق المستخدم على استخدام الخدمة وفقا لهذه الشروط.",
        ],
      },
      {
        title: "المادة 2 (تفاصيل الخدمة)",
        paragraphs: ["نقدم الخدمات التالية:"],
        listItems: [
          "تخطيط وتصميم وتطوير المواقع الإلكترونية",
          "دعم تحسين محركات البحث والتسويق الرقمي",
          "دعم صيانة وتشغيل المواقع",
          "إدارة وتشغيل إعلانات Google",
          "خدمات أخرى ذات صلة",
        ],
      },
      {
        title: "المادة 3 (إبرام العقد)",
        paragraphs: [
          "يُعد عقد الخدمة مبرما عند قبولنا طلب العميل. وتخضع تفاصيل العقد لما يرد في الاتفاقية الفردية أو عرض السعر المعتمد.",
        ],
      },
      {
        title: "المادة 4 (الرسوم والدفع)",
        paragraphs: ["تحدد رسوم الخدمة في الاتفاقية الفردية أو عرض السعر. وتكون شروط الدفع كما يلي:"],
        listItems: [
          "رسوم التنفيذ الأولي: 50% عند توقيع العقد و50% عند التسليم",
          "رسوم الدعم الشهري: تُحتسب شهريا وتُدفع بنهاية الشهر التالي",
          "طرق الدفع: تحويل بنكي أو بطاقة ائتمان",
        ],
      },
      {
        title: "المادة 5 (الأفعال المحظورة)",
        paragraphs: ["يُمنع على المستخدم القيام بما يلي عند استخدام الخدمة:"],
        listItems: [
          "مخالفة القوانين أو النظام العام والآداب",
          "انتهاك حقوق الملكية الفكرية للشركة أو للغير",
          "إعاقة تشغيل خدمات الشركة",
          "تقديم معلومات غير صحيحة",
          "أي تصرف آخر تعتبره الشركة غير مناسب",
        ],
      },
      {
        title: "المادة 6 (الملكية الفكرية)",
        paragraphs: [
          "تنتقل حقوق ملكية المخرجات المنتجة عبر الخدمة إلى العميل بعد سداد كامل الرسوم. أما البرامج والمكتبات التي طورتها الشركة بشكل مستقل فتظل ملكا للشركة.",
        ],
      },
      {
        title: "المادة 7 (إخلاء المسؤولية)",
        paragraphs: [
          "لا تقدم الشركة أي ضمانات بشأن اكتمال الخدمة أو دقتها أو موثوقيتها أو فائدتها. كما لا تتحمل الشركة المسؤولية عن أي أضرار ناتجة عن استخدام الخدمة إلا في حالات العمد أو الإهمال الجسيم من جانبها.",
        ],
      },
      {
        title: "المادة 8 (فسخ العقد)",
        paragraphs: [
          "يجوز للشركة فسخ العقد دون إشعار مسبق إذا خالف العميل هذه الشروط. وفي هذه الحالة لا تُرد الرسوم المدفوعة.",
        ],
      },
      {
        title: "المادة 9 (تعديل الشروط)",
        paragraphs: [
          "يجوز للشركة تعديل هذه الشروط دون إشعار مسبق عند الضرورة. وتصبح الشروط المعدلة نافذة من تاريخ نشرها على هذا الموقع.",
        ],
      },
      {
        title: "المادة 10 (القانون الواجب التطبيق والاختصاص القضائي)",
        paragraphs: [
          "تخضع هذه الشروط لقوانين اليابان. وفي حال نشوء نزاع يتعلق بالخدمة، تكون محكمة طوكيو الابتدائية هي المحكمة المختصة حصريا كدرجة أولى.",
        ],
      },
    ],
    establishedDate: "تاريخ الإقرار: 1 يناير 2025",
    updatedDate: "آخر تحديث: 1 فبراير 2025",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getRequestLanguage();
  const content = termsContentByLanguage[lang];

  return {
    title: content.metadataTitle,
    description: content.metadataDescription,
  };
}

export default async function TermsOfServicePage() {
  const lang = await getRequestLanguage();
  const content = termsContentByLanguage[lang];
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
                  rtl ? "border-r-4 pr-4 border-purple-500 text-right" : "border-l-4 pl-4 border-purple-500 text-left"
                }`}
              >
                {section.title}
              </h2>

              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={`${section.title}-${index}`}
                  className={`text-gray-600 leading-relaxed ${index > 0 ? "mt-3" : ""} ${
                    rtl ? "text-right" : "text-left"
                  }`}
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

          <div className={`text-gray-500 text-sm pt-8 border-t border-gray-200 ${rtl ? "text-left" : "text-right"}`}>
            <p>{content.establishedDate}</p>
            <p>{content.updatedDate}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
