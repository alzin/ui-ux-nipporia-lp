import type { Translations } from "./types";
import type { LocalizedPageContent } from "@/i18n/translations/types";

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
    menu: {
      open: "メニューを開く",
      close: "メニューを閉じる",
    },
  },

  // Hero
  hero: {
    title: "スピードと品質を両立したソフトウェア開発で、事業成長を支えます。",
    subtitle: "モバイルアプリ・ウェブサイト・SaaS・UI/UXデザイン・SEO・デジタルマーケティングで集客と売上を最大化。 無料相談（60分）・最短7日で改善案をご提案",
    cta: "",
    primaryButton: "無料相談を申し込む",
    secondaryButton: "サンプルプロジェクト",
    stickyConsultation: "無料相談",
    stickyPortfolio: "サンプルプロジェクト",
    accepting: "受付中",
    services: ["モバイルアプリ", "ウェブサイト", "AIソリューション", "UI/UXデザイン"],
  },

  heroWorkflow: {
    steps: [
      { label: "オンライン会議", notification: "会議開始！", detail: "4名参加" },
      { label: "要件定義", notification: "仕様確定！", detail: "優先度：高" },
      { label: "UI/UXデザイン", notification: "デザイン完成！", detail: "モバイル＋デスクトップ" },
      { label: "クライアントFB", notification: "FB受信！", detail: "3件のコメント" },
      { label: "開発", notification: "構築中...", detail: "進捗：67%" },
      { label: "クライアントレビュー", notification: "承認済み！", detail: "評価：★★★★★" },
      { label: "QAテスト", notification: "全テスト合格！", detail: "カバレッジ：94%" },
      { label: "デプロイ", notification: "公開完了！", detail: "ステータス：稼働中" },
    ],
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
    loadingPreview: "プレビューを読み込み中...",
    desktopPreview: "デスクトッププレビュー",
    mobilePreview: "モバイルプレビュー",
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
  languageSwitcher: {
    switcher: "言語切替",
    selectLanguage: "言語を選択",
    switchTo: "切り替え",
    options: {
      ja: "日本語",
      en: "English",
      ar: "العربية",
    },
  },
  blogUi: {
    allBlogsTitle: "ブログ一覧",
    allBlogsAria: "すべてのブログ記事",
    blogPost: "ブログ記事",
    untitled: "無題",
    noDescription: "説明はありません",
    noDate: "日付なし",
    noTags: "タグなし",
    blogImage: "ブログ画像",
    readPost: "ブログ記事を読む",
  },
  notFoundPage: {
    message: "お探しのページが見つかりませんでした。",
    backHome: "ホームに戻る",
  },
};

export const jaPageContent: LocalizedPageContent = {
  layout: {
    titleDefault:
      "Webサイト変革サービス | 低品質なサイトをプロフェッショナルに変える専門家",
    titleTemplate: "%s | Webサイト変革サービス",
    description:
      "私たちは、デザインが悪く、トラフィックが少ないウェブサイトを、最新のNext.jsとSEO技術を使ってプロフェッショナルなサイトに変革します。実績豊富なWebサイト改善サービス。",
    applicationName: "Webサイト変革サービス",
    keywords: [
      "ウェブサイト改善",
      "UI/UX改善",
      "Next.js開発",
      "SEO対策",
      "Google広告",
      "ウェブデザイン",
      "サイトリニューアル",
    ],
    ogTitle: "Webサイト変革サービス | 低品質なサイトをプロフェッショナルに",
    ogDescription:
      "デザインが悪く、トラフィックが少ないウェブサイトを、最新技術でプロフェッショナルなサイトに変革します",
    ogImageAlt: "Webサイト変革サービスのOG画像",
  },
  notFound: {
    title: "404 - ページが見つかりません",
    description:
      "お探しのページは見つかりませんでした。ホームページをご確認ください。",
  },
  blogs: {
    title: "ブログ一覧",
    description: "当サイトのブログ記事を一覧でご覧いただけます。",
  },
  missingBlog: {
    title: "記事が見つかりません",
    description: "指定されたブログ記事は存在しません。",
  },
  privacyPolicy: {
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
  termsOfService: {
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
        paragraphs: [
          "サービス料金は、個別契約書または見積書に記載された金額とします。支払い条件は以下の通りです：",
        ],
        listItems: [
          "初期制作費用：契約時に50%、納品時に50%",
          "月額サポート費用：毎月末締め、翌月末払い",
          "支払い方法：銀行振込またはクレジットカード決済",
        ],
      },
      {
        title: "第5条（禁止事項）",
        paragraphs: [
          "ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：",
        ],
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
  commerceDisclosure: {
    metadataTitle: "特定商取引法に基づく表記 | Nipporia",
    metadataDescription: "特定商取引法に基づく表記についてご説明します。",
    pageTitle: "特定商取引法に基づく表記",
    rows: [
      { label: "販売事業者名", lines: ["Nipporia（ニッポリア）"] },
      { label: "代表者", lines: ["Arjin Muhammad Ghais"] },
      {
        label: "所在地",
        lines: ["埼玉県久喜市久喜中央1丁目9番4-902号"],
      },
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
};

export default ja;
