"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const heroSlides = [
  {
    id: "amans-lifestyle",
    title: "Aman's Lifestyle",
    category: "Residential",
    image: "/hero-images/1.jpg", 
    href: "/work/amans-lifestyle", // Updated to the new dynamic route ID
    objectPosition: "center top" 
  },
  {
    id: "kala-villa",
    title: "Kala Villa",
    category: "Interior Design",
    image: "/hero-images/2.jpg", 
    href: "/work/kala-villa",
    objectPosition: "center center" 
  },
  {
    id: "oak-sterling-vista",
    title: "Oak Sterling Vista",
    category: "Architecture",
    image: "/hero-images/3.jpg", 
    href: "/work/oak-sterling-vista",
    objectPosition: "center center"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 1. Setup the Scroll Tracker
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // 2. Define the exact animations based on scroll position
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden bg-[#111]">
      
      {/* CINEMATIC BACKGROUNDS */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 w-full h-full z-0">
        {heroSlides.map((slide, index) => (
          <div key={slide.id} className="absolute inset-0 w-full h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <motion.div
                animate={{ scale: currentSlide === index ? 1.08 : 1 }}
                transition={{ duration: 10, ease: "linear" }}
                className="relative w-full h-full"
              >
                <Image 
                  src={slide.image} 
                  alt={slide.title} 
                  fill 
                  priority={index === 0}
                  className="object-cover"
                  style={{ objectPosition: slide.objectPosition }}
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* DYNAMIC TEXT OVERLAYS */}
      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }} 
        className="absolute inset-0 z-10 flex flex-col justify-end pb-12 md:pb-20"
      >
        <div className="max-w-[1500px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-2 md:gap-3"
              >
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-medium text-white/70">
                  {heroSlides[currentSlide].category}
                </span>
                <Link href={heroSlides[currentSlide].href} className="group">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.1] flex items-center gap-4 md:gap-6">
                    {heroSlides[currentSlide].title}
                    <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-2xl md:text-3xl text-[#C1A87D]">
                      &rarr;
                    </span>
                  </h1>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CUSTOM MINIMALIST PAGINATION */}
          <div className="flex gap-4 items-center">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative h-8 flex items-center"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div 
                  className={`h-[2px] transition-all duration-500 rounded-full ${
                    currentSlide === index ? "w-10 bg-white" : "w-4 bg-white/30 group-hover:bg-white/60"
                  }`} 
                />
              </button>
            ))}
          </div>

        </div>
      </motion.div>

    </section>
  );
}