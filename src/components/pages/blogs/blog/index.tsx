import Image from 'next/image';
import { TProcessedBlogType } from '@/types/blog.type';

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
        className="
          text-[clamp(2rem,4vw,3rem)] text-center font-bold mb-16 md:mb-24 relative animate-titleGlow
          after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[100px]
          after:h-1 after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded after:animate-lineExpand
          translate-y-8 transition-all duration-700 ease-out
        "
      >
        {blog.metadata.title}
      </h1>
      <div className="my-4 flex flex-col md:flex-row gap-2 justify-between items-center mb-8">
        <p className="text-zinc-500">{blog.metadata.date}</p>
        <div className="flex flex-wrap gap-2 justify-center md:justify-end">
          {blog.metadata.tags && blog.metadata.tags?.length > 0 ? (
            blog.metadata?.tags?.map((tag) => (
              <div key={tag} className="rounded-full bg-primary/20 text-primary text-xs px-3 py-1">
                {tag}
              </div>
            ))
          ) : (
            <div className="text-zinc-500 text-xs">No tags</div>
          )}
        </div>
      </div>
      {blog.metadata.images && blog.metadata.images[0] ? (
        <div className="mb-8 relative w-full h-80 rounded overflow-hidden">
          <Image
            src={blog.metadata.images[0]}
            alt={blog.metadata.title || "Blog Image"}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-125 transition-transform duration-500"
            priority
          />
        </div>
      ) : (
        <div className="w-full h-80 bg-gray-700 mb-8 rounded" />
      )}
      <article
        className="
          prose prose-invert prose-lg max-w-none
          bg-dark-lighter
          backdrop-blur-md
          rounded-xl
          p-6 md:p-10
          shadow-2xl
          transition-colors duration-300
          space-y-3
        "
        dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
      />
    </main>
  );
};

export default BlogPage;