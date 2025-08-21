// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   FiArrowLeft, FiEdit2, FiTrash2, FiCheck, FiClock, 
//   FiAlertCircle, FiCalendar, FiUsers, FiBarChart2, 
//   FiLayers, FiDollarSign, FiPieChart, FiTag, 
//   FiAward, FiStar, FiTrendingUp, FiFolder, 
//   FiActivity, FiTarget, FiZap, FiLink, FiMessageSquare,
//   FiFileText, FiGitBranch, FiFlag, FiCheckCircle,
//   FiPlus, FiDownload, FiShare2
// } from 'react-icons/fi';
// import { useState } from 'react';

// // Status and Priority helper functions (same as your ProjectList)
// const getStatusInfo = (status) => {
//   switch(status) {
//     case 'completed':
//       return { 
//         icon: <FiCheckCircle className="text-green-500" />, 
//         color: 'bg-green-100 text-green-800',
//         text: 'Completed',
//         gradient: 'from-green-100 to-green-50',
//         badgeClass: 'ring-green-500/20',
//         chartColor: 'bg-green-500',
//         bgLight: 'bg-green-50/80'
//       };
//     case 'in-progress':
//       return { 
//         icon: <FiClock className="text-blue-500" />, 
//         color: 'bg-blue-100 text-blue-800',
//         text: 'In Progress',
//         gradient: 'from-blue-100 to-blue-50',
//         badgeClass: 'ring-blue-500/20',
//         chartColor: 'bg-blue-500',
//         bgLight: 'bg-blue-50/80'
//       };
//     default:
//       return { 
//         icon: <FiAlertCircle className="text-yellow-500" />, 
//         color: 'bg-yellow-100 text-yellow-800',
//         text: 'Pending',
//         gradient: 'from-yellow-100 to-yellow-50',
//         badgeClass: 'ring-yellow-500/20',
//         chartColor: 'bg-yellow-500',
//         bgLight: 'bg-yellow-50/80'
//       };
//   }
// };

// const getPriorityInfo = (priority) => {
//   switch(priority) {
//     case 'high':
//       return { 
//         color: 'bg-red-100 text-red-800',
//         text: 'High',
//         border: 'border-red-200',
//         icon: <FiZap className="text-red-500" />,
//         priorityClass: 'ring-red-500/30',
//         priorityColor: 'bg-red-500/10'
//       };
//     case 'medium':
//       return { 
//         color: 'bg-yellow-100 text-yellow-800',
//         text: 'Medium',
//         border: 'border-yellow-200',
//         icon: <FiBarChart2 className="text-yellow-500" />,
//         priorityClass: 'ring-yellow-500/30',
//         priorityColor: 'bg-yellow-500/10'
//       };
//     default:
//       return { 
//         color: 'bg-green-100 text-green-800',
//         text: 'Low',
//         border: 'border-green-200',
//         icon: <FiPieChart className="text-green-500" />,
//         priorityClass: 'ring-green-500/30',
//         priorityColor: 'bg-green-500/10'
//       };
//   }
// };

// // Utility functions
// const formatDate = (dateString) => {
//   if (!dateString) return 'Not set';
//   const options = { year: 'numeric', month: 'short', day: 'numeric' };
//   return new Date(dateString).toLocaleDateString(undefined, options);
// };

// const calculateDuration = (startDate, endDate) => {
//   if (!startDate || !endDate) return 'N/A';
//   const diff = new Date(endDate) - new Date(startDate);
//   const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
//   if (days > 60) return `${Math.round(days/30)} months`;
//   if (days > 14) return `${Math.round(days/7)} weeks`;
//   return `${days} days`;
// };

// // Components
// const ProgressCircle = ({ progress, size = 60 }) => {
//   const radius = size / 2;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDashoffset = circumference - (progress / 100) * circumference;
//   const color = progress < 30 ? 'stroke-red-500' : 
//                progress < 70 ? 'stroke-yellow-500' : 'stroke-green-500';

//   return (
//     <div className="relative inline-flex items-center justify-center">
//       <svg height={size} width={size} className="transform -rotate-90">
//         <circle
//           className="text-gray-200/80"
//           strokeWidth={6}
//           stroke="currentColor"
//           fill="transparent"
//           r={radius}
//           cx={size / 2}
//           cy={size / 2}
//         />
//         <motion.circle
//           className={color}
//           strokeWidth={6}
//           strokeDasharray={circumference}
//           strokeDashoffset={strokeDashoffset}
//           strokeLinecap="round"
//           stroke="currentColor"
//           fill="transparent"
//           r={radius}
//           cx={size / 2}
//           cy={size / 2}
//           initial={{ strokeDashoffset: circumference }}
//           animate={{ strokeDashoffset }}
//           transition={{ duration: 1.5, ease: "easeInOut" }}
//         />
//       </svg>
//       <div className="absolute flex flex-col items-center">
//         <span className="text-lg font-bold text-[var(--text-primary)]">
//           {progress}%
//         </span>
//       </div>
//     </div>
//   );
// };

// const ProgressBar = ({ progress, height = 8 }) => {
//   const color = progress < 30 ? 'bg-red-500' : 
//                progress < 70 ? 'bg-yellow-500' : 'bg-green-500';

//   return (
//     <div className="w-full bg-gray-200 rounded-full overflow-hidden">
//       <motion.div 
//         initial={{ width: 0 }}
//         animate={{ width: `${progress}%` }}
//         transition={{ duration: 1.5, ease: "easeInOut" }}
//         className={`h-${height} rounded-full ${color}`}
//       />
//     </div>
//   );
// };

// const TeamMemberCard = ({ member }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="bg-[var(--card-bg)] p-4 rounded-xl shadow-sm border border-[var(--card-border)]"
//     >
//       <div className="flex flex-col items-center text-center">
//         <div className="relative mb-3">
//           <motion.div
//             animate={{
//               scale: isHovered ? 1.05 : 1,
//               boxShadow: isHovered ? '0 10px 25px -5px rgba(0,0,0,0.1)' : '0 4px 6px -1px rgba(0,0,0,0.05)'
//             }}
//             className="w-16 h-16 rounded-full bg-white border-2 border-white overflow-hidden"
//           >
//             <img 
//               src={member.avatar} 
//               alt={member.name} 
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//           {member.isLead && (
//             <motion.div
//               animate={{
//                 scale: isHovered ? 1.2 : 1,
//                 rotate: isHovered ? 10 : 0
//               }}
//               className="absolute -top-1 -right-1 bg-yellow-100 text-yellow-800 p-1 rounded-full shadow-sm"
//             >
//               <FiStar size={12} />
//             </motion.div>
//           )}
//         </div>
//         <div>
//           <h4 className="font-medium text-[var(--text-primary)]">{member.name}</h4>
//           <p className="text-sm text-[var(--text-secondary)]">{member.role}</p>
//         </div>
        
//         <motion.div 
//           animate={{ opacity: isHovered ? 1 : 0.8 }}
//           className="flex gap-2 mt-3"
//         >
//           <motion.button 
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:bg-[var(--accent-light)] rounded-lg transition-all"
//           >
//             <FiMessageSquare size={16} />
//           </motion.button>
//           <motion.button 
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="p-2 text-[var(--text-secondary)] hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all"
//           >
//             <FiLink size={16} />
//           </motion.button>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// const TaskCard = ({ task, onEdit, onDelete, onToggleComplete }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const isCompleted = task.status === 'completed';

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ scale: 1.02 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className={`bg-[var(--card-bg)] p-4 rounded-lg shadow-sm border ${isCompleted ? 'border-green-100' : 'border-[var(--card-border)]'}`}
//     >
//       <div className="flex items-start justify-between gap-3">
//         <div className="flex items-start gap-3">
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             onClick={onToggleComplete}
//             className={`flex-shrink-0 w-5 h-5 mt-0.5 rounded-full border flex items-center justify-center transition-all ${isCompleted ? 'bg-green-100 border-green-300 text-green-600' : 'bg-white border-[var(--card-border)]'}`}
//           >
//             {isCompleted && <FiCheck size={14} />}
//           </motion.button>
//           <div className="flex-1 min-w-0">
//             <h4 className={`font-medium ${isCompleted ? 'text-[var(--text-secondary)] line-through' : 'text-[var(--text-primary)]'}`}>
//               {task.title}
//             </h4>
//             <p className="text-sm text-[var(--text-secondary)] mt-1">
//               {task.description}
//             </p>
//             {task.dueDate && (
//               <div className="flex items-center gap-1 mt-2">
//                 <FiCalendar size={12} className="text-[var(--text-secondary)]" />
//                 <span className="text-xs text-[var(--text-secondary)]">
//                   Due {formatDate(task.dueDate)}
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>
//         <motion.div
//           animate={{
//             opacity: isHovered ? 1 : 0.7,
//             x: isHovered ? 0 : 5
//           }}
//           className="flex gap-1"
//         >
//           <motion.button 
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={onEdit}
//             className="p-1 text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:bg-[var(--accent-light)] rounded transition-all"
//           >
//             <FiEdit2 size={16} />
//           </motion.button>
//           <motion.button 
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={onDelete}
//             className="p-1 text-[var(--text-secondary)] hover:text-red-600 hover:bg-red-50 rounded transition-all"
//           >
//             <FiTrash2 size={16} />
//           </motion.button>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// const MilestoneCard = ({ milestone, index, isLast }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const isCompleted = milestone.status === 'completed';

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.05 }}
//       whileHover={{ scale: 1.01 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="relative"
//     >
//       <div className="flex items-start gap-4">
//         <div className="flex flex-col items-center">
//           <motion.div
//             animate={{
//               scale: isHovered ? 1.1 : 1,
//               backgroundColor: isCompleted ? 'var(--accent-color)' : 'var(--card-border)'
//             }}
//             className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
//           >
//             {isCompleted ? (
//               <FiCheck className="text-white" size={16} />
//             ) : (
//               <span className="text-white font-medium text-sm">{index + 1}</span>
//             )}
//           </motion.div>
//           {!isLast && (
//             <motion.div 
//               animate={{
//                 height: isHovered ? 'calc(100% + 10px)' : '100%'
//               }}
//               className="w-0.5 bg-[var(--card-border)] flex-1 my-1"
//             />
//           )}
//         </div>
//         <motion.div
//           animate={{
//             boxShadow: isHovered ? '0 10px 15px -3px rgba(0,0,0,0.05)' : '0 1px 3px 0 rgba(0,0,0,0.05)'
//           }}
//           className={`flex-1 p-4 mb-4 rounded-lg ${isCompleted ? 'bg-green-50 border border-green-100' : 'bg-[var(--card-bg)] border border-[var(--card-border)]'}`}
//         >
//           <div className="flex justify-between items-start">
//             <div>
//               <h4 className={`font-medium ${isCompleted ? 'text-green-800' : 'text-[var(--text-primary)]'}`}>
//                 {milestone.title}
//               </h4>
//               <p className="text-sm text-[var(--text-secondary)] mt-1">
//                 {milestone.description}
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className={`text-xs px-2 py-1 rounded-full ${isCompleted ? 'bg-green-100 text-green-800' : 'bg-[var(--card-bg)] text-[var(--text-secondary)]'}`}>
//                 {formatDate(milestone.dueDate)}
//               </span>
//             </div>
//           </div>
//           {milestone.tasks && milestone.tasks.length > 0 && (
//             <div className="mt-3 space-y-2">
//               {milestone.tasks.map((task, i) => (
//                 <div key={i} className="flex items-center gap-2">
//                   <div className={`w-2 h-2 rounded-full ${task.status === 'completed' ? 'bg-green-400' : 'bg-[var(--card-border)]'}`} />
//                   <span className={`text-xs ${task.status === 'completed' ? 'text-[var(--text-secondary)] line-through' : 'text-[var(--text-primary)]'}`}>
//                     {task.title}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// const FileCard = ({ file, onDownload, onShare, onDelete }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       whileHover={{ y: -3 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="bg-[var(--card-bg)] p-4 rounded-lg shadow-sm border border-[var(--card-border)]"
//     >
//       <div className="flex items-center gap-3">
//         <div className={`p-3 rounded-lg ${isHovered ? 'bg-[var(--accent-light)] text-[var(--accent-color)]' : 'bg-[var(--card-bg)] text-[var(--text-secondary)]'}`}>
//           <FiFileText size={20} />
//         </div>
//         <div className="flex-1 min-w-0">
//           <h4 className="font-medium text-[var(--text-primary)] truncate">{file.name}</h4>
//           <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
//             <span>{file.size}</span>
//             <span>•</span>
//             <span>{formatDate(file.uploaded)}</span>
//           </div>
//         </div>
//         <motion.div
//           animate={{ opacity: isHovered ? 1 : 0.7 }}
//           className="flex gap-1"
//         >
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={onDownload}
//             className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:bg-[var(--accent-light)] rounded-lg"
//           >
//             <FiDownload size={16} />
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={onShare}
//             className="p-1.5 text-[var(--text-secondary)] hover:text-blue-500 hover:bg-blue-50 rounded-lg"
//           >
//             <FiShare2 size={16} />
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={onDelete}
//             className="p-1.5 text-[var(--text-secondary)] hover:text-red-600 hover:bg-red-50 rounded-lg"
//           >
//             <FiTrash2 size={16} />
//           </motion.button>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// const DiscussionCard = ({ post, onReply }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       whileHover={{ y: -3 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="bg-[var(--card-bg)] p-4 rounded-lg shadow-sm border border-[var(--card-border)]"
//     >
//       <div className="flex items-start gap-3">
//         <img 
//           src={post.avatar} 
//           alt={post.author}
//           className="w-10 h-10 rounded-full object-cover flex-shrink-0"
//         />
//         <div className="flex-1">
//           <div className="flex items-center justify-between mb-1">
//             <h4 className="font-bold text-[var(--text-primary)]">{post.author}</h4>
//             <span className="text-xs text-[var(--text-secondary)]">{post.time}</span>
//           </div>
//           <p className="text-[var(--text-secondary)] mb-3">{post.content}</p>
//           <div className="flex items-center gap-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={onReply}
//               className="flex items-center text-sm text-[var(--text-secondary)] hover:text-[var(--accent-color)]"
//             >
//               <FiMessageSquare className="mr-1" size={14} />
//               {post.replies} {post.replies === 1 ? 'reply' : 'replies'}
//             </motion.button>
//             {post.attachments > 0 && (
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex items-center text-sm text-[var(--text-secondary)] hover:text-[var(--accent-color)]"
//               >
//                 <FiLink className="mr-1" size={14} />
//                 {post.attachments} {post.attachments === 1 ? 'attachment' : 'attachments'}
//               </motion.button>
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ProjectDetailPage = ({ project, onBack }) => {
//   const statusInfo = getStatusInfo(project.status);
//   const priorityInfo = getPriorityInfo(project.priority);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [isImageHovered, setIsImageHovered] = useState(false);

//   // Mock data
//   const teamMembers = [
//     { id: 1, name: 'Alex Johnson', role: 'Project Lead', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', isLead: true },
//     { id: 2, name: 'Sarah Williams', role: 'Designer', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
//     { id: 3, name: 'Michael Chen', role: 'Developer', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
//     { id: 4, name: 'Emma Davis', role: 'QA Engineer', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
//   ];

//   const [tasks, setTasks] = useState([
//     { id: 1, title: 'Design homepage mockup', description: 'Create initial design concepts for homepage', status: 'completed', dueDate: '2023-06-15' },
//     { id: 2, title: 'Develop user authentication', description: 'Implement login and registration flows', status: 'in-progress', dueDate: '2023-06-25' },
//     { id: 3, title: 'API integration', description: 'Connect frontend to backend services', status: 'pending', dueDate: '2023-07-05' },
//     { id: 4, title: 'Mobile responsiveness', description: 'Ensure all pages work on mobile devices', status: 'pending', dueDate: '2023-07-10' },
//   ]);

//   const milestones = [
//     { 
//       id: 1, 
//       title: 'Project Kickoff', 
//       description: 'Initial planning and requirements gathering', 
//       status: 'completed', 
//       dueDate: '2023-05-01',
//       tasks: [
//         { title: 'Define project scope', status: 'completed' },
//         { title: 'Create initial timeline', status: 'completed' },
//       ]
//     },
//     { 
//       id: 2, 
//       title: 'Design Phase', 
//       description: 'Complete all design mockups and prototypes', 
//       status: 'in-progress', 
//       dueDate: '2023-06-30',
//       tasks: [
//         { title: 'Homepage design', status: 'completed' },
//         { title: 'Dashboard design', status: 'in-progress' },
//       ]
//     },
//     { 
//       id: 3, 
//       title: 'Development Phase', 
//       description: 'Implement all core features', 
//       status: 'pending', 
//       dueDate: '2023-08-15',
//       tasks: [
//         { title: 'User authentication', status: 'pending' },
//         { title: 'API development', status: 'pending' },
//       ]
//     },
//   ];

//   const [files, setFiles] = useState([
//     { id: 1, name: 'Project_Brief.pdf', type: 'pdf', size: '2.4 MB', uploaded: '2023-05-10' },
//     { id: 2, name: 'Design_Mockups.zip', type: 'zip', size: '15.7 MB', uploaded: '2023-05-15' },
//     { id: 3, name: 'Technical_Specs.docx', type: 'doc', size: '1.2 MB', uploaded: '2023-05-18' },
//   ]);

//   const discussionPosts = [
//     { 
//       id: 1, 
//       author: 'Alex Johnson', 
//       avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
//       content: 'Has anyone reviewed the latest design mockups? I think we need to adjust the color scheme to match our brand guidelines more closely.',
//       time: '2 days ago',
//       replies: 5,
//       attachments: 2
//     },
//     { 
//       id: 2, 
//       author: 'Sarah Williams', 
//       avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//       content: "I've completed the homepage design and shared it in the Figma file. Please provide your feedback when you get a chance.",
//       time: '1 day ago',
//       replies: 3,
//       attachments: 1
//     },
//   ];

//   // Handlers
//   const toggleTaskCompletion = (taskId) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId 
//         ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' } 
//         : task
//     ));
//   };

//   const deleteTask = (taskId) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   const deleteFile = (fileId) => {
//     setFiles(files.filter(file => file.id !== fileId));
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Back button and header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex items-center justify-between mb-8"
//       >
//         <motion.button
//           whileHover={{ x: -3 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={onBack}
//           className="flex items-center text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
//         >
//           <FiArrowLeft className="mr-2" />
//           Back to Projects
//         </motion.button>
        
//         <div className="flex items-center gap-3">
//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             className="flex items-center px-4 py-2 bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-colors"
//           >
//             <FiEdit2 className="mr-2" />
//             Edit Project
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             className="flex items-center px-4 py-2 bg-white border border-[var(--card-border)] hover:bg-gray-50 text-[var(--text-primary)] rounded-lg transition-colors"
//           >
//             <FiTrash2 className="mr-2 text-red-500" />
//             Delete
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Project header */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.1 }}
//         className="mb-8"
//       >
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Project image */}
//           <motion.div
//             whileHover={{ scale: 1.01 }}
//             onHoverStart={() => setIsImageHovered(true)}
//             onHoverEnd={() => setIsImageHovered(false)}
//             className="relative w-full md:w-1/3 lg:w-1/4 rounded-xl overflow-hidden shadow-lg"
//           >
//             <img 
//               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
//               alt={project.title}
//               className="w-full h-full object-cover"
//             />
//             <motion.div
//               animate={{
//                 opacity: isImageHovered ? 1 : 0,
//                 backdropFilter: isImageHovered ? 'blur(4px)' : 'blur(0px)'
//               }}
//               className="absolute inset-0 bg-black/20 flex items-center justify-center"
//             >
//               <motion.button
//                 animate={{
//                   scale: isImageHovered ? 1 : 0.8,
//                   opacity: isImageHovered ? 1 : 0
//                 }}
//                 className="bg-white/90 text-[var(--accent-color)] p-3 rounded-full shadow-lg"
//               >
//                 <FiEdit2 size={20} />
//               </motion.button>
//             </motion.div>
//           </motion.div>

//           {/* Project info */}
//           <div className="flex-1">
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
//               <div>
//                 <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
//                   {project.title}
//                 </h1>
//                 <p className="text-lg text-[var(--text-secondary)]">
//                   {project.description}
//                 </p>
//               </div>
//               <div className="flex flex-col items-end">
//                 <span className="text-2xl font-bold text-[var(--text-primary)] flex items-center">
//                   <FiDollarSign className="mr-1" />
//                   {project.budget.toLocaleString()}
//                 </span>
//                 <span className="text-sm text-[var(--text-secondary)]">Total Budget</span>
//               </div>
//             </div>

//             <div className="flex flex-wrap items-center gap-3 mb-6">
//               <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color} ${statusInfo.badgeClass} ring-1 ring-inset`}>
//                 {statusInfo.icon}
//                 <span className="ml-1.5">{statusInfo.text}</span>
//               </span>
              
//               <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${priorityInfo.color} ${priorityInfo.priorityClass} ring-1 ring-inset`}>
//                 {priorityInfo.icon}
//                 <span className="ml-1.5">{priorityInfo.text}</span>
//               </span>
              
//               <div className="flex items-center text-sm text-[var(--text-secondary)] bg-[var(--card-bg)] px-3 py-1 rounded-lg shadow-sm border border-[var(--card-border)]">
//                 <FiUsers className="mr-1.5" size={14} />
//                 <span>{project.teamSize} member{project.teamSize !== 1 ? 's' : ''}</span>
//               </div>
              
//               <div className="flex items-center text-sm text-[var(--text-secondary)] bg-[var(--card-bg)] px-3 py-1 rounded-lg shadow-sm border border-[var(--card-border)]">
//                 <FiCalendar className="mr-1.5" size={14} />
//                 <span>{calculateDuration(project.startDate, project.endDate)}</span>
//               </div>
//             </div>

//             <div className="mb-6">
//               <div className="flex justify-between text-sm mb-1">
//                 <span className="text-[var(--text-secondary)]">Project Progress</span>
//                 <span className="font-medium">{project.progress}%</span>
//               </div>
//               <ProgressBar progress={project.progress} height={10} />
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <div className="bg-[var(--card-bg)] p-3 rounded-lg shadow-sm border border-[var(--card-border)]">
//                 <p className="text-sm text-[var(--text-secondary)] mb-1">Start Date</p>
//                 <p className="font-medium">{formatDate(project.startDate)}</p>
//               </div>
//               <div className="bg-[var(--card-bg)] p-3 rounded-lg shadow-sm border border-[var(--card-border)]">
//                 <p className="text-sm text-[var(--text-secondary)] mb-1">End Date</p>
//                 <p className="font-medium">{formatDate(project.endDate)}</p>
//               </div>
//               <div className="bg-[var(--card-bg)] p-3 rounded-lg shadow-sm border border-[var(--card-border)]">
//                 <p className="text-sm text-[var(--text-secondary)] mb-1">Tasks</p>
//                 <p className="font-medium">12/24 completed</p>
//               </div>
//               <div className="bg-[var(--card-bg)] p-3 rounded-lg shadow-sm border border-[var(--card-border)]">
//                 <p className="text-sm text-[var(--text-secondary)] mb-1">Last Updated</p>
//                 <p className="font-medium">2 days ago</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Tabs */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="mb-6"
//       >
//         <div className="border-b border-[var(--card-border)]">
//           <nav className="-mb-px flex space-x-8 overflow-x-auto">
//             {['overview', 'tasks', 'milestones', 'team', 'files', 'discussion'].map((tab) => (
//               <motion.button
//                 key={tab}
//                 whileHover={{ color: 'var(--accent-color)' }}
//                 onClick={() => setActiveTab(tab)}
//                 className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab ? 'border-[var(--accent-color)] text-[var(--accent-color)]' : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--card-border)]'}`}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </motion.button>
//             ))}
//           </nav>
//         </div>
//       </motion.div>

//       {/* Tab content */}
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}
//         className="mb-12"
//       >
//         <AnimatePresence mode="wait">
//           {activeTab === 'overview' && (
//             <motion.div
//               key="overview"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="grid grid-cols-1 lg:grid-cols-3 gap-6"
//             >
//               <div className="lg:col-span-2 space-y-6">
//                 {/* Project details */}
//                 <div className="bg-[var(--card-bg)] p-6 rounded-xl shadow-sm border border-[var(--card-border)]">
//                   <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center">
//                     <FiFileText className="mr-2 text-[var(--accent-color)]" />
//                     Project Details
//                   </h3>
//                   <div className="prose max-w-none text-[var(--text-secondary)]">
//                     <p>
//                       This project aims to develop a comprehensive customer relationship management (CRM) platform that will streamline our sales processes, improve customer interactions, and provide actionable insights through advanced analytics.
//                     </p>
//                     <h4 className="text-[var(--text-primary)] mt-6 mb-2">Key Objectives</h4>
//                     <ul className="space-y-2">
//                       <li>Implement a user-friendly interface for sales teams</li>
//                       <li>Integrate with existing marketing and support systems</li>
//                       <li>Provide real-time analytics and reporting</li>
//                       <li>Ensure mobile accessibility for field teams</li>
//                       <li>Maintain high security standards for customer data</li>
//                     </ul>
//                     <h4 className="text-[var(--text-primary)] mt-6 mb-2">Requirements</h4>
//                     <ul className="space-y-2">
//                       <li>User authentication with role-based access</li>
//                       <li>Customer data management</li>
//                       <li>Sales pipeline visualization</li>
//                       <li>Automated reporting</li>
//                       <li>API for third-party integrations</li>
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Recent activity */}
//                 <div className="bg-[var(--card-bg)] p-6 rounded-xl shadow-sm border border-[var(--card-border)]">
//                   <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center">
//                     <FiActivity className="mr-2 text-[var(--accent-color)]" />
//                     Recent Activity
//                   </h3>
//                   <div className="space-y-4">
//                     {[1, 2, 3, 4].map((item) => (
//                       <motion.div
//                         key={item}
//                         whileHover={{ x: 5 }}
//                         className="flex items-start gap-3 pb-4 border-b border-[var(--card-border)] last:border-0 last:pb-0"
//                       >
//                         <div className="bg-[var(--accent-light)] p-2 rounded-full text-[var(--accent-color)]">
//                           {item === 1 ? <FiEdit2 size={16} /> : 
//                            item === 2 ? <FiCheck size={16} /> : 
//                            item === 3 ? <FiGitBranch size={16} /> : <FiMessageSquare size={16} />}
//                         </div>
//                         <div className="flex-1">
//                           <div className="flex items-center justify-between">
//                             <h4 className="font-medium text-[var(--text-primary)]">
//                               {item === 1 ? 'Project details updated' : 
//                                item === 2 ? 'Task marked as completed' : 
//                                item === 3 ? 'New branch created' : 'New comment added'}
//                             </h4>
//                             <span className="text-xs text-[var(--text-secondary)]">2h ago</span>
//                           </div>
//                           <p className="text-sm text-[var(--text-secondary)] mt-1">
//                             {item === 1 ? 'Alex Johnson updated the project budget and timeline' : 
//                              item === 2 ? '"Design homepage mockup" task was completed by Sarah Williams' : 
//                              item === 3 ? 'Michael Chen created a new feature branch for authentication' : 'Emma Davis left a comment on the API integration task'}
//                           </p>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 {/* Team members */}
//                 <div className="bg-[var(--card-bg)] p-6 rounded-xl shadow-sm border border-[var(--card-border)]">
//                   <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center">
//                     <FiUsers className="mr-2 text-[var(--accent-color)]" />
//                     Team Members
//                   </h3>
//                   <div className="grid grid-cols-2 gap-4">
//                     {teamMembers.slice(0, 4).map((member) => (
//                       <TeamMemberCard 
//                         key={member.id}
//                         member={member}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Quick stats */}
//                 <div className="bg-[var(--card-bg)] p-6 rounded-xl shadow-sm border border-[var(--card-border)]">
//                   <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center">
//                     <FiBarChart2 className="mr-2 text-[var(--accent-color)]" />
//                     Quick Stats
//                   </h3>
//                   <div className="space-y-4">
//                     <div>
//                       <div className="flex justify-between text-sm mb-1">
//                         <span className="text-[var(--text-secondary)]">Tasks Completion</span>
//                         <span className="font-medium">50%</span>
//                       </div>
//                       <ProgressBar progress={50} />
//                     </div>
//                     <div>
//                       <div className="flex justify-between text-sm mb-1">
//                         <span className="text-[var(--text-secondary)]">Budget Used</span>
//                         <span className="font-medium">$12,450 / $25,000</span>
//                       </div>
//                       <ProgressBar progress={Math.round((12450 / 25000) * 100)} />
//                     </div>
//                     <div>
//                       <div className="flex justify-between text-sm mb-1">
//                         <span className="text-[var(--text-secondary)]">Time Elapsed</span>
//                         <span className="font-medium">45%</span>
//                       </div>
//                       <ProgressBar progress={45} />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Project links */}
//                 <div className="bg-[var(--card-bg)] p-6 rounded-xl shadow-sm border border-[var(--card-border)]">
//                   <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center">
//                     <FiLink className="mr-2 text-[var(--accent-color)]" />
//                     Project Links
//                   </h3>
//                   <div className="space-y-3">
//                     {[
//                       { name: 'Design Prototype', url: 'https://figma.com/project' },
//                       { name: 'GitHub Repository', url: 'https://github.com/project' },
//                       { name: 'Project Documentation', url: 'https://docs.project.com' },
//                       { name: 'Testing Environment', url: 'https://test.project.com' }
//                     ].map((link, index) => (
//                       <motion.a
//                         key={index}
//                         whileHover={{ x: 5 }}
//                         href={link.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center text-sm text-[var(--accent-color)] hover:underline"
//                       >
//                         <FiLink className="mr-2" size={14} />
//                         {link.name}
//                       </motion.a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {activeTab === 'tasks' && (
//             <motion.div
//               key="tasks"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="space-y-6"
//             >
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
//                 <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center">
//                   <FiCheckCircle className="mr-2 text-[var(--accent-color)]" />
//                   Project Tasks
//                 </h3>
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="flex items-center px-4 py-2 bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-colors"
//                 >
//                   <FiPlus className="mr-2" />
//                   Add Task
//                 </motion.button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//                 <div className="bg-[var(--card-bg)] p-4 rounded-lg shadow-sm border border-[var(--card-border)]">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-[var(--text-secondary)]">Total Tasks</span>
//                     <span className="text-lg font-bold">24</span>
//                   </div>
//                 </div>
//                 <div className="bg-[var(--card-bg)] p-4 rounded-lg shadow-sm border border-green-100">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-[var(--text-secondary)]">Completed</span>
//                     <span className="text-lg font-bold text-green-600">12</span>
//                   </div>
//                 </div>
//                 <div className="bg-[var(--card-bg)] p-4 rounded-lg shadow-sm border border-blue-100">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-[var(--text-secondary)]">In Progress</span>
//                     <span className="text-lg font-bold text-blue-600">6</span>
//                   </div>
//                 </div>
//                 <div className="bg-[var(--card-bg)] p-4 rounded-lg shadow-sm border border-yellow-100">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-[var(--text-secondary)]">Pending</span>
//                     <span className="text-lg font-bold text-yellow-600">6</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-3">
//                 {tasks.map((task) => (
//                   <TaskCard
//                     key={task.id}
//                     task={task}
//                     onToggleComplete={() => toggleTaskCompletion(task.id)}
//                     onEdit={() => console.log('Edit task', task.id)}
//                     onDelete={() => deleteTask(task.id)}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           )}

//           {activeTab === 'milestones' && (
//             <motion.div
//               key="milestones"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="space-y-6"
//             >
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
//                 <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center">
//                   <FiFlag className="mr-2 text-[var(--accent-color)]" />
//                   Project Milestones
//                 </h3>
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="flex items-center px-4 py-2 bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-colors"
//                 >
//                   <FiPlus className="mr-2" />
//                   Add Milestone
//                 </motion.button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//                 <div className="bg-[var(--card-bg)] p-4 rounded-lg shadow-sm border border-[var(--card-border)]">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-[var(--text-secondary)]">Total Milestones</span>
//                     <span className="text-lg font-bold">3</span>
//                   </div>
//                 </div>
//                 <div className="bg-[var(--card-bg)] p-4 rounded-lg shadow-sm border border-green-100">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-[var(--text-secondary)]">Completed</span>
//                     <span className="text-lg font-bold text-green-600">1</span>
//                   </div>
//                 </div>
//                 <div className="bg-[var(--card-bg)] p-4 rounded-lg shadow-sm border border-blue-100">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-[var(--text-secondary)]">In Progress</span>
//                     <span className="text-lg font-bold text-blue-600">1</span>
//                   </div>
//                 </div>
//                 <div className="bg-[var(--card-bg)] p-4 rounded-lg shadow-sm border border-yellow-100">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-[var(--text-secondary)]">Pending</span>
//                     <span className="text-lg font-bold text-yellow-600">1</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 {milestones.map((milestone, index) => (
//                   <MilestoneCard 
//                     key={milestone.id}
//                     milestone={milestone}
//                     index={index}
//                     isLast={index === milestones.length - 1}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           )}

//           {activeTab === 'team' && (
//             <motion.div
//               key="team"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="space-y-6"
//             >
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
//                 <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center">
//                   <FiUsers className="mr-2 text-[var(--accent-color)]" />
//                   Project Team
//                 </h3>
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="flex items-center px-4 py-2 bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-colors"
//                 >
//                   <FiPlus className="mr-2" />
//                   Invite Member
//                 </motion.button>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {teamMembers.map((member) => (
//                   <TeamMemberCard 
//                     key={member.id}
//                     member={member}
//                   />
//                 ))}
//               </div>

//               <div className="bg-[var(--card-bg)] p-6 rounded-xl shadow-sm border border-[var(--card-border)]">
//                 <h4 className="font-bold text-[var(--text-primary)] mb-4">Team Performance</h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                   {[
//                     { name: 'Tasks Completed', value: '48', change: '+12%', trend: 'up' },
//                     { name: 'Bugs Reported', value: '7', change: '-3%', trend: 'down' },
//                     { name: 'Avg. Response Time', value: '2.4h', change: '-0.8h', trend: 'down' },
//                     { name: 'Productivity', value: '87%', change: '+5%', trend: 'up' }
//                   ].map((metric, index) => (
//                     <motion.div
//                       key={index}
//                       whileHover={{ y: -3 }}
//                       className="bg-[var(--card-bg)] p-4 rounded-lg shadow-sm border border-[var(--card-border)]"
//                     >
//                       <p className="text-sm text-[var(--text-secondary)] mb-1">{metric.name}</p>
//                       <div className="flex items-end justify-between">
//                         <span className="text-2xl font-bold">{metric.value}</span>
//                         <span className={`flex items-center text-sm ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
//                           {metric.change}
//                           <FiTrendingUp className={`ml-1 ${metric.trend === 'down' ? 'transform rotate-180' : ''}`} />
//                         </span>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {activeTab === 'files' && (
//             <motion.div
//               key="files"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="space-y-6"
//             >
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
//                 <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center">
//                   <FiFolder className="mr-2 text-[var(--accent-color)]" />
//                   Project Files
//                 </h3>
//                 <div className="flex gap-3">
//                   <motion.button
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                     className="flex items-center px-4 py-2 bg-[var(--card-bg)] border border-[var(--card-border)] hover:bg-[var(--card-bg)] text-[var(--text-primary)] rounded-lg transition-colors"
//                   >
//                     <FiLink className="mr-2" />
//                     Share Link
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                     className="flex items-center px-4 py-2 bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-colors"
//                   >
//                     <FiPlus className="mr-2" />
//                     Upload File
//                   </motion.button>
//                 </div>
//               </div>

//               <div className="space-y-3">
//                 {files.map((file) => (
//                   <FileCard
//                     key={file.id}
//                     file={file}
//                     onDownload={() => console.log('Download', file.id)}
//                     onShare={() => console.log('Share', file.id)}
//                     onDelete={() => deleteFile(file.id)}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           )}

//           {activeTab === 'discussion' && (
//             <motion.div
//               key="discussion"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="space-y-6"
//             >
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
//                 <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center">
//                   <FiMessageSquare className="mr-2 text-[var(--accent-color)]" />
//                   Project Discussion
//                 </h3>
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="flex items-center px-4 py-2 bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-colors"
//                 >
//                   <FiPlus className="mr-2" />
//                   New Topic
//                 </motion.button>
//               </div>

//               <div className="space-y-4">
//                 {discussionPosts.map((post) => (
//                   <DiscussionCard
//                     key={post.id}
//                     post={post}
//                     onReply={() => console.log('Reply to', post.id)}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// };

// export default ProjectDetailPage;






































