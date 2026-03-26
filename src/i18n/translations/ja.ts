import type { Translations } from "./types";

const ja: Translations = {
  // Header nav
  nav: {
    problems: "課題",
    transformation: "実績",
    visualExamples: "サンプルプロジェクト",
    services: "サービス",
    process: "進め方",
    pricing: "料金プラン",
    contact: "お問い合わせ",
    blog: "ブログ",
  },

  // Hero
  hero: {
    title: "ビジネス成長を生むウェブサイトへ変革します。",
    subtitle: "プロ品質のデザインで、集客を伸ばす。",
    cta: "無料相談（60分）・最短7日で改善案をご提案",
    primaryButton: "無料相談を申し込む",
    secondaryButton: "サンプルプロジェクト",
    stickyConsultation: "無料相談",
    stickyPortfolio: "サンプルプロジェクト",
    accepting: "受付中",
  },

  // Problems
  problems: {
    sectionTitle: "こんな問題で悩んでいませんか？",
    items: [
      {
        title: "古いデザイン",
        description:
          "10年前のようなデザインで、競合他社に比べて見劣りする。モバイル対応もできていない。",
      },
      {
        title: "低いトラフィック",
        description:
          "検索エンジンからの流入がほとんどなく、月間訪問者数が数百人程度で停滞している。",
      },
      {
        title: "メンテナンスが困難",
        description:
          "古いコードで構築されており、小さな変更にも多大な時間とコストがかかる。",
      },
    ],
  },

  // Transformation
  transformation: {
    sectionTitle: "実際の変革事例",
    before: "変革前",
    after: "変革後",
    metrics: {
      monthlyVisitors: "月間訪問者数",
      bounceRate: "直帰率",
      avgDuration: "平均滞在時間",
      mobileReady: "モバイル対応",
      pageSpeed: "ページ読み込み速度",
    },
  },

  // Visual Transformation
  visualTransformation: {
    sectionTitle: "サンプルプロジェクト",
    description: "クライアント様の実際のプロジェクトをご覧ください",
    prevProject: "前のプロジェクト",
    nextProject: "次のプロジェクト",
    laptop: "ノートPC",
    phone: "スマートフォン",
    viewLiveSite: "サイトを見る",
  },

  // Projects
  projects: [
    {
      description:
        "プロフェッショナルなサービスと専門知識を紹介する、クリーンでモダンなデザインのウェブサイト。",
      tags: ["コーポレート", "レスポンシブ", "Next.js"],
    },
    {
      description:
        "日本での生活や機会をサポートする総合プラットフォーム。豊富なコンテンツとリソースを提供。",
      tags: ["プラットフォーム", "多言語対応", "コンテンツ"],
    },
    {
      description:
        "モダンなインターフェースを持つ革新的な日本語プラットフォーム。すべてのデバイスでシームレスな体験を提供。",
      tags: ["UI/UXデザイン", "イノベーション", "SEO"],
    },
  ],

  // Services
  services: {
    sectionTitle: "提供サービス",
    items: [
      {
        title: "Next.js開発",
        description:
          "最新のReactフレームワークを使用し、高速で保守性の高いWebサイトを構築します。",
      },
      {
        title: "SEO最適化",
        description:
          "検索エンジンでの上位表示を実現し、オーガニックトラフィックを大幅に向上させます。",
      },
      {
        title: "ブログ運用",
        description:
          "月次でプロフェッショナルなブログ記事を作成・公開し、継続的な集客を実現します。",
      },
      {
        title: "Google広告運用",
        description:
          "効果的な広告キャンペーンを設計・運用し、即効性のある集客を実現します。",
      },
      {
        title: "UI/UXデザイン",
        description:
          "ユーザー体験を重視した美しく使いやすいデザインで、訪問者を顧客に変えます。",
      },
      {
        title: "AIソリューション",
        description:
          "業務効率を高める自動化やチャットアシスタントなど、実用的なAI機能を導入します。",
      },
      {
        title: "モバイルアプリ開発",
        description:
          "iOS・Android向けに、高速で使いやすいモバイルアプリを設計・開発します。",
      },
      {
        title: "SaaSアプリケーション開発",
        description:
          "サブスクリプション運用、管理ダッシュボード、マルチテナント構成に対応したSaaSを構築します。",
      },
      {
        title: "デジタルマーケティング",
        description:
          "検索・SNS・コンテンツ施策を組み合わせ、見込み顧客の獲得につながる施策を実行します。",
      },
      {
        title: "保守・改善",
        description:
          "納品後も継続的なサポートで、新機能追加や改善要望に迅速に対応します。",
      },
    ],
  },

  // Process
  process: {
    sectionTitle: "進め方",
    steps: [
      {
        title: "無料相談",
        description:
          "現状のWebサイトの課題をヒアリングし、改善の方向性をご提案します。",
      },
      {
        title: "分析・提案",
        description:
          "詳細な分析を行い、具体的な改善プランと見積もりをご提示します。",
      },
      {
        title: "デザイン・開発",
        description: "最新技術を活用し、高品質なWebサイトを構築します。",
      },
      {
        title: "公開・運用",
        description:
          "サイト公開後も継続的なサポートで成長を支援します。",
      },
    ],
  },

  // Pricing
  pricing: {
    sectionTitle: "サービス & 料金プラン",
    sectionDescription:
      "ウェブサイト制作から運用まで、一貫したサービスでお客様のビジネスをサポートします",
    websiteDev: {
      title: "ウェブサイト制作",
      description:
        "UI/UXデザインから実装、デプロイメントまで一貫したサービスを提供",
      priceLabel: "料金",
      priceNote: "プロジェクトの複雑さにより変動",
      durationLabel: "制作期間",
      duration: "1〜3ヶ月",
      durationNote: "プロジェクトの規模により調整",
      includedLabel: "含まれるサービス",
      includedItems: [
        "UI/UXデザイン",
        "フロントエンド開発",
        "バックエンド開発",
        "デプロイメント",
      ],
    },
    monthlyPlansTitle: "月額サポートプラン",
    monthlyPlansDescription: "継続的な改善と成長をサポート",
    popularBadge: "✨ 人気プラン ✨",
    plans: [
      {
        description:
          "ウェブサイト完成後の基本的な保守・運用サポート。安定した運営を実現",
        features: [
          "バグ修正対応",
          "アップタイムモニタリング",
          "Google広告サポート（基本）",
          "月2件の新規プロダクトページ作成",
          "月2件のブログ記事作成",
          "SEO基本サポート",
          "最大4件の変更リクエスト対応",
          "モバイルスピード改善",
          "SLA/レスポンスタイム: 48時間",
        ],
        ctaText: "お申し込み",
      },
      {
        description:
          "継続的な改善と成長を目指すビジネスに最適。より充実したサポートを提供",
        features: [
          "Basicプランの全機能",
          "Google広告サポート（中級）",
          "月4件の新規プロダクトページ作成",
          "月4件のブログ記事作成",
          "SEO中級サポート",
          "最大6件の変更リクエスト対応",
          "UI/UXエンハンスメント",
          "SLA/レスポンスタイム: 24時間",
        ],
        ctaText: "お申し込み",
      },
      {
        description:
          "大規模な運用と戦略的成長をサポート。専任チームによる包括的なサービス",
        features: [
          "Growthプランの全機能",
          "Google広告サポート（上級）",
          "SEO上級サポート",
          "無制限の変更リクエスト対応",
          "新機能実装（LiveChat等）",
          "SNSマーケティングサポート",
          "戦略的成長コンサルティング",
          "24/7サポート",
          "専任PM配置",
          "SLA/レスポンスタイム: 2時間",
        ],
        ctaText: "お問い合わせ",
      },
    ],
  },

  // CTA / Contact
  contact: {
    sectionTitle: "今すぐWebサイトを変革しましょう",
    sectionDescription:
      "無料相談で、あなたのWebサイトの可能性をお見せします",
    companyLabel: "会社名",
    nameLabel: "お名前",
    emailLabel: "メールアドレス",
    websiteLabel: "現在のWebサイトURL（任意）",
    messageLabel: "お悩み・ご要望",
    submitButton: "無料相談を申し込む",
    submitting: "送信中...",
  },

  // Form handler messages
  form: {
    sendingTitle: "送信しています...",
    sendingMessage: "そのままお待ちください。",
    successTitle: "送信が完了しました",
    successMessage:
      "メールを送信しました。<br />確認メールをお送りしましたので、<br />ご確認ください。",
    errorTitle: "エラー発生！",
    errorMessage: "送信中にエラーが発生しました",
    serverError: "サーバーエラーが発生しました。もう一度お試しください。",
  },

  // Footer
  footer: {
    tagline:
      "ビジネス成長を生むウェブサイトへ変革します。プロ品質のデザインで、集客を伸ばす。",
    quickLinks: "クイックリンク",
    quickLinkItems: {
      services: "サービス",
      pricing: "料金プラン",
      transformation: "変革事例",
      blog: "ブログ",
      contact: "お問い合わせ",
    },
    legalTitle: "法的情報",
    legalItems: {
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      commerce: "特定商取引法に基づく表記",
    },
  },
};

export default ja;
