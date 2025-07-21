import SectionTitle from "@/components/common/components/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ProcessSection() {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    staggerDelay: 300,
  });
  const processes = [
    {
      number: "01",
      title: "現状分析",
      description:
        "既存サイトの問題点を徹底的に分析し、改善ポイントを明確化します。",
    },
    {
      number: "02",
      title: "戦略立案",
      description:
        "ビジネス目標に基づいた最適な技術スタックとデザイン方針を決定します。",
    },
    {
      number: "03",
      title: "開発・実装",
      description:
        "Next.jsとモダンな技術を使用し、高品質なWebサイトを構築します。",
    },
    {
      number: "04",
      title: "継続的改善",
      description:
        "データに基づいた改善とSEO対策で、持続的な成長を実現します。",
    },
  ];

  return (
    <section id="process" className="py-20 bg-dark" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-8">
        <SectionTitle title="変革のプロセス" />
        <div className="relative max-w-[800px] mx-auto mt-12">
          <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-secondary block"></div>
          {processes.map((process, index) => (
            <div
              key={index}
              className={`relative p-8 w-full md:w-1/2 animate-[fadeInScale_0.5s_ease_forwards] ${
                index % 2 === 0
                  ? "md:left-0 md:pr-12 md:text-right"
                  : "md:left-1/2 md:pl-12"
              } ${
                index === 0
                  ? "animation-delay-100"
                  : index === 1
                  ? "animation-delay-200"
                  : index === 2
                  ? "animation-delay-300"
                  : "animation-delay-400"
              }`}
            >
              <div
                className={`
                absolute w-5 h-5 bg-primary rounded-full top-8 
                shadow-[0_0_0_4px_#0f172a,0_0_0_8px_rgba(99,102,241,0.2)]
                ${
                  index % 2 !== 0
                    ? "left-[-10px]"
                    : "left-[-10px] md:left-auto md:right-[-10px]"
                }
              `}
              ></div>
              <div className="text-[3rem] font-bold text-primary/30 mb-2">
                {process.number}
              </div>
              <h3 className="text-[1.5rem] mb-2 font-bold">{process.title}</h3>
              <p className="text-gray">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
