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
        "Collaborated with designers and developers to create responsive, visually engaging user interfaces using React and Tailwind CSS, ensuring a seamless user experience across devices.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-tr from-violet-300 via-indigo-200 to-pink-200 text-slate-800"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-indigo-700"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-indigo-300 pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative bg-white/70 backdrop-blur-md border border-violet-200 p-6 rounded-2xl shadow-lg hover:shadow-violet-300/50 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[42px] top-8 w-8 h-8 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-full flex items-center justify-center shadow-md">
                <FaBriefcase className="text-white text-sm" />
              </div>

              {/* Experience Content */}
              <h3 className="text-2xl font-semibold text-indigo-700 mb-1">
                {exp.role}
              </h3>
              <p className="text-md text-violet-500 font-medium mb-1">
                {exp.company}
              </p>
              <p className="text-sm italic text-gray-500 mb-3">
                {exp.period}
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




