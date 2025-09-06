"use client";

import { EmailButtons } from "@/components/EmailButtons";
import { Github, Linkedin, Download } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { PixelBlast } from "@/components/ui/PixelBlast";

interface HeroSectionProps {
  email: string;
}

export const HeroSection = ({ email }: HeroSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
      {/* PixelBlast Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="hero-heading text-foreground">Yushi Cui</h1>
          <h2 className="feature-title text-muted-foreground">
            Full-Stack Developer | Building Reliable & User-Focused Applications
          </h2>
          <p className="ui-text text-muted-foreground">
            I engineer clean, high-performance applications with a relentless focus on the end-user. 
            I solve complex problems by crafting elegant, scalable, and well-documented code.
          </p>
          
          {/* Email Buttons */}
          <EmailButtons email={email} />
          
          {/* Social Links */}
          <div className="flex space-x-4 pt-4">
            <a href="https://github.com" className="p-3 rounded-full border border-border hover:bg-accent transition-colors" aria-label="GitHub profile">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="p-3 rounded-full border border-border hover:bg-accent transition-colors" aria-label="LinkedIn profile">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="/resume.pdf" className="p-3 rounded-full border border-border hover:bg-accent transition-colors" aria-label="Download resume">
              <Download className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Right Visual with 3D Tilt Effect */}
        <TiltCard className="bg-muted/80 backdrop-blur-sm rounded-lg h-80 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl" aria-hidden="true">👨‍💻</span>
            </div>
            <p className="ui-text">Developer Profile</p>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};