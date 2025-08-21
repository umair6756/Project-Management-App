// projectsData.js
export const sampleProjects = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured online shopping platform with payment integration and inventory management',
    status: 'in-progress',
    priority: 'high',
    progress: 65,
    budget: 25000,
    teamSize: 5,
    startDate: '2023-05-15',
    endDate: '2023-11-30',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1755264785187-021213668e14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://ecommerce-demo.example.com',
    repoUrl: 'https://github.com/example/ecommerce-platform',
    details: 'This project involves building a complete e-commerce solution with user authentication, product catalog, shopping cart, and payment processing. The platform will support multiple vendors with individual storefronts.',
    features: [
      {
        title: 'Product Catalog',
        description: 'Advanced product filtering and search functionality with infinite scrolling'
      },
      {
        title: 'Payment Integration',
        description: 'Secure checkout process with Stripe payment gateway'
      },
      {
        title: 'Inventory Management',
        description: 'Real-time stock tracking and low inventory alerts'
      }
    ],
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT'],
    tasks: [
      {
        title: 'Implement payment gateway',
        description: 'Integrate Stripe API for payments',
        completed: true,
        dueDate: '2023-07-15',
        priority: 'high'
      },
      {
        title: 'Build product search',
        description: 'Create search functionality with filters',
        completed: true,
        dueDate: '2023-08-01',
        priority: 'medium'
      },
      {
        title: 'Admin dashboard',
        description: 'Create vendor management interface',
        completed: false,
        dueDate: '2023-09-15',
        priority: 'high'
      }
    ],
     teamMembers: [
      {
        name: 'Sarah Johnson',
        role: 'Frontend Lead',
        skills: ['React', 'TypeScript', 'CSS'],
        avatar: '/avatars/sarah.jpg',
        hours: 32
      },
      {
        name: 'Michael Chen',
        role: 'Backend Developer',
        skills: ['Node.js', 'MongoDB', 'API Design'],
        avatar: '/avatars/michael.jpg',
        hours: 40
      },
      {
        name: 'David Wilson',
        role: 'UI/UX Designer',
        skills: ['Figma', 'Adobe XD', 'Prototyping'],
        avatar: '/avatars/david.jpg',
        hours: 24
      },
      {
        name: 'Emma Rodriguez',
        role: 'Full Stack Developer',
        skills: ['React', 'Python', 'AWS'],
        avatar: '/avatars/emma.jpg',
        hours: 36
      },
      {
        name: 'James Kim',
        role: 'DevOps Engineer',
        skills: ['Docker', 'Kubernetes', 'CI/CD'],
        avatar: '/avatars/james.jpg',
        hours: 20
      }
    ],
    documents: [
      {
        name: 'Project Specifications.pdf',
        type: 'pdf',
        size: '2.4 MB',
        uploaded: '2023-05-10',
        url: '#',
        uploadedBy: 'Sarah Johnson'
      },
      {
        name: 'Wireframes.sketch',
        type: 'design',
        size: '5.1 MB',
        uploaded: '2023-05-12',
        url: '#',
        uploadedBy: 'David Wilson'
      },
      {
        name: 'Technical Architecture.docx',
        type: 'document',
        size: '1.2 MB',
        uploaded: '2023-05-15',
        url: '#',
        uploadedBy: 'Michael Chen'
      },
      {
        name: 'User Research Findings.pdf',
        type: 'pdf',
        size: '3.7 MB',
        uploaded: '2023-05-18',
        url: '#',
        uploadedBy: 'Emma Rodriguez'
      },
      {
        name: 'API Documentation.md',
        type: 'code',
        size: '0.8 MB',
        uploaded: '2023-05-20',
        url: '#',
        uploadedBy: 'Michael Chen'
      }
    ],
    timeline: [
      {
        title: 'Project Kickoff',
        date: '2023-05-15',
        description: 'Initial meeting with stakeholders and project planning',
        completed: true
      },
      {
        title: 'UI Design Completed',
        date: '2023-06-20',
        description: 'All screens approved by client and ready for development',
        completed: true
      },
      {
        title: 'Backend API Complete',
        date: '2023-07-25',
        description: 'All API endpoints implemented and tested',
        completed: false
      },
      {
        title: 'Beta Launch',
        date: '2023-10-15',
        description: 'Limited release to test users for feedback collection',
        completed: false
      },
      {
        title: 'Full Launch',
        date: '2023-12-01',
        description: 'Public release and marketing campaign',
        completed: false
      }
    ]
  },
  {
    id: '2',
    title: 'Health & Fitness App',
    description: 'Mobile application for workout tracking and nutrition planning',
    status: 'completed',
    priority: 'medium',
    progress: 100,
    budget: 18000,
    teamSize: 4,
    startDate: '2023-01-10',
    endDate: '2023-06-30',
    tags: ['React Native', 'Firebase', 'HealthKit'],
    image: 'https://source.unsplash.com/random/800x450/?fitness',
    demoUrl: 'https://fitness-app.example.com',
    repoUrl: 'https://github.com/example/fitness-app',
    details: 'A cross-platform mobile application that helps users track workouts, monitor nutrition, and set fitness goals. Integrates with Apple Health and Google Fit for data synchronization.',
    features: [
      {
        title: 'Workout Tracking',
        description: 'Log exercises with sets, reps, and weights'
      },
      {
        title: 'Meal Planner',
        description: 'Create daily meal plans with nutrition breakdown'
      }
    ],
    technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit API'],
    tasks: [],
    teamMembers: [
      {
        name: 'Emily Rodriguez',
        role: 'Mobile Developer',
        skills: ['React Native', 'JavaScript', 'iOS']
      }
    ],
    documents: [],
    timeline: []
  },
  {
    id: '3',
    title: 'Corporate Website Redesign',
    description: 'Modern redesign of company website with CMS integration',
    status: 'pending',
    priority: 'low',
    progress: 15,
    budget: 12000,
    teamSize: 3,
    startDate: '2023-08-01',
    endDate: '2023-10-15',
    tags: ['WordPress', 'PHP', 'JavaScript'],
    image: 'https://source.unsplash.com/random/800x450/?website',
    demoUrl: 'https://website-redesign.example.com',
    repoUrl: 'https://github.com/example/website-redesign',
    details: 'Complete overhaul of corporate website with new branding, improved navigation, and content management system for marketing team to update content easily.',
    features: [
      {
        title: 'Responsive Design',
        description: 'Fully responsive layout for all devices'
      }
    ],
    technologies: ['WordPress', 'PHP', 'JavaScript', 'Sass'],
    tasks: [],
    teamMembers: [],
    documents: [],
    timeline: []
  },
  {
    id: '4',
    title: 'Inventory Management System',
    description: 'Enterprise solution for warehouse inventory tracking',
    status: 'in-progress',
    priority: 'high',
    progress: 40,
    budget: 45000,
    teamSize: 8,
    startDate: '2023-03-01',
    endDate: '2023-12-15',
    tags: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
    image: 'https://source.unsplash.com/random/800x450/?warehouse',
    demoUrl: 'https://inventory-system.example.com',
    repoUrl: 'https://github.com/example/inventory-system',
    details: 'Custom inventory management system with barcode scanning, real-time tracking, and reporting features for a large retail chain with multiple warehouse locations.',
    features: [
      {
        title: 'Barcode Scanning',
        description: 'Mobile app for scanning items in warehouse'
      },
      {
        title: 'Reporting Dashboard',
        description: 'Real-time analytics and reporting'
      }
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Docker'],
    tasks: [],
    teamMembers: [],
    documents: [],
    timeline: []
  },
  {
    id: '5',
    title: 'AI Chatbot Integration',
    description: 'Customer support chatbot with natural language processing',
    status: 'completed',
    priority: 'medium',
    progress: 100,
    budget: 32000,
    teamSize: 6,
    startDate: '2022-11-01',
    endDate: '2023-04-30',
    tags: ['Python', 'NLP', 'AWS'],
    image: 'https://source.unsplash.com/random/800x450/?ai,chatbot',
    demoUrl: 'https://chatbot.example.com',
    repoUrl: 'https://github.com/example/ai-chatbot',
    details: 'Implementation of an AI-powered chatbot for customer support that can handle common inquiries, route tickets, and provide 24/7 automated assistance.',
    features: [
      {
        title: 'Natural Language Processing',
        description: 'Understands customer intent from free-form text'
      },
      {
        title: 'Ticket Routing',
        description: 'Escalates complex issues to human agents'
      }
    ],
    technologies: ['Python', 'TensorFlow', 'AWS Lambda', 'Django'],
    tasks: [],
    teamMembers: [],
    documents: [],
    timeline: []
  }
];
export const calculateStats = (projects) => {
  const completed = projects.filter(p => p.status === 'completed').length;
  const inProgress = projects.filter(p => p.status === 'in-progress').length;
  const pending = projects.filter(p => p.status === 'pending').length;
  const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);
  const avgBudget = totalBudget / projects.length;
  const highPriority = projects.filter(p => p.priority === 'high').length;
  
  return {
    total: projects.length,
    completed,
    inProgress,
    pending,
    completionRate: Math.round((completed / projects.length) * 100),
    totalBudget,
    avgBudget,
    highPriority
  };
};