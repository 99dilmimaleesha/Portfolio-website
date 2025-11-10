import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="font-lusitana text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Get In Touch
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="font-inter text-center text-neutral-700 dark:text-neutral-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Have a question or a project idea? Let’s collaborate and bring your vision to life.  
          Fill out the form below or reach out directly — I’d love to connect.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {["Name", "Email", "Message"].map((field, i) => (
            <div key={i}>
              <label
                htmlFor={field.toLowerCase()}
                className="font-inter block text-sm font-medium mb-2 text-neutral-800 dark:text-neutral-200"
              >
                {field}
              </label>
              {field !== "Message" ? (
                <input
                  type={field === "Email" ? "email" : "text"}
                  id={field.toLowerCase()}
                  name={field.toLowerCase()}
                  required
                  className="font-inter w-full p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 
                             bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 
                             placeholder-neutral-500 dark:placeholder-neutral-400 
                             focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
                  placeholder={`Enter your ${field.toLowerCase()}`}
                />
              ) : (
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="font-inter w-full p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 
                             bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 
                             placeholder-neutral-500 dark:placeholder-neutral-400 
                             focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
                  placeholder="Write your message..."
                />
              )}
            </div>
          ))}

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-inter w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-medium 
                       shadow-sm hover:shadow-md transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Divider Line */}
        <motion.div
          className="mt-16 w-24 h-[2px] mx-auto bg-neutral-900 dark:bg-neutral-100 rounded-full"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}








