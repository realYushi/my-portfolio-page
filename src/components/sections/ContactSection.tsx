"use client";

import { EmailButtons } from "@/components/EmailButtons";
import { Linkedin, Github } from "lucide-react";

interface ContactSectionProps {
  email: string;
}

export const ContactSection = ({ email }: ContactSectionProps) => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="feature-title mb-6 text-foreground">Let's work together</h2>
          <p className="ui-text text-muted-foreground max-w-2xl mx-auto">
            Ready to build something great? Let's get in touch.
          </p>
        </div>

        {/* Email Buttons */}
        <div className="flex justify-center">
          <EmailButtons email={email} />
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-12 flex-wrap">
          <a href="https://linkedin.com" className="flex items-center space-x-2 text-muted-foreground hover:text-primary p-3" aria-label="LinkedIn profile">
            <Linkedin className="w-5 h-5" />
            <span className="ui-text">LinkedIn</span>
          </a>
          <a href="https://github.com" className="flex items-center space-x-2 text-muted-foreground hover:text-primary p-3" aria-label="GitHub profile">
            <Github className="w-5 h-5" />
            <span className="ui-text">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};