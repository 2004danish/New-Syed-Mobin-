import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./compositions/Navbar";
import Footer from "./compositions/Footer"; 
import Preloader from "./compositions/Preloader";

// Josefin Sans is the exact Google Font equivalent to Brandon Grotesque 
// (the font Babnimnim uses). It is highly geometric and elegant.
const josefin = Josefin_Sans({ 
  subsets: ["latin"], 
  variable: "--font-josefin",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Syed Mobin Architects | Central India's Premier Design Firm",
  description: "Established in 2007, Syed Mobin Architects is an award-winning, multi-disciplined design firm based in Nagpur, specializing in sustainable architecture, interior design, and bespoke residential spaces.",
  keywords: ["Architect Nagpur", "Syed Mobin", "Luxury Interior Design", "Sustainable Architecture India", "Mobin Syed Architect"],
  icons: {
    icon: '/icon.png', // Explicitly points to the gold logo in your public folder
  },
  openGraph: {
    title: "Syed Mobin Architects",
    description: "Translating human values into architectural reality. Discover our portfolio of award-winning residential and commercial designs.",
    url: "https://syedmobin.com",
    siteName: "Syed Mobin Architects",
    images: [
      {
        url: "/hero-images/amans-hero.jpg", // The image that appears when sharing the link on WhatsApp/LinkedIn
        width: 1200,
        height: 630,
        alt: "Syed Mobin Architects Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-[#333] min-h-screen flex flex-col">
        <Preloader />
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}