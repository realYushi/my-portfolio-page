"use client";

import { EmailButtons } from "@/components/EmailButtons";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

interface HeaderProps {
  email: string;
}

export const Header = ({ email }: HeaderProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('approach')} className="nav-link hover:text-primary">Approach</button>
            <button onClick={() => scrollToSection('capabilities')} className="nav-link hover:text-primary">Capabilities</button>
            <button onClick={() => scrollToSection('case-studies')} className="nav-link hover:text-primary">Case Studies</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link hover:text-primary">Contact</button>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            <div className="md:hidden">
              <EmailButtons email={email} className="flex-row" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};