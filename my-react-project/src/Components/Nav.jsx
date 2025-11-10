import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Apply theme changes
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

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/dilmi-wickramasingha-189978220/",
      color: "hover:text-blue-700 dark:hover:text-blue-400",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/99dilmimaleesha",
      color: "hover:text-gray-800 dark:hover:text-gray-300",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:dilmimaleesha300@gmail.com",
      color: "hover:text-red-700 dark:hover:text-red-400",
    },
  ];

  return (
    <header className="relative z-50 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-inter font-medium">
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

        {/* Desktop Social Icons + Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-5">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition duration-300 ${social.color}`}
            >
              {React.cloneElement(social.icon, { size: 22 })}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-3 p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:scale-110 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <MdOutlineLightMode size={22} />
            ) : (
              <MdOutlineDarkMode size={22} />
            )}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-black dark:text-white"
          onClick={toggleSidebar}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-neutral-950 text-black dark:text-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full justify-between">
          {/* Navigation Links */}
          <ul className="flex flex-col space-y-6 text-lg font-medium font-inter">
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
      </aside>
    </header>
  );
}


