import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "GSAP / Framer Motion", level: 85 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js / Express", level: 88 },
        { name: "Python / Django", level: 82 },
        { name: "PostgreSQL / MongoDB", level: 85 },
        { name: "GraphQL / REST APIs", level: 87 },
        { name: "AWS / Docker", level: 80 }
      ]
    },
    {
      title: "Creative & Design",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Adobe Creative Suite", level: 78 },
        { name: "Figma / Sketch", level: 90 },
        { name: "3D Graphics / WebGL", level: 75 },
        { name: "Motion Design", level: 80 }
      ]
    }
  ];

  const tools = [
    "React", "Node.js", "Python", "TypeScript", "GSAP", "Three.js",
    "Docker", "AWS", "MongoDB", "PostgreSQL", "Figma", "Adobe XD"
  ];

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
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center font-playfair">
            Professional Journey
          </h3>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                year: "2023 - Present",
                title: "Senior Software Engineer",
                company: "Tech Innovators Inc.",
                description: "Leading frontend development and mentoring junior developers"
              },
              {
                year: "2021 - 2023",
                title: "Full Stack Developer",
                company: "Digital Solutions Co.",
                description: "Developed scalable web applications and mobile solutions"
              },
              {
                year: "2019 - 2021",
                title: "Frontend Developer",
                company: "Creative Agency",
                description: "Created interactive websites and digital experiences"
              }
            ].map((experience, index) => (
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
                  <div className="text-sm text-red-800 mb-2 font-inter">
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
