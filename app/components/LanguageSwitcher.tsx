'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/context';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center bg-black/30 backdrop-blur-sm p-1 rounded-full border border-[#B48421]/30">
      <button
        type="button"
        onClick={() => setLocale('id')}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
          locale === 'id'
            ? 'bg-[#B48421] text-white shadow-md'
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
        title="Bahasa Indonesia"
      >
        <span>🇮🇩</span>
        <span>ID</span>
      </button>

      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
          locale === 'en'
            ? 'bg-[#B48421] text-white shadow-md'
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
        title="English"
      >
        <span>🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  );
}
