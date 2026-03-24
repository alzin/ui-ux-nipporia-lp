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

export default function TechLogoMarquee() {
  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div className="flex w-max animate-marquee will-change-transform motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center gap-12 sm:gap-16 pr-12 sm:pr-16"
          >
            {logos.map((logo) => (
              <div
                key={`${copy}-${logo.name}`}
                className="flex flex-col items-center gap-4"
              >
                <logo.Icon
                  className="h-14 w-14 sm:h-16 sm:w-16 transition-transform duration-300 hover:scale-110"
                />
                <span className="text-sm sm:text-base text-gray-500 font-medium whitespace-nowrap">
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
