import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiFilter, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ProjectStats from './ProjectStats';
import ProjectFilters from './ProjectFilters';
import ProjectCharts from './ProjectCharts';
import ProjectList from './ProjectList';
import AddProjectForm from './AddProjectForm';
import { sampleProjects, calculateStats } from './sampleProjects'; // Import from the new file

const MainContent = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [activeChart, setActiveChart] = useState('bar');
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState(null);
  
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    status: 'pending',
    startDate: '',
    endDate: '',
    priority: 'medium',
    budget: '',
    teamSize: '',
    progress: 0
  });
  
  const [errors, setErrors] = useState({});
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    searchQuery: '',
    dateRange: 'all'
  });
  
  useEffect(() => {
    // Use the imported data directly
    setProjects(sampleProjects);
    setFilteredProjects(sampleProjects);
    setStats(calculateStats(sampleProjects));
    setIsLoading(false);
  }, []);


  useEffect(() => {
    let result = [...projects];
    
    if (filters.status !== 'all') {
      result = result.filter(project => project.status === filters.status);
    }
    
    if (filters.priority !== 'all') {
      result = result.filter(project => project.priority === filters.priority);
    }
    
    if (filters.dateRange !== 'all') {
      const now = new Date();
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      result = result.filter(project => {
        const createdDate = new Date(project.createdAt);
        
        if (filters.dateRange === 'last30') {
          return createdDate >= thirtyDaysAgo;
        } else if (filters.dateRange === 'thisYear') {
          return createdDate.getFullYear() === now.getFullYear();
        }
        return true;
      });
    }
    
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredProjects(result);
  }, [filters, projects]);
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!newProject.title.trim()) {
      newErrors.title = 'Project title is required';
    }
    
    if (!newProject.startDate) {
      newErrors.startDate = 'Start date is required';
    }
    
    if (newProject.endDate && new Date(newProject.endDate) < new Date(newProject.startDate)) {
      newErrors.endDate = 'End date must be after start date';
    }
    
    if (!newProject.budget) {
      newErrors.budget = 'Budget is required';
    } else if (isNaN(newProject.budget) || parseFloat(newProject.budget) <= 0) {
      newErrors.budget = 'Budget must be a positive number';
    }
    
    if (!newProject.teamSize) {
      newErrors.teamSize = 'Team size is required';
    } else if (isNaN(newProject.teamSize) || parseInt(newProject.teamSize) <= 0) {
      newErrors.teamSize = 'Team size must be a positive integer';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const project = {
      id: projects.length + 1,
      ...newProject,
      budget: parseFloat(newProject.budget),
      teamSize: parseInt(newProject.teamSize),
      progress: parseInt(newProject.progress),
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    setProjects(prev => [...prev, project]);
    setNewProject({
      title: '',
      description: '',
      status: 'pending',
      startDate: '',
      endDate: '',
      priority: 'medium',
      budget: '',
      teamSize: '',
      progress: 0
    });
    setShowAddForm(false);
  };
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const resetFilters = () => {
    setFilters({
      status: 'all',
      priority: 'all',
      searchQuery: '',
      dateRange: 'all'
    });
  };

  return (
    <div className=" h-screen  overflow-auto bg-[var(--secondary-bg)] p-4 md:p-8">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)]">Project Dashboard</h1>
            <p className="text-[var(--text-secondary)]">Track and manage all your projects in one place</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg shadow-sm text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--secondary-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-colors"
            >
              <FiFilter className="mr-2" />
              Filters
              {showFilters ? <FiChevronUp className="ml-2" /> : <FiChevronDown className="ml-2" />}
            </button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAddForm(true)}
              className="flex items-center px-4 py-2 bg-[var(--accent-color)] rounded-lg shadow-sm text-sm font-medium text-white hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-colors"
            >
              <FiPlus className="mr-2" />
              Add Project
            </motion.button>
          </div>
        </div>
      </motion.header>
      
      <ProjectStats stats={stats} />
      
      <ProjectFilters 
        showFilters={showFilters} 
        filters={filters} 
        handleFilterChange={handleFilterChange} 
        resetFilters={resetFilters} 
      />
      
      <ProjectCharts 
        activeChart={activeChart} 
        setActiveChart={setActiveChart} 
      />
      
      <ProjectList 
        isLoading={isLoading}
        projects={projects}
        filteredProjects={filteredProjects}
        filters={filters}
        resetFilters={resetFilters}
        setShowAddForm={setShowAddForm}
      />
      
      <AddProjectForm 
        showAddForm={showAddForm}
        setShowAddForm={setShowAddForm}
        newProject={newProject}
        setNewProject={setNewProject}
        errors={errors}
        setErrors={setErrors}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default MainContent;