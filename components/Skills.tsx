import React from 'react';

const skillsList = [
  'AI Strategy & Roadmapping',
  'Large Language Models (LLMs)',
  'Generative AI Solutions',
  'Machine Learning & Deep Learning',
  'Natural Language Processing (NLP)',
  'Computer Vision',
  'Cloud AI Platforms (GCP, AWS, Azure)',
  'MLOps & AI Infrastructure',
  'Data Governance & Ethics',
  'Predictive Analytics',
  'Reinforcement Learning',
  'AI Product Management',
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Core Competencies</h2>
          <p className="text-gray-400 mt-2">Our expertise spans the full spectrum of AI technologies and disciplines.</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {skillsList.map((skill, index) => (
              <span key={index} className="bg-gray-800 text-teal-300 text-sm font-medium px-4 py-2 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;