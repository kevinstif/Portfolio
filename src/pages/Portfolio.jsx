import Navbar from "../components/organism/Navbar/Navbar";
import HeroSection from "../components/organism/HeroSection/HeroSection";
import AboutSection from "../components/organism/AboutSection/AboutSection";
import GlowDivider from "../components/atoms/GlowDivider";
import SkillsSection from "../components/organism/SkillsSection/SkillsSection";
import ProjectSection from "../components/organism/ProjectSection/ProjectSection";

const Portfolio = () => {

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <GlowDivider />
      <AboutSection />
      <GlowDivider />
      <SkillsSection />
      <GlowDivider />
      <ProjectSection />
    </div>
  );
};

export default Portfolio;
