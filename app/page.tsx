import Cekpaket from "./components/Cekpaket.Component";
import TestimoniCarousel from "./components/Testimoni.Component";
import ScrollReveal from "./components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export default function BerandaPage() {
  const featureList = [
    {
      id: 1,
      title: "Manasik Private Gratis",
      description: "Nikmati 2 sesi manasik privat tanpa biaya tambahan, sebagai pendamping manasik bersama, guna mempersiapkan ibadah Umroh secara lebih optimal sebelum keberangkatan."
    },
    {
      id: 2,
      title: "Koper Langsung Tiba di Kamar Hotel",
      description: "Nikmati layanan eksklusif tanpa perlu mengurus koper saat keberangkatan. Kami akan memastikan koper jamaah langsung tersedia di kamar hotel, sehingga fokus untuk beribadah dengan tenang dan khusyuk."
    },
    {
      id: 3,
      title: "Lokasi Hotel Dekat Dengan Tempat Ibadah",
      description: "Hotel yang kami pilih berada di lokasi premium, dengan akses sekitar 5–7 menit berjalan kaki ke Masjidil Haram di Makkah dan Masjid Nabawi di Madinah."
    },
    {
      id: 4,
      title: "Gratis Tour Plus ke Taif dan Badar",
      description: "Selain melaksanakan ibadah umrah, jemaah akan mendapatkan kesempatan mengikuti wisata religi ke Thaif, dan Jabal Nur."
    },
    {
      id: 5,
      title: "Jumlah Umroh 3 Kali",
      description: "Dapatkan kesempatan 3x Umroh dalam satu perjalanan! Wujudkan niat tulus menghadiahkan pahala ibadah Umroh untuk orang tua dan keluarga tercinta."
    },
    {
      id: 6,
      title: "Mutawwif Handal dan Berpengalaman",
      description: "Mutawwif kami lebih dari sekadar pembimbing ibadah; mereka adalah pendamping terverifikasi yang peka secara sosial. Kami memastikan bahwa ibadah Anda tidak hanya terarah dengan benar, namun Anda juga memastikan jamaah merasa nyaman."
    }
  ];



  return (
    <main>
      {/* Section utama: Ganti 'bg-[#291F15]' dengan kelas background image Anda secara manual (misal: bg-[url('/path/to/hero.jpg')]) */}
    <section 
      className="relative w-full min-h-[600px] md:min-h-[90vh] flex items-center overflow-hidden py-16 px-4 sm:px-8 md:px-16 lg:px-24"
    >
      <Image
        src="/image/hero.webp"
        alt="Hero Background"
        fill
        priority
        fetchPriority="high"
        quality={75}
        sizes="(max-width: 768px) 480px, 30vw"
        className="object-cover object-center select-none pointer-events-none z-0"
      />
      {/* Overlay Putih untuk kesan bersih dan elegan */}
      <div className="absolute inset-0 bg-white/78 z-10" />

      {/* Konten Utama */}
      <div className="relative z-20 max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Sisi Kiri: Judul, Sub-judul, dan Tagline */}
        <div className="lg:col-span-8 flex flex-col items-start space-y-4">
          
          {/* Brand KISWAH - Menggunakan Font Nova Square */}
          <div className="flex flex-col text-left">
            <h1 className="font-nova-square text-5xl sm:text-6xl md:text-7xl font-bold tracking-widest text-[#B48421] drop-shadow-sm leading-none">
              KISWAH
            </h1>
            <p className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-[#291F15] tracking-wide uppercase mt-2">
              Tour & Travel
            </p>
          </div>

          {/* Daftar Layanan Utama */}
          <p className="font-poppins text-lg sm:text-xl md:text-2xl text-gray-800 font-medium tracking-wide">
            Umrah - Haji Khusus - Muslim Tour
          </p>

          {/* Banner Putih: "Plus PELAYANAN SPESIAL" */}
          <div className="flex items-center space-x-3 pt-4 sm:pt-6">
            {/* Kata "Plus" - Menggunakan Font Dekoratif Freehand */}
            <span className="font-freehand text-4xl sm:text-5xl text-[#B48421] transform -rotate-12 tracking-wide font-normal block pr-2">
              Plus
            </span>
            
            {/* Badge Kapsul Putih */}
            <div className="bg-[#291F15] text-white font-poppins font-normal px-5  py-1 rounded-full shadow-lg text-xl sm:text-2xl md:text-3xl tracking-wide flex items-center whitespace-nowrap">
              <span>PELAYANAN&nbsp;</span>
              <span className="text-[#B48421]">SPESIAL</span>
            </div>
          </div>

        </div>

      </div>

      {/* Badge Promosi "GRATIS TOUR" - Diposisikan di sudut kanan bawah agar tidak menutupi subjek foto */}
      <div className="absolute bottom-6 right-4 sm:right-8 md:right-16 lg:right-24 z-30">
        {/* Badge Poligon / Kotak Miring Hitam Emas */}
        <div className="relative bg-[#1A130F] border-l-4 border-[#B48421] text-white px-8 py-6 rounded-br-3xl shadow-2xl transform lg:rotate-2 max-w-xs w-full border border-gray-800">
          {/* Efek pita aksen emas di ujung kanan atas */}
          <div className="absolute top-0 right-0 w-3 h-16 bg-[#B48421] transform translate-x-1 -translate-y-2 rotate-45 hidden sm:block" />
          
          <div className="flex flex-col text-left space-y-1">
            <span className="font-poppins text-[#B48421] font-extrabold text-2xl sm:text-3xl tracking-wider uppercase leading-tight">
              GRATIS
            </span>
            <span className="font-poppins text-white font-bold text-xl sm:text-2xl tracking-wide uppercase leading-none pb-2">
              TOUR
            </span>
            <span className="font-poppins text-white font-semibold text-lg sm:text-xl tracking-tight pt-1">
              Ta&apos;if & Badar
            </span>
          </div>
        </div>
      </div>
    </section>

      {/* Section tambahan:kenapa spesial */}
    <section className="w-full bg-transparent py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Judul Section Utama */}
        <ScrollReveal animation="fade-up">
        <div className="text-center mb-16">
          <h2 className="font-freehand text-4xl sm:text-5xl md:text-6xl text-[#B48421] inline-block tracking-wide">
            Kenapa ini
          </h2>
          <span className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-[#291F15] ml-3 tracking-tight">
            spesial ?
          </span>
        </div>
        </ScrollReveal>

        {/* Grid Konten (Terbagi 2 Kolom pada Desktop dengan garis pembatas tengah) */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12">
          
          {/* Garis Pembatas Vertikal Tengah (Hanya muncul di layar MD ke atas) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300 transform -translate-x-1/2" />

          {featureList.map((item, index) => (
            <ScrollReveal key={item.id} animation="fade-up" delay={index * 100}>
            <div className="flex items-start space-x-4 sm:space-x-5">
              
              {/* Lingkaran Nomor Urut (Aksen Emas) */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#B48421] flex items-center justify-center shadow-md">
                <span className="font-poppins font-bold text-white text-lg sm:text-xl">
                  {item.id}
                </span>
              </div>

              {/* Teks Konten */}
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

      {/* cek button */}
      <Cekpaket />
      
      { /* Section tambahan: Testimoni */}
      <TestimoniCarousel />

      <section className="w-full bg-transparent py-12 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto rounded-[24px] sm:rounded-[32px] px-6 py-12 sm:py-16 md:py-20 text-center shadow-xl relative overflow-hidden">
          <Image
            src="/image/pelayanan.webp"
            alt="Pelayanan Background"
            fill
            quality={75}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center select-none pointer-events-none z-0"
          />
          {/* Overlay Emas untuk menjaga teks tetap terbaca sekaligus memberi kesan premium */}
          <div className="absolute inset-0 bg-[#B48421]/90 z-10 mix-blend-multiply" />
          
          <div className="relative z-20 flex flex-col space-y-2 mb-8 sm:mb-10">
            <h2 className="font-poppins font-medium text-xl sm:text-2xl md:text-4xl text-white tracking-wide text-balance leading-snug">
              Ingin ke Tanah Suci, tanpa perlu ribet?
            </h2>
            <p className="font-poppins font-semibold text-xl sm:text-2xl md:text-4xl text-white tracking-wide text-balance leading-snug">
              Amankan kuota Anda bulan ini !
            </p>
          </div>

          <div className="relative z-10 flex justify-center">
            <Link
              href="/jadwal"
              className="inline-block font-poppins font-normal text-base  md:text-xl text-white bg-[#1A130F] hover:bg-[#291F15] px-8 sm:px-12 py-4 rounded-[16px] sm:rounded-[20px] shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 tracking-wider uppercase text-center max-w-xs sm:max-w-md"
            >
              <span className="block leading-tight">CEK KUOTA DAN</span>
              <span className="block leading-tight mt-0.5">JADWAL</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
