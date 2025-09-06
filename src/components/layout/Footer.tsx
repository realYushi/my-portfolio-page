"use client";

import { AboutModal } from "@/components/AboutModal";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="ui-text text-muted-foreground mb-4">
            <AboutModal />
          </p>
          <p className="ui-text text-muted-foreground">© 2024 Yushi Cui. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};