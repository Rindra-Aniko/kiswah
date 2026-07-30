import React from 'react';
import { Metadata } from 'next';
import PanduanUmrohContent from '../components/PanduanUmrohContent';

export const metadata: Metadata = {
  title: "Panduan Umroh & Doa Dzikir Lengkap",
  description: "Panduan lengkap tata cara ibadah Umroh dan doa-doa dzikir sesuai sunnah Nabi SAW, dipersembahkan oleh Kiswah Tour & Travel.",
  openGraph: {
    title: "Panduan Umroh & Doa Dzikir Lengkap | Kiswah.id",
    description: "Panduan lengkap tata cara ibadah Umroh dan doa-doa dzikir sesuai sunnah Nabi SAW, dipersembahkan oleh Kiswah Tour & Travel.",
    url: "https://kiswah.id/panduan-umroh",
    images: [
      {
        url: "/image/pelayanan.webp",
        width: 1200,
        height: 630,
        alt: "Panduan Umroh Kiswah.id",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panduan Umroh & Doa Dzikir Lengkap | Kiswah.id",
    description: "Panduan lengkap tata cara ibadah Umroh dan doa-doa dzikir sesuai sunnah Nabi SAW, dipersembahkan oleh Kiswah Tour & Travel.",
    images: ["/image/pelayanan.webp"],
  },
};

export default function PanduanUmrohPage() {
  return <PanduanUmrohContent />;
}