import { TBlogType, TProcessedBlogType } from '@/types/blog.type';

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

export function createProcessedBlogObject(slug: string, blogData: TProcessedBlogType) {
  return {
    slug,
    metadata: {
      title: blogData.metadata.title,
      metaTitle: blogData.metadata.metaTitle,
      date: blogData.metadata.date,
      description: blogData.metadata.description,
      images: blogData.metadata.images || [],
      tags: blogData.metadata.tags || [],
    },
    contentHtml: blogData.contentHtml,
  };
}