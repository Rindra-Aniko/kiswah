'use client';

import React from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import pelayananImg from '@/public/image/pelayanan.webp';
import { FiBookOpen, FiRefreshCw, FiArrowRight, FiScissors, FiCheckCircle, FiAlertCircle, FiPhone, FiExternalLink } from 'react-icons/fi';
import { useLanguage } from '@/lib/i18n/context';

export default function PanduanUmrohContent() {
  const { dict } = useLanguage();
  const [showPreview1, setShowPreview1] = React.useState(false);
  const [showPreview2, setShowPreview2] = React.useState(false);

  const steps = [
    {
      id: 1,
      title: dict.panduan.step1Title,
      icon: <FiBookOpen className="w-6 h-6 text-[#B48421]" />,
      desc: dict.panduan.step1Desc
    },
    {
      id: 2,
      title: dict.panduan.step2Title,
      icon: <FiRefreshCw className="w-6 h-6 text-[#B48421]" />,
      desc: dict.panduan.step2Desc
    },
    {
      id: 3,
      title: dict.panduan.step3Title,
      icon: <FiArrowRight className="w-6 h-6 text-[#B48421]" />,
      desc: dict.panduan.step3Desc
    },
    {
      id: 4,
      title: dict.panduan.step4Title,
      icon: <FiScissors className="w-6 h-6 text-[#B48421]" />,
      desc: dict.panduan.step4Desc
    }
  ];

  return (
    <div>
      <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden relative">
        <picture className="absolute inset-0 z-0">
          <source media="(max-width: 640px)" srcSet="/image/pelayanan-mobile.webp" />
          <source media="(min-width: 641px)" srcSet="/image/pelayanan.webp" />
          <img
            src="/image/pelayanan.webp"
            alt="Pelayanan Background"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center select-none pointer-events-none"
          />
        </picture>
        <div className="absolute inset-0 bg-[#FFFFFF]/90 z-10" />
        <div className="relative z-20 max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#291F15] leading-tight tracking-tight max-w-3xl mx-auto drop-shadow-sm">
            {dict.panduan.heroTitle}
          </h1>
          <div className="w-16 h-[3px] bg-[#BD8A15] mx-auto rounded-full opacity-80" />
          <p className="font-poppins font-normal text-sm sm:text-base md:text-lg text-[#291F15]/90 leading-relaxed max-w-2xl mx-auto tracking-normal">
            {dict.panduan.heroDesc}
          </p>
        </div>
      </section>

      <section className="w-full bg-transparent py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <ScrollReveal className="text-center space-y-2 mb-12 sm:mb-16" animation="fade-up">
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-[#B48421] tracking-wide uppercase">
              {dict.panduan.rukunTitle}
            </h2>
            <p className="font-poppins font-normal text-sm sm:text-base md:text-lg text-[#291F15]/90 max-w-xl mx-auto">
              {dict.panduan.rukunDesc}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl justify-center mx-auto">
            {steps.map((step, index) => (
              <ScrollReveal 
                key={step.id} 
                animation="zoom-in" 
                delay={index * 100} 
                className="flex flex-col bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#BD8A15]/20 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#BD8A15]/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-[#B48421]/10 rounded-xl w-fit mb-4 group-hover:bg-[#B48421] group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="font-poppins font-semibold text-lg text-[#B48421] mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="font-poppins font-normal text-sm text-[#291F15]/80 leading-relaxed">
                  {step.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FFFFFF]/40 backdrop-blur-sm py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#BD8A15]/10 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            
            <ScrollReveal animation="fade-left" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#B48421]/10 rounded-lg text-[#B48421]">
                  <FiCheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-[#291F15] tracking-wide uppercase">
                  {dict.panduan.wajibTitle}
                </h3>
              </div>
              <p className="font-poppins text-sm text-[#291F15]/80 leading-relaxed">
                {(dict.panduan as any).wajibDesc}
              </p>
              <ul className="space-y-4 font-poppins text-sm text-[#291F15]/90">
                {((dict.panduan as any).wajibList || []).map((item: any, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#B48421] font-bold mt-0.5">•</span>
                    <span><strong>{item.title}</strong>: {item.desc}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg text-red-600">
                  <FiAlertCircle className="w-6 h-6" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-[#291F15] tracking-wide uppercase">
                  {dict.panduan.laranganTitle}
                </h3>
              </div>
              <p className="font-poppins text-sm text-[#291F15]/80 leading-relaxed">
                {(dict.panduan as any).laranganDesc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-poppins text-[#291F15]/90">
                <ul className="space-y-2">
                  {((dict.panduan as any).laranganList || []).slice(0, 4).map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {((dict.panduan as any).laranganList || []).slice(4).map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <section className="w-full bg-transparent py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <ScrollReveal className="text-center space-y-3 mb-10 md:mb-16" animation="fade-up">
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-[#B48421] tracking-wide uppercase">
              {dict.panduan.bookTitle}
            </h2>
            <div className="w-24 h-[3px] bg-[#BD8A15] mx-auto rounded-full opacity-90" />
            <p className="font-poppins font-normal text-sm sm:text-base text-[#291F15]/80 max-w-xl mx-auto pt-1">
              {dict.panduan.bookDesc}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl justify-center mx-auto">
            <ScrollReveal animation="zoom-in" className="flex flex-col bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#BD8A15]/20 rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-lg text-[#B48421] mb-2">
                {(dict.panduan as any).book1Title || 'Buku Tuntunan Manasik Umroh'}
              </h3>
              <p className="font-poppins text-xs sm:text-sm text-[#291F15]/80 mb-4 h-12">
                {(dict.panduan as any).book1Desc}
              </p>
              <div className="relative w-full aspect-[4/3] min-h-[350px] rounded-xl overflow-hidden bg-white border border-gray-150 shadow-inner mb-4 flex items-center justify-center">
                {showPreview1 ? (
                  <iframe 
                    src="https://drive.google.com/file/d/1hxoKvNMBvQmRP62g3slG9ymkTvBkRn_M/preview" 
                    title="Buku Tuntunan Manasik Umroh" 
                    className="absolute inset-0 w-full h-full border-none"
                    loading="lazy"
                    allowFullScreen={true}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center space-y-4 bg-gradient-to-b from-amber-50/50 to-white w-full h-full">
                    <div className="w-16 h-16 rounded-2xl bg-[#B48421]/10 text-[#B48421] flex items-center justify-center shadow-sm">
                      <FiBookOpen className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-poppins font-bold text-base text-[#291F15]">
                        {(dict.panduan as any).book1Title || 'Buku Tuntunan Manasik Umroh'}
                      </p>
                      <p className="font-poppins text-xs text-gray-500 max-w-xs">
                        Panduan lengkap tata cara ibadah umroh sesuai sunnah
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPreview1(true)}
                      className="inline-flex items-center gap-2 py-2.5 px-6 rounded-xl font-poppins font-semibold text-xs text-white bg-[#B48421] hover:bg-[#966a10] shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <FiBookOpen className="w-4 h-4" />
                      <span>Tampilkan Pratinjau Buku</span>
                    </button>
                  </div>
                )}
              </div>
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <a
                  href="https://drive.google.com/file/d/1hxoKvNMBvQmRP62g3slG9ymkTvBkRn_M/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-poppins font-medium text-xs text-[#291F15] bg-[#B48421]/10 hover:bg-[#B48421]/20 border border-[#B48421]/30 transition-all duration-300 active:scale-98"
                >
                  <FiExternalLink className="w-4 h-4 text-[#B48421]" />
                  <span>{(dict.panduan as any).openGDrive || 'Buka di Google Drive'}</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="zoom-in" delay={150} className="flex flex-col bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#BD8A15]/20 rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-lg text-[#B48421] mb-2">
                {(dict.panduan as any).book2Title || 'Buku Doa & Dzikir Manasik'}
              </h3>
              <p className="font-poppins text-xs sm:text-sm text-[#291F15]/80 mb-4 h-12">
                {(dict.panduan as any).book2Desc}
              </p>
              <div className="relative w-full aspect-[4/3] min-h-[350px] rounded-xl overflow-hidden bg-white border border-gray-150 shadow-inner mb-4 flex items-center justify-center">
                {showPreview2 ? (
                  <iframe 
                    src="https://drive.google.com/file/d/1ml6U2PSX4r7-tLG4LesFBTFXOAL9DJYN/preview" 
                    title="Buku Doa & Dzikir Manasik" 
                    className="absolute inset-0 w-full h-full border-none"
                    loading="lazy"
                    allowFullScreen={true}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center space-y-4 bg-gradient-to-b from-amber-50/50 to-white w-full h-full">
                    <div className="w-16 h-16 rounded-2xl bg-[#B48421]/10 text-[#B48421] flex items-center justify-center shadow-sm">
                      <FiBookOpen className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-poppins font-bold text-base text-[#291F15]">
                        {(dict.panduan as any).book2Title || 'Buku Doa & Dzikir Manasik'}
                      </p>
                      <p className="font-poppins text-xs text-gray-500 max-w-xs">
                        Kumpulan doa dan dzikir ibadah manasik umroh
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPreview2(true)}
                      className="inline-flex items-center gap-2 py-2.5 px-6 rounded-xl font-poppins font-semibold text-xs text-white bg-[#B48421] hover:bg-[#966a10] shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <FiBookOpen className="w-4 h-4" />
                      <span>Tampilkan Pratinjau Buku</span>
                    </button>
                  </div>
                )}
              </div>
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <a
                  href="https://drive.google.com/file/d/1ml6U2PSX4r7-tLG4LesFBTFXOAL9DJYN/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-poppins font-medium text-xs text-[#291F15] bg-[#B48421]/10 hover:bg-[#B48421]/20 border border-[#B48421]/30 transition-all duration-300 active:scale-98"
                >
                  <FiExternalLink className="w-4 h-4 text-[#B48421]" />
                  <span>{(dict.panduan as any).openGDrive || 'Buka di Google Drive'}</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#291F15] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#B48421]/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-[#B48421]/5 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <ScrollReveal animation="fade-up" className="space-y-4">
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-wide">
              {dict.panduan.consultTitle}
            </h2>
            <p className="font-poppins font-normal text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              {dict.panduan.consultDesc}
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="zoom-in" delay={150}>
            <a
              href="https://wa.me/6287739832387?text=Assalamu'alaikum%20Kiswah%20Tour%20%26%20Travel,%20saya%20ingin%20konsultasi%20mengenai%20panduan%20dan%20tata%20cara%20ibadah%20umrah..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#B48421] text-white px-8 py-4 rounded-full font-poppins font-bold text-sm sm:text-base hover:bg-[#966a10] transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider"
            >
              <FiPhone className="w-5 h-5" />
              <span>{dict.panduan.consultBtn}</span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
