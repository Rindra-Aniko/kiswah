import { MetadataRoute } from 'next';
import { db } from '@/lib/db';
import { articles } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kiswah.id';

  // 1. Fetch dynamic articles from the database
  let publishedArticles: { slug: string; updatedAt: string | null }[] = [];
  try {
    publishedArticles = await db.query.articles.findMany({
      where: eq(articles.status, 'published'),
      columns: {
        slug: true,
        updatedAt: true,
      },
    });
  } catch (error) {
    console.error('Error fetching articles for sitemap:', error);
  }

  // 2. Define static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/layanan',
    '/jadwal',
    '/artikel',
    '/tentang-kami',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 3. Format dynamic article routes
  const articleRoutes: MetadataRoute.Sitemap = publishedArticles.map((article) => {
    let lastMod = new Date();
    if (article.updatedAt) {
      // Convert SQLite 'YYYY-MM-DD HH:MM:SS' to ISO for Date constructor
      const parsedDate = new Date(article.updatedAt.replace(' ', 'T'));
      if (!isNaN(parsedDate.getTime())) {
        lastMod = parsedDate;
      }
    }

    return {
      url: `${baseUrl}/artikel/${article.slug}`,
      lastModified: lastMod,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...articleRoutes];
}
