import React from 'react';
import type { Service } from '../types';
import { BrainCircuitIcon, RocketIcon, BarChartIcon } from './icons/Icons';

const servicesList: Service[] = [
  {
    title: 'AI Strategy Consulting',
    description: 'Developing bespoke AI roadmaps and strategies to align with your business objectives, ensuring a clear path to AI maturity and value realization.',
    icon: <BrainCircuitIcon />,
  },
  {
    title: 'Custom AI Solution Development',
    description: 'Building and deploying end-to-end AI solutions, from generative AI applications to predictive models, tailored to your specific operational needs.',
    icon: <RocketIcon />,
  },
  {
    title: 'AI Platform & Infrastructure',
    description: 'Designing and implementing robust, scalable, and secure AI platforms on major cloud providers, enabling efficient MLOps and model lifecycle management.',
    icon: <BarChartIcon />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900/70 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Our Services</h2>
          <p className="text-gray-400 mt-2">Empowering your business with comprehensive AI capabilities.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-gray-800/60 p-8 rounded-lg text-center">
              <div className="text-cyan-400 inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;