import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";


export default function Contact() {
  const socialLinks = [
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:dilmimaleesha300@gmail.com",
      color: "bg-neutral-800 hover:bg-neutral-900",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/dilmi-wickramasingha-189978220/",
      color: "bg-neutral-800 hover:bg-neutral-900",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/99dilmimaleesha",
      color: "bg-neutral-800 hover:bg-neutral-900",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text + Icons */}
        <div className="flex-1 text-center md:text-left">
          {/* Title */}
          <motion.h2
            className="font-lusitana text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Get In Touch
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="font-inter text-neutral-700 dark:text-neutral-400 max-w-md mx-auto md:mx-0 mb-12 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Let’s connect! Click the button or icons below to reach me directly.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center md:justify-start gap-8 text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg text-white ${social.color} transition-all`}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9, rotate: 0 }}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

       
      </div>
       
    </section>
  );
}
