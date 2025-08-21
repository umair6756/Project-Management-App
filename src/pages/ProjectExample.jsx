import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ProjectExample = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFeatures, setExpandedFeatures] = useState([]);
  const [project] = useState({
    name: 'E-Commerce Platform Redesign',
    details: 'A complete redesign of our flagship e-commerce platform with improved user experience, modern design system, and enhanced performance. The project includes a new mobile app, updated admin dashboard, and integration with our logistics partners.',
    features: [
      {
        title: 'Advanced Product Filtering',
        description: 'Multi-level filtering system with real-time results, price range sliders, and color/size selectors. Includes saved filter preferences for returning customers.'
      },
      {
        title: 'One-Click Checkout',
        description: 'Streamlined checkout process with saved payment methods, address autocomplete, and order summary. Reduces cart abandonment by 35%.'
      },
      {
        title: 'Personalized Recommendations',
        description: 'AI-powered product recommendations based on browsing history, purchase patterns, and similar customer profiles. Increases average order value by 22%.'
      },
      {
        title: 'Responsive Design',
        description: 'Fully responsive across all devices with adaptive images, touch-friendly interfaces, and optimized performance on mobile networks.'
      }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'GraphQL', 'Jest', 'Docker'],
    tasks: [
      {
        title: 'Implement user authentication',
        description: 'Create secure login/signup flow with JWT tokens and social media options',
        completed: true,
        dueDate: '2023-06-15',
        priority: 'high',
        tags: ['backend', 'security']
      },
      {
        title: 'Design product detail page',
        description: 'Create UI for product display with image gallery, reviews, and specifications',
        completed: true,
        dueDate: '2023-06-22',
        priority: 'medium',
        tags: ['frontend', 'design']
      },
      {
        title: 'Setup CI/CD pipeline',
        description: 'Configure automated testing and deployment process',
        completed: false,
        dueDate: '2023-07-10',
        priority: 'high',
        tags: ['devops', 'testing']
      },
      {
        title: 'Optimize database queries',
        description: 'Improve performance of frequently accessed data',
        completed: false,
        dueDate: '2023-07-18',
        priority: 'medium',
        tags: ['backend', 'performance']
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
  });

  const toggleFeatureExpand = (index) => {
    if (expandedFeatures.includes(index)) {
      setExpandedFeatures(expandedFeatures.filter(i => i !== index));
    } else {
      setExpandedFeatures([...expandedFeatures, index]);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf':
        return <FiIcons.FiFileText className="text-red-500" />;
      case 'design':
        return <FiIcons.FiLayout className="text-purple-500" />;
      case 'code':
        return <FiIcons.FiCode className="text-blue-500" />;
      default:
        return <FiIcons.FiFile className="text-gray-500" />;
    }
  };

  // Analytics data
  const progressData = {
    labels: ['Planning', 'Design', 'Development', 'Testing', 'Deployment'],
    datasets: [
      {
        label: 'Completion %',
        data: [100, 100, 65, 30, 5],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)'
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(139, 92, 246)',
          'rgb(16, 185, 129)',
          'rgb(245, 158, 11)',
          'rgb(239, 68, 68)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const timelineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [12, 19, 8, 15, 24, 32, 28],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.3,
        fill: true,
      },
      {
        label: 'Tasks Created',
        data: [18, 25, 12, 20, 28, 35, 30],
        borderColor: 'rgb(139, 92, 246)',
        backgroundColor: 'rgba(139, 92, 246, 0.2)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const budgetData = {
    labels: ['Development', 'Design', 'Marketing', 'Infrastructure', 'Testing'],
    datasets: [
      {
        label: 'Budget Allocation',
        data: [45, 20, 15, 12, 8],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FiIcons.FiLayers /> },
    { id: 'tasks', label: 'Tasks', icon: <FiIcons.FiCheckCircle /> },
    { id: 'team', label: 'Team', icon: <FiIcons.FiUsers /> },
    { id: 'documents', label: 'Documents', icon: <FiIcons.FiFolder /> },
    { id: 'timeline', label: 'Timeline', icon: <FiIcons.FiCalendar /> },
    { id: 'analytics', label: 'Analytics', icon: <FiIcons.FiBarChart /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">{project.name}</h1>
          <p className="text-slate-600 mt-2">Project Dashboard & Management</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
          <div className="flex border-b border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 text-sm font-medium transition-all ${activeTab === tab.id ? 'text-blue-500 border-b-2 border-blue-500' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                    <FiIcons.FiLayers className="mr-2 text-blue-500" />
                    Project Details
                  </h3>
                  <div className="prose max-w-none text-slate-600">
                    <p>{project.details || 'No additional details provided for this project.'}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                    <FiIcons.FiStar className="mr-2 text-blue-500" />
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features?.length > 0 ? (
                      project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -5 }}
                          className="bg-slate-50 p-4 rounded-xl border border-slate-200 transition-all"
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-blue-100 text-blue-600 flex-shrink-0">
                              <FiIcons.FiStar />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <h4 className="font-medium text-slate-800">{feature.title}</h4>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => toggleFeatureExpand(index)}
                                  className="text-slate-500 hover:text-blue-500"
                                >
                                  {expandedFeatures.includes(index) ? <FiIcons.FiMinus /> : <FiIcons.FiChevronRight />}
                                </motion.button>
                              </div>
                              <AnimatePresence>
                                {expandedFeatures.includes(index) && (
                                  <motion.p
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="text-sm text-slate-600 mt-1 overflow-hidden"
                                  >
                                    {feature.description}
                                  </motion.p>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <p className="text-slate-600">No features listed for this project.</p>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                    <FiIcons.FiZap className="mr-2 text-blue-500" />
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies?.length > 0 ? (
                      project.technologies.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            type: 'spring',
                            delay: index * 0.05,
                            stiffness: 200,
                            damping: 10
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            y: -3,
                            backgroundColor: '#3b82f6',
                            color: 'white'
                          }}
                          className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium cursor-default transition-colors"
                        >
                          {tech}
                        </motion.div>
                      ))
                    ) : (
                      <p className="text-slate-600">No technologies specified.</p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'tasks' && (
              <motion.div
                key="tasks"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <FiIcons.FiCheckCircle className="mr-2 text-blue-500" />
                  Project Tasks
                </h3>
                {project.tasks?.length > 0 ? (
                  <div className="space-y-3">
                    {project.tasks.map((task, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -2 }}
                        className="bg-slate-50 p-4 rounded-xl border border-slate-200 transition-all"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <motion.div 
                              className="mt-1 flex-shrink-0"
                              whileHover={{ scale: 1.1 }}
                            >
                              <input
                                type="checkbox"
                                checked={task.completed}
                                className="h-4 w-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500 cursor-pointer"
                              />
                            </motion.div>
                            <div>
                              <h4 className={`font-medium ${task.completed ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                                {task.title}
                              </h4>
                              <p className="text-sm text-slate-600 mt-1">{task.description}</p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {task.tags?.map((tag, tagIndex) => (
                                  <motion.span 
                                    key={tagIndex}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-xs px-2 py-1 bg-slate-200 text-slate-700 rounded-full"
                                  >
                                    {tag}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="text-xs text-slate-500">
                              Due: {formatDate(task.dueDate)}
                            </span>
                            <motion.span 
                              whileHover={{ scale: 1.05 }}
                              className={`text-xs px-2 py-1 mt-2 rounded-full ${
                                task.priority === 'high' ? 'bg-rose-100 text-rose-800' :
                                task.priority === 'medium' ? 'bg-amber-100 text-amber-800' :
                                'bg-emerald-100 text-emerald-800'
                              }`}
                            >
                              {task.priority}
                            </motion.span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-slate-50 p-8 rounded-xl border border-slate-200 text-center"
                  >
                    <FiIcons.FiCheckCircle className="mx-auto text-4xl text-slate-300 mb-4" />
                    <h4 className="text-lg font-medium text-slate-800 mb-2">
                      No Tasks Yet
                    </h4>
                    <p className="text-slate-600">
                      This project doesn't have any tasks assigned yet.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}

            {activeTab === 'team' && (
              <motion.div
                key="team"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <FiIcons.FiUsers className="mr-2 text-blue-500" />
                  Team Members
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-slate-50 rounded-xl p-4 border border-slate-200"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-800">{member.name}</h4>
                          <p className="text-sm text-slate-600">{member.role}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-slate-600 mb-1">
                          <span>Weekly Hours</span>
                          <span className="font-medium">{member.hours}h</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${Math.min(member.hours / 40 * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-slate-800 mb-4 flex items-center">
                    <FiIcons.FiPieChart className="mr-2 text-blue-500" />
                    Team Capacity
                  </h4>
                  
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {project.teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                          <div className="relative inline-block mb-2">
                            <svg className="w-16 h-16" viewBox="0 0 36 36">
                              <path
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#eee"
                                strokeWidth="3"
                              />
                              <path
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#3b82f6"
                                strokeWidth="3"
                                strokeDasharray={`${member.hours}, 100`}
                              />
                            </svg>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium">
                              {member.hours}
                            </div>
                          </div>
                          <p className="text-sm font-medium text-slate-700 truncate">{member.name.split(' ')[0]}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'documents' && (
              <motion.div
                key="documents"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <FiIcons.FiFolder className="mr-2 text-blue-500" />
                  Project Documents
                </h3>
                
                <div className="space-y-3">
                  {project.documents.map((doc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                          {getFileIcon(doc.type)}
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-800">{doc.name}</h4>
                          <div className="flex items-center gap-3 mt-1 text-sm text-slate-600">
                            <span>{doc.size}</span>
                            <span>•</span>
                            <span>Uploaded {formatDate(doc.uploaded)}</span>
                            <span>•</span>
                            <span>By {doc.uploadedBy}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 text-slate-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg"
                        >
                          <FiIcons.FiDownload />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg"
                        >
                          <FiIcons.FiMoreHorizontal />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="mt-8 p-4 border-2 border-dashed border-slate-300 rounded-xl text-center bg-slate-50 hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-500 rounded-full mb-3">
                    <FiIcons.FiPlus />
                  </div>
                  <h4 className="font-medium text-slate-800">Upload New Document</h4>
                  <p className="text-sm text-slate-600 mt-1">Click or drag files to upload</p>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'timeline' && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <FiIcons.FiCalendar className="mr-2 text-blue-500" />
                  Project Timeline
                </h3>
                
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                  
                  <div className="space-y-8">
                    {project.timeline.map((milestone, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-12"
                      >
                        <div className={`absolute left-4 top-2 -translate-x-1/2 w-3 h-3 rounded-full ${milestone.completed ? 'bg-blue-500' : 'bg-white border-2 border-blue-500'}`}></div>
                        
                        <div className={`p-4 rounded-xl border ${milestone.completed ? 'bg-blue-50 border-blue-200' : 'bg-slate-50 border-slate-200'}`}>
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-slate-800">{milestone.title}</h4>
                              <p className="text-sm text-slate-600 mt-1">{milestone.description}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-sm font-medium text-slate-800">{formatDate(milestone.date)}</span>
                              <div className="mt-1">
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${milestone.completed ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                                  {milestone.completed ? 'Completed' : 'Upcoming'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <h4 className="font-medium text-slate-800 mb-2 flex items-center">
                    <FiIcons.FiInfo className="mr-2 text-blue-500" />
                    Next Milestone
                  </h4>
                  <p className="text-slate-600">
                    {project.timeline.find(m => !m.completed)?.title || 'All milestones completed!'}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                    <FiIcons.FiClock className="text-blue-500" />
                    <span>Due {formatDate(project.timeline.find(m => !m.completed)?.date || new Date())}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'analytics' && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <FiIcons.FiBarChart className="mr-2 text-blue-500" />
                  Project Analytics
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="font-medium text-slate-800 mb-4">Progress by Phase</h4>
                    <div className="h-80">
                      <Bar 
                        data={progressData} 
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          indexAxis: 'y',
                          plugins: {
                            legend: {
                              display: false
                            }
                          },
                          scales: {
                            x: {
                              max: 100,
                              ticks: {
                                callback: function(value) {
                                  return value + '%';
                                }
                              }
                            }
                          }
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="font-medium text-slate-800 mb-4">Task Timeline</h4>
                    <div className="h-80">
                      <Line 
                        data={timelineData} 
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: 'top',
                            }
                          },
                          scales: {
                            y: {
                              beginAtZero: true
                            }
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="font-medium text-slate-800 mb-4">Budget Allocation</h4>
                    <div className="h-64">
                      <Doughnut 
                        data={budgetData} 
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: 'bottom'
                            }
                          }
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="font-medium text-slate-800 mb-4">Performance Metrics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
                        <div className="text-2xl font-bold text-blue-600">78%</div>
                        <div className="text-sm text-slate-600 mt-1">Tasks Completed</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
                        <div className="text-2xl font-bold text-emerald-600">62%</div>
                        <div className="text-sm text-slate-600 mt-1">On Time Rate</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
                        <div className="text-2xl font-bold text-amber-600">$24.5k</div>
                        <div className="text-sm text-slate-600 mt-1">Budget Spent</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
                        <div className="text-2xl font-bold text-purple-600">92%</div>
                        <div className="text-sm text-slate-600 mt-1">Team Availability</div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h5 className="font-medium text-slate-800 mb-3">Upcoming Deadlines</h5>
                      <div className="space-y-3">
                        {project.timeline
                          .filter(m => !m.completed)
                          .slice(0, 3)
                          .map((milestone, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                              <div>
                                <div className="font-medium text-slate-800">{milestone.title}</div>
                                <div className="text-sm text-slate-600">{formatDate(milestone.date)}</div>
                              </div>
                              <div className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">
                                {Math.ceil((new Date(milestone.date) - new Date()) / (1000 * 60 * 60 * 24))} days
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProjectExample;