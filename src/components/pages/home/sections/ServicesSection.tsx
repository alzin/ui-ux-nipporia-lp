import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ServicesSection() {
  const sectionRef = useScrollAnimation({
      threshold: 0.1,
      staggerDelay: 250,
    });
  
  const services = [
    { icon: '⚡', title: 'Next.js開発', description: '最新のReactフレームワークを使用し、高速で保守性の高いWebサイトを構築します。' },
    { icon: '🔍', title: 'SEO最適化', description: '検索エンジンでの上位表示を実現し、オーガニックトラフィックを大幅に向上させます。' },
    { icon: '📝', title: 'ブログ運用', description: '月次でプロフェッショナルなブログ記事を作成・公開し、継続的な集客を実現します。' },
    { icon: '📈', title: 'Google広告運用', description: '効果的な広告キャンペーンを設計・運用し、即効性のある集客を実現します。' },
    { icon: '💎', title: 'UI/UXデザイン', description: 'ユーザー体験を重視した美しく使いやすいデザインで、訪問者を顧客に変えます。' },
    { icon: '🛠️', title: '保守・改善', description: '納品後も継続的なサポートで、新機能追加や改善要望に迅速に対応します。' },
  ];

  return (
    <section id="services" className="py-20 bg-dark-lighter relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(99,102,241,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_50%,rgba(34,211,238,0.1)_0%,transparent_50%)] animate-[servicesGlow_10s_ease_infinite]"></div>
      <div className="max-w-[1200px] mx-auto px-8 relative z-1">
        <h2 className="animate-slide text-[clamp(2rem,4vw,3rem)] text-center font-bold mb-16 relative animate-titleGlow after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-1 after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded after:animate-[lineExpand_2s_ease_infinite]">
          提供サービス
        </h2>
        <div className="animate-slide grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className={`service-card bg-white/[0.02]  border border-white/10 rounded-[20px] p-10 text-center relative overflow-hidden group hover:-translate-y-[15px] hover:scale-105 hover:border-primary hover:shadow-[0_30px_60px_rgba(99,102,241,0.3)] transition-all duration-[0.8s] animate-serviceFloat ${index === 0 ? 'animation-delay-0' : index === 1 ? 'animation-delay-500' : index === 2 ? 'animation-delay-1000' : index === 3 ? 'animation-delay-1500' : index === 4 ? 'animation-delay-2000' : 'animation-delay-2500'}`}>
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500 ease-in-out"></div>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary to-secondary rounded-[20px] flex items-center justify-center text-[2rem] animate-iconRotate group-hover:animate-[iconRotate_2s_linear_infinite]">{service.icon}</div>
              <h3 className="text-[1.5rem] mb-4 group-hover:text-primary transition-colors duration-300 font-bold">{service.title}</h3>
              <p className="text-gray leading-[1.8]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}