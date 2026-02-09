import SectionTitle from "@/components/common/components/SectionTitle";
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
      description: "ウェブサイト完成後の基本的な保守・運用サポート。安定した運営を実現",
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
      color: "from-purple-400 to-indigo-400"
    },
    {
      id: "growth",
      name: "Growth",
      description: "継続的な改善と成長を目指すビジネスに最適。より充実したサポートを提供",
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
      color: "from-pink-400 to-rose-400"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "大規模な運用と戦略的成長をサポート。専任チームによる包括的なサービス",
      price: "500,000",
      priceSuffix: "/月",
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
      featured: false,
      color: "from-cyan-400 to-blue-400"
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-lavender/30 via-white to-peach/30 overflow-hidden fade-in"
      id="pricing"
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-5 py-15 relative z-10">
        <SectionTitle
          title="サービス & 料金プラン"
          description="ウェブサイト制作から運用まで、一貫したサービスでお客様のビジネスをサポートします"
        />

        {/* Initial Website Development Section */}
        <div className="max-w-[1000px] mx-auto mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 border border-purple-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">ウェブサイト制作</h3>
                <p className="text-xl text-gray-600 mb-6">
                  UI/UXデザインから実装、デプロイメントまで一貫したサービスを提供
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 text-center border border-purple-100">
                  <h4 className="text-lg font-semibold mb-2 text-gray-700">料金</h4>
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">¥1,000,000 - ¥3,000,000</p>
                  <p className="text-sm text-gray-500 mt-2">プロジェクトの複雑さにより変動</p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 text-center border border-pink-100">
                  <h4 className="text-lg font-semibold mb-2 text-gray-700">制作期間</h4>
                  <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">1〜3ヶ月</p>
                  <p className="text-sm text-gray-500 mt-2">プロジェクトの規模により調整</p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center border border-cyan-100">
                  <h4 className="text-lg font-semibold mb-2 text-gray-700">含まれるサービス</h4>
                  <ul className="text-sm text-left space-y-1 text-gray-600">
                    <li>• UI/UXデザイン</li>
                    <li>• フロントエンド開発</li>
                    <li>• バックエンド開発</li>
                    <li>• デプロイメント</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Support Plans */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text mb-2">月額サポートプラン</h3>
          <p className="text-gray-600">継続的な改善と成長をサポート</p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 max-w-[1200px] mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 h-fit border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                plan.featured
                  ? "border-purple-300 shadow-xl shadow-purple-500/20"
                  : "border-gray-100 hover:border-purple-200 hover:shadow-purple-500/10"
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ✨ 人気プラン ✨
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-purple-600 transition-colors duration-300">
                {plan.name}
              </h3>

              {/* Plan Description */}
              <p className="text-gray-600 text-center mb-8 leading-relaxed min-h-[4rem]">
                {plan.description}
              </p>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-lg font-normal text-gray-500">¥</span>
                  <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} text-transparent bg-clip-text`}>
                    {plan.price}
                  </span>
                  <span className="text-lg font-normal text-gray-500 ml-1">
                    {plan.priceSuffix}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm">
                    <span className="text-green-500 font-bold text-lg mt-[-2px]">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`w-full block text-center bg-gradient-to-r ${plan.color} text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;