import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import EventsSection from "@/components/home/EventsSection";
import AboutSection from "@/components/home/AboutSection";
import PresidentMessage from "@/components/home/PresidentMessage";
import TeamSection from "@/components/home/TeamSection";
import StatsSection from "@/components/home/StatsSection";
import ProgramsSection from "@/components/home/ProgramsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <EventsSection />
      <AboutSection />
      <PresidentMessage />
      <StatsSection />
      <TeamSection />
      <ProgramsSection />
    </Layout>
  );
};

export default Index;
