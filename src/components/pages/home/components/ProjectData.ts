export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  siteUrl?: string; // Keep for the "View Live Site" button
  mediaType: "url" | "video"; // NEW: Identify if it's a website or local video
  desktopUrl?: string;
  mobileUrl?: string;
  desktopVideo?: string; // NEW: Path to desktop video (e.g., "/videos/project1-desktop.mp4")
  mobileVideo?: string; // NEW: Path to mobile video (e.g., "/videos/project1-mobile.mp4")
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Mac Hadis",
    description: "...",
    tags: ["コーポレート", "レスポンシブ", "Next.js"],
    siteUrl: "https://mac-hadis.com",
    mediaType: "url",
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
    mediaType: "url",
    desktopUrl: "https://thriveinjapan.com",
    mobileUrl: "https://thriveinjapan.com",
  },
  {
    id: 3,
    title: "Comy",
    description:
      "モダンなインターフェースを持つ革新的な日本語プラットフォーム。すべてのデバイスでシームレスな体験を提供。",
    tags: ["UI/UXデザイン", "イノベーション", "SEO"],
    mediaType: "url",
    siteUrl: "https://comy.jp",
    desktopUrl: "https://comy.jp",
    mobileUrl: "https://comy.jp",
  },
  {
    id: 4,
    title: "Rio Design",
    description: "",
    tags: ["UI/UX", "AI"],
    mediaType: "url",
    siteUrl: "https://rio-app.design/",
    desktopUrl: "https://rio-app.design/",
    mobileUrl: "https://rio-app.design/",
  },
  {
    id: 5,
    title: "Yum Gott",
    description: "",
    tags: ["Flutter", "Application"],
    // siteUrl: "https://rio-app.design/",
    mediaType: "video",
    desktopVideo: "/videos/yum-gott.mp4",
    mobileVideo: "/videos/yum-gott.mp4",
  },
];
