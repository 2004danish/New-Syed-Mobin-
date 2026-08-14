"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Expanded the parallax slightly to match the longer scroll distance
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const ease = [0.16, 1, 0.3, 1]; 

  return (
    <section 
      id="hero"
      ref={containerRef}
      // Increased height to 140vh and minimum height to 1080px for a massive cinematic stretch
      className="relative w-full h-[140vh] min-h-[1080px] bg-[#050505] overflow-hidden flex flex-col justify-end"
    >
      
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 z-0 w-full h-full origin-top"
      >
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src="/hero images/Oak_Sterling Day_view_New.jpg" 
            alt="Oak Sterling Day View" 
            className="w-full h-full object-cover" 
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#050505]" />
      </motion.div>

      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-24 flex flex-col justify-between h-full pt-40 pointer-events-none"
      >
        
        <div className="flex justify-between items-start w-full mt-12 md:mt-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease }}
            className="flex items-center gap-6"
          >
            <span className="w-12 h-[1px] bg-white/50"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/80 font-mono">
              Nagpur, India
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-mono text-right max-w-[200px]"
          >
            Est. 2007 <br/> By Syed Mobin
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-end gap-12 w-full">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col items-center gap-6 pb-4 hidden sm:flex"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-mono transform rotate-90 origin-left translate-x-4 mb-10">
              Scroll
            </span>
            <div className="w-[1px] h-24 bg-white/20 relative overflow-hidden">
              <motion.div 
                animate={{ y: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-full bg-white/80"
              />
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}