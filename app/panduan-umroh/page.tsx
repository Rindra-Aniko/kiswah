import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import ScrollReveal from '@/app/components/ScrollReveal';
import pelayananImg from '@/public/image/pelayanan.webp';
import { FiBookOpen, FiRefreshCw, FiArrowRight, FiScissors, FiCheckCircle, FiAlertCircle, FiPhone, FiExternalLink } from 'react-icons/fi';

export const metadata: Metadata = {
  title: "Panduan Umroh & Doa Dzikir Lengkap",
  description: "Panduan lengkap tata cara ibadah Umroh dan doa-doa dzikir sesuai sunnah Nabi SAW, dipersembahkan oleh Kiswah Tour & Travel.",
  openGraph: {
    title: "Panduan Umroh & Doa Dzikir Lengkap | Kiswah.id",
    description: "Panduan lengkap tata cara ibadah Umroh dan doa-doa dzikir sesuai sunnah Nabi SAW, dipersembahkan oleh Kiswah Tour & Travel.",
    url: "https://kiswah.id/panduan-umroh",
    images: [
      {
        url: "/image/pelayanan.webp",
        width: 1200,
        height: 630,
        alt: "Panduan Umroh Kiswah.id",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panduan Umroh & Doa Dzikir Lengkap | Kiswah.id",
    description: "Panduan lengkap tata cara ibadah Umroh dan doa-doa dzikir sesuai sunnah Nabi SAW, dipersembahkan oleh Kiswah Tour & Travel.",
    images: ["/image/pelayanan.webp"],
  },
};

export default function PanduanUmroh() {
  const steps = [
    {
      id: 1,
      title: "1. Niat & Ihram",
      icon: <FiBookOpen className="w-6 h-6 text-[#B48421]" />,
      desc: "Mengenakan pakaian ihram dan berniat untuk melaksanakan ibadah umroh di lokasi Miqat (batas geografis dimulainya ibadah)."
    },
    {
      id: 2,
      title: "2. Thawaf",
      icon: <FiRefreshCw className="w-6 h-6 text-[#B48421]" />,
      desc: "Mengelilingi Ka'bah sebanyak 7 kali putaran berlawanan arah jarum jam, dimulai dari Hajar Aswad dan diakhiri di Hajar Aswad."
    },
    {
      id: 3,
      title: "3. Sa'i",
      icon: <FiArrowRight className="w-6 h-6 text-[#B48421]" />,
      desc: "Berjalan/berlari-lari kecil antara bukit Shafa dan bukit Marwah sebanyak 7 kali balikan, dimulai dari Shafa dan berakhir di Marwah."
    },
    {
      id: 4,
      title: "4. Tahallul",
      icon: <FiScissors className="w-6 h-6 text-[#B48421]" />,
      desc: "Mencukur atau memotong sebagian rambut kepala (minimal 3 helai rambut) sebagai tanda selesainya seluruh rangkaian ibadah Umroh."
    }
  ];

  return (
    <div>
      {/* 1. Hero / Header Section */}
      <section
        className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden relative"
      >
        <Image
          src={pelayananImg}
          alt="Pelayanan Background"
          fill
          priority
          fetchPriority="high"
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center select-none pointer-events-none z-0"
        />
        <div className="absolute inset-0 bg-[#FFFFFF]/90 z-10" />
        <div className="relative z-20 max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#291F15] leading-tight tracking-tight max-w-3xl mx-auto drop-shadow-sm">
            Panduan Ibadah Umroh &amp; Doa
          </h1>
          <div className="w-16 h-[3px] bg-[#BD8A15] mx-auto rounded-full opacity-80" />
          <p className="font-poppins font-normal text-sm sm:text-base md:text-lg text-[#291F15]/90 leading-relaxed max-w-2xl mx-auto tracking-normal">
            Bimbingan langkah demi langkah untuk menyempurnakan ibadah suci Anda di tanah suci sesuai dengan tuntunan sunnah Rasulullah SAW.
          </p>
        </div>
      </section>

      {/* 2. Rukun Umroh Section */}
      <section className="w-full bg-transparent py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <ScrollReveal className="text-center space-y-2 mb-12 sm:mb-16" animation="fade-up">
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-[#B48421] tracking-wide uppercase">
              RUKUN UMROH
            </h2>
            <p className="font-poppins font-normal text-sm sm:text-base md:text-lg text-[#291F15]/90 max-w-xl mx-auto">
              Rangkaian ibadah yang wajib dilaksanakan secara berurutan dan tidak dapat digantikan dengan denda (Dam). Jika ditinggalkan, Umroh menjadi tidak sah.
            </p>
          </ScrollReveal>

          {/* Grid Layout 4 Kolom */}
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

      {/* 3. Wajib Umroh & Larangan Ihram Section */}
      <section className="w-full bg-[#FFFFFF]/40 backdrop-blur-sm py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#BD8A15]/10 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Wajib Umroh */}
            <ScrollReveal animation="fade-left" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#B48421]/10 rounded-lg text-[#B48421]">
                  <FiCheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-[#291F15] tracking-wide uppercase">
                  Wajib Umroh
                </h3>
              </div>
              <p className="font-poppins text-sm text-[#291F15]/80 leading-relaxed">
                Kewajiban dalam ibadah Umroh yang harus dikerjakan. Jika ditinggalkan karena udzur atau sengaja, Umrohnya tetap sah namun jemaah wajib membayar denda (Dam):
              </p>
              <ul className="space-y-4 font-poppins text-sm text-[#291F15]/90">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#B48421] font-bold mt-0.5">•</span>
                  <span><strong>Niat Ihram dari Miqat</strong>: Memulai niat ibadah di batas geografis yang telah ditentukan (seperti Bir Ali/Dzulkulaifah bagi jemaah dari Madinah, atau Yalamlam bagi jemaah dari arah Yaman/Indonesia).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#B48421] font-bold mt-0.5">•</span>
                  <span><strong>Menjaga Diri dari Larangan Ihram</strong>: Menghindari hal-hal yang dilarang selama berada dalam keadaan ihram hingga bertahallul.</span>
                </li>
              </ul>
            </ScrollReveal>

            {/* Larangan Ihram */}
            <ScrollReveal animation="fade-right" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg text-red-600">
                  <FiAlertCircle className="w-6 h-6" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-[#291F15] tracking-wide uppercase">
                  Larangan Ihram
                </h3>
              </div>
              <p className="font-poppins text-sm text-[#291F15]/80 leading-relaxed">
                Hal-hal yang tidak boleh dilakukan oleh jemaah yang telah mengenakan pakaian ihram dan melafazkan niat ihram hingga selesai tahallul:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-poppins text-[#291F15]/90">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Memotong rambut/bulu badan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Memotong atau mencabut kuku</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Menggunakan wewangian/parfum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Melangsungkan akad nikah</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Memakai pakaian berjahit (pria)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Menutup kepala secara langsung (pria)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Menutup wajah &amp; telapak tangan (wanita)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Berburu hewan liar di tanah suci</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 4. Documents & Guides Section */}
      <section className="w-full bg-transparent py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <ScrollReveal className="text-center space-y-3 mb-10 md:mb-16" animation="fade-up">
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-[#B48421] tracking-wide uppercase">
              Buku Panduan &amp; Doa Digital
            </h2>
            <div className="w-24 h-[3px] bg-[#BD8A15] mx-auto rounded-full opacity-90" />
            <p className="font-poppins font-normal text-sm sm:text-base text-[#291F15]/80 max-w-xl mx-auto pt-1">
              Guna memudahkan persiapan dan kekhusyukan ibadah Anda, kami menyediakan buku saku panduan dan doa interaktif yang dapat dibaca dan diunduh secara langsung.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl justify-center mx-auto">
            {/* Buku 1: Tuntunan Manasik (Google Drive PDF Embed) */}
            <ScrollReveal animation="zoom-in" className="flex flex-col bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#BD8A15]/20 rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-lg text-[#B48421] mb-2">
                Buku Tuntunan Manasik Umroh
              </h3>
              <p className="font-poppins text-xs sm:text-sm text-[#291F15]/80 mb-4 h-12">
                Panduan praktis terperinci mengenai tata cara manasik, doa-doa khusus di rute perjalanan, serta tips ibadah dari pembimbing ahli.
              </p>
              <div className="relative w-full aspect-[4/3] min-h-[350px] rounded-xl overflow-hidden bg-white border border-gray-150 shadow-inner mb-4">
                <iframe 
                  src="https://drive.google.com/file/d/1hxoKvNMBvQmRP62g3slG9ymkTvBkRn_M/preview" 
                  title="Buku Tuntunan Manasik Umroh" 
                  className="absolute inset-0 w-full h-full border-none"
                  allowFullScreen={true}
                />
              </div>
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <a
                  href="https://drive.google.com/file/d/1hxoKvNMBvQmRP62g3slG9ymkTvBkRn_M/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-poppins font-medium text-xs text-[#291F15] bg-[#B48421]/10 hover:bg-[#B48421]/20 border border-[#B48421]/30 transition-all duration-300 active:scale-98"
                >
                  <FiExternalLink className="w-4 h-4 text-[#B48421]" />
                  <span>Buka di Google Drive</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Buku 2: Doa & Zikir (Google Drive PDF Embed) */}
            <ScrollReveal animation="zoom-in" delay={150} className="flex flex-col bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#BD8A15]/20 rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-lg text-[#B48421] mb-2">
                Buku Doa &amp; Dzikir Manasik
              </h3>
              <p className="font-poppins text-xs sm:text-sm text-[#291F15]/80 mb-4 h-12">
                Kumpulan doa-doa utama dan dzikir sunnah lengkap dari niat ihram, tawaf, sa'i, hingga doa saat memasuki Masjidil Haram &amp; Nabawi.
              </p>
              <div className="relative w-full aspect-[4/3] min-h-[350px] rounded-xl overflow-hidden bg-white border border-gray-150 shadow-inner mb-4">
                <iframe 
                  src="https://drive.google.com/file/d/1ml6U2PSX4r7-tLG4LesFBTFXOAL9DJYN/preview" 
                  title="Buku Doa &amp; Dzikir Manasik" 
                  className="absolute inset-0 w-full h-full border-none"
                  allowFullScreen={true}
                />
              </div>
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <a
                  href="https://drive.google.com/file/d/1ml6U2PSX4r7-tLG4LesFBTFXOAL9DJYN/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-poppins font-medium text-xs text-[#291F15] bg-[#B48421]/10 hover:bg-[#B48421]/20 border border-[#B48421]/30 transition-all duration-300 active:scale-98"
                >
                  <FiExternalLink className="w-4 h-4 text-[#B48421]" />
                  <span>Buka di Google Drive</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="w-full bg-[#291F15] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#B48421]/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-[#B48421]/5 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <ScrollReveal animation="fade-up" className="space-y-4">
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-wide">
              Butuh Konsultasi Mengenai Ibadah Umroh?
            </h2>
            <p className="font-poppins font-normal text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              Tim pembimbing ibadah dan Customer Service Kiswah Tour &amp; Travel siap membantu menjawab segala pertanyaan serta mendampingi persiapan perjalanan ibadah Anda.
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
              <span>Hubungi Pembimbing Kami</span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}