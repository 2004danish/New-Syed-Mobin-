"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";

// Custom Counter Component for the "2007" animation
function AnimatedCounter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1], // The signature architectural ease
        onUpdate(value) {
          nodeRef.current!.textContent = Math.round(value).toString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to]);

  return <span ref={nodeRef}>{from}</span>;
}

export default function StatsBar() {
  const ease = [0.16, 1, 0.3, 1] as const;

  const stats = [
    {
      label: "Established",
      // We pass the component as the value for this specific item
      value: <AnimatedCounter from={1980} to={2007} />, 
    },
    {
      label: "Headquarters",
      value: "Nagpur, IN",
    },
    {
      label: "Focus Sectors",
      value: "Residential & Commercial",
    },
    {
      label: "Scale",
      value: "Nationwide Operations",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease } 
    },
  };

  return (
    <section className="py-12 md:py-20 bg-white text-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
        
        {/* Animated Top Architectural Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease }}
          className="absolute top-0 left-6 right-6 md:left-12 md:right-12 h-[1px] bg-black/10 origin-left"
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pt-10"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">
                {stat.label}
              </span>
              <span className="text-sm md:text-base font-semibold uppercase tracking-wider text-black">
                {stat.value}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}