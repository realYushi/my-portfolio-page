import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const email = "yushi@example.com";

  return (
    <div className="min-h-screen bg-background">
      <Header email={email} />
      <HeroSection email={email} />
      <ApproachSection />
      <CapabilitiesSection />
      <CaseStudiesSection />
      <ContactSection email={email} />
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;