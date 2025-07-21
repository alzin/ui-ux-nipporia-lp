"use client";
import SectionTitle from "@/components/common/components/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ProblemSection() {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    staggerDelay: 150,
  });

  const problems = [
    {
      title: "古いデザイン",
      description: "10年前のようなデザインで、競合他社に比べて見劣りする。モバイル対応もできていない。",
      icon: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="15" y="20" width="50" height="40" rx="4" stroke="currentColor" strokeWidth="2"/>
          <rect x="20" y="25" width="40" height="3" fill="currentColor" opacity="0.6"/>
          <rect x="20" y="32" width="25" height="2" fill="currentColor" opacity="0.4"/>
          <rect x="20" y="37" width="30" height="2" fill="currentColor" opacity="0.4"/>
          <rect x="20" y="42" width="20" height="2" fill="currentColor" opacity="0.4"/>
          <circle cx="55" cy="50" r="2" fill="#ff6b6b"/>
          <path d="M45 50L50 55L60 45" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "低いトラフィック",
      description: "検索エンジンからの流入がほとんどなく、月間訪問者数が数百人程度で停滞している。",
      icon: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M15 55L25 45L35 50L45 35L55 40L65 25" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="15" cy="55" r="3" fill="#ff6b6b"/>
          <circle cx="25" cy="45" r="3" fill="#ff6b6b"/>
          <circle cx="35" cy="50" r="3" fill="#ff6b6b"/>
          <circle cx="45" cy="35" r="3" fill="#ff6b6b"/>
          <circle cx="55" cy="40" r="3" fill="#ff6b6b"/>
          <circle cx="65" cy="25" r="3" fill="#ff6b6b"/>
          <path d="M65 25L70 30L70 20L60 20L65 25Z" fill="#ff6b6b" opacity="0.6"/>
        </svg>
      )
    },
    {
      title: "メンテナンスが困難",
      description: "古いコードで構築されており、小さな変更にも多大な時間とコストがかかる。",
      icon: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M40 15V25M40 55V65M15 40H25M55 40H65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M32 40L38 46L48 36" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="25" cy="25" r="3" fill="currentColor" opacity="0.4"/>
          <circle cx="55" cy="25" r="3" fill="currentColor" opacity="0.4"/>
          <circle cx="25" cy="55" r="3" fill="currentColor" opacity="0.4"/>
          <circle cx="55" cy="55" r="3" fill="currentColor" opacity="0.4"/>
        </svg>
      )
    }
  ];

  return (
    <section
      id="problems"
      className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative fade-in overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated background shapes */}
      <div className="absolute top-1/10 left-1/20 w-80 h-80 bg-gradient-radial from-purple-500/3 to-transparent rounded-full animate-float opacity-30" />
      <div className="absolute top-1/2 right-1/10 w-96 h-96 bg-gradient-radial from-blue-500/3 to-transparent rounded-full animate-float-delayed opacity-30" />
      <div className="absolute bottom-1/10 left-1/3 w-64 h-64 bg-gradient-radial from-purple-500/3 to-transparent rounded-full animate-float-slow opacity-30" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        {/* Title with animation */}
        <SectionTitle title="こんな問題で悩んでいませんか？" />

        {/* Problem cards grid */}
        <div className="animate-slide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="cursor-pointer group relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-12 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              {/* Animated background effect */}
              <div className="absolute -top-full -left-full w-[300%] h-[300%] bg-gradient-radial from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Icon wrapper */}
              <div className="relative w-14 md:w-20 h-14 md:h-20 mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl rotate-45 group-hover:rotate-90 group-hover:scale-110 transition-all duration-500" />
                <div className="relative z-10 w-full h-full text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  {problem.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-5 group-hover:text-purple-100 transition-colors duration-300">
                  {problem.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
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
          0%, 100% {
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
          0%, 100% {
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