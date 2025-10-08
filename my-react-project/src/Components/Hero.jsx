import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "../assets/Profile_Img.png"; 

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-purple-800 overflow-hidden text-white">
      {/* Background Splash / Glow */}
      <div className="absolute -top-32 w-[500px] h-[500px] bg-gradient-to-r from-pink-400 via-purple-500 to-yellow-400 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-t from-yellow-400 via-pink-400 to-transparent rounded-full blur-3xl opacity-40" />
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-gradient-to-bl from-purple-300 via-pink-400 to-transparent rounded-full blur-3xl opacity-30" />

      {/* Profile Image */}
      <motion.div
        className="relative z-10 mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative flex items-center justify-center">
          {/* Soft glowing ring */}
          <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-pink-400 via-yellow-300 to-purple-500 blur-2xl opacity-60 animate-pulse"></div>

          {/* Profile Picture */}
          <motion.img
            src={ProfilePic}
            alt="Dilmi Wickramasinghe"
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl object-cover"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <div className="text-center px-6 md:px-0">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hi there! I’m{" "}
          <span className="text-yellow-300">Dilmi Wickramasinghe</span>
        </motion.h2>

        <motion.h3
          className="text-2xl md:text-3xl mb-4 text-pink-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Frontend Developer
        </motion.h3>

        <motion.p
          className="text-lg md:text-xl font-medium bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 inline-block leading-relaxed shadow-lg border border-white/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          I craft elegant, responsive, and engaging user interfaces using
          <span className="text-yellow-300"> React </span> and
          <span className="text-pink-300"> modern web technologies</span>.
        </motion.p>
      </div>
    </section>
  );
}

