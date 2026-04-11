import { motion } from "framer-motion";
import { Check, Phone, ThumbsUp, Code2, Rocket, Star, Video } from "lucide-react";
import type { WorkflowStep } from "@/hooks/animation/useWorkflowAnimation";
import { sceneVariants, itemFade, itemPop, itemSlideRight, itemSlideLeft } from "@/content/home/variants";
import PhoneStatusBar from "./PhoneStatusBar";
import PhoneHeader from "./PhoneHeader";

export default function PhoneScene({ step }: { step: WorkflowStep }) {
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
          <motion.div variants={itemPop} className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
            <motion.div className="w-12 h-12 rounded-full bg-blue-500/10 absolute" animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
            <Video size={18} className="text-blue-400 relative z-10" />
          </motion.div>
          <div className="space-y-1 text-center">
            <motion.div variants={itemFade} className="h-1.5 w-14 bg-gray-500/40 rounded mx-auto" />
            <motion.div variants={itemFade} className="h-1 w-10 bg-gray-600/30 rounded mx-auto" />
          </div>
          <div className="flex gap-4 mt-2">
            <motion.div variants={itemPop} className="w-8 h-8 rounded-full bg-red-500/80 flex items-center justify-center">
              <Phone size={12} className="text-white rotate-[135deg]" />
            </motion.div>
            <motion.div variants={itemPop} className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
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
              <div className={`w-2.5 h-2.5 rounded-sm flex items-center justify-center ${item.checked ? "bg-amber-500" : "border border-gray-600"}`}>
                {item.checked && <Check size={6} className="text-white" />}
              </div>
              <div className={`h-1.5 rounded ${item.w} ${item.checked ? "bg-gray-400/30" : "bg-gray-600/30"}`} />
            </motion.div>
          ))}
        </div>
      )}

      {/* ── 3. Design: mobile wireframe ── */}
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
          <motion.div variants={itemPop} className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <Code2 size={16} className="text-purple-400" />
          </motion.div>
          <motion.div variants={itemFade} className="w-full px-2">
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-purple-500 to-violet-400 rounded-full" initial={{ width: 0 }} animate={{ width: "67%" }} transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }} />
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
          <motion.div variants={itemPop} className="px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30">
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
              <motion.div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex items-center justify-center" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 + i * 0.2, type: "spring" }}>
                <Check size={6} className="text-white" />
              </motion.div>
              <div className="h-1.5 rounded bg-gray-600/30" style={{ width: `${50 + i * 8}%` }} />
            </motion.div>
          ))}
          <motion.div variants={itemFade} className="mt-auto">
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-emerald-500 rounded-full" initial={{ width: 0 }} animate={{ width: "94%" }} transition={{ duration: 1.2, delay: 0.8 }} />
            </div>
          </motion.div>
        </div>
      )}

      {/* ── 8. Deployment: rocket + live ── */}
      {step.id === "deployment" && (
        <div className="flex-1 p-3 flex flex-col items-center justify-center gap-3">
          <motion.div variants={itemPop} className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
              <Rocket size={20} className="text-fuchsia-400" />
            </motion.div>
          </motion.div>
          <motion.div className="flex items-center gap-1.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            <motion.div className="w-2 h-2 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1, repeat: Infinity }} />
            <span className="text-[8px] text-emerald-400 font-bold">LIVE</span>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
