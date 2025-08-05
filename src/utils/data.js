// Project data
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, fully responsive e-commerce platform built with React and Node.js, featuring real-time inventory management, payment processing, and admin dashboard.",
    longDescription: "This comprehensive e-commerce solution provides a seamless shopping experience with advanced features like real-time inventory tracking, multiple payment gateways, order management, and detailed analytics. Built with modern technologies for scalability and performance.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
    image: "/placeholder-project-1.jpg",
    github: "https://github.com/nicolascalero/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
    category: "Full Stack",
    featured: true,
    year: "2024"
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics dashboard with machine learning insights, predictive analytics, and interactive data visualizations.",
    longDescription: "An intelligent analytics platform that processes large datasets in real-time, applies machine learning algorithms for predictive insights, and presents data through beautiful, interactive visualizations. Features custom chart components and AI-driven recommendations.",
    tech: ["React", "Python", "TensorFlow", "D3.js", "FastAPI", "PostgreSQL"],
    image: "/placeholder-project-2.jpg",
    github: "https://github.com/nicolascalero/ai-analytics",
    demo: "https://analytics-dashboard-demo.vercel.app",
    category: "Data Science",
    featured: true,
    year: "2024"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.",
    longDescription: "A secure, feature-rich mobile banking application that prioritizes user security and experience. Includes biometric authentication, real-time transaction processing, budget tracking, investment portfolio management, and AI-powered financial insights.",
    tech: ["React Native", "Node.js", "PostgreSQL", "AWS", "Biometric SDK"],
    image: "/placeholder-project-3.jpg",
    github: "https://github.com/nicolascalero/mobile-banking",
    demo: "https://banking-app-demo.vercel.app",
    category: "Mobile",
    featured: true,
    year: "2023"
  },
  {
    id: 4,
    title: "IoT Smart Home System",
    description: "Complete IoT ecosystem for smart home automation, device monitoring, and intelligent energy management.",
    longDescription: "An integrated IoT platform that connects and manages smart home devices, provides real-time monitoring, automates routines based on user behavior, and optimizes energy consumption. Features a custom dashboard and mobile app for remote control.",
    tech: ["React", "Arduino", "Python", "MQTT", "InfluxDB", "Grafana"],
    image: "/placeholder-project-4.jpg",
    github: "https://github.com/nicolascalero/smart-home",
    demo: "https://smart-home-demo.vercel.app",
    category: "IoT",
    featured: false,
    year: "2023"
  },
  {
    id: 5,
    title: "Real-time Collaboration Tool",
    description: "Web-based collaboration platform with real-time editing, video conferencing, and project management features.",
    longDescription: "A comprehensive collaboration suite that enables teams to work together seamlessly with real-time document editing, integrated video conferencing, task management, and team analytics. Built for scalability and performance.",
    tech: ["React", "Socket.io", "WebRTC", "Node.js", "MongoDB"],
    image: "/placeholder-project-5.jpg",
    github: "https://github.com/nicolascalero/collaboration-tool",
    demo: "https://collab-demo.vercel.app",
    category: "Web App",
    featured: false,
    year: "2023"
  }
];

// Skills data
export const skillCategories = [
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      { name: "React / Next.js", level: 95, category: "framework" },
      { name: "JavaScript / TypeScript", level: 92, category: "language" },
      { name: "HTML5 / CSS3", level: 95, category: "markup" },
      { name: "GSAP / Framer Motion", level: 88, category: "animation" },
      { name: "Tailwind CSS / Styled Components", level: 90, category: "styling" },
      { name: "Vue.js / Nuxt.js", level: 78, category: "framework" },
      { name: "WebGL / Three.js", level: 75, category: "graphics" }
    ]
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js / Express", level: 90, category: "runtime" },
      { name: "Python / Django / FastAPI", level: 85, category: "language" },
      { name: "PostgreSQL / MongoDB", level: 87, category: "database" },
      { name: "GraphQL / REST APIs", level: 89, category: "api" },
      { name: "Redis / ElasticSearch", level: 80, category: "database" },
      { name: "Microservices Architecture", level: 82, category: "architecture" }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      { name: "AWS / Azure", level: 83, category: "cloud" },
      { name: "Docker / Kubernetes", level: 80, category: "containerization" },
      { name: "CI/CD Pipelines", level: 85, category: "automation" },
      { name: "Terraform / CloudFormation", level: 75, category: "iac" },
      { name: "Monitoring & Logging", level: 78, category: "observability" }
    ]
  },
  {
    title: "Design & Creative",
    icon: "🎨",
    skills: [
      { name: "UI/UX Design", level: 88, category: "design" },
      { name: "Figma / Adobe XD", level: 92, category: "tool" },
      { name: "Adobe Creative Suite", level: 80, category: "tool" },
      { name: "Motion Design", level: 85, category: "animation" },
      { name: "User Research", level: 75, category: "research" }
    ]
  }
];

// Experience data
export const experiences = [
  {
    year: "2023 - Present",
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    location: "Bogotá, Colombia",
    description: "Leading frontend development for enterprise applications, mentoring junior developers, and architecting scalable solutions using React, Node.js, and cloud technologies.",
    highlights: [
      "Led development of a microservices architecture serving 100k+ users",
      "Improved application performance by 40% through optimization",
      "Mentored 5 junior developers in modern web development practices",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ],
    tech: ["React", "Node.js", "AWS", "Docker", "GraphQL"]
  },
  {
    year: "2021 - 2023",
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    location: "Bogotá, Colombia",
    description: "Developed and maintained web applications and mobile solutions, working closely with design and product teams to deliver exceptional user experiences.",
    highlights: [
      "Built 15+ web applications using React and Node.js",
      "Developed mobile apps with React Native for iOS and Android",
      "Collaborated with UX team to improve user engagement by 35%",
      "Integrated third-party APIs and payment systems"
    ],
    tech: ["React", "React Native", "Python", "PostgreSQL", "AWS"]
  },
  {
    year: "2019 - 2021",
    title: "Frontend Developer",
    company: "Creative Agency",
    location: "Bogotá, Colombia",
    description: "Created interactive websites and digital experiences for various clients, focusing on animation, performance, and responsive design.",
    highlights: [
      "Developed 20+ client websites with custom animations",
      "Achieved 95+ PageSpeed scores on all projects",
      "Specialized in GSAP animations and WebGL experiences",
      "Worked with international clients across various industries"
    ],
    tech: ["JavaScript", "GSAP", "Three.js", "WordPress", "SCSS"]
  }
];

// Social links
export const socialLinks = [
  {
    name: 'Email',
    url: 'mailto:nicolas.calero@example.com',
    icon: 'Mail',
    label: 'nicolas.calero@example.com'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/nicolascalero',
    icon: 'Github',
    label: '@nicolascalero'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/nicolascalero',
    icon: 'Linkedin',
    label: '/in/nicolascalero'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/nicolascalero',
    icon: 'Twitter',
    label: '@nicolascalero'
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/nicolascalero',
    icon: 'Dribbble',
    label: '@nicolascalero'
  }
];

// Site metadata
export const siteMetadata = {
  title: "Nicolás Calero - Software Engineer & Creative Technologist",
  description: "Portfolio of Nicolás Calero, a software engineer and creative technologist from Bogotá, Colombia, specializing in React, GSAP animations, and modern web development.",
  author: "Nicolás Calero",
  location: "Bogotá, Colombia",
  email: "nicolas.calero@example.com",
  phone: "+57 300 123 4567",
  website: "https://nicolascalero.dev",
  keywords: ["Software Engineer", "Creative Technologist", "React Developer", "GSAP Animations", "Web Development", "Bogotá"],
  image: "/og-image.jpg"
};
