import { Metadata } from "next";
import { getAllBlogSlugs, getBlogData } from "@/utils/getBlog";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "All Blogs",
  description: "Browse all blog posts about our project.",
};

export default async function BlogsPage() {
  const slugs = getAllBlogSlugs();
  const blogs = await Promise.all(slugs.map(({ slug }) => getBlogData(slug)));

  return (
    <main className="container mx-auto px-4 py-8 mt-[50px] max-w-7xl">
      <h1
        className="text-[clamp(2rem,4vw,3rem)] text-center font-bold mb-16 md:mb-24 relative animate-titleGlow
        after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[100px]
        after:h-1 after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded after:animate-lineExpand
        translate-y-8 transition-all duration-700 ease-out"
      >
        All Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(({ slug, metadata }) => (
          <Link key={slug} href={`/blogs/${slug}`}>
            <div
              className="
                flex flex-col bg-dark-lighter p-4 rounded-lg hover:cursor-pointer group h-full
                border border-transparent
                transition-all duration-500
                hover:border-primary
                hover:shadow-[0_30px_60px_rgba(99,102,241,0.3)]
              "
            >
              {metadata?.images?.[0] ? (
                <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                  <Image
                    src={metadata.images[0]}
                    alt={metadata.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-125 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-gray-700 mb-4 rounded" />
              )}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="group-hover:text-primary transition-colors duration-300 font-semibold text-lg text-center line-clamp-2">
                    {metadata.title}
                  </h3>
                  <p
                    className="
                      my-2 text-center text-zinc-400 text-sm max-w-[90%] mx-auto
                      line-clamp-3
                    "
                  >
                    {metadata.description}
                  </p>
                </div>
                <div className="mt-4 flex flex-col md:flex-row gap-2 justify-between md:items-end">
                  <small className="text-center text-zinc-500 md:text-left">
                    {metadata.date}
                  </small>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                    {metadata.tags?.map((tag : string) => (
                      <div
                        key={tag}
                        className="rounded-full bg-primary/20 text-primary text-xs px-3 py-1"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
