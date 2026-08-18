'use client';

import React from 'react';
import Image from 'next/image';
import WhatsAppButton from './WhatsAppButton.Component';
import ScrollReveal from './ScrollReveal';
import pelayananImg from '@/public/image/pelayanan.webp';
import { useLanguage } from '@/lib/i18n/context';

interface SchedulePackage {
  id: number;
  monthYear: string;
  packageName: string;
  hotel1: string;
  hotel1Stars: number;
  hotel2: string;
  hotel2Stars: number;
  airline: string;
  seatsAvailable: string;
}

export default function JadwalContent({ packages }: { packages: SchedulePackage[] }) {
  const { dict } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[80vh] md:min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src={pelayananImg}
          alt="Baitullah Background"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center select-none pointer-events-none z-0"
        />
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 sm:via-white/70 to-white/10 md:to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
          <div className="max-w-2xl">
            <div className="flex flex-col justify-center text-left space-y-4 md:space-y-5">
              <h1 className="leading-tight tracking-normal text-[#291F15] flex flex-col">
                <span className="font-nova-square font-bold text-2xl sm:text-3xl md:text-4xl  uppercase tracking-wide mb-1 text-[#B48421]">
                  {dict.jadwal.heroTagline}
                </span>
                <span className="inline-flex flex-row items-baseline gap-x-3 sm:gap-x-4 mt-1 sm:mt-2">
                  <span className="font-freehand text-[#291F15] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal pt-1 italic">
                    {dict.jadwal.heroSub}
                  </span>
                  <span className="font-nova-square font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider text-[#B48421]">
                    {dict.jadwal.heroBaitullah}
                  </span>
                </span>
              </h1>
              <p className="font-poppins font-normal text-[#291F15] text-base sm:text-lg md:text-xl tracking-medium max-w-md pt-2">
                {dict.jadwal.heroCTA}
              </p>
              <div className="w-20 h-[3px] bg-[#BD8A15] rounded-full mt-2 opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Kuota */}
      <section className="w-full bg-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="flex flex-col items-center text-center mb-16" animation="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-[#291F15] uppercase tracking-[0.15em] mb-4 font-nova-square">
              {dict.jadwal.title}
            </h2>
            <p className="text-[#B48421] font-freehand text-2xl md:text-3xl">{dict.jadwal.subtitle}</p>
            <div className="w-24 h-1 bg-[#BD8A15] mt-6 rounded-full opacity-60" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {packages.map((item, index) => {
              const isFull = item.seatsAvailable?.trim().toUpperCase() === 'FULL';

              return (
                <ScrollReveal 
                  key={item.id}
                  animation="fade-up"
                  delay={(index % 4) * 100}
                  className="bg-[#FFFFFF] border-2 border-[#BD8A15] rounded-[2rem] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div>
                    <h3 className="font-nova-square font-bold text-3xl text-[#291F15] tracking-wide mb-5">
                      {item.monthYear}
                    </h3>

                    <div className="space-y-4 font-poppins text-[#291F15]">
                      <div>
                        <p className="font-bold text-sm leading-snug">{item.packageName}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
                        <span className="font-medium text-gray-700">{item.hotel1}</span>
                        <div className="flex text-[#B48421] text-xs">
                          {Array.from({ length: item.hotel1Stars }).map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
                        <span className="font-medium text-gray-700">{item.hotel2}</span>
                        <div className="flex text-[#B48421] text-xs">
                          {Array.from({ length: item.hotel2Stars }).map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1 border-t border-gray-100">
                        <span className="text-xs text-gray-500 uppercase tracking-wider">{dict.jadwal.flight}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-poppins font-black text-xs italic tracking-tighter text-[#291F15]">
                            {item.airline}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col items-center space-y-4">
                    <div className="text-center font-poppins text-base text-[#291F15]">
                      <span>{dict.jadwal.quotaAvailable} </span>
                      <span className={`font-bold text-xl ${isFull ? 'tracking-widest' : 'font-semibold'}`}>
                        {item.seatsAvailable}
                      </span>
                    </div>

                    <WhatsAppButton 
                      phoneNumber="+6285163731467"
                      message={`Assalamu'alaikum Kiswah Tour & Travel, saya ingin bertanya mengenai ${item.packageName} untuk keberangkatan ${item.monthYear}...`}
                      disabled={isFull}
                      label={dict.jadwal.selectPackage}
                      className="w-full max-w-[180px] py-2 px-4 rounded-xl"
                    />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Motivational Quote Section */}
      <section className="bg-[#F9F9F9] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
           <span className="font-nova-square font-bold text-[20vw] uppercase text-[#BD8A15]">KISWAH</span>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-block">
            <p className="font-freehand text-4xl md:text-6xl text-[#B48421] mb-2 leading-relaxed">
              {dict.jadwal.quote}
            </p>
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#BD8A15] to-transparent opacity-40" />
          </div>
          
          <p className="font-poppins text-lg md:text-2xl text-[#291F15] italic leading-relaxed font-light">
            {dict.jadwal.quoteDesc}
          </p>
          
          <div className="flex justify-center items-center gap-4 text-[#BD8A15]">
            <div className="h-[1px] w-12 bg-[#BD8A15]/30" />
            <div className="flex gap-2">
              <span>★</span><span>★</span><span>★</span>
            </div>
            <div className="h-[1px] w-12 bg-[#BD8A15]/30" />
          </div>
        </div>
      </section>
    </div>
  );
}
