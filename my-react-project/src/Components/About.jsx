import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "../assets/Profile_Img.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-white text-black overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Profile Image */}
        <motion.div
          className="relative w-64 h-64 md:w-72 md:h-72 overflow-hidden rounded-xl shadow-md"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        {/* Right: About Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-lisitana text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            About Me
          </h2>

          <p className="font-inter text-base md:text-lg leading-relaxed text-neutral-700">
            I’m <span className="font-semibold text-black">Dilmi Wickramasinghe</span>,
            a frontend developer who loves transforming ideas into
            meaningful digital experiences. My coding journey began with a
            simple C program in university, and it grew into a passion for
            creating clean, user-focused web interfaces.
          </p>

          <p className="font-inter text-base md:text-lg leading-relaxed text-neutral-700 mt-4">
            I specialize in building responsive and accessible apps using{" "}
            <span className="font-semibold text-black">React.js</span> and{" "}
            <span className="font-semibold text-black">JavaScript</span>.
            Recently, I completed my{" "}
            <span className="font-medium text-black">
              Bachelor’s in Information and Communication Technology
            </span>{" "}
            at Uva Wellassa University. I’m continuously learning, collaborating,
            and striving to design experiences that balance clarity,
            functionality, and trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

