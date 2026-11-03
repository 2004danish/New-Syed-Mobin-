"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const ease = [0.16, 1, 0.3, 1] as const;

  // --- SCROLL TRACKING FOR PARALLAX HERO ---
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroBackgroundY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroTextOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "-30%"]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease } }
  };

  return (
    <main className="bg-white text-[#333] min-h-screen selection:bg-[#C1A87D] selection:text-white pb-16 overflow-x-hidden">
      
      {/* 1. STUDIO PHILOSOPHY HERO */}
      <section ref={heroRef} className="relative w-full h-[80vh] md:h-[100dvh] bg-[#111] overflow-hidden">
        <motion.div style={{ y: heroBackgroundY }} className="absolute inset-0 w-full h-full origin-top">
          <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 2, ease: "easeOut" }} className="w-full h-full relative">
            <Image src="/about/work-studio.jpg" alt="Syed Mobin Architects Studio" fill className="object-cover opacity-50" priority />
          </motion.div>
        </motion.div>
        
        <motion.div style={{ opacity: heroTextOpacity, y: heroTextY }} className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-4xl overflow-hidden pb-4">
            <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3, ease }} className="text-[2.2rem] sm:text-4xl md:text-[4rem] font-light tracking-tight leading-[1.1] text-white mb-8">
              We translate human values into architectural reality.
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.8, ease }} className="text-[11px] md:text-[13px] text-white/70 font-medium tracking-[0.3em] uppercase">
            Rooted in Nagpur — Building for the Future
          </motion.p>
        </motion.div>
      </section>

      {/* 2. THE ESTABLISHMENT STATEMENT */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[#eee]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-8 md:gap-16 items-start">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.2, ease }}
            className="text-[12px] md:text-[14px] uppercase tracking-[0.2em] font-medium text-[#222] md:pt-2"
          >
            The Firm
          </motion.h4>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.2, delay: 0.1, ease }}
            className="text-[18px] md:text-[22px] font-light text-[#444] leading-[1.7]"
          >
            Established in 2007, Syed Mobin Architects is a multi-disciplined design team based in the heart of India — Nagpur, offering a unique personal architectural service tailored to your individual needs and requirements.
          </motion.p>
        </div>
      </section>

      {/* 3. THE PRINCIPAL ARCHITECT */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[#eee]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-12 lg:gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.6, ease }} className="relative w-full aspect-[4/5] bg-[#f5f5f5] overflow-hidden group rounded-[2px]">
            <Image src="/about/mobinsyed.jpg" alt="Syed Mobin - Principal Architect" fill className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] ease-[0.16,1,0.3,1]" />
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.2, ease }}>
              <h4 className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-medium text-[#999] mb-4">Principal Architect</h4>
              <h2 className="text-[36px] md:text-[48px] font-light tracking-tight text-[#222] leading-none mb-2">Syed Mobin</h2>
            </motion.div>
            
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="flex flex-col gap-6 text-[15px] md:text-[17px] font-light text-[#555] leading-[1.8]">
              <motion.p variants={staggerItem}>With over two decades of practice in Central India, Syed Mobin has established himself as a highly respected architectural voice. His work impeccably blends spatial awareness with structural design, showcasing a lifelong passion that began in his early college days.</motion.p>
              <motion.p variants={staggerItem}>From creating art installations out of scrap and winning the national HUDCO Trophy, to earning the International GABA Award for a residential villa crafted from reclaimed materials, his dedication to the craft has never wavered. Having commissioned over 100 projects, his work has been widely celebrated and published across the industry.</motion.p>
              <motion.p variants={staggerItem}>Selected as one of seven architects to represent India at the LafargeHolcim International Conference in Cairo, he has collaborated and learned alongside Pritzker-winning masters like Lord Norman Foster and Francis Kéré.</motion.p>
            </motion.div>

            {/* --- UPDATED QUOTE BLOCK --- */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 1.2, delay: 0.4, ease }} className="relative mt-2 p-6 md:p-8 bg-[#fafafa] group">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#ddd] group-hover:bg-[#C1A87D] transition-colors duration-700"></div>
              
              <p className="text-[16px] md:text-[18px] font-medium text-[#333] italic leading-[1.6] mb-5">
                "There is nothing superior or inferior, good or bad, right or wrong unless it is built with S.M.A."
              </p>
              
              <div className="flex flex-col gap-2 text-[15px] md:text-[17px] font-light text-[#555] pl-2">
                <p>&middot; <span className="font-medium text-[#222]">S</span>ustainable design</p>
                <p>&middot; <span className="font-medium text-[#222]">M</span>inute detailing</p>
                <p>&middot; <span className="font-medium text-[#222]">A</span>ddiction to strive for the best</p>
              </div>

            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. THE APPROACH */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[#eee]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-8 md:gap-16 items-start">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.2, ease }}
            className="text-[12px] md:text-[14px] uppercase tracking-[0.2em] font-medium text-[#222] md:pt-2"
          >
            The Approach
          </motion.h4>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.2, delay: 0.1, ease }}
            className="text-[17px] md:text-[20px] font-light text-[#555] leading-[1.9]"
          >
            Some architects reduce design to an exercise in combining shapes, forms, and materials, with little regard for the people who inhabit the buildings. Even worse are buildings that are the sum of obsolete, formulaic equations: head counts multiplied by square feet and wrapped in boxes. <br/><br/>
            When our designers truly reach the heart of the matter and address a client's core problems, we create dramatic spaces that work well while appealing to the people who use them. Our architecture flows directly from ideas about our client's needs, not from a designer's preconceived notion about how a building should look.
          </motion.p>
        </div>
      </section>

      {/* 5. THE STUDIO GALLERY */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[#eee]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease }} className="mb-12 md:mb-16 flex justify-between items-end">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-light tracking-tight text-[#222]">Inside the Studio</h2>
          <span className="hidden md:block text-[10px] uppercase tracking-[0.3em] font-medium text-[#999]">Nagpur, India</span>
        </motion.div>

        {/* Gallery with Hover Labels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          
          {[
            { src: "/about/conference.jpg", label: "Conference Room", colSpan: false, heightClass: "h-[40vh] md:h-[50vh]" },
            { src: "/about/manager-cabin.jpg", label: "Manager Cabin", colSpan: false, heightClass: "h-[40vh] md:h-[50vh]" },
            { src: "/about/principal-architect-cabin.jpg", label: "Principal Architect Cabin", colSpan: true, heightClass: "h-[40vh] md:h-[60vh]" },
            { src: "/about/reception-cum-waiting.jpg", label: "Reception Area", colSpan: false, heightClass: "h-[40vh] md:h-[50vh]" },
            { src: "/about/vip-lounge.jpg", label: "VIP Lounge", colSpan: false, heightClass: "h-[40vh] md:h-[50vh]" }
          ].map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1, delay: idx * 0.1 }} 
              className={`w-full ${img.heightClass} relative bg-[#f5f5f5] overflow-hidden group ${img.colSpan ? 'md:col-span-2' : ''}`}
            >
              <Image src={img.src} alt={img.label} fill className={`object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105 ${img.colSpan ? 'object-bottom' : ''}`} />
              
              {/* Subtle hover label in the bottom left corner */}
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[#333]">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
          
        </div>
      </section>

      {/* 6. CALL TO ACTION & PORTFOLIO DOWNLOAD */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-12 pt-20 pb-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.2, ease }}
          className="flex flex-col gap-6 items-center"
        >
          <a 
            href="/about/Profile.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.2em] text-[#555] hover:text-[#C1A87D] transition-colors duration-300"
          >
            Download Our Portfolio
          </a>
          
          <h3 className="text-[20px] md:text-[24px] font-light text-[#222]">
            Let's shape your project together
          </h3>
          
          <Link 
            href="/contact"
            className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.2em] text-[#555] hover:text-[#C1A87D] transition-colors duration-300"
          >
            Book An Appointment
          </Link>
        </motion.div>
      </section>

    </main>
  );
}