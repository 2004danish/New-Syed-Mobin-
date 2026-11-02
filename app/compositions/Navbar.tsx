"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        setIsScrolled(heroSection.getBoundingClientRect().bottom <= 80);
      } else {
        setIsScrolled(window.scrollY > 50);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Recognition", href: "/recognition" },
    { name: "Contact", href: "/contact" },
  ];

  const ease = [0.16, 1, 0.3, 1] as const;
  const showDarkText = isScrolled || isMobileMenuOpen || !isHome;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100" : "bg-transparent py-8 pointer-events-auto"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* BRANDING SECTION - Aligned and Refined */}
          <Link href="/" className="relative z-50 flex items-center gap-4 group">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
              <img 
                src="/syedmobinlogo2.png" 
                alt="Syed Mobin Architects" 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:opacity-70"
              />
            </div>

            <div className="flex flex-col justify-center">
              {/* Removed the 'serif' class globally so it uses Josefin Sans */}
              <span className={`text-lg md:text-xl font-medium tracking-[0.2em] uppercase leading-none transition-colors duration-500 ${showDarkText ? "text-[#222]" : "text-white"}`}>
                Syed Mobin
              </span>
              <span className={`text-[9px] md:text-[10px] font-light tracking-[0.4em] uppercase mt-1.5 transition-colors duration-500 ${showDarkText ? "text-gray-500" : "text-white/70"}`}>
                Architects
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION - Restored Sliding Underlines */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-[11px] font-normal uppercase tracking-[0.15em] transition-colors duration-500 relative group overflow-hidden pb-1.5 ${
                  showDarkText ? "text-[#444] hover:text-[#111]" : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </Link>
            ))}
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="text-[#222]" size={24} strokeWidth={1} />
            ) : (
              <Menu className={showDarkText ? "text-[#222]" : "text-white"} size={24} strokeWidth={1} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-6 text-[#222]">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.6, ease }}
                >
                  <Link 
                    href={link.href}
                    className="text-4xl font-light tracking-tight uppercase block pb-2 hover:text-gray-400 transition-colors"
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