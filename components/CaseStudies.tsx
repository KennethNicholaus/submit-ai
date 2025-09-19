import React from 'react';
import type { CaseStudy } from '../types';

const caseStudiesList: CaseStudy[] = [
  {
    industry: 'FinTech & Banking',
    title: 'Financial Risk & Trading Systems',
    description: 'Architected real-time engines that reduced loan default losses by 18% and increased fraudulent transaction detection by 40%, demonstrably improving firm profitability.',
  },
  {
    industry: 'WealthTech',
    title: 'AI-Powered Asset Management',
    description: 'Designed a hybrid AI platform for a multi-trillion-dollar asset manager, using RAG to automate 90% of research and attract over $500 million in new AUM.',
  },
  {
    industry: 'Manufacturing',
    title: 'Predictive Maintenance Platform',
    description: 'Deployed an end-to-end platform using IoT and LSTM models to reduce unplanned equipment downtime by 45% and cut overall maintenance costs by 30%.',
  },
  {
    industry: 'Financial Operations',
    title: 'Automated Trade Reconciliation',
    description: 'Architected an AI-driven platform using Vision Transformers and NLP to analyze unstructured documents, reducing manual labor on trade reconciliation by over 60%.',
  },
  {
    industry: 'CPG & Pharmaceuticals',
    title: 'Computer Vision for Quality Control',
    description: 'Implemented a closed-loop computer vision system on high-speed bottling and pharmaceutical lines, achieving a 99.98% defect detection rate and ensuring patient safety.',
  },
  {
    industry: 'Healthcare & Life Sciences',
    title: 'Clinical Decision Support System',
    description: 'Designed a system for radiologists that increased the detection rate of early-stage anomalies by 15% and an NLP platform that reduced clinical trial recruitment time from months to days.',
  },
];

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-slate-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Success Stories</h2>
          <p className="text-slate-400 mt-2">See how we drive real-world impact across industries.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudiesList.map((study, index) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-lg flex flex-col">
              <span className="text-sky-400 font-semibold mb-2">{study.industry}</span>
              <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
              <p className="text-slate-300 leading-relaxed flex-grow">{study.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;