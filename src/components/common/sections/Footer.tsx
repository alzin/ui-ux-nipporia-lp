import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#f6effb] via-[#eddcf6] to-[#e7d2f1] text-slate-900 py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-cyan-600 text-transparent bg-clip-text"
            >
              Nipporia
            </Link>

            <p className="mt-4 text-slate-700 leading-relaxed">
              ビジネス成長を生むウェブサイトへ変革します。プロ品質のデザインで、集客を伸ばす。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">クイックリンク</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#services" className="text-slate-700 hover:text-purple-700 transition-colors duration-300">
                  サービス
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-slate-700 hover:text-purple-700 transition-colors duration-300">
                  料金プラン
                </Link>
              </li>
              <li>
                <Link
                  href="/#transformation"
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  変革事例
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-slate-700 hover:text-purple-700 transition-colors duration-300">
                  ブログ
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-slate-700 hover:text-purple-700 transition-colors duration-300">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">法的情報</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  利用規約
                </Link>
              </li>
              <li>
                <Link
                  href="/commerce-disclosure"
                  className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
                >
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {currentYear} Nipporia. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/company/nipporia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-purple-700 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
