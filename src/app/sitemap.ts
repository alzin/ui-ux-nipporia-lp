import { MetadataRoute } from 'next';
import { baseUrl } from '@/utils/baseUrl';
import { getAllBlogSlugs } from '@/utils/getBlog';
import { SUPPORTED_LANGUAGES } from '@/i18n/languageConfig';
import { localizePath } from '@/i18n/localizedPath';

export default function sitemap(): MetadataRoute.Sitemap {
    const blogsData = getAllBlogSlugs();
    const now = new Date().toISOString();

    const staticPaths = [
        { path: '/', changeFrequency: 'daily' as const, priority: 1.0 },
        { path: '/blogs', changeFrequency: 'daily' as const, priority: 0.8 },
        { path: '/privacy-policy', changeFrequency: 'monthly' as const, priority: 0.4 },
        { path: '/terms-of-service', changeFrequency: 'monthly' as const, priority: 0.4 },
        { path: '/commerce-disclosure', changeFrequency: 'monthly' as const, priority: 0.4 },
    ];

    const localizedStaticUrls: MetadataRoute.Sitemap = SUPPORTED_LANGUAGES.flatMap((lang) =>
        staticPaths.map(({ path, changeFrequency, priority }) => ({
            url: `${baseUrl}${localizePath(lang, path)}`,
            lastModified: now,
            changeFrequency,
            priority,
        }))
    );

    const localizedBlogUrls: MetadataRoute.Sitemap = SUPPORTED_LANGUAGES.flatMap((lang) =>
        blogsData.map((blog) => ({
            url: `${baseUrl}${localizePath(lang, `/blogs/${encodeURIComponent(blog.slug)}`)}`,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }))
    );

    return [
        ...localizedStaticUrls,
        ...localizedBlogUrls,
    ];
}