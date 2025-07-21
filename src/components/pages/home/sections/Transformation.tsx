"use client";
import SectionTitle from "@/components/common/components/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function TransformationSection() {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    staggerDelay: 200,
  });

  return (
    <section
      id="transformation"
      className="py-20 bg-dark fade-in"
      ref={sectionRef}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <SectionTitle title="実際の変革事例" />

        <div className="animate-slide grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="transformation-card bg-dark-lighter rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-error/20 text-error text-center py-6 font-bold text-[1.2rem]">
              変革前
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center py-4 border-b border-white/10">
                <span className="text-gray">月間訪問者数</span>
                <span className="text-[1.2rem] font-bold text-error">
                  320人
                </span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-white/10">
                <span className="text-gray">直帰率</span>
                <span className="text-[1.2rem] font-bold text-error">85%</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-white/10">
                <span className="text-gray">平均滞在時間</span>
                <span className="text-[1.2rem] font-bold text-error">32秒</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-white/10">
                <span className="text-gray">モバイル対応</span>
                <span className="text-[1.2rem] font-bold text-error">×</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="text-gray">ページ読み込み速度</span>
                <span className="text-[1.2rem] font-bold text-error">
                  8.2秒
                </span>
              </div>
            </div>
          </div>
          <div className="transformation-card bg-dark-lighter rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-success/20 text-success text-center py-6 font-bold text-[1.2rem]">
              変革後
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center py-4 border-b border-white/10">
                <span className="text-gray">月間訪問者数</span>
                <span className="text-[1.2rem] font-bold text-success">
                  15,800人
                </span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-white/10">
                <span className="text-gray">直帰率</span>
                <span className="text-[1.2rem] font-bold text-success">
                  35%
                </span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-white/10">
                <span className="text-gray">平均滞在時間</span>
                <span className="text-[1.2rem] font-bold text-success">
                  3分45秒
                </span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-white/10">
                <span className="text-gray">モバイル対応</span>
                <span className="text-[1.2rem] font-bold text-success">✓</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="text-gray">ページ読み込み速度</span>
                <span className="text-[1.2rem] font-bold text-success">
                  1.8秒
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
