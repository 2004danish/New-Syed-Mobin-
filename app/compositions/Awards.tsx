"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const awardsData = [
  {
    id: "01",
    name: "Best Residential Architecture",
    organization: "Indian Institute of Architects",
    year: "2024",
    category: "Winner",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "02",
    name: "Innovation in Spatial Design",
    organization: "Global Design Framework",
    year: "2023",
    category: "Grand Prix",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "03",
    name: "Urban Context & Heritage",
    organization: "European Architecture Board",
    year: "2022",
    category: "Gold Laureate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "04",
    name: "Sustainable Material Use",
    organization: "National Design Council",
    year: "2021",
    category: "Excellence",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Awards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ease = [0.16, 1, 0.3, 1]; // Master architectural curve

  return (
    <section id="awards" className="pt-24 pb-24 md:pt-32 md:pb-40 bg-white text-[#1C1B1A]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* =========================================
            HEADER: Full Width & Staggered
            ========================================= */}
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="flex items-center gap-4 mb-12 transform-gpu"
          >
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#8C8780] font-medium">
              — 05 / AWARDS & RECOGNITION
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8 flex flex-col gap-1 md:gap-2">
              <div className="overflow-hidden pb-1">
                <motion.h2 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.2, ease }}
                  className="text-5xl sm:text-6xl lg:text-[5rem] xl:text-[6rem] font-medium tracking-tighter leading-[0.9] text-[#1C1B1A] serif"
                >
                  Recognized.
                </motion.h2>
              </div>
              <div className="overflow-hidden pb-1">
                <motion.h2 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.2, delay: 0.1, ease }}
                  className="text-5xl sm:text-6xl lg:text-[5rem] xl:text-[6rem] font-medium tracking-tighter leading-[0.9] text-[#8C8780] serif italic"
                >
                  Not for trends.
                </motion.h2>
              </div>
              <div className="overflow-hidden pb-2">
                <motion.h2 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.2, delay: 0.2, ease }}
                  className="text-5xl sm:text-6xl lg:text-[5rem] xl:text-[6rem] font-medium tracking-tighter leading-[0.9] text-[#1C1B1A] serif"
                >
                  But for timeless design.
                </motion.h2>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.4, ease }}
              className="lg:col-span-4 pb-4"
            >
              <p className="text-sm font-light text-[#5A5753] leading-relaxed border-l border-black/10 pl-6">
                Honors measuring the structural and spatial impact of our work across residential and public sectors. A testament to rigorous practice.
              </p>
            </motion.div>
          </div>
        </div>

        {/* =========================================
            INTERACTIVE LOOKBOOK GRID
            ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative">
          
          {/* LEFT: Typographic Index */}
          <div className="lg:col-span-7 flex flex-col border-t border-black/10">
            {awardsData.map((award, index) => (
              <motion.div
                key={award.id}
                onMouseEnter={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease }}
                className="group relative cursor-pointer py-10 md:py-14 border-b border-black/10 flex flex-col gap-6"
              >
                {/* Accent Subheading matching the Principal Architect section */}
                <div className="flex items-center gap-4">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#C0573E] font-bold">
                    {award.year} — {award.category}
                  </span>
                </div>

                {/* Massive Typographic Weight */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] text-[#1C1B1A] transition-colors duration-500 group-hover:opacity-60 pr-8">
                  {award.name}
                </h3>

                <div className="flex justify-between items-end mt-2">
                  <p className="text-xs sm:text-sm font-light text-[#5A5753]">
                    {award.organization}
                  </p>
                  
                  {/* Minimal Interaction Arrow */}
                  <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black transform transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#1C1B1A] group-hover:border-[#1C1B1A] group-hover:text-white lg:opacity-0 lg:group-hover:opacity-100">
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Mobile Inline Image (Hidden on Desktop) */}
                <div className="lg:hidden w-full h-[250px] sm:h-[350px] mt-4 overflow-hidden rounded-sm bg-[#EBE7DF]">
                  <img src={award.image} alt={award.name} className="w-full h-full object-cover grayscale opacity-90" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Sticky Image Viewer (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32 h-[500px] xl:h-[600px] w-full bg-[#EBE7DF] overflow-hidden rounded-sm transform-gpu">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.7, ease }}
                src={awardsData[activeIndex].image}
                alt={awardsData[activeIndex].name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </AnimatePresence>

            {/* Editorial Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-white mix-blend-overlay pointer-events-none">
                <p className="text-[10px] uppercase font-mono tracking-widest">{awardsData[activeIndex].id}</p>
                <p className="text-[10px] uppercase font-mono tracking-widest">Archive Focus</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}