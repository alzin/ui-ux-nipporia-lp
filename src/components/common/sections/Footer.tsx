export default function Footer() {
  return (
    <footer className="py-12 bg-dark-lighter text-center border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          <a href="#home" className="text-gray hover:text-primary transition-colors duration-300">ホーム</a>
          <a href="#problems" className="text-gray hover:text-primary transition-colors duration-300">課題</a>
          <a href="#transformation" className="text-gray hover:text-primary transition-colors duration-300">実績</a>
          <a href="#visual-examples" className="text-gray hover:text-primary transition-colors duration-300">変革例</a>
          <a href="#services" className="text-gray hover:text-primary transition-colors duration-300">サービス</a>
          <a href="#process" className="text-gray hover:text-primary transition-colors duration-300">プロセス</a>
          <a href="#contact" className="text-gray hover:text-primary transition-colors duration-300">お問い合わせ</a>
        </div>
        <p className="text-gray text-[0.9rem]">© 2025 WebTransform. All rights reserved.</p>
      </div>
    </footer>
  );
}