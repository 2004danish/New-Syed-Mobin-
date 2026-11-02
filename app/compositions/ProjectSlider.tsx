"use client";

import React, { useCallback, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

type ProjectSliderProps = {
  images: string[];
  projectName: string;
}

export default function ProjectSlider({ images, projectName }: ProjectSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })])
  const [isPlaying, setIsPlaying] = useState(true);

  // Navigation handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Play/Pause Engine
  const togglePlayPause = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    if (autoplay.isPlaying()) {
      autoplay.stop()
      setIsPlaying(false)
    } else {
      autoplay.play()
      setIsPlaying(true)
    }
  }, [emblaApi])

  // Sync state in case the carousel is paused by other interactions
  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    emblaApi.on('autoplay:play', () => setIsPlaying(true))
    emblaApi.on('autoplay:stop', () => setIsPlaying(false))
  }, [emblaApi])

  return (
    // Replaced the strict wide aspect ratio with a generous, responsive vertical height (80vh on desktop)
    <div className="relative group overflow-hidden bg-[#fafafa] w-full h-[60vh] md:h-[80vh] flex items-center justify-center rounded-[2px] border border-gray-100">
      
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {images.map((src, index) => (
            // Clicking the image itself toggles play/pause for intuitive UX
            <div 
              className="relative flex-[0_0_100%] min-w-0 h-full cursor-pointer" 
              key={index} 
              onClick={togglePlayPause}
            >
              {/* CRITICAL FIX: Changed from object-cover to object-contain so vertical images are NEVER cropped */}
              <Image
                src={src}
                alt={`${projectName} - Image ${index + 1}`}
                fill
                className="object-contain p-2 md:p-6 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority={index === 0} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button 
        onClick={(e) => { e.stopPropagation(); scrollPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white text-[#333] hover:scale-105 z-10 shadow-sm"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Next Button */}
      <button 
        onClick={(e) => { e.stopPropagation(); scrollNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white text-[#333] hover:scale-105 z-10 shadow-sm"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Play/Pause Indicator Button */}
      <button
        onClick={(e) => { e.stopPropagation(); togglePlayPause(); }}
        className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white text-[#333] hover:scale-105 z-10 shadow-sm"
        aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4 ml-0.5" /> 
        )}
      </button>

    </div>
  )
}