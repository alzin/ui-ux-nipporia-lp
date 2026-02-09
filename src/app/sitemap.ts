import { MetadataRoute } from 'next';
import { baseUrl } from '@/utils/baseUrl';
import { getAllBlogSlugs } from '@/utils/getBlog';

export default function sitemap(): MetadataRoute.Sitemap {
    const blogsData = getAllBlogSlugs()

    const staticUrls: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.8,
        },
    ];

    const dynamicBlogUrls: MetadataRoute.Sitemap = blogsData.map((blog) => ({
        url: `${baseUrl}/blogs/${encodeURIComponent(blog.slug)}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.7,
    }));

    return [
        ...staticUrls,
        ...dynamicBlogUrls,
    ];
}