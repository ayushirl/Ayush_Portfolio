import {
  SkillCategory,
  ProjectItem,
  ExperienceItem,
  EducationItem,
  ContactFormValues,
  ContactFormErrors,
  ProjectCategory
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Ayush Kumar Mahato',
  handle: 'ayushirl',
  monogram: 'AKM/',
  headline: 'Software Engineer',
  rolePitch: 'Software Engineer building the next generation of scalable architectures, responsive web systems, and open-source software.',
  location: 'India',
  specialty: 'Full-Stack & Systems',
  availabilityBadge: 'AVAILABLE FOR SDE ROLES & INTERNSHIPS',
  email: 'byyayush@gmail.com',
  githubUrl: 'https://github.com/ayushirl',
  linkedinUrl: 'https://www.linkedin.com/in/ayush-kumar-mahato-6aa389281',
  avatarUrl: 'https://avatars.githubusercontent.com/u/201378049?v=4',
  quote: '"Technical rigor is the foundation; engineering empathy and system clarity turn code into lasting impact."',
  bioParagraph1: 'Passionate software engineer and active open-source contributor with deep curiosity for scalable distributed architectures and intuitive frontend experiences. I approach software through the lens of performance, maintainability, and clean code principles.',
  bioParagraph2: 'From contributing to major open-source repositories on GitHub to building end-to-end full-stack applications with React, Node.js, and TypeScript, I enjoy tackling complex architectural problems and optimizing developer experience.'
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Proficient' },
      { name: 'TypeScript', level: 'Proficient' },
      { name: 'Python', level: 'Proficient' },
      { name: 'C++', level: 'Intermediate' },
      { name: 'HTML5 / CSS3', level: 'Proficient' },
      { name: 'SQL', level: 'Proficient' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 'Proficient' },
      { name: 'Express.js', level: 'Proficient' },
      { name: 'RESTful APIs', level: 'Advanced' },
      { name: 'Authentication (JWT/OAuth)', level: 'Proficient' },
      { name: 'Server Architecture', level: 'Intermediate' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & UI Engineering',
    skills: [
      { name: 'React.js (v18/19)', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Responsive Web Design', level: 'Advanced' },
      { name: 'State Management', level: 'Proficient' },
      { name: 'Vite & Modern Tooling', level: 'Proficient' }
    ]
  },
  {
    id: 'tools-databases',
    title: 'Databases & Developer Tools',
    skills: [
      { name: 'PostgreSQL', level: 'Proficient' },
      { name: 'MongoDB', level: 'Proficient' },
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'Postman & API Testing', level: 'Proficient' },
      { name: 'Linux / Shell Scripting', level: 'Intermediate' }
    ]
  },
  {
    id: 'core',
    title: 'Core Methodologies',
    skills: [
      { name: 'Data Structures', level: 'Advanced' },
      { name: 'Algorithms', level: 'Advanced' },
      { name: 'OOP Principles', level: 'Expert' },
      { name: 'System Design Basics', level: 'Intermediate' },
      { name: 'Clean Code & Refactoring', level: 'Advanced' }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2025 – Present',
    role: 'Open Source Contributor',
    organization: 'GitHub & Developer Community',
    type: 'Open Source Development',
    points: [
      'Contributed to open-source software and curriculum repositories including freeCodeCamp with bug fixes, documentation improvements, and feature updates.',
      'Collaborated with maintainers and international developers through standard Git workflows, pull requests, and automated testing pipelines.',
      'Practiced industry-standard branching, code cleanliness, issue triage, and peer review methodologies.'
    ],
    techStack: ['Git', 'GitHub', 'JavaScript', 'TypeScript', 'Markdown', 'CI/CD']
  },
  {
    id: 'exp-2',
    period: '2024 – Present',
    role: 'Full-Stack Software Developer',
    organization: 'Independent Projects & Engineering',
    type: 'Full-Stack Development',
    points: [
      'Architected end-to-end web applications implementing responsive frontends in React and robust RESTful backends in Express/Node.js.',
      'Designed normalized relational schemas and NoSQL collections with fast indexing and transactional integrity.',
      'Engineered interactive real-time features and responsive UI interfaces optimized for high Core Web Vitals.'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL', 'MongoDB']
  },
  {
    id: 'exp-3',
    period: '2024 – 2025',
    role: 'Frontend Engineering & UI Systems',
    organization: 'Web Technology Initiatives',
    type: 'Web Development',
    points: [
      'Built modular, reusable component libraries adhering to WCAG accessibility guidelines and mobile-first responsive design.',
      'Integrated external REST APIs with graceful error handling, optimistic rendering, and offline caching.',
      'Created modern dark-themed interactive developer interfaces with high typographic hierarchy and micro-interactions.'
    ],
    techStack: ['React', 'Tailwind CSS', 'REST APIs', 'Vite', 'CSS Grid', 'Motion']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'freeCodeCamp Core Contributions',
    subtitle: 'Open Source Ecosystem & Developer Curriculum',
    description: "Active contributor to freeCodeCamp's open-source codebase and world-renowned developer curriculum, refining programming challenges, documentation, and web standards for millions of learners.",
    category: 'opensource',
    tags: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'Open Source', 'Git Workflow'],
    githubUrl: 'https://github.com/ayushirl/freeCodeCamp',
    demoUrl: 'https://contribute.freecodecamp.org',
    featured: true,
    architectureNotes: [
      'Curriculum challenge parsing and test runner integration',
      'Strict adherence to open-source code quality standards and monorepo structure',
      'Automated linting and unit test compliance across pull requests'
    ],
    keyFeatures: [
      'Bug fixes and algorithmic test improvements',
      'Documentation clarity enhancement for prospective contributors',
      'Multi-stage GitHub review process with core maintainers'
    ]
  },
  {
    id: 'proj-2',
    title: 'DevSync - Distributed Collaborative Workspace',
    subtitle: 'Full-Stack Web Architecture',
    description: 'A scalable real-time collaborative workspace featuring instant document synchronization, role-based project boards, and microservice-ready backend APIs.',
    category: 'fullstack',
    tags: ['React 19', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    githubUrl: 'https://github.com/ayushirl',
    demoUrl: 'https://github.com/ayushirl',
    featured: true,
    architectureNotes: [
      'Stateless Express API server communicating with PostgreSQL connection pool',
      'Optimistic state updates on the frontend for zero-latency user feedback',
      'JWT-based secure authentication with HTTP-only tokens and CSRF protection'
    ],
    keyFeatures: [
      'Interactive kanban and document management boards',
      'Real-time status updates and multi-user presence indicators',
      'Clean modular backend routes with input validation schemas'
    ]
  },
  {
    id: 'proj-3',
    title: 'AlgoForge - Interactive DSA Visualizer',
    subtitle: 'Interactive Computer Science Tool',
    description: 'An interactive algorithm visualizer demonstrating sorting methods, tree traversals, and pathfinding algorithms with step-by-step state playback and time complexity analysis.',
    category: 'frontend',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Data Structures', 'Algorithms'],
    githubUrl: 'https://github.com/ayushirl',
    demoUrl: 'https://github.com/ayushirl',
    featured: true,
    architectureNotes: [
      'Decoupled algorithm generator engines producing immutable execution frames',
      'Configurable speed controls and step-by-step debugger stepping',
      'Zero external visual dependencies—pure responsive HTML5/SVG canvas rendering'
    ],
    keyFeatures: [
      'Visual Dijkstra, A*, QuickSort, MergeSort, and Binary Search executions',
      'Dynamic speed, array size, and obstacle creation controls',
      'Theoretical vs real-world operational complexity comparisons'
    ]
  },
  {
    id: 'proj-4',
    title: 'API Sentinel - Microservices Health Monitor',
    subtitle: 'Backend & Systems Tooling',
    description: 'A lightweight observability dashboard for tracking uptime, endpoint latency, and HTTP response statuses across microservice clusters.',
    category: 'systems',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Chart.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ayushirl',
    demoUrl: 'https://github.com/ayushirl',
    featured: false,
    architectureNotes: [
      'Asynchronous ping worker checking registered endpoint URLs on interval cron',
      'Time-series storage in MongoDB with index-optimized lookups',
      'Event-driven alerting on consecutive error status codes'
    ],
    keyFeatures: [
      'Latency percentiles (p50, p95, p99) tracking',
      'Status code distribution breakdown (2xx, 4xx, 5xx)',
      'Exportable audit reports and webhook dispatch'
    ]
  },
  {
    id: 'proj-5',
    title: 'Developer Portfolio v2.0',
    subtitle: 'Modern High-Performance Web Portfolio',
    description: 'The portfolio website you are browsing now. Crafted with dark theme aesthetics, responsive grid design, fluid typography, and accessible interactive modules.',
    category: 'frontend',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    githubUrl: 'https://github.com/ayushirl',
    demoUrl: '#',
    featured: false,
    architectureNotes: [
      'Modular functional component hierarchy with strict TypeScript contracts',
      'Zero heavy runtime dependencies—blazing fast sub-second initial paint',
      'WCAG 2.1 AA accessible contrast ratios and keyboard navigation'
    ],
    keyFeatures: [
      'Dark mode aesthetic with subtle engineering grid backdrop',
      'Interactive project architecture inspect modal',
      'Working contact form with real-time validation and mailto fallback'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering / Information Technology',
    institution: 'Engineering Institute, India',
    period: 'Class of 2027',
    details: 'Focus on Data Structures, Algorithms, Database Systems, Computer Networks, and Software Engineering Principles.'
  }
];

export const RECOGNITIONS = [
  {
    title: 'Active Open Source Contributor',
    description: 'Consistently contributing code, fixing issues, and shipping improvements to developer community projects on GitHub (@ayushirl).',
    badge: 'Open Source'
  },
  {
    title: 'DSA & Algorithmic Problem Solving',
    description: 'Actively practicing complex Data Structures and Algorithms to master computational efficiency and competitive coding.',
    badge: 'Algorithms'
  },
  {
    title: 'Modern Full-Stack Architecture',
    description: 'Building end-to-end web architectures adhering to clean code standards, strict typing, and high-performance frontend practices.',
    badge: 'Engineering'
  }
];

// Pure Logic Functions (testable via unit tests)
export function filterProjects(projects: ProjectItem[], category: ProjectCategory): ProjectItem[] {
  if (category === 'all') return projects;
  return projects.filter(p => p.category === category);
}

export function searchSkills(categories: SkillCategory[], searchQuery: string): SkillCategory[] {
  const query = searchQuery.trim().toLowerCase();
  if (!query) return categories;

  return categories
    .map(category => ({
      ...category,
      skills: category.skills.filter(s =>
        s.name.toLowerCase().includes(query) || s.level.toLowerCase().includes(query)
      )
    }))
    .filter(category => category.skills.length > 0);
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  if (!values.email || !validateEmail(values.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!values.subject || values.subject.trim().length < 3) {
    errors.subject = 'Please enter a subject (at least 3 characters).';
  }

  if (!values.message || values.message.trim().length < 10) {
    errors.message = 'Please write a message of at least 10 characters.';
  }

  return errors;
}
