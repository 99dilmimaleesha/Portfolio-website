import React from "react";
import { motion } from "framer-motion";
import { IoOpenOutline } from "react-icons/io5";

export default function RecentWriting() {
  // Example articles data
  const articles = [
    {
      title: "Quality Assurance in the AI Era: Why Human Thinking Still Matters",
      description: "Exploring the role of human QA in the age of AI-powered automation and testing tools.",
      link: "https://medium.com/@dilmalee99/quality-assurance-in-the-ai-era-why-human-thinking-still-matters-4eadba10acb1?postPublishedType=initial",
    },
    {
      title: "How to Build a Weather App with API Integration and Deploy it to GitHub",
      description: "A step-by-step guide on creating a weather application using API integration.",
      link: "https://medium.com/@dilmalee99/how-to-build-a-weather-app-with-api-integration-and-deploy-it-to-github-4ffac2f87b7a",
    },
    {
      title: "Unlocking the Power of Git Commits a Storytelling Approach For Developers",
      description: "Exploring how meaningful Git commit messages can tell the story of your code.",
      link: "https://medium.com/@dilmalee99/unlocking-the-power-of-git-commits-a-storytelling-approach-for-developers-0a840a8e60f6",
    },
  ];

  return (
    <section
      id="writing"
      className="relative py-24 bg-neutral-50 dark:bg-neutral-900 text-black dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-lisitana text-4xl md:text-5xl font-bold mb-12 text-center">
          Recent Writing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                {article.description}
              </p>
              <div className="flex items-center text-blue-500 font-medium">
                Read More <IoOpenOutline className="ml-2" size={20} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
