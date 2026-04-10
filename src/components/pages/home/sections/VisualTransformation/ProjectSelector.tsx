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
    <div className="relative z-10 mt-3 md:mt-4 px-2 sm:px-3 md:px-5 lg:px-8 pb-4 md:pb-5 flex flex-wrap items-center gap-2 md:gap-3">
      {projects.map((project, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={project.id}
            onClick={() => onSelect(index)}
            disabled={isTransitioning}
            className={`${isRTL ? "text-right" : "text-left"} rounded-full border px-3.5 md:px-4 py-2 md:py-2.5 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${isActive ? "bg-white/95 border-purple-200 shadow-lg shadow-purple-900/10" : "bg-white/70 border-white/75 hover:bg-white/90 hover:border-purple-100 hover:shadow-md hover:shadow-purple-900/5"} ${isTransitioning ? "cursor-wait" : "cursor-pointer"}`}
          >
            <p className="text-xs md:text-sm font-semibold text-slate-900 truncate">
              {project.title}
            </p>
          </button>
        );
      })}
    </div>
  );
}
