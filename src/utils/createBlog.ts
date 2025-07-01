import { TBlogType, TProcessedBlogType } from '@/types/blog.type';

/**
 * Creates a blog object from raw blog data for listing pages
 */
export function createBlogObject(slug: string, blogData: TBlogType) {
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
  };
}

/**
 * Creates a processed blog object from raw blog data for individual blog pages
 */
export function createProcessedBlogObject(slug: string, blogData: TProcessedBlogType) {
  return {
    slug,
    metadata: {
      title: blogData.metadata.title,
      date: blogData.metadata.date,
      description: blogData.metadata.description,
      images: blogData.metadata.images || [],
      tags: blogData.metadata.tags || [],
    },
    contentHtml: blogData.contentHtml,
  };
}