import Hero from "./compositions/Hero";
import FeaturedProjects from "./compositions/FeaturedProjects";
import StudioPhilosophy from "./compositions/StudioPhilosophy";
import Expertise from "./compositions/Expertise";
import PrincipalArchitect from "./compositions/PrincipalArchitect";

export default function Home() {
  return (
    <main className="relative w-full bg-white overflow-hidden">
      <Hero />
      <FeaturedProjects />
      <StudioPhilosophy />
      <Expertise />
      <PrincipalArchitect />
    </main>
  );
}