"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

const FREE_PAGES = 7;

export interface DocxViewerProps {
  pages: string[];
  title: string;
  pageLabel: string;
}

export const DocxViewer: React.FC<DocxViewerProps> = ({
  pages,
  title,
  pageLabel,
}) => {
  const [pageIndex, setPageIndex] = useState(0);
  const isLocked = pageIndex >= FREE_PAGES;

  const blockCopy = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
  }, []);

  const goPrev = useCallback(() => {
    setPageIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setPageIndex((i) => Math.min(pages.length - 1, i + 1));
  }, [pages.length]);

  return (
    <div
      className="relative w-full"
      onContextMenu={blockCopy}
      onCopy={blockCopy}
      onCut={blockCopy}
      onDragStart={blockCopy}
      aria-label={title}
    >
      {/* Image viewer with side arrows */}
      <div className="relative group">
        {/* Left arrow */}
        <button
          type="button"
          onClick={goPrev}
          disabled={pageIndex === 0}
          aria-label="Previous page"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-purple-700 shadow-md transition disabled:opacity-0 disabled:pointer-events-none -translate-x-1/2 md:-translate-x-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          type="button"
          onClick={goNext}
          disabled={pageIndex === pages.length - 1}
          aria-label="Next page"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-purple-700 shadow-md transition disabled:opacity-0 disabled:pointer-events-none translate-x-1/2 md:translate-x-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Page image */}
        <div className="relative select-none">
          <div className="flex items-start justify-center">
            <div className="relative bg-white rounded-sm">
              <Image
                src={pages[pageIndex]}
                alt={`${title} - ${pageLabel} ${pageIndex + 1}`}
                width={1240}
                height={1754}
                sizes="(max-width: 768px) 80vw, 500px"
                className={`w-full h-auto block pointer-events-none select-none max-w-[500px] transition-[filter] duration-300 ${isLocked ? "blur-md" : ""}`}
                draggable={false}
                priority={pageIndex === 0}
              />
              {/* Lock overlay for pages beyond free preview */}
              {isLocked && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm rounded-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600"
                    aria-hidden="true"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              )}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ background: "transparent" }}
                onContextMenu={blockCopy}
                onMouseDown={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Page dots */}
      <div className="flex items-center gap-1.5 justify-center mt-4">
        {pages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setPageIndex(i)}
            aria-label={`${pageLabel} ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === pageIndex
                ? "bg-gradient-to-r from-purple-600 to-cyan-500 scale-125"
                : i >= FREE_PAGES
                  ? "bg-gray-300 hover:bg-gray-400"
                  : "bg-purple-200 hover:bg-purple-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DocxViewer;
