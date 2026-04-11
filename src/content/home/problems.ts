import {
  FragmentedStrategyIcon,
  DigitalLagIcon,
  PoorROIIcon,
} from "@/components/common/components/icons/ProblemIcons";

export type TProblemMeta = {
  color: string;
  iconColor: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export const problemsMeta: TProblemMeta[] = [
  { color: "from-red-400 to-orange-400",    iconColor: "text-red-500",    Icon: FragmentedStrategyIcon },
  { color: "from-orange-400 to-yellow-400", iconColor: "text-orange-500", Icon: DigitalLagIcon },
  { color: "from-yellow-400 to-green-400",  iconColor: "text-amber-600",  Icon: PoorROIIcon },
];
