import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPalette, FaMobileAlt, FaSearch } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building responsive, fast, and scalable websites using React, Next.js, Tailwind CSS, and modern web technologies.",
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Designing visually appealing and user-friendly interfaces, focusing on intuitive user experience and aesthetics.",
    icon: <FaPalette />,
  },
  {
    id: 3,
    title: "Mobile Optimization",
    description:
      "Ensuring your web applications look and perform perfectly on all devices with responsive design.",
    icon: <FaMobileAlt />,
  },
  {
    id: 4,
    title: "SEO & Performance",
    description:
      "Improving website visibility and performance using best practices in SEO, accessibility, and optimization.",
    icon: <FaSearch />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-purple-900 via-pink-700 to-purple-900 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center shadow-lg cursor-pointer border border-white/20 hover:shadow-pink-400/40 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Icon with floating animation */}
              <motion.div
                className="text-5xl mb-4 text-yellow-300"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {service.icon}
              </motion.div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>

              {/* Service Description */}
              <p className="text-gray-200 text-sm leading-relaxed">{service.description}</p>

              {/* Hover Gradient Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/30 via-yellow-400/30 to-purple-500/30 opacity-0 hover:opacity-100 blur-xl transition duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
