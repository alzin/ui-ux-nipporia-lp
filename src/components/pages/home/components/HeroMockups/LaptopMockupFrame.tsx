import { motion, AnimatePresence } from "framer-motion";
import type { WorkflowStep } from "@/hooks/animation/useWorkflowAnimation";
import LaptopScene from "./scenes/LaptopScene";

interface Props {
  step: WorkflowStep;
  isRTL: boolean;
}

export default function LaptopMockupFrame({ step, isRTL }: Props) {
  return (
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
  );
}
