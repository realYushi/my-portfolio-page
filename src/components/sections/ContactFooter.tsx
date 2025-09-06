"use client";

import { EmailButtons } from "@/components/EmailButtons";
import { Linkedin, Github } from "lucide-react";
import { AboutModal } from "@/components/AboutModal";
import { Button } from "@/components/ui/button";

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

        {/* Social Links - Consistent with design system */}
        <div className="flex justify-center gap-6 mb-16">
          <div className="flex flex-col items-center">
            <Button 
              variant="outline" 
              size="icon"
              className="w-12 h-12 mb-3"
              onClick={() => window.open("https://www.linkedin.com/in/yushi-c-6043aa285/", "_blank")}
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-6 h-6" />
            </Button>
            <span className="ui-text font-medium text-muted-foreground">LinkedIn</span>
          </div>
          <div className="flex flex-col items-center">
            <Button 
              variant="outline" 
              size="icon"
              className="w-12 h-12 mb-3"
              onClick={() => window.open("https://github.com/realYushi", "_blank")}
              aria-label="GitHub profile"
            >
              <Github className="w-6 h-6" />
            </Button>
            <span className="ui-text font-medium text-muted-foreground">GitHub</span>
          </div>
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