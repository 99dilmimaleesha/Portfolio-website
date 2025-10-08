import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Onsty_Logo from "../assets/Onsty-logo.png";
import Onsty_Image from "../assets/Onsty-logo.png"; // replace with your real image

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Onsty",
      description:
        "A sleek financial platform designed for GVC Gaesco, focusing on modern UI, responsiveness, and high performance.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Flowbite"],
      image: Onsty_Image,
      demoLink: "https://onsty-demo.netlify.app",
      codeLink: "https://github.com/dilmiwickramasinghe/onsty",
    },
    // Add more projects here...
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-purple-900 via-pink-700 to-purple-900 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,0,128,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(128,0,255,0.15),transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/10 backdrop-blur-md hover:border-pink-400/40 hover:shadow-pink-500/30 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center space-x-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:from-pink-400 hover:to-purple-500 transition"
                  >
                    <FaExternalLinkAlt />
                    View
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition"
                  >
                    <FaGithub />
                    Code
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-pink-300 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/20 text-xs px-3 py-1 rounded-full text-gray-100 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Glow */}
              <div className="absolute -inset-px bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}






