import React from 'react';
import { db } from '@/lib/db';
import { schedules } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import { Metadata } from 'next';
import ReactDOM from 'react-dom';
import JadwalContent from '../components/JadwalContent';

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Jadwal Keberangkatan & Sisa Kuota",
  description: "Cek jadwal keberangkatan ibadah Umrah dan sisa kuota kursi secara real-time bersama Kiswah Tour & Travel.",
  openGraph: {
    title: "Jadwal Keberangkatan & Sisa Kuota | Kiswah.id",
    description: "Cek jadwal keberangkatan ibadah Umrah dan sisa kuota kursi secara real-time bersama Kiswah Tour & Travel.",
    url: "https://kiswah.id/jadwal",
    images: [
      {
        url: "/image/pelayanan.webp",
        width: 1200,
        height: 630,
        alt: "Jadwal Keberangkatan Kiswah.id",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jadwal Keberangkatan & Sisa Kuota | Kiswah.id",
    description: "Cek jadwal keberangkatan ibadah Umrah dan sisa kuota kursi secara real-time bersama Kiswah Tour & Travel.",
    images: ["/image/pelayanan.webp"],
  },
};

export default async function JadwalPage() {
  ReactDOM.preload("/image/pelayanan-mobile.webp", {
    as: "image",
    fetchPriority: "high",
    media: "(max-width: 640px)",
  });
  ReactDOM.preload("/image/pelayanan.webp", {
    as: "image",
    fetchPriority: "high",
    media: "(min-width: 641px)",
  });

  const packages = await db.query.schedules.findMany({
    orderBy: [desc(schedules.createdAt)],
  });

  return <JadwalContent packages={packages} />;
}


