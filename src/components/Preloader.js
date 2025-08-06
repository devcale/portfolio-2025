import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Simple preloader animation
    tl.from('.preloader-logo', {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      ease: 'power2.out'
    })
    .from('.preloader-text', {
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: 'power2.out'
    }, '-=0.5')
    .to('.preloader', {
      duration: 0.8,
      y: '-100%',
      ease: 'power2.inOut',
      delay: 1
    })
    .call(() => {
      if (onComplete) onComplete();
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="preloader fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      {/* Logo Animation */}
      <div className="preloader-logo mb-8">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 font-sora">
          NC
        </h1>
      </div>
      
      {/* Loading Text */}
      <div className="preloader-text text-center">
        <p className="text-lg uppercase tracking-widest text-gray-600 mb-2 font-inter">
          Nicolás Calero
        </p>
        <p className="text-sm uppercase tracking-wider text-gray-500 font-inter">
          Loading Portfolio
        </p>
      </div>
      
      {/* Loading Bar */}
      <div className="mt-8 w-64 h-1 bg-gray-200 overflow-hidden rounded">
        <div className="h-full bg-gradient-to-r from-red-800 to-red-600 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Preloader;
