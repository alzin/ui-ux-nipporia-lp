import { motion } from "framer-motion";
import { Check, Mic, Camera, Phone, Send, Star, ThumbsUp } from "lucide-react";
import type { WorkflowStep } from "../../hooks/useWorkflowAnimation";
import { sceneVariants, itemFade, itemPop, itemSlideRight, itemSlideLeft } from "./variants";
import HeaderBar from "./HeaderBar";

export default function LaptopScene({ step }: { step: WorkflowStep }) {
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
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
                  animate={{ opacity: [0.03, 0.08, 0.03] }}
                  transition={{ duration: 2 + i * 0.5, repeat: Infinity }}
                />
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${p.color}/20 flex items-center justify-center`}>
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${p.color}`} />
                </div>
                <span className="text-[7px] sm:text-[9px] text-gray-400 font-medium">{p.label}</span>
              </motion.div>
            ))}
          </div>
          <motion.div variants={itemFade} className="h-7 sm:h-9 bg-[#1e293b] flex items-center justify-center gap-3 sm:gap-4 shrink-0">
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
                <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded flex items-center justify-center border ${item.checked ? "bg-amber-500 border-amber-400" : "bg-transparent border-gray-600"}`}>
                  {item.checked && <Check size={8} className="text-white" />}
                </div>
                <div className={`h-2 rounded-full ${item.w} ${item.checked ? "bg-gray-300/40" : "bg-gray-600/40"}`} />
              </motion.div>
            ))}
            <motion.div variants={itemFade} className="mt-auto flex items-center gap-2 pt-2 border-t border-gray-800">
              <div className="h-2.5 w-16 sm:w-20 rounded-full bg-amber-500/50" />
              <span className="text-[8px] sm:text-[9px] text-amber-400 font-bold tracking-wide">HIGH PRIORITY</span>
            </motion.div>
          </div>
        </>
      )}

      {/* ── 3. UI/UX Design ── */}
      {step.id === "design" && (
        <>
          <HeaderBar title="Design Studio" />
          <div className="flex-1 flex p-2 sm:p-3 gap-2">
            <motion.div variants={itemFade} className="w-10 sm:w-14 bg-[#1e293b] rounded-lg flex flex-col gap-1.5 p-1.5">
              {[40, 30, 20, 15].map((op, i) => (
                <div key={i} className="w-full h-2 rounded" style={{ background: `rgba(236,72,153,${op / 100})` }} />
              ))}
            </motion.div>
            <div className="flex-1 bg-[#0d1117] rounded-lg p-2 flex flex-col gap-1.5 sm:gap-2">
              <motion.div variants={itemFade} className="h-4 sm:h-5 bg-pink-400/20 rounded flex items-center px-2 gap-1">
                <div className="w-3 h-2 bg-pink-400/40 rounded-sm" />
                <div className="flex-1" />
                <div className="w-2 h-2 bg-pink-400/25 rounded-full" />
                <div className="w-2 h-2 bg-pink-400/25 rounded-full" />
              </motion.div>
              <div className="flex-1 flex gap-1.5 sm:gap-2">
                <motion.div variants={itemPop} className="w-1/3 bg-pink-400/15 rounded-lg" />
                <div className="flex-1 flex flex-col gap-1.5">
                  <motion.div variants={itemFade} className="h-3 bg-pink-400/20 rounded" />
                  <motion.div variants={itemFade} className="h-2 w-3/4 bg-pink-400/15 rounded" />
                  <motion.div variants={itemFade} className="h-2 w-1/2 bg-pink-400/10 rounded" />
                  <motion.div variants={itemPop} className="h-4 w-16 bg-pink-500/30 rounded-full mt-auto" />
                </div>
              </div>
              <motion.div variants={itemFade} className="flex gap-1 sm:gap-1.5 pt-1">
                {["bg-pink-500", "bg-purple-500", "bg-cyan-500", "bg-amber-500", "bg-emerald-500"].map((c, i) => (
                  <div key={i} className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${c} shadow-sm`} />
                ))}
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
            <motion.div variants={itemSlideRight} className="flex items-start gap-2 max-w-[80%]">
              <div className="w-5 h-5 rounded-full bg-green-500/30 flex-shrink-0 flex items-center justify-center mt-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="bg-green-500/15 rounded-xl rounded-tl-sm px-2.5 py-2 space-y-1">
                <div className="h-1.5 w-24 sm:w-32 bg-green-300/25 rounded" />
                <div className="h-1.5 w-16 sm:w-24 bg-green-300/15 rounded" />
              </div>
            </motion.div>
            <motion.div variants={itemSlideLeft} className="flex items-start gap-2 max-w-[80%] self-end flex-row-reverse">
              <div className="w-5 h-5 rounded-full bg-purple-500/30 flex-shrink-0 flex items-center justify-center mt-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              </div>
              <div className="bg-purple-500/15 rounded-xl rounded-tr-sm px-2.5 py-2 space-y-1">
                <div className="h-1.5 w-28 sm:w-36 bg-purple-300/25 rounded" />
                <div className="h-1.5 w-20 sm:w-28 bg-purple-300/15 rounded" />
              </div>
            </motion.div>
            <motion.div variants={itemSlideRight} className="flex items-start gap-2 max-w-[60%]">
              <div className="w-5 h-5 rounded-full bg-green-500/30 flex-shrink-0 flex items-center justify-center mt-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="bg-green-500/15 rounded-xl rounded-tl-sm px-2.5 py-1.5 flex items-center gap-1.5">
                <ThumbsUp size={10} className="text-green-400" />
                <div className="h-1.5 w-12 bg-green-300/25 rounded" />
              </div>
            </motion.div>
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

      {/* ── 5. Implementation ── */}
      {step.id === "implementation" && (
        <>
          <motion.div variants={itemFade} className="h-7 sm:h-8 bg-[#1e293b] flex items-center px-2 gap-0.5 shrink-0">
            <div className="flex gap-1 mr-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff5f57]" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#febc2e]" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#28c840]" />
            </div>
            <div className="h-full px-2.5 bg-[#111827] text-[8px] sm:text-[9px] text-purple-300 flex items-center border-t border-purple-500/50">index.tsx</div>
            <div className="h-full px-2.5 text-[8px] sm:text-[9px] text-white flex items-center">app.tsx</div>
          </motion.div>
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
              <motion.div key={i} variants={itemFade} className="flex items-center gap-1" style={{ paddingLeft: `${line.indent * 12}px` }}>
                <span className="text-[7px] sm:text-[8px] text-gray-600 w-3 text-right mr-1.5 shrink-0">{i + 1}</span>
                {line.segs.map((seg, j) => (
                  <div key={j} className={`h-1.5 sm:h-2 rounded-sm ${seg}`} />
                ))}
              </motion.div>
            ))}
          </div>
          <motion.div variants={itemFade} className="h-7 sm:h-8 bg-[#0d1117] border-t border-gray-800 flex items-center px-2.5 sm:px-3 gap-2 shrink-0">
            <span className="text-[8px] sm:text-[9px] text-green-400 font-mono">$</span>
            <motion.div className="h-1.5 w-16 bg-green-400/30 rounded" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 1.2, repeat: Infinity }} />
          </motion.div>
        </>
      )}

      {/* ── 6. Client Review ── */}
      {step.id === "feedback2" && (
        <>
          <HeaderBar title="Demo Review" />
          <div className="flex-1 p-3 sm:p-4 flex flex-col items-center justify-center gap-3 sm:gap-4">
            <motion.div variants={itemPop} className="w-full max-w-[220px] bg-[#0d1117] rounded-lg p-2 space-y-1.5 border border-gray-800">
              <div className="h-3 bg-teal-400/20 rounded" />
              <div className="h-12 sm:h-14 bg-teal-400/10 rounded" />
              <div className="h-2 w-3/4 bg-teal-400/15 rounded" />
            </motion.div>
            <motion.div variants={itemFade} className="flex gap-1">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + i * 0.12, type: "spring" }}>
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={itemPop} className="px-4 py-1.5 rounded-full bg-teal-500/20 border-2 border-teal-400/40 flex items-center gap-1.5">
              <Check size={12} className="text-teal-400" />
              <span className="text-[10px] sm:text-xs font-bold text-teal-400 tracking-wide">APPROVED</span>
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
                <motion.div className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 + i * 0.15, type: "spring" }}>
                  <Check size={8} className="text-white" />
                </motion.div>
                <div className="h-2 bg-gray-600/30 rounded flex-1" />
                <span className="text-[8px] sm:text-[9px] text-emerald-400 font-mono">{test.count}</span>
              </motion.div>
            ))}
            <motion.div variants={itemFade} className="mt-auto pt-2 border-t border-gray-800">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[8px] sm:text-[9px] text-gray-400">Coverage</span>
                <span className="text-[8px] sm:text-[9px] text-indigo-400 font-bold">94%</span>
              </div>
              <div className="h-2 bg-[#1e293b] rounded-full overflow-hidden">
                <motion.div className="h-full bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full" initial={{ width: 0 }} animate={{ width: "94%" }} transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }} />
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
            <motion.div variants={itemFade} className="w-full max-w-[220px]">
              <div className="text-[9px] sm:text-[10px] text-gray-400 mb-1.5 text-center">Deploying to production...</div>
              <div className="h-2.5 bg-[#1e293b] rounded-full overflow-hidden">
                <motion.div className="h-full bg-gradient-to-r from-fuchsia-500 to-pink-400 rounded-full" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2, delay: 0.3, ease: "easeOut" }} />
              </div>
            </motion.div>
            {["Build successful", "Tests passed", "Deployed!"].map((text, i) => (
              <motion.div key={i} className="flex items-center gap-2" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 + i * 0.35, duration: 0.3 }}>
                <div className="w-3.5 h-3.5 rounded-full bg-fuchsia-500 flex items-center justify-center">
                  <Check size={8} className="text-white" />
                </div>
                <span className="text-[9px] sm:text-[10px] text-gray-300">{text}</span>
              </motion.div>
            ))}
            <motion.div className="flex items-center gap-1.5 mt-1" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.2, type: "spring" }}>
              <motion.div className="w-2 h-2 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
              <span className="text-xs sm:text-sm font-bold text-emerald-400 tracking-wide">LIVE</span>
            </motion.div>
          </div>
        </>
      )}
    </motion.div>
  );
}
