import { Metadata } from 'next';
import BlogsPage from '@/components/pages/blogs';
import { getAllBlogSlugs, getBlogData } from '@/utils/getBlog';
import { TBlogType } from '@/types/blog.type';

export const metadata: Metadata = {
  title: 'All Blogs',
  description: 'Browse all blog posts about our project.',
};

export default async function Page() {
  const slugs = await getAllBlogSlugs();
  const blogs = await Promise.all(
    slugs.map(async ({ slug }) => {
      const blogData = await getBlogData(slug);
      return {
        slug,
        metadata: {
          title: blogData.metadata.title,
          date: blogData.metadata.date,
          description: blogData.metadata.description,
          images: blogData.metadata.images || [],
          tags: blogData.metadata.tags || [],
        },
        content: blogData.content,
      } as TBlogType;
    })
  );

  return <BlogsPage blogs={blogs} />;
}