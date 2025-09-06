"use client";

import { EmailButtons } from "@/components/EmailButtons";
import { Linkedin, Github } from "lucide-react";
import { AboutModal } from "@/components/AboutModal";

interface ContactFooterProps {
  email: string;
}

export const ContactFooter = ({ email }: ContactFooterProps) => {
  return (
    <section id="contact" className="bg-background border-t border-border py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <div className="text-center mb-12">
          <h2 className="feature-title mb-6 text-foreground">Let's work together</h2>
          <p className="ui-text text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to build something great? Let's get in touch.
          </p>
          
          {/* Email Buttons - Centered with better spacing */}
          <div className="flex justify-center mb-12">
            <EmailButtons email={email} className="flex-col sm:flex-row gap-4" />
          </div>
        </div>

        {/* Social Links - Improved layout */}
        <div className="flex justify-center gap-8 mb-16">
          <a 
            href="https://linkedin.com" 
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors p-4 group"
            aria-label="LinkedIn profile"
          >
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
              <Linkedin className="w-6 h-6" />
            </div>
            <span className="ui-text font-medium">LinkedIn</span>
          </a>
          <a 
            href="https://github.com" 
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors p-4 group"
            aria-label="GitHub profile"
          >
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
              <Github className="w-6 h-6" />
            </div>
            <span className="ui-text font-medium">GitHub</span>
          </a>
        </div>

        {/* Footer - Cleaner separation */}
        <div className="text-center pt-8 border-t border-border">
          <div className="mb-4">
            <AboutModal />
          </div>
          <p className="ui-text text-muted-foreground text-sm">
            © 2024 Yushi Cui. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};