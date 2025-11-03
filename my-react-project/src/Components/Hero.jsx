import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-violet-100 to-white overflow-hidden text-slate-800">
      {/* Soft Background Glows */}
      <div className="absolute -top-40 left-10 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-violet-300 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute top-0 right-1/3 w-[250px] h-[250px] bg-indigo-200 rounded-full blur-3xl opacity-50" />

      {/* Profile Image */}
      <motion.div
        className="relative z-20 mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative flex items-center justify-center">
          {/* Glowing ring behind profile */}
          <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-violet-300 via-indigo-200 to-pink-200 blur-2xl opacity-60 animate-pulse"></div>
        </div>
      </motion.div>

      {/* Text Content */}
      <div className="text-center px-6 md:px-0 z-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-indigo-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hi there! I’m{" "}
          <span className="text-violet-500">Dilmi Wickramasinghe</span>
        </motion.h2>

        <motion.h3
          className="text-2xl md:text-3xl mb-4 text-indigo-400 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Frontend Developer
        </motion.h3>

        <motion.p
          className="text-lg md:text-xl font-medium  backdrop-blur-md rounded-xl px-5 py-3 inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
           Crafting Intuitive User Experience (UX) with
          <span className="text-violet-600 font-semibold"> React js</span> and
          <span className="text-indigo-500 font-semibold">
            {" "}
            JavaScript
          </span>
          .
        </motion.p>
      </div>

      {/* Buttons */}
      <div className="relative z-30 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8">
        {/* Contact Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300 ease-out cursor-pointer hover:shadow-indigo-300/50"
        >
          <span className="relative z-10">Let's Talk</span>
          <span className="absolute inset-0 rounded-full opacity-0 bg-gradient-to-r from-violet-500 to-indigo-600 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>

        {/* Open CV in new tab Button */}
        <motion.a
          href="/Dilmi_Wickramasinghe_CV.pdf" // path to your PDF
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold border-2 border-indigo-500 rounded-full text-indigo-700 transition-all duration-300 ease-out cursor-pointer hover:bg-indigo-600 hover:text-white hover:shadow-md"
        >
          View CV
        </motion.a>
      </div>
    </section>
  );
}
