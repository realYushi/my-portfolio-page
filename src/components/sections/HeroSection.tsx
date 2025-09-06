"use client";

import { EmailButtons } from "@/components/EmailButtons";
import { Github, Linkedin, Download, MapPin } from "lucide-react";
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
          <h1 className="hero-heading text-foreground drop-shadow-sm">Yushi Cui</h1>
          <h2 className="feature-title text-foreground/90 drop-shadow-sm">
            Full-Stack Developer | Building Reliable & User-Focused Applications
          </h2>

          {/* Location Badge */}
          <div className="flex items-center gap-2 bg-background/30 backdrop-blur-sm px-4 py-2 rounded-full w-fit border border-primary/20 shadow-sm">
            <MapPin className="w-4 h-4 text-primary drop-shadow-sm" />
            <span className="text-sm font-medium text-foreground/90 drop-shadow-sm">
              Auckland, NZ • Remote Available
            </span>
          </div>

          <p className="ui-text text-foreground/85 drop-shadow-sm bg-background/20 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
            I engineer clean, high-performance applications with a relentless
            focus on the end-user. I solve complex problems by crafting elegant,
            scalable, and well-documented code.
          </p>

          {/* Email Buttons */}
          <EmailButtons email={email} />

          {/* Social Links */}
          <div className="flex space-x-4 pt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                window.open("https://github.com/realYushi", "_blank")
              }
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/yushi-c-6043aa285/",
                  "_blank"
                )
              }
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open("/resume.pdf", "_blank")}
              aria-label="Download resume"
            >
              <Download className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right Visual with 3D Tilt Effect - Increased height */}
        <div className="bg-muted/80 backdrop-blur-sm rounded-lg h-[28rem] w-full flex items-center justify-center overflow-hidden shadow-2xl border-2 border-peach-500">
          <img
            src="/me.png"
            alt="Developer Profile"
            className="w-full h-full object-cover"
          />
          </div>
        </div>
      </div>
    </section>
  );
};
