"use client";

import { EmailButtons } from "@/components/EmailButtons";
import { Github, Linkedin, Download, MapPin } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { ThreeBackground } from "@/components/ThreeBackground";

interface HeroSectionProps {
  email: string;
}

export const HeroSection = ({ email }: HeroSectionProps) => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Three.js Background */}
      <ThreeBackground />
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="hero-heading text-foreground">Yushi Cui</h1>
          <h2 className="feature-title text-muted-foreground">
            Full-Stack Developer | Building Reliable & User-Focused Applications
          </h2>
          
          {/* Location Badge */}
          <div className="flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full w-fit">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Auckland, NZ • Remote Available
            </span>
          </div>
          
          <p className="ui-text text-muted-foreground">
            I engineer clean, high-performance applications with a relentless focus on the end-user. 
            I solve complex problems by crafting elegant, scalable, and well-documented code.
          </p>
          
          {/* Email Buttons */}
          <EmailButtons email={email} />
          
          {/* Social Links */}
          <div className="flex space-x-4 pt-4">
            <a href="https://github.com/realYushi" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:bg-accent transition-colors" aria-label="GitHub profile">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/yushi-c-6043aa285/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:bg-accent transition-colors" aria-label="LinkedIn profile">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="/resume.pdf" className="p-3 rounded-full border border-border hover:bg-accent transition-colors" aria-label="Download resume">
              <Download className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Right Visual with 3D Tilt Effect - Increased height */}
        <TiltCard className="bg-muted/80 backdrop-blur-sm rounded-lg h-96 flex items-center justify-center">
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