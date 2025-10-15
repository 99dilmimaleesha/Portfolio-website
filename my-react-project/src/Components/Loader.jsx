// Loader.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-tr from-purple-800 via-indigo-700 to-pink-600 flex items-center justify-center z-50 overflow-hidden">
      {/* Glowing floating stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-yellow-400 rounded-full shadow-lg"
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Magical Loader: Wand/Star spin */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        <FaStar className="text-yellow-300 text-6xl drop-shadow-[0_0_20px_yellow]" />
        <div className="absolute w-40 h-40 border-4 border-yellow-300 rounded-full opacity-30 animate-ping" />
        <div className="absolute w-60 h-60 border-2 border-pink-400 rounded-full opacity-20 animate-pulse" />
      </motion.div>

      {/* Floating magic sparkles around */}
      <motion.div
        className="absolute w-3 h-3 bg-white rounded-full blur-sm"
        animate={{ y: [0, -50, 0], x: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
    </div>
  );
}

