import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    degree: "BSc in Computer Science",
    institution: "University of Colombo",
    period: "2021 - 2025",
    description: "Focused on Web Development, UI/UX, and Software Engineering principles.",
  },

];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 bg-gradient-to-b from-purple-900 via-pink-700 to-purple-900 overflow-hidden text-white"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-pink-500/50 ml-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="mb-12 ml-6 relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-7 top-2 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-lg">
                <FaGraduationCap />
              </div>

              {/* Education Card */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-pink-400/30 transition duration-300">
                <h3 className="text-xl font-bold text-yellow-300">{edu.degree}</h3>
                <p className="text-gray-200 font-semibold">{edu.institution}</p>
                <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                <p className="text-gray-200">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
