import { Metadata } from 'next';
import BlogsPage from '@/components/pages/blogs';
import { getAllBlogSlugs, getBlogData } from '@/utils/getBlog';
import { createBlogObject } from '@/utils/createBlog';

export const metadata: Metadata = {
  title: 'All Blogs',
  description: 'Browse all blog posts about our project.',
};

export default async function Page() {
  const slugs = await getAllBlogSlugs();
  const blogs = await Promise.all(
    slugs.map(async ({ slug }) => {
      const blogData = await getBlogData(slug);
      return createBlogObject(slug, blogData);
    })
  );

  return <BlogsPage blogs={blogs} />;
}