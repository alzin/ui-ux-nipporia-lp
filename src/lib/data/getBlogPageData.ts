import { getBlogDataHtml } from '@/utils/getBlog';
import { createProcessedBlogObject } from '@/utils/createBlog';

export type ProcessedBlog = ReturnType<typeof createProcessedBlogObject>;

export async function fetchBlogForPage(slug: string): Promise<ProcessedBlog | null> {
  try {
    const blogData = await getBlogDataHtml(slug);
    return createProcessedBlogObject(slug, blogData);
  } catch {
    return null;
  }
}
