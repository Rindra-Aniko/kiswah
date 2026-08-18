"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImg from "@/public/image/hero.webp";
import pelayananImg from "@/public/image/pelayanan.webp";
import Cekpaket from "./Cekpaket.Component";
import TestimoniCarousel from "./Testimoni.Component";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/lib/i18n/context";

export default function BerandaContent() {
  const { dict } = useLanguage();

  const featureList = [
    {
      id: 1,
      title: dict.home.f1Title,
      description: dict.home.f1Desc,
    },
    {
      id: 2,
      title: dict.home.f2Title,
      description: dict.home.f2Desc,
    },
    {
      id: 3,
      title: dict.home.f3Title,
      description: dict.home.f3Desc,
    },
    {
      id: 4,
      title: dict.home.f4Title,
      description: dict.home.f4Desc,
    },
    {
      id: 5,
      title: dict.home.f5Title,
      description: dict.home.f5Desc,
    },
    {
      id: 6,
      title: dict.home.f6Title,
      description: dict.home.f6Desc,
    },
  ];

  return (
    <div className="w-full">
      {/* Section Utama Hero */}
      <section className="relative w-full min-h-[600px] md:min-h-[90vh] flex items-center overflow-hidden py-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <Image
          src={heroImg}
          alt="Hero Background"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center select-none pointer-events-none z-0"
        />
        {/* Overlay Putih */}
        <div className="absolute inset-0 bg-white/78 z-10" />

        {/* Konten Utama */}
        <div className="relative z-20 max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sisi Kiri */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-4">
            
            <div className="flex flex-col text-left">
              <h1 className="font-nova-square text-5xl sm:text-6xl md:text-7xl font-bold tracking-widest text-[#B48421] drop-shadow-sm leading-none">
                KISWAH
              </h1>
              <p className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-[#291F15] tracking-wide uppercase mt-2">
                Tour &amp; Travel
              </p>
            </div>

            <p className="font-poppins text-lg sm:text-xl md:text-2xl text-gray-800 font-medium tracking-wide">
              {dict.home.heroServices}
            </p>

            <div className="flex items-center space-x-3 pt-4 sm:pt-6">
              <span className="font-freehand text-4xl sm:text-5xl text-[#B48421] transform -rotate-12 tracking-wide font-normal block pr-2">
                Plus
              </span>
              
              <div className="bg-[#291F15] text-white font-poppins font-normal px-5 py-1 rounded-full shadow-lg text-xl sm:text-2xl md:text-3xl tracking-wide flex items-center whitespace-nowrap">
                <span>{dict.home.specialService}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Badge Promosi GRATIS TOUR */}
        <div className="absolute bottom-6 right-4 sm:right-8 md:right-16 lg:right-24 z-30 pointer-events-none">
          <div className="relative bg-[#1A130F] border-l-4 border-l-[#B48421] border border-gray-800 text-white px-8 py-6 rounded-br-3xl shadow-2xl transform lg:rotate-2 w-72 sm:w-80 min-h-[140px] sm:min-h-[152px] box-border flex flex-col justify-center overflow-hidden">
            <div className="absolute top-0 right-0 w-3 h-16 bg-[#B48421] transform translate-x-1 -translate-y-2 rotate-45 hidden sm:block pointer-events-none" />
            
            <div className="flex flex-col text-left space-y-1">
              <span className="font-poppins text-[#B48421] font-extrabold text-2xl sm:text-3xl tracking-wider uppercase leading-tight">
                {dict.home.freeTour}
              </span>
              <span className="font-poppins text-white font-bold text-xl sm:text-2xl tracking-wide uppercase leading-none pb-2">
                TOUR
              </span>
              <span className="font-poppins text-white font-semibold text-lg sm:text-xl tracking-tight pt-1">
                {dict.home.taifBadar}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Kenapa Spesial */}
      <section className="w-full bg-transparent py-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="font-freehand text-4xl sm:text-5xl md:text-6xl text-[#B48421] inline-block tracking-wide">
                {dict.home.whySpecialTitle}
              </h2>
              <span className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-[#291F15] ml-3 tracking-tight">
                {dict.home.whySpecialSubtitle}
              </span>
            </div>
          </ScrollReveal>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300 transform -translate-x-1/2" />

            {featureList.map((item, index) => (
              <ScrollReveal key={item.id} animation="fade-up" delay={index * 100}>
                <div className="flex items-start space-x-4 sm:space-x-5">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#B48421] flex items-center justify-center shadow-md">
                    <span className="font-poppins font-bold text-white text-lg sm:text-xl">
                      {item.id}
                    </span>
                  </div>

                  <div className="flex-col">
                    <h3 className="font-poppins font-bold text-xl sm:text-2xl text-[#291F15] leading-tight mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="font-poppins text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Cek Paket */}
      <Cekpaket />
      
      {/* Testimoni */}
      <TestimoniCarousel />

      {/* CTA Footer Section */}
      <section className="w-full bg-transparent py-12 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto rounded-[24px] sm:rounded-[32px] px-6 py-12 sm:py-16 md:py-20 text-center shadow-xl relative overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[360px] flex flex-col justify-center items-center">
          <Image
            src={pelayananImg}
            alt="Pelayanan Background"
            fill
            quality={75}
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center select-none pointer-events-none z-0"
          />
          <div className="absolute inset-0 bg-[#B48421]/90 z-10 mix-blend-multiply" />
          
          <div className="relative z-20 flex flex-col space-y-2 mb-8 sm:mb-10 w-full">
            <h2 className="font-poppins font-medium text-xl sm:text-2xl md:text-4xl text-white tracking-wide text-balance leading-snug">
              {dict.home.ctaHeading1}
            </h2>
            <p className="font-poppins font-semibold text-xl sm:text-2xl md:text-4xl text-white tracking-wide text-balance leading-snug">
              {dict.home.ctaHeading2}
            </p>
          </div>

          <div className="relative z-10 flex justify-center w-full">
            <Link
              href="/jadwal"
              className="inline-block font-poppins font-normal text-base md:text-xl text-white bg-[#1A130F] hover:bg-[#291F15] px-8 sm:px-12 py-4 rounded-[16px] sm:rounded-[20px] shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 tracking-wider uppercase text-center max-w-xs sm:max-w-md"
            >
              <span className="block leading-tight">{dict.home.checkQuotaBtnLine1}</span>
              <span className="block leading-tight mt-0.5">{dict.home.checkQuotaBtnLine2}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
