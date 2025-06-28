'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur-[20px] border-b border-white/10 z-[1000] transition-all duration-300 ease-in-out">
      <div className="max-w-[1200px] mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-[1.5rem] font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text bg-[length:200%_200%] animate-gradientShift hover:scale-110 transition-transform duration-300 ease-in-out">
          WebTransform
        </div>
        <ul className={`hidden md:flex gap-8 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li><Link href="/#home" className="text-white relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-width after:duration-300 hover:after:w-full">ホーム</Link></li>
          <li><Link href="/#problems" className="text-white relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-width after:duration-300 hover:after:w-full">課題</Link></li>
          <li><Link href="/#transformation" className="text-white relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-width after:duration-300 hover:after:w-full">実績</Link></li>
          <li><Link href="/#visual-examples" className="text-white relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-width after:duration-300 hover:after:w-full">変革例</Link></li>
          <li><Link href="/#services" className="text-white relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-width after:duration-300 hover:after:w-full">サービス</Link></li>
          <li><Link href="/#process" className="text-white relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-width after:duration-300 hover:after:w-full">プロセス</Link></li>
          <li><Link href="/#contact" className="text-white relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-width after:duration-300 hover:after:w-full">お問い合わせ</Link></li>
          <li><Link href="/blogs" className="text-white relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-width after:duration-300 hover:after:w-full">ブログ</Link></li>
        </ul>
        <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="w-[25px] h-[3px] bg-white transition-all duration-300 ease-in-out"></span>
          <span className="w-[25px] h-[3px] bg-white transition-all duration-300 ease-in-out"></span>
          <span className="w-[25px] h-[3px] bg-white transition-all duration-300 ease-in-out"></span>
        </div>
      </div>
      {isMenuOpen && (
        <ul className="md:hidden bg-dark/95 backdrop-blur-[20px] p-4">
          <li><Link href="/#home" className="block py-2 text-white hover:text-primary transition-colors duration-300">ホーム</Link></li>
          <li><Link href="/#problems" className="block py-2 text-white hover:text-primary transition-colors duration-300">課題</Link></li>
          <li><Link href="/#transformation" className="block py-2 text-white hover:text-primary transition-colors duration-300">実績</Link></li>
          <li><Link href="/#visual-examples" className="block py-2 text-white hover:text-primary transition-colors duration-300">変革例</Link></li>
          <li><Link href="/#services" className="block py-2 text-white hover:text-primary transition-colors duration-300">サービス</Link></li>
          <li><Link href="/#process" className="block py-2 text-white hover:text-primary transition-colors duration-300">プロセス</Link></li>
          <li><Link href="/#contact" className="block py-2 text-white hover:text-primary transition-colors duration-300">お問い合わせ</Link></li>
        </ul>
      )}
    </nav>
  );
}