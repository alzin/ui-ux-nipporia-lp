import { TMetaData } from "@/types/blog.type";
import Image from "next/image";
import Link from "next/link";

interface IBlogCardProps {
  slug: string;
  metadata: TMetaData;
}

const BlogCard = ({ slug, metadata }: IBlogCardProps) => {
  // Provide fallback values for optional fields
  const title = metadata.title || "Untitled";
  const description = metadata.description || "No description available";
  const date = metadata.date || "No date";
  const images = metadata.images || [];
  const tags = metadata.tags || [];

  return (
    <Link
      key={slug}
      href={`/blogs/${slug}`}
      aria-label={`Read blog post: ${title}`}
    >
      <div
        className="
                flex flex-col bg-dark-lighter p-4 rounded-lg hover:cursor-pointer group h-full
                border border-transparent
                transition-all duration-500
                hover:border-primary
                hover:shadow-[0_30px_60px_rgba(99,102,241,0.3)]
              "
      >
        {images[0] ? (
          <div className="relative w-full aspect-video mb-4 rounded overflow-hidden">
            <Image
              src={images[0]}
              alt={title}
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="group-hover:scale-125 transition-transform duration-500 rounded"
              priority
            />
          </div>
        ) : (
          <div className="w-full aspect-video bg-gray-700 mb-4 rounded" />
        )}
        <div className="flex flex-col flex-1 justify-between">
          <div>
            <h3 className="group-hover:text-primary transition-colors duration-300 font-semibold text-lg text-center line-clamp-2">
              {title}
            </h3>
            <p className="my-2 text-center text-zinc-400 text-sm max-w-[90%] mx-auto line-clamp-3">
              {description}
            </p>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-2 justify-between md:items-end">
            <small className="text-center text-zinc-500 md:text-left">
              {date}
            </small>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end md:max-w-[70%]">
              {tags.length > 0 ? (
                tags.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full bg-primary/20 text-primary text-xs px-3 py-1"
                  >
                    {tag}
                  </div>
                ))
              ) : (
                <div className="text-zinc-500 text-xs">No tags</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
