import { motion, AnimatePresence } from "framer-motion";
import { STEP_DURATION, type WorkflowStep } from "../hooks/useWorkflowAnimation";

interface Props {
  step: WorkflowStep;
  currentStep: number;
  stepsTotal: number;
}

export default function StepIndicator({ step, currentStep, stepsTotal }: Props) {
  const StepIcon = step.icon;
  return (
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
            <div className={`w-7 h-7 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-sm`}>
              <StepIcon size={14} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
              {currentStep + 1}/{stepsTotal} &mdash; {step.label}
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
  );
}
