"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface TocHeading {
  id: string;
  text: string;
  level: number;
}

const BlogTableOfContents = () => {
  const { t } = useLanguage();
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
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

    if (items.length > 0) {
      setActiveId(items[0].id);
    }
  }, []);

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    const visible = entries.filter((e) => e.isIntersecting);
    if (visible.length > 0) {
      const sorted = visible.sort(
        (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
      );
      setActiveId(sorted[0].target.id);
    }
  }, []);

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
      setIsOpen(false);
    }
  };

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-purple-600 text-white shadow-lg flex items-center justify-center hover:bg-purple-700 transition-colors"
        aria-label={t.blogUi.tableOfContents}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="3" y1="5" x2="17" y2="5" />
          <line x1="3" y1="10" x2="13" y2="10" />
          <line x1="3" y1="15" x2="15" y2="15" />
        </svg>
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          fixed lg:sticky top-0 lg:top-[100px]
          left-0 z-40 lg:z-auto
          h-screen lg:h-auto lg:max-h-[calc(100vh-120px)]
          w-72 lg:w-full
          bg-white/95 lg:bg-white/80
          backdrop-blur-md
          lg:rounded-2xl
          border-r lg:border border-purple-100
          shadow-xl lg:shadow-lg
          overflow-y-auto
          transition-transform duration-300 lg:transition-none
          scrollbar-thin
        `}
        aria-label={t.blogUi.tableOfContents}
      >
        <div className="p-5 pt-16 lg:pt-5">
          <h2 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-gradient-to-b from-purple-600 to-cyan-500" />
            {t.blogUi.tableOfContents}
          </h2>
          <ul className="space-y-1">
            {headings.map(({ id, text, level }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`
                    w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-200
                    ${level === 3 ? "pl-6" : ""}
                    ${
                      activeId === id
                        ? "bg-purple-100 text-purple-700 font-medium border-l-2 border-purple-600"
                        : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                    }
                  `}
                >
                  <span className="line-clamp-2 leading-snug">{text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default BlogTableOfContents;
