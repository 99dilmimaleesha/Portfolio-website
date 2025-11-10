// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-5 right-5 z-50 p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white shadow-md transition-all duration-300 hover:scale-110"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <MdOutlineLightMode size={22} />
      ) : (
        <MdOutlineDarkMode size={22} />
      )}
    </button>
  );
}
