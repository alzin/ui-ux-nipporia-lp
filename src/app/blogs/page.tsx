import { Metadata } from "next";
import { getAllBlogSlugs, getBlogData } from "@/utils/getBlog";

export const metadata: Metadata = {
  title: "All Blogs",
  description: "Browse all blog posts about our project."
};

export default function BlogsPage() {
  const blogs = getAllBlogSlugs().map(({ slug }) => getBlogData(slug));

  return (
    <main className="prose p-4 m-[50px]">
      <h1>All Blogs</h1>
      <ul>
        {blogs.map(({ slug, metadata }) => (
          <li key={slug}>
            <a href={`/blogs/${slug}`}>
              <strong>{metadata.title}</strong>
            </a>
            <br />
            <small>{metadata.date}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
