import React, { useEffect } from 'react';
import { animationUtils } from '../utils/animations';
import { projects } from '../utils/data';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  useEffect(() => {
    // Initialize hover animations for project cards
    document.querySelectorAll('.project-card').forEach(card => {
      animationUtils.hover.projectCard(card);
    });
  }, []);

  const featuredProjects = projects.filter(project => project.featured).slice(0, 4);

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
        <div className="stagger-container grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card stagger-item group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="project-image relative aspect-video overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                  <span className="text-4xl font-sora font-bold text-gray-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Hover Overlay */}
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="project-title text-white text-xl font-sora font-bold mb-2">
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
                <h3 className="text-xl font-sora font-bold text-gray-900 mb-3">
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

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl shadow-lg shadow-dark-red/20"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <button className="btn-primary relative overflow-hidden group">
            <span className="relative z-10">View All Projects</span>
            <div className="btn-sheen absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
