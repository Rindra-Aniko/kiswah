"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/lib/i18n/context';

interface Testimonial {
  id: number;
  name: string;
  profession: string;
  rating: number;
  review: string;
}

export default function TestimonialCarousel() {
  const { dict } = useLanguage();

  const rawTestimonials = (dict.testimoni as any).list || [];
  const testimonials: Testimonial[] = rawTestimonials.map((item: any) => ({
    id: item.id,
    name: item.name,
    profession: item.profession,
    rating: 5,
    review: item.review,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isMounted, setIsMounted] = useState(false);

  // Update items to show based on window size
  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonials.length - itemsToShow;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Auto play
  useEffect(() => {
    if (!isMounted) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext, isMounted]);

  return (
    <section className="w-full bg-[#fdfcfb] py-20 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#B48421]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#291F15]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="font-poppins text-[#B48421] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
            {dict.testimoni.badge}
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#291F15] tracking-tight">
            {dict.testimoni.title}
          </h2>
          <div className="w-24 h-1 bg-[#B48421] mx-auto mt-6 rounded-full" />
          <p className="font-poppins text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            {dict.testimoni.descPart1}
            <span className="text-[#B48421] font-bold">{dict.testimoni.descHighlight}</span>
            {dict.testimoni.descPart2}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group min-h-[420px]">
          
          {/* Navigasi Kiri */}
          <button 
            type="button"
            onClick={handlePrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 p-4 min-w-[48px] min-h-[48px] rounded-full bg-white shadow-xl text-[#291F15] hover:bg-[#B48421] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center border border-gray-100 cursor-pointer"
            aria-label="Previous Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Masking Viewport */}
          <div className="overflow-hidden">
            <div 
              className="[--items-to-show:1] md:[--items-to-show:2] lg:[--items-to-show:3] flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(calc(-1 * ${currentIndex} * 100% / var(--items-to-show)))` } as React.CSSProperties}
            >
              {testimonials.map((item) => (
                <div 
                  key={item.id} 
                  className="w-[calc(100%/var(--items-to-show))] flex-shrink-0 px-3 transition-all duration-500"
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col h-[380px] relative hover:shadow-[0_20px_50px_-12px_rgba(180,132,33,0.15)] transition-all duration-500 transform hover:-translate-y-2 group/card">
                    
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-[#B48421]/10 group-hover/card:text-[#B48421]/20 transition-colors duration-500">
                      <svg width="40" height="32" viewBox="0 0 48 38" fill="currentColor">
                        <path d="M10.7 38c-3.1 0-5.7-.9-7.8-2.6C.8 33.6 0 31.1 0 27.8c0-3.3 1.2-6.5 3.5-9.6 2.3-3.1 5.3-6.1 9-9L15.3 13c-2.4 1.8-4.3 3.6-5.7 5.3-1.4 1.7-2.2 3.3-2.4 4.8.4-.1.8-.2 1.3-.2 2.6 0 4.8.9 6.6 2.6 1.8 1.7 2.7 3.9 2.7 6.6s-.9 4.9-2.7 6.6c-1.8 1.7-4.1 2.5-6.6 2.5zm27.8 0c-3.1 0-5.7-.9-7.8-2.6-2.1-1.8-3.1-4.3-3.1-7.6 0-3.3 1.2-6.5 3.5-9.6 2.3-3.1 5.3-6.1 9-9L43.1 13c-2.4 1.8-4.3 3.6-5.7 5.3-1.4 1.7-2.2 3.3-2.4 4.8.4-.1.8-.2 1.3-.2 2.6 0 4.8.9 6.6 2.6 1.8 1.7 2.7 3.9 2.7 6.6s-.9 4.9-2.7 6.6c-1.8 1.7-4.1 2.5-6.6 2.5z" />
                      </svg>
                    </div>

                    {/* Review Text */}
                    <div className="flex-grow">
                      {/* Star Rating */}
                      <div className="flex space-x-1 mb-5">
                        {[...Array(item.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-[#B48421] fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="font-poppins text-[13.5px] sm:text-[14.5px] text-gray-700 leading-[1.7] italic font-medium">
                        "{item.review}"
                      </p>
                    </div>

                    {/* Profile */}
                    <div className="flex items-center space-x-3 border-t border-gray-100 pt-5">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B48421] to-[#291F15] p-[2px] flex-shrink-0">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <span className="text-[#291F15] text-base font-bold font-nova-square">
                            {item.name.split(' ').map(n => n[0]).filter((_, i) => i < 2).join('')}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-poppins font-bold text-base text-[#291F15] leading-tight">
                          {item.name}
                        </p>
                        <p className="font-poppins text-[10px] text-[#B48421] font-bold tracking-wider mt-1 uppercase">
                          {item.profession}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigasi Kanan */}
          <button 
            type="button"
            onClick={handleNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 p-4 min-w-[48px] min-h-[48px] rounded-full bg-white shadow-xl text-[#291F15] hover:bg-[#B48421] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center border border-gray-100 cursor-pointer"
            aria-label="Next Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        {/* Indicators */}
        <div className="min-h-[48px] flex items-center justify-center gap-1 mt-10">
          {testimonials.map((item, index) => {
            const isActive = currentIndex === index;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(Math.min(index, maxIndex))}
                className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B48421] rounded-full transition-transform active:scale-95 cursor-pointer"
                aria-label={`Go to slide ${index + 1}`}
              >
                <span
                  className={`h-2 rounded-full transition-all duration-500 block ${
                    isActive ? 'bg-[#B48421] w-10' : 'bg-gray-200 w-2 hover:bg-gray-300'
                  }`}
                />
              </button>
            );
          })}
        </div>

      </div>
    </section>
    
  );
}
