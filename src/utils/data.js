// Project data
export const projects = [
  {
    id: 1,
    title: "Disruption Self-Service Engine",
    description: "C++ system enabling real-time flight disruption reaccommodation for 100,000+ passengers per batch.",
    longDescription: "At Amadeus, I developed fault-tolerant systems that process high-volume reaccommodation scenarios with rollback capabilities and cabin downgrade detection. This project significantly reduced manual intervention while improving real-time eligibility based on live flight delays.",
    tech: ["C++", "Microservices", "Jenkins", "CI/CD", "Git"],
    image: "/amadeus-project.jpg",
    github: "", // Internal project
    demo: "", // Internal project
    category: "Backend",
    featured: true,
    year: "2024"
  },
  {
    id: 2,
    title: "Contextual Authentication Service",
    description: "Security microservice to prevent malicious logins using contextual device data.",
    longDescription: "At Twilio, I built a contextual authentication system for Authy, leveraging device metadata and AWS DynamoDB for real-time fraud prevention. Achieved over 90% unit and integration test coverage using Go's native tools.",
    tech: ["Go", "AWS DynamoDB", "Security", "Go Testing", "Microservices"],
    image: "/twilio-auth.jpg",
    github: "", // Internal project
    demo: "", // Internal project
    category: "Security",
    featured: true,
    year: "2022"
  },
  {
    id: 3,
    title: "MetricsMed Platform",
    description: "Medical data platform with over 10 microservices and real-time analytics.",
    longDescription: "Developed and maintained 10+ backend microservices for a medical platform at IT270. Delivered 50+ high-priority features and bug fixes over two months, significantly improving system uptime and user satisfaction.",
    tech: ["Python", "Microservices", "PostgreSQL", "CI/CD", "Agile"],
    image: "/metricsmed.jpg",
    github: "", // Internal project
    demo: "", // Internal project
    category: "Healthcare",
    featured: false,
    year: "2024"
  },
  {
    id: 4,
    title: "VR Chess Game for Accessibility",
    description: "Interactive VR chess game with voice command support for physically impaired players.",
    longDescription: "Developed as a university project, this VR game in Unity (C#) allows users with physical disabilities to play chess using voice control. Focused on inclusive game design and immersive experience.",
    tech: ["C#", "Unity", "Voice API", "VR"],
    image: "/vr-chess.jpg",
    github: "https://github.com/nicolascalero/vr-chess",
    demo: "",
    category: "Games",
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
