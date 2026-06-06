import React from 'react';
import Image from 'next/image';
import WhatsAppButton from '../components/WhatsAppButton.Component';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Layanan Umrah & Haji",
  description: "Pilihan paket perjalanan ibadah Umrah dan Haji Khusus eksklusif dengan pelayanan mutawwif berpengalaman dan akomodasi premium.",
  openGraph: {
    title: "Layanan Umrah & Haji | Kiswah.id",
    description: "Pilihan paket perjalanan ibadah Umrah dan Haji Khusus eksklusif dengan pelayanan mutawwif berpengalaman dan akomodasi premium.",
    url: "https://kiswah.id/layanan",
    images: ["/image/girl_tu.webp"],
  }
};

const keunggulanHaji = [
    "Waktu Tunggu jauh Lebih singkat 5-7 Tahun.",
    "Fasilitas Hotel Bintang 5 dan tenda maktab premium",
    "Pelayanan Eksklusif dari tanah air sampai tanah suci.",
    "Aman karena dijaga oleh petugas khusus yang memantau dan membimbing anda setiap saat"
  ];

const umrahPackages = [
  {
    name: 'EKONOMI',
    price: '32,5 Juta',
    duration: '12 Hari',
    features: [
      'Bus Full AC',
      'Air Zam-zam 5 Liter',
      'Hotel Dekat Masjidil Haram (15 Menit)',
      'Visa Umrah',
      'Perlengkapan Umrah',
      'Transport kerinci-padang',
      'Tour Badar',
    ],
  },
  {
    name: 'REGULER',
    price: '34,9 Juta',
    duration: '12 Hari',
    features: [
      'Bus Full AC',
      'Air Zam-zam 5 Liter',
      'Hotel Dekat Masjidil Haram (7 Menit)',
      'Visa Umrah',
      'Perlengkapan Umrah',
      'Transport kerinci-padang',
      'Tour Taif & Badar',
    ],
  },
  {
    name: 'ARBAIN',
    price: '37,9 Juta',
    duration: '16 Hari',
    features: [
      'Bus Full AC',
      'Air Zam-zam 5 Liter',
      'Hotel Dekat Masjidil Haram (7 Menit)',
      'Visa Umrah',
      'Perlengkapan Umrah',
      'Transport kerinci-padang',
      'Tour Taif & Badar',
      '16 Hari (Shalat 40 Waktu di Madinah)',
    ],
  },
];

export default function LayananPage() {
  function mapPackages() {
    return umrahPackages.map((pkg, index) => (
      <div 
        key={index}
        className="bg-[#F9F9F9] border-4 border-[#BD8A15] rounded-[2.5rem] p-8 flex flex-col justify-between shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Atas Kartu: Nama Paket & Harga */}
        <div>
          {/* Nama Paket */}
          <h3 className="text-2xl font-bold tracking-wide text-[#BD8A15] border-b-2 border-[#BD8A15]/30 pb-2 mb-6">
            {pkg.name}
          </h3>

          {/* Harga & Durasi */}
          <div className="mb-8 relative">
            <span className="text-sm font-semibold text-[#291F15]/60 uppercase block mb-1">Price</span>
            <div className="flex items-baseline justify-between">
              <span className="text-4xl font-extrabold text-[#291F15]">
                {pkg.price}
              </span>
              <span className="text-sm font-bold text-[#291F15] bg-[#BD8A15]/10 px-3 py-1 rounded-full">
                /{pkg.duration}
              </span>
            </div>
          </div>

          {/* Fitur / Fasilitas */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-[#291F15] mb-4">Fasilitas</h4>
            <ul className="space-y-3">
              {pkg.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2.5 text-sm text-[#291F15]/90 leading-snug">
                  {/* Bullet Custom Bulat Kecil Sesuai Brosur */}
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#291F15] mt-1.5 flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bawah Kartu: Tombol CTA (Reusable Component) */}
        <div className="mt-4">
          <WhatsAppButton 
            phoneNumber="+6285163731467"
            message={`Assalamu'alaikum Kiswah Tour & Travel, saya ingin bertanya mengenai Paket Umrah ${pkg.name}...`}
            className="w-full py-3.5 rounded-2xl"
          />
        </div>
      </div>
    ));
  }

  return (
    <div>
      <section 
        className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden pt-1 pb-8"
      >
      <Image
        src="/image/hero.webp"
        alt="Hero Background"
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover object-center select-none pointer-events-none z-0"
      />
      {/* Overlay Putih untuk kesan bersih dan elegan sekaligus masking opacity */}
      <div className="absolute inset-0 bg-white/80 z-10" />

      {/* Container Utama dengan Grid Responsif */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center z-20">
        
        {/* Kolom Kiri: Slot Visual Gambar Jamaah & Koper */}
        <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-start order-last lg:order-first mt-8 lg:mt-0">
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] aspect-[4/5] flex items-center justify-center">
            {/* Efek Soft Blur Glow di Latar Belakang agar Premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#BD8A15]/10 to-transparent blur-3xl rounded-full scale-75 z-0 transition-all duration-750 hover:from-[#BD8A15]/20" />
            
            {/* SILAHKAN GANTI src BERIKUT DENGAN PATH FOTO JAMAAH ANDA */}
            <div className="relative w-full h-full mt-12 transform scale-100 hover:scale-105 transition-transform duration-700 max-h-[50vh] md:max-h-[75vh] z-10">
              <Image
                src="/image/girl_tu.webp"
                alt="Jamaah Kiswah"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Teks Tagline */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-4 md:space-y-6">
          <h1 className="flex flex-col md:block leading-tight tracking-normal text-[#291F15]">
            {/* Baris Pertama: Kenyamanan Anda Beribadah (Menggunakan Font Poppins Bold/Semi-Bold) */}
            <span className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] uppercase block mb-1 md:mb-2">
              KENYAMANAN ANDA BERIBADAH
            </span>
            
            {/* Baris Kedua: Kombinasi Efek Dekoratif */}
            <span className="inline-flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-4 gap-y-1">
              {/* Kata "Prioritas" menggunakan font dekoratif Freehand */}
              <span className="font-freehand text-[#B48421] text-5xl sm:text-6xl md:text-7xl lg:text-8xl normal-case font-normal pt-1">
                Prioritas
              </span>
              {/* Kata "Utama Kami" kembali ke font Poppins dengan ketebalan lebih ringan */}
              <span className="font-poppins font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] tracking-wide mt-1 sm:mt-0">
                Utama Kami
              </span>
            </span>
          </h1>
          
          {/* Garis Aksen Pembatas Opsional yang Sangat Tipis & Elegan */}
          <div className="w-24 h-[2px] bg-[#BD8A15] mx-auto lg:mx-0 rounded-full mt-2 opacity-80" />
        </div>

      </div>
    </section>

      {/* Bagian Paket Umrah */}
      <section>
        <div className="bg-[#FFFFFF] text-[#291F15] font-sans antialiased min-h-[80vh] pt-12 pb-20 px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="max-w-7xl mx-auto text-center mb-16" data-aos="fade-up">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-4 h-10 bg-[#B48421]"></div>
              <h1 className="text-4xl font-bold tracking-wider uppercase text-[#291F15] font-nova-square">
                PAKET UMRAH
              </h1>
            </div>
            
            <p className="text-xl text-[#B48421] mb-2 font-freehand">
              Layanan Spesial & Plus untuk Anda
            </p>

            <p className="max-w-2xl mx-auto text-base text-[#291F15]/80 leading-relaxed font-normal font-poppins">
              Sempurnakan ibadah umrah Anda dengan penuh khusyuk bersama Kiswah Travel & Tour. 
              Kenyamanan Anda adalah prioritas kami, melalui pilihan paket yang dirancang khusus untuk Anda.
            </p>
          </div>

          {/* Cards Container Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" data-aos="fade-up" data-aos-delay="200">
            {mapPackages()}
          </div>
        </div>
      </section>

      {/* Divider Emas Antar Section */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary to-transparent opacity-40" />
      </div>

      
      <section className="bg-[#FFFFFF] text-[#291F15] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* PAKET HAJI KHUSUS */}
        <div className="flex items-center gap-3 mb-8" data-aos="fade-right">
          <div className="w-4 h-10 bg-[#B48421]" />
          <h2 className="text-4xl font-bold tracking-wider uppercase" style={{ fontFamily: "'Nova Square', sans-serif" }}>
            PAKET HAJI KHUSUS
          </h2>
        </div>

        {/* Teks Pemikat Utama */}
        <div className="max-w-4xl mb-14" style={{ fontFamily: "'Poppins', sans-serif" }} data-aos="fade-up">
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#291F15] mb-4">
            Mau naik haji tapi gak mau nunggu sampai puluhan tahun?
          </p>
          <p className="text-lg text-[#291F15]/80 leading-relaxed font-normal">
            Anda sudah tepat mengunjungi kami. Bukan cuma waktu tunggu yang singkat, 
            tetapi <span className="text-[#B48421] font-bold italic">kenyamanan dan kemewahan</span> beribadah juga akan Anda dapatkan di sini.
          </p>
        </div>

        {/* Grid Content: Foto & Nilai Jual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Kolom Kiri: Visual/Foto Jemaah di Depan Ka'bah */}
          <div className="lg:col-span-5 relative group" data-aos="fade-right">
            {/* Dekorasi Bingkai Belakang khas Gaya Eksklusif */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#BD8A15] to-[#B48421] rounded-[2rem] opacity-30 blur-sm group-hover:opacity-40 transition-opacity duration-300" />
            
            <div className="relative h-full min-h-[400px] rounded-[1.8rem] overflow-hidden border-4 border-[#BD8A15] bg-[#F9F9F9] shadow-xl">
              <Image 
                src="/image/haji_khusus.webp" 
                alt="Jemaah Haji Khusus Kiswah Travel" 
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Kolom Kanan: Poin Informasi "Apa yang Anda Dapatkan" */}
          <div className="lg:col-span-7 flex flex-col justify-center py-4" style={{ fontFamily: "'Poppins', sans-serif" }} data-aos="fade-left">
            <div>
              {/* Sub-judul dengan Sentuhan Elegant Touch */}
              <p className="text-xl text-[#B48421] mb-2" style={{ fontFamily: "'Freehand', cursive" }}>
                Fasilitas Plus & Istimewa
              </p>
              
              <h3 className="text-2xl font-bold text-[#291F15] mb-6 tracking-tight">
                Apa yang anda dapatkan ?
              </h3>

              {/* List Keunggulan */}
              <ul className="space-y-4 mb-10">
                {keunggulanHaji.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-base text-[#291F15]/90 leading-relaxed">
                    {/* Bullet Point Custom Menggunakan Warna Aksen Emas */}
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#B48421] mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Status Tombol / Badge "Coming Soon" */}
            <div className="pt-2">
              <span className="inline-flex items-center justify-center bg-[#291F15] text-[#FFFFFF] text-sm font-bold tracking-widest uppercase px-8 py-3.5 rounded-full border-2 border-[#B48421]/40 shadow-md cursor-not-allowed select-none transition-all duration-300 hover:border-[#B48421]">
                <span className="w-2 h-2 rounded-full bg-[#B48421] animate-pulse mr-2.5" />
                Coming Soon
              </span>
            </div>

          </div>

        </div>

      </div>
      </section>

      {/* Divider Emas Antar Section (Haji ke Tour) */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary to-transparent opacity-40" />
      </div>
      
      {/* Bagian Layanan paket tour */}
      <section className="bg-[#FFFFFF] text-[#291F15] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-4 h-10 bg-[#B48421]" />
          <h2 className="text-4xl font-bold tracking-wider uppercase" style={{ fontFamily: "'Nova Square', sans-serif" }}>
            PAKET TOUR MUSLIM
          </h2>
        </div>

        {/* Teks Pemikat Utama / Headline */}
        <div className="max-w-4xl mb-16" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#291F15] mb-4">
            Capek kerja terus? Mau helling tapi masih dapat pahala ?
          </p>
          <p className="text-lg text-[#291F15]/80 leading-relaxed font-normal">
            Biar enggak cuma fisik yang istirahat, yuk cobain wisata religi. Selain bikin pikiran adem (<span className="text-[#B48421] font-semibold">healing maksimal</span>), tabungan pahala juga makin nambah. Definisi healing dunia akhirat yang sesungguhnya!
          </p>
        </div>

        {/* Konten Utama dengan Tata Letak Zig-Zag */}
        <div className="space-y-20" style={{ fontFamily: "'Poppins', sans-serif" }}>
          
          {/* Blok 1: Destinasi Mesir (Gambar Kiri, Teks Kanan) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Visual Piramida */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-full min-h-[300px] rounded-[1.8rem] overflow-hidden border-4 border-[#BD8A15] bg-[#F9F9F9] shadow-xl group">
                <Image 
                  src="/image/mesir.jpg" 
                  alt="Tour Muslim Mesir Piramida Kiswah Travel" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Deskripsi Sejarah Mesir */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 py-4">
              <div>
                <p className="text-sm font-bold tracking-[0.2em] text-[#BD8A15] uppercase mb-2">Destinasi Pilihan</p>
                <h3 className="text-3xl font-bold text-[#291F15] font-nova-square uppercase tracking-wide">Mesir & Sejarahnya</h3>
              </div>
              <p className="text-[15px] text-[#291F15]/90 leading-relaxed font-poppins">
                Melihat langsung bukti sejarah yang diabadikan dalam Al-Qur'an. Berdiri kokoh di Mesir, Piramida menjadi saksi bisu runtuhnya sebuah tirani yang takluk oleh kesombongan.
              </p>
              <p className="text-[15px] text-[#291F15]/90 leading-relaxed font-poppins">
                Jangan lewatkan kesempatan menyelami kisah ini secara langsung. Kami siap menemani perjalanan Anda dengan fasilitas paling nyaman dan rute terbaik.
              </p>
            </div>
          </div>

          {/* Blok 2: Destinasi Istanbul (Teks Kiri, Gambar Kanan) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Deskripsi Sejarah Istanbul - Tampil pertama di mobile, kiri di desktop */}
            <div className="lg:col-span-7 order-last lg:order-first flex flex-col justify-center space-y-5 py-4">
              <div>
                <p className="text-sm font-bold tracking-[0.2em] text-[#BD8A15] uppercase mb-2">Destinasi Pilihan</p>
                <h3 className="text-3xl font-bold text-[#291F15] font-nova-square uppercase tracking-wide">Kejayaan Istanbul</h3>
              </div>
              <p className="text-[15px] text-[#291F15]/90 leading-relaxed font-poppins">
                Di sinilah Islam pernah berdiri sebagai kekuatan terbesar di dunia. Mari kembali ke masa kejayaan dan manjakan diri Anda dalam kemewahan klasik Islami di Istanbul.
              </p>
              <p className="text-[15px] text-[#291F15]/90 leading-relaxed font-poppins">
                Bersama Tour & Travel kami, Anda akan diajak menyusuri potongan sejarah yang megah dengan fasilitas yang nyaman, mewah, and berkelas. Siap melangkah ke masa lalu?
              </p>
            </div>
            {/* Visual Masjid Istanbul - Tampil kanan di desktop */}
            <div className="lg:col-span-5 relative order-first lg:order-last">
              <div className="relative h-full min-h-[300px] rounded-[1.8rem] overflow-hidden border-4 border-[#BD8A15] bg-[#F9F9F9] shadow-xl group">
                <Image 
                  src="/image/istanbul.jpg" 
                  alt="Tour Muslim Istanbul Turki Kiswah Travel" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Bagian Bawah: Tombol Status / Badge Coming Soon */}
        <div className="flex justify-center sm:justify-end mt-16" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <span className="inline-flex items-center justify-center bg-[#291F15] text-[#FFFFFF] text-sm font-bold tracking-widest uppercase px-8 py-3.5 rounded-full border-2 border-[#B48421]/40 shadow-md cursor-not-allowed select-none transition-all duration-300 hover:border-[#B48421]">
            <span className="w-2 h-2 rounded-full bg-[#B48421] animate-pulse mr-2.5" />
            Coming Soon
          </span>
        </div>

      </div>
    </section>

    </div>
  );
}
