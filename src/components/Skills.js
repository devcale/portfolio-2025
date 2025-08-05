import React, { useEffect } from 'react';
import { animationUtils } from '../utils/animations';
import { skillCategories, experiences } from '../utils/data';

const Skills = () => {
  useEffect(() => {
    // Initialize skill animations
    document.querySelectorAll('.skill-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        animationUtils.hover.button(item);
      });
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
      const percentage = bar.dataset.percentage;
      
      // Animate skill bar fill
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const fill = entry.target.querySelector('.skill-fill');
            if (fill) {
              fill.style.width = `${percentage}%`;
            }
          }
        });
      });
      
      observer.observe(bar);
    });
  }, []);

  const tools = skillCategories.flatMap(category => 
    category.skills.slice(0, 3).map(skill => skill.name.split(' / ')[0])
  );

  return (
    <section className="skills py-20 px-4 fade-in-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-8 font-inter">
            Technologies & Tools
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-dark-red to-light-red mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="stagger-container grid lg:grid-cols-3 gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="stagger-item">
              <h3 className="text-xl font-sora font-bold text-gray-900 mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-inter text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-xs font-inter text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div 
                      className="skill-bar h-2 bg-gray-200 rounded-full overflow-hidden"
                      data-percentage={skill.level}
                    >
                      <div 
                        className="skill-fill h-full bg-gradient-to-r from-dark-red to-light-red transition-all duration-1000 ease-out"
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
          <h3 className="text-2xl font-sora font-bold text-gray-900 mb-8">
            Favorite Tools & Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
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
          <h3 className="text-2xl font-sora font-bold text-gray-900 mb-12 text-center">
            Professional Journey
          </h3>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <div key={index} className="stagger-item flex space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-dark-red rounded-full mt-1"></div>
                  {index < 2 && <div className="w-0.5 h-16 bg-gray-300 ml-1.5 mt-2"></div>}
                </div>
                
                <div className="flex-grow">
                  <div className="text-sm font-inter text-gray-500 uppercase tracking-wider mb-1">
                    {experience.year}
                  </div>
                  <h4 className="text-lg font-sora font-bold text-gray-900 mb-1">
                    {experience.title}
                  </h4>
                  <div className="text-sm font-inter text-dark-red mb-2">
                    {experience.company}
                  </div>
                  <p className="text-gray-600 font-inter">
                    {experience.description}
                  </p>
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
