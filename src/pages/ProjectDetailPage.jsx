// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   FiArrowLeft, FiExternalLink, FiGithub, FiClock, 
//   FiCalendar, FiUsers, FiTag, FiCheckCircle, 
//   FiAlertCircle, FiBarChart2, FiPieChart, FiZap,
//   FiDollarSign, FiLayers, FiTarget, FiActivity,
//   FiTrendingUp, FiStar, FiAward, FiEdit2, FiTrash2,
//   FiFile, FiChevronRight, FiPlus, FiMinus
// } from 'react-icons/fi';
// import { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const ProjectDetailPage = ({ projects }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [expandedFeatures, setExpandedFeatures] = useState([]);
//   const [isImageZoomed, setIsImageZoomed] = useState(false);

//   useEffect(() => {
//     // Simulate loading with more realistic animation
//     const timer = setTimeout(() => {
//       const foundProject = projects.find(p => p.id === id);
//       setProject(foundProject);
//       setLoading(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, [id, projects]);

//   const toggleFeatureExpand = (index) => {
//     if (expandedFeatures.includes(index)) {
//       setExpandedFeatures(expandedFeatures.filter(i => i !== index));
//     } else {
//       setExpandedFeatures([...expandedFeatures, index]);
//     }
//   };

//   const getStatusInfo = (status) => {
//     switch(status) {
//       case 'completed':
//         return { 
//           icon: <FiCheckCircle className="text-green-500" />, 
//           color: 'bg-green-100 text-green-800',
//           text: 'Completed',
//           gradient: 'from-green-100 to-green-50',
//           badgeClass: 'ring-green-500/20',
//           chartColor: 'bg-green-500',
//           bgLight: 'bg-green-50/80',
//           pulse: 'animate-pulse-green'
//         };
//       case 'in-progress':
//         return { 
//           icon: <FiActivity className="text-blue-500" />, 
//           color: 'bg-blue-100 text-blue-800',
//           text: 'In Progress',
//           gradient: 'from-blue-100 to-blue-50',
//           badgeClass: 'ring-blue-500/20',
//           chartColor: 'bg-blue-500',
//           bgLight: 'bg-blue-50/80',
//           pulse: 'animate-pulse-blue'
//         };
//       default:
//         return { 
//           icon: <FiAlertCircle className="text-yellow-500" />, 
//           color: 'bg-yellow-100 text-yellow-800',
//           text: 'Pending',
//           gradient: 'from-yellow-100 to-yellow-50',
//           badgeClass: 'ring-yellow-500/20',
//           chartColor: 'bg-yellow-500',
//           bgLight: 'bg-yellow-50/80',
//           pulse: 'animate-pulse-yellow'
//         };
//     }
//   };

//   const getPriorityInfo = (priority) => {
//     switch(priority) {
//       case 'high':
//         return { 
//           color: 'bg-red-100 text-red-800',
//           text: 'High',
//           border: 'border-red-200',
//           icon: <FiZap className="text-red-500" />,
//           priorityClass: 'ring-red-500/30',
//           priorityColor: 'bg-red-500/10',
//           pulse: 'animate-pulse-red'
//         };
//       case 'medium':
//         return { 
//           color: 'bg-yellow-100 text-yellow-800',
//           text: 'Medium',
//           border: 'border-yellow-200',
//           icon: <FiBarChart2 className="text-yellow-500" />,
//           priorityClass: 'ring-yellow-500/30',
//           priorityColor: 'bg-yellow-500/10',
//           pulse: 'animate-pulse-yellow'
//         };
//       default:
//         return { 
//           color: 'bg-green-100 text-green-800',
//           text: 'Low',
//           border: 'border-green-200',
//           icon: <FiPieChart className="text-green-500" />,
//           priorityClass: 'ring-green-500/30',
//           priorityColor: 'bg-green-500/10',
//           pulse: 'animate-pulse-green'
//         };
//     }
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return 'Not set';
//     const options = { year: 'numeric', month: 'short', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   const calculateDuration = (startDate, endDate) => {
//     if (!startDate || !endDate) return 'N/A';
//     const diff = new Date(endDate) - new Date(startDate);
//     const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
//     if (days > 60) return `${Math.round(days/30)} months`;
//     if (days > 14) return `${Math.round(days/7)} weeks`;
//     return `${days} days`;
//   };

//   const ProgressCircle = ({ progress, size = 100 }) => {
//     const radius = size / 2;
//     const circumference = 2 * Math.PI * radius;
//     const strokeDashoffset = circumference - (progress / 100) * circumference;
//     const color = progress < 30 ? 'stroke-red-500' : 
//                  progress < 70 ? 'stroke-yellow-500' : 'stroke-green-500';

//     return (
//       <div className="relative inline-flex items-center justify-center">
//         <svg height={size} width={size} className="transform -rotate-90">
//           <circle
//             className="text-gray-200/80 dark:text-gray-600"
//             strokeWidth={8}
//             stroke="currentColor"
//             fill="transparent"
//             r={radius - 4}
//             cx={size / 2}
//             cy={size / 2}
//           />
//           <motion.circle
//             className={color}
//             strokeWidth={8}
//             strokeDasharray={circumference}
//             strokeDashoffset={strokeDashoffset}
//             strokeLinecap="round"
//             stroke="currentColor"
//             fill="transparent"
//             r={radius - 4}
//             cx={size / 2}
//             cy={size / 2}
//             initial={{ strokeDashoffset: circumference }}
//             animate={{ strokeDashoffset }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//           />
//         </svg>
//         <div className="absolute flex flex-col items-center">
//           <motion.span 
//             className="text-2xl font-bold text-[var(--text-primary)]"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             {progress}%
//           </motion.span>
//           <motion.span 
//             className="text-xs text-[var(--text-secondary)]"
//             initial={{ y: 5, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.7 }}
//           >
//             Complete
//           </motion.span>
//         </div>
//       </div>
//     );
//   };

//   const LoadingSkeleton = () => {
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
//       >
//         {/* Header skeleton */}
//         <div className="flex flex-col lg:flex-row gap-8 mb-8">
//           {/* Image skeleton */}
//           <div className="lg:w-2/3 relative">
//             <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 shadow-lg">
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
//             </div>
//           </div>
          
//           {/* Info skeleton */}
//           <div className="lg:w-1/3">
//             <div className="bg-[var(--card-bg)] rounded-2xl p-6 shadow-lg border border-[var(--card-border)] h-full">
//               <div className="animate-pulse space-y-4">
//                 <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
//                 <div className="flex gap-2">
//                   <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20"></div>
//                   <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
//                   <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
//                   <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
//                   <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
//                   <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
//                 </div>
//                 <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
//                 <div className="flex gap-3">
//                   <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex-1"></div>
//                   <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex-1"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Tabs skeleton */}
//         <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
//           <div className="flex space-x-8">
//             {[1, 2, 3, 4, 5].map((i) => (
//               <div key={i} className="h-10 w-20 bg-gray-200 dark:bg-gray-700 rounded-t-lg"></div>
//             ))}
//           </div>
//         </div>
        
//         {/* Content skeleton */}
//         <div className="bg-[var(--card-bg)] rounded-2xl shadow border border-[var(--card-border)] p-6">
//           <div className="animate-pulse space-y-6">
//             <div className="space-y-4">
//               <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
//               <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
//               <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
//             </div>
//             <div className="space-y-4">
//               <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
//               <div className="grid md:grid-cols-2 gap-4">
//                 {[1, 2, 3, 4].map((i) => (
//                   <div key={i} className="h-24 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   if (loading) {
//     return <LoadingSkeleton />;
//   }

//   if (!project) {
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="flex flex-col items-center justify-center h-screen text-center p-6"
//       >
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ type: 'spring', stiffness: 200 }}
//           className="bg-[var(--accent-light)] p-6 rounded-full mb-4"
//         >
//           <FiAlertCircle className="text-[var(--accent-color)] text-4xl" />
//         </motion.div>
//         <motion.h2
//           initial={{ y: -10, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.1 }}
//           className="text-2xl font-bold text-[var(--text-primary)] mb-2"
//         >
//           Project Not Found
//         </motion.h2>
//         <motion.p
//           initial={{ y: -10, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-[var(--text-secondary)] mb-6 max-w-md"
//         >
//           The project you're looking for doesn't exist or may have been removed.
//         </motion.p>
//         <motion.button
//           initial={{ y: 10, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           whileHover={{ scale: 1.03, boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)" }}
//           whileTap={{ scale: 0.97 }}
//           onClick={() => navigate(-1)}
//           className="inline-flex items-center px-6 py-2.5 border border-transparent text-base font-medium rounded-lg text-white bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] shadow-md transition-all"
//         >
//           Back to Projects
//         </motion.button>
//       </motion.div>
//     );
//   }

//   const statusInfo = getStatusInfo(project.status);
//   const priorityInfo = getPriorityInfo(project.priority);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
//     >
//       {/* Back button with enhanced animation */}
//       <motion.button
//         whileHover={{ x: -5 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => navigate(-1)}
//         className="flex items-center text-[var(--text-secondary)] hover:text-[var(--accent-color)] mb-6 transition-colors group"
//       >
//         <motion.span
//           className="inline-block mr-2 group-hover:-translate-x-1 transition-transform"
//           transition={{ type: 'spring', stiffness: 300 }}
//         >
//           <FiArrowLeft />
//         </motion.span>
//         Back to projects
//       </motion.button>

//       {/* Header section with parallax effect */}
//       <div className="flex flex-col lg:flex-row gap-8 mb-8">
//         {/* Project image with zoom effect */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2, type: 'spring' }}
//           className="lg:w-2/3 relative"
//         >
//           <motion.div
//             className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 shadow-xl cursor-zoom-in"
//             whileHover={{ scale: isImageZoomed ? 1 : 1.02 }}
//             onClick={() => setIsImageZoomed(!isImageZoomed)}
//             layout
//           >
//             <AnimatePresence>
//               {!imageLoaded && (
//                 <motion.div
//                   initial={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 animate-pulse"
//                 />
//               )}
//             </AnimatePresence>
//             <motion.img
//               src={project.image || 'https://source.unsplash.com/random/800x450/?project,technology'}
//               alt={project.title}
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0 }}
//               animate={{ 
//                 opacity: imageLoaded ? 1 : 0,
//                 scale: isImageZoomed ? 1.1 : 1
//               }}
//               transition={{ duration: 0.5 }}
//               onLoad={() => setImageLoaded(true)}
//               layout
//             />
//             {isImageZoomed && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="absolute inset-0 bg-black/20 flex items-center justify-center"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setIsImageZoomed(false);
//                   }}
//                   className="bg-white/90 p-2 rounded-full shadow-lg"
//                 >
//                   <FiMinus className="text-gray-800" />
//                 </motion.button>
//               </motion.div>
//             )}
//           </motion.div>
//           {!isImageZoomed && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="absolute bottom-4 right-4"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => setIsImageZoomed(true)}
//                 className="bg-white/90 p-2 rounded-full shadow-lg"
//               >
//                 <FiPlus className="text-gray-800" />
//               </motion.button>
//             </motion.div>
//           )}
//         </motion.div>

//         {/* Project info with staggered animations */}
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, type: 'spring' }}
//           className="lg:w-1/3"
//         >
//           <div className="bg-[var(--card-bg)] rounded-2xl p-6 shadow-xl border border-[var(--card-border)] h-full relative overflow-hidden">
//             {/* Decorative elements */}
//             <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${statusInfo.bgLight} opacity-50`}></div>
//             <div className={`absolute -bottom-20 -left-20 w-40 h-40 rounded-full ${priorityInfo.priorityColor} opacity-30`}></div>
            
//             <div className="relative z-10">
//               <div className="flex justify-between items-start mb-4">
//                 <motion.div
//                   initial={{ y: 10, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
//                     {project.title}
//                   </h1>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     <motion.span
//                       whileHover={{ y: -2 }}
//                       className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color} ${statusInfo.badgeClass} ring-1 ring-inset`}
//                     >
//                       {statusInfo.icon}
//                       <span className="ml-1.5">{statusInfo.text}</span>
//                     </motion.span>
//                     <motion.span
//                       whileHover={{ y: -2 }}
//                       className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${priorityInfo.color} ${priorityInfo.priorityClass} ring-1 ring-inset`}
//                     >
//                       {priorityInfo.icon}
//                       <span className="ml-1.5">{priorityInfo.text}</span>
//                     </motion.span>
//                   </div>
//                 </motion.div>
//                 <motion.div
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   <ProgressCircle progress={project.progress} size={80} />
//                 </motion.div>
//               </div>

//               <motion.p
//                 initial={{ y: 10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 className="text-[var(--text-secondary)] mb-6"
//               >
//                 {project.description}
//               </motion.p>

//               <motion.div
//                 initial={{ y: 10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.7 }}
//                 className="space-y-4"
//               >
//                 <div className="grid grid-cols-2 gap-4">
//                   <motion.div 
//                     whileHover={{ y: -3 }}
//                     className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
//                   >
//                     <p className="text-xs text-[var(--text-secondary)] mb-1">Start Date</p>
//                     <p className="font-medium flex items-center">
//                       <FiCalendar className="mr-2 text-[var(--accent-color)]" />
//                       {formatDate(project.startDate)}
//                     </p>
//                   </motion.div>
//                   <motion.div 
//                     whileHover={{ y: -3 }}
//                     className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
//                   >
//                     <p className="text-xs text-[var(--text-secondary)] mb-1">End Date</p>
//                     <p className="font-medium flex items-center">
//                       <FiTarget className="mr-2 text-[var(--accent-color)]" />
//                       {formatDate(project.endDate)}
//                     </p>
//                   </motion.div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <motion.div 
//                     whileHover={{ y: -3 }}
//                     className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
//                   >
//                     <p className="text-xs text-[var(--text-secondary)] mb-1">Team Size</p>
//                     <p className="font-medium flex items-center">
//                       <FiUsers className="mr-2 text-[var(--accent-color)]" />
//                       {project.teamSize} members
//                     </p>
//                   </motion.div>
//                   <motion.div 
//                     whileHover={{ y: -3 }}
//                     className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
//                   >
//                     <p className="text-xs text-[var(--text-secondary)] mb-1">Budget</p>
//                     <p className="font-medium flex items-center">
//                       <FiDollarSign className="mr-2 text-[var(--accent-color)]" />
//                       ${project.budget.toLocaleString()}
//                     </p>
//                   </motion.div>
//                 </div>

//                 <motion.div 
//                   whileHover={{ y: -3 }}
//                   className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
//                 >
//                   <p className="text-xs text-[var(--text-secondary)] mb-1">Tags</p>
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     {project.tags?.map((tag, index) => (
//                       <motion.span
//                         key={index}
//                         whileHover={{ y: -2, scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="text-xs px-2.5 py-1 bg-white dark:bg-gray-700 text-[var(--text-secondary)] rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"
//                       >
//                         {tag}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </motion.div>
//               </motion.div>

//               <motion.div
//                 initial={{ y: 10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//                 className="mt-6 flex gap-3"
//               >
//                 <motion.a
//                   whileHover={{ y: -3, boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)" }}
//                   whileTap={{ scale: 0.95 }}
//                   href={project.demoUrl || '#'}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white rounded-lg shadow-md transition-all"
//                 >
//                   <FiExternalLink />
//                   Live Demo
//                 </motion.a>
//                 <motion.a
//                   whileHover={{ y: -3, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
//                   whileTap={{ scale: 0.95 }}
//                   href={project.repoUrl || '#'}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-900 text-white rounded-lg shadow-md transition-all"
//                 >
//                   <FiGithub />
//                   Repository
//                 </motion.a>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Tabs with animated underline */}
//       <div className="mb-6 border-b border-gray-200 dark:border-gray-700 relative">
//         <nav className="-mb-px flex space-x-8">
//           {['overview', 'tasks', 'team', 'documents', 'timeline'].map((tab) => (
//             <motion.button
//               key={tab}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setActiveTab(tab)}
//               className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize relative ${
//                 activeTab === tab
//                   ? 'text-[var(--accent-color)]'
//                   : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
//               }`}
//             >
//               {tab}
//               {activeTab === tab && (
//                 <motion.div
//                   layoutId="tabUnderline"
//                   className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent-color)]"
//                   transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
//                 />
//               )}
//             </motion.button>
//           ))}
//         </nav>
//       </div>

//       {/* Tab content with advanced animations */}
//       <motion.div
//         key={activeTab}
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//         className="bg-[var(--card-bg)] rounded-2xl shadow-xl border border-[var(--card-border)] p-6 relative overflow-hidden"
//       >
//         {/* Animated background elements */}
//         <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full ${statusInfo.bgLight} opacity-20`}></div>
//         <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full ${priorityInfo.priorityColor} opacity-10`}></div>
        
//         <AnimatePresence mode="wait">
//           {activeTab === 'overview' && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="space-y-6 relative z-10"
//             >
//               <div>
//                 <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center">
//                   <motion.span 
//                     className="inline-block mr-2"
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ type: 'spring' }}
//                   >
//                     <FiLayers className="text-[var(--accent-color)]" />
//                   </motion.span>
//                   Project Details
//                 </h3>
//                 <div className="prose max-w-none text-[var(--text-secondary)]">
//                   <p>{project.details || 'No additional details provided for this project.'}</p>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center">
//                   <motion.span 
//                     className="inline-block mr-2"
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ type: 'spring', delay: 0.1 }}
//                   >
//                     <FiStar className="text-[var(--accent-color)]" />
//                   </motion.span>
//                   Key Features
//                 </h3>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {project.features?.length > 0 ? (
//                     project.features.map((feature, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}
//                         className="bg-white/90 dark:bg-gray-800/90 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all"
//                       >
//                         <div className="flex items-start gap-3">
//                           <div className={`p-2 rounded-lg ${statusInfo.color} flex-shrink-0`}>
//                             <FiStar className={statusInfo.chartColor} />
//                           </div>
//                           <div className="flex-1">
//                             <div className="flex justify-between items-start">
//                               <h4 className="font-medium text-[var(--text-primary)]">{feature.title}</h4>
//                               <motion.button
//                                 whileHover={{ scale: 1.1 }}
//                                 whileTap={{ scale: 0.9 }}
//                                 onClick={() => toggleFeatureExpand(index)}
//                                 className="text-[var(--text-secondary)] hover:text-[var(--accent-color)]"
//                               >
//                                 {expandedFeatures.includes(index) ? <FiMinus /> : <FiChevronRight />}
//                               </motion.button>
//                             </div>
//                             <AnimatePresence>
//                               {expandedFeatures.includes(index) && (
//                                 <motion.p
//                                   initial={{ height: 0, opacity: 0 }}
//                                   animate={{ height: 'auto', opacity: 1 }}
//                                   exit={{ height: 0, opacity: 0 }}
//                                   className="text-sm text-[var(--text-secondary)] mt-1 overflow-hidden"
//                                 >
//                                   {feature.description}
//                                 </motion.p>
//                               )}
//                             </AnimatePresence>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))
//                   ) : (
//                     <p className="text-[var(--text-secondary)]">No features listed for this project.</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center">
//                   <motion.span 
//                     className="inline-block mr-2"
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ type: 'spring', delay: 0.2 }}
//                   >
//                     <FiZap className="text-[var(--accent-color)]" />
//                   </motion.span>
//                   Technologies
//                 </h3>
//                 <div className="flex flex-wrap gap-3">
//                   {project.technologies?.length > 0 ? (
//                     project.technologies.map((tech, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ 
//                           type: 'spring',
//                           delay: index * 0.05,
//                           stiffness: 200,
//                           damping: 10
//                         }}
//                         whileHover={{ 
//                           scale: 1.1,
//                           y: -3,
//                           backgroundColor: 'var(--accent-color)',
//                           color: 'white'
//                         }}
//                         className="px-4 py-2 bg-[var(--accent-light)] text-[var(--accent-color)] rounded-full text-sm font-medium cursor-default transition-colors"
//                       >
//                         {tech}
//                       </motion.div>
//                     ))
//                   ) : (
//                     <p className="text-[var(--text-secondary)]">No technologies specified.</p>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {activeTab === 'tasks' && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="space-y-4 relative z-10"
//             >
//               <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center">
//                 <motion.span 
//                   className="inline-block mr-2"
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ type: 'spring' }}
//                 >
//                   <FiCheckCircle className="text-[var(--accent-color)]" />
//                 </motion.span>
//                 Project Tasks
//               </h3>
//               {project.tasks?.length > 0 ? (
//                 <div className="space-y-3">
//                   {project.tasks.map((task, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.05 }}
//                       whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
//                       className="bg-white/90 dark:bg-gray-800/90 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all"
//                     >
//                       <div className="flex items-start justify-between gap-3">
//                         <div className="flex items-start gap-3">
//                           <motion.div 
//                             className="mt-1 flex-shrink-0"
//                             whileHover={{ scale: 1.1 }}
//                           >
//                             <input
//                               type="checkbox"
//                               checked={task.completed}
//                               className="h-4 w-4 rounded border-gray-300 text-[var(--accent-color)] focus:ring-[var(--accent-color)] cursor-pointer"
//                             />
//                           </motion.div>
//                           <div>
//                             <h4 className={`font-medium ${task.completed ? 'text-gray-400 dark:text-gray-500 line-through' : 'text-[var(--text-primary)]'}`}>
//                               {task.title}
//                             </h4>
//                             <p className="text-sm text-[var(--text-secondary)] mt-1">{task.description}</p>
//                             <div className="flex flex-wrap gap-2 mt-2">
//                               {task.tags?.map((tag, tagIndex) => (
//                                 <motion.span 
//                                   key={tagIndex}
//                                   whileHover={{ scale: 1.05 }}
//                                   className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
//                                 >
//                                   {tag}
//                                 </motion.span>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                         <div className="flex flex-col items-end">
//                           <span className="text-xs text-[var(--text-secondary)]">
//                             Due: {formatDate(task.dueDate)}
//                           </span>
//                           <motion.span 
//                             whileHover={{ scale: 1.05 }}
//                             className={`text-xs px-2 py-1 mt-2 rounded-full ${
//                               task.priority === 'high' ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300' :
//                               task.priority === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' :
//                               'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
//                             }`}
//                           >
//                             {task.priority}
//                           </motion.span>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="bg-white/90 dark:bg-gray-800/90 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center"
//                 >
//                   <FiCheckCircle className="mx-auto text-4xl text-gray-300 dark:text-gray-600 mb-4" />
//                   <h4 className="text-lg font-medium text-[var(--text-primary)] mb-2">
//                     No Tasks Yet
//                   </h4>
//                   <p className="text-[var(--text-secondary)]">
//                     This project doesn't have any tasks assigned yet.
//                   </p>
//                 </motion.div>
//               )}
//             </motion.div>
//           )}

          // {activeTab === 'team' && (
          //   <motion.div
          //     initial={{ opacity: 0 }}
          //     animate={{ opacity: 1 }}
          //     exit={{ opacity: 0 }}
          //     transition={{ duration: 0.3 }}
          //     className="space-y-4 relative z-10"
          //   >
          //     <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center">
          //       <motion.span 
          //         className="inline-block mr-2"
          //         initial={{ scale: 0 }}
          //         animate={{ scale: 1 }}
          //         transition={{ type: 'spring' }}
          //       >
          //         <FiUsers className="text-[var(--accent-color)]" />
          //       </motion.span>
          //       Project Team
          //     </h3>
          //     {project.teamMembers?.length > 0 ? (
          //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          //         {project.teamMembers.map((member, index) => (
          //           <motion.div
          //             key={index}
          //             initial={{ opacity: 0, scale: 0.9 }}
          //             animate={{ opacity: 1, scale: 1 }}
          //             transition={{ delay: index * 0.05 }}
          //             whileHover={{ 
          //               y: -5,
          //               boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          //               borderColor: 'var(--accent-color)'
          //             }}
          //             className="bg-white/90 dark:bg-gray-800/90 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all"
          //           >
          //             <div className="flex items-center gap-4">
          //               <motion.div 
          //                 whileHover={{ rotate: 5 }}
          //                 className="flex-shrink-0 relative"
          //               >
          //                 <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center text-xl font-bold text-blue-600 dark:text-blue-300">
          //                   {member.name.charAt(0)}
          //                 </div>
          //                 <motion.div 
          //                   className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white dark:border-gray-800 ${
          //                     member.available ? 'bg-green-500' : 'bg-gray-300'
          //                   }`}
          //                   animate={{ 
          //                     scale: [1, 1.1, 1],
          //                     opacity: [0.8, 1, 0.8]
          //                   }}
          //                   transition={{ 
          //                     duration: 2,
          //                     repeat: Infinity,
          //                     ease: "easeInOut"
          //                   }}
          //                 />
          //               </motion.div>
          //               <div>
          //                 <h4 className="font-medium text-[var(--text-primary)]">{member.name}</h4>
          //                 <p className="text-sm text-[var(--text-secondary)]">{member.role}</p>
          //                 <div className="flex gap-2 mt-2">
          //                   {member.skills?.slice(0, 3).map((skill, skillIndex) => (
          //                     <motion.span
          //                       key={skillIndex}
          //                       whileHover={{ scale: 1.1 }}
          //                       className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
          //                     >
          //                       {skill}
          //                     </motion.span>
          //                   ))}
          //                   {member.skills?.length > 3 && (
          //                     <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
          //                       +{member.skills.length - 3}
          //                     </span>
          //                   )}
          //                 </div>
          //               </div>
          //             </div>
          //           </motion.div>
          //         ))}
          //       </div>
          //     ) : (
          //       <motion.div
          //         initial={{ opacity: 0 }}
          //         animate={{ opacity: 1 }}
          //         className="bg-white/90 dark:bg-gray-800/90 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center"
          //       >
          //         <FiUsers className="mx-auto text-4xl text-gray-300 dark:text-gray-600 mb-4" />
          //         <h4 className="text-lg font-medium text-[var(--text-primary)] mb-2">
          //           No Team Members
          //         </h4>
          //         <p className="text-[var(--text-secondary)]">
          //           This project doesn't have any team members assigned yet.
          //         </p>
          //       </motion.div>
          //     )}
          //   </motion.div>
          // )}

//           {activeTab === 'documents' && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="space-y-4 relative z-10"
//             >
//               <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center">
//                 <motion.span 
//                   className="inline-block mr-2"
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ type: 'spring' }}
//                 >
//                   <FiFile className="text-[var(--accent-color)]" />
//                 </motion.span>
//                 Project Documents
//               </h3>
//               {project.documents?.length > 0 ? (
//                 <div className="space-y-3">
//                   {project.documents.map((doc, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.05 }}
//                       whileHover={{ x: 5, boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}
//                       className="bg-white/90 dark:bg-gray-800/90 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex justify-between items-center transition-all"
//                     >
//                       <div className="flex items-center gap-3">
//                         <div className={`p-2 rounded-lg ${statusInfo.color} flex-shrink-0`}>
//                           {doc.type === 'pdf' ? (
//                             <FiLayers className={statusInfo.chartColor} />
//                           ) : doc.type === 'design' ? (
//                             <FiAward className={statusInfo.chartColor} />
//                           ) : (
//                             <FiFile className={statusInfo.chartColor} />
//                           )}
//                         </div>
//                         <div>
//                           <h4 className="font-medium text-[var(--text-primary)]">{doc.name}</h4>
//                           <p className="text-sm text-[var(--text-secondary)]">{doc.size} • {formatDate(doc.uploaded)}</p>
//                         </div>
//                       </div>
//                       <motion.a
//                         whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-color)', color: 'white' }}
//                         whileTap={{ scale: 0.95 }}
//                         href={doc.url || '#'}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:bg-[var(--accent-light)] rounded-lg transition-all"
//                       >
//                         <FiExternalLink />
//                       </motion.a>
//                     </motion.div>
//                   ))}
//                 </div>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="bg-white/90 dark:bg-gray-800/90 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center"
//                 >
//                   <FiFile className="mx-auto text-4xl text-gray-300 dark:text-gray-600 mb-4" />
//                   <h4 className="text-lg font-medium text-[var(--text-primary)] mb-2">
//                     No Documents
//                   </h4>
//                   <p className="text-[var(--text-secondary)]">
//                     This project doesn't have any documents uploaded yet.
//                   </p>
//                 </motion.div>
//               )}
//             </motion.div>
//           )}

//           {activeTab === 'timeline' && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="space-y-4 relative z-10"
//             >
//               <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center">
//                 <motion.span 
//                   className="inline-block mr-2"
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ type: 'spring' }}
//                 >
//                   <FiClock className="text-[var(--accent-color)]" />
//                 </motion.span>
//                 Project Timeline
//               </h3>
//               {project.timeline?.length > 0 ? (
//                 <div className="relative">
//                   {/* Animated timeline line */}
//                   <motion.div
//                     initial={{ scaleY: 0 }}
//                     animate={{ scaleY: 1 }}
//                     transition={{ duration: 0.5 }}
//                     className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-color)] to-gray-200 dark:to-gray-700"
//                   ></motion.div>
                  
//                   {project.timeline.map((event, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="relative pl-12 pb-6"
//                     >
//                       {/* Animated dot */}
//                       <motion.div
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ type: 'spring', delay: index * 0.1 }}
//                         className="absolute left-5 top-1.5 -ml-1.5 w-3 h-3 rounded-full bg-[var(--accent-color)] ring-4 ring-[var(--accent-light)]"
//                       ></motion.div>
                      
//                       <motion.div
//                         whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}
//                         className="bg-white/90 dark:bg-gray-800/90 p-4 shadow-sm border border-gray-200 dark:border-gray-700 transition-all"
// >
//                         <div className="flex justify-between items-start">
//                           <h4 className="font-medium text-[var(--text-primary)]">{event.title}</h4>
//                           <span className="text-xs text-[var(--text-secondary)] bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
//                             {formatDate(event.date)}
//                           </span>
//                         </div>
//                         <p className="text-sm text-[var(--text-secondary)] mt-1">{event.description}</p>
//                         {event.completed && (
//                           <motion.div 
//                             initial={{ scale: 0.9 }}
//                             animate={{ scale: 1 }}
//                             className="flex items-center gap-1 mt-2"
//                           >
//                             <FiCheckCircle className="text-green-500" size={14} />
//                             <span className="text-xs text-green-600 dark:text-green-400">Completed</span>
//                           </motion.div>
//                         )}
//                       </motion.div>
//                     </motion.div>
//                   ))}
//                 </div>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="bg-white/90 dark:bg-gray-800/90 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center"
//                 >
//                   <FiClock className="mx-auto text-4xl text-gray-300 dark:text-gray-600 mb-4" />
//                   <h4 className="text-lg font-medium text-[var(--text-primary)] mb-2">
//                     No Timeline Events
//                   </h4>
//                   <p className="text-[var(--text-secondary)]">
//                     This project doesn't have any timeline events added yet.
//                   </p>
//                 </motion.div>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>

//       {/* Action buttons with floating animation */}
//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="mt-6 flex justify-end gap-3"
//       >
//         <motion.button
//           whileHover={{ 
//             y: -3,
//             boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//             backgroundColor: 'var(--card-bg)',
//             borderColor: 'var(--accent-color)',
//             color: 'var(--accent-color)'
//           }}
//           whileTap={{ scale: 0.95 }}
//           className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 text-[var(--text-primary)] border border-gray-300 dark:border-gray-600 hover:border-[var(--accent-color)] rounded-lg shadow-sm transition-all"
//         >
//           <FiEdit2 />
//           Edit Project
//         </motion.button>
//         <motion.button
//           whileHover={{ 
//             y: -3,
//             boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)"
//           }}
//           whileTap={{ scale: 0.95 }}
//           className="flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-sm transition-all"
//         >
//           <FiTrash2 />
//           Delete Project
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ProjectDetailPage;

















































import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowLeft, FiExternalLink, FiGithub, FiClock, 
  FiCalendar, FiUsers, FiTag, FiCheckCircle, 
  FiAlertCircle, FiBarChart2, FiPieChart, FiZap,
  FiDollarSign, FiLayers, FiTarget, FiActivity,
  FiTrendingUp, FiStar, FiAward, FiEdit2, FiTrash2,
  FiFile, FiChevronRight, FiPlus, FiMinus, FiHeart,
  FiShare2, FiBookmark, FiMessageSquare, FiEye, FiGrid
} from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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

const ProjectDetailPage = ({ projects }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [expandedFeatures, setExpandedFeatures] = useState([]);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(24);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  
  const shareRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundProject = projects.find(p => p.id === id);
      setProject(foundProject);
      setLoading(false);
    }, 800);

    // Close share menu when clicking outside
    const handleClickOutside = (event) => {
      if (shareRef.current && !shareRef.current.contains(event.target)) {
        setShareMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [id, projects]);

  const toggleFeatureExpand = (index) => {
    if (expandedFeatures.includes(index)) {
      setExpandedFeatures(expandedFeatures.filter(i => i !== index));
    } else {
      setExpandedFeatures([...expandedFeatures, index]);
    }
  };

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };














  // const formatDate = (dateString) => {
  //   return new Date(dateString).toLocaleDateString('en-US', {
  //     year: 'numeric',
  //     month: 'short',
  //     day: 'numeric'
  //   });
  // };

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















  const getStatusInfo = (status) => {
    switch(status) {
      case 'completed':
        return { 
          icon: <FiCheckCircle className="text-emerald-500" />, 
          color: 'bg-emerald-100 text-emerald-800',
          text: 'Completed'
        };
      case 'in-progress':
        return { 
          icon: <FiActivity className="text-blue-500" />, 
          color: 'bg-blue-100 text-blue-800',
          text: 'In Progress'
        };
      default:
        return { 
          icon: <FiAlertCircle className="text-amber-500" />, 
          color: 'bg-amber-100 text-amber-800',
          text: 'Pending'
        };
    }
  };

  const getPriorityInfo = (priority) => {
    switch(priority) {
      case 'high':
        return { 
          color: 'bg-rose-100 text-rose-800',
          text: 'High',
          icon: <FiZap className="text-rose-500" />
        };
      case 'medium':
        return { 
          color: 'bg-amber-100 text-amber-800',
          text: 'Medium',
          icon: <FiBarChart2 className="text-amber-500" />
        };
      default:
        return { 
          color: 'bg-emerald-100 text-emerald-800',
          text: 'Low',
          icon: <FiPieChart className="text-emerald-500" />
        };
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not set';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const ProgressCircle = ({ progress, size = 100 }) => {
    const radius = size / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    const color = progress < 30 ? 'stroke-rose-500' : 
                 progress < 70 ? 'stroke-amber-500' : 'stroke-emerald-500';

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg height={size} width={size} className="transform -rotate-90">
          <circle
            className="text-slate-200"
            strokeWidth={8}
            stroke="currentColor"
            fill="transparent"
            r={radius - 4}
            cx={size / 2}
            cy={size / 2}
          />
          <motion.circle
            className={color}
            strokeWidth={8}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius - 4}
            cx={size / 2}
            cy={size / 2}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <motion.span 
            className="text-2xl font-bold text-slate-800"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {progress}%
          </motion.span>
          <span className="text-xs text-slate-500">Complete</span>
        </div>
      </div>
    );
  };

  const LoadingSkeleton = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="lg:w-2/3 relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 h-full">
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-slate-200 rounded w-3/4"></div>
                <div className="flex gap-2">
                  <div className="h-6 bg-slate-200 rounded-full w-20"></div>
                  <div className="h-6 bg-slate-200 rounded-full w-16"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-slate-200 rounded w-full"></div>
                  <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-slate-200 rounded-xl"></div>
                  <div className="h-20 bg-slate-200 rounded-xl"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-slate-200 rounded-xl"></div>
                  <div className="h-20 bg-slate-200 rounded-xl"></div>
                </div>
                <div className="h-12 bg-slate-200 rounded-xl"></div>
                <div className="flex gap-3">
                  <div className="h-10 bg-slate-200 rounded-lg flex-1"></div>
                  <div className="h-10 bg-slate-200 rounded-lg flex-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6 border-b border-slate-200">
          <div className="flex space-x-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 w-20 bg-slate-200 rounded-t-lg"></div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow border border-slate-200 p-6">
          <div className="animate-pulse space-y-6">
            <div className="space-y-4">
              <div className="h-6 bg-slate-200 rounded w-1/4"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
            </div>
            <div className="space-y-4">
              <div className="h-6 bg-slate-200 rounded w-1/4"></div>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-24 bg-slate-200 rounded-xl"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center h-screen text-center p-6"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="bg-blue-100 p-6 rounded-full mb-4"
        >
          <FiAlertCircle className="text-blue-500 text-4xl" />
        </motion.div>
        <motion.h2
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-2xl font-bold text-slate-800 mb-2"
        >
          Project Not Found
        </motion.h2>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 mb-6 max-w-md"
        >
          The project you're looking for doesn't exist or may have been removed.
        </motion.p>
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.03, boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)" }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate(-1)}
          className="inline-flex items-center px-6 py-2.5 border border-transparent text-base font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 shadow-md transition-all"
        >
          Back to Projects
        </motion.button>
      </motion.div>
    );
  }

  const statusInfo = getStatusInfo(project.status);
  const priorityInfo = getPriorityInfo(project.priority);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-slate-50 min-h-screen"
    >
      {/* Header with navigation */}
      <div className="flex justify-between items-center mb-8">
        <motion.button
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="flex items-center text-slate-600 hover:text-blue-500 transition-colors group"
        >
          <motion.span
            className="inline-block mr-2 group-hover:-translate-x-1 transition-transform"
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FiArrowLeft />
          </motion.span>
          Back to projects
        </motion.button>
        
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-slate-600 hover:text-blue-500 transition-colors"
          >
            <FiEdit2 />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-slate-600 hover:text-rose-500 transition-colors"
          >
            <FiTrash2 />
          </motion.button>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Project info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Project header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-800 mb-2">{project.title}</h1>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <motion.span
                    whileHover={{ y: -2 }}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}
                  >
                    {statusInfo.icon}
                    <span className="ml-1.5">{statusInfo.text}</span>
                  </motion.span>
                  <motion.span
                    whileHover={{ y: -2 }}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${priorityInfo.color}`}
                  >
                    {priorityInfo.icon}
                    <span className="ml-1.5">{priorityInfo.text}</span>
                  </motion.span>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <ProgressCircle progress={project.progress} size={80} />
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-100">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLike}
                className={`flex items-center gap-1 px-3 py-1 rounded-lg ${isLiked ? 'bg-rose-50 text-rose-600' : 'bg-slate-100 text-slate-600'} transition-colors`}
              >
                <FiHeart className={isLiked ? 'fill-rose-500' : ''} />
                <span>{likeCount}</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`flex items-center gap-1 px-3 py-1 rounded-lg ${isBookmarked ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'} transition-colors`}
              >
                <FiBookmark className={isBookmarked ? 'fill-blue-500' : ''} />
                <span>Save</span>
              </motion.button>
              
              <div className="relative" ref={shareRef}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShareMenuOpen(!shareMenuOpen)}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-100 text-slate-600 transition-colors"
                >
                  <FiShare2 />
                  <span>Share</span>
                </motion.button>
                
                <AnimatePresence>
                  {shareMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -10 }}
                      className="absolute right-0 top-10 bg-white rounded-xl shadow-lg p-2 w-40 z-10 border border-slate-200"
                    >
                      {['Twitter', 'LinkedIn', 'Facebook', 'Copy Link'].map((item, index) => (
                        <motion.button
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ backgroundColor: '#f8fafc' }}
                          className="w-full text-left px-4 py-2 text-sm rounded-lg flex items-center gap-2 text-slate-700"
                        >
                          {item}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Project image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <motion.div
              className="aspect-w-16 aspect-h-9 h-[42rem] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 shadow-sm cursor-zoom-in relative"
              whileHover={{ scale: isImageZoomed ? 1 : 1.01 }}
              onClick={() => setIsImageZoomed(!isImageZoomed)}
              layout
            >
              <AnimatePresence>
                {!imageLoaded && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-300 animate-pulse"
                  />
                )}
              </AnimatePresence>
              <motion.img
                src={project.image || 'https://source.unsplash.com/random/800x450/?project,technology'}
                alt={project.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: imageLoaded ? 1 : 0,
                  scale: isImageZoomed ? 1.1 : 1
                }}
                transition={{ duration: 0.5 }}
                onLoad={() => setImageLoaded(true)}
                layout
              />
              
              {isImageZoomed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsImageZoomed(false);
                    }}
                    className="bg-white/90 p-2 rounded-full shadow-lg"
                  >
                    <FiMinus className="text-slate-800" />
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
            
            {!isImageZoomed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-4 right-4"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsImageZoomed(true)}
                  className="bg-white/90 p-2 rounded-full shadow-lg"
                >
                  <FiPlus className="text-slate-800" />
                </motion.button>
              </motion.div>
            )}
            
            {/* Stats overlay */}
            <motion.div 
              className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-slate-800 p-3 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <FiHeart className={isLiked ? 'fill-rose-500 text-rose-500' : 'text-slate-600'} />
                  <span className="text-sm font-medium">{likeCount}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiMessageSquare className="text-slate-600" />
                  <span className="text-sm font-medium">{project.comments || 12}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiEye className="text-slate-600" />
                  <span className="text-sm font-medium">{project.views || 245}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

 
          
        </div>

        {/* Right column - Project details */}
        <div className="space-y-8">
          {/* Project links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-4">Project Links</h3>
            <div className="space-y-3">
              <motion.a
                whileHover={{ y: -3, boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href={project.demoUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-all"
              >
                <FiExternalLink />
                Live Demo
              </motion.a>
              <motion.a
                whileHover={{ y: -3, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                href={project.repoUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-lg shadow-md transition-all"
              >
                <FiGithub />
                Repository
              </motion.a>
            </div>
          </motion.div>

          {/* Project info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-4">Project Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <p className="text-xs text-slate-500 mb-1">Start Date</p>
                  <p className="font-medium flex items-center">
                    <FiCalendar className="mr-2 text-blue-500" />
                    {formatDate(project.startDate)}
                  </p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <p className="text-xs text-slate-500 mb-1">End Date</p>
                  <p className="font-medium flex items-center">
                    <FiTarget className="mr-2 text-blue-500" />
                    {formatDate(project.endDate)}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <p className="text-xs text-slate-500 mb-1">Team Size</p>
                  <p className="font-medium flex items-center">
                    <FiUsers className="mr-2 text-blue-500" />
                    {project.teamSize} members
                  </p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <p className="text-xs text-slate-500 mb-1">Budget</p>
                  <p className="font-medium flex items-center">
                    <FiDollarSign className="mr-2 text-blue-500" />
                    ${project.budget.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <p className="text-xs text-slate-500 mb-1">Tags</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags?.map((tag, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-xs px-2.5 py-1 bg-white text-slate-700 rounded-lg shadow-sm border border-slate-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team members */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-4">Team Members</h3>
            <div className="space-y-3">
              {project.teamMembers?.slice(0, 3).map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 transition-all"
                >
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-lg font-bold text-blue-600">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">{member.name}</h4>
                    <p className="text-sm text-slate-500">{member.role}</p>
                  </div>
                </motion.div>
              ))}
              {project.teamMembers?.length > 3 && (
                <motion.button
                  whileHover={{ y: -2 }}
                  className="w-full text-center py-2 text-sm text-blue-500 hover:text-blue-600 font-medium"
                >
                  View all {project.teamMembers.length} members
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </div>






         {/* Tabs */}


<motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white w-full mt-15 rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
          >
            <div className="border-b border-slate-200">
              <nav className="flex overflow-x-auto">
                {['overview', 'tasks', 'team', 'documents', 'timeline', 'analytics'].map((tab) => (
                  <motion.button
                    key={tab}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 whitespace-nowrap py-4 px-1 font-medium text-sm capitalize relative min-w-[120px] ${
                      activeTab === tab
                        ? 'text-blue-500'
                        : 'text-slate-600 hover:text-slate-800'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="tabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                ))}
              </nav>
            </div>
            
            {/* Tab content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                        <FiLayers className="mr-2 text-blue-500" />
                        Project Details
                      </h3>
                      <div className="prose max-w-none text-slate-600">
                        <p>{project.details || 'No additional details provided for this project.'}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                        <FiStar className="mr-2 text-blue-500" />
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
                                  <FiStar />
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
                                      {expandedFeatures.includes(index) ? <FiMinus /> : <FiChevronRight />}
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
                        <FiZap className="mr-2 text-blue-500" />
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                      <FiCheckCircle className="mr-2 text-blue-500" />
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
                        <FiCheckCircle className="mx-auto text-4xl text-slate-300 mb-4" />
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
          </motion.div>











    </motion.div>
  );
};

export default ProjectDetailPage;