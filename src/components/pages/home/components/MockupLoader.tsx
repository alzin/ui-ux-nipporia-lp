interface Props {
  text: string;
  size?: "sm" | "md";
}

export default function MockupLoader({ text, size = "md" }: Props) {
  const spinnerSize = size === "sm" ? "w-6 h-6" : "w-8 h-8";
  const textSize = size === "sm" ? "text-[10px]" : "text-xs";

  return (
    <div className="absolute inset-0 bg-[#1c1c1e] flex items-center justify-center z-10">
      <div className="flex flex-col items-center gap-3">
        <div className={`${spinnerSize} border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin`} />
        <span className={`${textSize} text-slate-400`}>{text}</span>
      </div>
    </div>
  );
}
