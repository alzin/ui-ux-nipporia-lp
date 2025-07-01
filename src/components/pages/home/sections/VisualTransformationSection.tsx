import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

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
        <div className="animate-slide grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 items-center max-w-[1400px] mx-auto mb-16">
          <div className="relative group rounded-[20px] overflow-hidden">
            <div className="absolute top-5 left-5 px-6 py-2 bg-gradient-to-r from-error to-[#dc2626] text-white rounded-full font-bold text-[0.9rem] tracking-[2px] shadow-[0_10px_20px_rgba(239,68,68,0.3)] animate-badgeBounce z-10">
              BEFORE
            </div>
            <div className="relative rounded-[20px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] group-hover:scale-105 group-hover:-translate-y-[10px] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]">
              <Image
                src="/images/old_mac_hadis.gif"
                alt="変革前のウェブサイト"
                width={500}
                height={300}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
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
              <Image
                src="/images/new_mac_haddis.gif"
                alt="変革後のウェブサイト"
                width={500}
                height={300}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
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
        <div className="animate-slide grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-[20px] p-8 text-center relative overflow-hidden group hover:-translate-y-[10px] hover:border-primary hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] transition-all duration-300">
            <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_50%)] group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-transform duration-500 ease-in-out"></div>
            <div className="text-[3rem] mb-4 animate-iconFloat">😔</div>
            <h3 className="text-[1.5rem] mb-2 text-white">変革前の課題</h3>
            <p className="text-gray leading-[1.6]">
              古いデザイン・使いにくいUI・低いパフォーマンス
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[20px] p-8 text-center relative overflow-hidden group hover:-translate-y-[10px] hover:border-primary hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] transition-all duration-300">
            <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_50%)] group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-transform duration-500 ease-in-out"></div>
            <div className="text-[3rem] mb-4 animate-iconFloat animation-delay-1000">
              🚀
            </div>
            <h3 className="text-[1.5rem] mb-2 text-white">実施した改善</h3>
            <p className="text-gray leading-[1.6]">
              Next.jsによる再構築・UI/UXの完全リデザイン・SEO最適化
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[20px] p-8 text-center relative overflow-hidden group hover:-translate-y-[10px] hover:border-primary hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] transition-all duration-300">
            <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_50%)] group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-transform duration-500 ease-in-out"></div>
            <div className="text-[3rem] mb-4 animate-iconFloat animation-delay-2000">
              🎉
            </div>
            <h3 className="text-[1.5rem] mb-2 text-white">変革後の成果</h3>
            <p className="text-gray leading-[1.6]">
              モダンで使いやすいプロフェッショナルUI・49倍のトラフィック増加
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
