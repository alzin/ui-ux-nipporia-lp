import Image from "next/image";
import { TProcessedBlogType } from "@/types/blog.type";
import "@/styles/blog.css";

interface IBlogPage {
  blog: TProcessedBlogType;
}

const BlogPage: React.FC<IBlogPage> = ({ blog }) => {
  return (
    <main
      className="container mx-auto px-4 py-8 max-w-4xl mt-[80px]"
      aria-label={`Blog post: ${blog.metadata.title}`}
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
            <div className="text-gray-500 text-xs">No tags</div>
          )}
        </div>
      </div>
      {blog.metadata.images && blog.metadata.images[0] ? (
        <div className="mb-8 relative w-full rounded-2xl overflow-hidden">
          <Image
            src={blog.metadata.images[0]}
            alt={blog.metadata.title || "Blog Image"}
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

      <article
        className="article prose prose-lg max-w-none bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-xl border border-purple-100 space-y-3"
        dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
      />
    </main>
  );
};

export default BlogPage;