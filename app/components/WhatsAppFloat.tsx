"use client";

import React, { useState, useEffect } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';

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
        <IoLogoWhatsapp className="w-8 h-8" />
        
        {/* Glow Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 group-hover:animate-ping -z-10"></span>
      </a>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppFloat;
