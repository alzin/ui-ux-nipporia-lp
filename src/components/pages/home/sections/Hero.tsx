"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const fullTitle = Array.from("ダメなWebサイトをプロフェッショナルに変える");
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const timer = setInterval(() => {
      if (charIndex < fullTitle.length) {
        const nextChar = fullTitle[charIndex];
        setDisplayedText((prev) => prev + nextChar);
        charIndex++;
      } else {
        clearInterval(timer);
      }
    }, 70);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative p-8 mt-[60px] bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.2)_0%,_transparent_50%)]"
    >
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute w-[300px] h-[300px] top-[10%] left-[-5%] rounded-full bg-primary/10 animate-float"></div>
        <div className="absolute w-[200px] h-[200px] top-[60%] right-[-5%] rounded-full bg-primary/10 animate-float delay-5000"></div>
        <div className="absolute w-[150px] h-[150px] bottom-[10%] left-[30%] rounded-full bg-primary/10 animate-float delay-10000"></div>
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><rect width='1' height='1' fill='rgba(255,255,255,0.05)'/></svg>')] bg-[length:100px_100px] animate-[gridMove_20s_linear_infinite] pointer-events-none"></div>
      <div className="max-w-[1200px] text-center z-10">
        <h1 className="text-[clamp(2rem,5vw,4rem)] mb-6 bg-gradient-to-r from-white to-gray text-transparent bg-clip-text animate-[fadeInUp_1s_ease,textShine_3s_ease_infinite] font-bold">
          {displayedText}
        </h1>
        <p className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-gray mb-8 animate-fadeInUp animation-delay-200">
          デザイン刷新と最新技術でトラフィックを劇的に改善します。
        </p>
        <div className="flex gap-6 justify-center flex-wrap animate-fadeInUp animation-delay-400">
          <a
            href="#contact"
            className="px-10 py-4 rounded-full text-white bg-gradient-to-r from-primary to-primary-dark shadow-[0_10px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.4)] hover:-translate-y-[2px] transition-all duration-300 animate-ctaPulse relative overflow-hidden group cta-primary w-full md:w-fit"
          >
            <span className="relative z-10">無料相談を申し込む</span>
            <span className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-white/30 transition-all duration-600 ease-in-out transform -translate-x-1/2 -translate-y-1/2 group-hover:w-[300px] group-hover:h-[300px]"></span>
          </a>
          <a
            href="#transformation"
            className="px-10 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 relative overflow-hidden group cta-secondary w-full md:w-fit"
          >
            <span className="relative z-10">変革事例を見る</span>
            <span className="absolute top-0 left-0 w-0 h-full bg-primary transition-all duration-300 ease-in-out group-hover:w-full z-[-1]"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
