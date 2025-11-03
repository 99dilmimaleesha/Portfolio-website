import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-tr from-violet-300 via-indigo-200 to-pink-200 overflow-hidden"
    >
      {/* Cartoon Glows */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-purple-700 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Get In Touch
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-center text-purple-800 max-w-2xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Have a question or a project idea? Let’s collaborate and bring your vision to life.  
          Fill out the form below or reach me directly — I’d love to connect!
        </motion.p>

        {/* Contact Form */}
        <motion.form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {["Name", "Email", "Message"].map((field, i) => (
            <div key={i}>
              <label htmlFor={field.toLowerCase()} className="block text-sm font-semibold mb-2 text-purple-800">
                {field}
              </label>
              {field !== "Message" ? (
                <input
                  type={field === "Email" ? "email" : "text"}
                  id={field.toLowerCase()}
                  name={field.toLowerCase()}
                  required
                  className="w-full p-3 rounded-lg bg-white/20 text-purple-900 placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  placeholder={`Enter your ${field.toLowerCase()}`}
                />
              ) : (
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full p-3 rounded-lg bg-white/20 text-purple-900 placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  placeholder="Write your message..."
                />
              )}
            </div>
          ))}

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Decorative Gradient Line */}
        <motion.div
          className="mt-16 w-28 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-400 via-pink-300 to-purple-500"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}






