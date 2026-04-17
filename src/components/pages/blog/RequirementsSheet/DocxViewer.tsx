"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

export interface DocxViewerProps {
  pages: string[];
  title: string;
  viewOnlyLabel: string;
  pageLabel: string;
  previousLabel: string;
  nextLabel: string;
  zoomInLabel: string;
  zoomOutLabel: string;
}

const ZOOM_MIN = 0.8;
const ZOOM_MAX = 2;
const ZOOM_STEP = 0.2;

export const DocxViewer: React.FC<DocxViewerProps> = ({
  pages,
  title,
  viewOnlyLabel,
  pageLabel,
  previousLabel,
  nextLabel,
  zoomInLabel,
  zoomOutLabel,
}) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  const blockCopy = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
  }, []);

  const goPrev = useCallback(() => {
    setPageIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setPageIndex((i) => Math.min(pages.length - 1, i + 1));
  }, [pages.length]);

  const zoomIn = useCallback(() => {
    setZoom((z) => Math.min(ZOOM_MAX, +(z + ZOOM_STEP).toFixed(2)));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((z) => Math.max(ZOOM_MIN, +(z - ZOOM_STEP).toFixed(2)));
  }, []);

  return (
    <div
      className="relative w-full rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-cyan-50 shadow-lg overflow-hidden"
      onContextMenu={blockCopy}
      onCopy={blockCopy}
      onCut={blockCopy}
      onDragStart={blockCopy}
      aria-label={title}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-white/70 backdrop-blur border-b border-purple-100">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <span
            className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold"
            aria-label={viewOnlyLabel}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            {viewOnlyLabel}
          </span>
          <span className="text-gray-500 text-xs">
            {pageLabel} {pageIndex + 1} / {pages.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={zoomOut}
            aria-label={zoomOutLabel}
            className="w-8 h-8 rounded-full border border-purple-200 bg-white text-purple-600 hover:bg-purple-100 transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={zoom <= ZOOM_MIN}
          >
            −
          </button>
          <span className="text-xs text-gray-600 w-12 text-center tabular-nums">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={zoomIn}
            aria-label={zoomInLabel}
            className="w-8 h-8 rounded-full border border-purple-200 bg-white text-purple-600 hover:bg-purple-100 transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={zoom >= ZOOM_MAX}
          >
            +
          </button>
        </div>
      </div>

      <div
        className="relative overflow-auto bg-neutral-100 select-none"
        style={{ maxHeight: "70vh" }}
      >
        <div className="min-h-[60vh] flex items-start justify-center p-4 md:p-6">
          <div
            className="relative shadow-xl bg-white rounded-sm"
            style={{
              width: `${100 * zoom}%`,
              maxWidth: `${900 * zoom}px`,
              transition: "width 0.2s ease",
            }}
          >
            <Image
              src={pages[pageIndex]}
              alt={`${title} - ${pageLabel} ${pageIndex + 1}`}
              width={1240}
              height={1754}
              sizes="(max-width: 768px) 100vw, 900px"
              className="w-full h-auto block pointer-events-none select-none"
              draggable={false}
              priority={pageIndex === 0}
            />
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

      <div className="flex items-center justify-between gap-3 px-4 py-3 bg-white/70 backdrop-blur border-t border-purple-100">
        <button
          type="button"
          onClick={goPrev}
          disabled={pageIndex === 0}
          className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-purple-200 bg-white text-sm text-purple-700 hover:bg-purple-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span aria-hidden="true">‹</span>
          {previousLabel}
        </button>

        <div className="hidden sm:flex items-center gap-1 flex-wrap justify-center max-w-[50%]">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPageIndex(i)}
              aria-label={`${pageLabel} ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === pageIndex
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 scale-125"
                  : "bg-purple-200 hover:bg-purple-300"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={pageIndex === pages.length - 1}
          className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-purple-200 bg-white text-sm text-purple-700 hover:bg-purple-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {nextLabel}
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  );
};

export default DocxViewer;
