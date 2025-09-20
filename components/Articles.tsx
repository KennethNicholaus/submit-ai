import React from 'react';
import type { Article } from '../types';
import { ArrowRightIcon } from './icons/Icons';

const articlesList: Article[] = [
  {
    title: 'Quantum AI: The Quantum Leap to Superintelligence',
    excerpt: 'Exploring the convergence of quantum computing and AI, and its potential to unlock unprecedented computational power and true superintelligence.',
    url: 'https://medium.com/@kenneth.nicholaus/quantum-ai-the-quantum-leap-to-superintelligence-d4d4db94c56e',
  },
  {
    title: 'The “Post-Transformer” Era',
    excerpt: 'A look into the future beyond the dominant Transformer architecture, examining the next wave of models set to redefine artificial intelligence.',
    url: 'https://medium.com/@kenneth.nicholaus/the-post-transformer-era-092b2a1b4848',
  },
  {
    title: 'Large Action Models (LAMs) Are Coming!',
    excerpt: 'An introduction to Large Action Models (LAMs), the next frontier in AI capable of understanding and executing complex actions in the digital world.',
    url: 'https://medium.com/@kenneth.nicholaus/large-action-models-lams-are-coming-b41c23ed469b',
  },
  {
    title: 'Era of Autonomous Intelligence',
    excerpt: 'Discussing the shift towards autonomous AI systems that can independently reason, plan, and act, ushering in a new era of intelligence.',
    url: 'https://medium.com/@kenneth.nicholaus/era-of-autonomous-intelligence-064abb039d3d',
  },
  {
    title: 'Digital Sidekick: Are AI Agents the Future?',
    excerpt: 'Investigating the rise of AI agents as personal and professional digital sidekicks, poised to revolutionize how we work and live.',
    url: 'https://medium.com/@kenneth.nicholaus/digital-sidekick-are-ai-agents-the-future-of-everything-690ba34d3ebf',
  },
  {
    title: 'How Generative AI is Rewiring Business Intelligence',
    excerpt: 'Analyzing how Generative AI is transforming business intelligence and enterprise planning from reactive analysis to proactive, predictive foresight.',
    url: 'https://medium.com/@kenneth.nicholaus/are-erp-business-intelligence-and-enterprise-planning-approaching-an-evolutionary-shift-due-to-a9aa0592457d',
  },
];

const Articles: React.FC = () => {
  return (
    <section id="articles" className="py-20 bg-gray-900/70 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Thought Leadership</h2>
          <p className="text-gray-400 mt-2">Exploring the frontiers of AI, strategy, and innovation.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articlesList.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/60 p-6 rounded-lg flex flex-col justify-between shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{article.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{article.excerpt}</p>
              </div>
              <div className="mt-auto">
                <span className="text-cyan-400 font-semibold text-sm inline-flex items-center">
                  Read Article
                  <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
