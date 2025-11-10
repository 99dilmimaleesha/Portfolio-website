import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "../assets/Profile_Img.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        

        {/* Right: About Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-lisitana text-4xl text-center md:text-left md:text-5xl font-bold mb-6 tracking-tight">
            About Me
          </h2>

          <p className="font-inter text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Hi there! I’m{" "}
            <span className="font-semibold text-black dark:text-white">
              Dilmi Wickramasinghe,
            </span>{" "}
            a passionate and curious developer who loves solving problems through
            code. My journey with programming began during my first year at
            university. I still remember the moment I wrote my very first C
            program — a simple one, but it sparked something powerful in me.
            I was fascinated by how a few lines of logic could make a computer
            do something. That small sense of creation turned into curiosity,
            and curiosity soon became passion.
          </p>

          <p className="font-inter text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 mt-6">
            Over time, I began exploring web technologies and discovered the
            world of{" "}
            <span className="font-semibold text-black dark:text-white">
              JavaScript and React.js
            </span>
            . I loved how code could come to life in a browser — interactive,
            dynamic, and beautifully visual. I started building web applications,
            integrating APIs, designing interfaces, and debugging challenges that
            helped me grow both technically and creatively.
          </p>

          <p className="font-inter text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 mt-6">
            Recently, I completed my{" "}
            <span className="font-semibold text-black dark:text-white">
              Bachelor of Information and Communication Technology (Honours)
              degree
            </span>{" "}
            from{" "}
            <span className="font-semibold text-black dark:text-white">
              Uva Wellassa University of Sri Lanka
            </span>
            , and I’m now looking forward to contributing my skills in a
            professional environment — where I can continue learning, creating,
            and solving meaningful problems through technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

