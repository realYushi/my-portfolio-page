"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  email: string;
}

export const Header = ({ email }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-lg bg-background/80 shadow-sm">
        <div className="section-container py-4">
          <nav className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('approach')} className="nav-link hover:text-primary focus-ring px-3 py-2 rounded-lg transition-colors duration-200">Approach</button>
              <button onClick={() => scrollToSection('capabilities')} className="nav-link hover:text-primary focus-ring px-3 py-2 rounded-lg transition-colors duration-200">Capabilities</button>
              <button onClick={() => scrollToSection('case-studies')} className="nav-link hover:text-primary focus-ring px-3 py-2 rounded-lg transition-colors duration-200">Case Studies</button>
              <a href="https://blog.yushi91.com" target="_blank" rel="noopener noreferrer" className="nav-link hover:text-primary focus-ring px-3 py-2 rounded-lg transition-colors duration-200">Blog</a>
              <button onClick={() => scrollToSection('contact')} className="nav-link hover:text-primary focus-ring px-3 py-2 rounded-lg transition-colors duration-200">Contact</button>
            </div>

            {/* Mobile Layout */}
            <div className="flex items-center justify-between w-full md:w-auto">
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden focus-ring hover:bg-muted/50"
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>

              {/* Right Side - Only Theme Switcher on Mobile */}
              <div className="flex items-center">
                <ThemeSwitcher />
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm" 
            onClick={toggleMenu}
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <div className="fixed top-[73px] left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border/50 shadow-xl animate-slide-down">
            <nav className="section-container py-6" role="navigation" aria-label="Mobile navigation">
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('approach')} 
                  className="block w-full text-left nav-link hover:text-primary focus-ring px-4 py-4 rounded-xl transition-all duration-200 hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="text-lg font-medium">Approach</span>
                  <span className="block text-sm text-muted-foreground mt-1">My development philosophy</span>
                </button>
                <button 
                  onClick={() => scrollToSection('capabilities')} 
                  className="block w-full text-left nav-link hover:text-primary focus-ring px-4 py-4 rounded-xl transition-all duration-200 hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="text-lg font-medium">Capabilities</span>
                  <span className="block text-sm text-muted-foreground mt-1">Technical skills & expertise</span>
                </button>
                <button 
                  onClick={() => scrollToSection('case-studies')} 
                  className="block w-full text-left nav-link hover:text-primary focus-ring px-4 py-4 rounded-xl transition-all duration-200 hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="text-lg font-medium">Case Studies</span>
                  <span className="block text-sm text-muted-foreground mt-1">Real-world projects</span>
                </button>
                <a 
                  href="https://blog.yushi91.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left nav-link hover:text-primary focus-ring px-4 py-4 rounded-xl transition-all duration-200 hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="text-lg font-medium">Blog</span>
                  <span className="block text-sm text-muted-foreground mt-1">Thoughts & insights</span>
                </a>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="block w-full text-left nav-link hover:text-primary focus-ring px-4 py-4 rounded-xl transition-all duration-200 hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="text-lg font-medium">Contact</span>
                  <span className="block text-sm text-muted-foreground mt-1">Let's work together</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};