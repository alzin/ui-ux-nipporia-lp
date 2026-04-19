"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface TocHeading {
  id: string;
  text: string;
  level: number;
}

function useTocHeadings() {
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const article = document.querySelector("article.article");
    if (!article) return;

    const elements = article.querySelectorAll("h2, h3");
    const items: TocHeading[] = [];

    elements.forEach((el, index) => {
      if (!el.id) {
        el.id = `heading-${index}`;
      }
      items.push({
        id: el.id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      });
    });

    setHeadings(items);
    if (items.length > 0) setActiveId(items[0].id);
  }, []);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length > 0) {
        const sorted = visible.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        );
        setActiveId(sorted[0].target.id);
      }
    },
    []
  );

  useEffect(() => {
    if (headings.length === 0) return;

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0.1,
    });

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings, handleIntersect]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return { headings, activeId, scrollTo };
}

function TocList({
  headings,
  activeId,
  scrollTo,
  onItemClick,
}: {
  headings: TocHeading[];
  activeId: string;
  scrollTo: (id: string) => void;
  onItemClick?: () => void;
}) {
  return (
    <ul className="space-y-1">
      {headings.map(({ id, text, level }) => (
        <li key={id}>
          <button
            onClick={() => {
              scrollTo(id);
              onItemClick?.();
            }}
            className={`
              w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200
              min-h-[44px] flex items-center
              ${level === 3 ? "pl-6" : ""}
              ${activeId === id
                ? "bg-purple-100 text-purple-700 font-medium border-l-2 border-purple-600"
                : "text-gray-500 hover:text-gray-800 hover:bg-gray-50 active:bg-gray-100"
              }
            `}
          >
            <span className="line-clamp-2 leading-snug">{text}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

/** Desktop: sticky sidebar */
export function BlogTocDesktop() {
  const { t } = useLanguage();
  const { headings, activeId, scrollTo } = useTocHeadings();

  if (headings.length === 0) return null;

  return (
    <nav
      className="sticky top-[100px] w-full bg-white/80 backdrop-blur-md rounded-2xl border border-purple-100 shadow-lg"
      aria-label={t.blogUi.tableOfContents}
    >
      <div className="p-5">
        <h2 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-1 h-5 rounded-full bg-gradient-to-b from-purple-600 to-cyan-500" />
          {t.blogUi.tableOfContents}
        </h2>
        <TocList headings={headings} activeId={activeId} scrollTo={scrollTo} />
      </div>
    </nav>
  );
}

/** Mobile: inline after image, sticky to top on scroll */
export function BlogTocMobile() {
  const { t } = useLanguage();
  const { headings, activeId, scrollTo } = useTocHeadings();
  const [isExpanded, setIsExpanded] = useState(false);

  const activeHeading = headings.find((h) => h.id === activeId);

  if (headings.length === 0) return null;

  return (
    <nav
      className="lg:hidden sticky top-[72px] z-30 bg-white/95 backdrop-blur-md rounded-2xl border border-purple-100 shadow-md mb-6"
      aria-label={t.blogUi.tableOfContents}
    >
      {/* Toggle bar: shows current section */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 min-h-[48px] active:bg-purple-50 transition-colors duration-150 rounded-2xl"
        aria-expanded={isExpanded}
      >
        <span className="flex items-center gap-2 min-w-0">
          <span className="w-1 h-4 rounded-full bg-gradient-to-b from-purple-600 to-cyan-500 flex-shrink-0" />
          <span className="text-xs font-medium text-gray-800 truncate">
            {activeHeading?.text || t.blogUi.tableOfContents}
          </span>
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-gray-400 flex-shrink-0 ml-2 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
            }`}
        >
          <polyline points="6 8 10 12 14 8" />
        </svg>
      </button>

      {/* Expanded: heading list */}
      {isExpanded && (
        <div className="px-4 pb-3 max-h-[60vh] overflow-y-auto border-t border-purple-50">
          <TocList
            headings={headings}
            activeId={activeId}
            scrollTo={scrollTo}
            onItemClick={() => setIsExpanded(false)}
          />
        </div>
      )}
    </nav>
  );
}

export default BlogTocDesktop;
