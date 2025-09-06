"use client";

import { EmailButtons } from "@/components/EmailButtons";
import { LinkedinIcon, GithubIcon } from "lucide-react";
import { AboutModal } from "@/components/AboutModal";
import { Button } from "@/components/ui/button";

interface ContactFooterProps {
  email: string;
}

export const ContactFooter = ({ email }: ContactFooterProps) => {
  return (
    <section id="contact" className="bg-gradient-to-b from-background to-muted/10 border-t border-border section-padding-small">
      <div className="section-container max-w-5xl">
        {/* Contact Section */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">Let's work together</h2>
          <p className="section-description mb-12">
            Ready to build something great? Let's get in touch and discuss how we can bring your ideas to life.
          </p>
          
          {/* Email Buttons - Enhanced with better spacing */}
          <div className="flex justify-center">
            <EmailButtons email={email} className="flex-col sm:flex-row gap-4" />
          </div>
        </div>

        {/* Social Links - Enhanced design */}
        <div className="flex justify-center gap-12 mb-20">
          <div className="flex flex-col items-center group">
            <Button 
              variant="outline" 
              size="icon"
              className="w-16 h-16 mb-4 bg-card/95 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:bg-primary/5 hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out shadow-sm hover:shadow-lg"
              onClick={() => window.open("https://www.linkedin.com/in/yushi-c-6043aa285/", "_blank")}
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-7 h-7 transition-colors duration-300 group-hover:text-primary" />
            </Button>
            <span className="ui-text font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">LinkedIn</span>
          </div>
          <div className="flex flex-col items-center group">
            <Button 
              variant="outline" 
              size="icon"
              className="w-16 h-16 mb-4 bg-card/95 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:bg-primary/5 hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out shadow-sm hover:shadow-lg"
              onClick={() => window.open("https://github.com/realYushi", "_blank")}
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-7 h-7 transition-colors duration-300 group-hover:text-primary" />
            </Button>
            <span className="ui-text font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">GitHub</span>
          </div>
        </div>

        {/* Footer - Enhanced separation and styling */}
        <div className="text-center pt-12 border-t border-border/50">
          <div className="mb-6">
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