import { HeroSection } from "../components/HeroSection";
import { TechStack } from "../components/TechStack";
import { ProjectsPreview } from "../components/ProjectsPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TechStack />
      <ProjectsPreview />
    </div>
  );
};

export default Index;
