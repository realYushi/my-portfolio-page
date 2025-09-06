"use client";

import { EmailButtons } from "@/components/EmailButtons";
import { Github, Linkedin, Download, MapPin } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

interface HeroSectionProps {
  email: string;
}

export const HeroSection = ({ email }: HeroSectionProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

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

    // Theme-aware colors - will be updated when theme changes
    const getThemeColors = () => {
      const isDark = document.documentElement.classList.contains("dark");
      if (isDark) {
        // Catppuccin Mocha colors (Peach only)
        return [
          "#fab387", // Peach
          "#cba6f7", // Mauve
          "#bac2de", // Subtext1
        ];
      } else {
        // Catppuccin Latte colors (Peach only)
        return [
          "#fe640b", // Peach
          "#8839ef", // Mauve
          "#5c5f77", // Subtext1
        ];
      }
    };

    const colors = getThemeColors();

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

      // Draw theme-aware background gradient
      const isDark = document.documentElement.classList.contains("dark");
      const primaryColor = isDark ? "#cba6f7" : "#8839ef"; // Mauve for both themes

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, `${primaryColor}1a`); // 10% opacity
      gradient.addColorStop(1, `${primaryColor}00`); // 0% opacity
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
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

      // Add occasional new particles with current theme colors
      if (Math.random() < 0.1 && particles.length < 100) {
        const currentColors = getThemeColors();
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color:
            currentColors[Math.floor(Math.random() * currentColors.length)],
          alpha: 1,
          life: 1,
        });
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "none" }}
        />
      </div>

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
    </section>
  );
};
