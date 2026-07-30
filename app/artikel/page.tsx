import React from 'react';
import { db } from '@/lib/db';
import { articles, categories } from '@/lib/db/schema';
import { eq, desc, and, like, count } from 'drizzle-orm';
import { Metadata } from 'next';
import ArtikelContent from '../components/ArtikelContent';

export const metadata: Metadata = {
  title: "Info & Artikel Religi",
  description: "Dapatkan tips beribadah Umrah & Haji, kisah inspiratif, serta informasi terbaru dari Kiswah Tour & Travel.",
  openGraph: {
    title: "Info & Artikel Religi | Kiswah.id",
    description: "Dapatkan tips beribadah Umrah & Haji, kisah inspiratif, serta informasi terbaru dari Kiswah Tour & Travel.",
    url: "https://kiswah.id/artikel",
  }
};

export default async function ArtikelPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string; page?: string }>;
}) {
  const { search = '', category: categorySlug = '', page = '1' } = await searchParams;
  const currentPage = parseInt(page) || 1;
  const pageSize = 6;
  const offset = (currentPage - 1) * pageSize;

  // 1. Fetch Categories for filters
  const allCategories = await db.query.categories.findMany();

  // 2. Build where clause
  let categoryId: number | undefined;
  if (categorySlug) {
    const cat = allCategories.find((c) => c.slug === categorySlug);
    categoryId = cat?.id;
  }

  const whereClause = and(
    eq(articles.status, 'published'),
    search ? like(articles.title, `%${search}%`) : undefined,
    categoryId ? eq(articles.categoryId, categoryId) : undefined
  );

  // 3. Fetch Articles with pagination
  const publishedArticles = await db.query.articles.findMany({
    where: whereClause,
    orderBy: [desc(articles.createdAt)],
    limit: pageSize,
    offset: offset,
    with: {
      author: true,
      category: true,
    },
  });

  // 4. Get total count for pagination
  const [totalCountRes] = await db
    .select({ total: count() })
    .from(articles)
    .where(whereClause);
  
  const totalArticles = totalCountRes?.total || 0;
  const totalPages = Math.ceil(totalArticles / pageSize);

  return (
    <ArtikelContent
      publishedArticles={publishedArticles}
      allCategories={allCategories}
      search={search}
      categorySlug={categorySlug}
      currentPage={currentPage}
      totalArticles={totalArticles}
      totalPages={totalPages}
    />
  );
}

