import React from "react";
import { motion } from "framer-motion";
import HelloGirl from "../assets/HelloGirl.jpg";
import { IoOpenOutline } from "react-icons/io5";


export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden px-6 md:px-0 transition-colors duration-500">
   

      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-100 dark:from-black dark:to-neutral-900 pointer-events-none transition-all duration-700" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* 👋 Hello Girl Image - Appears Once and Hides */}
        <motion.img
          src={HelloGirl}
          alt="Hello Girl"
          className="mx-auto w-32 md:w-40 mb-4 rounded-full"
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [-20, 0, 0, -20],
            scale: [0.9, 1, 1, 0.9],
          }}
          transition={{
            duration: 3,
            times: [0, 0.2, 0.8, 1],
            ease: "easeInOut",
          }}
        />

        <motion.h1
          className="font-lisitana text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Hi, I’m{" "}
          <span className="underline decoration-2 underline-offset-4">
            Dilmi Wickramasinghe
          </span>
        </motion.h1>

        <motion.h2
          className="font-inter text-lg md:text-xl font-medium text-neutral-700 dark:text-neutral-300 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Frontend Developer passionate about crafting intuitive, modern, and
          reliable user experiences.
        </motion.h2>

        <motion.p
          className="font-inter text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          I build responsive, accessible, and minimal web interfaces with
          <span className="font-semibold text-black dark:text-white">
            {" "}
            React.js{" "}
          </span>
          and
          <span className="font-semibold text-black dark:text-white">
            {" "}
            JavaScript
          </span>{" "}
          — focused on simplicity and trust.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="font-inter inline-flex items-center justify-center px-8 py-3 text-sm md:text-base font-semibold bg-black dark:bg-white text-white dark:text-black rounded-full transition-all duration-300 ease-out hover:opacity-80"
          >
            Let’s Talk
          </motion.a>

          <motion.a
            href="/Dilmi_Wickramasinghe_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="font-inter inline-flex items-center justify-center gap-2 px-8 py-3 text-sm md:text-base font-semibold border-2 border-black dark:border-white rounded-full text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 ease-out"
          >
            View CV <IoOpenOutline className="text-lg" />
          </motion.a>
        </div>
      </div>

      {/* Accent circle */}
      <motion.div
        className="absolute bottom-20 w-20 h-20 bg-black dark:bg-white opacity-[0.03] rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ delay: 1.2, duration: 1.5 }}
      />
    </section>
  );
}

