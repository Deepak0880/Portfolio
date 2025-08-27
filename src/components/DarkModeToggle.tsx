
import React, { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for user preference on initial load
    const isDarkMode = localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setIsDark(isDarkMode);
    updateTheme(isDarkMode);
  }, []);

  const updateTheme = (darkMode: boolean) => {
    // Save the preference to localStorage
    localStorage.setItem("darkMode", darkMode.toString());
    
    // Update the document class
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    updateTheme(newMode);
  };

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <Switch 
        checked={isDark}
        onCheckedChange={toggleDarkMode}
        aria-label="Toggle dark mode"
      />
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </div>
  );
};

export default DarkModeToggle;
