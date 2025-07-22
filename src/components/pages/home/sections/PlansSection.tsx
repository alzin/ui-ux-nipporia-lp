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
      id: "renewal",
      icon: "🚀",
      name: "ウェブサイトリニューアル",
      description:
        "既存サイトの完全リニューアル。デザイン改善、パフォーマンス最適化、SEO対策まで包括的にサポート",
      price: "100,000",
      priceNote: "※プロジェクトの規模・複雑性により変動",
      features: [
        "現状サイトの徹底分析",
        "モダンなデザインへの刷新",
        "パフォーマンス最適化",
        "SEO基盤の構築",
        "レスポンシブ対応",
        "基本的な保守サポート（3ヶ月）",
      ],
      ctaText: "お見積もりを依頼",
      featured: false,
    },
    {
      id: "monthly",
      icon: "💼",
      name: "ITソリューション月額サポート",
      description:
        "10年以上の経験を持つエンジニアチームが、Web開発・モバイル開発・AI開発を包括的にサポート",
      price: "300,000 - 600,000",
      priceSuffix: "/月",
      priceNote: "※契約条件により調整可能",
      features: [
        "専任エンジニアのアサイン",
        "Web開発（React, Next.js, Node.js）",
        "モバイルアプリ開発",
        "AI/機械学習ソリューション",
        "継続的な技術コンサルティング",
        "優先対応＆定期レポート",
      ],
      ctaText: "詳細を確認",
      featured: true,
    },
    {
      id: "hourly",
      icon: "⏰",
      name: "時間単位サポート",
      description:
        "IT関連のあらゆるご要望に柔軟に対応。必要な時に必要な分だけプロフェッショナルサポート",
      price: "5,000",
      priceSuffix: "/時間",
      priceNote: "※1名あたりの料金",
      features: [
        "最小契約時間なし",
        "技術相談・コンサルティング",
        "バグ修正・機能追加",
        "セキュリティ診断",
        "パフォーマンス改善",
        "即日対応可能（要相談）",
      ],
      ctaText: "今すぐ相談",
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
          title="料金プラン"
          description="お客様のニーズに合わせた柔軟な料金体系をご用意しております"
        />

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
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-3xl mx-auto group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  {plan.icon}
                </div>
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
                <p className="text-sm text-gray/80">{plan.priceNote}</p>
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

        {/* Enhanced Note Section */}
        <div className="max-w-[800px] mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
                <span className="text-3xl">🎯</span>
                カスタマイズ可能な料金プラン
              </h3>
              <p className="text-gray leading-relaxed text-lg">
                上記の料金プランは基本的な目安です。お客様のビジネスニーズや予算に応じて、
                <br className="hidden md:block" />
                最適なプランをカスタマイズいたします。まずはお気軽にご相談ください。
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
      `}</style>
    </section>
  );
};

export default PlansSection;
