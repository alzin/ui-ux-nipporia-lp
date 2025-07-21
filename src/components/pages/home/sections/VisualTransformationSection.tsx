import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function VisualTransformationSection() {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    staggerDelay: 230,
  });

  return (
    <section
      id="visual-examples"
      className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="animate-slide absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_50%)] animate-[rotate_30s_linear_infinite]"></div>
      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <h2 className="animate-slide text-[clamp(2rem,4vw,3rem)] text-center font-bold mb-[-1rem] relative animate-titleGlow after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-1 after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded after:animate-[lineExpand_2s_ease_infinite]">
          ビジュアル変革の実例
        </h2>
        <p className="animate-slide text-center text-[1.3rem] text-gray my-12">
          実際のクライアント様のWebサイト変革をご覧ください
        </p>

        {/* Video Section */}
        <div className="animate-slide grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 items-center max-w-[1400px] mx-auto mb-16">
          <div className="relative group rounded-[20px] overflow-hidden">
            <div className="absolute top-5 left-5 px-6 py-2 bg-gradient-to-r from-error to-[#dc2626] text-white rounded-full font-bold text-[0.9rem] tracking-[2px] shadow-[0_10px_20px_rgba(239,68,68,0.3)] animate-badgeBounce z-10">
              BEFORE
            </div>
            <div className="relative rounded-[20px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] group-hover:scale-105 group-hover:-translate-y-[10px] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                onError={(e) => console.error("Video error:", e)}
                style={{ maxWidth: "100%", height: "auto" }}
              >
                <source src="/videos/old_mac_haddis.webm" type="video/webm" />
                <source src="/videos/old_mac_haddis.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent py-8 md:py-16 px-8 flex flex-wrap gap-3 justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <span className="px-4 py-2 rounded-full bg-error/20 border border-error/30 text-[#fca5a5] text-[0.9rem] font-medium backdrop-blur-[10px] opacity-1 translate-y-5 animate-[slideInUp_0.5s_ease_forwards] animation-delay-100 h-fit">
                  ❌ 時代遅れのデザイン
                </span>
                <span className="px-4 py-2 rounded-full bg-error/20 border border-error/30 text-[#fca5a5] text-[0.9rem] font-medium backdrop-blur-[10px] opacity-1 translate-y-5 animate-[slideInUp_0.5s_ease_forwards] animation-delay-200 h-fit">
                  ❌ 情報が見つけにくい
                </span>
                <span className="px-4 py-2 rounded-full bg-error/20 border border-error/30 text-[#fca5a5] text-[0.9rem] font-medium backdrop-blur-[10px] opacity-1 translate-y-5 animate-[slideInUp_0.5s_ease_forwards] animation-delay-300 h-fit">
                  ❌ モバイル非対応
                </span>
                <span className="px-4 py-2 rounded-full bg-error/20 border border-error/30 text-[#fca5a5] text-[0.9rem] font-medium backdrop-blur-[10px] opacity-1 translate-y-5 animate-[slideInUp_0.5s_ease_forwards] animation-delay-400 h-fit">
                  ❌ 低いコンバージョン率
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative text-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-[radial-gradient(circle,rgba(99,102,241,0.3)_0%,transparent_70%)] rounded-full animate-pulseWave"></div>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                className="relative z-2 animate-arrowMove"
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
              <p className="mt-2 font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-[1.1rem] animate-textGlow">
                Transform!
              </p>
            </div>
          </div>
          <div className="relative group rounded-[20px] overflow-hidden">
            <div className="absolute top-5 left-5 px-6 py-2 bg-gradient-to-r from-success to-[#059669] text-white rounded-full font-bold text-[0.9rem] tracking-[2px] shadow-[0_10px_20px_rgba(16,185,129,0.3)] animate-badgeBounce z-10">
              AFTER
            </div>
            <div className="relative rounded-[20px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] group-hover:scale-105 group-hover:-translate-y-[10px] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                onError={(e) => console.error("Video error:", e)}
                style={{ maxWidth: "100%", height: "auto" }}
              >
                <source src="/videos/new_mac_haddis.webm" type="video/webm" />
                <source src="/videos/new_mac_haddis.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent py-8 md:py-16 px-8 flex flex-wrap gap-3 justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <span className="px-4 py-2 rounded-full bg-success/20 border border-success/30 text-[#86efac] text-[0.9rem] font-medium backdrop-blur-[10px] opacity-1 translate-y-5 animate-[slideInUp_0.5s_ease_forwards] animation-delay-100 h-fit">
                  ✓ 現代的で魅力的
                </span>
                <span className="px-4 py-2 rounded-full bg-success/20 border border-success/30 text-[#86efac] text-[0.9rem] font-medium backdrop-blur-[10px] opacity-1 translate-y-5 animate-[slideInUp_0.5s_ease_forwards] animation-delay-200 h-fit">
                  ✓ 直感的なナビゲーション
                </span>
                <span className="px-4 py-2 rounded-full bg-success/20 border border-success/30 text-[#86efac] text-[0.9rem] font-medium backdrop-blur-[10px] opacity-1 translate-y-5 animate-[slideInUp_0.5s_ease_forwards] animation-delay-300 h-fit">
                  ✓ 完全レスポンシブ対応
                </span>
                <span className="px-4 py-2 rounded-full bg-success/20 border border-success/30 text-[#86efac] text-[0.9rem] font-medium backdrop-blur-[10px] opacity-1 translate-y-5 animate-[slideInUp_0.5s_ease_forwards] animation-delay-400 h-fit">
                  ✓ 高いコンバージョン率
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Cards Section */}
        <div className="animate-slide grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {/* Before Card */}
          <div className="bg-gradient-to-br from-white/5 to-white/2 border border-red-500/20 rounded-3xl px-8 py-6 relative overflow-hidden group hover:-translate-y-3 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 ease-out cursor-pointer">
            {/* Animated background effect */}
            <div className="absolute -top-full -left-full w-[300%] h-[300%] bg-gradient-radial from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-white">
                変革前の課題
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                古いデザイン・使いにくいUI・低いパフォーマンス
              </p>

              {/* Creative Illustration - Broken Website */}
              <div className="w-full h-48 bg-white/5 rounded-2xl overflow-hidden relative mt-6 border border-red-500/10">
                <div className="broken-site absolute inset-0 flex items-center justify-center">
                  <div className="broken-window w-4/5 h-3/4 bg-gray-900 border-2 border-red-500 rounded-lg relative transform -skew-x-1 -rotate-1">
                    <div className="error-404 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-red-500">
                      404
                    </div>
                  </div>
                  <div className="broken-pieces absolute w-4 h-4 bg-red-500 opacity-60 top-1/4 left-1/4 animate-ping" />
                  <div className="broken-pieces absolute w-3 h-3 bg-red-400 opacity-60 top-1/3 right-1/4 animate-pulse" />
                  <div className="broken-pieces absolute w-2 h-2 bg-red-600 opacity-60 top-2/5 left-1/5 animate-bounce" />
                </div>
              </div>
            </div>
          </div>

          {/* During Card */}
          <div className="bg-gradient-to-br from-white/5 to-white/2 border border-primary/20 rounded-3xl px-8 py-6 relative overflow-hidden group hover:-translate-y-3 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 ease-out cursor-pointer">
            {/* Animated background effect */}
            <div className="absolute -top-full -left-full w-[300%] h-[300%] bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-white">
                実施した改善
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Next.jsによる再構築・UI/UXの完全リデザイン・SEO最適化
              </p>

              {/* Creative Illustration - Building Process */}
              <div className="w-full h-48 bg-white/5 rounded-2xl overflow-hidden relative mt-6 border border-primary/10">
                <div className="building-process absolute inset-0 flex items-center justify-center p-4">
                  <div className="code-blocks grid grid-cols-3 gap-2 w-full h-full">
                    <div className="code-block bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-lg p-2 opacity-0 animate-slideInUp relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-0 animate-pulse" />
                      <div className="code-line h-1 bg-primary/60 rounded mb-1 w-4/5" />
                      <div className="code-line h-1 bg-primary/40 rounded mb-1 w-3/5" />
                      <div className="code-line h-1 bg-primary/60 rounded w-5/6" />
                    </div>
                    <div className="code-block bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-lg p-2 opacity-0 animate-slideInUp animation-delay-200 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-0 animate-pulse" />
                      <div className="code-line h-1 bg-primary/60 rounded mb-1 w-4/5" />
                      <div className="code-line h-1 bg-primary/40 rounded mb-1 w-3/5" />
                      <div className="code-line h-1 bg-primary/60 rounded w-5/6" />
                    </div>
                    <div className="code-block bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-lg p-2 opacity-0 animate-slideInUp animation-delay-400 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-0 animate-pulse" />
                      <div className="code-line h-1 bg-primary/60 rounded mb-1 w-4/5" />
                      <div className="code-line h-1 bg-primary/40 rounded mb-1 w-3/5" />
                      <div className="code-line h-1 bg-primary/60 rounded w-5/6" />
                    </div>
                    <div className="code-block bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-lg p-2 opacity-0 animate-slideInUp animation-delay-600 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-0 animate-pulse" />
                      <div className="code-line h-1 bg-primary/60 rounded mb-1 w-4/5" />
                      <div className="code-line h-1 bg-primary/40 rounded mb-1 w-3/5" />
                      <div className="code-line h-1 bg-primary/60 rounded w-5/6" />
                    </div>
                    <div className="code-block bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-lg p-2 opacity-0 animate-slideInUp animation-delay-800 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-0 animate-pulse" />
                      <div className="code-line h-1 bg-primary/60 rounded mb-1 w-4/5" />
                      <div className="code-line h-1 bg-primary/40 rounded mb-1 w-3/5" />
                      <div className="code-line h-1 bg-primary/60 rounded w-5/6" />
                    </div>
                    <div className="code-block bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-lg p-2 opacity-0 animate-slideInUp animation-delay-1000 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-0 animate-pulse" />
                      <div className="code-line h-1 bg-primary/60 rounded mb-1 w-4/5" />
                      <div className="code-line h-1 bg-primary/40 rounded mb-1 w-3/5" />
                      <div className="code-line h-1 bg-primary/60 rounded w-5/6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* After Card */}
          <div className="bg-gradient-to-br from-white/5 to-white/2 border border-green-500/20 rounded-3xl px-8 py-6 relative overflow-hidden group hover:-translate-y-3 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 ease-out cursor-pointer">
            {/* Animated background effect */}
            <div className="absolute -top-full -left-full w-[300%] h-[300%] bg-gradient-radial from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-white">
                変革後の成果
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                モダンで使いやすいプロフェッショナルUI・49倍のトラフィック増加
              </p>

              {/* Creative Illustration - Success Metrics */}
              <div className="w-full h-48 bg-white/5 rounded-2xl overflow-hidden relative mt-6 border border-green-500/10">
                <div className="success-metrics absolute inset-0 flex items-center justify-center p-6">
                  <div className="metric-chart w-full h-full flex items-end justify-around relative">
                    <div className="metric-bar w-9 md:w-5 lg:w-9 bg-gradient-to-t from-green-500 to-cyan-400 rounded-t-sm h-1/4 transform scale-y-0 animate-growBar origin-bottom" />
                    <div className="metric-bar w-9 md:w-5 lg:w-9 bg-gradient-to-t from-green-500 to-cyan-400 rounded-t-sm h-2/4 transform scale-y-0 animate-growBar origin-bottom animation-delay-200" />
                    <div className="metric-bar w-9 md:w-5 lg:w-9 bg-gradient-to-t from-green-500 to-cyan-400 rounded-t-sm h-3/5 transform scale-y-0 animate-growBar origin-bottom animation-delay-400" />
                    <div className="metric-bar w-9 md:w-5 lg:w-9 bg-gradient-to-t from-green-500 to-cyan-400 rounded-t-sm h-5/6 transform scale-y-0 animate-growBar origin-bottom animation-delay-600" />
                    <div className="metric-bar w-9 md:w-5 lg:w-9 bg-gradient-to-t from-green-500 to-cyan-400 rounded-t-sm h-full transform scale-y-0 animate-growBar origin-bottom animation-delay-800" />

                    {/* Sparkles */}
                    <div className="sparkles absolute w-1 h-1 bg-green-400 rounded-full top-1/4 left-1/4 animate-sparkle" />
                    <div className="sparkles absolute w-1 h-1 bg-cyan-400 rounded-full top-1/3 right-1/4 animate-sparkle animation-delay-500" />
                    <div className="sparkles absolute w-1 h-1 bg-green-400 rounded-full bottom-1/3 left-2/5 animate-sparkle animation-delay-1000" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes growBar {
          to {
            transform: scaleY(1);
          }
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

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-growBar {
          animation: growBar 2s ease-out forwards;
        }

        .animate-sparkle {
          animation: sparkle 2s infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(var(--tw-gradient-stops));
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
