"use client";

import Image from "next/image";
import { TProcessedBlogType } from "@/types/blog.type";
import "@/styles/blog.css";
import { useLanguage } from "@/i18n/LanguageContext";
import RequirementsSheet from "./RequirementsSheet";
import BlogTableOfContents from "./BlogTableOfContents";

interface IBlogPage {
  blog: TProcessedBlogType;
}

const REQUIREMENTS_SHEET_BLOG_SLUG = "development-inquiry-estimate-checklist";

const BlogPage: React.FC<IBlogPage> = ({ blog }) => {
  const { t } = useLanguage();
  const localeText = t.blogUi;

  return (
    <div className="container mx-auto px-4 py-8 mt-[80px] max-w-7xl">
      <div className="lg:flex lg:gap-8 lg:items-start">
        {/* Sidebar wrapper - self-stretch so sticky works inside */}
        <aside className="hidden lg:block lg:w-56 xl:w-64 flex-shrink-0 self-stretch">
          <BlogTableOfContents />
        </aside>

        {/* Mobile TOC (floating button + drawer) */}
        <div className="lg:hidden">
          <BlogTableOfContents />
        </div>

        <main
          className="flex-1 min-w-0 max-w-4xl mx-auto"
          aria-label={`${localeText.blogPost}: ${blog.metadata.title}`}
        >
          <h1
            className="text-[clamp(2rem,4vw,3rem)] text-center font-bold mb-16 md:mb-24 relative text-gray-800 after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-1 after:bg-gradient-to-r after:from-purple-600 after:to-cyan-500 after:rounded"
          >
            {blog.metadata.title}
          </h1>
          <div className="my-4 flex flex-col md:flex-row gap-2 justify-between items-center mb-8">
            <p className="text-gray-500">{blog.metadata.date}</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {blog.metadata.tags && blog.metadata.tags?.length > 0 ? (
                blog.metadata?.tags?.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full bg-purple-100 text-purple-600 text-xs px-3 py-1"
                  >
                    {tag}
                  </div>
                ))
              ) : (
                <div className="text-gray-500 text-xs">{localeText.noTags}</div>
              )}
            </div>
          </div>
          {blog.metadata.images && blog.metadata.images[0] ? (
            <div className="mb-8 relative w-full rounded-2xl overflow-hidden">
              <Image
                src={blog.metadata.images[0]}
                alt={blog.metadata.title || localeText.blogImage}
                width={1200}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="group-hover:scale-125 transition-transform duration-500"
                priority
              />
            </div>
          ) : (
            <div className="w-full aspect-video bg-gradient-to-br from-purple-100 to-cyan-100 mb-8 rounded-2xl" />
          )}

          <article className="article prose prose-lg max-w-none bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-xl border border-purple-100 space-y-3">
            <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
            {blog.slug === REQUIREMENTS_SHEET_BLOG_SLUG && <RequirementsSheet />}
          </article>
        </main>
      </div>
    </div>
  );
};

export default BlogPage;