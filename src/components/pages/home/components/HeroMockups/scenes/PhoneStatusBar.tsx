import { motion } from "framer-motion";
import { itemFade } from "@/content/home/variants";

export default function PhoneStatusBar() {
  return (
    <motion.div variants={itemFade} className="h-5 flex items-center justify-between px-3 shrink-0">
      <span className="text-[7px] text-gray-500 font-medium">9:41</span>
      <div className="flex items-center gap-1">
        <div className="flex gap-px">
          {[3, 4, 5, 6].map((h) => (
            <div key={h} className="w-[3px] rounded-sm bg-gray-600/60" style={{ height: `${h}px` }} />
          ))}
        </div>
        <div className="w-4 h-2 rounded-sm border border-gray-600/60 relative">
          <div className="absolute inset-[1px] bg-gray-500/60 rounded-[1px]" />
        </div>
      </div>
    </motion.div>
  );
}
