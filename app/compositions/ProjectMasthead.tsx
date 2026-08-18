"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ProjectMastheadProps {
  title: string;
  id: string;
  metadata: {
    location: string;
    typology: string;
    scale: string;
    year: string;
    status: string;
  };
  heroImage: string;
  isTallImage?: boolean; 
}

export default function ProjectMasthead({ title, id, metadata, heroImage, isTallImage = false }: ProjectMastheadProps) {
  const ease = [0.16, 1, 0.3, 1] as const;
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="pt-32 md:pt-48 pb-12 bg-white text-black relative z-10 overflow-hidden">
      
      <style>{`
        @keyframes panObject {
          0% { object-position: 50% 0%; }
          100% { object-position: 50% 100%; }
        }
        .animate-pan {
          animation: panObject 12s ease-in-out infinite alternate;
        }
      `}</style>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }} className="mb-8">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-400 font-bold">
            Dossier // {id}
          </span>
        </motion.div>

        <div className="overflow-hidden mb-16 md:mb-24">
          <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease }} className="text-6xl sm:text-7xl md:text-8xl lg:text-[9vw] font-medium tracking-tight uppercase leading-[0.85] text-black serif">
            {title}
          </motion.h1>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease }} className="grid grid-cols-2 lg:grid-cols-5 gap-8 pt-8 border-t border-black/20">
          <div className="flex flex-col gap-2"><span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold">Location</span><span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-black">{metadata.location}</span></div>
          <div className="flex flex-col gap-2"><span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold">Typology</span><span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-black">{metadata.typology}</span></div>
          <div className="flex flex-col gap-2"><span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold">Scale</span><span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-black">{metadata.scale}</span></div>
          <div className="flex flex-col gap-2"><span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold">Year</span><span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-black">{metadata.year}</span></div>
          <div className="flex flex-col gap-2 lg:border-l lg:border-black/10 lg:pl-8"><span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold">Status</span><span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-black">{metadata.status}</span></div>
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mt-16 md:mt-24">
        <motion.div 
          ref={containerRef}
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.6, delay: 0.4, ease }}
          className="w-full h-[60vh] md:h-[85vh] relative overflow-hidden bg-black/5"
        >
          {!isTallImage ? (
            <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-[120%] origin-top">
              <Image src={heroImage} alt={`${title} Architecture`} fill priority quality={90} className="object-cover" />
            </motion.div>
          ) : (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={heroImage}
                alt={`${title} Architecture`}
                fill
                priority
                quality={90}
                className="object-cover animate-pan"
                style={{ animationPlayState: isPaused ? "paused" : "running" }}
              />
              
              {/* THE FIX: A completely invisible button sitting on top of the image to catch 100% of touches */}
              <button 
                className="absolute inset-0 w-full h-full z-10 cursor-pointer bg-transparent border-none outline-none appearance-none"
                onClick={() => setIsPaused(!isPaused)}
                aria-label={isPaused ? "Resume animation" : "Pause animation"}
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}