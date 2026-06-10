import { MetadataRoute } from 'next';
import { db } from '@/lib/db';
import { articles } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Cache for 1 hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kiswah.id';

  // 1. Fetch dynamic articles from the database with error handling
  let publishedArticles: { slug: string; updatedAt: string | null }[] = [];
  try {
    publishedArticles = await db.query.articles.findMany({
      where: eq(articles.status, 'published'),
      columns: {
        slug: true,
        updatedAt: true,
      },
    }).catch((err) => {
      console.error('Sitemap DB Fetch Error:', err);
      return [];
    });
  } catch (error) {
    console.error('Error in sitemap generation:', error);
  }

  // 2. Define static routes
  const routes = [
    '',
    '/layanan',
    '/jadwal',
    '/artikel',
    '/tentang-kami',
  ];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 3. Format dynamic article routes
  const articleRoutes: MetadataRoute.Sitemap = (publishedArticles || []).map((article) => {
    let lastMod = new Date();
    if (article.updatedAt) {
      try {
        // Convert SQLite 'YYYY-MM-DD HH:MM:SS' to ISO for Date constructor
        const parsedDate = new Date(article.updatedAt.replace(' ', 'T'));
        if (!isNaN(parsedDate.getTime())) {
          lastMod = parsedDate;
        }
      } catch (e) {
        // Fallback to now
      }
    }

    return {
      url: `${baseUrl}/artikel/${article.slug}`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...articleRoutes];
}
