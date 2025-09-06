"use client";

import { EmailButtons } from "@/components/EmailButtons";
import { Github, Linkedin, Download } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { useEffect, useRef } from "react";

interface HeroSectionProps {
  email: string;
}

export const HeroSection = ({ email }: HeroSectionProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced pixel particles with better visibility
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
    }> = [];

    const colors = [
      '#6750a4',  // Primary purple
      '#2090ee',  // Secondary blue
      '#e8def8',  // Light purple
      '#ffffff',  // White for highlights
    ];

    // Create more visible particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.8 + 0.4,
        life: 1,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(103, 80, 164, 0.1)');
      gradient.addColorStop(1, 'rgba(103, 80, 164, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.005;
        particle.alpha = particle.life;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);

        // Reset shadow
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      // Add occasional new particles
      if (Math.random() < 0.1 && particles.length < 100) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          life: 1,
        });
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: 'none' }}
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
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