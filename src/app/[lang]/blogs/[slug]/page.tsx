import { notFound } from 'next/navigation';
import BlogPage from '@/components/pages/blogs/blog';
import { SchemaInjector } from '@/components/common/components/SchemaInjector';
import { getLocalizedPageContent } from '@/content/localizedPages';
import { getAllBlogSlugs } from '@/utils/getBlog';
import { baseUrl } from '@/utils/baseUrl';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/jsonld';
import { fetchBlogForPage } from '@/lib/data/getBlogPageData';
import { generateBlogMetadata } from '@/lib/metadata/blogMetadata';
import { SUPPORTED_LANGUAGES, resolveSiteLanguage } from '@/i18n/languageConfig';
import 'highlight.js/styles/github-dark.css';

interface BlogPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return SUPPORTED_LANGUAGES.flatMap((lang) =>
    slugs.map(({ slug }) => ({ lang, slug })),
  );
}

export { generateBlogMetadata as generateMetadata };

export default async function Page({ params }: BlogPageProps) {
  const { slug, lang: routeLang } = await params;
  const lang = resolveSiteLanguage(routeLang);
  const blog = await fetchBlogForPage(slug);
  if (!blog) notFound();

  const localized = getLocalizedPageContent(lang).blogs;
  const schemas = [
    buildArticleSchema({
      lang,
      slug,
      title: blog.metadata.title,
      description: blog.metadata.description,
      date: blog.metadata.date,
      images: blog.metadata.images,
      tags: blog.metadata.tags,
    }),
    buildBreadcrumbSchema([
      { name: 'Nipporia', url: `${baseUrl}/${lang}` },
      { name: localized.title, url: `${baseUrl}/${lang}/blogs` },
      {
        name: blog.metadata.title ?? slug,
        url: `${baseUrl}/${lang}/blogs/${encodeURIComponent(slug)}`,
      },
    ]),
  ];

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <BlogPage blog={blog} />
    </>
  );
}
