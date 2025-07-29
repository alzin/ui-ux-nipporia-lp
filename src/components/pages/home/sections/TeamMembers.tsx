import SectionTitle from "@/components/common/components/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

const TeamMembers = () => {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    staggerDelay: 230,
  });

  const teamMembers = [
    // {
    //   id: 1,
    //   fullName: "Hiro",
    //   position: "代表取締役 CEO",
    //   imgSrc: "/images/team-members/hiro.webp",
    //   bio: "クライアントのニーズを丁寧にヒアリングし、ビジネスゴールに最適な提案を行うこと。プロジェクトの完成ではなく、その後の関係こそが本当の価値であると信じています。\n「Webサイトは単なる技術ではなく、信頼の形。」\n そう語る彼は、長期的なパートナーシップを何よりも大切にし、コミュニケーションを通じてクライアントと共に成長していくことを目指しています。",
    // },
    // {
    //   id: 2,
    //   fullName: "Shige",
    //   position: "CMO",
    //   imgSrc: "/images/team-members/shige.webp",
    //   bio: "成果につながるトラフィックを生むマーケティングの専門家。SEO・広告・コンテンツ戦略を通じて、クライアントのビジネス成長を加速させます。\n「心に響き、行動を生むマーケティング」を信条に、数字と感性の両面から成果を追求しています。",
    // },
    {
      id: 1,
      fullName: "Maher",
      position: "CEO",
      imgSrc: "/images/team-members/maher.jpeg",
      bio: "最新技術を駆使して、信頼性と拡張性のあるWebシステムを設計・構築。全ての開発は、クライアントのビジネス価値を最大化するために。\n「技術は目的ではなく、成果を支える手段。」その哲学でプロジェクトの根幹を支えています。",
    },
    {
      id: 2,
      fullName: "Ghaith",
      position: "CTO",
      imgSrc: "/images/team-members/mohammed.jpeg",
      bio: "日本と中東をつなぎ、10年以上にわたりWebプロジェクトを成功に導く。古いサイトを49倍のトラフィックへ改善した実績は業界でも高く評価されています\n「美しさだけでなく、成果につながるデザインを。」が信念です。",
    },
    {
      id: 3,
      fullName: "Rezk",
      position: "Full Stack Developer",
      imgSrc: "/images/team-members/rezk.jpg",
      bio: "フロントエンドからバックエンド、インフラまで幅広い技術を駆使し、柔軟かつスピーディな開発を実現。\n「使いやすさと保守性のバランスこそが、良い開発の鍵。」\n細部まで丁寧に作り込む姿勢で、クライアントの課題をテクノロジーで解決します。",
    },
    {
      id: 4,
      fullName: "Hakam aldeen",
      position: "Frontend Developer",
      imgSrc: "/images/team-members/Hakam.png",
      bio: "美しく直感的なUIを追求し、ユーザー体験を最大化するフロントエンドのスペシャリスト。\n「見た目だけではなく、動きや使いやすさまでこだわるのがプロの仕事。」\nReactやNext.jsなどの最新技術を活用し、成果につながるデザインを実装します。",
    },
  ];

  return (
    <section
      id="team-members"
      className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="animate-slide absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_50%)] animate-[rotate_30s_linear_infinite]"></div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle title="チームメンバー" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative flex flex-col overflow-hidden bg-white/5 border border-white/10 rounded-2xl group hover:-translate-y-2 hover:border-primary hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-[300px]">
                <Image
                  src={member.imgSrc}
                  alt={`image for ${member.fullName}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Static Name & Position */}
              <div className="relative z-10 flex flex-col p-4">
                <h3 className="text-lg font-semibold text-white">
                  {member.fullName}
                </h3>
                <p className="text-primary">{member.position}</p>
              </div>

              {/* Hover Overlay covering everything */}
              <div className="absolute inset-0 z-20 flex flex-col justify-between bg-[url('/images/team-members/bg-team-member.png')] bg-cover bg-center p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {member.fullName}
                  </h3>
                  <p className="text-primary">{member.position}</p>
                  <div className="mt-8 text-sm text-slate-300">
                    {member.bio.split("\n").map((segment, index) => (
                      <p key={index} className="mb-3">
                        {segment}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
