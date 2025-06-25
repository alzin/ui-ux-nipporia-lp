'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ProblemSection() {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    staggerDelay: 150
  });

  const problems = [
    { icon: '😞', title: '古いデザイン', description: '10年前のようなデザインで、競合他社に比べて見劣りする。モバイル対応もできていない。' },
    { icon: '📉', title: '低いトラフィック', description: '検索エンジンからの流入がほとんどなく、月間訪問者数が数百人程度で停滞している。' },
    { icon: '🔧', title: 'メンテナンスが困難', description: '古いコードで構築されており、小さな変更にも多大な時間とコストがかかる。' },
  ];

  return (
    <section 
      id="problems" 
      className="py-20 bg-dark-lighter relative fade-in"
      ref={sectionRef}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Title with animation */}
        <h2 className="animate-slide text-[clamp(2rem,4vw,3rem)] text-center font-bold mb-16 relative animate-titleGlow after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-1 after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded after:animate-lineExpand opacity-0 translate-y-8 transition-all duration-700 ease-out">
          こんな問題で悩んでいませんか？
        </h2>
        
        {/* Problem cards grid */}
        <div className="animate-slide grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card bg-white/[0.02] border border-white/10 rounded-[20px] p-8 relative overflow-hidden group hover:-translate-y-[5px] hover:border-error/30 hover:shadow-[0_20px_40px_rgba(239,68,68,0.2)] transition-all duration-[0.8s] ease-linear">
              {/* Radial gradient background overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1)_0%,transparent_70%)]"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`text-[3rem] mb-4 inline-block animate-iconShake ${index === 0 ? 'animation-delay-0' : index === 1 ? 'animation-delay-500' : 'animation-delay-1000'}`}>{problem.icon}</div>
                <h3 className="text-[1.5rem] mb-4 text-error font-semibold">{problem.title}</h3>
                <p className="text-gray leading-[1.8]">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}