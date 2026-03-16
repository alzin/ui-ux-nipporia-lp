"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiSwift,
  SiKotlin,
  SiGo,
  SiRust,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiDjango,
  SiFlutter,
  SiFigma,
  SiDocker,
  SiVercel,
  SiGit,
  SiPhp,
  SiRuby,
  SiOpenai,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { type IconType } from "react-icons";

interface TechLogo {
  name: string;
  Icon: IconType;
  color: string;
}

const logos: TechLogo[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Java", Icon: FaJava, color: "#007396" },
  { name: "Swift", Icon: SiSwift, color: "#F05138" },
  { name: "Kotlin", Icon: SiKotlin, color: "#7F52FF" },
  { name: "Go", Icon: SiGo, color: "#00ADD8" },
  { name: "Rust", Icon: SiRust, color: "#000000" },
  { name: "Vue.js", Icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Django", Icon: SiDjango, color: "#092E20" },
  { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Vercel", Icon: SiVercel, color: "#000000" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "Ruby", Icon: SiRuby, color: "#CC342D" },
  { name: "OpenAI", Icon: SiOpenai, color: "#10A37F" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
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
      <div className="flex animate-marquee will-change-transform motion-reduce:animate-none">
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
                  style={{ color: logo.color }} 
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
