"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div className="flex items-center justify-center">
      <span className={`${theme == "dark" ? "text-red-600" : ""} text-center`}>
        dark mode
      </span>
      <label className="relative mx-2 inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        />

        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>{" "}
      <span
        className={`${theme == "light" ? "text-red-600" : ""} text-center `}
      >
        light mode
      </span>
    </div>
  );
};

export default ThemeButton;
