"use client";

import { TBlogType } from "@/types/blog.type";
import BlogCard from "./components/BlogCard";
import { useLanguage } from "@/i18n/LanguageContext";

interface IIndexProps {
  blogs: TBlogType[];
}

const BlogsPage: React.FC<IIndexProps> = ({ blogs }) => {
  const { t } = useLanguage();

  return (
    <main
      className="container mx-auto px-4 py-8 mt-[80px] max-w-7xl"
      aria-label={t.blogUi.allBlogsAria}
    >
      <h1
        className="text-[clamp(2rem,4vw,3rem)] text-center font-bold mb-16 md:mb-24 relative text-gray-800 after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-1 after:bg-gradient-to-r after:from-purple-600 after:to-cyan-500 after:rounded"
      >
        {t.blogUi.allBlogsTitle}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(({ slug, metadata }, _index) => (
          <BlogCard key={_index} metadata={metadata} slug={slug} />
        ))}
      </div>
    </main>
  );
};

export default BlogsPage;