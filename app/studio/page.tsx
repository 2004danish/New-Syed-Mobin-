"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const studioImages = [
  { src: "/studio/reception-cum-waiting.jpg", alt: "Studio Reception", span: "md:col-span-2 md:row-span-2 h-[400px] md:h-[616px]" }, 
  { src: "/studio/work-studio.jpg", alt: "Main Work Studio", span: "col-span-1 h-[300px]" },
  { src: "/studio/principal-architect-cabin1.jpg", alt: "Principal Architect Cabin", span: "col-span-1 h-[300px]" },
  { src: "/studio/meeting-room.jpg", alt: "Client Meeting Room", span: "md:col-span-2 h-[300px]" },
  { src: "/studio/vip-lounge.jpg", alt: "VIP Lounge", span: "col-span-1 h-[300px]" },
  { src: "/studio/manager-cabin.jpg", alt: "Manager Cabin", span: "col-span-1 h-[300px]" },
  { src: "/studio/conference.jpg", alt: "Conference Room", span: "md:col-span-2 h-[300px]" },
  { src: "/studio/edited-sma.jpg", alt: "Design Studio", span: "md:col-span-2 h-[300px]" },
];

export default function StudioPage() {
  const ease = [0.16, 1, 0.3, 1] as const;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-white min-h-screen text-black pb-24">
      
      {/* HEADER SECTION - Gap strictly removed, original text sizes restored */}
      <section className="pt-28 md:pt-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }} className="mb-6">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-400 font-bold">
            Inside The Firm
          </span>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end border-b border-black/10 pb-12">
          <div className="lg:col-span-7 overflow-hidden">
            <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease }} className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight uppercase leading-[0.9] serif">
              A Space Designed <br/> For Innovation.
            </motion.h1>
          </div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.4 }} className="lg:col-span-5 max-w-md">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              At Syed Mobin Architects, we believe that the environment dictates the design. Our workspace is more than just an office; it is a collaborative hub where raw ideas are transformed into structural masterpieces. Every corner has been meticulously crafted to inspire our team and welcome our clients into our creative process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENTO BOX GALLERY */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {studioImages.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease }}
              className={`relative w-full overflow-hidden bg-gray-100 ${img.span} group`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={90}
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-end p-6">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-mono text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transform">
                  {img.alt}
                </span>
              </div>

              {/* The invisible button for the Lightbox trigger */}
              <button
                className="absolute inset-0 w-full h-full z-20 cursor-pointer bg-transparent border-none outline-none appearance-none"
                onClick={() => setSelectedImage(img.src)}
                aria-label={`View ${img.alt} full screen`}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CINEMATIC LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={36} strokeWidth={1} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              className="relative w-full h-full max-w-7xl max-h-[90vh] cursor-default"
              onClick={(e) => e.stopPropagation()} 
            >
              <Image
                src={selectedImage}
                alt="Expanded Studio View"
                fill
                quality={100}
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}