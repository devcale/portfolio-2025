// Animation constants and configurations
export const ANIMATION_CONFIG = {
  durations: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
    preloader: 3.0
  },
  
  easing: {
    smooth: 'power2.out',
    bounce: 'elastic.out(1, 0.3)',
    snap: 'power3.inOut',
    gentle: 'power1.inOut'
  },
  
  stagger: {
    cards: 0.1,
    text: 0.02,
    items: 0.05
  },
  
  scroll: {
    trigger: '80%',
    end: '20%',
    scrub: true
  }
};

// Theme configuration
export const THEME_CONFIG = {
  colors: {
    light: {
      primary: '#fafafa',
      secondary: '#ffffff',
      text: '#1a1a1a',
      textSecondary: '#666666',
      accent: '#8B0000',
      accentLight: '#DC143C'
    },
    dark: {
      primary: '#1a1a1a',
      secondary: '#2d2d2d',
      text: '#ffffff',
      textSecondary: '#b0b0b0',
      accent: '#DC143C',
      accentLight: '#FF6B6B'
    }
  },
  
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
};

// Performance settings
export const PERFORMANCE_CONFIG = {
  lazyLoading: {
    rootMargin: '50px',
    threshold: 0.1
  },
  
  animations: {
    reducedMotion: false,
    respectUserPreferences: true
  },
  
  images: {
    quality: 85,
    formats: ['webp', 'jpg'],
    sizes: [400, 800, 1200, 1600]
  }
};

export default {
  ANIMATION_CONFIG,
  THEME_CONFIG,
  PERFORMANCE_CONFIG
};
