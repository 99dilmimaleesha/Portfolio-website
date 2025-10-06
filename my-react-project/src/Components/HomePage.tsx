import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

// ========================
// Header Component
// ========================
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center text-white">
        {/* Logo or Name */}
        <h1 className="text-2xl font-bold">Dilmi.dev</h1>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#about" className="hover:text-yellow-300 transition">
            About
          </a>
          <a href="#experience" className="hover:text-yellow-300 transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-yellow-300 transition">
            Projects
          </a>
          <a href="#blog" className="hover:text-yellow-300 transition">
            Blog
          </a>
          <a href="#contact" className="hover:text-yellow-300 transition">
            Contact
          </a>
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={toggleSidebar}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white/90 backdrop-blur-md text-black shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-6 space-y-6">
          <ul className="space-y-4 text-lg font-medium">
            <li>
              <a href="#about" onClick={toggleSidebar} className="hover:text-purple-700 transition">
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleSidebar} className="hover:text-purple-700 transition">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleSidebar} className="hover:text-purple-700 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#blog" onClick={toggleSidebar} className="hover:text-purple-700 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleSidebar} className="hover:text-purple-700 transition">
                Contact
              </a>
            </li>
          </ul>

          <div className="flex justify-center space-x-4 pt-4">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="hover:text-red-700 transition"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// ========================
// Hero Component
// ========================
function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 animate-gradient text-center text-white px-4">
      <div className="max-w-2xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi there! I am <span className="text-yellow-300">Dilmi Wickramasinghe</span>,
        </motion.h2>

        <motion.h3
          className="text-2xl md:text-3xl mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          a Frontend Developer
        </motion.h3>

        <motion.p
          className="text-lg font-semibold bg-gradient-to-r from-pink-400 to-red-500 text-white rounded-lg inline-block px-4 py-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Designing and implementing the user interface and user experience of a web application
        </motion.p>
      </div>
    </section>
  );
}

// ========================
// Main Home Page Export
// ========================
export default function HomePage() {
  return (
    <div className="relative min-h-screen text-white">
      <Header />
      <Hero />
    </div>
  );
}
