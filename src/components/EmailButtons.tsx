"use client";

import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Plus, Copy, Check } from "lucide-react";
import { showSuccess } from "@/utils/toast";

interface EmailButtonsProps {
  email: string;
  className?: string;
}

export const EmailButtons = ({ email, className = "" }: EmailButtonsProps) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(email);
    if (success) {
      showSuccess("Email copied to clipboard!");
    }
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      {/* Primary Button - Hire Me */}
      <Button 
        size="lg" 
        className="bg-primary hover:bg-primary/90 text-primary-foreground"
        onClick={() => window.location.href = `mailto:${email}`}
        aria-label="Hire me via email"
      >
        <Plus className="w-5 h-5 mr-2" />
        Hire Me
      </Button>

      {/* Secondary Button - Copy Email */}
      <Button 
        variant="outline" 
        size="lg"
        onClick={handleCopyEmail}
        className="border-border hover:bg-accent text-foreground"
        aria-label={isCopied ? "Email copied" : "Copy email address"}
      >
        {isCopied ? (
          <Check className="w-5 h-5 mr-2 text-green-600" />
        ) : (
          <Copy className="w-5 h-5 mr-2" />
        )}
        {isCopied ? "Copied!" : "Copy Email"}
      </Button>
    </div>
  );
};