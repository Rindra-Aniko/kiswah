import React from 'react';
import Link from 'next/link';

export default function Cekpaket() {
  return (
    <section className="w-full bg-transparent py-10 px-4 flex justify-center items-center">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Link CTA Emas */}
        <Link 
          href="/layanan"
          className="group relative inline-flex items-center justify-center font-poppins font-bold text-sm sm:text-base md:text-lg text-[#291F15] bg-[#B48421] hover:bg-[#d4af37] px-8 sm:px-12 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 uppercase tracking-wider"
        >
          <span>LIHAT PAKET UMROH YANG TERSEDIA</span>
          
          {/* Efek panah kecil saat di-hover */}
          <svg 
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200 stroke-current" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2.5" 
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>

      </div>
    </section>
  );
}