import type { WorkflowStep } from "@/hooks/animation/useWorkflowAnimation";

interface Props {
  steps: WorkflowStep[];
  currentStep: number;
}

export default function StepDots({ steps, currentStep }: Props) {
  return (
    <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
      {steps.map((s, i) => (
        <div
          key={s.id}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            i === currentStep ? `w-6 bg-gradient-to-r ${s.gradient}` : "w-1.5 bg-white/30"
          }`}
        />
      ))}
    </div>
  );
}
