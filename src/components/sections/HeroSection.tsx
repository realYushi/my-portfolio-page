"use client";

import { EmailButtons } from "@/components/EmailButtons";
import { Github, Linkedin, Download } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

interface HeroSectionProps {
  email: string;
}

export const HeroSection = ({ email }: HeroSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative min-h-[600px]">
      {/* Custom Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(120,119,198,0.3)_0%,_transparent_50%)]"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 h-full">
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