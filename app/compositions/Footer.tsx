"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black pt-20 md:pt-32 pb-8 border-t border-black/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">

        {/* TOP SECTION: Call to Action + Brand Identity */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 pb-16 md:pb-20 border-b border-black/10">
          
          <div className="max-w-3xl">
            <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-6">
              Initiate a Dialogue
            </span>
            {/* UPDATED: Removed 'serif', added 'font-sans' and 'tracking-tighter' for the Geist look */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter uppercase text-black font-sans leading-[1.05]">
              Ready to engineer your next spatial environment?
            </h2>
            <a 
              href="mailto:sma.mob.ngp@gmail.com" 
              className="group mt-10 inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.2em] hover:text-gray-500 transition-colors"
            >
              Contact the Studio
              <span className="w-12 h-[1px] bg-black group-hover:w-20 group-hover:bg-gray-500 transition-all duration-500 ease-[0.16,1,0.3,1]"></span>
            </a>
          </div>

          {/* Logo & Establishment Date */}
          <div className="flex flex-col items-start lg:items-end">
             <div className="w-20 h-20 md:w-28 md:h-28 mb-6 flex items-center justify-center">
               <img 
                 src="/syedmobinlogo.png" 
                 alt="Syed Mobin Architects" 
                 className="w-full h-full object-contain"
               />
             </div>
             <p className="text-left lg:text-right text-[10px] font-mono tracking-[0.3em] text-gray-400 uppercase font-bold leading-relaxed">
               Syed Mobin Architects<br/>Established 2007
             </p>
          </div>
        </div>

        {/* MIDDLE SECTION: Strict Blueprint Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10 border-b border-black/10 text-xs md:text-sm uppercase tracking-wider font-medium">

          {/* Column 1 */}
          <div className="py-8 md:py-12 md:pr-12 flex flex-col gap-5">
            <span className="font-mono text-[9px] tracking-[0.3em] text-gray-400 font-bold">Headquarters</span>
            <div className="leading-relaxed text-black/90">
              <p>301, P - 7/2, Style Homes</p>
              <p>Chitnavis Layout, Byramji Town</p>
              <p>Nagpur, MH 440013</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="py-8 md:py-12 md:px-12 flex flex-col gap-5">
            <span className="font-mono text-[9px] tracking-[0.3em] text-gray-400 font-bold">Communications</span>
            <div className="flex flex-col gap-2 text-black/90">
              <a href="mailto:sma.mob.ngp@gmail.com" className="hover:text-gray-400 transition-colors w-fit">sma.mob.ngp@gmail.com</a>
              <a href="tel:+917122588900" className="hover:text-gray-400 transition-colors w-fit">+91 712 2588900</a>
              <a href="tel:+917122588901" className="hover:text-gray-400 transition-colors w-fit">+91 712 2588901</a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="py-8 md:py-12 md:pl-12 flex flex-col gap-5">
            <span className="font-mono text-[9px] tracking-[0.3em] text-gray-400 font-bold">Network & Index</span>
            <div className="grid grid-cols-2 gap-4 text-black/90">
               <div className="flex flex-col gap-2">
                 <a href="#" className="hover:text-gray-400 transition-colors w-fit">Instagram</a>
                 <a href="#" className="hover:text-gray-400 transition-colors w-fit">LinkedIn</a>
               </div>
               <div className="flex flex-col gap-2">
                 <Link href="/projects" className="hover:text-gray-400 transition-colors w-fit">Projects</Link>
                 <Link href="/#studio" className="hover:text-gray-400 transition-colors w-fit">Studio</Link>
               </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400 font-bold">
          <span>&copy; {currentYear} Syed Mobin Architects</span>
          <span>All Rights Reserved</span>
        </div>

      </div>
    </footer>
  );
}