import type { Translations } from "./types";
import type { LocalizedPageContent } from "@/i18n/translations/types";

const ja: Translations = {
  // Header nav
  nav: {
    home: "ホーム",
    problems: "課題",
    transformation: "実績",
    visualExamples: "プロジェクト",
    services: "サービス",
    process: "進め方？",
    pricing: "料金プラン",
    contact: "お問い合わせ",
    blog: "ブログ",
    templates: "テンプレート",
    menu: {
      open: "メニューを開く",
      close: "メニューを閉じる",
    },
  },

  templatesPage: {
    title: "テンプレート一覧",
    subtitle: "Nipporiaが手がけたプレミアムWebサイトテンプレートをご覧ください。モダンなデザインと最新技術で制作しています。",
    viewLive: "ライブで見る",
    category: "カテゴリ",
    items: [
      {
        title: "LuxEstate — 不動産サイト",
        description: "ダークでプレミアムな高級不動産プラットフォーム。物件検索フィルター、エレガントなタイポグラフィ、深いチャコールにゴールド/ベージュのアクセントが特徴です。",
        category: "不動産",
        tags: ["HTML/CSS/JS", "ダークテーマ", "レスポンシブ", "ラグジュアリー"],
      },
      {
        title: "JSOMS — 医療ポータル リデザイン",
        description: "日本口腔外科学会の医療ポータルをプロフェッショナルにリニューアル。モダンなナビゲーションとヒーロー画像スライダーを備えたクリーンな制度的レイアウト。",
        category: "医療 / ヘルスケア",
        tags: ["HTML/CSS/JS", "ライトテーマ", "制度的", "リデザイン"],
      },
    ],
  },

  // Hero
  hero: {
    title: "事業成長につながるAI ・ Web・アプリ・SaaS開発を、戦略設計から運用改善まで一貫支援",
    titleTagline: "成果を見据えた設計と、スピード感ある開発体制でビジネスを前進させます",
    subtitle: "モバイルアプリ・ウェブサイト・SaaS・UI/UXデザイン・SEO・デジタルマーケティングで集客と売上を最大化。 無料相談（60分）・最短7日で改善案をご提案",
    cta: "",
    primaryButton: "無料相談を予約する",
    secondaryButton: "制作実績を見る",
    stickyConsultation: "無料相談",
    stickyPortfolio: "制作実績",
    accepting: "無料相談受付中",
    services: ["モバイルアプリ", "ウェブサイト", "AIソリューション", "UI/UXデザイン"],
  },

  heroWorkflow: {
    steps: [
      { label: "お打ち合わせ", notification: "お打ち合わせ開始", detail: "参加者：4名" },
      { label: "要件定義", notification: "要件整理完了", detail: "優先度：高" },
      { label: "UI/UX設計", notification: "デザイン案を提出", detail: "モバイル・デスクトップ対応" },
      { label: "ご確認・FB", notification: "フィードバックを反映中", detail: "コメント：3件" },
      { label: "開発", notification: "開発進行中", detail: "進捗：67%" },
      { label: "レビュー", notification: "承認済み", detail: "評価：★★★★★" },
      { label: "テスト", notification: "テスト完了", detail: "カバレッジ：94%" },
      { label: "公開", notification: "公開完了", detail: "ステータス：稼働中" },
    ],
  },

  // Problems
  problems: {
    sectionTitle: "こんな課題はありませんか？",
    items: [
      {
        title: "開発・集客・改善が分断されている",
        description:
          "Webサイト制作、広告運用、SEO、アプリ開発が別々に進み、事業全体としての成果につながっていない。",
      },
      {
        title: "デジタル投資の優先順位が整理できていない",
        description:
          "AI導入や新規開発を検討しているものの、何から始めるべきか判断できず、意思決定が進まない。",
      },
      {
        title: "公開後の改善体制がなく、成果が伸びない",
        description:
          "制作や開発の後に分析・改善まで伴走できる体制がなく、見込み客獲得や売上向上に結びついていない。",
      },
    ],
  },

  // Transformation
  transformation: {
    sectionTitle: "導入企業の実績",
    before: "導入前",
    after: "導入後",
    metrics: {
      monthlyLeads: "月間リード数",
      acquisitionCost: "顧客獲得コスト",
      conversionRate: "コンバージョン率",
      digitalChannels: "デジタルチャネル数",
      automationRate: "業務自動化率",
    },
  },

  // Visual Transformation
  visualTransformation: {
    sectionTitle: "制作実績",
    description: "これまでの制作実績をご紹介します",
    prevProject: "前の実績",
    nextProject: "次の実績",
    laptop: "PC",
    phone: "スマートフォン",
    viewLiveSite: "サイトを見る",
    loadingPreview: "プレビューを読み込んでいます...",
    desktopPreview: "PCプレビュー",
    mobilePreview: "スマートフォンプレビュー",
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
        title: "保守・改善",
        description:
          "納品後も継続的なサポートで、新機能追加や改善要望に迅速に対応します。",
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
    ],
  },

  // Process
  process: {
    sectionTitle: "進め方",
    steps: [
      {
        title: "無料相談・ヒアリング",
        description:
          "現状の課題やご要望、目標をお伺いし、プロジェクトの方向性を整理します。",
      },
      {
        title: "課題整理・ご提案",
        description:
          "必要な機能や施策を整理したうえで、進め方・スケジュール・お見積もりをご提示します。",
      },
      {
        title: "設計・デザイン・開発",
        description:
          "要件に沿って、Webサイト・アプリ・SaaS・AI機能の設計、デザイン、開発を進めます。",
      },
      {
        title: "公開・運用改善",
        description:
          "公開後も、保守・分析・改善提案を通じて、継続的な成果向上を支援します。",
      },
    ],
  },

  // Pricing
  pricing: {
    sectionTitle: "サービス & 料金プラン",
    sectionDescription:
      "開発プロジェクトから継続的な運用まで、ワンストップでお客様のデジタル成長をサポートします",
    websiteDev: {
      title: "プロジェクト開発",
      description:
        "ウェブサイト・アプリ・SaaS・AIソリューションの企画から実装・デプロイまで一貫対応",
      priceLabel: "料金",
      priceNote: "プロジェクトの複雑さにより変動",
      durationLabel: "制作期間",
      duration: "1〜3ヶ月",
      durationNote: "プロジェクトの規模により調整",
      includedLabel: "含まれるサービス",
      includedItems: [
        "UI/UXデザイン",
        "フロントエンド・バックエンド開発",
        "テスト・品質保証",
        "デプロイメント・運用引き継ぎ",
      ],
    },
    monthlyPlansTitle: "月額サポートプラン",
    monthlyPlansDescription: "継続的な改善と成長をサポート",
    popularBadge: "✨ 人気プラン ✨",
    plans: [
      {
        description:
          "プロジェクト納品後の基本的な保守・運用サポート。安定した運営を実現",
        features: [
          "バグ修正対応",
          "アップタイムモニタリング",
          "Google広告サポート（基本）",
          "月2件のコンテンツ・機能追加",
          "月2件のブログ記事作成",
          "SEO基本サポート",
          "最大4件の変更リクエスト対応",
          "パフォーマンス改善",
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
          "月4件のコンテンツ・機能追加",
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
    sectionTitle: "今すぐデジタル戦略を始めましょう",
    sectionDescription:
      "無料相談で、ビジネスに最適なデジタル施策をご提案します",
    companyLabel: "会社名",
    nameLabel: "お名前",
    emailLabel: "メールアドレス",
    websiteLabel: "会社サイトURL（任意）",
    messageLabel: "ご相談内容",
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
      "スピードと品質を両立したソフトウェア開発で、事業成長を支えます。",
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
      "Nipporia | ソフトウェア開発・アプリ・SaaS・AI・デジタルマーケティング",
    titleTemplate: "%s | Nipporia",
    description:
      "ウェブサイト・モバイルアプリ・SaaS・AIソリューション・SEO・デジタルマーケティングをワンストップで提供。スピードと品質を両立した開発で事業成長を支えます。",
    applicationName: "Nipporia",
    keywords: [
      "ソフトウェア開発",
      "UI/UX改善",
      "Next.js開発",
      "SEO対策",
      "Google広告",
      "SaaS開発",
      "AIソリューション",
      "デジタルマーケティング",
      "モバイルアプリ開発",
    ],
    ogTitle: "Nipporia | ソフトウェア開発・アプリ・SaaS・AI・マーケティング",
    ogDescription:
      "ウェブ・アプリ・SaaS・AIをワンストップで。スピードと品質を両立した開発で事業成長を支えます",
    ogImageAlt: "NipporiaのOG画像",
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
  templates: {
    title: "テンプレート | Nipporia",
    description: "Nipporiaが制作したプレミアムWebサイトテンプレートをご覧ください。モダンなデザインと最新技術。",
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
