import { Noto_Sans_JP, Noto_Sans_Arabic, JetBrains_Mono } from "next/font/google";

export const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
  preload: false,
});

export const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-arabic",
  preload: false,
});

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  preload: false,
});

export function resolveFontConfig(rtl: boolean): {
  fontVariable: string;
  fontFamily: string;
} {
  return rtl
    ? {
      fontVariable: notoSansArabic.variable,
      fontFamily: 'var(--font-noto-sans-arabic), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    }
    : {
      fontVariable: notoSansJP.variable,
      fontFamily: 'var(--font-noto-sans-jp), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    };
}
