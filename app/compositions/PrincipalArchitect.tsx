"use client";
import { motion } from "framer-motion";

export default function PrincipalArchitect() {
  const ease = [0.16, 1, 0.3, 1];

  return (
    <section id="architect" className="py-20 md:py-32 bg-white text-black border-t border-black/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* The New Gallery-Style 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: The Elegant Portrait with Clean Image Hover */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease }}
              className="relative w-full max-w-[500px] mx-auto lg:mx-0 aspect-[3/4] bg-gray-100 overflow-hidden group cursor-pointer"
            >
              <motion.img
                initial={{ scale: 1.05, filter: "grayscale(100%)" }}
                whileInView={{ scale: 1, filter: "grayscale(0%)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease, delay: 0.1 }}
                src="/Mobin Sir.jpg"
                alt="Syed Mobin"
                className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
              />
            </motion.div>
          </div>

          {/* RIGHT: Unified, Aesthetic Typography Block */}
          <div className="lg:col-span-7 flex flex-col pt-4 md:pt-10">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">
                03 — Principal Architect
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] text-black mb-10"
            >
              Syed Mobin
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="flex flex-col gap-6 max-w-2xl mb-16"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium leading-tight text-black tracking-tight">
                Bridging human utility with precise structural performance.
              </h3>
              <p className="text-sm md:text-base font-normal text-gray-500 leading-relaxed">
                Leading the studio with a commitment to creating environments that serve their occupants and respect their context. Every project is approached as a functional puzzle demanding a precise, engineered answer, stripping away unnecessary ornamentation to reveal the core structure.
              </p>
            </motion.div>

            {/* Unified Credentials Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-black/10 max-w-2xl"
            >
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Registered Name</span>
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-black">Mobinuddin M. K. Syed</span>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">COA Registration</span>
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-black">CA/2002/29182</span>
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Licensure Status</span>
                <span className="flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-black">
                  <span className="w-1.5 h-1.5 rounded-full bg-black"></span> Valid Until 2033
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}