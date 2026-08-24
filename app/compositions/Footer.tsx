"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ease = [0.16, 1, 0.3, 1] as const;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-black pt-12 md:pt-16 overflow-hidden relative border-t border-black/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">

        {/* SECTION 1: Massive Editorial Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, ease }}
            className="max-w-4xl"
          >
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7vw] font-medium tracking-tighter uppercase leading-[0.9] text-black font-sans">
              Have a Project <br /> In Mind?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="shrink-0"
          >
            <Link 
              href="/contact" 
              className="group flex items-center justify-center w-28 h-28 md:w-36 md:h-36 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-500"
            >
              <div className="flex flex-col items-center gap-1 overflow-hidden">
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold">Start</span>
                <ArrowUpRight size={24} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* SECTION 2: The Framed Blueprint Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="grid grid-cols-1 lg:grid-cols-12 border border-black/20 mt-4 mb-6 md:mt-6 md:mb-8"
        >
          
          {/* CELL 1: Directory */}
          <div className="group lg:col-span-3 border-b lg:border-b-0 lg:border-r border-black/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#E8EEF2] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
            <div className="p-6 lg:p-8 flex flex-col justify-between h-full relative z-10">
              <span className="font-mono text-[10px] tracking-[0.3em] text-gray-400 group-hover:text-black transition-colors duration-500 font-bold mb-8 block">
                01 // Directory
              </span>
              <ul className="flex flex-col gap-4 text-3xl md:text-4xl uppercase tracking-tight font-medium serif transform group-hover:translate-x-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <li>
                  <Link href="/projects" className="hover:italic hover:text-gray-500 transition-all duration-300">Projects</Link>
                </li>
                <li>
                  <Link href="/expertise" className="hover:italic hover:text-gray-500 transition-all duration-300">Expertise</Link>
                </li>
                <li>
                  <Link href="/studio" className="hover:italic hover:text-gray-500 transition-all duration-300">Studio</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* CELL 2: Communications & Social */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-black/20 flex flex-col">
            
            {/* Top Half: Contact */}
            <div className="group flex-1 border-b border-black/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#E8EEF2] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
              <div className="p-6 lg:p-8 flex flex-col justify-between h-full relative z-10">
                <span className="font-mono text-[10px] tracking-[0.3em] text-gray-400 group-hover:text-black transition-colors duration-500 font-bold mb-6 block">
                  02 // Inquiries
                </span>
                <div className="text-base font-light text-black flex flex-col gap-2 transform group-hover:translate-x-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <a href="mailto:sma.mob.ngp@gmail.com" className="hover:text-gray-500 transition-colors w-fit">sma.mob.ngp@gmail.com</a>
                  <a href="tel:+917122588900" className="hover:text-gray-500 transition-colors w-fit">+91 712 2588900</a>
                  <a href="tel:+917122588901" className="hover:text-gray-500 transition-colors w-fit">+91 712 2588901</a>
                </div>
              </div>
            </div>
            
            {/* Bottom Half: Socials */}
            <div className="group flex-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#E8EEF2] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
              <div className="p-6 lg:p-8 flex flex-col justify-between h-full relative z-10">
                <span className="font-mono text-[10px] tracking-[0.3em] text-gray-400 group-hover:text-black transition-colors duration-500 font-bold mb-6 block">
                  Social Network
                </span>
                <div className="flex flex-wrap gap-6 text-base font-light text-black transform group-hover:translate-x-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <a href="#" className="hover:text-gray-500 transition-colors">Instagram</a>
                  <a href="#" className="hover:text-gray-500 transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-gray-500 transition-colors">Twitter</a>
                </div>
              </div>
            </div>

          </div>

          {/* CELL 3: The Anchor HQ */}
          <div className="group lg:col-span-5 bg-black/[0.015] relative overflow-hidden">
            <div className="absolute inset-0 bg-[#E8EEF2] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
            <div className="p-6 lg:p-8 flex flex-col justify-between h-full relative z-10">
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500 group-hover:text-black transition-colors duration-500 font-bold mb-6 block">
                  03 // Global HQ
                </span>
                <div className="transform group-hover:translate-x-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight uppercase mb-4 serif text-black">
                    Nagpur, India
                  </h3>
                  <address className="text-base font-light text-black/80 leading-relaxed not-italic">
                    301, P - 7/2, Krishna Style Homes <br />
                    Chitnavis Layout, Byramji Town <br />
                    Nagpur, Maharashtra 440013
                  </address>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/10 pt-4 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                <span className="transform group-hover:translate-x-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">21.1458° N, 79.0882° E</span>
                <span>IST (UTC +5:30)</span>
              </div>
            </div>
          </div>

        </motion.div>

        {/* SECTION 3: The Typographic Anchor */}
        <div className="mt-4 md:mt-6 pt-6 border-t border-black/20 pb-4">
          <motion.div 
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.2, ease }}
            className="flex justify-center"
          >
            {/* The "Sweet Spot" Size: Massive but balanced */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9vw] leading-[0.8] tracking-tighter uppercase font-medium text-black text-center whitespace-nowrap">
              Syed Mobin
            </h1>
          </motion.div>
        </div>

        {/* SECTION 4: Utilities */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4 border-t border-black/20 text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400 font-bold">
          <div className="flex gap-4 items-center">
            <span>&copy; {currentYear}</span>
            <span className="hidden md:inline">|</span>
            <span>All Rights Reserved</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 hover:text-black transition-colors duration-300 focus:outline-none"
          >
            <span>Back To Top</span>
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
              <ArrowUp size={14} className="transform group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}