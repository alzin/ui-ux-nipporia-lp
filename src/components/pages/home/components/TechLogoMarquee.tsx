"use client";

import {
  React as ReactIcon,
  NextJs,
  TypeScript,
  JavaScript,
  Python,
  Java,
  Swift,
  Kotlin,
  Go,
  RustDark,
  VueJs,
  Angular,
  NodeJs,
  Django,
  Flutter,
  Figma,
  Docker,
  VercelDark,
  Git,
  PHP,
  Ruby,
  OpenAI,
  TailwindCSS,
  PostgreSQL,
  MongoDB,
  Firebase,
} from "developer-icons";
import { type ComponentType, type SVGProps } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface TechLogo {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
}

const logos: TechLogo[] = [
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextJs },
  { name: "TypeScript", Icon: TypeScript },
  { name: "JavaScript", Icon: JavaScript },
  { name: "Python", Icon: Python },
  { name: "Java", Icon: Java },
  { name: "Swift", Icon: Swift },
  { name: "Kotlin", Icon: Kotlin },
  { name: "Go", Icon: Go },
  { name: "Rust", Icon: RustDark },
  { name: "Vue.js", Icon: VueJs },
  { name: "Angular", Icon: Angular },
  { name: "Node.js", Icon: NodeJs },
  { name: "Django", Icon: Django },
  { name: "Flutter", Icon: Flutter },
  { name: "Figma", Icon: Figma },
  { name: "Docker", Icon: Docker },
  { name: "Vercel", Icon: VercelDark },
  { name: "Git", Icon: Git },
  { name: "PHP", Icon: PHP },
  { name: "Ruby", Icon: Ruby },
  { name: "OpenAI", Icon: OpenAI },
  { name: "Tailwind", Icon: TailwindCSS },
  { name: "PostgreSQL", Icon: PostgreSQL },
  { name: "MongoDB", Icon: MongoDB },
  { name: "Firebase", Icon: Firebase },
];

const MARQUEE_DURATION = "60s";

export default function TechLogoMarquee() {
  const { lang } = useLanguage();

  return (
    <div
      aria-hidden="true"
      className="group w-full overflow-hidden py-2"
      dir="ltr"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        className={`flex w-max animate-marquee will-change-transform lg:group-hover:[animation-play-state:paused] lg:group-focus-within:[animation-play-state:paused] ${
          lang === "ar" ? "[animation-direction:reverse]" : ""
        }`}
        style={{ animationDuration: MARQUEE_DURATION }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center gap-5 pr-5 sm:gap-6 sm:pr-6"
          >
            {logos.map((logo) => (
              <div
                key={`${copy}-${logo.name}`}
                className="flex min-w-[110px] flex-col items-center gap-3 px-4 py-4 transition-transform duration-300 hover:-translate-y-1 sm:min-w-[124px]"
              >
                <logo.Icon
                  className="h-12 w-12 text-gray-800 transition-transform duration-300 hover:scale-105 sm:h-14 sm:w-14"
                />
                <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-gray-700 sm:text-base">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
