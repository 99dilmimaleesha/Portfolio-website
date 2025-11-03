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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-14 text-purple-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition p-4 bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md transition"
                >
                  <FaExternalLinkAlt /> View
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-purple-700 border border-purple-600 hover:bg-purple-50 px-4 py-2 rounded-md transition"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

