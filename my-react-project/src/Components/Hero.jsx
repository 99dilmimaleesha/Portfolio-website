import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-white text-black overflow-hidden px-6 md:px-0">
      {/* Minimal Background Accent (subtle gradient or shape) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-100 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h1
          className="font-lisitana text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m <span className="underline decoration-2 underline-offset-4">Dilmi Wickramasinghe</span>
        </motion.h1>

        <motion.h2
          className="font-inter text-lg md:text-xl font-medium text-neutral-700 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Frontend Developer passionate about crafting intuitive, modern, and
          reliable user experiences.
        </motion.h2>

        <motion.p
          className="font-inter text-base md:text-lg text-neutral-600 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I build responsive, accessible, and minimal web interfaces with
          <span className="font-semibold text-black"> React.js </span> and
          <span className="font-semibold text-black"> JavaScript</span> — focused
          on simplicity and trust.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="font-inter inline-flex items-center justify-center px-8 py-3 text-sm md:text-base font-semibold bg-black text-white rounded-full transition-all duration-300 ease-out hover:bg-neutral-800"
          >
            Let’s Talk
          </motion.a>

          <motion.a
            href="/Dilmi_Wickramasinghe_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="font-inter inline-flex items-center justify-center px-8 py-3 text-sm md:text-base font-semibold border-2 border-black rounded-full text-black hover:bg-black hover:text-white transition-all duration-300 ease-out"
          >
            View CV
          </motion.a>
        </div>
      </div>

      {/* Soft Entry Motion Accent (optional, subtle) */}
      <motion.div
        className="absolute bottom-20 w-20 h-20 bg-black opacity-[0.03] rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ delay: 1.2, duration: 1.5 }}
      />
    </section>
  );
}

