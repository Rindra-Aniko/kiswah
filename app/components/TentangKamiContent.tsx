'use client';

import React from 'react';
import Image from 'next/image';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import pelayananImg from '@/public/image/pelayanan.webp';
import melepasJemaahImg from '@/public/image/melepas_jemaah.webp';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '@/lib/i18n/context';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageSrc: string;
}

const managementStaff: TeamMember[] = [
  { id: 4, name: 'PUTRIA NURMILA SARI, S.E', role: '', imageSrc: '/team/putria.webp' },
  { id: 5, name: 'SALSA REZKIANI, S.Gz', role: '', imageSrc: '/team/salsa.webp' },
  { id: 6, name: 'CANDRA VEDO, SH', role: '', imageSrc: '/team/candra.webp' },
  { id: 7, name: 'FRISKA CANDRA, S.Pd', role: '', imageSrc: '/team/friska.webp' },
];

export default function TentangKamiContent() {
  const { dict } = useLanguage();
  const [showInteractiveMap, setShowInteractiveMap] = React.useState(false);

  const professionalTeam: TeamMember[] = [
    { id: 1, name: 'DR. HADIAL PUTRA, M.Ag', role: (dict.tentang as any).roleCommissioner || 'Komisaris', imageSrc: '/team/hadial.webp' },
    { id: 2, name: 'IDMANITA JULIANA, SH, MH', role: (dict.tentang as any).rolePresidentDirector || 'Direktur Utama', imageSrc: '/team/it.webp' },
    { id: 3, name: 'EDWIS TOMI RAHMAN, S.Pd.I', role: (dict.tentang as any).roleOperationalDirector || 'Direktur Operasional', imageSrc: '/team/buya_duis.webp' },
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
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#291F15] leading-tight tracking-tight max-w-3xl mx-auto drop-shadow-sm">
            {dict.tentang.heroTitle}
          </h2>
          <div className="w-16 h-[3px] bg-[#BD8A15] mx-auto rounded-full opacity-80" />
          <p className="font-poppins font-normal text-sm sm:text-base md:text-lg text-[#291F15]/90 leading-relaxed max-w-2xl mx-auto tracking-normal">
            {dict.tentang.heroDesc}
          </p>
        </div>
      </section>

      <section className="w-full bg-transparent py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl text-[#B48421] tracking-wide text-center mb-10 md:mb-14">
            {dict.tentang.aboutUsTitle}
          </h2>

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center mb-12 md:mb-16">
            <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[450px] aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-[#BD8A15]/30 shadow-lg max-h-[45vh]">
                <Image
                  src={melepasJemaahImg}
                  alt="Tim Pelayanan Kiswah Tour & Travel"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 480px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="col-span-1 lg:col-span-7 flex flex-col justify-center space-y-4 text-center lg:text-left">
              <p className="font-poppins font-normal text-sm sm:text-base text-[#291F15]/90 leading-relaxed max-w-xl">
                {dict.tentang.aboutUsDesc}
              </p>
            </div>
          </div>

          <div className="w-full max-w-[340px] sm:max-w-[480px] md:max-w-[580px] border-2 border-[#B48421] rounded-2xl md:rounded-3xl py-3 px-6 md:py-4 md:px-8 text-center transition-all duration-300 hover:bg-[#B48421]/5">
            <p className="font-poppins font-medium text-base sm:text-lg md:text-xl text-[#B48421] tracking-wider uppercase">
              {dict.tentang.ppiu}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-transparent py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
          <div className="flex flex-col items-center">
            <ScrollReveal className="text-center space-y-2 mb-12 sm:mb-16" animation="fade-up">
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-[#B48421] tracking-wide uppercase">
                {dict.tentang.teamTitle}
              </h2>
              <p className="font-poppins font-normal text-sm sm:text-base md:text-lg text-[#291F15]/90 tracking-medium">
                {dict.tentang.teamSubtitle}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-3 gap-3 sm:gap-10 md:gap-14 lg:gap-10 w-full max-w-5xl justify-center mx-auto">
              {professionalTeam.map((member, index) => (
                <ScrollReveal key={member.id} animation="zoom-in" delay={index * 150} className="flex flex-col items-center text-center space-y-2 sm:space-y-4 lg:space-y-3 group">
                  <div className="relative w-20 h-20 sm:w-48 sm:h-48 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-[#BD8A15]/20 shadow-md transition-all duration-500 group-hover:border-[#BD8A15]/60 group-hover:shadow-lg">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 200px, 160px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="font-poppins font-semibold text-[8px] sm:text-lg lg:text-base text-[#B48421] leading-tight px-1 tracking-tighter sm:tracking-tight">
                      {member.name}
                    </h3>
                    <p className="font-poppins font-medium text-[9px] sm:text-base lg:text-sm text-[#291F15] leading-tight">
                      {member.role}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-[#B48421] tracking-wide uppercase">
                {dict.tentang.managementTitle}
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full max-w-5xl justify-center mx-auto">
              {managementStaff.map((member) => (
                <div key={member.id} className="flex flex-col items-center text-center space-y-2 lg:space-y-3 group relative">
                  <div className="relative w-24 h-24 sm:w-44 sm:h-44 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-[#BD8A15]/20 shadow-sm transition-all duration-500 group-hover:border-[#BD8A15]/60 group-hover:shadow-md">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100px, (max-width: 1024px) 180px, 128px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-[10px] sm:text-base lg:text-xs text-[#B48421] leading-tight px-1 tracking-tight">
                      {member.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-transparent py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center space-y-3 mb-12 md:mb-16">
            <h2 className="font-nova-square font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#B48421] tracking-wide uppercase">
              {dict.tentang.headquartersTitle}
            </h2>
            <div className="flex flex-col items-center space-y-1">
              <div className="w-32 h-[3px] bg-[#BD8A15] rounded-full opacity-90" />
              <div className="w-20 h-[1.5px] bg-[#BD8A15] rounded-full opacity-60" />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 lg:gap-8 auto-rows-[220px] sm:auto-rows-[260px] md:auto-rows-[280px]">
            <div className="md:col-span-5 md:row-span-1 group relative rounded-[2rem] overflow-hidden border border-[#BD8A15]/20 shadow-sm transition-all duration-500 hover:border-[#BD8A15]/60 hover:shadow-md">
              <Image
                src="/gallery/kantor.webp"
                alt="Kantor Pusat Kiswah Umrah Maqbul"
                fill
                quality={75}
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#291F15]/5 pointer-events-none group-hover:bg-transparent transition-all duration-500" />
            </div>

            <div className="md:col-span-7 md:row-span-2 group relative rounded-[2rem] overflow-hidden border border-[#BD8A15]/20 shadow-sm transition-all duration-500 hover:border-[#BD8A15]/60 hover:shadow-md">
              <Image
                src="/gallery/ruang_bos.webp"
                alt="Ruang Resepsionis Utama Kiswah Tour & Travel"
                fill
                quality={75}
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#291F15]/5 pointer-events-none group-hover:bg-transparent transition-all duration-500" />
            </div>

            <div className="md:col-span-3 md:row-span-1 group relative rounded-[2rem] overflow-hidden border border-[#BD8A15]/20 shadow-sm transition-all duration-500 hover:border-[#BD8A15]/60 hover:shadow-md">
              <Image
                src="/gallery/perlengakapan.webp"
                alt="Perlengkapan Umroh Resmi Kiswah"
                fill
                quality={65}
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#291F15]/5 pointer-events-none group-hover:bg-transparent transition-all duration-500" />
            </div>

            <div className="md:col-span-2 md:row-span-1 group relative rounded-[2rem] overflow-hidden border border-[#BD8A15]/20 shadow-sm transition-all duration-500 hover:border-[#BD8A15]/60 hover:shadow-md">
              <Image
                src="/gallery/ruang_tunggu.webp"
                alt="Ruang Tunggu Pelayanan Jamaah Kiswah"
                fill
                quality={75}
                sizes="(max-width: 768px) 100vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#291F15]/5 pointer-events-none group-hover:bg-transparent transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-transparent py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 mb-12 md:mb-16">
            <h2 className="font-nova-square font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#B48421] tracking-wide uppercase">
              {dict.tentang.contactTitle}
            </h2>
            <div className="w-24 h-[3px] bg-[#BD8A15] mx-auto rounded-full opacity-90" />
            <p className="font-poppins font-normal text-sm sm:text-base text-[#291F15]/80 max-w-md mx-auto pt-1">
              {dict.tentang.contactSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-between bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#BD8A15]/20 rounded-[2rem] p-6 sm:p-8 shadow-sm">
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-[#B48421]/10 rounded-xl text-[#B48421] mt-1 transition-all duration-300 group-hover:bg-[#B48421] group-hover:text-white">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 font-poppins text-[#291F15]">
                    <h4 className="font-bold text-base">{dict.tentang.officeAddress}</h4>
                    <p className="text-sm text-[#291F15]/80 leading-relaxed">
                      {dict.tentang.officeAddressText}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-[#B48421]/10 rounded-xl text-[#B48421] mt-1 transition-all duration-300 group-hover:bg-[#B48421] group-hover:text-white">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 font-poppins text-[#291F15]">
                    <h4 className="font-bold text-base">{dict.tentang.contactUs}</h4>
                    <p className="text-sm text-[#291F15]/80">
                      +62 87739832387<br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-[#B48421]/10 rounded-xl text-[#B48421] mt-1 transition-all duration-300 group-hover:bg-[#B48421] group-hover:text-white">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 font-poppins text-[#291F15]">
                    <h4 className="font-bold text-base">{dict.tentang.officialEmail}</h4>
                    <p className="text-sm text-[#291F15]/80 break-all">
                      support@kiswah.id
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-[#B48421]/10 rounded-xl text-[#B48421] mt-1 transition-all duration-300 group-hover:bg-[#B48421] group-hover:text-white">
                    <FiClock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 font-poppins text-[#291F15]">
                    <h4 className="font-bold text-base">{dict.tentang.opsHours}</h4>
                    <p className="text-sm text-[#291F15]/80">
                      {dict.tentang.opsHoursText}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#BD8A15]/10">
                <a
                  href="https://wa.me/6287739832387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3 px-6 rounded-xl font-poppins font-medium text-sm text-white bg-[#B48421] hover:bg-[#BD8A15] transition-all duration-300 shadow-sm active:scale-98"
                >
                  {dict.tentang.waBtn}
                </a>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-7 relative min-h-[380px] sm:min-h-[420px] md:min-h-[460px] rounded-[2rem] overflow-hidden border border-[#BD8A15]/20 shadow-sm flex items-center justify-center bg-gradient-to-br from-[#291F15]/5 via-white to-[#BD8A15]/10">
              {showInteractiveMap ? (
                <iframe
                  src="https://maps.google.com/maps?q=Dusun%20Baru%20Semurup,%20Air%20Hangat%20Barat,%20Kerinci,%20Jambi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kantor Kiswah Tour & Travel - Kerinci, Jambi"
                  className="absolute inset-0 w-full h-full grayscale-[10%] contrast-[105%] hover:grayscale-0 transition-all duration-500"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-center space-y-5 w-full h-full relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-[#B48421]/15 text-[#B48421] flex items-center justify-center shadow-inner">
                    <FiMapPin className="w-10 h-10" />
                  </div>
                  <div className="space-y-1.5 max-w-sm">
                    <h4 className="font-poppins font-bold text-lg text-[#291F15]">
                      Peta Lokasi Kantor Pusat
                    </h4>
                    <p className="font-poppins text-xs sm:text-sm text-[#291F15]/75 leading-relaxed">
                      Dusun Baru Semurup, Air Hangat Barat, Kab. Kerinci, Jambi
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full max-w-xs justify-center">
                    <button
                      type="button"
                      onClick={() => setShowInteractiveMap(true)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-poppins font-semibold text-xs text-white bg-[#B48421] hover:bg-[#966a10] shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
                    >
                      <FiMapPin className="w-4 h-4" />
                      <span>Muat Peta Interaktif</span>
                    </button>
                    <a
                      href="https://maps.google.com/?q=Dusun%20Baru%20Semurup,%20Air%20Hangat%20Barat,%20Kerinci,%20Jambi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-poppins font-semibold text-xs text-[#291F15] bg-white hover:bg-gray-50 border border-gray-200 shadow-sm transition-all duration-300 active:scale-95"
                    >
                      <span>Buka di Google Maps</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
