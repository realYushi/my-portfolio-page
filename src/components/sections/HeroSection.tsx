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

    // Pixel particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = [
      'rgba(103, 80, 164, 0.8)',  // Primary
      'rgba(32, 156, 238, 0.8)',  // Secondary
      'rgba(232, 222, 248, 0.6)', // Muted
      'rgba(234, 221, 255, 0.4)', // Light accent
    ];

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.alpha -= 0.002;

        // Reset particle when it fades out
        if (particle.alpha <= 0) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: Math.random() * 0.5 + 0.3,
          };
        }

        // Draw particle
        ctx.fillStyle = particle.color.replace('0.8', particle.alpha.toString());
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
      });

      // Add occasional burst effect
      if (Math.random() < 0.02) {
        const burstX = Math.random() * canvas.width;
        const burstY = Math.random() * canvas.height;
        
        for (let i = 0; i < 5; i++) {
          particles.push({
            x: burstX,
            y: burstY,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 2 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 1,
          });
        }
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
          className="absolute inset-0 w-full h-full opacity-30"
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