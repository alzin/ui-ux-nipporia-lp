import SectionTitle from "@/components/common/components/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ServicesSection() {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    staggerDelay: 250,
  });

  const services = [
    {
      number: "01",
      title: "Next.js開発",
      description:
        "最新のReactフレームワークを使用し、高速で保守性の高いWebサイトを構築します。",
      icon: (
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M20 20L60 20L60 60L20 60L20 20Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M30 35L50 35M30 45L40 45"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M45 40L50 35L45 30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="25" cy="25" r="2" fill="currentColor" />
          <circle cx="30" cy="25" r="2" fill="currentColor" opacity="0.7" />
          <circle cx="35" cy="25" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "SEO最適化",
      description:
        "検索エンジンでの上位表示を実現し、オーガニックトラフィックを大幅に向上させます。",
      icon: (
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle
            cx="35"
            cy="35"
            r="15"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M45 45L55 55"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M30 30L35 35L40 30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 25V40"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="60" cy="20" r="3" fill="currentColor" opacity="0.6" />
          <circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.6" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "ブログ運用",
      description:
        "月次でプロフェッショナルなブログ記事を作成・公開し、継続的な集客を実現します。",
      icon: (
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <rect
            x="20"
            y="15"
            width="40"
            height="50"
            rx="3"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="30"
            y1="25"
            x2="50"
            y2="25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="30"
            y1="35"
            x2="50"
            y2="35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <line
            x1="30"
            y1="45"
            x2="45"
            y2="45"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <line
            x1="30"
            y1="55"
            x2="40"
            y2="55"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M15 20L15 60L25 65"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Google広告運用",
      description:
        "効果的な広告キャンペーンを設計・運用し、即効性のある集客を実現します。",
      icon: (
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M25 50L35 30L45 40L55 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="25" cy="50" r="3" fill="currentColor" />
          <circle cx="35" cy="30" r="3" fill="currentColor" />
          <circle cx="45" cy="40" r="3" fill="currentColor" />
          <circle cx="55" cy="20" r="3" fill="currentColor" />
          <rect
            x="50"
            y="50"
            width="15"
            height="10"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M55 55L60 55"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M15 60L65 60"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      ),
    },
    {
      number: "05",
      title: "UI/UXデザイン",
      description:
        "ユーザー体験を重視した美しく使いやすいデザインで、訪問者を顧客に変えます。",
      icon: (
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <rect
            x="20"
            y="25"
            width="25"
            height="30"
            rx="3"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="50"
            y="25"
            width="10"
            height="10"
            rx="2"
            fill="currentColor"
          />
          <rect
            x="50"
            y="40"
            width="10"
            height="15"
            rx="2"
            fill="currentColor"
            opacity="0.7"
          />
          <circle
            cx="32.5"
            cy="40"
            r="7"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M15 60L65 60"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="40" cy="15" r="3" fill="currentColor" opacity="0.6" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "保守・改善",
      description:
        "納品後も継続的なサポートで、新機能追加や改善要望に迅速に対応します。",
      icon: (
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M40 20C29 20 20 29 20 40C20 51 29 60 40 60C51 60 60 51 60 40"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M55 25L60 20L65 25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60 20V30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="40" cy="40" r="8" stroke="currentColor" strokeWidth="2" />
          <path
            d="M40 32V40L45 45"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="25" cy="40" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="55" cy="40" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="40" cy="25" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="40" cy="55" r="2" fill="currentColor" opacity="0.6" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative fade-in overflow-hidden"
    >
      {/* Animated background shapes */}
      <div className="absolute top-1/10 left-1/20 w-80 h-80 bg-gradient-radial from-purple-500/3 to-transparent rounded-full animate-float opacity-30" />
      <div className="absolute top-1/2 right-1/10 w-96 h-96 bg-gradient-radial from-blue-500/3 to-transparent rounded-full animate-float-delayed opacity-30" />
      <div className="absolute bottom-1/10 left-1/3 w-64 h-64 bg-gradient-radial from-purple-500/3 to-transparent rounded-full animate-float-slow opacity-30" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        {/* Section Header */}
        <SectionTitle title="提供サービス" />

        {/* Services Grid */}
        <div className="animate-slide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-12 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
            >
              {/* Service number */}
              <span className="absolute top-5 right-5 text-5xl font-bold text-purple-500/10 group-hover:text-purple-500/20 transition-colors duration-300">
                {service.number}
              </span>

              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Animated background effect */}
              <div className="absolute -top-full -left-full w-[300%] h-[300%] bg-gradient-radial from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Icon wrapper */}
              <div className="relative w-14 md:w-20 h-14 md:h-20 mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl rotate-45 group-hover:rotate-90 group-hover:scale-110 transition-all duration-500" />
                <div className="relative z-10 w-full h-full text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-5 group-hover:text-purple-100 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-25px, 25px) scale(0.95);
          }
          66% {
            transform: translate(20px, -20px) scale(1.05);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(15px, -15px) scale(1.05);
          }
        }

        .animate-float {
          animation: float 20s infinite ease-in-out;
        }

        .animate-float-delayed {
          animation: float-delayed 20s infinite ease-in-out;
          animation-delay: 7s;
        }

        .animate-float-slow {
          animation: float-slow 20s infinite ease-in-out;
          animation-delay: 14s;
        }

        .bg-gradient-radial {
          background: radial-gradient(var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}
