import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogPage from '@/components/pages/blogs/blog';
import { getLocalizedPageContent } from '@/content/localizedPages';
import { getAllBlogSlugs, getBlogDataHtml } from '@/utils/getBlog';
import { createProcessedBlogObject } from '@/utils/createBlog';
import 'highlight.js/styles/github-dark.css';

import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  isSiteLanguage,
  resolveSiteLanguage,
} from '@/i18n/languageConfig';

interface BlogPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return SUPPORTED_LANGUAGES.flatMap((lang) =>
    slugs.map(({ slug }) => ({ lang, slug })),
  );
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
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
        canonical: `/${canonicalLang}/blogs/${encodeURIComponent(slug)}`,
      },
      openGraph: {
        title: blog.metadata.title,
        description: blog.metadata.description,
        images: blog.metadata.images,
        type: 'article',
      },
    };
  } catch {
    return getLocalizedPageContent(lang).missingBlog;
  }
}

export default async function Page({ params }: BlogPageProps) {
  try {
    const { slug } = await params;
    const blogData = await getBlogDataHtml(slug);
    const blog = createProcessedBlogObject(slug, blogData);
    
    return <BlogPage blog={blog} />;
  } catch {
    notFound();
  }
}