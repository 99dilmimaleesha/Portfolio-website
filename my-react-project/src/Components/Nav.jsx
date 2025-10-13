import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-black p-4 ">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4 font-medium">
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:underline">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="https://medium.com/@dilmalee99" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-700 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-800 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className=" hover:text-red-700 transition duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden text-black" onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Overlay (click to close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="p-4">
          <ul className="space-y-4 text-lg font-medium">
            <li>
              <a
                href="#about"
                onClick={toggleSidebar}
                className="hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={toggleSidebar}
                className="hover:underline"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={toggleSidebar}
                className="hover:underline"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleSidebar}
                className="hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Social Media Icons in Sidebar */}
          <div className="flex justify-center space-x-4 mt-8">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="hover:text-red-700 transition duration-300"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
