import Link from "next/link";
import Image from "next/image"; 
import { ArrowUpRight } from "lucide-react";
import { projectsArchive } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-[#333] pt-32 pb-24 overflow-x-hidden selection:bg-[#C1A87D] selection:text-white">
      
      {/* HEADER SECTION */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-16 md:mb-24 pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#ddd] pb-10 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both">
          <div>
            <span className="block text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#999] font-medium mb-4">
              Complete Archive
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-[#222]">
              All Projects
            </h1>
          </div>
          <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] font-medium text-[#999]">
            <span>{projectsArchive.length} Works</span>
            <span>2007 — Present</span>
          </div>
        </div>
      </div>

      {/* NEW EDITORIAL GRID WITH NEXT/IMAGE */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16">
          {projectsArchive.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative flex flex-col bg-transparent animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out fill-mode-both transform-gpu"
              style={{ animationDelay: `${(index % 6) * 100}ms` }}
            >
              {/* FIXED ROUTING: Changed /projects/ to /work/ */}
              <Link href={`/work/${project.id}`} className="block w-full h-full cursor-pointer">
                
                {/* UPGRADED IMAGE CONTAINER */}
                <div className="w-full aspect-[4/3] relative bg-[#f5f5f5] overflow-hidden mb-6">
                  <Image 
                    src={project.thumbnail} 
                    alt={project.name}
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                    className="object-cover transition-transform duration-[2.5s] ease-[0.16,1,0.3,1] group-hover:scale-105 will-change-transform" 
                  />
                </div>
                
                {/* TEXT CONTAINER */}
                <div className="flex items-start justify-between w-full pr-2">
                  <div>
                    <p className="text-[10px] text-[#999] tracking-[0.2em] uppercase mb-2 font-medium transition-colors group-hover:text-[#C1A87D]">
                      {project.category} / {project.year}
                    </p>
                    <h3 className="text-lg md:text-xl font-light tracking-tight text-[#222] leading-none transition-colors group-hover:text-black">
                      {project.name}
                    </h3>
                  </div>
                  <div className="ml-4 w-9 h-9 rounded-full border border-[#ddd] flex items-center justify-center group-hover:bg-[#C1A87D] group-hover:border-[#C1A87D] group-hover:text-white transition-all duration-500 flex-shrink-0 -translate-x-2 group-hover:translate-x-0 opacity-80 group-hover:opacity-100">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </Link>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}