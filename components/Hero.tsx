import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Pioneering AI-Powered Enterprise Transformation
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10">
            We architect and implement cutting-edge AI solutions that drive growth, efficiency, and innovation for global industry leaders.
          </p>
          <a
            href="#contact"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 inline-block"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
