import React from 'react';
import { ShieldCheckIcon } from './icons/Icons';

const ProjectSuccess: React.FC = () => {
  return (
    <section id="success-rate" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sky-400 inline-block mb-6">
            <ShieldCheckIcon className="w-16 h-16" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Beating the Odds: Our Commitment to AI Success
          </h2>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              Industry reports suggest a staggering <strong>80% to 90% of AI projects fail</strong> to deliver on their promises. At SUBMIT-AI, our track record tells a different story. We believe that successful AI implementation is not a matter of chance, but a result of deep expertise, meticulous planning, and relentless execution.
            </p>
            <p>
              We navigate the complexities of AI to ensure every project is not just a technical achievement, but a transformational success for your business.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="https://medium.com/@kenneth.nicholaus/14-reasons-why-70-to-80-of-ai-projects-fail-decoding-the-high-failure-rate-of-ai-projects-1a13061e389e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 font-semibold transition-colors text-lg inline-flex items-center group"
            >
              <span>Learn why most AI projects fail (and how we succeed)</span>
              <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSuccess;