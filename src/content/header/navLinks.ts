export interface NavLink {
  href: string;
  title: string;
}

const navLinks: NavLink[] = [
  // { href: "/#home", title: "ホーム" },
  { href: "/#problems", title: "課題" },
  { href: "/#transformation", title: "実績" },
  { href: "/#visual-examples", title: "制作実績" },
  { href: "/#services", title: "サービス" },
  // { href: "/#team-members", title: "チーム" },
  { href: "/#pricing", title: "料金プラン" },
  { href: "/#contact", title: "お問い合わせ" },
  { href: "/blogs", title: "ブログ" },
];

export default navLinks;