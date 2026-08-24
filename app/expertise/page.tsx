"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ExpertisePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const ease = [0.16, 1, 0.3, 1] as const;

  const disciplines = [
    {
      id: "01",
      title: "Architecture",
      description: "The philosophy of our Firm is to design a building interpreting the client's special needs in an innovative manner, exploiting the latest technology available in the building industry. We do not reduce design to a mere exercise in combining shapes. Instead, we reach the heart of the matter to address core problems, creating dramatic spaces that work seamlessly while appealing to the people who inhabit them.",
      tags: ["Innovative Solutions", "Smart Buildings", "Human-Centric Design"]
    },
    {
      id: "02",
      title: "Interiors",
      description: "We offer a complete range of services for the planning, design, and delivery of interior environments. SMA designs attractive spaces built around the latest ideas of how people interact. From helping clients strategize and plan their space, to delivering it on time and within budget, we manage the entire tenant fit-out.",
      tags: ["Space Planning", "Workplace Strategies", "Finishes Selection", "Custom Furniture"]
    },
    {
      id: "03",
      title: "Planning & Urban Design",
      description: "Our architecture is driven by the pursuit of quality—a belief that our surroundings directly influence our well-being. We are deeply concerned with the physical context of a project, sensitive to the culture and climate of the place. We pioneer solutions using renewable energy sources, offering dramatic reductions in pollution and ecological impact.",
      tags: ["Contextual Sensitivity", "Ecological Integration", "Urban Landscapes"]
    },
    {
      id: "04",
      title: "Structural Design",
      description: "Our structural engineering team upholds international standards in quality, encompassing structural steel design, reinforced concrete, and complex stage designs. We support the entire segment of the structural design process—from conceptual modeling and analysis of pre-existing designs, to detailed construction documentation.",
      tags: ["Steel & Concrete", "Safety Standards", "Construction Documentation"]
    },
    {
      id: "05",
      title: "3D Visualization",
      description: "We don't just push architectural renderings; we complete the whole delivery process to ensure you get the best value from our visualization work. Our team creates a truly complete digital media and visually rich solution for property developers, architects, and real estate professionals.",
      tags: ["Digital Media", "Photorealistic Renderings", "Immersive Experience"]
    }
  ];

  return (
    <main className="bg-white min-h-screen text-black selection:bg-black selection:text-white pb-32">
      
      {/* PAGE HEADER */}
      <section className="pt-40 md:pt-56 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease }}
          className="mb-8"
        >
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-400 font-bold">
            Our Disciplines
          </span>
        </motion.div>

        <div className="max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.1, ease }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5vw] font-medium tracking-tight uppercase leading-[0.9] serif"
          >
            Expertise & <br/> Methodology
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5, delay: 0.4, ease }}
          className="mt-16 md:mt-24 max-w-2xl ml-auto border-t border-black/20 pt-8"
        >
          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700">
            With nearly two decades of experience based in the heart of India, we possess both the technical expertise and creative vision to respond to your unique project. From luxurious villas and high-rise apartments to expansive academic campuses and hospitals.
          </p>
        </motion.div>
      </section>

      {/* SERVICES LIST */}
      <section ref={containerRef} className="px-6 md:px-12 max-w-[1600px] mx-auto mt-12 md:mt-24">
        <div className="flex flex-col border-t border-black/20">
          {disciplines.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: index * 0.1, ease }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 md:py-20 border-b border-black/20 group"
            >
              
              {/* Number & Title */}
              <div className="lg:col-span-5 flex flex-col md:flex-row gap-4 md:gap-12 lg:items-start">
                <span className="font-mono text-sm md:text-base text-gray-300 transition-colors duration-500 group-hover:text-black">
                  {item.id}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight serif group-hover:pl-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {item.title}
                </h2>
              </div>

              {/* Description & Tags */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-2xl mb-12">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {item.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 border border-black/10 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto mt-32 md:mt-48 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease }}
        >
          <h3 className="text-3xl md:text-5xl uppercase serif mb-8">Discuss a Project</h3>
          <a 
            href="/#contact" 
            className="inline-block border-b-2 border-black pb-2 text-sm md:text-base font-bold uppercase tracking-[0.2em] hover:text-gray-500 hover:border-gray-500 transition-colors duration-300"
          >
            Get in touch
          </a>
        </motion.div>
      </section>

    </main>
  );
}