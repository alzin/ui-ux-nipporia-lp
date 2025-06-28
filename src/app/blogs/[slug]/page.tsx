import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { getAllBlogSlugs, getBlogDataHtml } from "@/utils/getBlog";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  try {
    const { slug } = await params; // Await params here
    const { metadata } = await getBlogDataHtml(slug);

    return {
      title: metadata.title,
      description: metadata.description,
      openGraph: {
        title: metadata.title,
        description: metadata.description,
        images: metadata.images || [],
        type: "article",
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "This blog post does not exist.",
    };
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  try {
    const { slug } = await params; // Await params here
    const blog = await getBlogDataHtml(slug);

    return (
      <main className="container mx-auto px-4 py-8 max-w-4xl mt-[80px]">
        <h1
          className="text-[clamp(2rem,4vw,3rem)] text-center font-bold mb-16 md:mb-24 relative animate-titleGlow
          after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[100px]
          after:h-1 after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded after:animate-lineExpand
          translate-y-8 transition-all duration-700 ease-out"
        >
          {blog.metadata.title}
        </h1>

        <div className="my-4 flex flex-col md:flex-row gap-2 justify-between items-center">
          <p className="text-gray-500 mb-4">{blog.metadata.date}</p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {blog.metadata.tags?.map((tag: string) => (
              <div
                key={tag}
                className="rounded-full bg-primary/20 text-primary text-xs px-3 py-1"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {blog.metadata.images?.[0] && (
          <div className="mb-8 relative w-full h-80">
            <Image
              src={blog.metadata.images[0]}
              alt={blog.metadata.title}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
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
  } catch (error) {
    console.error(error);
    notFound();
  }
}