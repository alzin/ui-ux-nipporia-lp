import type { Metadata } from "next";
import { getRequestLanguage, isRTL, type SiteLanguage } from "@/i18n/serverLanguage";

type PrivacySection = {
  title: string;
  paragraphs: string[];
  listItems?: string[];
};

type PrivacyContent = {
  metadataTitle: string;
  metadataDescription: string;
  pageTitle: string;
  sections: PrivacySection[];
  establishedDate: string;
  updatedDate: string;
};

const privacyContentByLanguage: Record<SiteLanguage, PrivacyContent> = {
  ja: {
    metadataTitle: "プライバシーポリシー | Nipporia",
    metadataDescription: "Nipporiaのプライバシーポリシーについてご説明します。",
    pageTitle: "プライバシーポリシー",
    sections: [
      {
        title: "1. 個人情報の収集について",
        paragraphs: [
          "当サイトでは、お問い合わせフォームをご利用いただく際に、お名前、メールアドレス、会社名等の個人情報をご入力いただいております。これらの情報は、お問い合わせへの対応およびサービスの提供のために使用いたします。",
        ],
      },
      {
        title: "2. 個人情報の利用目的",
        paragraphs: ["収集した個人情報は、以下の目的で利用いたします："],
        listItems: [
          "お問い合わせへの回答",
          "サービスの提供・改善",
          "新サービスや更新情報のご案内",
          "契約・請求に関するご連絡",
        ],
      },
      {
        title: "3. 個人情報の第三者提供",
        paragraphs: [
          "当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。ただし、業務委託先に対して必要な範囲で提供する場合があります。",
        ],
      },
      {
        title: "4. 個人情報の管理",
        paragraphs: [
          "当社は、お客様の個人情報を正確かつ最新の状態に保ち、不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備等、必要な措置を講じます。",
        ],
      },
      {
        title: "5. Cookieの使用について",
        paragraphs: [
          "当サイトでは、ユーザー体験の向上およびアクセス解析のためにCookieを使用しています。ブラウザの設定によりCookieを無効にすることも可能ですが、一部のサービスが正常に機能しない場合があります。",
        ],
      },
      {
        title: "6. お問い合わせ窓口",
        paragraphs: [
          "個人情報の取扱いに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。",
        ],
      },
      {
        title: "7. プライバシーポリシーの変更",
        paragraphs: [
          "当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。",
        ],
      },
    ],
    establishedDate: "制定日：2025年1月1日",
    updatedDate: "最終更新日：2025年2月1日",
  },
  en: {
    metadataTitle: "Privacy Policy | Nipporia",
    metadataDescription: "Learn how Nipporia collects, uses, and protects your personal information.",
    pageTitle: "Privacy Policy",
    sections: [
      {
        title: "1. Collection of Personal Information",
        paragraphs: [
          "When you use our contact form, we may collect personal information such as your name, email address, and company name. We use this information to respond to inquiries and provide our services.",
        ],
      },
      {
        title: "2. Purpose of Use",
        paragraphs: ["We use collected personal information for the following purposes:"],
        listItems: [
          "Responding to inquiries",
          "Providing and improving services",
          "Sending updates about new services and announcements",
          "Contacting you regarding contracts and billing",
        ],
      },
      {
        title: "3. Disclosure to Third Parties",
        paragraphs: [
          "We do not disclose personal information to third parties without your consent, except where required by law. We may share necessary information with trusted service providers for operational purposes.",
        ],
      },
      {
        title: "4. Information Management",
        paragraphs: [
          "We keep personal information accurate and up to date, and take appropriate security measures to prevent unauthorized access, loss, damage, falsification, or leakage.",
        ],
      },
      {
        title: "5. Use of Cookies",
        paragraphs: [
          "We use cookies to improve user experience and analyze website usage. You can disable cookies in your browser settings, but some features may not function properly.",
        ],
      },
      {
        title: "6. Contact",
        paragraphs: [
          "For inquiries about personal data handling, please contact us through the contact form on this website.",
        ],
      },
      {
        title: "7. Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy when necessary. The revised policy becomes effective when published on this website.",
        ],
      },
    ],
    establishedDate: "Established: January 1, 2025",
    updatedDate: "Last updated: February 1, 2025",
  },
  ar: {
    metadataTitle: "سياسة الخصوصية | Nipporia",
    metadataDescription: "تعرّف على كيفية جمع Nipporia لبياناتك الشخصية واستخدامها وحمايتها.",
    pageTitle: "سياسة الخصوصية",
    sections: [
      {
        title: "1. جمع المعلومات الشخصية",
        paragraphs: [
          "عند استخدام نموذج التواصل في موقعنا، قد نطلب معلومات شخصية مثل الاسم والبريد الإلكتروني واسم الشركة. نستخدم هذه المعلومات للرد على الاستفسارات وتقديم خدماتنا.",
        ],
      },
      {
        title: "2. أغراض استخدام المعلومات",
        paragraphs: ["نستخدم المعلومات الشخصية التي نجمعها للأغراض التالية:"],
        listItems: [
          "الرد على الاستفسارات",
          "تقديم الخدمات وتحسينها",
          "إرسال تحديثات الخدمات الجديدة والإشعارات",
          "التواصل بخصوص العقود والفوترة",
        ],
      },
      {
        title: "3. مشاركة البيانات مع أطراف ثالثة",
        paragraphs: [
          "لا نقوم بمشاركة المعلومات الشخصية مع أطراف ثالثة دون موافقتك، إلا في الحالات التي يفرضها القانون. وقد نشارك البيانات الضرورية مع مزودي خدمات موثوقين لأغراض تشغيلية.",
        ],
      },
      {
        title: "4. إدارة المعلومات الشخصية",
        paragraphs: [
          "نحرص على إبقاء معلوماتك دقيقة ومحدثة، ونتخذ الإجراءات الأمنية المناسبة لمنع الوصول غير المصرح به أو الفقدان أو التلف أو التلاعب أو التسريب.",
        ],
      },
      {
        title: "5. استخدام ملفات تعريف الارتباط (Cookies)",
        paragraphs: [
          "نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل استخدام الموقع. يمكنك تعطيلها من إعدادات المتصفح، لكن قد يؤثر ذلك على عمل بعض الميزات.",
        ],
      },
      {
        title: "6. التواصل معنا",
        paragraphs: [
          "إذا كانت لديك أي استفسارات حول كيفية التعامل مع بياناتك الشخصية، يرجى التواصل معنا عبر نموذج التواصل في الموقع.",
        ],
      },
      {
        title: "7. تعديل سياسة الخصوصية",
        paragraphs: [
          "قد نقوم بتحديث سياسة الخصوصية عند الحاجة. وتصبح النسخة المعدلة نافذة من تاريخ نشرها على هذا الموقع.",
        ],
      },
    ],
    establishedDate: "تاريخ الإقرار: 1 يناير 2025",
    updatedDate: "آخر تحديث: 1 فبراير 2025",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getRequestLanguage();
  const content = privacyContentByLanguage[lang];

  return {
    title: content.metadataTitle,
    description: content.metadataDescription,
  };
}

export default async function PrivacyPolicyPage() {
  const lang = await getRequestLanguage();
  const content = privacyContentByLanguage[lang];
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
