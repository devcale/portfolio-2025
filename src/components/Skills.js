import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillCategories, favoriteTools, experiences } from '../utils/data';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
      const percentage = bar.dataset.percentage;
      const fill = bar.querySelector('.skill-fill');
      
      if (fill) {
        gsap.fromTo(fill, {
          width: '0%'
        }, {
          width: `${percentage}%`,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      }
    });
  }, []);



  return (
    <section className="skills py-20 px-4 fade-in-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-playfair">
            Skills & Expertise
          </h2>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-8 font-inter">
            Technologies & Tools
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-dark-red to-light-red mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="text-xl font-bold text-gray-900 mb-6 font-playfair">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-700 font-inter">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 font-inter">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div 
                      className="skill-bar h-2 bg-gray-200 rounded-full overflow-hidden"
                      data-percentage={skill.level}
                    >
                      <div 
                        className="skill-fill h-full bg-gradient-to-r from-red-800 to-red-600 transition-all duration-1000 ease-out"
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Cloud */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-playfair">
            Favorite Tools & Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {favoriteTools.map((tool, index) => (
              <div 
                key={index}
                className="skill-item px-6 py-3 bg-white shadow-lg rounded-full hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <span className="text-sm font-inter text-gray-700 group-hover:text-dark-red transition-colors">
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center font-playfair">
            Professional Journey
          </h3>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <div key={index} className="experience-item flex space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-red-800 rounded-full mt-1"></div>
                  {index < 2 && <div className="w-0.5 h-16 bg-gray-300 ml-1.5 mt-2"></div>}
                </div>
                
                <div className="flex-grow">
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-1 font-inter">
                    {experience.year}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1 font-playfair">
                    {experience.title}
                  </h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-red-800 font-inter">
                      {experience.company}
                    </span>
                    {experience.team && (
                      <>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-600 font-inter">
                          {experience.team}
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-gray-600 font-inter">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {experience.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
