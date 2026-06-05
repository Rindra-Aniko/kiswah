'use client';

import React, { useState, useTransition } from 'react';
import dynamic from 'next/dynamic';
import { updateArticleAction } from '@/lib/actions/articles';
import { HiArrowLeft, HiSave } from 'react-icons/hi';
import Link from 'next/link';

const TiptapEditor = dynamic(() => import('@/app/components/Editor.Component'), {
  ssr: false,
  loading: () => <div className="h-[300px] w-full bg-gray-50 animate-pulse rounded-lg border border-gray-200" />
});

export default function EditArticleForm({ article, categories }: { article: any, categories: any[] }) {
  const [content, setContent] = useState(article.content);
  const [title, setTitle] = useState(article.title);
  const [slug, setSlug] = useState(article.slug);
  const [status, setStatus] = useState<'draft' | 'published'>(article.status);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    // Only auto-generate slug if it's not a published article or if slug is empty
    if (article.status !== 'published' || !slug) {
      setSlug(newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    formData.append('content', content);

    startTransition(async () => {
      const result = await updateArticleAction(article.id, formData);
      if (result?.error) {
        setError(result.error);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins pb-12">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/admin/dashboard/articles" 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
            >
              <HiArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-bold text-[#291F15]">Edit Artikel</h1>
          </div>
          <div className="flex gap-3">
            <button 
              form="article-form"
              type="submit"
              onClick={() => setStatus('draft')}
              disabled={isPending}
              className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 ${
                status === 'draft' ? 'bg-white text-gray-700' : 'bg-gray-100 text-gray-500'
              }`}
            >
              Simpan Draft
            </button>
            <button 
              form="article-form"
              type="submit"
              onClick={() => setStatus('published')}
              disabled={isPending}
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-[#291F15] rounded-lg hover:bg-[#291F15]/90 disabled:opacity-50 shadow-sm"
            >
              <HiSave className="w-5 h-5" />
              Perbarui & Publikasikan
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {error && (
          <div className="mb-6 bg-red-50 text-red-500 p-4 rounded-lg text-sm border border-red-100 font-medium">
            {error}
          </div>
        )}

        <form id="article-form" onSubmit={handleSubmit} className="space-y-8">
          <input type="hidden" name="status" value={status} />
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
            <div>
              <label className="block text-sm font-bold text-[#291F15] mb-2">Judul Artikel</label>
              <input 
                name="title"
                type="text" 
                required 
                value={title}
                onChange={handleTitleChange}
                className="w-full px-4 py-3 text-lg font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#291F15] focus:border-transparent outline-none transition-all" 
                placeholder="Masukkan judul artikel..." 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#291F15] mb-2">Slug (URL)</label>
                <div className="flex items-center">
                  <span className="bg-gray-100 border border-r-0 border-gray-300 px-3 py-2 rounded-l-lg text-sm text-gray-500 font-mono">
                    /
                  </span>
                  <input 
                    name="slug"
                    type="text" 
                    required 
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-[#291F15] focus:border-transparent outline-none transition-all text-sm font-mono" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#291F15] mb-2">Kategori</label>
                <select 
                  name="categoryId"
                  defaultValue={article.categoryId || ""}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#291F15] focus:border-transparent outline-none transition-all text-sm bg-white"
                >
                  <option value="">Pilih Kategori...</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#291F15] mb-2">Featured Image (URL)</label>
                <input 
                  name="featuredImage"
                  type="url" 
                  defaultValue={article.featuredImage}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#291F15] focus:border-transparent outline-none transition-all text-sm" 
                  placeholder="https://example.com/image.jpg" 
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <label className="block text-sm font-bold text-[#291F15] mb-4">Konten Artikel</label>
            <TiptapEditor content={content} onChange={setContent} />
          </div>
        </form>
      </main>
    </div>
  );
}
