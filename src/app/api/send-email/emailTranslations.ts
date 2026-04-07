export type EmailLang = "ja" | "en" | "ar";

export interface EmailTranslations {
  clientSubject: string;
  adminSubject: (name: string) => string;
  clientGreeting: (name: string) => string;
  clientIntro: string;
  clientAutoReplyNote: string;
  clientReplyTime: string;
  clientUrgent: string;
  clientInquiryLabel: string;
  clientClosing: string;
  adminHeading: string;
  adminTimestamp: string;
  adminAutoSent: string;
  fields: {
    company: string;
    name: string;
    email: string;
    website: string;
    message: string;
  };
}

const translations: Record<EmailLang, EmailTranslations> = {
  ja: {
    clientSubject: "お問い合わせありがとうございます",
    adminSubject: (name) => `新しいお問い合わせ: ${name}`,
    clientGreeting: (name) => `${name}様`,
    clientIntro:
      "お問い合わせいただきありがとうございます。<br />Webサイト制作サービスへのお問い合わせを受け付けいたしました。",
    clientAutoReplyNote:
      "このメールはお問い合わせの受付をお知らせする自動返信メールです。",
    clientReplyTime:
      "お問い合わせいただいた内容につきましては、担当者より24時間以内にご連絡いたします。",
    clientUrgent: "お急ぎの場合は、お電話でのお問合わせも受け付けております。",
    clientInquiryLabel: "お問い合わせ内容:",
    clientClosing: "今後ともよろしくお願いいたします。",
    adminHeading: "新しいWebサイト制作のお問い合わせが届きました",
    adminTimestamp: "送信日時",
    adminAutoSent:
      "このメールは自動送信されました。速やかにお客様へのご連絡をお願いいたします。",
    fields: {
      company: "会社名",
      name: "お名前",
      email: "メールアドレス",
      website: "現在のWebサイトURL",
      message: "お悩み・ご要望",
    },
  },

  en: {
    clientSubject: "Thank you for your inquiry",
    adminSubject: (name) => `New inquiry from: ${name}`,
    clientGreeting: (name) => `Dear ${name}`,
    clientIntro:
      "Thank you for reaching out to us.<br />We have received your inquiry about our web development services.",
    clientAutoReplyNote: "This is an automated confirmation email.",
    clientReplyTime:
      "A member of our team will get back to you within 24 hours.",
    clientUrgent:
      "If your matter is urgent, please feel free to call us directly.",
    clientInquiryLabel: "Your inquiry details:",
    clientClosing: "We look forward to working with you.",
    adminHeading: "New website development inquiry received",
    adminTimestamp: "Submitted at",
    adminAutoSent:
      "This email was sent automatically. Please follow up with the client promptly.",
    fields: {
      company: "Company",
      name: "Name",
      email: "Email",
      website: "Current Website URL",
      message: "Message",
    },
  },

  ar: {
    clientSubject: "شكراً على تواصلك معنا",
    adminSubject: (name) => `استفسار جديد من: ${name}`,
    clientGreeting: (name) => `عزيزي/عزيزتي ${name}`,
    clientIntro:
      "شكراً لتواصلك معنا.<br />لقد استلمنا استفساركم بخصوص خدمات تطوير المواقع الإلكترونية.",
    clientAutoReplyNote: "هذا البريد الإلكتروني هو رد تلقائي لتأكيد استلام طلبكم.",
    clientReplyTime: "سيتواصل معكم أحد أعضاء فريقنا خلال 24 ساعة.",
    clientUrgent: "في حال كان الأمر عاجلاً، يمكنكم التواصل معنا مباشرةً عبر الهاتف.",
    clientInquiryLabel: "تفاصيل استفساركم:",
    clientClosing: "نتطلع إلى التعاون معكم.",
    adminHeading: "تم استلام استفسار جديد لتطوير موقع إلكتروني",
    adminTimestamp: "وقت الإرسال",
    adminAutoSent:
      "تم إرسال هذا البريد تلقائياً. يرجى التواصل مع العميل في أقرب وقت.",
    fields: {
      company: "اسم الشركة",
      name: "الاسم",
      email: "البريد الإلكتروني",
      website: "رابط الموقع الحالي",
      message: "الرسالة",
    },
  },
};

export function getEmailTranslations(locale: string): EmailTranslations {
  const lang = (["ja", "en", "ar"].includes(locale) ? locale : "ja") as EmailLang;
  return translations[lang];
}
