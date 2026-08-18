"use client";

import React, { useEffect, useRef, useState, type ReactNode } from 'react';

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

const animationStyles: Record<AnimationType, { hidden: React.CSSProperties; visible: React.CSSProperties }> = {
  'fade-up': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'fade-left': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'fade-right': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'zoom-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  style = {},
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const styles = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(isVisible ? styles.visible : styles.hidden),
        transition: `opacity 0.5s ease-out ${delay}ms`,
        willChange: 'opacity',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
