import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiMui,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "Material UI", icon: <SiMui /> },
  { name: "GitHub", icon: <FaGithub /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-white text-black overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Section Title */}
        <motion.h2
          className="font-lisitana text-4xl md:text-5xl font-bold mb-12 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Technologies
        </motion.h2>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center justify-center p-6 rounded-xl border border-neutral-200 hover:border-black transition-all duration-300 bg-white shadow-sm hover:shadow-md cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-5xl text-black mb-3"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="font-inter text-sm md:text-base font-medium text-neutral-800">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

