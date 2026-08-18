import type { Metadata, Viewport } from "next";
import { Poppins, Nova_Square, Freehand } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "./components/Navbar.Components";
import Footer from "./components/Footer.Component";
import ClientTopLoader from "./components/ClientTopLoader";

const WhatsAppFloat = dynamic(() => import("./components/WhatsAppFloat"));

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "optional",
  preload: true,
  adjustFontFallback: true,
});

const novaSquare = Nova_Square({
  variable: "--font-nova-square",
  subsets: ["latin"],
  weight: ["400"],
  display: "optional",
  preload: true,
  adjustFontFallback: true,
});

const freehand = Freehand({
  variable: "--font-freehand",
  subsets: ["latin"],
  weight: ["400"],
  display: "optional",
  preload: true,
  adjustFontFallback: true,
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
  verification: {
    google: "google3a40c5b38cc74195",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2a1d12",
};

import { LanguageProvider } from "@/lib/i18n/context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={poppins.style} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${poppins.className} ${poppins.variable} ${novaSquare.variable} ${freehand.variable} antialiased min-h-screen flex flex-col bg-white text-[#291F15]`}
      >
        <ClientTopLoader />
        <LanguageProvider>
          <div className="flex flex-col min-h-screen w-full">
            <header className="w-full sticky top-0 z-[999]">
              <Navbar />
            </header>
            <main id="main-content" role="main" className="flex-grow flex-1 w-full min-h-[70vh]">
              {children}
            </main>
            <WhatsAppFloat />
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
