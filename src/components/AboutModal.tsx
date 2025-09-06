"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

export const AboutModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-primary hover:underline text-sm"
      >
        Read about my transition from chef to developer
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">From Kitchen to Keyboard</DialogTitle>
            <DialogDescription className="text-lg text-muted-foreground mt-4">
              Before I wrote my first line of code, I spent six years as a professional chef. 
              In the high-pressure environment of the kitchen, I mastered the arts of precision, 
              teamwork, and delivering a quality product under intense deadlines. I learned that 
              the secret to a great dish, like a great application, is a meticulous attention 
              to detail and a deep understanding of the end-user. This unique background is the 
              foundation of my disciplined and user-focused approach to software development.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex justify-end pt-4">
            <Button onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4 mr-2" />
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};