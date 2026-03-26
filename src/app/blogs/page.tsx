import { Metadata } from 'next';
import BlogsPage from '@/components/pages/blogs';
import { getAllBlogSlugs, getBlogData } from '@/utils/getBlog';
import { createBlogObject } from '@/utils/createBlog';
import { getRequestLanguage, type SiteLanguage } from '@/i18n/serverLanguage';

const blogsMetadataByLanguage: Record<SiteLanguage, Metadata> = {
  ja: {
    title: 'ブログ一覧',
    description: '当サイトのブログ記事を一覧でご覧いただけます。',
  },
  en: {
    title: 'All Blogs',
    description: 'Browse all blog posts about our project.',
  },
  ar: {
    title: 'جميع المقالات',
    description: 'تصفح جميع مقالات المدونة الخاصة بمشاريعنا.',
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getRequestLanguage();
  return blogsMetadataByLanguage[lang];
}

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