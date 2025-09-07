"use client";

import { EmailButtons } from "@/components/EmailButtons";
import { AboutModal } from "@/components/AboutModal";
import { SocialLinks } from "@/components/ui/SocialLinks";

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
        <SocialLinks variant="footer" className="mb-20" />

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