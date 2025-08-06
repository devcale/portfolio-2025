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


// Favorite tools and technologies
export const favoriteTools = [
  "C++",
  "Go",
  "Python",
  "React",
  "Jenkins",
  "DynamoDB",
  "PostgreSQL",
  "Microservices",
  "CI/CD",
  "Git",
  "Unity"
];

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      { name: "React / Next.js", level: 85, category: "framework" },
      { name: "HTML5 / CSS3", level: 90, category: "markup" },
      { name: "GSAP / Framer Motion", level: 85, category: "animation" },
      { name: "Tailwind CSS", level: 85, category: "styling" }
    ]
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "C++ / Go / Python / Java", level: 90, category: "language" },
      { name: "Flask / FastAPI / Node.js", level: 80, category: "framework" },
      { name: "PostgreSQL / DynamoDB / MongoDB", level: 85, category: "database" },
      { name: "Jenkins / Git / CI/CD", level: 85, category: "devops" }
    ]
  },
  {
    title: "Architecture & Tooling",
    icon: "🧱",
    skills: [
      { name: "Microservices Architecture", level: 85, category: "architecture" },
      { name: "Test-Driven Development (TDD)", level: 80, category: "testing" },
      { name: "Continuous Integration & Delivery", level: 85, category: "automation" },
      { name: "Source Control (Git)", level: 90, category: "tools" }
    ]
  }
];

// Experience data
export const experiences = [
  {
    year: "2024 - Present",
    title: "Software Development Engineer",
    company: "Amadeus",
    location: "Bogotá, Colombia",
    description: "Developed fault-tolerant systems for real-time airline disruption reaccommodation, improving eligibility logic and batch processing.",
    highlights: [
      "Reduced manual processing with self-service downgrade detection",
      "Processed 100k+ passengers per batch with rollback retry mechanism",
      "Integrated flight delay eligibility logic into real-time systems",
      "Maintained CI/CD pipelines and improved test automation"
    ],
    tech: ["C++", "Jenkins", "CI/CD", "Microservices", "Git"]
  },
  {
    year: "2023 - 2024",
    title: "Software Developer",
    company: "IT270 - Backend Development Team",
    location: "Bogotá, Colombia",
    description: "Maintained 10+ microservices for a medical platform, delivering rapid fixes and enhancements to boost system stability.",
    highlights: [
      "Completed 50+ high-priority features and fixes in 2 months",
      "Reduced system downtime and improved user satisfaction",
      "Implemented cross-functional process improvements"
    ],
    tech: ["Python", "PostgreSQL", "Agile", "CI/CD"]
  },
  {
    year: "2022",
    title: "Software Engineer Intern",
    company: "Twilio",
    location: "Remote (US-based)",
    description: "Built contextual authentication service for Authy, integrating device-based detection and AWS-hosted storage.",
    highlights: [
      "90%+ test coverage using Go’s native testing tools",
      "Improved performance with optimized DynamoDB usage",
      "Contributed to secure login detection logic"
    ],
    tech: ["Go", "DynamoDB", "Security", "Unit Testing"]
  }
];

// Social links
export const socialLinks = [
  {
    name: 'Email',
    url: 'mailto:nicolas.calero1@gmail.com',
    icon: 'Mail',
    label: 'nicolas.calero1@gmail.com'
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
  }
];

// Site metadata
export const siteMetadata = {
  title: "Nicolás Calero - Software Engineer & Creative Technologist",
  description: "Portfolio of Nicolás Calero, a software engineer from Bogotá, Colombia, specialized in backend systems, fault tolerance, and creative technology using React, C++, Go, and GSAP.",
  author: "Nicolás Calero",
  location: "Bogotá, Colombia",
  email: "nicolas.calero1@gmail.com",
  phone: "+57 318 364 9884",
  website: "https://devcale.github.io",
  keywords: [
    "Software Engineer", "Creative Technologist", "C++ Developer", "Go Developer",
    "React Developer", "Microservices", "GSAP", "Bogotá", "Fault Tolerance", "Amadeus", "Twilio"
  ],
  image: "/og-image.jpg"
};
