// import { motion, AnimatePresence } from 'framer-motion';
// import { FiPlus, FiEdit2, FiTrash2, FiCheck, FiClock, FiAlertCircle, FiCalendar } from 'react-icons/fi';

// const getStatusInfo = (status) => {
//   switch(status) {
//     case 'completed':
//       return { 
//         icon: <FiCheck className="text-green-500" />, 
//         color: 'bg-green-100 text-green-800',
//         text: 'Completed'
//       };
//     case 'in-progress':
//       return { 
//         icon: <FiClock className="text-blue-500" />, 
//         color: 'bg-blue-100 text-blue-800',
//         text: 'In Progress'
//       };
//     default:
//       return { 
//         icon: <FiAlertCircle className="text-yellow-500" />, 
//         color: 'bg-yellow-100 text-yellow-800',
//         text: 'Pending'
//       };
//   }
// };

// const getPriorityInfo = (priority) => {
//   switch(priority) {
//     case 'high':
//       return { 
//         color: 'bg-red-100 text-red-800',
//         text: 'High'
//       };
//     case 'medium':
//       return { 
//         color: 'bg-yellow-100 text-yellow-800',
//         text: 'Medium'
//       };
//     default:
//       return { 
//         color: 'bg-green-100 text-green-800',
//         text: 'Low'
//       };
//   }
// };

// const formatDate = (dateString) => {
//   if (!dateString) return 'N/A';
//   const options = { year: 'numeric', month: 'short', day: 'numeric' };
//   return new Date(dateString).toLocaleDateString(undefined, options);
// };

// const calculateDuration = (startDate, endDate) => {
//   if (!startDate || !endDate) return 'N/A';
//   const diff = new Date(endDate) - new Date(startDate);
//   return Math.ceil(diff / (1000 * 60 * 60 * 24)) + ' days';
// };

// const ProjectItem = ({ project }) => {
//   const statusInfo = getStatusInfo(project.status);
//   const priorityInfo = getPriorityInfo(project.priority);

//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       className="bg-[var(--card-bg)] p-6 rounded-lg shadow border border-[var(--card-border)] hover:shadow-md transition-shadow"
//     >
//       <div className="flex flex-col md:flex-row md:items-start md:justify-between">
//         <div className="flex-1">
//           <div className="flex items-start justify-between">
//             <div>
//               <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">{project.title}</h3>
//               <div className="flex items-center space-x-2 mb-2">
//                 <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusInfo.color}`}>
//                   {statusInfo.icon}
//                   <span className="ml-1">{statusInfo.text}</span>
//                 </span>
//                 <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityInfo.color}`}>
//                   {priorityInfo.text}
//                 </span>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="text-sm font-medium text-[var(--text-primary)]">
//                 ${project.budget.toLocaleString()}
//               </span>
//             </div>
//           </div>
          
//           <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
//             <div className="bg-[var(--secondary-bg)] p-3 rounded-lg">
//               <p className="text-[var(--text-secondary)] mb-1">Start Date</p>
//               <p className="font-medium flex items-center">
//                 <FiCalendar className="mr-2 text-gray-400" />
//                 {formatDate(project.startDate)}
//               </p>
//             </div>
//             <div className="bg-[var(--secondary-bg)] p-3 rounded-lg">
//               <p className="text-[var(--text-secondary)] mb-1">End Date</p>
//               <p className="font-medium flex items-center">
//                 <FiCalendar className="mr-2 text-gray-400" />
//                 {formatDate(project.endDate)}
//               </p>
//             </div>
//             <div className="bg-[var(--secondary-bg)] p-3 rounded-lg">
//               <p className="text-[var(--text-secondary)] mb-1">Duration</p>
//               <p className="font-medium">
//                 {calculateDuration(project.startDate, project.endDate)}
//               </p>
//             </div>
//             <div className="bg-[var(--secondary-bg)] p-3 rounded-lg">
//               <p className="text-[var(--text-secondary)] mb-1">Team Size</p>
//               <p className="font-medium">
//                 {project.teamSize} member{project.teamSize !== 1 ? 's' : ''}
//               </p>
//             </div>
//           </div>
          
//           <div className="mb-4">
//             <div className="flex justify-between text-sm mb-1">
//               <span className="font-medium text-[var(--text-secondary)]">Progress</span>
//               <span className="font-medium text-[var(--text-secondary)]">{project.progress}%</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2.5">
//               <div 
//                 className={`h-2.5 rounded-full ${
//                   project.progress < 30 ? 'bg-red-500' :
//                   project.progress < 70 ? 'bg-yellow-500' : 'bg-green-500'
//                 }`} 
//                 style={{ width: `${project.progress}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>
        
//         <div className="mt-4 md:mt-0 md:ml-4 flex space-x-2">
//           <motion.button 
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:bg-indigo-50 rounded-full transition-colors"
//           >
//             <FiEdit2 />
//           </motion.button>
//           <motion.button 
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="p-2 text-[var(--text-secondary)] hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
//           >
//             <FiTrash2 />
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const EmptyState = ({ filters, resetFilters, setShowAddForm }) => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     className="bg-[var(--card-bg)] p-8 rounded-lg shadow border border-[var(--card-border)] text-center"
//   >
//     <svg
//       className="mx-auto h-12 w-12 text-gray-400"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       aria-hidden="true"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={1}
//         d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//       />
//     </svg>
//     <h3 className="mt-2 text-lg font-medium text-[var(--text-primary)]">No projects found</h3>
//     <p className="mt-1 text-[var(--text-secondary)]">
//       {filters.status !== 'all' || filters.priority !== 'all' || filters.searchQuery || filters.dateRange !== 'all'
//         ? "Try adjusting your filters or search criteria."
//         : "You haven't added any projects yet."}
//     </p>
//     <div className="mt-6">
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => {
//           if (filters.status !== 'all' || filters.priority !== 'all' || filters.searchQuery || filters.dateRange !== 'all') {
//             resetFilters();
//           } else {
//             setShowAddForm(true);
//           }
//         }}
//         className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)]"
//       >
//         <FiPlus className="-ml-1 mr-2 h-5 w-5" />
//         {filters.status !== 'all' || filters.priority !== 'all' || filters.searchQuery || filters.dateRange !== 'all'
//           ? "Reset Filters"
//           : "Add Project"}
//       </motion.button>
//     </div>
//   </motion.div>
// );

// const ProjectList = ({ 
//   isLoading, 
//   projects, 
//   filteredProjects, 
//   filters, 
//   resetFilters, 
//   setShowAddForm 
// }) => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };
  
//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <motion.section
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <div className="mb-4 flex justify-between items-center">
//         <h2 className="text-xl font-semibold text-[var(--text-primary)]">
//           All Projects <span className="text-[var(--text-secondary)]">({filteredProjects.length})</span>
//         </h2>
//         {filteredProjects.length > 0 && (
//           <p className="text-sm text-[var(--text-secondary)]">
//             Showing {filteredProjects.length} of {projects.length} projects
//           </p>
//         )}
//       </div>
      
//       {isLoading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-color)]"></div>
//         </div>
//       ) : filteredProjects.length === 0 ? (
//         <EmptyState 
//           filters={filters} 
//           resetFilters={resetFilters} 
//           setShowAddForm={setShowAddForm} 
//         />
//       ) : (
//         <div className="grid grid-cols-1 gap-4">
//           {filteredProjects.map(project => (
//             <motion.div
//               key={project.id}
//               variants={itemVariants}
//             >
//               <ProjectItem project={project} />
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </motion.section>
//   );
// };

// export default ProjectList;







































import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiPlus, FiEdit2, FiTrash2, FiCheck, FiClock, 
  FiAlertCircle, FiCalendar, FiGrid, FiList, 
  FiUsers, FiBarChart2, FiLayers, FiDollarSign,
  FiPieChart, FiTag, FiAward, FiStar, FiTrendingUp,
  FiFolder, FiActivity, FiTarget, FiZap
} from 'react-icons/fi';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const getStatusInfo = (status) => {
  switch(status) {
    case 'completed':
      return { 
        icon: <FiCheck className="text-green-500" />, 
        color: 'bg-green-100 text-green-800',
        text: 'Completed',
        gradient: 'from-green-100 to-green-50',
        badgeClass: 'ring-green-500/20',
        chartColor: 'bg-green-500',
        bgLight: 'bg-green-50/80'
      };
    case 'in-progress':
      return { 
        icon: <FiClock className="text-blue-500" />, 
        color: 'bg-blue-100 text-blue-800',
        text: 'In Progress',
        gradient: 'from-blue-100 to-blue-50',
        badgeClass: 'ring-blue-500/20',
        chartColor: 'bg-blue-500',
        bgLight: 'bg-blue-50/80'
      };
    default:
      return { 
        icon: <FiAlertCircle className="text-yellow-500" />, 
        color: 'bg-yellow-100 text-yellow-800',
        text: 'Pending',
        gradient: 'from-yellow-100 to-yellow-50',
        badgeClass: 'ring-yellow-500/20',
        chartColor: 'bg-yellow-500',
        bgLight: 'bg-yellow-50/80'
      };
  }
};

const getPriorityInfo = (priority) => {
  switch(priority) {
    case 'high':
      return { 
        color: 'bg-red-100 text-red-800',
        text: 'High',
        border: 'border-red-200',
        icon: <FiZap className="text-red-500" />,
        priorityClass: 'ring-red-500/30',
        priorityColor: 'bg-red-500/10'
      };
    case 'medium':
      return { 
        color: 'bg-yellow-100 text-yellow-800',
        text: 'Medium',
        border: 'border-yellow-200',
        icon: <FiBarChart2 className="text-yellow-500" />,
        priorityClass: 'ring-yellow-500/30',
        priorityColor: 'bg-yellow-500/10'
      };
    default:
      return { 
        color: 'bg-green-100 text-green-800',
        text: 'Low',
        border: 'border-green-200',
        icon: <FiPieChart className="text-green-500" />,
        priorityClass: 'ring-green-500/30',
        priorityColor: 'bg-green-500/10'
      };
  }
};

const formatDate = (dateString) => {
  if (!dateString) return 'Not set';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const calculateDuration = (startDate, endDate) => {
  if (!startDate || !endDate) return 'N/A';
  const diff = new Date(endDate) - new Date(startDate);
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  if (days > 60) return `${Math.round(days/30)} months`;
  if (days > 14) return `${Math.round(days/7)} weeks`;
  return `${days} days`;
};

const ProgressCircle = ({ progress, size = 60 }) => {
  const radius = size / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const color = progress < 30 ? 'stroke-red-500' : 
               progress < 70 ? 'stroke-yellow-500' : 'stroke-green-500';

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg height={size} width={size} className="transform -rotate-90">
        <circle
          className="text-gray-200/80"
          strokeWidth={6}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <motion.circle
          className={color}
          strokeWidth={6}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-lg font-bold text-[var(--text-primary)]">
          {progress}%
        </span>
      </div>
    </div>
  );
};

const ProgressLine = ({ progress }) => {
  const color = progress < 30 ? 'bg-red-500' : 
               progress < 70 ? 'bg-yellow-500' : 'bg-green-500';

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-[var(--text-secondary)]">Progress</span>
        <span className="font-medium">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className={`h-2.5 rounded-full ${color}`}
        />
      </div>
    </div>
  );
};

const ProjectListItem = ({ project }) => {
  const statusInfo = getStatusInfo(project.status);
  const priorityInfo = getPriorityInfo(project.priority);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.01,
        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`bg-[var(--card-bg)] p-5 rounded-xl shadow border border-[var(--card-border)] hover:border-[var(--accent-color)]/30 relative transition-all ${statusInfo.bgLight}`}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-5">
        {/* Progress Circle */}
        <div className="flex-shrink-0 hidden md:block">
          <ProgressCircle progress={project.progress} size={70} />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-[var(--text-primary)] truncate">
                {project.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm line-clamp-2 mt-1">
                {project.description}
              </p>
            </div>
            <div className="flex items-center gap-3 sm:flex-col sm:items-end">
              <span className="text-lg font-semibold text-[var(--text-primary)] flex items-center">
                <FiDollarSign className="mr-1" />
                {project.budget.toLocaleString()}
              </span>
            </div>
          </div>
          
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusInfo.color} ${statusInfo.badgeClass} ring-1 ring-inset`}>
              {statusInfo.icon}
              <span className="ml-1.5">{statusInfo.text}</span>
            </span>
            
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${priorityInfo.color} ${priorityInfo.priorityClass} ring-1 ring-inset`}>
              {priorityInfo.icon}
              <span className="ml-1.5">{priorityInfo.text}</span>
            </span>
            
            <div className="flex items-center text-sm text-[var(--text-secondary)] bg-white/90 px-2.5 py-1 rounded-lg">
              <FiUsers className="mr-1.5" size={14} />
              <span>{project.teamSize} member{project.teamSize !== 1 ? 's' : ''}</span>
            </div>
            
            <div className="flex items-center text-sm text-[var(--text-secondary)] bg-white/90 px-2.5 py-1 rounded-lg">
              <FiCalendar className="mr-1.5" size={14} />
              <span>{calculateDuration(project.startDate, project.endDate)}</span>
            </div>
          </div>

          {/* Progress Line - Mobile */}
          <div className="mt-3 md:hidden">
            <ProgressLine progress={project.progress} />
          </div>
        </div>
        
        {/* Action Buttons */}
        <motion.div 
          animate={{
            opacity: isHovered ? 1 : 0.8,
            x: isHovered ? 0 : 5
          }}
          className="flex flex-col items-center justify-center gap-2 transition-all"
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:bg-[var(--accent-light)] rounded-lg transition-all"
          >
            <FiEdit2 size={18} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-[var(--text-secondary)] hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
          >
            <FiTrash2 size={18} />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Hover effect line */}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '100%' : 0 }}
        className="absolute bottom-0 left-0 h-0.5 bg-[var(--accent-color)]"
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const ProjectGridCard = ({ project }) => {
  const statusInfo = getStatusInfo(project.status);
  const priorityInfo = getPriorityInfo(project.priority);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => navigate(`/project/${project.id}`)}
      className={`relative h-full rounded-xl overflow-hidden border border-[var(--card-border)] ${statusInfo.bgLight}`}
    >
      {/* Glow effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.2 : 0,
          scale: isHovered ? 1 : 0.8
        }}
        className={`absolute inset-0 bg-gradient-to-br ${statusInfo.gradient} blur-md`}
      />
      
      {/* Priority indicator */}
      <div className={`absolute top-0 left-0 w-2 h-full ${priorityInfo.border}`} />
      
      {/* Main content */}
      <div className="relative h-full flex flex-col p-6 z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <motion.h3
              animate={{
                color: isHovered ? 'var(--accent-color)' : 'var(--text-primary)'
              }}
              className="text-xl font-bold mb-2 line-clamp-2"
            >
              {project.title}
            </motion.h3>
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusInfo.color} ${statusInfo.badgeClass} ring-1 ring-inset`}>
                {statusInfo.icon}
                <span className="ml-1">{statusInfo.text}</span>
              </span>
            </div>
          </div>
          
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1
            }}
            className="bg-white/90 p-2 rounded-lg shadow-sm flex flex-col items-center"
          >
            <span className="text-lg font-bold text-[var(--text-primary)] flex items-center">
              <FiDollarSign className="mr-1" />
              {project.budget.toLocaleString()}
            </span>
            <span className="text-xs text-[var(--text-secondary)]">Budget</span>
          </motion.div>
        </div>
        
        {/* Description */}
        <motion.p
          animate={{
            height: isHovered ? 'auto' : '3.6em'
          }}
          className="text-[var(--text-secondary)] mb-4 line-clamp-3 overflow-hidden transition-all"
        >
          {project.description}
        </motion.p>
        
        {/* Progress line */}
        <div className="mb-6">
          <ProgressLine progress={project.progress} />
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3 text-sm mb-6">
          <div className="bg-white/90 p-2 rounded-lg shadow-sm flex items-center gap-2">
            <div className={`p-1.5 ${statusInfo.color} rounded-md`}>
              <FiCalendar className={statusInfo.chartColor} size={14} />
            </div>
            <div>
              <p className="text-[var(--text-secondary)] text-xs">Start</p>
              <p className="font-medium">{formatDate(project.startDate)}</p>
            </div>
          </div>
          <div className="bg-white/90 p-2 rounded-lg shadow-sm flex items-center gap-2">
            <div className={`p-1.5 ${statusInfo.color} rounded-md`}>
              <FiTarget className={statusInfo.chartColor} size={14} />
            </div>
            <div>
              <p className="text-[var(--text-secondary)] text-xs">End</p>
              <p className="font-medium">{formatDate(project.endDate)}</p>
            </div>
          </div>
          <div className="bg-white/90 p-2 rounded-lg shadow-sm flex items-center gap-2">
            <div className={`p-1.5 ${statusInfo.color} rounded-md`}>
              <FiUsers className={statusInfo.chartColor} size={14} />
            </div>
            <div>
              <p className="text-[var(--text-secondary)] text-xs">Team</p>
              <p className="font-medium">{project.teamSize}</p>
            </div>
          </div>
          <div className="bg-white/90 p-2 rounded-lg shadow-sm flex items-center gap-2">
            <div className={`p-1.5 ${statusInfo.color} rounded-md`}>
              <FiLayers className={statusInfo.chartColor} size={14} />
            </div>
            <div>
              <p className="text-[var(--text-secondary)] text-xs">Duration</p>
              <p className="font-medium">{calculateDuration(project.startDate, project.endDate)}</p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-auto flex justify-between items-center">
          <div className="flex flex-wrap gap-1.5">
            {project.tags?.slice(0, 2).map((tag, index) => (
              <motion.span 
                key={index}
                whileHover={{ y: -2 }}
                className="text-xs px-2 py-1 bg-white/90 text-[var(--text-secondary)] rounded-lg shadow-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0.8,
              x: isHovered ? 0 : 5
            }}
            className="flex gap-1.5"
          >
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:bg-[var(--accent-light)] rounded-lg transition-all shadow-sm bg-white/90"
            >
              <FiEdit2 size={16} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-1.5 text-[var(--text-secondary)] hover:text-red-600 hover:bg-red-50 rounded-lg transition-all shadow-sm bg-white/90"
            >
              <FiTrash2 size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Hover shine effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.1 : 0,
          left: isHovered ? '100%' : '-100%'
        }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 w-full h-full bg-white/30 mix-blend-overlay"
      />
    </motion.div>
  );
};

const EmptyState = ({ filters, resetFilters, setShowAddForm }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[var(--card-bg)] p-8 rounded-xl shadow border border-[var(--card-border)] text-center"
    >
      <div className="mx-auto w-20 h-20 bg-[var(--accent-light)] rounded-full flex items-center justify-center mb-4">
        <FiFolder className="text-[var(--accent-color)] text-2xl" />
      </div>
      
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
        {filters.status !== 'all' || filters.priority !== 'all' || filters.searchQuery || filters.dateRange !== 'all'
          ? "No Projects Found"
          : "No Projects Yet"}
      </h3>
      
      <p className="text-[var(--text-secondary)] mb-6">
        {filters.status !== 'all' || filters.priority !== 'all' || filters.searchQuery || filters.dateRange !== 'all'
          ? "Try adjusting your search or filters"
          : "Create your first project to get started"}
      </p>
      
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => {
          if (filters.status !== 'all' || filters.priority !== 'all' || filters.searchQuery || filters.dateRange !== 'all') {
            resetFilters();
          } else {
            setShowAddForm(true);
          }
        }}
        className="inline-flex items-center px-6 py-2.5 border border-transparent text-base font-medium rounded-lg text-white bg-[var(--accent-color)] hover:bg-[var(--accent-hover)]"
      >
        <FiPlus className="mr-2" />
        {filters.status !== 'all' || filters.priority !== 'all' || filters.searchQuery || filters.dateRange !== 'all'
          ? "Reset Filters"
          : "Add Project"}
      </motion.button>
    </motion.div>
  );
};

const ProjectList = ({ 
  isLoading, 
  projects, 
  filteredProjects, 
  filters, 
  resetFilters, 
  setShowAddForm 
}) => {
  const [viewMode, setViewMode] = useState('grid');
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Projects
          </h2>
          <p className="text-[var(--text-secondary)]">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          {filteredProjects.length > 0 && (
            <div className="text-sm text-[var(--text-secondary)] bg-white/90 px-3 py-1.5 rounded-lg shadow-sm">
              {projects.length} total
            </div>
          )}
          
          <div className="flex items-center gap-1 bg-white/90 p-1 rounded-lg shadow-sm">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-[var(--accent-light)] text-[var(--accent-color)]' : 'text-[var(--text-secondary)]'}`}
            >
              <FiGrid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-[var(--accent-light)] text-[var(--accent-color)]' : 'text-[var(--text-secondary)]'}`}
            >
              <FiList size={18} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Content */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-[var(--accent-color)] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filteredProjects.length === 0 ? (
        <EmptyState 
          filters={filters} 
          resetFilters={resetFilters} 
          setShowAddForm={setShowAddForm} 
        />
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectGridCard 
                key={project.id} 
                project={project} 
              />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="space-y-4">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectListItem 
                key={project.id} 
                project={project} 
              />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default ProjectList;