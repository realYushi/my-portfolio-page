import { EmailButtons } from "@/components/EmailButtons";
import { GithubIcon, LinkedinIcon, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import LightRays from "../ui/lightRays";

interface HeroSectionProps {
  email: string;
}

export const HeroSection = ({ email }: HeroSectionProps) => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#8839ef"
          raysSpeed={1.2}
          lightSpread={1.4}
          rayLength={1.8}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.03}
          distortion={0.015}
          fadeDistance={2.0}
          pulsating={true}
          saturation={0.7}
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-background/10 via-background/30 to-background/80" />
      </div>
      <div className="relative section-container py-12 sm:py-20 lg:py-32 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="hero-heading text-foreground drop-shadow-sm">Yushi Cui</h1>
              <h2 className="feature-title text-xl sm:text-2xl text-foreground/90 drop-shadow-sm font-medium">
                Full-Stack Developer | Building Reliable & User-Focused Applications
              </h2>
            </div>

            <div className="flex items-center gap-3 bg-background/40 backdrop-blur-md px-5 py-3 rounded-full w-fit border border-primary/30 shadow-lg">
              <MapPin className="w-5 h-5 text-primary drop-shadow-sm" />
              <span className="text-sm font-semibold text-foreground/90 drop-shadow-sm">
                Auckland, NZ • Remote Available
              </span>
            </div>

            <p className="ui-text text-lg text-foreground/90 drop-shadow-sm bg-background/30 backdrop-blur-md rounded-xl p-6 border border-primary/20 shadow-lg leading-relaxed">
              I engineer clean, high-performance applications with a relentless
              focus on the end-user. I solve complex problems by crafting elegant,
              scalable, and well-documented code.
            </p>

            <div className="space-y-6">
              <EmailButtons email={email} />

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 bg-card/95 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:bg-primary/5 hover:scale-105 transition-all duration-300 ease-out shadow-sm hover:shadow-md group"
                  onClick={() =>
                    window.open("https://github.com/realYushi", "_blank")
                  }
                  aria-label="GitHub profile"
                >
                   <GithubIcon className="w-6 h-6 transition-colors duration-300 group-hover:text-primary" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 bg-card/95 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:bg-primary/5 hover:scale-105 transition-all duration-300 ease-out shadow-sm hover:shadow-md group"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/yushi-c-6043aa285/",
                      "_blank"
                    )
                  }
                  aria-label="LinkedIn profile"
                >
                   <LinkedinIcon className="w-6 h-6 transition-colors duration-300 group-hover:text-primary" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 bg-card/95 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:bg-primary/5 hover:scale-105 transition-all duration-300 ease-out shadow-sm hover:shadow-md group"
                  onClick={() => window.open("/resume.pdf", "_blank")}
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
              src="/me.png"
              alt="Developer Profile"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/10 pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-primary/20 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
