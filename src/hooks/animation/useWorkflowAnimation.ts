"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Video,
  ClipboardList,
  Palette,
  MessageCircle,
  Code2,
  ThumbsUp,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const STEP_DURATION = 4000;

export interface WorkflowStep {
  id: string;
  label: string;
  icon: typeof Video;
  gradient: string;
  notification: string;
  detail: string;
}

const STEP_CONFIGS = [
  { id: "meeting",        icon: Video,         gradient: "from-blue-500 to-cyan-400"    },
  { id: "requirements",   icon: ClipboardList, gradient: "from-amber-500 to-orange-400" },
  { id: "design",         icon: Palette,       gradient: "from-pink-500 to-rose-400"    },
  { id: "feedback1",      icon: MessageCircle, gradient: "from-green-500 to-emerald-400"},
  { id: "implementation", icon: Code2,         gradient: "from-purple-500 to-violet-400"},
  { id: "feedback2",      icon: ThumbsUp,      gradient: "from-teal-500 to-cyan-400"   },
  { id: "qa",             icon: ShieldCheck,   gradient: "from-indigo-500 to-blue-400" },
  { id: "deployment",     icon: Rocket,        gradient: "from-fuchsia-500 to-pink-400"},
];

interface UseWorkflowAnimationReturn {
  currentStep: number;
  steps: WorkflowStep[];
  step: WorkflowStep;
}

export function useWorkflowAnimation(): UseWorkflowAnimationReturn {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const steps: WorkflowStep[] = STEP_CONFIGS.map((config, i) => ({
    ...config,
    label:        t.heroWorkflow.steps[i].label,
    notification: t.heroWorkflow.steps[i].notification,
    detail:       t.heroWorkflow.steps[i].detail,
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % STEP_CONFIGS.length);
    }, STEP_DURATION);
    return () => clearInterval(timer);
  }, []);

  return { currentStep, steps, step: steps[currentStep] };
}

export { STEP_DURATION };
