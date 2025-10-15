import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Onsty",
      role: "Front-end Developer Intern",
      period: "Apr 2024 - Aug 2025",
      description:
        "Designing and implementing responsive user interfaces using React, Tailwind CSS, and modern front-end practices to enhance user experience.",
    },
   
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700  text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-pink-400 pl-6 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-pink-400/40 transition duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[38px] top-8 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center shadow-md">
                <FaBriefcase className="text-white text-sm" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-yellow-300">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-200 mb-2">{exp.company}</p>
              <p className="text-sm italic text-gray-300 mb-3">
                {exp.period}
              </p>
              <p className="text-base text-gray-100 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



