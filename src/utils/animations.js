import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animation Utilities
export const animationUtils = {
  // Preloader animations
  preloader: {
    init() {
      const tl = gsap.timeline();
      
      // Animate preloader elements
      tl.from('.preloader-logo', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power3.out'
      })
      .from('.preloader-text', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.5')
      .to('.preloader', {
        duration: 1,
        y: '-100%',
        ease: 'power3.inOut',
        delay: 2
      });
      
      return tl;
    }
  },

  // Split text animation
  splitText: {
    init(element, options = {}) {
      const {
        duration = 1,
        stagger = 0.02,
        ease = 'power3.out',
        delay = 0
      } = options;

      // Split text into individual characters
      const text = element.textContent;
      element.innerHTML = '';
      
      [...text].forEach(char => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.className = 'split-char';
        element.appendChild(span);
      });

      // Animate characters
      return gsap.from(element.querySelectorAll('.split-char'), {
        duration,
        y: '100%',
        rotation: 5,
        opacity: 0,
        stagger,
        ease,
        delay
      });
    }
  },

  // Hero section animations
  hero: {
    init() {
      const tl = gsap.timeline({ delay: 3.5 }); // After preloader
      
      // Animate hero title
      tl.from('.hero-title', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power3.out'
      })
      .from('.hero-subtitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.5')
      .from('.hero-scroll', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.3');

      // Scroll indicator animation
      gsap.to('.scroll-indicator', {
        y: 10,
        duration: 1.5,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true
      });

      return tl;
    }
  },

  // Scroll-triggered animations
  scrollAnimations: {
    init() {
      // Fade in sections
      gsap.utils.toArray('.fade-in-section').forEach(section => {
        gsap.from(section, {
          duration: 1.5,
          y: 100,
          opacity: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Stagger animations for cards
      gsap.utils.toArray('.stagger-container').forEach(container => {
        const items = container.querySelectorAll('.stagger-item');
        
        gsap.from(items, {
          duration: 0.8,
          y: 50,
          opacity: 0,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Parallax backgrounds
      gsap.utils.toArray('.parallax-bg').forEach(bg => {
        gsap.to(bg, {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: bg,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }
  },

  // Hover animations
  hover: {
    // Project card hover
    projectCard(element) {
      const image = element.querySelector('.project-image');
      const overlay = element.querySelector('.project-overlay');
      const title = element.querySelector('.project-title');

      const hoverIn = gsap.timeline({ paused: true });
      
      hoverIn
        .to(image, {
          duration: 0.5,
          scale: 1.1,
          ease: 'power2.out'
        })
        .to(overlay, {
          duration: 0.3,
          opacity: 1,
          ease: 'power2.out'
        }, 0)
        .from(title, {
          duration: 0.5,
          y: 30,
          opacity: 0,
          ease: 'power2.out'
        }, 0.2);

      element.addEventListener('mouseenter', () => hoverIn.play());
      element.addEventListener('mouseleave', () => hoverIn.reverse());

      return hoverIn;
    },

    // Button hover with sheen effect
    button(element) {
      const sheen = element.querySelector('.btn-sheen');
      
      element.addEventListener('mouseenter', () => {
        gsap.to(element, {
          duration: 0.3,
          scale: 1.05,
          ease: 'power2.out'
        });
        
        if (sheen) {
          gsap.fromTo(sheen, {
            x: '-100%'
          }, {
            duration: 0.6,
            x: '100%',
            ease: 'power2.out'
          });
        }
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          duration: 0.3,
          scale: 1,
          ease: 'power2.out'
        });
      });
    }
  },

  // Page transition animations
  pageTransition: {
    in() {
      const tl = gsap.timeline();
      
      tl.from('.page-content', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
      });

      return tl;
    },

    out() {
      const tl = gsap.timeline();
      
      tl.to('.page-content', {
        duration: 0.5,
        y: -50,
        opacity: 0,
        ease: 'power3.in'
      });

      return tl;
    }
  },

  // Custom cursor animation
  cursor: {
    init() {
      const cursor = document.querySelector('.custom-cursor');
      if (!cursor) return;

      let mouseX = 0;
      let mouseY = 0;
      let cursorX = 0;
      let cursorY = 0;

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      // Smooth cursor following
      gsap.ticker.add(() => {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        gsap.set(cursor, {
          x: cursorX,
          y: cursorY
        });
      });

      // Hover effects
      document.querySelectorAll('a, button, .interactive').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover');
        });
      });
    }
  },

  // ASCII Grid background animation
  asciiGrid: {
    init() {
      const grid = document.querySelector('.ascii-grid');
      if (!grid) return;

      const chars = ['█', '▓', '▒', '░', '▄', '▀', '■', '□', '▪', '▫'];
      const rows = 50;
      const cols = 100;

      // Generate grid content
      let gridContent = '';
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          gridContent += chars[Math.floor(Math.random() * chars.length)];
        }
        gridContent += '\n';
      }
      
      grid.textContent = gridContent;

      // Animate grid opacity based on mouse position
      document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        gsap.to(grid, {
          duration: 0.5,
          opacity: 0.02 + (x * y * 0.08),
          ease: 'power2.out'
        });
      });

      // Periodic grid updates
      setInterval(() => {
        const randomChars = Math.floor(Math.random() * 100);
        for (let i = 0; i < randomChars; i++) {
          const randomIndex = Math.floor(Math.random() * gridContent.length);
          const randomChar = chars[Math.floor(Math.random() * chars.length)];
          gridContent = gridContent.substring(0, randomIndex) + randomChar + gridContent.substring(randomIndex + 1);
        }
        grid.textContent = gridContent;
      }, 2000);
    }
  }
};

// Initialize all animations
export const initAnimations = () => {
  // Set up ScrollTrigger defaults
  ScrollTrigger.defaults({
    toggleActions: 'play none none reverse',
    scroller: window
  });

  // Initialize scroll animations
  animationUtils.scrollAnimations.init();
  
  // Initialize cursor
  animationUtils.cursor.init();
  
  // Initialize ASCII grid
  animationUtils.asciiGrid.init();
};

export default animationUtils;
