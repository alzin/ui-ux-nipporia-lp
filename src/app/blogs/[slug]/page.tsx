import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogPage from '@/components/pages/blogs/blog';
import { getAllBlogSlugs, getBlogDataHtml } from '@/utils/getBlog';
import { createProcessedBlogObject } from '@/utils/createBlog';
import { getRequestLanguage, type SiteLanguage } from '@/i18n/serverLanguage';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

const missingPostMetadataByLanguage: Record<SiteLanguage, Metadata> = {
  ja: {
    title: '記事が見つかりません',
    description: '指定されたブログ記事は存在しません。',
  },
  en: {
    title: 'Not Found',
    description: 'This blog post does not exist.',
  },
  ar: {
    title: 'المقال غير موجود',
    description: 'مقال المدونة المطلوب غير موجود.',
  },
};

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const blogData = await getBlogDataHtml(slug);
    const blog = createProcessedBlogObject(slug, blogData);
    
    return {
      title: blog.metadata.title,
      description: blog.metadata.description,
      openGraph: {
        title: blog.metadata.title,
        description: blog.metadata.description,
        images: blog.metadata.images,
        type: 'article',
      },
    };
  } catch {
    const lang = await getRequestLanguage();
    return missingPostMetadataByLanguage[lang];
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