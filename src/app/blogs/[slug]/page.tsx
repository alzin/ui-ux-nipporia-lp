import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogPage from '@/components/pages/blogs/blog';
import { getAllBlogSlugs, getBlogDataHtml } from '@/utils/getBlog';
import { createProcessedBlogObject } from '@/utils/createBlog';

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
  } catch (error) {
    console.error('Error generating metadata:', error);
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
    const blog = createProcessedBlogObject(slug, blogData);
    
    return <BlogPage blog={blog} />;
  } catch (error) {
    console.error('Error loading blog page:', error);
    notFound();
  }
}