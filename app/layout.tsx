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
  title: "Syed Mobin Architects | Architectural Firm",
  description: "Visionary architecture and design by Syed Mobin Architects.",
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