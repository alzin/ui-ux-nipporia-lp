import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import type { WorkflowStep } from "../hooks/useWorkflowAnimation";

interface Props {
  step: WorkflowStep;
  isRTL: boolean;
}

export default function FlyingNotifications({ step, isRTL }: Props) {
  const StepIcon = step.icon;
  return (
    <>
      {/* Primary notification */}
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
          className={`absolute z-30 top-[14%] sm:top-[18%] ${
            isRTL ? "left-[3%] sm:left-[8%]" : "right-[3%] sm:right-[12%]"
          } bg-white/80 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-lg border border-white/50 flex items-center gap-2.5`}
        >
          <div className={`w-7 h-7 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-md`}>
            <StepIcon size={13} className="text-white" />
          </div>
          <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
            {step.notification}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Secondary notification */}
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
          className={`absolute z-30 bottom-[18%] sm:bottom-[28%] ${
            isRTL ? "left-0 sm:-left-2" : "right-0 sm:-right-2"
          } bg-gradient-to-r ${step.gradient} px-5 py-3 rounded-xl shadow-2xl border border-white/20 flex items-center gap-2`}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-transparent rounded-xl blur opacity-50" />
          <div className="relative flex items-center gap-2">
            <Check size={12} className="text-white" />
            <span className="text-xs font-semibold text-white whitespace-nowrap">{step.detail}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
