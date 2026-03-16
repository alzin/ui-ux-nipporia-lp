export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  siteUrl: string;
  desktopUrl: string;
  mobileUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Mac Hadis",
    description:
      "プロフェッショナルなサービスと専門知識を紹介する、クリーンでモダンなデザインのウェブサイト。",
    tags: ["コーポレート", "レスポンシブ", "Next.js"],
    siteUrl: "https://mac-hadis.com",
    desktopUrl: "https://mac-hadis.com",
    mobileUrl: "https://mac-hadis.com",
  },
  {
    id: 2,
    title: "Thrive in Japan",
    description:
      "日本での生活や機会をサポートする総合プラットフォーム。豊富なコンテンツとリソースを提供。",
    tags: ["プラットフォーム", "多言語対応", "コンテンツ"],
    siteUrl: "https://thriveinjapan.com",
    desktopUrl: "https://thriveinjapan.com",
    mobileUrl: "https://thriveinjapan.com",
  },
  {
    id: 3,
    title: "Comy",
    description:
      "モダンなインターフェースを持つ革新的な日本語プラットフォーム。すべてのデバイスでシームレスな体験を提供。",
    tags: ["UI/UXデザイン", "イノベーション", "SEO"],
    siteUrl: "https://comy.jp",
    desktopUrl: "https://comy.jp",
    mobileUrl: "https://comy.jp",
  },
];
