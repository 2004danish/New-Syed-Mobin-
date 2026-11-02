"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-20 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* TOP CTA SECTION */}
        <div className="flex flex-col items-center text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[22px] md:text-[28px] font-light text-[#444] mb-8"
          >
            Let's shape your project together.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Link 
              href="/contact"
              className="relative overflow-hidden inline-block border border-[#ddd] hover:border-[#C1A87D] text-[#555] hover:text-white text-[12px] font-medium uppercase tracking-[0.2em] px-12 py-4 transition-colors duration-400 ease-out z-10 group
                         before:absolute before:top-0 before:bottom-0 before:right-0 before:left-auto before:w-0 before:bg-[#C1A87D] before:transition-[width] before:duration-500 before:ease-[cubic-bezier(0.16,1,0.3,1)] before:-z-10
                         hover:before:left-0 hover:before:right-auto hover:before:w-full"
            >
              Book an Appointment
            </Link>
          </motion.div>
        </div>

        {/* BOTTOM INFO GRID */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 items-start"
        >
          
          {/* Column 1: Logo & Name (Massively Scaled & Vertically Centered) */}
          <div className="flex justify-center md:justify-start items-center">
            <Link href="/" className="flex flex-col items-center md:items-start gap-4 opacity-80 hover:opacity-100 transition-opacity">
              <img 
                src="/syedmobinlogo2.png" 
                alt="Syed Mobin Architects" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              <span className="text-[22px] md:text-[26px] font-medium tracking-[0.2em] text-[#333] uppercase">
                Syed Mobin
              </span>
            </Link>
          </div>

          {/* Column 2: Social */}
          <div className="flex flex-col items-center text-center mt-2 md:mt-0">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#999] mb-6">Social</h3>
            <ul className="flex flex-col gap-3 text-[14px] font-light text-[#555] items-center">
              <li>
                <a href="#" className="hover:text-[#C1A87D] transition-colors duration-500 relative group overflow-hidden w-fit pb-1 block">
                  Instagram
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C1A87D] transition-colors duration-500 relative group overflow-hidden w-fit pb-1 block">
                  LinkedIn
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-center text-center mt-2 md:mt-0">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#999] mb-6">Contact</h3>
            <ul className="flex flex-col gap-3 text-[14px] font-light text-[#555] items-center">
              <li>
                <a href="https://wa.me/919370288018" className="hover:text-[#C1A87D] transition-colors duration-500 relative group overflow-hidden w-fit pb-1 block">
                  WhatsApp
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </a>
              </li>
              <li>
                <a href="tel:+917122588900" className="hover:text-[#C1A87D] transition-colors duration-500 relative group overflow-hidden w-fit pb-1 block">
                  Phone
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </a>
              </li>
              <li>
                <a href="mailto:sma.mob.ngp@gmail.com" className="hover:text-[#C1A87D] transition-colors duration-500 relative group overflow-hidden w-fit pb-1 block">
                  info@syedmobin.com
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Info */}
          <div className="flex flex-col items-center text-center mt-2 md:mt-0">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#999] mb-6">Info</h3>
            <address className="flex flex-col gap-3 text-[14px] font-light text-[#555] not-italic leading-relaxed items-center">
              <span>301, P - 7/2, Krishna Style Homes<br />Nagpur, Maharashtra 440013</span>
              <Link href="/studio" className="hover:text-[#C1A87D] transition-colors duration-500 relative group overflow-hidden w-fit pb-1 mt-1">
                About Us
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </Link>
            </address>
          </div>

        </motion.div>

      </div>
    </footer>
  );
}