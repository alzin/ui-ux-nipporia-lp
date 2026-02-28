"use client";
import SectionTitle from "@/components/common/components/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function VisualTransformationSection() {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    staggerDelay: 230,
  });

  return (
    <section
      id="visual-examples"
      className="py-8 md:py-12 bg-gradient-to-br from-white via-purple-50/40 to-cyan-50/40 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle
          title="ビジュアル変革の実例"
          description="実際のクライアント様のWebサイト変革をご覧ください"
        />

        {/* =========================
            Video Demo — capped narrow so it never fills the full container
           ========================= */}
        <div className="animate-slide grid grid-cols-[1fr_auto_1fr] gap-3 md:gap-4 items-center max-w-[680px] mx-auto mb-6 md:mb-10">
          {/* BEFORE */}
          <div className="relative group rounded-xl md:rounded-2xl overflow-hidden">
            <div className="absolute top-2 left-2 px-2 py-0.5 md:px-3 md:py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-[0.55rem] md:text-[0.65rem] tracking-[1px] shadow-md z-10 animate-badgeBounce">
              BEFORE
            </div>

            <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-white/70 backdrop-blur border border-red-100 shadow-[0_8px_20px_rgba(0,0,0,0.09)] group-hover:-translate-y-1 group-hover:shadow-[0_14px_28px_rgba(0,0,0,0.13)] transition-all duration-500">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]"
                onError={(e) => console.error("Video error:", e)}
                style={{ maxWidth: "100%", height: "auto" }}
              >
                <source src="/videos/old_mac_haddis.webm" type="video/webm" />
              </video>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent py-3 px-2 hidden sm:flex flex-wrap gap-1 justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                {[
                  "❌ 時代遅れのデザイン",
                  "❌ 情報が見つけにくい",
                  "❌ モバイル非対応",
                  "❌ 低いコンバージョン率",
                ].map((t, i) => (
                  <span
                    key={t}
                    className="px-1.5 py-0.5 rounded-full bg-red-500/15 border border-red-400/20 text-red-100 text-[0.5rem] font-medium backdrop-blur opacity-100 translate-y-5 animate-slideInUp h-fit"
                    style={{ animationDelay: `${(i + 1) * 100}ms` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ARROW / TRANSFORM */}
          <div className="flex items-center justify-center">
            <div className="relative text-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36px] h-[36px] md:w-[52px] md:h-[52px] bg-[radial-gradient(circle,rgba(99,102,241,0.25)_0%,transparent_70%)] rounded-full animate-pulseWave" />
              <svg
                width="24"
                height="24"
                viewBox="0 0 60 60"
                className="relative z-10 animate-arrowMove md:w-8 md:h-8"
              >
                <path
                  d="M20 30 L40 30 M40 30 L35 25 M40 30 L35 35"
                  stroke="url(#arrowGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="arrowGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#6366f1", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#22d3ee", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
              </svg>
              <p className="mt-0.5 font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 text-transparent bg-clip-text text-[0.5rem] md:text-[0.65rem] animate-textGlow leading-tight">
                Transform!
              </p>
            </div>
          </div>

          {/* AFTER */}
          <div className="relative group rounded-xl md:rounded-2xl overflow-hidden">
            <div className="absolute top-2 left-2 px-2 py-0.5 md:px-3 md:py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-bold text-[0.55rem] md:text-[0.65rem] tracking-[1px] shadow-md z-10 animate-badgeBounce">
              AFTER
            </div>

            <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-white/70 backdrop-blur border border-emerald-100 shadow-[0_8px_20px_rgba(0,0,0,0.09)] group-hover:-translate-y-1 group-hover:shadow-[0_14px_28px_rgba(0,0,0,0.13)] transition-all duration-500">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]"
                onError={(e) => console.error("Video error:", e)}
                style={{ maxWidth: "100%", height: "auto" }}
              >
                <source src="/videos/new_mac_haddis.webm" type="video/webm" />
              </video>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent py-3 px-2 hidden sm:flex flex-wrap gap-1 justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                {[
                  "✓ 現代的で魅力的",
                  "✓ 直感的なナビゲーション",
                  "✓ 完全レスポンシブ対応",
                  "✓ 高いコンバージョン率",
                ].map((t, i) => (
                  <span
                    key={t}
                    className="px-1.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/20 text-emerald-100 text-[0.5rem] font-medium backdrop-blur opacity-100 translate-y-5 animate-slideInUp h-fit"
                    style={{ animationDelay: `${(i + 1) * 100}ms` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            Cards — 100% original sizing, untouched
           ========================= */}
        <div className="animate-slide grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {/* Before Card */}
          <div className="bg-white/90 backdrop-blur-sm border border-red-200 rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-500/15 transition-all duration-500 cursor-pointer">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-orange-400" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                変革前の課題
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                古いデザイン・使いにくいUI・低いパフォーマンス
              </p>

              <div className="w-full h-48 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl overflow-hidden relative border border-red-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-3/4 bg-gray-900/90 border-2 border-red-400 rounded-xl relative transform -skew-x-1 -rotate-1 shadow-lg">
                    <div className="absolute top-4 left-4 right-4 h-3 bg-white/10 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-extrabold text-red-400">
                      404
                    </div>
                  </div>
                  <div className="absolute w-4 h-4 bg-red-400/70 top-1/4 left-1/4 animate-ping rounded-sm" />
                  <div className="absolute w-3 h-3 bg-orange-400/70 top-1/3 right-1/4 animate-pulse rounded-sm" />
                  <div className="absolute w-2.5 h-2.5 bg-red-500/70 top-2/5 left-1/5 animate-bounce rounded-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* During Card */}
          <div className="bg-white/90 backdrop-blur-sm border border-purple-200 rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/15 transition-all duration-500 cursor-pointer">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                実施した改善
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Next.jsによる再構築・UI/UXの完全リデザイン・SEO最適化
              </p>

              <div className="w-full h-48 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden relative border border-purple-100">
                <div className="absolute inset-0 flex items-center justify-center p-5">
                  <div className="grid grid-cols-3 gap-2 w-full h-full">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="relative overflow-hidden rounded-xl border border-purple-200 bg-gradient-to-br from-purple-200/30 to-pink-200/25 opacity-0 animate-slideInUp"
                        style={{ animationDelay: `${i * 150}ms` }}
                      >
                        <div className="absolute inset-0 opacity-0 animate-softPulse bg-gradient-to-b from-transparent via-purple-300/25 to-transparent" />
                        <div className="p-2">
                          <div className="h-1.5 bg-purple-500/50 rounded mb-1 w-4/5" />
                          <div className="h-1.5 bg-purple-500/30 rounded mb-1 w-3/5" />
                          <div className="h-1.5 bg-purple-500/45 rounded w-5/6" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* After Card */}
          <div className="bg-white/90 backdrop-blur-sm border border-green-200 rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-500/15 transition-all duration-500 cursor-pointer">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-cyan-400" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                変革後の成果
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                モダンで使いやすいプロフェッショナルUI・49倍のトラフィック増加
              </p>

              <div className="w-full h-48 bg-gradient-to-br from-green-50 to-cyan-50 rounded-2xl overflow-hidden relative border border-green-100">
                <div className="absolute inset-0 flex items-end justify-around p-6">
                  {[25, 50, 65, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      className="w-8 md:w-5 lg:w-8 rounded-t-md bg-gradient-to-t from-green-500 to-cyan-400 origin-bottom transform scale-y-0 animate-growBar shadow-sm"
                      style={{
                        height: `${h}%`,
                        animationDelay: `${i * 180}ms`,
                      }}
                    />
                  ))}
                  <div className="absolute w-1.5 h-1.5 bg-green-400 rounded-full top-8 left-10 animate-sparkle" />
                  <div
                    className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full top-12 right-12 animate-sparkle"
                    style={{ animationDelay: "500ms" }}
                  />
                  <div
                    className="absolute w-1.5 h-1.5 bg-green-400 rounded-full bottom-12 left-1/2 animate-sparkle"
                    style={{ animationDelay: "1000ms" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            transform: translateY(18px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideInUp {
          animation: slideInUp 0.7s ease-out forwards;
        }

        @keyframes growBar {
          to {
            transform: scaleY(1);
          }
        }
        .animate-growBar {
          animation: growBar 1.6s ease-out forwards;
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-sparkle {
          animation: sparkle 2s infinite;
        }

        @keyframes badgeBounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        .animate-badgeBounce {
          animation: badgeBounce 2.2s ease-in-out infinite;
        }

        @keyframes arrowMove {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(6px);
          }
        }
        .animate-arrowMove {
          animation: arrowMove 1.4s ease-in-out infinite;
        }

        @keyframes pulseWave {
          0% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0.45;
          }
          70% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0.15;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.25);
            opacity: 0;
          }
        }
        .animate-pulseWave {
          animation: pulseWave 2.2s ease-out infinite;
        }

        @keyframes textGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 0 rgba(99, 102, 241, 0));
          }
          50% {
            filter: drop-shadow(0 10px 18px rgba(99, 102, 241, 0.35));
          }
        }
        .animate-textGlow {
          animation: textGlow 2.4s ease-in-out infinite;
        }

        @keyframes softPulse {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-softPulse {
          animation: softPulse 2.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
