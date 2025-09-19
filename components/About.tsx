import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/70 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">About Us</h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              SUBMIT-AI is a premier consultancy specializing in AI-driven transformation for enterprise clients. With a proven track record of delivering innovative solutions, we partner with industry leaders to unlock the full potential of artificial intelligence.
            </p>
            <p>
              Our team of experts combines deep technical knowledge with strategic business acumen to tackle complex challenges, from developing global AI roadmaps to executing large-scale project delivery. We are committed to ethical AI practices, ensuring data privacy and robust governance in every engagement.
            </p>
            <p>
              We pride ourselves on our ability to drive not just technological change, but also the organizational and cultural shifts necessary for sustained success in the age of AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;