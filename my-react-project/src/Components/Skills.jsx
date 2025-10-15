import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFramer, SiMui } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-purple-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-purple-700" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
  { name: "Material UI", icon: <SiMui className="text-indigo-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-500" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-tr from-purple-100 via-purple-200 to-purple-300 overflow-hidden"
    >
      {/* Cartoonish floating glows */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-300/20 rounded-3xl blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-16 w-80 h-80 bg-pink-300/20 rounded-3xl blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-12 drop-shadow-[0_0_10px_rgba(0,0,0,0.2)]"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Superpowers
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col items-center justify-center p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-purple-200/40 shadow-lg cursor-pointer hover:shadow-purple-400/50 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Floating Icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-5xl mb-3"
              >
                {skill.icon}
              </motion.div>

              <h3 className="text-purple-800 text-lg font-semibold tracking-wide">
                {skill.name}
              </h3>

              {/* Cartoon Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/30 via-pink-300/20 to-purple-500/30 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


