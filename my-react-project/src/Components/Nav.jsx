import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "https://medium.com/@dilmalee99", external: true },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/dilmi-wickramasingha-189978220/", color: "hover:text-blue-700" },
    { icon: <FaGithub />, href: "https://github.com/99dilmimaleesha", color: "hover:text-gray-800" },
    { icon: <FaEnvelope />, href: "mailto:dilmimaleesha300@gmail.com", color: "hover:text-red-700" },
  ];

  return (
    <header className="relative z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
                {link.name}
              </a>
            ) : (
              <a key={link.name} href={link.href} className="hover:underline transition">
                {link.name}
              </a>
            )
          )}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition duration-300 ${social.color}`}
            >
              {React.cloneElement(social.icon, { size: 24 })}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-black" onClick={toggleSidebar}>
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
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full justify-between">
          {/* Navigation Links */}
          <ul className="flex flex-col space-y-6 text-lg font-medium">
            {navLinks.map((link) =>
              link.external ? (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleSidebar}
                    className="hover:underline transition"
                  >
                    {link.name}
                  </a>
                </li>
              ) : (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={toggleSidebar}
                    className="hover:underline transition"
                  >
                    {link.name}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition duration-300 ${social.color}`}
              >
                {React.cloneElement(social.icon, { size: 28 })}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </header>
  );
}

