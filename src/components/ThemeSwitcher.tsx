"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "../providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}