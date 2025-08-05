import React, { useState, useEffect } from 'react';
import { initAnimations } from './utils/animations';

// Components
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ASCIIBackground from './components/ASCIIBackground';
import ThemeToggle from './components/ThemeToggle';

// Styles
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize animations after component mounts
    initAnimations();
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      {/* ASCII Background */}
      <ASCIIBackground />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      {/* Main Content */}
      <div className={`page-content ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
