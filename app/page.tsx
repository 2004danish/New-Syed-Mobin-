import Hero from "@/app/compositions/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Our Premium Cinematic Hero */}
      <Hero />
      
      {/* You can add your "Featured Projects" or "About Us" sections below this later */}
    </main>
  );
}