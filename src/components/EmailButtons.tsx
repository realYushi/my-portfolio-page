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
    <div className={`flex space-x-4 ${className}`}>
      {/* Primary Button - Hire Me */}
      <Button 
        size="lg" 
        className="bg-[#3B82F6] hover:bg-blue-600 text-white"
        onClick={() => window.location.href = `mailto:${email}`}
      >
        <Plus className="w-4 h-4 mr-2" />
        Hire Me
      </Button>

      {/* Secondary Button - Copy Email */}
      <Button 
        variant="outline" 
        size="lg"
        onClick={handleCopyEmail}
        className="border-gray-300 hover:bg-gray-50 text-[#3B82F6] hover:text-[#3B82F6]"
      >
        {isCopied ? (
          <Check className="w-4 h-4 mr-2 text-green-600" />
        ) : (
          <Copy className="w-4 h-4 mr-2" />
        )}
        {isCopied ? "Copied!" : "Copy Email"}
      </Button>
    </div>
  );
};