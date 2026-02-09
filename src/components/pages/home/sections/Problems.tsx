"use client";
import SectionTitle from "@/components/common/components/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import { OldDesignIcon, LowTrafficIcon, HardToMaintainIcon } from "./ProblemIcons";

type Problem = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;     // gradient classes
  iconColor: string; // text color classes
};

export default function ProblemSection() {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    staggerDelay: 150,
  });

  const problems: Problem[] = [
    {
      title: "古いデザイン",
      description: "10年前のようなデザインで、競合他社に比べて見劣りする。モバイル対応もできていない。",
      icon: OldDesignIcon,
      color: "from-red-400 to-orange-400",
      iconColor: "text-red-500",
    },
    {
      title: "低いトラフィック",
      description: "検索エンジンからの流入がほとんどなく、月間訪問者数が数百人程度で停滞している。",
      icon: LowTrafficIcon,
      color: "from-orange-400 to-yellow-400",
      iconColor: "text-orange-500",
    },
    {
      title: "メンテナンスが困難",
      description: "古いコードで構築されており、小さな変更にも多大な時間とコストがかかる。",
      icon: HardToMaintainIcon,
      color: "from-yellow-400 to-green-400",
      iconColor: "text-amber-600",
    },
  ];

  return (
    <section
      id="problems"
      className="py-24 bg-gradient-to-br from-white via-purple-50/50 to-cyan-50/50 relative fade-in overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <SectionTitle title="こんな問題で悩んでいませんか？" />

        <div className="animate-slide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Gradient wash on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                />

                {/* Icon (SVG) */}
                <div className="relative w-16 h-16 mb-6">
                  {/* icon background */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${problem.color} opacity-10 group-hover:opacity-15 transition-opacity duration-300`}
                  />
                  {/* icon itself */}
                  <div
                    className={`relative z-10 h-full w-full flex items-center justify-center ${problem.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-10 h-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${problem.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
