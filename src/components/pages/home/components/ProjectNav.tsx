"use client";

import { Project } from "./ProjectData";

interface ProjectNavProps {
  projects: Project[];
  activeIndex: number;
}

export default function ProjectNav({
  projects,
  activeIndex,
}: ProjectNavProps) {
  const activeProject = projects[activeIndex];

  return (
    <div className="w-full">
      {/* Project Info */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-purple-500 tracking-widest uppercase">
            Project {activeIndex + 1} / {projects.length}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 transition-all duration-500">
          {activeProject.title}
        </h3>

        <p className="text-gray-600 max-w-lg mx-auto text-sm md:text-base leading-relaxed mb-4 transition-all duration-500">
          {activeProject.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {activeProject.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/80 text-gray-700 border border-purple-200 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>


      </div>


    </div>
  );
}
