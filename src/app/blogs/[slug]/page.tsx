import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllBlogSlugs, getBlogDataHtml } from "@/utils/getBlog";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map(({ slug } : {slug: string}) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const { metadata } = await getBlogDataHtml(params.slug);

    return {
      title: metadata.title,
      description: metadata.description || "Read this blog post.",
      openGraph: {
        title: metadata.title,
        description: metadata.description || "Read this blog post.",
        type: "article",
      },
    };
  } catch (error) {
    console.log(error)
    return {
      title: "Blog Not Found",
      description: "This blog post does not exist."
    };
  }
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const blog = await getBlogDataHtml(slug);

    return (
      <main className="prose mx-auto p-4">
        <h1>{blog.metadata.title}</h1>
        <p><small>{blog.metadata.date}</small></p>
        <article dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
      </main>
    );
  } catch (error) {
    console.log(error)
    notFound();
  }
}
