import React, { useEffect, useRef } from 'react';
import { animationUtils } from '../utils/animations';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Initialize hero animations
    const tl = animationUtils.hero.init();
    
    // Split text animation for title
    if (titleRef.current) {
      animationUtils.splitText.init(titleRef.current, {
        delay: 3.5,
        stagger: 0.05
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="hero relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* ASCII Grid Background */}
      <div className="ascii-grid"></div>
      
      {/* Parallax Background */}
      <div className="parallax-bg absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Hero Title */}
        <h1 
          ref={titleRef}
          className="hero-title text-5xl md:text-7xl lg:text-8xl font-sora font-bold text-gray-900 mb-6 leading-tight"
        >
          Nicolás Calero
        </h1>
        
        {/* Hero Subtitle */}
        <div className="hero-subtitle space-y-2">
          <p className="text-xl md:text-2xl font-inter text-gray-700 mb-2">
            Software Engineer & Creative Technologist
          </p>
          <p className="text-lg font-inter text-gray-600 uppercase tracking-wider">
            From Bogotá, Colombia
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="hero-cta mt-12">
          <button className="btn-primary relative overflow-hidden group">
            <span className="relative z-10">View My Work</span>
            <div className="btn-sheen absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="scroll-indicator flex flex-col items-center text-gray-600">
          <span className="text-xs uppercase tracking-wider mb-2 font-inter">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-dark-red rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-light-red rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-dark-red rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
