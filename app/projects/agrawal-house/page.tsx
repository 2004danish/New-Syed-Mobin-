import ProjectMasthead from "@/app/compositions/ProjectMasthead";
import ProjectGallery from "@/app/compositions/ProjectGallery"; // <--- 1. This imports the gallery!
import { getProjectById } from "@/data/projects";

export default function AgrawalHousePage() {
  const project = getProjectById("agrawal-house");

  if (!project) {
    return <div className="pt-40 pb-40 text-center text-black font-sans">Project not found in database.</div>;
  }

  return (
    <main className="bg-white min-h-screen">
      <ProjectMasthead 
        id="01" 
        title={project.name}
        metadata={{
          location: project.location,
          typology: project.category,
          scale: project.scale,
          year: project.year,
          status: project.status
        }}
        heroImage={project.hero}
      />
      
      {/* 2. This actually renders the grid on the screen! */}
      <ProjectGallery images={project.gallery} /> 
      
    </main>
  );
}