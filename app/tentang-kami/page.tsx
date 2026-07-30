import React from 'react';
import { Metadata } from 'next';
import TentangKamiContent from '../components/TentangKamiContent';

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Sejarah, visi-misi, serta tim pengelola profesional dari Kiswah Al Mabrur Indonesia (Kiswah Tour & Travel).",
  openGraph: {
    title: "Tentang Kami | Kiswah.id",
    description: "Sejarah, visi-misi, serta tim pengelola profesional dari Kiswah Al Mabrur Indonesia (Kiswah Tour & Travel).",
    url: "https://kiswah.id/tentang-kami",
    images: [
      {
        url: "/image/melepas_jemaah.webp",
        width: 1200,
        height: 630,
        alt: "Tentang Kami Kiswah.id",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Kami | Kiswah.id",
    description: "Sejarah, visi-misi, serta tim pengelola profesional dari Kiswah Al Mabrur Indonesia (Kiswah Tour & Travel).",
    images: ["/image/melepas_jemaah.webp"],
  },
};

export default function TentangKamiPage() {
  return <TentangKamiContent />;
}

