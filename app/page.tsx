import BerandaContent from "./components/BerandaContent";
import { Metadata } from "next";
import ReactDOM from "react-dom";

export const metadata: Metadata = {
  title: "Kiswah.id | Layanan Umrah & Haji Khusus Eksklusif",
  description: "Layanan Umrah dan Haji Khusus eksklusif serta terpercaya dengan bimbingan ibadah yang sesuai sunnah dan fasilitas hotel bintang terbaik di Makkah & Madinah.",
  openGraph: {
    title: "Kiswah.id | Layanan Umrah & Haji Khusus Eksklusif",
    description: "Layanan Umrah dan Haji Khusus eksklusif serta terpercaya dengan bimbingan ibadah yang sesuai sunnah dan fasilitas hotel bintang terbaik di Makkah & Madinah.",
    url: "https://kiswah.id",
    images: [
      {
        url: "/image/hero.webp",
        width: 1200,
        height: 630,
        alt: "Kiswah.id Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiswah.id | Layanan Umrah & Haji Khusus Eksklusif",
    description: "Layanan Umrah dan Haji Khusus eksklusif serta terpercaya dengan bimbingan ibadah yang sesuai sunnah dan fasilitas hotel bintang terbaik di Makkah & Madinah.",
    images: ["/image/hero.webp"],
  },
};

export default function BerandaPage() {
  ReactDOM.preload("/image/hero-mobile.webp", {
    as: "image",
    fetchPriority: "high",
    media: "(max-width: 640px)",
  });
  ReactDOM.preload("/image/hero.webp", {
    as: "image",
    fetchPriority: "high",
    media: "(min-width: 641px)",
  });

  return <BerandaContent />;
}

