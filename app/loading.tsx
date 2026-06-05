import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-transparent py-20 font-poppins">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 animate-pulse mb-6 drop-shadow-md">
        <Image 
          src="/image/logo.webp" 
          alt="Loading Kiswah Tour & Travel" 
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col items-center space-y-3">
        <h2 className="font-nova-square text-xl sm:text-2xl font-bold tracking-widest text-[#B48421] leading-none">
          MEMUAT
        </h2>
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 bg-[#B48421] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2.5 h-2.5 bg-[#291F15] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2.5 h-2.5 bg-[#B48421] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
