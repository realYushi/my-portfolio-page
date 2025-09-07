import { GithubIcon, LinkedinIcon, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/constants";
import { openExternalUrl } from "@/utils/navigation";

interface SocialLinksProps {
  variant?: "hero" | "footer";
  className?: string;
}

export const SocialLinks = ({ variant = "hero", className = "" }: SocialLinksProps) => {
  const isHero = variant === "hero";
  const buttonSize = isHero ? "icon" : "icon";
  const iconSize = isHero ? "w-6 h-6" : "w-7 h-7";
  const buttonClass = isHero 
    ? "w-12 h-12 bg-card/95 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:bg-primary/5 hover:scale-105 transition-all duration-300 ease-out shadow-sm hover:shadow-md group"
    : "w-16 h-16 mb-4 bg-card/95 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:bg-primary/5 hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out shadow-sm hover:shadow-lg";

  const socialLinks = [
    {
      icon: GithubIcon,
      url: SOCIAL_LINKS.GITHUB,
      label: "GitHub profile",
      name: "GitHub"
    },
    {
      icon: LinkedinIcon,
      url: SOCIAL_LINKS.LINKEDIN,
      label: "LinkedIn profile", 
      name: "LinkedIn"
    },
    ...(isHero ? [{
      icon: BookOpen,
      url: SOCIAL_LINKS.BLOG,
      label: "Visit blog",
      name: "Blog"
    }] : [])
  ];

  if (variant === "footer") {
    return (
      <div className={`flex justify-center gap-12 ${className}`}>
        {socialLinks.map(({ icon: Icon, url, label, name }) => (
          <div key={name} className="flex flex-col items-center group">
            <Button 
              variant="outline" 
              size={buttonSize}
              className={buttonClass}
              onClick={() => openExternalUrl(url)}
              aria-label={label}
            >
              <Icon className={`${iconSize} transition-colors duration-300 group-hover:text-primary`} />
            </Button>
            <span className="ui-text font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {name}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {socialLinks.map(({ icon: Icon, url, label }) => (
        <Button
          key={label}
          variant="outline"
          size={buttonSize}
          className={buttonClass}
          onClick={() => openExternalUrl(url)}
          aria-label={label}
        >
          <Icon className={`${iconSize} transition-colors duration-300 group-hover:text-primary`} />
        </Button>
      ))}
    </div>
  );
};