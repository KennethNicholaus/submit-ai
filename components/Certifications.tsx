import React from 'react';
import { BadgeCheckIcon } from './icons/Icons';

const certificationsList = [
  'AI Tools/Platforms: Hugging Face, LangChain, OpenAI APIs; Cloud Al (GCP Vertex Al, AWS SageMaker, Azure ML)',
  'Programming: Python (Advanced), R, SQL, (Familiarity with Java, C++)',
  'Relevant Certifications: MongoDB, SQL for Data Science, Product Management Professional (LinkedIn), OCI Generative Al Professional, IBM Gen Al Professional, EDHEC Business School: Investment Management with Python and Machine Learning Specialization',
  'ML & RL in Finance (NYU), New York Institute of Finance: ML for Trading Specialization',
  'TensorFlow: Advanced Techniques, Data & Deployment, Developer Professional (DeepLearning.Al)',
  'NLP, GAN, Al for Medicine (DeepLearning.AI), GEN AI Leader(Coursera,GCP), RAG (GCP)',
  'Practical Data Science on AWS Cloud (AWS, DeepLearning.AI), MLOps (DeepLearning.Al)',
  'Google Cloud: Professional ML Engineer, Data Engineer, Cloud Architect, Cloud Developer, DevOps Engineer, Database Engineer, Security Engineer, Associate Cloud Engineer, Cloud Digital Leader, Gen Al leader',
  'Stanford: Al in Healthcare | U of Alberta: Reinforcement Learning etc.',
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Select Certifications</h2>
          <p className="text-slate-400 mt-2">A testament to our commitment to continuous learning and expertise.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {certificationsList.map((cert, index) => (
              <li key={index} className="flex items-start p-4 bg-slate-800/50 rounded-lg">
                <div className="flex-shrink-0 text-sky-400 mt-1">
                  <BadgeCheckIcon />
                </div>
                <p className="ml-4 text-slate-300">{cert}</p>
              </li>
            ))}
          </ul>
          <div className="text-center mt-12">
            <a 
              href="https://drive.google.com/file/d/1AgMc4Z3nPqVJUGJxKGy5MSjMqn9-HsrY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 font-semibold transition-colors text-lg"
            >
              View Full List of 250+ Certifications/Badges &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
