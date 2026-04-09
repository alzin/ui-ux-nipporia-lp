import { motion, AnimatePresence } from "framer-motion";
import type { WorkflowStep } from "../hooks/useWorkflowAnimation";
import PhoneScene from "./scenes/PhoneScene";

interface Props {
  step: WorkflowStep;
  isRTL: boolean;
}

export default function PhoneMockupFrame({ step, isRTL }: Props) {
  return (
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
      {/* Glare */}
      <div className="absolute top-0 right-0 w-[200%] h-full bg-gradient-to-b from-white/10 to-transparent transform rotate-45 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
    </motion.div>
  );
}
