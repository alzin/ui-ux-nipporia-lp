import { motion } from "framer-motion";
import type { WorkflowStep } from "@/hooks/animation/useWorkflowAnimation";
import { itemFade } from "@/content/home/variants";

export default function PhoneHeader({ step }: { step: WorkflowStep }) {
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
