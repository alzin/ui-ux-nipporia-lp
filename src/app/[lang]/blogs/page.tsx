import BlogsPage from '@/components/pages/blogs';
import { getLocalizedPageContent } from '@/content/localizedPages';
import { getAllBlogSlugs, getBlogData } from '@/utils/getBlog';
import { createBlogObject } from '@/utils/createBlog';
import { resolveSiteLanguage } from '@/i18n/serverLanguage';
import { buildBlogsPageSchemas } from '@/lib/schemas/blogsPageSchemas';
import { SchemaInjector } from '@/components/common/components/SchemaInjector';
import { generateBlogsMetadata } from '@/lib/metadata/blogsMetadata';

interface BlogsRouteProps {
  params: Promise<{ lang: string }>;
}

export { generateBlogsMetadata as generateMetadata };

export default async function Page({ params }: BlogsRouteProps) {
  const { lang: routeLang } = await params;
  const lang = resolveSiteLanguage(routeLang);
  const localized = getLocalizedPageContent(lang).blogs;

  const slugs = await getAllBlogSlugs();
  const blogs = await Promise.all(
    slugs.map(async ({ slug }) => {
      const blogData = await getBlogData(slug);
      return createBlogObject(slug, blogData);
    })
  );

  const schemas = buildBlogsPageSchemas(
    lang,
    localized,
    blogs.map((b) => ({
      slug: b.slug,
      title: b.metadata.title,
      description: b.metadata.description,
      date: b.metadata.date,
    }))
  );

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <BlogsPage blogs={blogs} />
    </>
  );
}
