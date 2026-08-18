'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/context';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center bg-black/40 backdrop-blur-sm p-1 rounded-full border border-[#B48421]/40">
      <button
        type="button"
        onClick={() => setLocale('id')}
        className={`px-2.5 py-1 rounded-full text-xs transition-all duration-200 flex items-center gap-1.5 ${
          locale === 'id'
            ? 'bg-[#B48421] text-[#1A130F] font-extrabold shadow-md'
            : 'text-white/85 hover:text-white hover:bg-white/15 font-semibold'
        }`}
        aria-label="Pilih Bahasa Indonesia"
        title="Bahasa Indonesia"
      >
        <span aria-hidden="true">🇮🇩</span>
        <span>ID</span>
      </button>

      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`px-2.5 py-1 rounded-full text-xs transition-all duration-200 flex items-center gap-1.5 ${
          locale === 'en'
            ? 'bg-[#B48421] text-[#1A130F] font-extrabold shadow-md'
            : 'text-white/85 hover:text-white hover:bg-white/15 font-semibold'
        }`}
        aria-label="Select English language"
        title="English"
      >
        <span aria-hidden="true">🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  );
}
