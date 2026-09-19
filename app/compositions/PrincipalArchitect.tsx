"use client";
import { motion } from "framer-motion";

export default function PrincipalArchitect() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="architect" className="py-24 md:py-32 bg-[#F9F9F7] text-black border-t border-black/10 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Architectural Offset Portrait */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start relative">
            {/* Structural Background Box */}
            <motion.div 
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease, delay: 0.2 }}
              className="absolute -bottom-6 -left-6 w-full h-full border border-black/15 z-0 hidden md:block max-w-[480px] aspect-[3/4] lg:aspect-[4/5]"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease }}
              className="relative w-full max-w-[480px] aspect-[3/4] lg:aspect-[4/5] bg-gray-200 overflow-hidden group z-10 shadow-2xl"
            >
              <motion.img
                initial={{ scale: 1.05, filter: "grayscale(100%)" }}
                whileInView={{ scale: 1, filter: "grayscale(0%)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease, delay: 0.1 }}
                src="/mobinsir2.jpeg"
                alt="Principal Architect Syed Mobin"
                className="w-full h-full object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105"
              />
            </motion.div>
          </div>

          {/* RIGHT: Dynamic Editorial Layout */}
          <div className="lg:col-span-7 flex flex-col z-10">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400 font-bold flex items-center gap-4">
                <span className="w-8 h-[1px] bg-black/20"></span>
                03 — Principal Architect
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1] text-black mb-12"
            >
              Syed Mobin
            </motion.h2>

            {/* The S.M.A. Manifesto Feature */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="pl-6 border-l-2 border-black mb-12 max-w-2xl"
            >
              <ul className="flex flex-col gap-3 text-lg md:text-xl font-medium tracking-tight text-black">
                <li><span className="font-bold text-gray-400 mr-2">S.</span> Sustainable design.</li>
                <li><span className="font-bold text-gray-400 mr-2">M.</span> Minute detailing.</li>
                <li><span className="font-bold text-gray-400 mr-2">A.</span> Addiction to strive for the best.</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="flex flex-col gap-6 text-sm md:text-base font-normal text-gray-600 leading-relaxed max-w-2xl mb-14"
            >
              <p>
                With a prominent career in Central India spanning two decades, Syed Mobin has commissioned over 100 diverse projects. His work impeccably balances functional spatial design with compelling architectural elevations. 
              </p>
              <p>
                A lifelong dedication recognized early by a national HUDCO Trophy, his portfolio now holds multiple UltraTech awards and the prestigious international GABA award for a sustainable residential villa crafted from reclaimed materials. Globally recognized, he was selected among seven architects to represent India at the Lafarge Holcim International Conference in Cairo, exchanging philosophies with Pritzker laureates like Lord Norman Foster, Francis Kere, and Anne Lacaton.
              </p>
            </motion.div>

            {/* Upgraded Credentials & Stats Grid (Licensure removed) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease }}
              className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 pt-8 border-t border-black/15 max-w-3xl"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">Experience</span>
                <span className="text-sm md:text-base font-medium tracking-tight text-black">20+ Years</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">Commissions</span>
                <span className="text-sm md:text-base font-medium tracking-tight text-black">100+ Projects</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">Registered Name</span>
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-black">Mobinuddin M. K. Syed</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">COA Registration</span>
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-black">CA/2002/29182</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}