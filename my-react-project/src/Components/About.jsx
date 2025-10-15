import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "../assets/Profile_Img.png";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-tr from-violet-300 via-indigo-200 to-pink-200 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-pink-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left: Profile */}
        <motion.div
          className="relative w-64 h-64 md:w-72 md:h-72 overflow-hidden shadow-xl border-4 border-white/20 rounded-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-full h-full object-cover rounded-xl"
          />
          {/* Glow behind profile */}
          <div className="absolute inset-0 rounded-xl bg-pink-500/30 blur-2xl -z-10" />
        </motion.div>

        {/* Right: Description */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-purple-800"
            
          >
            About Me
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed">
            Hi! I’m a passionate frontend developer who loves crafting
            interactive, visually appealing web experiences. I specialize in
            React, Next.js, Tailwind CSS, and modern UI/UX design principles.
            When I’m not coding, I enjoy exploring design trends, creating
            digital art, and learning about new technologies that can make web
            experiences more delightful.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
