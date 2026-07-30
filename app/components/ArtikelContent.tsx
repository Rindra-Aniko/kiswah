'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiCalendar, HiUser, HiArrowRight, HiChevronLeft, HiChevronRight, HiSearch } from 'react-icons/hi';
import hajiKhususImg from '@/public/image/haji_khusus.webp';
import ArticleFilters from '../artikel/ArticleFilters';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '@/lib/i18n/context';

interface ArtikelContentProps {
  publishedArticles: any[];
  allCategories: any[];
  search: string;
  categorySlug: string;
  currentPage: number;
  totalArticles: number;
  totalPages: number;
}

export default function ArtikelContent({
  publishedArticles,
  allCategories,
  search,
  categorySlug,
  currentPage,
  totalArticles,
  totalPages,
}: ArtikelContentProps) {
  const { dict, locale } = useLanguage();

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return '-';
    const date = new Date(dateStr.replace(' ', 'T'));
    if (isNaN(date.getTime())) return '-';
    return date.toLocaleDateString(locale === 'en' ? 'en-US' : 'id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins pb-20">
      {/* Header Section */}
      <div className="relative py-24 px-4 overflow-hidden">
        <Image
          src={hajiKhususImg}
          alt="Info Background"
          fill
          priority
          fetchPriority="high"
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center select-none pointer-events-none z-0"
        />
        <div className="absolute inset-0 bg-[#291F15]/85 mix-blend-multiply z-10" />
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {(dict.artikel as any)?.heroTitle || 'Wawasan & Berita'}
          </h1>
          <p className="text-amber-100/90 max-w-2xl mx-auto text-lg">
            {(dict.artikel as any)?.heroDesc || 'Temukan informasi terbaru seputar layanan Umroh, Haji, dan tips perjalanan ibadah dari Kiswah.id'}
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <Suspense fallback={<div className="h-20 bg-white rounded-2xl animate-pulse mb-12 shadow-sm" />}>
          <ScrollReveal animation="fade-up">
            <ArticleFilters categories={allCategories} />
          </ScrollReveal>
        </Suspense>

        {/* Results Info */}
        {(search || categorySlug) && (
          <ScrollReveal className="mb-8 text-gray-600 font-medium" animation="fade-right">
            {locale === 'en' ? 'Showing ' : 'Menampilkan '}
            <span className="text-[#291F15] font-bold">{totalArticles}</span>
            {locale === 'en' ? ' results' : ' hasil'}
            {search && <>{locale === 'en' ? ' for ' : ' untuk '}"<span className="text-[#291F15]">{search}</span>"</>}
            {categorySlug && <>{locale === 'en' ? ' in category ' : ' di kategori '}"<span className="text-[#291F15]">{allCategories.find(c => c.slug === categorySlug)?.name}</span>"</>}
          </ScrollReveal>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedArticles.map((article, index) => (
            <ScrollReveal
              key={article.id}
              animation="fade-up"
              delay={(index % 3) * 100}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <Link 
                href={`/artikel/${article.slug}`}
                className="flex-1 flex flex-col"
              >
                {/* Featured Image */}
                <div className="relative h-56 w-full bg-gray-200 overflow-hidden">
                  {article.featuredImage ? (
                    <Image 
                      src={article.featuredImage} 
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center text-amber-800 font-bold text-xl">
                      Kiswah.id
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-[#291F15] text-xs font-bold rounded-full shadow-sm border border-gray-100">
                      {article.category?.name || ((dict.artikel as any)?.generalCategory || 'Umum')}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-center gap-3 text-gray-500 text-xs mb-3 font-medium">
                    <div className="flex items-center gap-1">
                      <HiCalendar className="w-4 h-4 text-amber-600" />
                      <span>{formatDate(article.createdAt)}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <HiUser className="w-4 h-4 text-amber-600" />
                      <span>{article.author?.name || ((dict.artikel as any)?.byAdmin || 'Admin')}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-[#291F15] group-hover:text-amber-800 transition-colors line-clamp-2 mb-3 leading-tight">
                    {article.title}
                  </h2>
                  <div className="text-gray-600 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                    {(article.content || '').replace(/<[^>]*>?/gm, '').substring(0, 150)}...
                  </div>
                  <div className="flex items-center text-sm font-bold text-[#291F15] group-hover:text-amber-800 transition-all">
                    {(dict.artikel as any)?.readMore || 'Baca Selengkapnya'}
                    <HiArrowRight className="ml-2 w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {publishedArticles.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <HiSearch className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-[#291F15] mb-2">
              {(dict.artikel as any)?.noArticlesTitle || 'Tidak ditemukan artikel'}
            </h3>
            <p className="text-gray-500">
              {(dict.artikel as any)?.noArticlesDesc || 'Coba gunakan kata kunci lain atau pilih kategori berbeda.'}
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-2">
            {currentPage > 1 && (
              <Link
                href={{ query: { search, category: categorySlug, page: currentPage - 1 } }}
                className="p-2 border border-gray-300 rounded-lg hover:bg-white transition-colors"
              >
                <HiChevronLeft className="w-6 h-6" />
              </Link>
            )}
            
            <div className="flex items-center gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <Link
                  key={i + 1}
                  href={{ query: { search, category: categorySlug, page: i + 1 } }}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-all ${
                    currentPage === i + 1
                      ? 'bg-[#291F15] text-white shadow-md'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-[#291F15]'
                  }`}
                >
                  {i + 1}
                </Link>
              ))}
            </div>

            {currentPage < totalPages && (
              <Link
                href={{ query: { search, category: categorySlug, page: currentPage + 1 } }}
                className="p-2 border border-gray-300 rounded-lg hover:bg-white transition-colors"
              >
                <HiChevronRight className="w-6 h-6" />
              </Link>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
