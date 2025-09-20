import React from 'react';
import type { CaseStudy } from '../types.ts';

const caseStudiesList: CaseStudy[] = [
  {
    industry: 'FinTech & Banking',
    title: 'Financial Risk & Trading Systems',
    description: 'Architected real-time engines that reduced loan default losses by 18% and increased fraudulent transaction detection by 40%, demonstrably improving firm profitability.',
    imageUrl: 'https://images.unsplash.com/photo-1665686310934-8651c6a22f28?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    industry: 'WealthTech',
    title: 'AI-Powered Asset Management',
    description: 'Designed a hybrid AI platform for a multi-trillion-dollar asset manager, using RAG to automate 90% of research and attract over $500 million in new AUM.',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    industry: 'Manufacturing',
    title: 'Predictive Maintenance Platform',
    description: 'Deployed an end-to-end platform using IoT and LSTM models to reduce unplanned equipment downtime by 45% and cut overall maintenance costs by 30%.',
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-b62a14a73989?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    industry: 'Financial Operations',
    title: 'Automated Trade Reconciliation',
    description: 'Architected an AI-driven platform using Vision Transformers and NLP to analyze unstructured documents, reducing manual labor on trade reconciliation by over 60%.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    industry: 'CPG & Pharmaceuticals',
    title: 'Computer Vision for Quality Control',
    description: 'Implemented a closed-loop computer vision system on high-speed bottling and pharmaceutical lines, achieving a 99.98% defect detection rate and ensuring patient safety.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    industry: 'Healthcare & Life Sciences',
    title: 'Clinical Decision Support System',
    description: 'Designed a system for radiologists that increased the detection rate of early-stage anomalies by 15% and an NLP platform that reduced clinical trial recruitment time from months to days.',
    imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-gray-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Success Stories</h2>
          <p className="text-gray-400 mt-2">See how we drive real-world impact across industries.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudiesList.map((study, index) => (
            <div key={index} className="group bg-gray-800/60 rounded-lg flex flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.imageUrl} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 via-gray-800/20 to-transparent"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ai-grid-overlay"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-cyan-400 font-semibold mb-2 text-sm uppercase tracking-wider">{study.industry}</span>
                <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                <p className="text-gray-300 leading-relaxed flex-grow">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;