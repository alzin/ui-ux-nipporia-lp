"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Check, Mic, Camera, Phone, Send, Star, Video, ThumbsUp, Code2, Rocket } from "lucide-react";
import { useWorkflowAnimation, STEP_DURATION, type WorkflowStep } from "./hooks/useWorkflowAnimation";


// ─── Animation Variants ─────────────────────────────────
const sceneVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const itemFade = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const itemPop = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.35, type: "spring" as const } },
};

const itemSlideRight = {
  initial: { opacity: 0, x: -14 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

const itemSlideLeft = {
  initial: { opacity: 0, x: 14 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

// ─── Main Component ─────────────────────────────────────
export default function HeroMockups() {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";
  const { currentStep, steps, step } = useWorkflowAnimation();
  const StepIcon = step.icon;

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center perspective-[2000px]">
      {/* ─── Background Glow ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={`absolute inset-0 bg-gradient-to-r ${step.gradient} blur-[120px] rounded-full`}
          />
        </AnimatePresence>
      </div>

      {/* ─── Step Label + Progress ─── */}
      <div className="absolute top-0 sm:top-4 left-1/2 -translate-x-1/2 z-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-2.5 bg-white/85 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg border border-white/60">
              <div
                className={`w-7 h-7 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-sm`}
              >
                <StepIcon size={14} className="text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                {currentStep + 1}/{steps.length} &mdash; {step.label}
              </span>
            </div>
            <div className="w-full h-0.5 mt-1.5 bg-gray-200/50 rounded-full overflow-hidden">
              <motion.div
                key={step.id + "-bar"}
                className={`h-full bg-gradient-to-r ${step.gradient} rounded-full`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: STEP_DURATION / 1000, ease: "linear" }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─── Laptop Mockup ─── */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 10, rotateY: isRTL ? -10 : 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 5, rotateY: isRTL ? -5 : 5 }}
        transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
        className="absolute z-10 w-[95%] max-w-[600px] aspect-[16/10] bg-[#eef2f6] rounded-t-2xl rounded-b-md shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] border-[8px] border-[#d8dee4] overflow-visible transform-style-3d"
      >
        <div className="w-full h-full bg-[#111827] rounded-md overflow-hidden relative border-4 border-[#1f2937]">
          <AnimatePresence mode="wait">
            <LaptopScene key={step.id} step={step} />
          </AnimatePresence>
        </div>

        {/* Keyboard base */}
        <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 w-[114%] h-8 sm:h-10 bg-gradient-to-b from-[#e5e7eb] to-[#9ca3af] rounded-b-xl shadow-2xl transform perspective-[800px] rotateX-[75deg] transform-origin-top flex justify-center">
          <div className="w-1/4 h-1/2 bg-black/5 rounded mt-1 shadow-inner" />
          <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black/20 rounded-b-xl" />
        </div>
      </motion.div>

      {/* ─── Phone Mockup ─── */}
      <motion.div
        initial={{ opacity: 0, x: isRTL ? 50 : -50, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
        className={`absolute z-20 w-[140px] sm:w-[180px] aspect-[9/19] bg-[#111827] rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-[6px] border-[#374151] p-1
          ${isRTL ? "right-[5%] sm:right-0" : "left-[5%] sm:left-0"}
          bottom-[5%] sm:bottom-[10%]`}
        style={{ rotateY: isRTL ? "-15deg" : "15deg", rotateZ: isRTL ? "5deg" : "-5deg" }}
      >
        <div className="w-full h-full bg-slate-900 rounded-[1.5rem] overflow-hidden relative border border-white/10">
          <AnimatePresence mode="wait">
            <PhoneScene key={step.id} step={step} />
          </AnimatePresence>
        </div>
        <div className="absolute top-0 right-0 w-[200%] h-full bg-gradient-to-b from-white/10 to-transparent transform rotate-45 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      </motion.div>

      {/* ─── Flying Notification (Primary) ─── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id + "-notif"}
          initial={{ opacity: 0, x: isRTL ? -40 : 40, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -8, 0] }}
          exit={{ opacity: 0, x: isRTL ? -20 : 20, scale: 0.95 }}
          transition={{
            opacity: { duration: 0.4, delay: 0.5 },
            x: { duration: 0.4, delay: 0.5 },
            scale: { duration: 0.4, delay: 0.5, type: "spring" },
            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute z-30 top-[14%] sm:top-[18%] ${isRTL ? "left-[3%] sm:left-[8%]" : "right-[3%] sm:right-[12%]"
            } bg-white/80 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-lg border border-white/50 flex items-center gap-2.5`}
        >
          <div
            className={`w-7 h-7 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-md`}
          >
            <StepIcon size={13} className="text-white" />
          </div>
          <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
            {step.notification}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* ─── Flying Notification (Secondary) ─── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id + "-detail"}
          initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
          animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
          exit={{ opacity: 0, x: isRTL ? -20 : 20 }}
          transition={{
            opacity: { duration: 0.4, delay: 0.9 },
            x: { duration: 0.4, delay: 0.9 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute z-30 bottom-[18%] sm:bottom-[28%] ${isRTL ? "left-0 sm:-left-2" : "right-0 sm:-right-2"
            } bg-gradient-to-r ${step.gradient} px-5 py-3 rounded-xl shadow-2xl border border-white/20 flex items-center gap-2`}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-transparent rounded-xl blur opacity-50" />
          <div className="relative flex items-center gap-2">
            <Check size={12} className="text-white" />
            <span className="text-xs font-semibold text-white whitespace-nowrap">
              {step.detail}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ─── Step Dots ─── */}
      <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
        {steps.map((s, i) => (
          <div
            key={s.id}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === currentStep ? `w-6 bg-gradient-to-r ${s.gradient}` : "w-1.5 bg-white/30"
              }`}
          />
        ))}
      </div>

      {/* ─── Energy Stream (connecting devices) ─── */}
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
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// LAPTOP SCENES
// ═══════════════════════════════════════════════════════════

function HeaderBar({ title }: { title: string }) {
  return (
    <motion.div
      variants={itemFade}
      className="h-7 sm:h-8 bg-[#1e293b] flex items-center px-2.5 sm:px-3 gap-1.5 shrink-0"
    >
      <div className="flex gap-1">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff5f57]" />
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#febc2e]" />
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#28c840]" />
      </div>
      <span className="text-[9px] sm:text-[10px] font-medium ml-1.5 text-white">{title}</span>
    </motion.div>
  );
}

function LaptopScene({ step }: { step: WorkflowStep }) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col"
      variants={sceneVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* ── 1. Online Meeting ── */}
      {step.id === "meeting" && (
        <>
          <HeaderBar title="Meeting Room" />
          <div className="flex-1 grid grid-cols-2 gap-1.5 p-2 sm:p-3">
            {[
              { bg: "bg-blue-950/70", color: "bg-blue-400", label: "Client" },
              { bg: "bg-purple-950/70", color: "bg-purple-400", label: "PM" },
              { bg: "bg-emerald-950/70", color: "bg-emerald-400", label: "Designer" },
              { bg: "bg-orange-950/70", color: "bg-orange-400", label: "Dev" },
            ].map((p, i) => (
              <motion.div
                key={i}
                variants={itemPop}
                className={`${p.bg} rounded-lg flex flex-col items-center justify-center gap-1.5 relative overflow-hidden`}
              >
                {/* Simulated webcam shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
                  animate={{ opacity: [0.03, 0.08, 0.03] }}
                  transition={{ duration: 2 + i * 0.5, repeat: Infinity }}
                />
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${p.color}/20 flex items-center justify-center`}
                >
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${p.color}`} />
                </div>
                <span className="text-[7px] sm:text-[9px] text-gray-400 font-medium">{p.label}</span>
              </motion.div>
            ))}
          </div>
          {/* Call controls */}
          <motion.div
            variants={itemFade}
            className="h-7 sm:h-9 bg-[#1e293b] flex items-center justify-center gap-3 sm:gap-4 shrink-0"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-600 flex items-center justify-center">
              <Mic size={10} className="text-white" />
            </div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-600 flex items-center justify-center">
              <Camera size={10} className="text-white" />
            </div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500 flex items-center justify-center">
              <Phone size={10} className="text-white rotate-[135deg]" />
            </div>
          </motion.div>
        </>
      )}

      {/* ── 2. Requirements ── */}
      {step.id === "requirements" && (
        <>
          <HeaderBar title="Project Requirements" />
          <div className="flex-1 p-3 sm:p-4 flex flex-col gap-2 sm:gap-2.5">
            {[
              { w: "w-28 sm:w-36", checked: true },
              { w: "w-24 sm:w-32", checked: true },
              { w: "w-32 sm:w-40", checked: true },
              { w: "w-20 sm:w-28", checked: false },
              { w: "w-26 sm:w-34", checked: false },
            ].map((item, i) => (
              <motion.div key={i} variants={itemFade} className="flex items-center gap-2 sm:gap-2.5">
                <div
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded flex items-center justify-center border ${item.checked ? "bg-amber-500 border-amber-400" : "bg-transparent border-gray-600"
                    }`}
                >
                  {item.checked && <Check size={8} className="text-white" />}
                </div>
                <div className={`h-2 rounded-full ${item.w} ${item.checked ? "bg-gray-300/40" : "bg-gray-600/40"}`} />
              </motion.div>
            ))}

            {/* Priority badge */}
            <motion.div variants={itemFade} className="mt-auto flex items-center gap-2 pt-2 border-t border-gray-800">
              <div className="h-2.5 w-16 sm:w-20 rounded-full bg-amber-500/50" />
              <span className="text-[8px] sm:text-[9px] text-amber-400 font-bold tracking-wide">
                HIGH PRIORITY
              </span>
            </motion.div>
          </div>
        </>
      )}

      {/* ── 3. UI/UX Design ── */}
      {step.id === "design" && (
        <>
          <HeaderBar title="Design Studio" />
          <div className="flex-1 flex p-2 sm:p-3 gap-2">
            {/* Layers panel */}
            <motion.div
              variants={itemFade}
              className="w-10 sm:w-14 bg-[#1e293b] rounded-lg flex flex-col gap-1.5 p-1.5"
            >
              {[40, 30, 20, 15].map((op, i) => (
                <div key={i} className="w-full h-2 rounded" style={{ background: `rgba(236,72,153,${op / 100})` }} />
              ))}
            </motion.div>

            {/* Canvas */}
            <div className="flex-1 bg-[#0d1117] rounded-lg p-2 flex flex-col gap-1.5 sm:gap-2">
              {/* Wireframe header */}
              <motion.div
                variants={itemFade}
                className="h-4 sm:h-5 bg-pink-400/20 rounded flex items-center px-2 gap-1"
              >
                <div className="w-3 h-2 bg-pink-400/40 rounded-sm" />
                <div className="flex-1" />
                <div className="w-2 h-2 bg-pink-400/25 rounded-full" />
                <div className="w-2 h-2 bg-pink-400/25 rounded-full" />
              </motion.div>

              {/* Content area */}
              <div className="flex-1 flex gap-1.5 sm:gap-2">
                <motion.div variants={itemPop} className="w-1/3 bg-pink-400/15 rounded-lg" />
                <div className="flex-1 flex flex-col gap-1.5">
                  <motion.div variants={itemFade} className="h-3 bg-pink-400/20 rounded" />
                  <motion.div variants={itemFade} className="h-2 w-3/4 bg-pink-400/15 rounded" />
                  <motion.div variants={itemFade} className="h-2 w-1/2 bg-pink-400/10 rounded" />
                  <motion.div
                    variants={itemPop}
                    className="h-4 w-16 bg-pink-500/30 rounded-full mt-auto"
                  />
                </div>
              </div>

              {/* Color palette */}
              <motion.div variants={itemFade} className="flex gap-1 sm:gap-1.5 pt-1">
                {["bg-pink-500", "bg-purple-500", "bg-cyan-500", "bg-amber-500", "bg-emerald-500"].map(
                  (c, i) => (
                    <div key={i} className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${c} shadow-sm`} />
                  )
                )}
              </motion.div>
            </div>
          </div>
        </>
      )}

      {/* ── 4. Client Feedback ── */}
      {step.id === "feedback1" && (
        <>
          <HeaderBar title="Client Feedback" />
          <div className="flex-1 p-3 sm:p-4 flex flex-col gap-2.5 sm:gap-3">
            {/* Client message */}
            <motion.div variants={itemSlideRight} className="flex items-start gap-2 max-w-[80%]">
              <div className="w-5 h-5 rounded-full bg-green-500/30 flex-shrink-0 flex items-center justify-center mt-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="bg-green-500/15 rounded-xl rounded-tl-sm px-2.5 py-2 space-y-1">
                <div className="h-1.5 w-24 sm:w-32 bg-green-300/25 rounded" />
                <div className="h-1.5 w-16 sm:w-24 bg-green-300/15 rounded" />
              </div>
            </motion.div>

            {/* Our reply */}
            <motion.div
              variants={itemSlideLeft}
              className="flex items-start gap-2 max-w-[80%] self-end flex-row-reverse"
            >
              <div className="w-5 h-5 rounded-full bg-purple-500/30 flex-shrink-0 flex items-center justify-center mt-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              </div>
              <div className="bg-purple-500/15 rounded-xl rounded-tr-sm px-2.5 py-2 space-y-1">
                <div className="h-1.5 w-28 sm:w-36 bg-purple-300/25 rounded" />
                <div className="h-1.5 w-20 sm:w-28 bg-purple-300/15 rounded" />
              </div>
            </motion.div>

            {/* Client approval */}
            <motion.div variants={itemSlideRight} className="flex items-start gap-2 max-w-[60%]">
              <div className="w-5 h-5 rounded-full bg-green-500/30 flex-shrink-0 flex items-center justify-center mt-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="bg-green-500/15 rounded-xl rounded-tl-sm px-2.5 py-1.5 flex items-center gap-1.5">
                <ThumbsUp size={10} className="text-green-400" />
                <div className="h-1.5 w-12 bg-green-300/25 rounded" />
              </div>
            </motion.div>

            {/* Input bar */}
            <motion.div variants={itemFade} className="mt-auto flex items-center gap-2">
              <div className="flex-1 h-6 sm:h-7 bg-[#1e293b] rounded-full px-3 flex items-center">
                <div className="h-1.5 w-16 bg-gray-600/40 rounded" />
              </div>
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <Send size={10} className="text-white" />
              </div>
            </motion.div>
          </div>
        </>
      )}

      {/* ── 5. Implementation / Development ── */}
      {step.id === "implementation" && (
        <>
          {/* Editor tabs */}
          <motion.div
            variants={itemFade}
            className="h-7 sm:h-8 bg-[#1e293b] flex items-center px-2 gap-0.5 shrink-0"
          >
            <div className="flex gap-1 mr-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff5f57]" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#febc2e]" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#28c840]" />
            </div>
            <div className="h-full px-2.5 bg-[#111827] text-[8px] sm:text-[9px] text-purple-300 flex items-center border-t border-purple-500/50">
              index.tsx
            </div>
            <div className="h-full px-2.5 text-[8px] sm:text-[9px] text-white flex items-center">
              app.tsx
            </div>
          </motion.div>

          {/* Code lines */}
          <div className="flex-1 p-2 sm:p-3 flex flex-col gap-1 sm:gap-1.5 font-mono">
            {[
              { indent: 0, segs: ["w-7 bg-purple-400/50", "w-4 bg-blue-300/40", "w-10 bg-green-400/40"] },
              { indent: 0, segs: ["w-5 bg-blue-400/50", "w-8 bg-yellow-300/40", "w-3 bg-cyan-300/40"] },
              { indent: 1, segs: ["w-7 bg-purple-400/40", "w-2 bg-gray-400/30"] },
              { indent: 2, segs: ["w-10 bg-green-400/40", "w-5 bg-gray-300/20"] },
              { indent: 2, segs: ["w-8 bg-orange-400/40", "w-4 bg-blue-300/30"] },
              { indent: 2, segs: ["w-6 bg-pink-400/40", "w-9 bg-cyan-300/30"] },
              { indent: 1, segs: ["w-2 bg-gray-400/30"] },
              { indent: 0, segs: ["w-3 bg-purple-400/40"] },
            ].map((line, i) => (
              <motion.div
                key={i}
                variants={itemFade}
                className="flex items-center gap-1"
                style={{ paddingLeft: `${line.indent * 12}px` }}
              >
                <span className="text-[7px] sm:text-[8px] text-gray-600 w-3 text-right mr-1.5 shrink-0">
                  {i + 1}
                </span>
                {line.segs.map((seg, j) => (
                  <div key={j} className={`h-1.5 sm:h-2 rounded-sm ${seg}`} />
                ))}
              </motion.div>
            ))}
          </div>

          {/* Terminal */}
          <motion.div
            variants={itemFade}
            className="h-7 sm:h-8 bg-[#0d1117] border-t border-gray-800 flex items-center px-2.5 sm:px-3 gap-2 shrink-0"
          >
            <span className="text-[8px] sm:text-[9px] text-green-400 font-mono">$</span>
            <motion.div
              className="h-1.5 w-16 bg-green-400/30 rounded"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          </motion.div>
        </>
      )}

      {/* ── 6. Client Review ── */}
      {step.id === "feedback2" && (
        <>
          <HeaderBar title="Demo Review" />
          <div className="flex-1 p-3 sm:p-4 flex flex-col items-center justify-center gap-3 sm:gap-4">
            {/* Preview window */}
            <motion.div
              variants={itemPop}
              className="w-full max-w-[220px] bg-[#0d1117] rounded-lg p-2 space-y-1.5 border border-gray-800"
            >
              <div className="h-3 bg-teal-400/20 rounded" />
              <div className="h-12 sm:h-14 bg-teal-400/10 rounded" />
              <div className="h-2 w-3/4 bg-teal-400/15 rounded" />
            </motion.div>

            {/* Rating stars */}
            <motion.div variants={itemFade} className="flex gap-1">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.12, type: "spring" }}
                >
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                </motion.div>
              ))}
            </motion.div>

            {/* Approval stamp */}
            <motion.div
              variants={itemPop}
              className="px-4 py-1.5 rounded-full bg-teal-500/20 border-2 border-teal-400/40 flex items-center gap-1.5"
            >
              <Check size={12} className="text-teal-400" />
              <span className="text-[10px] sm:text-xs font-bold text-teal-400 tracking-wide">
                APPROVED
              </span>
            </motion.div>
          </div>
        </>
      )}

      {/* ── 7. QA Testing ── */}
      {step.id === "qa" && (
        <>
          <HeaderBar title="Test Runner" />
          <div className="flex-1 p-3 sm:p-4 flex flex-col gap-2 sm:gap-2.5">
            {[
              { label: "Unit Tests", count: "42/42" },
              { label: "Integration", count: "18/18" },
              { label: "E2E Tests", count: "12/12" },
              { label: "Performance", count: "Pass" },
              { label: "Security Scan", count: "Pass" },
            ].map((test, i) => (
              <motion.div key={i} variants={itemFade} className="flex items-center gap-2">
                <motion.div
                  className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                >
                  <Check size={8} className="text-white" />
                </motion.div>
                <div className="h-2 bg-gray-600/30 rounded flex-1" />
                <span className="text-[8px] sm:text-[9px] text-emerald-400 font-mono">{test.count}</span>
              </motion.div>
            ))}

            {/* Coverage bar */}
            <motion.div variants={itemFade} className="mt-auto pt-2 border-t border-gray-800">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[8px] sm:text-[9px] text-gray-400">Coverage</span>
                <span className="text-[8px] sm:text-[9px] text-indigo-400 font-bold">94%</span>
              </div>
              <div className="h-2 bg-[#1e293b] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "94%" }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </div>
        </>
      )}

      {/* ── 8. Deployment ── */}
      {step.id === "deployment" && (
        <>
          <HeaderBar title="Deployment" />
          <div className="flex-1 p-3 sm:p-4 flex flex-col items-center justify-center gap-3 sm:gap-4">
            {/* Progress bar */}
            <motion.div variants={itemFade} className="w-full max-w-[220px]">
              <div className="text-[9px] sm:text-[10px] text-gray-400 mb-1.5 text-center">
                Deploying to production...
              </div>
              <div className="h-2.5 bg-[#1e293b] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-fuchsia-500 to-pink-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Success checks */}
            {["Build successful", "Tests passed", "Deployed!"].map((text, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + i * 0.35, duration: 0.3 }}
              >
                <div className="w-3.5 h-3.5 rounded-full bg-fuchsia-500 flex items-center justify-center">
                  <Check size={8} className="text-white" />
                </div>
                <span className="text-[9px] sm:text-[10px] text-gray-300">{text}</span>
              </motion.div>
            ))}

            {/* Live indicator */}
            <motion.div
              className="flex items-center gap-1.5 mt-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2, type: "spring" }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-emerald-400"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              <span className="text-xs sm:text-sm font-bold text-emerald-400 tracking-wide">LIVE</span>
            </motion.div>
          </div>
        </>
      )}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════
// PHONE SCENES
// ═══════════════════════════════════════════════════════════

function PhoneStatusBar() {
  return (
    <motion.div variants={itemFade} className="h-5 flex items-center justify-between px-3 shrink-0">
      <span className="text-[7px] text-gray-500 font-medium">9:41</span>
      <div className="flex items-center gap-1">
        <div className="flex gap-px">
          {[3, 4, 5, 6].map((h) => (
            <div key={h} className="w-[3px] rounded-sm bg-gray-600/60" style={{ height: `${h}px` }} />
          ))}
        </div>
        <div className="w-4 h-2 rounded-sm border border-gray-600/60 relative">
          <div className="absolute inset-[1px] bg-gray-500/60 rounded-[1px]" />
        </div>
      </div>
    </motion.div>
  );
}

function PhoneHeader({ step }: { step: WorkflowStep }) {
  const StepIcon = step.icon;
  return (
    <motion.div
      variants={itemFade}
      className={`h-6 flex items-center justify-center gap-1.5 bg-gradient-to-r ${step.gradient} shrink-0`}
    >
      <StepIcon size={9} className="text-white/80" />
      <span className="text-[7px] sm:text-[8px] text-white font-semibold">{step.label}</span>
    </motion.div>
  );
}

function PhoneScene({ step }: { step: WorkflowStep }) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col"
      variants={sceneVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PhoneStatusBar />
      <PhoneHeader step={step} />

      {/* ── 1. Meeting: incoming call ── */}
      {step.id === "meeting" && (
        <div className="flex-1 flex flex-col items-center justify-center gap-3 p-3">
          <motion.div
            variants={itemPop}
            className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center"
          >
            <motion.div
              className="w-12 h-12 rounded-full bg-blue-500/10 absolute"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Video size={18} className="text-blue-400 relative z-10" />
          </motion.div>
          <div className="space-y-1 text-center">
            <motion.div variants={itemFade} className="h-1.5 w-14 bg-gray-500/40 rounded mx-auto" />
            <motion.div variants={itemFade} className="h-1 w-10 bg-gray-600/30 rounded mx-auto" />
          </div>
          <div className="flex gap-4 mt-2">
            <motion.div
              variants={itemPop}
              className="w-8 h-8 rounded-full bg-red-500/80 flex items-center justify-center"
            >
              <Phone size={12} className="text-white rotate-[135deg]" />
            </motion.div>
            <motion.div
              variants={itemPop}
              className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Phone size={12} className="text-white" />
            </motion.div>
          </div>
        </div>
      )}

      {/* ── 2. Requirements: mini checklist ── */}
      {step.id === "requirements" && (
        <div className="flex-1 p-3 flex flex-col gap-2">
          {[
            { w: "w-[70%]", checked: true },
            { w: "w-[55%]", checked: true },
            { w: "w-[65%]", checked: false },
            { w: "w-[50%]", checked: false },
          ].map((item, i) => (
            <motion.div key={i} variants={itemFade} className="flex items-center gap-1.5">
              <div
                className={`w-2.5 h-2.5 rounded-sm flex items-center justify-center ${item.checked ? "bg-amber-500" : "border border-gray-600"
                  }`}
              >
                {item.checked && <Check size={6} className="text-white" />}
              </div>
              <div className={`h-1.5 rounded ${item.w} ${item.checked ? "bg-gray-400/30" : "bg-gray-600/30"}`} />
            </motion.div>
          ))}
        </div>
      )}

      {/* ── 3. Design: mobile wireframe preview ── */}
      {step.id === "design" && (
        <div className="flex-1 p-2.5 flex flex-col gap-1.5">
          <motion.div variants={itemFade} className="h-4 bg-pink-500/20 rounded" />
          <motion.div variants={itemPop} className="flex-1 bg-pink-400/10 rounded-lg flex flex-col p-1.5 gap-1">
            <div className="h-2 w-3/4 bg-pink-400/20 rounded" />
            <div className="h-1.5 w-1/2 bg-pink-400/15 rounded" />
            <div className="flex-1 bg-pink-400/10 rounded mt-1" />
          </motion.div>
          <motion.div variants={itemFade} className="flex gap-1">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="flex-1 h-3 bg-pink-400/15 rounded" />
            ))}
          </motion.div>
        </div>
      )}

      {/* ── 4. Feedback: chat bubbles ── */}
      {step.id === "feedback1" && (
        <div className="flex-1 p-2.5 flex flex-col gap-2 justify-center">
          <motion.div variants={itemSlideRight} className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-green-400/30 shrink-0" />
            <div className="bg-green-500/15 rounded-lg px-2 py-1">
              <div className="h-1 w-12 bg-green-300/25 rounded" />
            </div>
          </motion.div>
          <motion.div variants={itemSlideLeft} className="flex items-center gap-1 self-end flex-row-reverse">
            <div className="w-3 h-3 rounded-full bg-purple-400/30 shrink-0" />
            <div className="bg-purple-500/15 rounded-lg px-2 py-1">
              <div className="h-1 w-10 bg-purple-300/25 rounded" />
            </div>
          </motion.div>
          <motion.div variants={itemSlideRight} className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-green-400/30 shrink-0" />
            <div className="bg-green-500/15 rounded-lg p-1">
              <ThumbsUp size={8} className="text-green-400" />
            </div>
          </motion.div>
        </div>
      )}

      {/* ── 5. Implementation: build progress ── */}
      {step.id === "implementation" && (
        <div className="flex-1 p-3 flex flex-col items-center justify-center gap-3">
          <motion.div
            variants={itemPop}
            className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center"
          >
            <Code2 size={16} className="text-purple-400" />
          </motion.div>
          <motion.div variants={itemFade} className="w-full px-2">
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-violet-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "67%" }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>
          <motion.div variants={itemFade} className="h-1 w-8 bg-gray-600/30 rounded" />
        </div>
      )}

      {/* ── 6. Client Review: approval ── */}
      {step.id === "feedback2" && (
        <div className="flex-1 p-3 flex flex-col items-center justify-center gap-3">
          <motion.div variants={itemPop}>
            <ThumbsUp size={24} className="text-teal-400" />
          </motion.div>
          <motion.div
            variants={itemPop}
            className="px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30"
          >
            <span className="text-[7px] text-teal-400 font-bold tracking-wider">APPROVED</span>
          </motion.div>
          <motion.div variants={itemFade} className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} size={8} className="text-yellow-400 fill-yellow-400" />
            ))}
          </motion.div>
        </div>
      )}

      {/* ── 7. QA: checkmarks ── */}
      {step.id === "qa" && (
        <div className="flex-1 p-3 flex flex-col gap-2">
          {[1, 2, 3, 4].map((_, i) => (
            <motion.div key={i} variants={itemFade} className="flex items-center gap-1.5">
              <motion.div
                className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + i * 0.2, type: "spring" }}
              >
                <Check size={6} className="text-white" />
              </motion.div>
              <div className="h-1.5 rounded bg-gray-600/30" style={{ width: `${50 + i * 8}%` }} />
            </motion.div>
          ))}
          <motion.div variants={itemFade} className="mt-auto">
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "94%" }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
            </div>
          </motion.div>
        </div>
      )}

      {/* ── 8. Deployment: rocket + live ── */}
      {step.id === "deployment" && (
        <div className="flex-1 p-3 flex flex-col items-center justify-center gap-3">
          <motion.div
            variants={itemPop}
            className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket size={20} className="text-fuchsia-400" />
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center gap-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-emerald-400"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-[8px] text-emerald-400 font-bold">LIVE</span>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
