import React from 'react';
import portrait from '../assets/portrait.jpg';

const About = () => {
  return (
    <section className="about py-20 px-4 fade-in-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-playfair">
                About
              </h2>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-8 font-inter">
                Get to know me
              </p>
            </div>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-inter">
              <p>
                I'm a passionate software engineer and creative technologist based in Bogotá, Colombia. 
                With a deep love for crafting digital experiences that blend functionality with artistry, 
                I specialize in creating immersive web applications that tell stories and solve real problems.
              </p>
              
              <p>
                My journey in technology began with curiosity about how things work beneath the surface. 
                Today, I combine technical expertise with creative vision to build applications that not 
                only perform flawlessly but also create meaningful connections with users.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring the vibrant streets of Bogotá, 
                experimenting with new technologies, or contributing to open-source projects that 
                make the web a more accessible and beautiful place.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-800 font-playfair">5+</div>
                <div className="text-sm uppercase tracking-wider text-gray-600 font-inter">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-800 font-playfair">50+</div>
                <div className="text-sm uppercase tracking-wider text-gray-600 font-inter">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-800 font-playfair">15+</div>
                <div className="text-sm uppercase tracking-wider text-gray-600 font-inter">Technologies</div>
              </div>
            </div>
          </div>
          
          {/* Portrait */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden transform-gpu transition-transform duration-300 hover:scale-[1.02] hover:rotate-2">
              {/* Glass border container */}
              <div className="absolute inset-0 glass rounded-2xl"></div>
              
              {/* Image container with smaller border radius */}
              <div className="absolute inset-[3px] rounded-xl overflow-hidden">
                <img 
                  src={portrait} 
                  alt="Nicolás Calero"
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 glass-dark rounded-full p-6">
              <div className="text-center">
                <div className="text-sm font-bold text-white font-playfair">Let's Craft Together!</div>
                <div className="text-xs text-white/80 font-inter">Contact Details Below</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-light-red rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-8 -left-8 w-8 h-8 bg-dark-red rounded-full opacity-30 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
