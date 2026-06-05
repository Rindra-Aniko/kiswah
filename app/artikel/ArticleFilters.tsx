'use client';

import React, { useState, useEffect } from 'react';
import { HiSearch, HiX } from 'react-icons/hi';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ArticleFilters({ categories }: { categories: any[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const activeCategory = searchParams.get('category') || '';

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateParams({ search, page: '1' });
  };

  const updateParams = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    router.push(`/artikel?${params.toString()}`);
  };

  return (
    <div className="space-y-8 mb-12">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSearch} className="relative group">
          <input
            type="text"
            placeholder="Cari artikel, tips, atau berita..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-[#291F15] focus:border-transparent outline-none transition-all text-lg"
          />
          <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-[#291F15] transition-colors" />
          {search && (
            <button 
              type="button"
              onClick={() => { setSearch(''); updateParams({ search: '', page: '1' }); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <HiX className="w-5 h-5 text-gray-400" />
            </button>
          )}
        </form>
      </div>

      {/* Category Chips */}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => updateParams({ category: '', page: '1' })}
          className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
            !activeCategory 
              ? 'bg-[#291F15] text-white border-[#291F15] shadow-md' 
              : 'bg-white text-gray-600 border-gray-200 hover:border-[#291F15] hover:text-[#291F15]'
          }`}
        >
          Semua
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => updateParams({ category: cat.slug, page: '1' })}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
              activeCategory === cat.slug
                ? 'bg-[#291F15] text-white border-[#291F15] shadow-md'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#291F15] hover:text-[#291F15]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
