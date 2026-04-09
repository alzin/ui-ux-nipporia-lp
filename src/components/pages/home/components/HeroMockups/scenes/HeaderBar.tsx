import { motion } from "framer-motion";
import { itemFade } from "./variants";

export default function HeaderBar({ title }: { title: string }) {
  return (
    <motion.div
      variants={itemFade}
      className="h-7 sm:h-8 bg-[#1e293b] flex items-center px-2.5 sm:px-3 gap-1.5 shrink-0"
    >
      <div className="flex gap-1">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff5f57]" />
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#febc2e]" />
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#28c840]" />
      </div>
      <span className="text-[9px] sm:text-[10px] font-medium ml-1.5 text-white">{title}</span>
    </motion.div>
  );
}
