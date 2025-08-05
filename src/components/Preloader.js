import React, { useEffect } from 'react';
import { animationUtils } from '../utils/animations';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const tl = animationUtils.preloader.init();
    
    tl.eventCallback('onComplete', () => {
      if (onComplete) onComplete();
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="preloader fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      {/* ASCII Grid Background */}
      <div className="ascii-grid"></div>
      
      {/* Logo Animation */}
      <div className="preloader-logo mb-8">
        <h1 className="text-6xl md:text-8xl font-sora font-bold text-gray-900">
          NC
        </h1>
      </div>
      
      {/* Loading Text */}
      <div className="preloader-text text-center">
        <p className="text-lg font-inter uppercase tracking-widest text-gray-600 mb-2">
          Nicolás Calero
        </p>
        <p className="text-sm font-inter uppercase tracking-wider text-gray-500">
          Loading Portfolio
        </p>
      </div>
      
      {/* Loading Bar */}
      <div className="preloader-text mt-8 w-64 h-1 bg-gray-200 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-dark-red to-light-red animate-pulse"></div>
      </div>
    </div>
  );
};

export default Preloader;
