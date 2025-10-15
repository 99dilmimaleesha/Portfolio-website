import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Onsty_Logo from "../assets/Onsty-logo.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Onsty",
      description:
        "A modern financial platform with a responsive, intuitive UI — built to simplify complex data visualization and enhance performance.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Flowbite"],
      image: Onsty_Logo,
      demoLink: "https://onsty-demo.netlify.app",
      codeLink: "https://github.com/dilmiwickramasinghe/onsty",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-tr from-purple-100 via-purple-200 to-purple-300 overflow-hidden"
    >
      {/* Cartoon Floating Glows */}
      <div className="absolute top-10 left-20 w-60 h-60 bg-pink-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600 drop-shadow-[0_0_15px_rgba(0,0,0,0.1)]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Creations
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-purple-400/40 transition-all duration-700"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, rotate: 0.5 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:from-purple-400 hover:to-pink-300 transition"
                  >
                    <FaExternalLinkAlt /> View
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 relative">
                <h3 className="text-2xl font-semibold text-purple-700 mb-2 drop-shadow-[0_0_5px_rgba(0,0,0,0.1)]">
                  {project.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/20 text-xs px-3 py-1 rounded-full text-purple-800 border border-white/20 hover:bg-white/30 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Glow Border */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-purple-400 via-pink-300 to-purple-500 opacity-0 group-hover:opacity-30 blur-xl transition duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}








