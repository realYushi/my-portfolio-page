import { lazy, Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import { SectionSkeleton, ContactSkeleton } from "@/components/ui/LoadingStates";
import { CONTACT } from "@/constants";

// Lazy load below-the-fold components
const ApproachSection = lazy(() => import("@/components/sections/ApproachSection").then(module => ({ default: module.ApproachSection })));
const CapabilitiesSection = lazy(() => import("@/components/sections/CapabilitiesSection").then(module => ({ default: module.CapabilitiesSection })));
const CaseStudiesSection = lazy(() => import("@/components/sections/CaseStudiesSection").then(module => ({ default: module.CaseStudiesSection })));
const ContactFooter = lazy(() => import("@/components/sections/ContactFooter").then(module => ({ default: module.ContactFooter })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <HeroSection email={CONTACT.EMAIL} />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton cards={3} />}>
          <ApproachSection />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton cards={3} />}>
          <CapabilitiesSection />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton cards={4} />}>
          <CaseStudiesSection />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<ContactSkeleton />}>
          <ContactFooter email={CONTACT.EMAIL} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Index;