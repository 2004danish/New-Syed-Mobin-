"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        setIsScrolled(heroSection.getBoundingClientRect().bottom <= 80);
      } else {
        setIsScrolled(window.scrollY > 100);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Studio", href: "/#studio" },
    { name: "Expertise", href: "/#expertise" },
    { name: "Contact", href: "/#contact" },
  ];
  const architecturalEase = [0.16, 1, 0.3, 1];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: architecturalEase }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8 pointer-events-auto"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* BRANDING SECTION: Larger Logo + Optically Aligned Text */}
          <Link href="/" className="relative z-50 flex items-center gap-3 md:gap-4 group">
            
            {/* Logo Image - Increased Size */}
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
              <img 
                src="/syedmobinlogo.png" 
                alt="Syed Mobin Architects Logo" 
                className={`w-full h-full object-contain transition-all duration-500 ${
                  isScrolled || isMobileMenuOpen ? "filter-none" : "invert brightness-0"
                }`}
              />
            </div>

            {/* Typography - Optically nudge down by 2px to balance the circular logo */}
            <div className="flex flex-col justify-center translate-y-[2px]">
              <span className={`text-xl md:text-2xl font-bold tracking-[0.15em] uppercase leading-none transition-colors duration-500 serif ${isScrolled || isMobileMenuOpen ? "text-black" : "text-white"}`}>
                Syed Mobin
              </span>
              <span className={`text-[9px] md:text-[10px] font-medium tracking-[0.3em] uppercase mt-1.5 transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? "text-gray-500" : "text-white/70"}`}>
                Architects
              </span>
            </div>
            
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex gap-12 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-[0.15em] relative group overflow-hidden transition-colors duration-500 ${isScrolled ? "text-black hover:text-gray-500" : "text-white hover:text-gray-300"}`}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 architectural" style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'}} />
              </Link>
            ))}
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="text-black" size={28} strokeWidth={1} /> : <Menu className={isScrolled ? "text-black" : "text-white"} size={28} strokeWidth={1} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.7, ease: architecturalEase }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-black">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.6, ease: architecturalEase }}
                >
                  <Link 
                    href={link.href}
                    className="text-5xl font-light tracking-tighter uppercase block pb-4 hover:text-gray-400 transition-colors serif"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}