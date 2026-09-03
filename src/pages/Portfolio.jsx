import Navbar from "../components/organism/Navbar/Navbar";
import Footer from "../components/molecules/Footer";
import HeroSection from "../components/organism/HeroSection/HeroSection";
import AboutSection from "../components/organism/AboutSection/AboutSection";
import GlowDivider from "../components/atoms/GlowDivider";
import SkillsSection from "../components/organism/SkillsSection/SkillsSection";
import ProjectSection from "../components/organism/ProjectSection/ProjectSection";
import ExperienceSection from "../components/organism/ExperienceSection/ExperienceSection";
import AcademicSection from "../components/organism/AcademicSection/AcademicSection";
import ContactSection from "../components/organism/ContactSection/ContactSection";

const Portfolio = () => {

  return (
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <GlowDivider />
      <AboutSection />
      <GlowDivider />
      <SkillsSection />
      <GlowDivider />
      <ProjectSection />
      <GlowDivider />
      <ExperienceSection />
      <GlowDivider />
      <AcademicSection />
      <GlowDivider />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
