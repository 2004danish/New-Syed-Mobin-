"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <main className="bg-white text-[#333] pt-28 md:pt-36 min-h-screen selection:bg-[#C1A87D] selection:text-white">
      
      {/* 1 & 2. THE HEADER & INTRODUCTION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 md:mb-20">
        <div className="flex flex-col gap-4 md:gap-6 max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease }}
            className="text-[3rem] sm:text-5xl md:text-[4.5rem] font-light tracking-tight leading-[1] text-[#222]"
          >
            Services
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease }}
          >
            <h5 className="text-[17px] md:text-[20px] font-medium text-[#444] leading-[1.6] md:leading-[1.7] tracking-wide">
              Our practice spans architecture and interiors, allowing us to approach each project holistically. Through this integrated scope, every element is considered as part of a unified design language, one that is purposeful, refined, and carefully resolved. At the core of our work is a commitment to creating spaces that are thoughtful, human-centred, and grounded in context.
            </h5>
          </motion.div>
        </div>
      </section>

      {/* 3. ARCHITECTURE */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-12 lg:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease }}
            className="flex flex-col gap-6"
          >
            <h4 className="text-[24px] md:text-[32px] font-light text-[#222]">Architecture</h4>
            {/* Font size bumped up to 17px on mobile, 18px on desktop */}
            <div className="flex flex-col gap-5 text-[17px] md:text-[18px] font-light text-[#555] leading-[1.8]">
              <p>
                Architecture is driven by a commitment to spatial clarity, material honesty, and contextual sensitivity. Each project is developed through a structured process that translates concept into a coherent built environment, balancing functional requirements with long-term vision.
              </p>
              <p className="text-[#333] font-normal">Services include:</p>
              <ul className="flex flex-col gap-2 list-disc pl-5 marker:text-[#ccc]">
                <li>Concept development</li>
                <li>Project definition and programming</li>
                <li>Schematic design</li>
                <li>Design development</li>
                <li>Landscape conceptual design</li>
                <li>Construction detail documentation</li>
                <li>Bidding and negotiation</li>
                <li>Construction supervision</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease }}
            className="w-full relative h-[50vh] lg:h-[80vh] overflow-hidden"
          >
            <Image 
              src="/services/architecture.jpg" 
              alt="Syed Mobin Architecture Service"
              fill
              className="object-cover object-center"
              quality={100}
            />
          </motion.div>

        </div>
      </section>

      {/* 4. INTERIOR DESIGN */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease }}
            className="w-full relative h-[50vh] lg:h-[80vh] overflow-hidden order-2 lg:order-1"
          >
            <Image 
              src="/services/interior.jpg" 
              alt="Syed Mobin Interior Design Service"
              fill
              className="object-cover object-center"
              quality={100}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease }}
            className="flex flex-col gap-6 order-1 lg:order-2"
          >
            <h4 className="text-[24px] md:text-[32px] font-light text-[#222]">Interior Design</h4>
            {/* Font size bumped up to 17px on mobile, 18px on desktop */}
            <div className="flex flex-col gap-5 text-[17px] md:text-[18px] font-light text-[#555] leading-[1.8]">
              <p>
                Interior design is approached as an extension of the architectural narrative, where proportion, materiality, and atmosphere define the character of a space. The focus is on creating environments that feel intentional, functional, and emotionally grounded, with bespoke furniture and custom-designed elements developed as integral parts of each project.
              </p>
              <p className="text-[#333] font-normal">Services include:</p>
              <ul className="flex flex-col gap-2 list-disc pl-5 marker:text-[#ccc]">
                <li>Concept development</li>
                <li>Space planning and layout design</li>
                <li>Material and finish selection</li>
                <li>Fixture, furniture, and equipment selection</li>
                <li>Bespoke furniture and custom element design</li>
                <li>Construction detail documentation</li>
                <li>Bidding and negotiation</li>
                <li>Construction supervision</li>
                <li>Installation and styling</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24 md:pb-32 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease }}
          className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-light tracking-tight leading-[1] text-[#222] mb-10 md:mb-12"
        >
          Let’s bring your vision to life.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
        >
          <Link 
            href="/contact"
            className="relative overflow-hidden inline-block border border-[#ddd] hover:border-[#C1A87D] text-[#555] hover:text-white text-[12px] font-medium uppercase tracking-[0.2em] px-14 py-4 transition-colors duration-400 ease-out z-10 group
                       before:absolute before:top-0 before:bottom-0 before:right-0 before:left-auto before:w-0 before:bg-[#C1A87D] before:transition-[width] before:duration-500 before:ease-[cubic-bezier(0.16,1,0.3,1)] before:-z-10
                       hover:before:left-0 hover:before:right-auto hover:before:w-full"
          >
            Contact us
          </Link>
        </motion.div>
      </section>

    </main>
  );
}