"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const practices = [
  {
    id: "01",
    title: "Residential Estates",
    description: "Bespoke private estates and multi-dwelling units engineered for privacy, light, and enduring spatial quality. Every residence is treated as a highly functional, site-specific sanctuary."
  },
  {
    id: "02",
    title: "Commercial & Retail",
    description: "High-yield commercial towers and retail environments designed for maximum utility, structural efficiency, and commanding presence in dense urban contexts."
  },
  {
    id: "03",
    title: "Heritage Restoration",
    description: "Precise interventions within historic frameworks. We balance rigorous conservation guidelines with modern structural reinforcements and contemporary utility."
  },
  {
    id: "04",
    title: "Urban Masterplanning",
    description: "Large-scale site interventions and campus planning. We organize complex programming into rational, easily navigable geometric grids that prioritize human movement."
  }
];

export default function Expertise() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="expertise" className="py-24 md:py-32 bg-white text-black relative z-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Section Meta */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease }}
            >
              <span className="block font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400 font-bold mb-6">
                03 — Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight pr-8">
                Disciplined approaches across multiple structural typologies.
              </h2>
            </motion.div>
          </div>

          {/* Right Column: Swiss Accordion */}
          <div className="lg:col-span-8 flex flex-col border-t border-black/20">
            {practices.map((practice, index) => (
              <motion.div 
                key={practice.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group border-b border-black/20 cursor-pointer overflow-hidden"
              >
                <div className="flex items-center justify-between py-8 md:py-10 transition-colors duration-500 hover:bg-black/[0.02]">
                  
                  <div className="flex items-baseline gap-6 md:gap-12 px-4 md:px-6">
                    <span className="font-mono text-xs md:text-sm text-gray-400 transition-colors duration-300 group-hover:text-black">
                      {practice.id}
                    </span>
                    <h3 className="text-2xl md:text-5xl font-medium tracking-tight uppercase transition-transform duration-500 ease-out group-hover:translate-x-2">
                      {practice.title}
                    </h3>
                  </div>

                  {/* Animated Plus/Minus Icon */}
                  <div className="pr-4 md:pr-6">
                    <div className="relative w-4 h-4 flex items-center justify-center">
                      <span className="absolute w-full h-[1.5px] bg-black" />
                      <span 
                        className={`absolute h-full w-[1.5px] bg-black transition-transform duration-500 ease-out ${
                          hoveredIndex === index ? "rotate-90 scale-0" : "rotate-0 scale-100"
                        }`} 
                      />
                    </div>
                  </div>

                </div>

                {/* Expanding Description */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease }}
                      className="px-4 md:px-6"
                    >
                      <div className="pb-8 md:pb-10 pl-12 md:pl-20 max-w-2xl">
                        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                          {practice.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}