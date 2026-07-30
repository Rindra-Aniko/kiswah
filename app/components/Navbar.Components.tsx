"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/lib/i18n/context';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { dict } = useLanguage();

  // Tutup menu otomatis saat pindah halaman
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Kunci scroll body saat menu terbuka
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const registerWaText = encodeURIComponent(dict.cta.registerWhatsapp);
  const agentWaText = encodeURIComponent(dict.cta.agentWhatsapp);

  return (
    <>
      <nav className="w-full bg-[#2a1d12] sticky top-0 z-[999] h-[72px] shadow-lg">
        <div className="w-full h-full max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-10">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/image/logo.webp" 
              alt="Logo Kiswah" 
              width={42}
              height={42}
              priority
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="font-nova-square text-xl font-bold tracking-wider text-[#B48421] leading-tight">
                KISWAH
              </span>
              <span className="text-[8px] font-medium text-white uppercase tracking-widest">
                Tour &amp; Travel
              </span>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center gap-7">
            <Link href="/" className={`text-[15px] transition-colors ${pathname === '/' ? 'text-[#B48421] font-semibold' : 'text-white hover:text-[#B48421]'}`}>{dict.nav.home}</Link>
            <Link href="/layanan" className={`text-[15px] transition-colors ${pathname === '/layanan' ? 'text-[#B48421] font-semibold' : 'text-white hover:text-[#B48421]'}`}>{dict.nav.services}</Link>
            <Link href="/jadwal" className={`text-[15px] transition-colors ${pathname === '/jadwal' ? 'text-[#B48421] font-semibold' : 'text-white hover:text-[#B48421]'}`}>{dict.nav.schedule}</Link>
            <Link href="/panduan-umroh" className={`text-[15px] transition-colors ${pathname === '/panduan-umroh' ? 'text-[#B48421] font-semibold' : 'text-white hover:text-[#B48421]'}`}>{dict.nav.umrahGuide}</Link>
            <Link href="/artikel" className={`text-[15px] transition-colors ${pathname === '/artikel' ? 'text-[#B48421] font-semibold' : 'text-white hover:text-[#B48421]'}`}>{dict.nav.info}</Link>
            <Link href="/tentang-kami" className={`text-[15px] transition-colors ${pathname === '/tentang-kami' ? 'text-[#B48421] font-semibold' : 'text-white hover:text-[#B48421]'}`}>{dict.nav.about}</Link>
          </div>

          {/* CTA & SWITCHER DESKTOP */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a 
              href={`https://wa.me/6285163731467?text=${registerWaText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B48421] text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-[#966a10] transition-colors"
            >
              {dict.nav.register}
            </a>
            <a 
              href={`https://wa.me/6287739832387?text=${agentWaText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-white/10 transition-colors"
            >
              {dict.nav.registerAgent}
            </a>
          </div>

          {/* TOMBOL BURGER MOBILE & SWITCHER */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            <button 
              type="button"
              onClick={toggleMenu}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white active:scale-95 transition-transform"
              aria-label={isOpen ? 'Tutup Menu' : 'Buka Menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>
          </div>

        </div>
      </nav>

      {/* OVERLAY MENU MOBILE — di luar <nav> */}
      {isOpen && (
        <div 
          className="fixed top-[72px] left-0 right-0 bottom-0 bg-[#2a1d12] z-[998] lg:hidden overflow-y-auto"
        >
          <div className="flex flex-col p-8 gap-5 font-poppins">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-white text-lg border-b border-white/5 pb-3">{dict.nav.home}</Link>
            <Link href="/layanan" onClick={() => setIsOpen(false)} className="text-white text-lg border-b border-white/5 pb-3">{dict.nav.services}</Link>
            <Link href="/jadwal" onClick={() => setIsOpen(false)} className="text-white text-lg border-b border-white/5 pb-3">{dict.nav.schedule}</Link>
            <Link href="/panduan-umroh" onClick={() => setIsOpen(false)} className="text-white text-lg border-b border-white/5 pb-3">{dict.nav.umrahGuide}</Link>
            <Link href="/artikel" onClick={() => setIsOpen(false)} className="text-white text-lg border-b border-white/5 pb-3">{dict.nav.info}</Link>
            <Link href="/tentang-kami" onClick={() => setIsOpen(false)} className="text-white text-lg border-b border-white/5 pb-3">{dict.nav.about}</Link>
            
            <div className="flex flex-col gap-4 mt-4">
              <a 
                href={`https://wa.me/6285163731467?text=${registerWaText}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#B48421] text-white text-center py-4 rounded-2xl font-bold"
              >
                {dict.nav.register}
              </a>
              <a 
                href={`https://wa.me/6287739832387?text=${agentWaText}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full border border-white/20 text-white text-center py-4 rounded-2xl font-bold"
              >
                {dict.nav.registerAgent}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

