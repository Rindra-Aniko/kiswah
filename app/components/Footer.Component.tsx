'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';

export default function Footer() {
  const { dict } = useLanguage();

  return (
    <footer role="contentinfo" className="bg-[#291F15] text-white font-poppins pt-14 pb-8 px-4 sm:px-8 md:px-16 lg:px-24 border-t border-[#B48421]/20 min-h-[420px] sm:min-h-[380px] box-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 lg:gap-12 pb-12">
        
        {/* Kolom 1: Logo & Deskripsi Perusahaan */}
        <div className="md:col-span-5 flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            {/* Menggunakan Image Next.js dengan width & height eksplisit */}
            <div className="w-14 h-14 flex-shrink-0 relative">
              <Image 
                src="/image/logo.webp" 
                alt="Logo Kiswah Tour & Travel" 
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
            </div>
            <div>
              <h2 className="font-nova-square text-xl lg:text-2xl font-bold tracking-wider text-[#B48421] leading-none">
                KISWAH
              </h2>
              <p className="text-sm lg:text-base font-semibold text-white tracking-wide mt-1">
                Tour & Travel
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-sm lg:text-sm leading-relaxed max-w-sm">
            {dict.footer.tagline}
          </p>
        </div>

        {/* Kolom 2: Navigasi Menu internal */}
        <div className="md:col-span-3 flex flex-col md:items-center">
          <div className="flex flex-col space-y-3 text-sm">
            <Link href="/" className="hover:text-[#B48421] transition-colors duration-200">
              {dict.nav.home}
            </Link>
            <Link href="/layanan" className="hover:text-[#B48421] transition-colors duration-200">
              {dict.nav.services}
            </Link>
            <Link href="/jadwal" className="hover:text-[#B48421] transition-colors duration-200">
              {dict.nav.schedule}
            </Link>
            <Link href="/artikel" className="hover:text-[#B48421] transition-colors duration-200">
              {dict.nav.info}
            </Link>
            <Link href="/tentang-kami" className="hover:text-[#B48421] transition-colors duration-200">
              {dict.nav.about}
            </Link>
          </div>
        </div>

        {/* Kolom 3: Informasi Alamat & Kontak Sosial Media */}
        <div className="md:col-span-4 flex flex-col space-y-4 text-sm lg:text-sm">
          <div>
            <h3 className="font-bold tracking-wider text-white mb-1">{dict.footer.addressTitle}</h3>
            <p className="text-gray-300 leading-relaxed">
              {dict.footer.addressText}
            </p>
          </div>

          {/* Baris Kontak & Sosial Media */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
            
            {/* Nomor WhatsApp */}
            <a 
              href="https://wa.me/6287739832387" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 group"
            >
              <div className="w-7 h-7 bg-[#00E676] text-white rounded-md flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 fill-current shrink-0" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.169 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.34 11.904-11.91 11.904-1.996-.001-3.956-.5-5.692-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.07 1.953 11.97 1.953c-5.44 0-9.866 4.372-9.87 9.802-.001 1.764.485 3.483 1.411 5.013l-.997 3.634 3.733-.967z"/>
                </svg>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">+62-8773983-2387</span>
            </a>

            {/* Informasi Kode Pos */}
            <div className="flex items-center space-x-1 text-gray-300">
              <span>{dict.footer.postalCode}</span>
              <span className="font-semibold text-white">37161</span>
            </div>

            {/* Akun Facebook */}
            <a 
              href="https://facebook.com/kiswahalmabrur" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 group"
            >
              <div className="w-7 h-7 bg-[#1877F2] text-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 fill-current shrink-0" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">kiswahalmabrur</span>
            </a>

            {/* Akun Instagram */}
            <a 
              href="https://instagram.com/kiswahgroup.ind" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 group"
            >
              <div className="w-7 h-7 bg-gradient-to-tr from-[#FFB200] via-[#FF007A] to-[#7B00FF] text-white rounded-md flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 fill-current shrink-0" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">kiswahgroup.ind</span>
            </a>
          </div>
        </div>

      </div>

      {/* Bagian Hak Cipta & Pengembang Web */}
      <div className="border-t border-gray-700/50 pt-6 text-center text-xs lg:text-xs text-gray-400 space-y-1">
        <p>{dict.footer.copyright}</p>
        <p>
          {dict.footer.createdBy}{' '}
          <a 
            href="https://ryndigitalpro.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-[#B48421] transition-colors"
          >
            https://ryndigitalpro.com
          </a>
        </p>
      </div>
    </footer>
  );
}