export type TTeamMember = {
  id: number;
  fullName: string;
  position: string;
  imgSrc: string;
  bio: string;
};

export const teamMembers: TTeamMember[] = [
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
    imgSrc: "/images/team-members/hakam.png",
    bio: "美しく直感的なUIを追求し、ユーザー体験を最大化するフロントエンドのスペシャリスト。\n「見た目だけではなく、動きや使いやすさまでこだわるのがプロの仕事。」\nReactやNext.jsなどの最新技術を活用し、成果につながるデザインを実装します。",
  },
];
