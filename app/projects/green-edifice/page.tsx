import ProjectMasthead from "@/app/compositions/ProjectMasthead";
import ProjectGallery from "@/app/compositions/ProjectGallery";
import { getProjectById } from "@/data/projects";

export default function GreenEdificePage() {
  const project = getProjectById("green-edifice");

  if (!project) return <div className="pt-40 pb-40 text-center text-black font-sans">Project not found in database.</div>;

  return (
    <main className="bg-white min-h-screen">
      <ProjectMasthead 
        id="09" 
        title={project.name}
        metadata={{ location: project.location, typology: project.category, scale: project.scale, year: project.year, status: project.status }}
        heroImage={project.hero}
        isTallImage={true} /* <--- Activates the cinematic drone pan! */
      />
      <ProjectGallery images={project.gallery} /> 
    </main>
  );
}