import { lazy, Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";

// Lazy load below-the-fold components
const ApproachSection = lazy(() => import("@/components/sections/ApproachSection").then(module => ({ default: module.ApproachSection })));
const CapabilitiesSection = lazy(() => import("@/components/sections/CapabilitiesSection").then(module => ({ default: module.CapabilitiesSection })));
const CaseStudiesSection = lazy(() => import("@/components/sections/CaseStudiesSection").then(module => ({ default: module.CaseStudiesSection })));
const ContactFooter = lazy(() => import("@/components/sections/ContactFooter").then(module => ({ default: module.ContactFooter })));

const Index = () => {
  const email = "realyushi@gmail.com";

  return (
    <div className="min-h-screen bg-background">
      <Header email={email} />
      <HeroSection email={email} />
      
      <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
        <ApproachSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-background animate-pulse" />}>
        <CapabilitiesSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
        <CaseStudiesSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-48 bg-background animate-pulse" />}>
        <ContactFooter email={email} />
      </Suspense>
    </div>
  );
};

export default Index;