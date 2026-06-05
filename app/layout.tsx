import type { Metadata } from "next";
import { Poppins, Nova_Square, Freehand } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar.Components";
import Footer from "./components/Footer.Component";
import WhatsAppFloat from "./components/WhatsAppFloat";
import NextTopLoader from 'nextjs-toploader';
import { AOSInit } from "./components/AOSInit";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const novaSquare = Nova_Square({
  variable: "--font-nova-square",
  subsets: ["latin"],
  weight: ["400"],
});

const freehand = Freehand({
  variable: "--font-freehand",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kiswah.id'),
  title: {
    template: "%s | Kiswah.id",
    default: "Kiswah.id | Layanan Umrah & Haji Khusus Eksklusif",
  },
  description: "Layanan Umrah dan Haji Khusus eksklusif serta terpercaya dengan bimbingan ibadah yang sesuai sunnah dan fasilitas hotel bintang terbaik di Makkah & Madinah.",
  openGraph: {
    title: "Kiswah.id | Layanan Umrah & Haji Khusus Eksklusif",
    description: "Layanan Umrah dan Haji Khusus eksklusif serta terpercaya dengan bimbingan ibadah yang sesuai sunnah dan fasilitas hotel bintang terbaik di Makkah & Madinah.",
    url: "https://kiswah.id",
    siteName: "Kiswah.id",
    images: [
      {
        url: "/image/logo.webp",
        width: 800,
        height: 800,
        alt: "Logo Kiswah.id",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiswah.id | Layanan Umrah & Haji Khusus Eksklusif",
    description: "Layanan Umrah dan Haji Khusus eksklusif serta terpercaya dengan bimbingan ibadah yang sesuai sunnah dan fasilitas hotel bintang terbaik di Makkah & Madinah.",
    images: ["/image/logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${novaSquare.variable} ${freehand.variable} antialiased`}
      >
        <AOSInit />
        <NextTopLoader 
          color="#B48421"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #B48421,0 0 5px #B48421"
        />
        <Navbar />
        {children}
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
