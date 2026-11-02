import { notFound } from "next/navigation";
// Added projectsArchive to the import so we can pull random projects
import { getProjectById, projectsArchive } from "@/data/projects";
import ProjectSlider from "@/app/compositions/ProjectSlider";
import Link from "next/link";
import Image from "next/image"; // Imported Next.js Image for the thumbnails
import { ArrowLeft } from "lucide-react";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);

  if (!project) {
    return notFound();
  }

  const description = "Conceived to reflect a renewed visual identity through clarity of material and spatial openness. The design emphasizes visual connectivity, allowing light to travel freely across the plan and creating a calm and welcoming environment.";

  const allImages = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.hero || project.thumbnail]; 

  // --- NEW LOGIC FOR RELATED PROJECTS & NAVIGATION ---
  
  // 1. Find the current project's position to define "Prev" and "Next"
  const currentIndex = projectsArchive.findIndex((p) => p.id === resolvedParams.id);
  const prevProject = projectsArchive[(currentIndex - 1 + projectsArchive.length) % projectsArchive.length];
  const nextProject = projectsArchive[(currentIndex + 1) % projectsArchive.length];

  // 2. Get 4 random projects (excluding the current one) for the grid
  const otherProjects = projectsArchive.filter((p) => p.id !== resolvedParams.id);
  // Shuffle the remaining projects and grab the first 4
  const randomRelated = [...otherProjects].sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <main className="min-h-screen bg-white text-[#333] pt-32 pb-16 md:pt-40 md:pb-20 selection:bg-[#C1A87D] selection:text-white overflow-x-hidden">
      
      {/* Top Navigation Anchor */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 mb-12">
        <Link 
          href="/work" 
          className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-medium text-[#999] hover:text-[#C1A87D] transition-colors duration-300 w-fit pb-1 border-b border-transparent hover:border-[#C1A87D]"
        >
          <ArrowLeft className="w-3 h-3" /> Back to Archive
        </Link>
      </div>

      {/* The Asymmetrical Babnimnim Layout */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Auto-Swiping Interactive Carousel */}
          <div className="w-full relative rounded-[2px] overflow-hidden shadow-sm">
            <ProjectSlider images={allImages} projectName={project.name} />
          </div>

          {/* RIGHT: Ultra-Minimal Title & Description */}
          <div className="flex flex-col gap-6 lg:pt-4 lg:sticky lg:top-40">
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1] text-[#222]">
              {project.name}
            </h1>
            
            <p className="text-[15px] md:text-[16px] font-light text-[#666] leading-[1.8] max-w-md">
              {description}
            </p>
          </div>

        </div>
      </div>

      {/* --- NEW RELATED PROJECTS SECTION --- */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 mt-32 md:mt-48">
        <div className="border-t border-[#ddd] pt-12 md:pt-16">
          
          {/* Header & Navigation */}
          <div className="flex items-center justify-between mb-12 md:mb-16">
            <Link 
              href={`/work/${prevProject.id}`}
              className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium text-[#777] hover:text-[#222] transition-colors duration-300 flex items-center gap-3"
            >
              <span className="text-[14px]">&larr;</span> prev
            </Link>
            
            <h3 className="text-[11px] md:text-[12px] font-medium uppercase tracking-[0.2em] text-[#222]">
              Related Projects
            </h3>

            <Link 
              href={`/work/${nextProject.id}`}
              className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium text-[#777] hover:text-[#222] transition-colors duration-300 flex items-center gap-3"
            >
              next <span className="text-[14px]">&rarr;</span>
            </Link>
          </div>

          {/* 4-Column Random Thumbnail Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {randomRelated.map((rel) => (
              <Link key={rel.id} href={`/work/${rel.id}`} className="group block cursor-pointer">
                <div className="w-full aspect-[4/3] relative bg-[#f5f5f5] overflow-hidden">
                  <Image 
                    src={rel.thumbnail}
                    alt={rel.name}
                    fill
                    className="object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Elegant Title Reveal on Hover */}
                  <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4 text-center">
                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#222]">
                      {rel.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>

    </main>
  );
}