"use client";

import React, { useState, useEffect } from 'react';

const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Tampilkan tooltip otomatis setelah 3 detik
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = "https://wa.me/6285163731467?text=Assalamu'alaikum%20Kiswah%20Tour%20%26%20Travel,%20saya%20ingin%20bertanya%20mengenai%20layanan%20umrah...";

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none">
      {/* Tooltip / Bubble Chat */}
      <div 
        className={`bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-xl border border-gray-100 max-w-[220px] transition-all duration-500 transform origin-bottom-right pointer-events-auto
        ${showTooltip ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10'}`}
      >
        <p className="text-sm font-medium leading-tight">
          Butuh bantuan? Konsultasi gratis via WhatsApp kami 😊
        </p>
        {/* Panah Tooltip */}
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45"></div>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="pointer-events-auto w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90 group relative animate-bounce-slow"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor">
          <path d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" fillRule="evenodd"/>
        </svg>
        
        {/* Glow Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 group-hover:animate-ping -z-10"></span>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
