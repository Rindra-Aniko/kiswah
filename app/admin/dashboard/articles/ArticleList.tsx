'use client';

import React, { useState } from 'react';
import { HiPencil, HiTrash, HiEye, HiSearch } from 'react-icons/hi';
import Link from 'next/link';
import { deleteArticleAction } from '@/lib/actions/articles';

export default function ArticleList({ initialArticles }: { initialArticles: any[] }) {
  const [articles, setArticles] = useState(initialArticles);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = async (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus artikel ini?')) {
      const result = await deleteArticleAction(id);
      if (result.error) {
        alert(result.error);
      } else {
        setArticles(articles.filter(a => a.id !== id));
      }
    }
  };

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

  const filteredArticles = articles.filter(a => 
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="relative w-full sm:w-96">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <HiSearch className="w-5 h-5" />
          </span>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#291F15] focus:border-transparent text-sm"
            placeholder="Cari judul artikel..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            suppressHydrationWarning
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Artikel</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Kategori</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Penulis</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tanggal</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredArticles.map((article) => (
              <tr key={article.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-[#291F15]">{article.title}</div>
                  <div className="text-xs text-gray-500 font-mono mt-0.5">/{article.slug}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-medium">
                    {article.category?.name || 'Uncategorized'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    article.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {article.status === 'published' ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {article.author?.name || 'Unknown'}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500" suppressHydrationWarning>
                  {formatDate(article.createdAt)}
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <Link 
                    href={`/artikel/${article.slug}`}
                    target="_blank"
                    className="inline-flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Lihat Artikel"
                  >
                    <HiEye className="w-5 h-5" />
                  </Link>
                  <Link 
                    href={`/admin/dashboard/articles/${article.id}/edit`}
                    className="inline-flex items-center p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Edit Artikel"
                  >
                    <HiPencil className="w-5 h-5" />
                  </Link>
                  <button 
                    onClick={() => handleDelete(article.id)}
                    className="inline-flex items-center p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Hapus Artikel"
                  >
                    <HiTrash className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
            {filteredArticles.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                  Belum ada artikel yang ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
