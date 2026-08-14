"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  const architecturalEase = [0.16, 1, 0.3, 1] as const;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: architecturalEase }
          }}
          className="fixed inset-0 z-[9999] bg-white text-black flex flex-col items-center justify-center select-none pointer-events-none overflow-hidden"
        >
          {/* Grand Central Luxury Container */}
          <div className="flex flex-col items-center justify-center relative px-6 text-center">
            
            {/* Logo with direct motion.img unblur reveal */}
            <div className="w-44 h-44 md:w-56 md:h-56 relative flex items-center justify-center mb-4 overflow-hidden">
              <motion.img 
                initial={{ scale: 0.7, opacity: 0, filter: "blur(20px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.4, ease: architecturalEase }}
                src="/syedmobinlogo.png" 
                alt="Syed Mobin Architects Logo" 
                className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.04)]"
              />
            </div>

            {/* Optically Balanced Typography Reveal */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.25, ease: architecturalEase }}
                className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium uppercase text-black serif"
              >
                {/* SYED shifted optically right */}
                <span style={{ letterSpacing: '0.18em', transform: 'translateX(12px)' }}>SYED</span>
                {/* MOBIN shifted optically left */}
                <span style={{ letterSpacing: '0.18em', transform: 'translateX(-12px)' }}>MOBIN</span>
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.45, ease: architecturalEase }}
                className="text-xs md:text-sm font-mono tracking-[0.8em] text-black uppercase mt-4 font-semibold text-center"
              >
                Architects
              </motion.p>
            </div>
            
          </div>

          {/* Architectural Framing Lines */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: architecturalEase }}
            className="absolute top-12 left-12 right-12 md:left-20 md:right-20 h-[1px] bg-black/10 origin-left"
          />
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: architecturalEase }}
            className="absolute bottom-12 left-12 right-12 md:left-20 md:right-20 h-[1px] bg-black/10 origin-right"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}