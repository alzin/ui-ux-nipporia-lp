import {
  ReactIcon,
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
  ClaudeAI,
  TailwindCSS,
  PostgreSQL,
  MongoDB,
  Firebase,
} from "./techIcons";
import { type ComponentType, type SVGProps } from "react";
import { Gemini } from "./customTechIcons";

export type TTechLogo = {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
};

export const MARQUEE_DURATION = "60s";

export const techLogos: TTechLogo[] = [
  { name: "React",      Icon: ReactIcon },
  { name: "Next.js",    Icon: NextJs },
  { name: "TypeScript", Icon: TypeScript },
  { name: "JavaScript", Icon: JavaScript },
  { name: "Python",     Icon: Python },
  { name: "Java",       Icon: Java },
  { name: "Swift",      Icon: Swift },
  { name: "Kotlin",     Icon: Kotlin },
  { name: "Go",         Icon: Go },
  { name: "Rust",       Icon: RustDark },
  { name: "Vue.js",     Icon: VueJs },
  { name: "Angular",    Icon: Angular },
  { name: "Node.js",    Icon: NodeJs },
  { name: "Django",     Icon: Django },
  { name: "Flutter",    Icon: Flutter },
  { name: "Figma",      Icon: Figma },
  { name: "Docker",     Icon: Docker },
  { name: "Vercel",     Icon: VercelDark },
  { name: "Git",        Icon: Git },
  { name: "PHP",        Icon: PHP },
  { name: "Ruby",       Icon: Ruby },
  { name: "OpenAI",     Icon: OpenAI },
  { name: "Claude",     Icon: ClaudeAI },
  { name: "Gemini",     Icon: Gemini },
  { name: "Tailwind",   Icon: TailwindCSS },
  { name: "PostgreSQL", Icon: PostgreSQL },
  { name: "MongoDB",    Icon: MongoDB },
  { name: "Firebase",   Icon: Firebase },
];
