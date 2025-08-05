import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Create theme transition animation
    const tl = gsap.timeline();
    
    // Create overlay for smooth transition
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-50 pointer-events-none';
    overlay.style.background = newTheme ? '#1a1a1a' : '#fafafa';
    overlay.style.opacity = '0';
    document.body.appendChild(overlay);

    tl.to(overlay, {
      duration: 0.3,
      opacity: 1,
      ease: 'power2.inOut'
    })
    .call(() => {
      // Apply theme changes
      document.documentElement.classList.toggle('dark', newTheme);
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      
      // Update CSS variables
      if (newTheme) {
        document.documentElement.style.setProperty('--bg-primary', '#1a1a1a');
        document.documentElement.style.setProperty('--bg-secondary', '#2d2d2d');
        document.documentElement.style.setProperty('--text-primary', '#ffffff');
        document.documentElement.style.setProperty('--text-secondary', '#b0b0b0');
      } else {
        document.documentElement.style.setProperty('--bg-primary', '#fafafa');
        document.documentElement.style.setProperty('--bg-secondary', '#ffffff');
        document.documentElement.style.setProperty('--text-primary', '#1a1a1a');
        document.documentElement.style.setProperty('--text-secondary', '#666666');
      }
    })
    .to(overlay, {
      duration: 0.3,
      opacity: 0,
      ease: 'power2.inOut'
    })
    .call(() => {
      document.body.removeChild(overlay);
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-40 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-gray-900 transition-all duration-300 ${
            isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-gray-900 transition-all duration-300 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
