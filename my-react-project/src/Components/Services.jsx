import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPalette, FaMobileAlt, FaSearch } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Crafting responsive, fast, and modern web experiences using React, Next.js, and Tailwind CSS with a focus on creativity and performance.",
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Designing visually engaging, human-centered interfaces that balance beauty and usability — turning ideas into delightful digital journeys.",
    icon: <FaPalette />,
  },
  {
    id: 3,
    title: "Mobile Optimization",
    description:
      "Ensuring every experience feels natural and smooth across all screen sizes with fully adaptive and fluid layouts.",
    icon: <FaMobileAlt />,
  },
  {
    id: 4,
    title: "SEO & Performance",
    description:
      "Boosting visibility, accessibility, and load times through intelligent SEO and performance strategies for a lasting impression.",
    icon: <FaSearch />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-tr from-purple-100 via-purple-200 to-purple-300 overflow-hidden"
    >
      {/* Cartoon Floating Glows */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-pink-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        {/* Section Title */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What I Do
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(192,132,252,0.4)] transition-all duration-700 group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              {/* Floating Icon */}
              <motion.div
                className="text-6xl mb-4 text-purple-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-purple-700 mb-3 tracking-wide">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed relative z-10">
                {service.description}
              </p>

              {/* Cartoon Glow Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/40 via-pink-300/30 to-purple-500/40 opacity-0 group-hover:opacity-100 blur-xl transition duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


