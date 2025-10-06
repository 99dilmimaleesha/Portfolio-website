import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 animate-gradient">
      <div className="text-center text-white p-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi there! I am <span className="text-yellow-300">Dilmi Wickramasinghe</span>,
        </motion.h2>

        <motion.h3
          className="text-2xl md:text-3xl mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          a Frontend Developer
        </motion.h3>

        <motion.p
          className="text-lg font-semibold bg-gradient-to-r from-pink-400 to-red-500 text-white rounded-lg inline-block px-4 py-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Designing and implementing the user interface and user experience of a web application
        </motion.p>
      </div>
    </section>
  );
}

