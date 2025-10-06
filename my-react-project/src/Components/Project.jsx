import React from 'react';
import Onsty_Logo from '../assets/Onsty-logo.png';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Onsty',
      description: 'Financial platform for GVC Gaesco, a Spanish financial services company.',
      tags: ['React', 'Tailwind CSS', 'React-Router-Dom','React-Hooks','Flowbite'],
      logo: Onsty_Logo, // Add logo property
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <div className="container mx-auto">
        {/* Projects Title */}
        <h2 className="text-3xl font-bold mb-8 text-left">Projects</h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white p-6 shadow-md rounded-md">
              <div className="flex items-center">
                <h3 className="text-xl font-bold flex mr-auto">{project.name}</h3>
                {project.logo && (
                  <img 
                    src={project.logo} 
                    alt={`${project.name} logo`} 
                    className="ml-4 w-32 h-16 object-contain" 
                  />
                )}
              </div>
              
              <p className="mt-2">{project.description}</p>
              <div className="mt-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




