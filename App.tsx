import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import ProjectSuccess from './components/ProjectSuccess.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Services from './components/Services.tsx';
import CaseStudies from './components/CaseStudies.tsx';
import Articles from './components/Articles.tsx';
import Clients from './components/Clients.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 font-sans leading-normal tracking-tight">
      <Header />
      <main>
        <Hero />
        <ProjectSuccess />
        <About />
        <Skills />
        <Services />
        <CaseStudies />
        <Articles />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;