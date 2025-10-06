import React from 'react';

export default function Experience() {

  const experiences = [
    {
      id: 1,
      company: 'Devn Migration Pvt ltd (Front-end Developer Intern)',
      period: '2024 - Present',
      description: 'Designing and implementing the user interface and user experience of a web application',
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        {/* Experience Title */}
        <h2 className="text-3xl font-bold mb-4 text-left">Experience</h2>

        {/* Experience Cards */}
        <div className=" gap-8">
          {experiences.map(exp => (
            <div key={exp.id} className=" p-6">
              <div className="flex text-lg font-medium text-gray-600 space-x-12">
              <h3>{exp.period}</h3>
              <h3>{exp.company}</h3>
              </div>
              <h4 className="text-lg">{exp.title}</h4>
              
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


