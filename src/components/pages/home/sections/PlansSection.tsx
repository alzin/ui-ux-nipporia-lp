import SectionTitle from "@/components/common/components/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

const PlansSection = () => {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    staggerDelay: 200,
  });

  const { t } = useLanguage();

  const plansMeta = [
    { id: "basic", name: "Basic", price: "250,000", priceSuffix: "/mo", featured: false, color: "from-purple-400 to-indigo-400" },
    { id: "growth", name: "Growth", price: "350,000", priceSuffix: "/mo", featured: true, color: "from-pink-400 to-rose-400" },
    { id: "enterprise", name: "Enterprise", price: "500,000", priceSuffix: "/mo", featured: false, color: "from-cyan-400 to-blue-400" },
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
          title={t.pricing.sectionTitle}
          description={t.pricing.sectionDescription}
        />

        {/* Initial Website Development Section */}
        <div className="max-w-[1000px] mx-auto mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 border border-purple-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{t.pricing.websiteDev.title}</h3>
                <p className="text-xl text-gray-600 mb-6">
                  {t.pricing.websiteDev.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 text-center border border-purple-100">
                  <h4 className="text-lg font-semibold mb-2 text-gray-700">{t.pricing.websiteDev.priceLabel}</h4>
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">¥1,000,000 - ¥3,000,000</p>
                  <p className="text-sm text-gray-500 mt-2">{t.pricing.websiteDev.priceNote}</p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 text-center border border-pink-100">
                  <h4 className="text-lg font-semibold mb-2 text-gray-700">{t.pricing.websiteDev.durationLabel}</h4>
                  <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">{t.pricing.websiteDev.duration}</p>
                  <p className="text-sm text-gray-500 mt-2">{t.pricing.websiteDev.durationNote}</p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center border border-cyan-100">
                  <h4 className="text-lg font-semibold mb-2 text-gray-700">{t.pricing.websiteDev.includedLabel}</h4>
                  <ul className="text-sm text-left space-y-1 text-gray-600">
                    {t.pricing.websiteDev.includedItems.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Support Plans */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text mb-2">{t.pricing.monthlyPlansTitle}</h3>
          <p className="text-gray-600">{t.pricing.monthlyPlansDescription}</p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 max-w-[1200px] mx-auto">
          {plansMeta.map((plan, index) => {
            const planTranslation = t.pricing.plans[index];
            return (
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

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-purple-600 transition-colors duration-300">
                  {plan.name}
                </h3>

                {/* Plan Description */}
                <p className="text-gray-600 text-center mb-8 leading-relaxed min-h-[4rem]">
                  {planTranslation.description}
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
                  {planTranslation.features.map((feature, featureIndex) => (
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
                  {planTranslation.ctaText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
