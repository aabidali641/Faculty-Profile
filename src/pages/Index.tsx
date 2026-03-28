import Navbar from "@/components/faculty/Navbar";
import HeroSection from "@/components/faculty/HeroSection";
import AboutSection from "@/components/faculty/AboutSection";
import SubjectsSection from "@/components/faculty/SubjectsSection";
import RolesSection from "@/components/faculty/RolesSection";
import StrengthsSection from "@/components/faculty/StrengthsSection";
import ConclusionSection from "@/components/faculty/ConclusionSection";
import CursorGlow from "@/components/faculty/CursorGlow";

const Index = () => {
  return (
    <div className="relative">
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="subjects">
        <SubjectsSection />
      </div>
      <div id="roles">
        <RolesSection />
      </div>
      <div id="strengths">
        <StrengthsSection />
      </div>
      <ConclusionSection />
    </div>
  );
};

export default Index;
