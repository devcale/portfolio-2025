import React, { useEffect } from 'react';
import { projects } from '../utils/data';
import disruptionImg from '../assets/projects/disruption.jpg';
import contextualImg from '../assets/projects/contextual.jpg';
import medicalImg from '../assets/projects/medical.jpg';
import wizardChessImg from '../assets/projects/wizardchess.png';

const projectImages = {
  'Disruption Self-Service Engine': disruptionImg,
  'Contextual Authentication Service': contextualImg,
  'MetricsMed Platform': medicalImg,
  'VR Chess Game for Accessibility': wizardChessImg
};

const Projects = () => {
  useEffect(() => {
    // Simple intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    // Observe all project cards
    document.querySelectorAll('.project-card').forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);



  return (
    <section className="projects py-20 px-4 bg-gray-50 fade-in-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-playfair">
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
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={projectImages[project.title]} 
                  alt={`${project.title} - ${project.company}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-white text-xl font-bold font-playfair">
                        {project.title}
                      </h3>
                      <span className="text-white/80 text-sm font-inter">
                        {project.company}
                      </span>
                      <div className="text-white/60 text-sm font-inter mt-2">
                        {project.longDescription}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 font-playfair">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 font-inter">
                    {project.company}
                  </span>
                </div>
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
