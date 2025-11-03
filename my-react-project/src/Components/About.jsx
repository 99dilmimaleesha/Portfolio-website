import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "../assets/Profile_Img.png";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-indigo-100 via-violet-100 to-white overflow-hidden"
    >
      <div className="absolute -top-40 left-10 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-violet-300 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute top-0 right-1/3 w-[250px] h-[250px] bg-indigo-200 rounded-full blur-3xl opacity-50" />

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-800">
            About Me
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed">
            Hey there! I’m{" "}
            <span className="font-semibold text-purple-800">
              Dilmi Wickramasinghe
            </span>{" "}
            — a passionate and curious developer who loves solving problems
            through code. My journey started with a simple C program in my first
            year at university, and that spark grew into a deep love for coding.
            Since then, I’ve dived into the world of{" "}
            <span className="font-medium text-purple-700">JavaScript</span> and{" "}
            <span className="font-medium text-purple-700">React.js</span>,
            building web apps that blend creativity and logic. I recently
            completed my{" "}
            <span className="font-medium text-purple-700">
              Bachelor’s in Information and Communication Technology
            </span>{" "}
            from Uva Wellassa University, and I’m now excited to grow as a
            developer — learning, collaborating, and solving meaningful problems
            through technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
