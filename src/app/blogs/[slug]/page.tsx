import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogPage from '@/components/pages/blogs/blog';
import { getAllBlogSlugs, getBlogDataHtml } from '@/utils/getBlog';
import { TProcessedBlogType } from '@/types/blog.type';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const blogData = await getBlogDataHtml(slug);
    const blog: TProcessedBlogType = {
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
  } catch (error) {
    console.error(error);
    return {
      title: 'Not Found',
      description: 'This blog post does not exist.',
    };
  }
}

export default async function Page({ params }: BlogPageProps) {
  try {
    const { slug } = await params;
    const blogData = await getBlogDataHtml(slug);
    const blog: TProcessedBlogType = {
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
    return <BlogPage blog={blog} />;
  } catch (error) {
    console.error(error);
    notFound();
  }
}