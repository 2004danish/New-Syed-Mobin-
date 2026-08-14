"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StudioPhilosophy() {
  const ease = [0.16, 1, 0.3, 1];
  
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="studio" className="pt-8 md:pt-12 bg-white text-black relative z-20">
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease }}
            >
              <span className="block font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400 font-bold mb-6 md:mb-8">
                02 — Studio Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter leading-[1.1] text-black pr-4">
                We let the structure speak. Functional geometry, relentlessly executed without compromise.
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-5 pb-2">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="text-sm md:text-base font-normal text-gray-500 leading-relaxed"
            >
              Our process is strictly iterative, driven by site context, climatic demands, and the precise structural needs of the client. From conceptual sketches to material selection, every decision is measured against its spatial impact.
            </motion.p>
          </div>

        </div>
      </div>

      <div 
        ref={containerRef}
        className="w-full h-[100vh] min-h-[800px] relative overflow-hidden bg-black"
      >
        <motion.img
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease }}
          src="/studiophilosophy/SUNCITY.JPG"
          alt="Suncity Master View"
          className="absolute top-[-15%] left-0 w-full h-[130%] object-cover"
        />
        
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none"></div>
      </div>

    </section>
  );
}