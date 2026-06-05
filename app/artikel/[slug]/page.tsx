import React from 'react';
import { db } from '@/lib/db';
import { articles } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowLeft, HiCalendar, HiUser, HiPencil } from 'react-icons/hi';
import { getSession } from '@/lib/auth';
import { Metadata } from 'next';

export const runtime = 'edge';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await db.query.articles.findFirst({
    where: eq(articles.slug, slug),
  });

  if (!article || article.status !== 'published') {
    return {};
  }

  // Remove HTML tags for clean description
  const cleanDescription = article.content
    ? article.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...'
    : 'Baca artikel selengkapnya di Kiswah.id.';

  return {
    title: article.title,
    description: cleanDescription,
    openGraph: {
      title: article.title,
      description: cleanDescription,
      url: `https://kiswah.id/artikel/${slug}`,
      type: 'article',
      images: article.featuredImage ? [{ url: article.featuredImage }] : [],
    },
  };
}

export default async function PublicArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const session = await getSession();
  const { slug } = await params;

  const article = await db.query.articles.findFirst({
    where: eq(articles.slug, slug),
    with: {
      author: true,
      category: true,
    },
  });

  if (!article || article.status !== 'published') {
    notFound();
  }

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return '-';
    const date = new Date(dateStr.replace(' ', 'T'));
    if (isNaN(date.getTime())) return '-';
    const day = date.getDate();
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Article Header / Hero */}
      <div className="relative h-[400px] w-full bg-gray-900">
        {article.featuredImage ? (
          <Image 
            src={article.featuredImage} 
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-[#291F15] to-[#1a140d] opacity-80" />
        )}
        
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-4xl mx-auto px-4 w-full pb-12">
            <Link 
              href="/artikel" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm font-medium"
            >
              <HiArrowLeft className="w-4 h-4" />
              Kembali ke Berita
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm">
              {article.category && (
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-500 text-[#291F15] text-xs font-bold rounded-full">
                    {article.category.name}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <HiUser className="w-5 h-5 text-amber-400" />
                <span className="font-semibold">{article.author?.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCalendar className="w-5 h-5 text-amber-400" />
                <span>{formatDate(article.createdAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <article 
          className="prose prose-lg lg:prose-xl max-w-none prose-brown prose-img:rounded-2xl prose-headings:text-[#291F15] prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-amber-700 prose-strong:text-[#291F15]"
          dangerouslySetInnerHTML={{ __html: article.content || '' }}
        />
        
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500 italic">
            Terakhir diperbarui: {formatDate(article.updatedAt)}
          </div>
          
          <div className="flex items-center gap-4">
            {session && (
              <Link 
                href={`/admin/dashboard/articles/${article.id}/edit`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 rounded-lg text-sm font-bold transition-all shadow-sm"
              >
                <HiPencil className="w-4 h-4" />
                Edit Artikel
              </Link>
            )}

            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#291F15]">Bagikan:</span>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all" />
                <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all" />
                <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
