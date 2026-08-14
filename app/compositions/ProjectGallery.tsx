"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // <--- Import Next.js Image

export default function ProjectGallery({ images }: { images: string[] }) {
  if (!images || images.length === 0) return null;

  return (
    <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-32">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
        
        {images.map((imgSrc, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} // Slightly smaller margin for better mobile triggering
            transition={{ 
              duration: 0.8, 
              delay: (index % 3) * 0.1, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="break-inside-avoid overflow-hidden bg-gray-100 relative group"
          >
            {/* UPGRADED MASONRY IMAGE */}
            <Image
              src={imgSrc}
              alt={`Gallery image ${index + 1}`}
              width={1200} /* Base resolution for Next.js to scale from */
              height={1200} 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-auto object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105 will-change-transform"
            />
          </motion.div>
        ))}

      </div>
    </section>
  );
}