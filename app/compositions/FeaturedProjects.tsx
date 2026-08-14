"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "dnr-house",
    title: "DNR House",
    category: "Residential",
    year: "2024",
    image: "/featuredprojectsimages/DNRhouse.png",
    gridClass: "md:col-span-3", 
  },
  {
    id: "arjun-farms",
    title: "Arjun Farms",
    category: "Estate",
    year: "2023",
    image: "/featuredprojectsimages/arjunfarms.png",
    gridClass: "md:col-span-1",
  },
  {
    id: "amans-lifestyle",
    title: "Aman's Lifestyle",
    category: "Commercial",
    year: "2022",
    image: "/featuredprojectsimages/aman's%20lifestyle.png",
    gridClass: "md:col-span-2",
  },
  {
    id: "jamna-palace",
    title: "Jamna Palace",
    category: "Heritage",
    year: "2024",
    image: "/featuredprojectsimages/jamnapalace.png",
    gridClass: "md:col-span-2", 
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="pt-32 pb-4 md:pb-8 bg-white text-black relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-10 mb-16 gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter uppercase text-black mb-4 serif">
              Selected Works
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-light tracking-wide max-w-xl">
              An archive of purposeful spaces. Exploring the intersection of raw materiality, precise geometry, and human experience.
            </p>
          </div>
          
          <Link 
            href="/projects" 
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] hover:text-gray-500 transition-colors"
          >
            <span>Explore Archive</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[450px] md:auto-rows-[600px] gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden bg-gray-100 ${project.gridClass}`}
            >
              <Link href={`/projects/${project.id}`} className="block w-full h-full cursor-pointer">
                
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                />
                
                <div className="absolute bottom-0 left-0 bg-white p-6 md:p-8 flex items-end justify-between min-w-[85%] md:min-w-[340px] transform transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:-translate-y-2 group-hover:translate-x-2">
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500 tracking-[0.3em] uppercase mb-3 font-mono">
                      {project.category} / {project.year}
                    </p>
                    <h3 className="text-xl md:text-3xl font-medium tracking-tight uppercase text-black leading-none">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="ml-6 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-colors duration-500 flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}