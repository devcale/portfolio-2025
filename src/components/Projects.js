import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    // Simple scroll animation for project cards
    gsap.utils.toArray('.project-card').forEach((card, index) => {
      gsap.from(card, {
        duration: 0.8,
        y: 50,
        opacity: 0,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, fully responsive e-commerce platform built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time analytics dashboard with machine learning insights",
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication",
      tech: ["React Native", "Node.js", "PostgreSQL", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 4,
      title: "IoT Smart Home System",
      description: "Complete IoT ecosystem for smart home automation and monitoring",
      tech: ["React", "Arduino", "Python", "MQTT"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section className="projects py-20 px-4 bg-gray-50 fade-in-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-gray-900 mb-6">
            Selected Projects
          </h2>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-8 font-inter">
            Recent Work & Case Studies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-dark-red to-light-red mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-500 font-sora">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-bold mb-2 font-sora">
                      {project.title}
                    </h3>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <a 
                        href={project.demo}
                        className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Demo</span>
                      </a>
                      <a 
                        href={project.github}
                        className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-sora">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed font-inter">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs uppercase tracking-wider bg-gray-100 text-gray-700 rounded-full font-inter"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-gradient-to-r from-red-800 to-red-600 text-white rounded-lg hover:from-red-900 hover:to-red-700 transition-all duration-300 transform hover:scale-105 font-inter">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
