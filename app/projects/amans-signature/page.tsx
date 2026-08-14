import ProjectMasthead from "@/app/compositions/ProjectMasthead";
import ProjectGallery from "@/app/compositions/ProjectGallery";
import { getProjectById } from "@/data/projects";

export default function AmansSignaturePage() {
  const project = getProjectById("amans-signature");

  if (!project) {
    return <div className="pt-40 pb-40 text-center text-black font-sans">Project not found in database.</div>;
  }

  return (
    <main className="bg-white min-h-screen">
      <ProjectMasthead 
        id="04" 
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
      
      <ProjectGallery images={project.gallery} /> 
      
    </main>
  );
}