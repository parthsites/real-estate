import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SERENITY HEIGHTS | Premium Living. Pune.",
  description:
    "Experience award-winning luxury residences in the heart of Pune. 2 & 3 BHK premium apartments with world-class amenities. RERA approved.",
  keywords: [
    "luxury apartments Pune",
    "premium homes",
    "Pune real estate",
    "2 BHK",
    "3 BHK",
    "RERA approved",
    "luxury living",
    "Serenity Heights",
  ],
  openGraph: {
    title: "SERENITY HEIGHTS | Premium Living. Pune.",
    description:
      "Award-winning luxury residences in the heart of Pune. Where design meets lifestyle.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-luxury-black text-luxury-lightgray font-sans antialiased">
        <CustomCursor />
        <Navbar />
        <WhatsAppButton />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
