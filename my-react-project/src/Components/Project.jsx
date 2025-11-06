import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Onsty_Logo from "../assets/Onsty-logo.png";
import Table_Logo from "../assets/TableReservation.png";
import Splend_Logo from "../assets/SplendEng.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Onsty",
      description:
        "A tuition class learning management system designed to manage students, schedules, and class activities efficiently.",
      tags: ["React", "Tailwind CSS", "Flowbite"],
      image: Onsty_Logo,
      demoLink:
        "https://www.linkedin.com/posts/dilmiwickramasinghe_frontenddevelopment-reactjs-tailwindcss-activity-7212334852732280832-pxDY",
      codeLink: "https://github.com/dilmiwickramasinghe/onsty",
    },
    {
      id: 2,
      name: "CheesyGrills",
      description:
        "A responsive restaurant reservation system that allows users to book, view, and manage table reservations seamlessly.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: Table_Logo,
      demoLink: "https://table-reservation-demo.netlify.app",
      codeLink: "https://github.com/99dilmimaleesha/Cheesy_Grills",
    },
    {
      id: 3,
      name: "SplendEng",
      description:
        "An English resource management platform that organizes study materials, quizzes, and learning progress for learners.",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      image: Splend_Logo,
      demoLink: "https://splendeng-demo.netlify.app",
      codeLink: "https://github.com/99dilmimaleesha/SplendEng",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="font-lusitana text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex flex-col rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 p-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-full h-48 overflow-hidden rounded-md mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <h3 className="font-inter text-lg font-semibold mb-2 text-neutral-900">
                {project.name}
              </h3>
              <p className="font-inter text-sm text-neutral-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs border border-neutral-300 text-neutral-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-inter border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-all"
                >
                  <FaExternalLinkAlt className="text-sm" /> View
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-inter border border-neutral-400 text-neutral-700 px-4 py-2 rounded-md hover:bg-neutral-900 hover:text-white transition-all"
                >
                  <FaGithub className="text-base" /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


