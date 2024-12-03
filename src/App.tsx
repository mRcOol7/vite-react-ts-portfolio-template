import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import './index.css';
import Navbar from '../src/components/Navbar';
import ParticleBackground from '../src/components/ParticleBackground';
import HeroSection from '../src/components/HeroSection';
import SkillsSection from '../src/components/SkillsSection';
import ProjectsSection from '../src/components/ProjectsSection';
import ContactSection from '../src/components/ContactSection';
import Footer from '../src/components/Footer';
import Timeline from './components/Timeline';
import About from './components/AboutMe';
import Preloader from '../src/components/Preloader';
import Breadcrumbs from '../src/components/Breadcrumbs';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>('home');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections: string[] = ['home', 'about','skills', 'projects', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const absoluteTop = window.scrollY + top;
          const absoluteBottom = window.scrollY + bottom;

          if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
        {isLoading && <Preloader />}
        
        <ParticleBackground />
        <Navbar />
        <Breadcrumbs currentSection={currentSection} />
        
        <main className="pt-16 relative">
          <HeroSection id="home" />
          <About />
          <SkillsSection id="skills" />
          <Timeline id="timeline" onSectionChange={handleSectionChange} />
          <ProjectsSection id="projects" />
          <ContactSection id="contact" />
        </main>

        <Footer />
        
        {/* Decorative Elements */}
        <div className="fixed top-1/4 right-10 animate-float opacity-30">
          <Sparkles className="w-24 h-24 text-cyan-400" />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;