import { getAllBlogSlugs, getBlogData } from '@/utils/getBlog';
import { createBlogObject } from '@/utils/createBlog';

export type BlogListItem = ReturnType<typeof createBlogObject>;

export function fetchBlogsForPage(): BlogListItem[] {
  const slugs = getAllBlogSlugs();
  return slugs.map(({ slug }) => {
    const blogData = getBlogData(slug);
    return createBlogObject(slug, blogData);
  });
}
