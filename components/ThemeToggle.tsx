"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300
        bg-transparent hover:bg-neutral-200/50 dark:hover:bg-neutral-800
        focus:outline-none active:scale-95"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5">
        {/* SUN: Yellow (Amber-500) */}
        <Sun 
          className="absolute inset-0 w-full h-full text-amber-500 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
            rotate-0 scale-100 dark:-rotate-90 dark:scale-0" 
        />
        
        {/* MOON: Pure White */}
        <Moon 
          className="absolute inset-0 w-full h-full text-neutral-800 dark:text-white transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
            rotate-90 scale-0 dark:rotate-0 dark:scale-100" 
        />
      </div>
    </button>
  );
}