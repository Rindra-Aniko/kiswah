'use client';

import React from 'react';
import Image from 'next/image';
import WhatsAppButton from './WhatsAppButton.Component';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '@/lib/i18n/context';
import girlTuImg from '@/public/image/girl_tu.webp';
import hajiKhususImg from '@/public/image/haji_khusus.webp';

export default function LayananContent() {
  const { dict } = useLanguage();

  const keunggulanHaji = [
    dict.layanan.h1,
    dict.layanan.h2,
    dict.layanan.h3,
    dict.layanan.h4,
  ];

  const umrahPackages = (dict.layanan as any).packages || [];

  function mapPackages() {
    return umrahPackages.map((pkg: any, index: number) => (
      <div 
        key={index}
        className="bg-[#F9F9F9] border-4 border-[#BD8A15] rounded-[2.5rem] p-8 flex flex-col justify-between shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div>
          <h3 className="text-4xl font-bold tracking-wide text-[#BD8A15] border-b-2 border-[#BD8A15]/30 pb-2 mb-6">
            {pkg.name}
          </h3>

          <div className="mb-8 relative">
            <span className="text-sm font-semibold text-[#291F15]/60 uppercase block mb-1">
              {(dict.layanan as any).priceLabel || 'Price'}
            </span>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-[#291F15]">
                {pkg.price}
              </span>
              <span className="text-sm font-bold text-[#291F15] bg-[#BD8A15]/10 px-3 py-1 rounded-full">
                /{pkg.duration}
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold text-[#291F15] mb-4">
              {(dict.layanan as any).facilitiesHeader || 'Fasilitas'}
            </h4>
            <ul className="space-y-3">
              {pkg.features.map((feature: string, fIdx: number) => (
                <li key={fIdx} className="flex items-start gap-2.5 text-sm text-[#291F15]/90 leading-snug">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#291F15] mt-1.5 flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <WhatsAppButton 
            phoneNumber="+6285163731467"
            message={`Assalamu'alaikum Kiswah Tour & Travel, saya ingin bertanya mengenai Paket Umrah ${pkg.name}...`}
            label={(dict.layanan as any).choosePackage || 'PILIH PAKET'}
            className="w-full py-3.5 rounded-2xl"
          />
        </div>
      </div>
    ));
  }

  return (
    <div>
      <section 
        className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden pt-1 pb-8 bg-white"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center z-20">
          
          <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-start order-last lg:order-first mt-8 lg:mt-0">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] aspect-[4/5] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-[#BD8A15]/10 to-transparent blur-3xl rounded-full scale-75 z-0 transition-all duration-750 hover:from-[#BD8A15]/20" />
              
              <div className="relative w-full h-full mt-12 transform scale-100 hover:scale-105 transition-transform duration-700 max-h-[50vh] md:max-h-[75vh] z-10">
                <Image
                  src={girlTuImg}
                  alt="Jamaah Kiswah"
                  fill
                  priority
                  fetchPriority="high"
                  placeholder="blur"
                  sizes="(max-width: 480px) 100vw, 450px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-4 md:space-y-6">
            <h1 className="flex flex-col md:block leading-tight tracking-normal text-[#291F15]">
              <span className="font-poppins font-bold text-1xl sm:text-3xl md:text-4xl lg:text-6xl uppercase block mb-1 md:mb-2">
                {dict.layanan.heroTagline}
              </span>
              
              <span className="inline-flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-4 gap-y-1">
                <span className="font-freehand text-[#B48421] text-5xl sm:text-6xl md:text-7xl lg:text-8xl normal-case font-normal pt-1">
                  {dict.layanan.heroPriority}
                </span>
                <span className="font-poppins font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] tracking-wide mt-1 sm:mt-0">
                  {dict.layanan.heroMain}
                </span>
              </span>
            </h1>
            
            <div className="w-24 h-[2px] bg-[#BD8A15] mx-auto lg:mx-0 rounded-full mt-2 opacity-80" />
          </div>

        </div>
      </section>

      {/* Bagian Paket Umrah */}
      <section>
        <div className="bg-[#FFFFFF] text-[#291F15] font-sans antialiased min-h-[80vh] pt-12 pb-20 px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="max-w-7xl mx-auto text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-4 h-10 bg-[#B48421]"></div>
                <h1 className="text-4xl font-bold tracking-wider uppercase text-[#291F15] font-nova-square">
                  {dict.layanan.umrahPackageTitle}
                </h1>
              </div>
              
              <p className="text-xl text-[#B48421] mb-2 font-freehand">
                {dict.layanan.umrahSubtitle}
              </p>

              <p className="max-w-2xl mx-auto text-base text-[#291F15]/80 leading-relaxed font-normal font-poppins">
                {dict.layanan.umrahDesc}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {mapPackages()}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary to-transparent opacity-40" />
      </div>

      <section className="bg-[#FFFFFF] text-[#291F15] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <ScrollReveal animation="fade-right">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-4 h-10 bg-[#B48421]" />
              <h2 className="text-4xl font-bold tracking-wider uppercase font-nova-square">
                {dict.layanan.hajiPackageTitle}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <div className="max-w-4xl mb-14 font-poppins">
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#291F15] mb-4">
                {dict.layanan.hajiQuestion}
              </p>
              <p className="text-lg text-[#291F15]/80 leading-relaxed font-normal">
                {dict.layanan.hajiAnswer}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            <ScrollReveal animation="fade-right" className="lg:col-span-5 relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#BD8A15] to-[#B48421] rounded-[2rem] opacity-30 blur-sm group-hover:opacity-40 transition-opacity duration-300" />
              
              <div className="relative h-full min-h-[400px] rounded-[1.8rem] overflow-hidden border-4 border-[#BD8A15] bg-[#F9F9F9] shadow-xl">
                <Image 
                  src={hajiKhususImg} 
                  alt="Jemaah Haji Khusus Kiswah Travel" 
                  fill
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                  className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" className="lg:col-span-7 flex flex-col justify-center py-4 font-poppins">
              <div>
                <p className="text-xl text-[#B48421] mb-2 font-freehand">
                  {dict.layanan.hajiFacilitiesSubtitle}
                </p>
                
                <h3 className="text-2xl font-bold text-[#291F15] mb-6 tracking-tight">
                  {dict.layanan.hajiWhatYouGet}
                </h3>

                <ul className="space-y-4 mb-10">
                  {keunggulanHaji.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-base text-[#291F15]/90 leading-relaxed">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#B48421] mt-2.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center justify-center bg-[#291F15] text-[#FFFFFF] text-sm font-bold tracking-widest uppercase px-8 py-3.5 rounded-full border-2 border-[#B48421]/40 shadow-md cursor-not-allowed select-none transition-all duration-300 hover:border-[#B48421]">
                  <span className="w-2 h-2 rounded-full bg-[#B48421] animate-pulse mr-2.5" />
                  {dict.layanan.comingSoon}
                </span>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary to-transparent opacity-40" />
      </div>
      
      <section className="bg-[#FFFFFF] text-[#291F15] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex items-center gap-3 mb-8">
            <div className="w-4 h-10 bg-[#B48421]" />
            <h2 className="text-4xl font-bold tracking-wider uppercase font-nova-square">
              {dict.layanan.tourPackageTitle}
            </h2>
          </div>

          <div className="max-w-4xl mb-16 font-poppins">
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#291F15] mb-4">
              {dict.layanan.tourQuestion}
            </p>
            <p className="text-lg text-[#291F15]/80 leading-relaxed font-normal">
              {dict.layanan.tourAnswer}
            </p>
          </div>

          <div className="space-y-20 font-poppins">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              <div className="lg:col-span-5 relative">
                <div className="relative h-full min-h-[300px] rounded-[1.8rem] overflow-hidden border-4 border-[#BD8A15] bg-[#F9F9F9] shadow-xl group">
                  <Image 
                    src="/image/mesir.jpg" 
                    alt="Tour Muslim Mesir Piramida Kiswah Travel" 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                    className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center space-y-5 py-4">
                <div>
                  <p className="text-sm font-bold tracking-[0.2em] text-[#BD8A15] uppercase mb-2">{(dict.layanan as any).featuredDestination || 'Destinasi Pilihan'}</p>
                  <h3 className="text-3xl font-bold text-[#291F15] font-nova-square uppercase tracking-wide">{dict.layanan.egyptTitle}</h3>
                </div>
                <p className="text-[15px] text-[#291F15]/90 leading-relaxed font-poppins">
                  {dict.layanan.egyptDesc1}
                </p>
                <p className="text-[15px] text-[#291F15]/90 leading-relaxed font-poppins">
                  {dict.layanan.egyptDesc2}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              <div className="lg:col-span-7 order-last lg:order-first flex flex-col justify-center space-y-5 py-4">
                <div>
                  <p className="text-sm font-bold tracking-[0.2em] text-[#BD8A15] uppercase mb-2">{(dict.layanan as any).featuredDestination || 'Destinasi Pilihan'}</p>
                  <h3 className="text-3xl font-bold text-[#291F15] font-nova-square uppercase tracking-wide">{dict.layanan.istanbulTitle}</h3>
                </div>
                <p className="text-[15px] text-[#291F15]/90 leading-relaxed font-poppins">
                  {dict.layanan.istanbulDesc1}
                </p>
                <p className="text-[15px] text-[#291F15]/90 leading-relaxed font-poppins">
                  {dict.layanan.istanbulDesc2}
                </p>
              </div>
              <div className="lg:col-span-5 relative order-first lg:order-last">
                <div className="relative h-full min-h-[300px] rounded-[1.8rem] overflow-hidden border-4 border-[#BD8A15] bg-[#F9F9F9] shadow-xl group">
                  <Image 
                    src="/image/istanbul.jpg" 
                    alt="Tour Muslim Istanbul Turki Kiswah Travel" 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                    className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

          </div>

          <div className="flex justify-center sm:justify-end mt-16 font-poppins">
            <span className="inline-flex items-center justify-center bg-[#291F15] text-[#FFFFFF] text-sm font-bold tracking-widest uppercase px-8 py-3.5 rounded-full border-2 border-[#B48421]/40 shadow-md cursor-not-allowed select-none transition-all duration-300 hover:border-[#B48421]">
              <span className="w-2 h-2 rounded-full bg-[#B48421] animate-pulse mr-2.5" />
              {dict.layanan.comingSoon}
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}
