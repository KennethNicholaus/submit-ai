import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans leading-normal tracking-tight">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <CaseStudies />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;