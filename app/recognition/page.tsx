"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RecognitionPage() {
  const ease = [0.16, 1, 0.3, 1] as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease } }
  };

  return (
    <main className="bg-white text-[#333] min-h-screen selection:bg-[#C1A87D] selection:text-white pb-24 overflow-x-hidden pt-32">
      
      {/* 1. PAGE HEADER */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20 border-b border-[#eee]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease }}
          className="max-w-4xl"
        >
          <h4 className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-medium text-[#999] mb-6">
            Awards & Press
          </h4>
          <h1 className="text-[2.5rem] sm:text-4xl md:text-[4.5rem] font-light tracking-tight leading-[1.1] text-[#222]">
            Pioneering sustainable architecture in Central India.
          </h1>
        </motion.div>
      </section>

      {/* 2. GLOBAL RECOGNITION (Two-Column Layout) */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[#eee]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-8 md:gap-16 items-start">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.2, ease }}
            className="text-[12px] md:text-[14px] uppercase tracking-[0.2em] font-medium text-[#222] md:pt-2"
          >
            Global Stage
          </motion.h4>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.2, delay: 0.1, ease }}
            className="flex flex-col gap-6 text-[17px] md:text-[20px] font-light text-[#555] leading-[1.9]"
          >
            <p>
              Syed Mobin's innovative designs and commitment to sustainability have garnered global recognition. He was selected as one of only seven representatives from India at the LafargeHolcim International Conference in Cairo, Egypt.
            </p>
            <p>
              This prestigious event allowed him to collaborate and learn directly from esteemed Pritzker Architecture Prize-winning masters like Lord Norman Foster, Francis Kéré, and Anne Lacaton, further enriching the firm's architectural perspective on a global scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. AWARDS LIST (Minimalist Grid) */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[#eee]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-8 md:gap-16 items-start">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.2, ease }}
            className="text-[12px] md:text-[14px] uppercase tracking-[0.2em] font-medium text-[#222] md:pt-2"
          >
            Select Awards
          </motion.h4>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col w-full"
          >
            {[
              { year: "2024", title: "iDesign Excellence Award", org: "National Recognition" },
              { year: "2024", title: "Ultra Tech Award", org: "ICI Nagpur" },
              { year: "2020", title: "GABA International Award", org: "Dubai, UAE (Reclaimed Materials Villa)" },
              { year: "2020", title: "iDesign Excellence Award", org: "National Recognition" },
              { year: "2019", title: "Ultra Tech Award", org: "ICI Nagpur" },
              { year: "2017", title: "Ultra Tech Award", org: "ICI Nagpur" },
              { year: "Early", title: "National HUDCO Trophy", org: "NASA" }
            ].map((award, idx) => (
              <motion.div 
                key={idx}
                variants={staggerItem}
                className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[#f0f0f0] group hover:border-[#C1A87D] transition-colors duration-500"
              >
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="text-[14px] font-medium text-[#999] w-12">{award.year}</span>
                  <h3 className="text-[18px] md:text-[22px] font-light text-[#222] group-hover:text-[#C1A87D] transition-colors duration-500">
                    {award.title}
                  </h3>
                </div>
                <span className="text-[13px] text-[#777] mt-2 md:mt-0 font-light tracking-wide">
                  {award.org}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. PRESS & PHILOSOPHY (Extracted from Hitavada & MGS) */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[#eee]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-8 md:gap-16 items-start">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.2, ease }}
            className="text-[12px] md:text-[14px] uppercase tracking-[0.2em] font-medium text-[#222] md:pt-2"
          >
            In The Press
          </motion.h4>
          
          <div className="flex flex-col gap-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 1.2, ease }}
              className="relative p-8 md:p-12 bg-[#fafafa]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C1A87D]"></div>
              <h3 className="text-[20px] md:text-[28px] font-light text-[#222] leading-[1.5] mb-6">
                "Design is the alchemy of the prevailing forces of culture, climate, and construction; it is an integrated vision of functional, cultural, constructional, environmental, economic as well as aesthetic values."
              </h3>
              <p className="text-[13px] uppercase tracking-[0.2em] font-medium text-[#777]">
                — MGS Architecture Magazine
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 1.2, ease }}
              className="relative p-8 md:p-12 bg-[#fafafa]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C1A87D]"></div>
              <h3 className="text-[18px] md:text-[24px] font-light text-[#222] leading-[1.6] mb-6">
                "Authorities must make sanction of elevation mandatory like Dubai. It will filter creative ideas and we can get a lot of good aesthetic buildings in our city... We can add a creative touch to it without heavy expenditure. A simple lantern used in a balcony not only adds beauty but also functions like a costly overhead lamp."
              </h3>
              <p className="text-[13px] uppercase tracking-[0.2em] font-medium text-[#777]">
                — The Hitavada Interview
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. SOCIAL IMPACT */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-8 md:gap-16 items-start">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.2, ease }}
            className="text-[12px] md:text-[14px] uppercase tracking-[0.2em] font-medium text-[#222] md:pt-2"
          >
            Social Impact
          </motion.h4>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.2, delay: 0.1, ease }}
            className="flex flex-col gap-6 text-[17px] md:text-[20px] font-light text-[#555] leading-[1.9]"
          >
            <p>
              Beyond architectural achievements, Syed Mobin is a founder member of the <strong>Kadu Neem Foundation</strong>, a social initiative with over 150 members from diverse fields.
            </p>
            <p>
              The foundation's mission is to conserve heritage, plant trees, and propel Nagpur towards becoming India's number one Green City. This initiative reflects the firm's holistic approach to improving both the built environment and the community at large.
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}