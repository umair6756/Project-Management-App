import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
  TimeScale,
  TimeSeriesScale
} from 'chart.js';
import { Bar, Pie, Line, Radar, Doughnut } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { format } from 'date-fns';
import { ZoomIn, ZoomOut, RefreshCw, ChevronDown, ChevronUp, BarChart2, PieChart, Settings, Bell, User, LogOut, Calendar, Clock, Users, FileText, CheckCircle, AlertCircle, TrendingUp, Download, MoreHorizontal } from 'react-feather';

import { useTheme } from '../../context/ThemeContext';
import { AiOutlineLineChart } from 'react-icons/ai';

import '../../App.css'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
  TimeScale,
  TimeSeriesScale
);

const MainContent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [taskChartType, setTaskChartType] = useState('bar');
  const [expandedProject, setExpandedProject] = useState(null);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
   const { theme } = useTheme();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Toggle project expansion
  const toggleProjectExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  // Project data with more details
  const projects = [
    { 
      id: 1, 
      name: 'Website Redesign', 
      progress: 85, 
      status: 'In Progress', 
      dueDate: '2023-12-15', 
      team: 5,
      budget: '$24,500',
      spent: '$18,750',
      tasks: 34,
      completedTasks: 29,
      description: 'Complete redesign of company website with modern UI/UX principles and improved performance.',
      milestones: [
        { name: 'Research Complete', date: '2023-09-20', completed: true },
        { name: 'Design Approved', date: '2023-10-15', completed: true },
        { name: 'Development Complete', date: '2023-11-30', completed: false },
        { name: 'Testing Complete', date: '2023-12-10', completed: false },
        { name: 'Launch', date: '2023-12-15', completed: false }
      ],
      teamMembers: [
        { name: 'Alex Johnson', role: 'Lead Developer', avatar: 'AJ' },
        { name: 'Sarah Miller', role: 'UI Designer', avatar: 'SM' },
        { name: 'David Wilson', role: 'QA Engineer', avatar: 'DW' },
        { name: 'Emily Davis', role: 'Project Manager', avatar: 'ED' },
        { name: 'Michael Brown', role: 'Content Writer', avatar: 'MB' }
      ]
    },
    { 
      id: 2, 
      name: 'Mobile App Development', 
      progress: 45, 
      status: 'In Progress', 
      dueDate: '2024-02-20', 
      team: 8,
      budget: '$58,000',
      spent: '$23,200',
      tasks: 78,
      completedTasks: 35,
      description: 'Development of cross-platform mobile application for iOS and Android with offline capabilities.',
      milestones: [
        { name: 'Requirements Finalized', date: '2023-08-10', completed: true },
        { name: 'UI Prototype Approved', date: '2023-09-05', completed: true },
        { name: 'Core Features Complete', date: '2023-12-15', completed: false },
        { name: 'Beta Testing', date: '2024-01-20', completed: false },
        { name: 'App Store Submission', date: '2024-02-10', completed: false }
      ],
      teamMembers: [
        { name: 'Robert Garcia', role: 'Mobile Lead', avatar: 'RG' },
        { name: 'Jennifer Lee', role: 'UX Designer', avatar: 'JL' },
        { name: 'Thomas Smith', role: 'Backend Dev', avatar: 'TS' },
        { name: 'Lisa Wong', role: 'QA Lead', avatar: 'LW' },
        { name: 'Kevin Martin', role: 'iOS Developer', avatar: 'KM' },
        { name: 'Amanda Clark', role: 'Android Developer', avatar: 'AC' },
        { name: 'Daniel Kim', role: 'Product Owner', avatar: 'DK' },
        { name: 'Emily Davis', role: 'Project Manager', avatar: 'ED' }
      ]
    },
    { 
      id: 3, 
      name: 'Marketing Campaign', 
      progress: 100, 
      status: 'Completed', 
      dueDate: '2023-11-10', 
      team: 4,
      budget: '$15,000',
      spent: '$14,250',
      tasks: 22,
      completedTasks: 22,
      description: 'Q4 marketing campaign targeting new customer acquisition through digital channels.',
      milestones: [
        { name: 'Strategy Approved', date: '2023-08-01', completed: true },
        { name: 'Content Created', date: '2023-09-15', completed: true },
        { name: 'Campaign Launch', date: '2023-10-01', completed: true },
        { name: 'Mid-Campaign Review', date: '2023-10-20', completed: true },
        { name: 'Campaign Completion', date: '2023-11-10', completed: true }
      ],
      teamMembers: [
        { name: 'Olivia Taylor', role: 'Marketing Lead', avatar: 'OT' },
        { name: 'Nathan Brooks', role: 'Content Creator', avatar: 'NB' },
        { name: 'Sophia Martinez', role: 'Social Media', avatar: 'SM' },
        { name: 'Michael Brown', role: 'Analytics', avatar: 'MB' }
      ]
    },
    { 
      id: 4, 
      name: 'Product Launch', 
      progress: 30, 
      status: 'In Progress', 
      dueDate: '2024-03-05', 
      team: 10,
      budget: '$125,000',
      spent: '$32,500',
      tasks: 112,
      completedTasks: 34,
      description: 'Launch of new SaaS product with integrated AI capabilities and multi-tenant architecture.',
      milestones: [
        { name: 'Market Research Complete', date: '2023-07-15', completed: true },
        { name: 'MVP Development Complete', date: '2023-11-30', completed: false },
        { name: 'Beta Program Launch', date: '2024-01-15', completed: false },
        { name: 'Marketing Materials Ready', date: '2024-02-10', completed: false },
        { name: 'Official Launch', date: '2024-03-05', completed: false }
      ],
      teamMembers: [
        { name: 'Alex Johnson', role: 'Tech Lead', avatar: 'AJ' },
        { name: 'Emma Wilson', role: 'Product Manager', avatar: 'EW' },
        { name: 'Ryan Adams', role: 'AI Specialist', avatar: 'RA' },
        { name: 'Chloe Harris', role: 'Frontend Lead', avatar: 'CH' },
        { name: 'Jason Miller', role: 'DevOps', avatar: 'JM' },
        { name: 'Sophia Martinez', role: 'Marketing', avatar: 'SM' },
        { name: 'Daniel Kim', role: 'Sales Lead', avatar: 'DK' },
        { name: 'Lisa Wong', role: 'QA Lead', avatar: 'LW' },
        { name: 'Kevin Martin', role: 'UX Designer', avatar: 'KM' },
        { name: 'Emily Davis', role: 'Program Manager', avatar: 'ED' }
      ]
    },
    { 
      id: 5, 
      name: 'UI/UX Research', 
      progress: 65, 
      status: 'In Progress', 
      dueDate: '2023-12-30', 
      team: 3,
      budget: '$18,000',
      spent: '$11,700',
      tasks: 28,
      completedTasks: 18,
      description: 'Comprehensive user research and usability testing for product suite redesign.',
      milestones: [
        { name: 'Research Plan Approved', date: '2023-09-01', completed: true },
        { name: 'User Interviews Complete', date: '2023-10-15', completed: true },
        { name: 'Usability Testing Complete', date: '2023-11-20', completed: false },
        { name: 'Final Report Delivered', date: '2023-12-30', completed: false }
      ],
      teamMembers: [
        { name: 'Kevin Martin', role: 'UX Researcher', avatar: 'KM' },
        { name: 'Jennifer Lee', role: 'UI Designer', avatar: 'JL' },
        { name: 'Michael Brown', role: 'Analyst', avatar: 'MB' }
      ]
    }
  ];

  // Chart data with more complexity
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [12, 19, 8, 15, 22, 18, 25, 12, 20, 15, 22, 27],
        backgroundColor: 'rgba(99, 102, 241, 0.8)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 1,
        borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: 'Tasks Pending',
        data: [5, 8, 12, 6, 9, 4, 3, 7, 5, 8, 6, 2],
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 1,
        borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: 'Tasks Overdue',
        data: [2, 3, 5, 1, 2, 1, 0, 1, 3, 2, 1, 0],
        backgroundColor: 'rgba(245, 158, 11, 0.8)',
        borderColor: 'rgba(245, 158, 11, 1)',
        borderWidth: 1,
        borderRadius: 8,
        borderSkipped: false,
      }
    ],
  };

  const lineChartData = {
    labels: Array.from({ length: 30 }, (_, i) => format(new Date(2023, 9, i + 1), 'MMM d')),
    datasets: [
      {
        label: 'Task Completion Rate',
        data: [65, 59, 62, 67, 72, 75, 74, 78, 82, 85, 83, 87, 85, 88, 90, 89, 91, 92, 94, 93, 95, 96, 95, 97, 96, 98, 97, 99, 98, 100],
        fill: true,
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        tension: 0.4,
        pointBackgroundColor: 'rgba(99, 102, 241, 1)',
        pointBorderColor: '#fff',
        pointHoverRadius: 6,
        pointHoverBorderWidth: 2,
      },
      {
        label: 'Team Velocity',
        data: [45, 48, 52, 55, 58, 60, 62, 65, 68, 70, 72, 75, 73, 76, 78, 80, 82, 85, 83, 86, 88, 90, 89, 91, 93, 95, 94, 96, 95, 97],
        fill: true,
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        borderColor: 'rgba(239, 68, 68, 1)',
        tension: 0.4,
        pointBackgroundColor: 'rgba(239, 68, 68, 1)',
        pointBorderColor: '#fff',
        pointHoverRadius: 6,
        pointHoverBorderWidth: 2,
      }
    ],
  };

  const pieChartData = {
    labels: ['Completed', 'In Progress', 'Not Started', 'On Hold', 'Cancelled'],
    datasets: [
      {
        data: [35, 45, 15, 3, 2],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(156, 163, 175, 0.8)',
          'rgba(239, 68, 68, 0.8)'
        ],
        borderColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(156, 163, 175, 1)',
          'rgba(239, 68, 68, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const radarChartData = {
    labels: ['Planning', 'Design', 'Development', 'Testing', 'Deployment', 'Documentation', 'Collaboration', 'Innovation'],
    datasets: [
      {
        label: 'Current Project',
        data: [85, 90, 70, 75, 60, 50, 80, 65],
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        pointBackgroundColor: 'rgba(99, 102, 241, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
      },
      {
        label: 'Team Average',
        data: [70, 75, 80, 65, 70, 60, 75, 60],
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        borderColor: 'rgba(239, 68, 68, 1)',
        pointBackgroundColor: 'rgba(239, 68, 68, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(239, 68, 68, 1)',
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Development', 'Design', 'Testing', 'Documentation', 'Meetings', 'Research'],
    datasets: [
      {
        data: [35, 20, 15, 10, 12, 8],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(59, 130, 246, 0.8)'
        ],
        borderColor: [
          'rgba(99, 102, 241, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(59, 130, 246, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options with more customization
  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12,
            weight: '500'
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 12
        },
        padding: 12,
        usePointStyle: true,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          stepSize: 5,
          padding: 10
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          padding: 10
        }
      }
    },
    maintainAspectRatio: false
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12,
            weight: '500'
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 12
        },
        padding: 12,
        usePointStyle: true,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 40,
        max: 100,
        grid: {
          drawBorder: false,
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          callback: function(value) {
            return value + '%';
          },
          padding: 10
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          padding: 10,
          maxRotation: 45,
          minRotation: 45
        }
      }
    },
    maintainAspectRatio: false
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 12,
            weight: '500'
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 12
        },
        padding: 12,
        usePointStyle: true,
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((acc, data) => acc + data, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
    cutout: '65%',
    maintainAspectRatio: false
  };

  const radarChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12,
            weight: '500'
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 12
        },
        padding: 12,
        usePointStyle: true
      }
    },
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)'
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          backdropColor: 'transparent'
        },
        pointLabels: {
          font: {
            size: 11,
            weight: '500'
          }
        }
      }
    },
    maintainAspectRatio: false
  };

  const doughnutChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 12,
            weight: '500'
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 12
        },
        padding: 12,
        usePointStyle: true,
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((acc, data) => acc + data, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value}hrs (${percentage}%)`;
          }
        }
      }
    },
    cutout: '75%',
    maintainAspectRatio: false
  };

  // Stats cards with more data
  const stats = [
    { 
      title: 'Total Projects', 
      value: 24, 
      change: '+12%', 
      trend: 'up', 
      icon: <FileText size={20} />,
      chartData: [12, 19, 15, 20, 22, 24],
      chartColor: 'rgba(99, 102, 241, 0.8)'
    },
    { 
      title: 'Active Tasks', 
      value: 56, 
      change: '+5%', 
      trend: 'up', 
      icon: <CheckCircle size={20} />,
      chartData: [45, 52, 48, 50, 53, 56],
      chartColor: 'rgba(16, 185, 129, 0.8)'
    },
    { 
      title: 'Team Members', 
      value: 18, 
      change: '+3%', 
      trend: 'up', 
      icon: <Users size={20} />,
      chartData: [15, 16, 16, 17, 17, 18],
      chartColor: 'rgba(59, 130, 246, 0.8)'
    },
    { 
      title: 'Overdue Tasks', 
      value: 3, 
      change: '-2%', 
      trend: 'down', 
      icon: <AlertCircle size={20} />,
      chartData: [8, 6, 5, 4, 4, 3],
      chartColor: 'rgba(239, 68, 68, 0.8)'
    },
    { 
      title: 'Productivity', 
      value: '87%', 
      change: '+4%', 
      trend: 'up', 
      icon: <TrendingUp size={20} />,
      chartData: [78, 80, 82, 83, 85, 87],
      chartColor: 'rgba(139, 92, 246, 0.8)'
    },
    { 
      title: 'Budget Used', 
      value: '72%', 
      change: '+8%', 
      trend: 'up', 
      icon: <BarChart2 size={20} />,
      chartData: [55, 60, 63, 67, 70, 72],
      chartColor: 'rgba(245, 158, 11, 0.8)'
    }
  ];

  // Recent activities with more details
  const activities = [
    { 
      id: 1, 
      user: 'Alex Johnson', 
      action: 'completed task', 
      project: 'Website Redesign', 
      time: '2 hours ago',
      type: 'completion',
      task: 'Implement dark mode toggle',
      avatar: 'AJ'
    },
    { 
      id: 2, 
      user: 'Sarah Miller', 
      action: 'uploaded files', 
      project: 'Mobile App', 
      time: '4 hours ago',
      type: 'upload',
      files: ['design_specs.pdf', 'assets.zip'],
      avatar: 'SM'
    },
    { 
      id: 3, 
      user: 'David Wilson', 
      action: 'commented on', 
      project: 'Marketing Plan', 
      time: '5 hours ago',
      type: 'comment',
      comment: 'We need to reconsider the target demographics based on the latest analytics.',
      avatar: 'DW'
    },
    { 
      id: 4, 
      user: 'Emily Davis', 
      action: 'started task', 
      project: 'UI/UX Research', 
      time: '1 day ago',
      type: 'start',
      task: 'Conduct user interviews',
      avatar: 'ED'
    },
    { 
      id: 5, 
      user: 'Michael Brown', 
      action: 'updated status', 
      project: 'Product Launch', 
      time: '1 day ago',
      type: 'status',
      from: 'In Progress',
      to: 'QA Testing',
      avatar: 'MB'
    },
    { 
      id: 6, 
      user: 'Olivia Taylor', 
      action: 'created new task', 
      project: 'Marketing Campaign', 
      time: '2 days ago',
      type: 'create',
      task: 'Draft social media posts',
      avatar: 'OT'
    },
    { 
      id: 7, 
      user: 'Nathan Brooks', 
      action: 'requested review', 
      project: 'Content Strategy', 
      time: '2 days ago',
      type: 'review',
      task: 'Blog post about new features',
      avatar: 'NB'
    }
  ];

  // Notifications
  const notifications = [
    { id: 1, title: 'Project deadline approaching', message: 'Website Redesign due in 3 days', time: '1 hour ago', read: false },
    { id: 2, title: 'New task assigned', message: 'You have been assigned to "Implement dark mode"', time: '3 hours ago', read: false },
    { id: 3, title: 'Team meeting reminder', message: 'Sprint planning at 2:00 PM today', time: '5 hours ago', read: true },
    { id: 4, title: 'Budget approval needed', message: 'Please review and approve the Q4 marketing budget', time: '1 day ago', read: true }
  ];

  // Team members
  const teamMembers = [
    { id: 1, name: 'Alex Johnson', role: 'Lead Developer', status: 'active', lastActive: '2 mins ago' },
    { id: 2, name: 'Sarah Miller', role: 'UI Designer', status: 'active', lastActive: '15 mins ago' },
    { id: 3, name: 'David Wilson', role: 'QA Engineer', status: 'away', lastActive: '1 hour ago' },
    { id: 4, name: 'Emily Davis', role: 'Project Manager', status: 'active', lastActive: '5 mins ago' },
    { id: 5, name: 'Michael Brown', role: 'Content Writer', status: 'offline', lastActive: '3 hours ago' }
  ];

  // Render different chart types for task completion
  const renderTaskChart = () => {
    switch(taskChartType) {
      case 'bar':
        return <Bar data={barChartData} options={barChartOptions} />;
      case 'line':
        return <Line data={lineChartData} options={lineChartOptions} />;
      case 'pie':
        return <Pie data={pieChartData} options={pieChartOptions} />;
      default:
        return <Bar data={barChartData} options={barChartOptions} />;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className={`flex h-screen overflow-hidden ${darkMode ? 'dark' : ''}`}>
      {/* CSS Variables for light/dark mode */}
      

      {/* Sidebar */}
      {/*  */}

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden bg-[var(--secondary-bg)]">
    

        {/* Main content area */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-4 border-[var(--accent-color)] border-t-transparent rounded-full"
              />
            </div>
          ) : (
            <motion.div 
              ref={ref}
              // initial="hidden"
              animate={controls}
              variants={containerVariants}
              className="space-y-6"
            >
              {/* Welcome banner */}
              <motion.div
                variants={itemVariants}
                className="relative p-6 overflow-hidden rounded-lg shadow-sm bg-gradient-to-r from-indigo-500 to-purple-600"
              >
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Welcome back, John!</h2>
                    <p className="mt-1 text-indigo-100">Here's what's happening with your projects today.</p>
                  </div>
                  <button className="px-4 py-2 mt-4 text-sm font-medium text-indigo-600 bg-white rounded-md md:mt-0 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    View all projects
                  </button>
                </div>
                <div className="absolute top-0 right-0 z-0 w-64 h-64 -mr-20 -mt-20 bg-purple-300 rounded-full opacity-20"></div>
                <div className="absolute bottom-0 right-0 z-0 w-64 h-64 -mr-20 -mb-20 bg-indigo-300 rounded-full opacity-20"></div>
              </motion.div>

              {/* Stats cards */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-lg shadow-sm bg-[var(--card-bg)] border border-[var(--card-border)]"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium uppercase text-[var(--text-secondary)] tracking-wider">{stat.title}</p>
                        <p className="mt-1 text-2xl font-semibold text-[var(--text-primary)]">{stat.value}</p>
                      </div>
                      <div className={`p-2 rounded-lg ${stat.trend === 'up' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200'}`}>
                        {stat.icon}
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {stat.change}
                      </span>
                      <span className="text-xs text-[var(--text-secondary)] ml-1">from last week</span>
                    </div>
                    <div className="mt-2 h-10">
                      <Line 
                        data={{
                          labels: ['', '', '', '', '', ''],
                          datasets: [{
                            data: stat.chartData,
                            borderColor: stat.chartColor,
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            tension: 0.4,
                            pointRadius: 0
                          }]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          scales: {
                            x: {
                              display: false
                            },
                            y: {
                              display: false
                            }
                          },
                          plugins: {
                            legend: {
                              display: false
                            }
                          }
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Task Completion Charts */}
              <motion.div
                variants={itemVariants}
                className="p-5 rounded-lg shadow-sm bg-[var(--card-bg)] border border-[var(--card-border)]"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-lg font-medium text-[var(--text-primary)]">Task Completion</h3>
                  <div className="flex mt-2 space-x-2 md:mt-0">
                    <button 
                      onClick={() => setTaskChartType('bar')}
                      className={`px-3 py-1 text-sm rounded-md ${taskChartType === 'bar' ? 'bg-[var(--accent-color)] text-white' : 'bg-[var(--secondary-bg)] text-[var(--text-primary)]'}`}
                    >
                      <BarChart2 size={16} className="inline mr-1" /> Bar
                    </button>
                    <button 
                      onClick={() => setTaskChartType('line')}
                      className={`px-3 py-1 text-sm rounded-md ${taskChartType === 'line' ? 'bg-[var(--accent-color)] text-white' : 'bg-[var(--secondary-bg)] text-[var(--text-primary)]'}`}
                    >
                      <AiOutlineLineChart size={16} className="inline mr-1" /> Line
                    </button>
                    <button 
                      onClick={() => setTaskChartType('pie')}
                      className={`px-3 py-1 text-sm rounded-md ${taskChartType === 'pie' ? 'bg-[var(--accent-color)] text-white' : 'bg-[var(--secondary-bg)] text-[var(--text-primary)]'}`}
                    >
                      <PieChart size={16} className="inline mr-1" /> Pie
                    </button>
                  </div>
                </div>
                <div className="mt-4 h-80">
                  {renderTaskChart()}
                </div>
              </motion.div>

              {/* Project Trends Row */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 gap-5 lg:grid-cols-3"
              >
                {/* Project Progress */}
                <motion.div
                  variants={itemVariants}
                  className="p-5 rounded-lg shadow-sm bg-[var(--card-bg)] border border-[var(--card-border)]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-[var(--text-primary)]">Project Progress</h3>
                    <button className="text-sm text-[var(--accent-color)] hover:text-[var(--accent-hover)]">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                  <div className="mt-4 h-64">
                    <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
                  </div>
                </motion.div>

                {/* Team Performance */}
                <motion.div
                  variants={itemVariants}
                  className="p-5 rounded-lg shadow-sm bg-[var(--card-bg)] border border-[var(--card-border)]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-[var(--text-primary)]">Team Performance</h3>
                    <button className="text-sm text-[var(--accent-color)] hover:text-[var(--accent-hover)]">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                  <div className="mt-4 h-64">
                    <Radar data={radarChartData} options={radarChartOptions} />
                  </div>
                </motion.div>

                {/* Productivity Trend */}
                <motion.div
                  variants={itemVariants}
                  className="p-5 rounded-lg shadow-sm bg-[var(--card-bg)] border border-[var(--card-border)]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-[var(--text-primary)]">Productivity Trend</h3>
                    <button className="text-sm text-[var(--accent-color)] hover:text-[var(--accent-hover)]">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                  <div className="mt-4 h-64">
                    <Line data={lineChartData} options={lineChartOptions} />
                  </div>
                </motion.div>
              </motion.div>

              {/* Projects and Activity */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 gap-5 lg:grid-cols-2"
              >
                {/* Projects */}
                <motion.div
                  variants={itemVariants}
                  className="p-5 rounded-lg shadow-sm bg-[var(--card-bg)] border border-[var(--card-border)]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-[var(--text-primary)]">Active Projects</h3>
                    <button className="text-sm font-medium text-[var(--accent-color)] hover:text-[var(--accent-hover)]">
                      View all
                    </button>
                  </div>
                  <div className="mt-4 space-y-3">
                    {projects.map((project) => (
                      <motion.div
                        key={project.id}
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 rounded-lg hover:shadow-md transition-shadow bg-[var(--secondary-bg)]"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <h4 className="font-medium text-[var(--text-primary)]">{project.name}</h4>
                            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                              project.status === 'Completed' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                          <button 
                            onClick={() => toggleProjectExpand(project.id)}
                            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                          >
                            {expandedProject === project.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </button>
                        </div>
                        
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full h-2 mt-1 bg-gray-200 rounded-full dark:bg-gray-700">
                            <div
                              className={`h-2 rounded-full ${
                                project.status === 'Completed' 
                                  ? 'bg-green-500' 
                                  : 'bg-blue-500'
                              }`}
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3 text-sm text-[var(--text-secondary)]">
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            <span>Due {format(new Date(project.dueDate), 'MMM d, yyyy')}</span>
                          </div>
                          <div className="flex items-center">
                            <Users size={14} className="mr-1" />
                            <span>{project.team} members</span>
                          </div>
                        </div>
                        
                        <AnimatePresence>
                          {expandedProject === project.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 overflow-hidden"
                            >
                              <div className="pt-4 border-t border-[var(--card-border)]">
                                <p className="text-sm text-[var(--text-secondary)]">{project.description}</p>
                                
                                <div className="mt-4">
                                  <h5 className="text-sm font-medium text-[var(--text-primary)]">Milestones</h5>
                                  <div className="mt-2 space-y-2">
                                    {project.milestones.map((milestone, idx) => (
                                      <div key={idx} className="flex items-center">
                                        <div className={`w-3 h-3 rounded-full mr-2 ${milestone.completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                        <span className={`text-sm ${milestone.completed ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                                          {milestone.name}
                                        </span>
                                        <span className="ml-auto text-xs text-[var(--text-secondary)]">
                                          {format(new Date(milestone.date), 'MMM d')}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                
                                <div className="mt-4">
                                  <h5 className="text-sm font-medium text-[var(--text-primary)]">Team Members</h5>
                                  <div className="flex flex-wrap mt-2 gap-2">
                                    {project.teamMembers.map((member, idx) => (
                                      <div key={idx} className="flex items-center px-2 py-1 text-xs rounded bg-[var(--secondary-bg)]">
                                        <div className="flex items-center justify-center w-5 h-5 mr-1 text-xs font-medium text-white bg-indigo-500 rounded-full">
                                          {member.avatar}
                                        </div>
                                        <span className="text-[var(--text-primary)]">{member.name}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                  <div>
                                    <p className="text-xs text-[var(--text-secondary)]">Budget</p>
                                    <p className="text-sm font-medium text-[var(--text-primary)]">{project.budget}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-[var(--text-secondary)]">Spent</p>
                                    <p className="text-sm font-medium text-[var(--text-primary)]">{project.spent}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-[var(--text-secondary)]">Tasks</p>
                                    <p className="text-sm font-medium text-[var(--text-primary)]">{project.tasks}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-[var(--text-secondary)]">Completed</p>
                                    <p className="text-sm font-medium text-[var(--text-primary)]">{project.completedTasks}</p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Recent Activity */}
                <motion.div
                  variants={itemVariants}
                  className="p-5 rounded-lg shadow-sm bg-[var(--card-bg)] border border-[var(--card-border)]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-[var(--text-primary)]">Recent Activity</h3>
                    <button className="text-sm font-medium text-[var(--accent-color)] hover:text-[var(--accent-hover)]">
                      View all
                    </button>
                  </div>
                  <div className="mt-4 space-y-4">
                    {activities.map((activity) => (
                      <motion.div
                        key={activity.id}
                        variants={cardVariants}
                        whileHover={{ x: 5 }}
                        className="flex p-3 rounded-lg hover:shadow-sm transition-shadow bg-[var(--secondary-bg)]"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-10 h-10 text-sm font-medium text-white rounded-full bg-indigo-500">
                            {activity.avatar}
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-[var(--text-primary)]">
                            <span className="font-medium">{activity.user}</span> {activity.action}{' '}
                            <span className="font-medium text-[var(--accent-color)]">{activity.project}</span>
                          </p>
                          {activity.type === 'comment' && (
                            <div className="p-2 mt-1 text-sm rounded bg-[var(--card-bg)] border border-[var(--card-border)]">
                              "{activity.comment}"
                            </div>
                          )}
                          {activity.type === 'upload' && (
                            <div className="flex mt-1 space-x-2">
                              {activity.files.map((file, idx) => (
                                <div key={idx} className="px-2 py-1 text-xs rounded bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center">
                                  <FileText size={12} className="mr-1" />
                                  {file}
                                </div>
                              ))}
                            </div>
                          )}
                          {(activity.type === 'completion' || activity.type === 'start' || activity.type === 'create' || activity.type === 'review') && (
                            <div className="px-2 py-1 mt-1 text-xs rounded bg-[var(--card-bg)] border border-[var(--card-border)] inline-block">
                              {activity.task}
                            </div>
                          )}
                          {activity.type === 'status' && (
                            <div className="flex items-center mt-1 text-xs">
                              <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700">
                                {activity.from}
                              </span>
                              <svg className="w-4 h-4 mx-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                              </svg>
                              <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                {activity.to}
                              </span>
                            </div>
                          )}
                          <p className="text-xs text-[var(--text-secondary)] mt-1">{activity.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Team Members */}
              <motion.div
                variants={itemVariants}
                className="p-5 rounded-lg shadow-sm bg-[var(--card-bg)] border border-[var(--card-border)]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-[var(--text-primary)]">Team Members</h3>
                  <button className="text-sm font-medium text-[var(--accent-color)] hover:text-[var(--accent-hover)]">
                    View all
                  </button>
                </div>
                <div className="mt-4 overflow-hidden border border-[var(--card-border)] rounded-lg">
                  <table className="min-w-full divide-y divide-[var(--card-border)]">
                    <thead className="bg-[var(--secondary-bg)]">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-[var(--text-secondary)] uppercase">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-[var(--text-secondary)] uppercase">
                          Role
                        </th>
                        <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-[var(--text-secondary)] uppercase">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-[var(--text-secondary)] uppercase">
                          Last Active
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-[var(--card-bg)] divide-y divide-[var(--card-border)]">
                      {teamMembers.map((person) => (
                        <tr key={person.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <div className="flex items-center justify-center w-full h-full text-sm font-medium text-white rounded-full bg-indigo-500">
                                  {person.name.split(' ').map(n => n[0]).join('')}
                                </div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-[var(--text-primary)]">{person.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-[var(--text-primary)]">{person.role}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 text-xs font-semibold leading-5 rounded-full ${
                              person.status === 'active' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                : person.status === 'away' 
                                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' 
                                  : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                            }`}>
                              {person.status.charAt(0).toUpperCase() + person.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-[var(--text-secondary)] whitespace-nowrap">
                            {person.lastActive}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <button className="text-[var(--accent-color)] hover:text-[var(--accent-hover)]">
                              Message
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;