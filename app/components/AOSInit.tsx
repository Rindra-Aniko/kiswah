"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSInit = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        once: true, // whether animation should happen only once - while scrolling down
        offset: 50, // offset (in px) from the original trigger point
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease-out-cubic', // default easing for AOS animations
        delay: 100, // values from 0 to 3000, with step 50ms
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
};
