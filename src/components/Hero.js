import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (!hero || !title || !subtitle) return;

    // Set initial states
    gsap.set([title, subtitle], { opacity: 0, y: 50 });

    // Create animation timeline
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.to(title, {
      duration: 1.2,
      y: 0,
      opacity: 1,
      ease: 'power3.out'
    })
    .to(subtitle, {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: 'power2.out'
    }, '-=0.6');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={heroRef} className="hero relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Hero Title */}
        <h1 
          ref={titleRef}
          className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight font-sora"
        >
          Nicolás Calero
        </h1>
        
        {/* Hero Subtitle */}
        <div ref={subtitleRef} className="hero-subtitle space-y-4">
          <p className="text-xl md:text-2xl text-gray-700 mb-2 font-inter">
            Software Engineer & Creative Technologist
          </p>
          <p className="text-lg text-gray-600 uppercase tracking-wider font-inter">
            From Bogotá, Colombia
          </p>
          
          {/* CTA Button */}
          <div className="mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-red-800 to-red-600 text-white rounded-lg hover:from-red-900 hover:to-red-700 transition-all duration-300 transform hover:scale-105 font-inter">
              View My Work
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600">
        <div className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-wider mb-2 font-inter">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
