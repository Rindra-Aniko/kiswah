import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/testing-cache'],
      },
    ],
    sitemap: 'https://kiswah.id/sitemap.xml',
  };
}
