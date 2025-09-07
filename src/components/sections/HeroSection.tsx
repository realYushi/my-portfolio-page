import { lazy, Suspense, useState, useEffect } from "react";
import { EmailButtons } from "@/components/EmailButtons";
import { Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ASSETS, ANIMATION_CONFIG } from "@/constants";
import { openExternalUrl } from "@/utils/navigation";

// Lazy load the heavy LightRays component
const LightRays = lazy(() => import("../ui/lightRays"));

interface HeroSectionProps {
  email: string;
}

export const HeroSection = ({ email }: HeroSectionProps) => {
  const [showHeading, setShowHeading] = useState(false);
  const [showSubheading, setShowSubheading] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Trigger heading animation immediately
    setShowHeading(true);
    
    // Trigger subheading animation after configured delay
    const subheadingTimer = setTimeout(() => {
      setShowSubheading(true);
    }, ANIMATION_CONFIG.HERO_ANIMATION_DELAYS.SUBHEADING);

    // Trigger location animation after configured delay
    const locationTimer = setTimeout(() => {
      setShowLocation(true);
    }, ANIMATION_CONFIG.HERO_ANIMATION_DELAYS.LOCATION);

    // Trigger description animation after configured delay
    const descriptionTimer = setTimeout(() => {
      setShowDescription(true);
    }, ANIMATION_CONFIG.HERO_ANIMATION_DELAYS.DESCRIPTION);

    // Trigger CTA animation after configured delay
    const ctaTimer = setTimeout(() => {
      setShowCTA(true);
    }, ANIMATION_CONFIG.HERO_ANIMATION_DELAYS.CTA);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(subheadingTimer);
      clearTimeout(locationTimer);
      clearTimeout(descriptionTimer);
      clearTimeout(ctaTimer);
    };
  }, []);

  return (
    <section className="hero-section relative w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Suspense fallback={<div className="absolute inset-0 w-full h-full bg-gradient-to-b from-primary/5 via-primary/10 to-background/50" />}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#8839ef"
            raysSpeed={1.2}
            lightSpread={isMobile ? 1.0 : 1.2}
            rayLength={isMobile ? 3.5 : 2.5}
            followMouse={!isMobile}
            mouseInfluence={isMobile ? 0 : 0.08}
            noiseAmount={0.02}
            distortion={isMobile ? 0.02 : 0.015}
            fadeDistance={isMobile ? 4.0 : 3.0}
            pulsating={true}
            saturation={isMobile ? 0.9 : 0.8}
            className="absolute inset-0 w-full h-full"
          />
        </Suspense>
        <div className={`absolute inset-0 w-full h-full ${
          isMobile 
            ? 'bg-gradient-to-b from-background/5 via-background/15 to-background/50' 
            : 'bg-gradient-to-b from-background/10 via-background/30 to-background/80'
        }`} />
      </div>
      <div className="relative section-container py-12 sm:py-20 lg:py-32 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className={`hero-heading text-foreground drop-shadow-sm ${
                showHeading ? 'hero-element-visible' : 'hero-element-hidden'
              }`}>
                Yushi Cui
              </h1>
              <h2 className={`feature-title text-xl sm:text-2xl text-foreground/90 drop-shadow-sm font-medium ${
                showSubheading ? 'hero-element-visible' : 'hero-element-hidden'
              }`}>
                Full-Stack Developer | Building Reliable & User-Focused Applications
              </h2>
            </div>

            <div className={`flex items-center gap-3 bg-background/40 backdrop-blur-md px-5 py-3 rounded-full w-fit border border-primary/30 shadow-lg ${
              showLocation ? 'hero-element-visible' : 'hero-element-hidden'
            }`}>
              <MapPin className="w-5 h-5 text-primary drop-shadow-sm" />
              <span className="text-sm font-semibold text-foreground/90 drop-shadow-sm">
                Auckland, NZ • Remote Available
              </span>
            </div>

            <p className={`ui-text text-lg text-foreground/90 drop-shadow-sm bg-background/30 backdrop-blur-md rounded-xl p-6 border border-primary/20 shadow-lg leading-relaxed ${
              showDescription ? 'hero-element-visible' : 'hero-element-hidden'
            }`}>
              I engineer clean, high-performance applications with a relentless focus on the end-user. I solve complex problems by crafting elegant, scalable, and well-documented code.
            </p>

            <div className={`space-y-6 ${
              showCTA ? 'hero-element-visible' : 'hero-element-hidden'
            }`}>
              <EmailButtons email={email} />

              <div className="flex flex-wrap gap-4 pt-2">
                <SocialLinks variant="hero" />
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 bg-card/95 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:bg-primary/5 hover:scale-105 transition-all duration-300 ease-out shadow-sm hover:shadow-md group"
                  onClick={() => openExternalUrl(ASSETS.RESUME)}
                  aria-label="Download resume"
                >
                  <Download className="w-6 h-6 transition-colors duration-300 group-hover:text-primary" />
                </Button>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-background/30 via-background/50 to-background/70 backdrop-blur-md rounded-3xl h-72 sm:h-96 lg:h-[32rem] w-full overflow-hidden shadow-2xl border border-primary/30 group">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
            <img
              src={ASSETS.PROFILE_IMAGE}
              alt="Yushi Cui - Full-Stack Developer"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/10 pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-primary/20 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
