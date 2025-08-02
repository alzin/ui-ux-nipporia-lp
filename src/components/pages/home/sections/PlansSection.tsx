import SectionTitle from "@/components/common/components/SectionTitle";
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PlansSection = () => {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    staggerDelay: 200,
  });
  const plans = [
    {
      id: "basic",
      name: "Basic",
      description:
        "ウェブサイト完成後の基本的な保守・運用サポート。安定した運営を実現",
      price: "250,000",
      priceSuffix: "/月",
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
      featured: false,
    },
    {
      id: "growth",
      name: "Growth",
      description:
        "継続的な改善と成長を目指すビジネスに最適。より充実したサポートを提供",
      price: "350,000",
      priceSuffix: "/月",
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
      featured: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description:
        "大規模な運用と戦略的成長をサポート。専任チームによる包括的なサービス",
      price: "500,000",
      priceSuffix: "/月",
      features: [
        "Growthプランの全機能",
        "Google広告サポート（上級）",
        "SEO上級サポート",
        "無制限の変更リクエスト対応",
        "新機能実装（LiveChat等）",
        "SNSマーケティングサポート（Yahoo広告等）",
        "戦略的成長コンサルティング",
        "24/7サポート",
        "「創業者精神」専任PM配置",
        "SLA/レスポンスタイム: 2時間",
      ],
      ctaText: "お問い合わせ",
      featured: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-dark via-dark-lighter to-dark overflow-hidden fade-in"
      id="pricing"
    >

      <div className="container mx-auto px-5 py-15 text-white relative z-10">
        {/* Header using common component */}
        <SectionTitle
          title="サービス & 料金プラン"
          description="ウェブサイト制作から運用まで、一貫したサービスでお客様のビジネスをサポートします"
        />

        {/* Initial Website Development Section */}
        <div className="max-w-[1000px] mx-auto mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-md rounded-3xl p-10 border-2 border-primary/30 shadow-[0_0_50px_rgba(99,102,241,0.3)] relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-pulse"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  ウェブサイト制作
                </h3>
                <p className="text-xl text-gray/90 mb-6">
                  UI/UXデザインから実装、デプロイメントまで一貫したサービスを提供
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Price Range */}
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-semibold mb-2">料金</h4>
                  <p className="text-2xl font-bold text-primary">¥1,000,000 - ¥3,000,000</p>
                  <p className="text-sm text-gray mt-2">プロジェクトの複雑さと作業量により変動</p>
                </div>

                {/* Timeline */}
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-semibold mb-2">制作期間</h4>
                  <p className="text-2xl font-bold text-secondary">1〜3ヶ月</p>
                  <p className="text-sm text-gray mt-2">プロジェクトの規模により調整</p>
                </div>

                {/* Services */}
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-semibold mb-2">含まれるサービス</h4>
                  <ul className="text-sm text-left space-y-1">
                    <li>• UI/UXデザイン</li>
                    <li>• フロントエンド開発</li>
                    <li>• バックエンド開発</li>
                    <li>• デプロイメント</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray/90 mb-4">
                  プロジェクト完了後は、以下の月額サポートプランで継続的な運用・改善をサポートします
                </p>
                <div className="inline-flex items-center justify-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                  <svg className="mx-4 w-8 h-8 text-primary animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Support Plans Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-primary mb-2">月額サポートプラン</h3>
          <p className="text-gray">継続的な改善と成長をサポート</p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 max-w-[1200px] mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`
                group relative bg-white/[0.02] backdrop-blur-md rounded-3xl p-8 h-fit
                border border-white/10 shadow-2xl transition-all duration-500 
                hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(99,102,241,0.3)]
                ${
                  plan.featured
                    ? "border-2 border-primary/50 shadow-[0_0_40px_rgba(99,102,241,0.2)]"
                    : "hover:border-primary/30"
                }
                animate-fadeInUp
              `}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-badgeBounce">
                    ✨ 人気プラン ✨
                  </div>
                </div>
              )}

              {/* Plan Icon */}
              <div className="relative mb-6">
                {/* <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-3xl mx-auto group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  {plan.icon}
                </div> */}
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-primary transition-colors duration-300">
                {plan.name}
              </h3>

              {/* Plan Description */}
              <p className="text-gray text-center mb-8 leading-relaxed min-h-[4rem] flex items-center justify-center">
                {plan.description}
              </p>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center text-primary mb-2">
                  <span className="text-lg font-normal">¥</span>
                  <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                    {plan.price}
                  </span>
                  {plan.priceSuffix && (
                    <span className="text-lg font-normal text-gray ml-1">
                      {plan.priceSuffix}
                    </span>
                  )}
                  {!plan.priceSuffix && (
                    <span className="text-lg font-normal text-gray ml-1">
                      〜
                    </span>
                  )}
                </div>
                {plan.priceNote && (
                  <p className="text-sm text-gray/80">{plan.priceNote}</p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-sm group/item hover:text-primary transition-colors duration-200"
                  >
                    <span className="text-success font-bold text-lg mt-[-2px] group-hover/item:scale-110 transition-transform duration-200">
                      ✓
                    </span>
                    <span className="flex-1">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full relative bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)] hover:-translate-y-1 group/btn overflow-hidden">
                <span className="relative z-10">{plan.ctaText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          ))}
        </div>

        {/* SEO & Google Ads Details Section */}
        <div className="max-w-[1200px] mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">サービス詳細</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SEO Plans Details */}
            <div className="bg-white/[0.02] backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold text-primary mb-4">SEOサポート詳細</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2">基本プラン</h5>
                  <ul className="text-sm text-gray space-y-1">
                    <li>• キーワードリサーチ（最大5キーワード）</li>
                    <li>• オンページSEO（2ページまで）</li>
                    <li>• 基本的な技術監査</li>
                    <li>• 月次パフォーマンスレポート</li>
                    <li>• メタタイトル・説明文の最適化</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-2">中級プラン</h5>
                  <ul className="text-sm text-gray space-y-1">
                    <li>• 基本プランの全機能</li>
                    <li>• 拡張キーワード戦略（最大10キーワード）</li>
                    <li>• オンページSEO（4ページまで）</li>
                    <li>• SEOブログコンテンツ推奨（月4件）</li>
                    <li>• 競合分析（月2-3社）</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-2">上級プラン</h5>
                  <ul className="text-sm text-gray space-y-1">
                    <li>• 中級プランの全機能</li>
                    <li>• 拡張キーワード戦略（最大20キーワード）</li>
                    <li>• カスタムコンテンツ戦略</li>
                    <li>• バックリンク戦略（Ahrefs/SEMrush活用）</li>
                    <li>• Microsoft Clarityによる行動分析</li>
                    <li>• 高度な技術SEO</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Google Ads Details */}
            <div className="bg-white/[0.02] backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold text-primary mb-4">Google広告サポート詳細</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2">基本プラン</h5>
                  <ul className="text-sm text-gray space-y-1">
                    <li>• キャンペーン設定（1キャンペーン、最大5広告グループ）</li>
                    <li>• 基本的なキーワードリサーチ</li>
                    <li>• ロケーションターゲティング設定</li>
                    <li>• コンバージョントラッキング設定</li>
                    <li>• 月次パフォーマンスレポート</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-2">中級プラン</h5>
                  <ul className="text-sm text-gray space-y-1">
                    <li>• 最大3キャンペーンの管理</li>
                    <li>• 高度なキーワードリサーチ</li>
                    <li>• コンバージョントラッキング＆目標設定</li>
                    <li>• 基本的なリマーケティング設定</li>
                    <li>• 週次最適化（キーワード、入札、除外キーワード）</li>
                    <li>• 隔週パフォーマンスレポート＋推奨事項</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-2">上級プラン</h5>
                  <ul className="text-sm text-gray space-y-1">
                    <li>• Google広告アカウント完全管理</li>
                    <li>• ダイナミック広告クリエイティブ</li>
                    <li>• コンバージョンファネル分析</li>
                    <li>• 高度なリマーケティング戦略</li>
                    <li>• ランディングページ改善提案</li>
                    <li>• 週次レポート＆月次戦略ミーティング</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Note Section */}
        <div className="max-w-[800px] mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
                {/* <span className="text-3xl">🎯</span> */}
                トータルソリューションをご提供
              </h3>
              <p className="text-gray leading-relaxed text-lg">
                初期のウェブサイト制作から継続的な運用サポートまで、
                <br className="hidden md:block" />
                お客様のビジネスの成長段階に応じた最適なソリューションをご提供いたします。
              </p>
              <div className="mt-6">
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  無料相談を予約する
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes titleGlow {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
          }
          50% {
            text-shadow: 0 0 30px rgba(99, 102, 241, 0.8),
              0 0 40px rgba(34, 211, 238, 0.5);
          }
        }

        @keyframes lineExpand {
          0% {
            width: 0;
          }
          100% {
            width: 6rem;
          }
        }

        @keyframes badgeBounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-5px) translateX(-50%);
          }
          60% {
            transform: translateY(-3px) translateX(-50%);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-titleGlow {
          animation: titleGlow 3s ease-in-out infinite;
        }

        .animate-lineExpand {
          animation: lineExpand 1s ease-out;
        }

        .animate-badgeBounce {
          animation: badgeBounce 2s infinite;
        }

        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PlansSection;