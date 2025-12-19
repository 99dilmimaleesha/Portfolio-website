import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* About Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-lisitana text-4xl md:text-5xl font-bold mb-6 tracking-tight text-center md:text-left">
            About Me
          </h2>

          <p className="font-inter text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            I am a <span className="font-semibold">Frontend Developer and Aspiring QA Engineer</span> 
            with a strong focus on building and validating high-quality, user-centered digital experiences. 
            With hands-on experience in <span className="font-semibold">frontend development</span> and 
            <span className="font-semibold"> software testing</span>, I enjoy understanding how products are built, 
            how users interact with them, and how quality can be maintained at every stage of development.
          </p>

          <p className="font-inter text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 mt-6">
            I have practical exposure to <span className="font-semibold">manual testing, API testing, test case design, and bug reporting</span>, 
            and I enjoy collaborating with developers to identify issues early and improve overall product reliability. 
            My frontend background helps me think from both a <span className="font-semibold">developer’s and a user’s perspective</span>, 
            allowing me to spot usability, UI, and functional issues more effectively.
          </p>

          <p className="font-inter text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 mt-6">
            Alongside my technical skills, I am a <span className="font-semibold">writer</span> who enjoys explaining complex ideas in simple, meaningful ways. 
            I write about <span className="font-semibold">Quality Assurance, technology, and the impact of AI</span>, 
            using writing as a tool to sharpen my <span className="font-semibold">critical thinking and communication skills</span>.
          </p>

          <p className="font-inter text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 mt-6">
            Curious, detail-oriented, and continuously learning, I am motivated to grow as a QA professional while contributing to teams that value 
            <span className="font-semibold"> quality, empathy, and thoughtful software design</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}



