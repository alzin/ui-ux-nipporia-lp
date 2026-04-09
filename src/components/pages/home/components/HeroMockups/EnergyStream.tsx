import { motion } from "framer-motion";

export default function EnergyStream({ isRTL }: { isRTL: boolean }) {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none z-0"
      viewBox="0 0 1000 700"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="glowGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <g transform={isRTL ? "scale(-1, 1) translate(-1000, 0)" : undefined}>
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 2.2, delay: 0.9, ease: "easeInOut" }}
          d="M630 395 C 560 405, 490 430, 400 470 S 210 555, 120 500"
          fill="none"
          stroke="url(#glowGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.circle
          r="6"
          fill="#67e8f9"
          animate={{
            cx: [630, 545, 455, 360, 270, 190, 120],
            cy: [395, 403, 428, 462, 505, 536, 500],
            opacity: [0, 1, 1, 1, 1, 1, 0],
          }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </g>
    </svg>
  );
}
