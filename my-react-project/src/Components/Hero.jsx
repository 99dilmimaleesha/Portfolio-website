import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function HeroWithNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "https://medium.com/@dilmalee99", external: true },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <section className="relative min-h-screen font-sans">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-blue-500 dark:from-black dark:to-neutral-900 pointer-events-none transition-all duration-700" />

      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full z-20 px-6 py-4 flex justify-between items-center">
        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6 text-white font-sans font-medium">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 transition"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="hover:underline underline-offset-4 transition"
              >
                {link.name}
              </a>
            )
          )}
        </nav>

        {/* Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-5">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:scale-110 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <MdOutlineLightMode size={22} /> : <MdOutlineDarkMode size={22} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={toggleSidebar}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>

      {/* Mobile Sidebar */}
      {isOpen && (
        <aside className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden" onClick={toggleSidebar}>
          <div
            className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-neutral-950 text-black dark:text-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-6 flex flex-col h-full justify-between">
              <ul className="flex flex-col space-y-6 text-lg font-medium font-sans">
                {navLinks.map((link) =>
                  link.external ? (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={toggleSidebar}
                        className="hover:underline underline-offset-4 transition"
                      >
                        {link.name}
                      </a>
                    </li>
                  ) : (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={toggleSidebar}
                        className="hover:underline underline-offset-4 transition"
                      >
                        {link.name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </aside>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-0">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Hi, I’m Dilmi Wickramasinghe
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-medium text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Frontend Developer, QA Engineer, Writer
        </motion.h2>

        {/* Accent Circle */}
        <motion.div
          className="absolute bottom-20 w-20 h-20 bg-black dark:bg-white opacity-[0.03] rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ delay: 1.2, duration: 1.5 }}
        />
      </div>
    </section>
  );
}



