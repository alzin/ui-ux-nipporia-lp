"use client";

import { Project } from "./ProjectData";

interface ProjectNavProps {
  projects: Project[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function ProjectNav({
  projects,
  activeIndex,
  onSelect,
}: ProjectNavProps) {
  const activeProject = projects[activeIndex];

  const handlePrev = () => {
    onSelect(activeIndex === 0 ? projects.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    onSelect(activeIndex === projects.length - 1 ? 0 : activeIndex + 1);
  };

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

        {/* Visit link */}
        <a
          href={activeProject.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
        >
          サイトを見る
          {/* External link icon */}
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={handlePrev}
          className="p-2.5 rounded-full bg-white/80 border border-purple-200 text-gray-700 hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 hover:scale-110"
          aria-label="前のプロジェクト"
        >
          {/* Chevron left */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`transition-all duration-500 rounded-full ${
                index === activeIndex
                  ? "w-8 h-3 bg-gradient-to-r from-purple-600 to-cyan-500"
                  : "w-3 h-3 bg-gray-300 hover:bg-purple-300"
              }`}
              aria-label={`プロジェクト ${index + 1} へ`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2.5 rounded-full bg-white/80 border border-purple-200 text-gray-700 hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 hover:scale-110"
          aria-label="次のプロジェクト"
        >
          {/* Chevron right */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
