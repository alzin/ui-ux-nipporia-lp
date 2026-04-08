import BlogsPage from '@/components/pages/blogs';
import { getLocalizedPageContent } from '@/content/localizedPages';
import { resolveSiteLanguage } from '@/i18n/serverLanguage';
import { buildBlogsPageSchemas } from '@/lib/schemas/blogsPageSchemas';
import { SchemaInjector } from '@/components/common/components/SchemaInjector';
import { generateBlogsMetadata } from '@/lib/metadata/blogsMetadata';
import { fetchBlogsForPage } from '@/lib/data/getBlogsListData';

interface BlogsRouteProps {
  params: Promise<{ lang: string }>;
}

export { generateBlogsMetadata as generateMetadata };

export default async function Page({ params }: BlogsRouteProps) {
  const { lang: routeLang } = await params;
  const lang = resolveSiteLanguage(routeLang);
  const localized = getLocalizedPageContent(lang).blogs;
  const blogs = fetchBlogsForPage();

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
