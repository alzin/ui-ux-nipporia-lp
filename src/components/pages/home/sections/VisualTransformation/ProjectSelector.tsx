import type { Project } from "@/content/home/projectData";

interface Props {
  projects: Project[];
  activeIndex: number;
  isTransitioning: boolean;
  onSelect: (index: number) => void;
  isRTL: boolean;
}

export default function ProjectSelector({ projects, activeIndex, isTransitioning, onSelect, isRTL }: Props) {
  return (
    <div className="relative z-10 mx-3 sm:mx-5 md:mx-8 px-5 py-4 bg-white/90 border border-black/5 rounded-2xl shadow-sm flex flex-wrap items-center gap-3">
      {projects.map((project, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={project.id}
            onClick={() => onSelect(index)}
            disabled={isTransitioning}
            className={`${isRTL ? "text-right" : "text-left"} rounded-full border px-4 py-2.5 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${isActive ? "bg-[#8641E8] border-[#D8B4FE] shadow-lg shadow-purple-600/10" : "bg-[#FAF5FF] border-black/5 hover:bg-purple-100 hover:shadow-md hover:shadow-purple-900/5"} ${isTransitioning ? "cursor-wait" : "cursor-pointer"}`}
          >
            <p className={`text-xs md:text-sm font-semibold truncate ${isActive ? "text-white" : "text-[#8641E8]"}`}>
              {project.title}
            </p>
          </button>
        );
      })}
    </div>
  );
}
