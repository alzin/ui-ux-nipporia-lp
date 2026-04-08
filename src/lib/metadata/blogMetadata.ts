import type { Metadata } from 'next';
import { getLocalizedPageContent } from '@/content/localizedPages';
import { getBlogDataHtml } from '@/utils/getBlog';
import { createProcessedBlogObject } from '@/utils/createBlog';
import { baseUrl } from '@/utils/baseUrl';
import {
  DEFAULT_LANGUAGE,
  isSiteLanguage,
  resolveSiteLanguage,
} from '@/i18n/languageConfig';

export async function generateBlogMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { slug, lang: routeLang } = await params;
  const lang = resolveSiteLanguage(routeLang);

  try {
    const blogData = await getBlogDataHtml(slug);
    const blog = createProcessedBlogObject(slug, blogData);
    const canonicalLang = isSiteLanguage(routeLang) ? routeLang : DEFAULT_LANGUAGE;

    return {
      title: blog.metadata.title,
      description: blog.metadata.description,
      alternates: {
        canonical: `${baseUrl}/${canonicalLang}/blogs/${encodeURIComponent(slug)}`,
      },
      openGraph: {
        title: blog.metadata.title,
        description: blog.metadata.description,
        images: blog.metadata.images,
        type: 'article',
        publishedTime: blog.metadata.date
          ? new Date(blog.metadata.date).toISOString()
          : undefined,
        authors: [`${baseUrl}`],
        tags: blog.metadata.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.metadata.title,
        description: blog.metadata.description,
        images: blog.metadata.images,
      },
    };
  } catch {
    return getLocalizedPageContent(lang).missingBlog;
  }
}
