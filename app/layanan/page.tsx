import React from 'react';
import { Metadata } from 'next';
import LayananContent from '../components/LayananContent';

export const metadata: Metadata = {
  title: "Layanan Umrah & Haji",
  description: "Pilihan paket perjalanan ibadah Umrah dan Haji Khusus eksklusif dengan pelayanan mutawwif berpengalaman dan akomodasi premium.",
  openGraph: {
    title: "Layanan Umrah & Haji | Kiswah.id",
    description: "Pilihan paket perjalanan ibadah Umrah dan Haji Khusus eksklusif dengan pelayanan mutawwif berpengalaman dan akomodasi premium.",
    url: "https://kiswah.id/layanan",
    images: [
      {
        url: "/image/girl_tu.webp",
        width: 1200,
        height: 630,
        alt: "Layanan Umrah & Haji Kiswah.id",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan Umrah & Haji | Kiswah.id",
    description: "Pilihan paket perjalanan ibadah Umrah dan Haji Khusus eksklusif dengan pelayanan mutawwif berpengalaman dan akomodasi premium.",
    images: ["/image/girl_tu.webp"],
  },
};

export default function LayananPage() {
  return <LayananContent />;
}

