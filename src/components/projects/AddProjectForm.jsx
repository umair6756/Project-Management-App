


// import { motion, AnimatePresence, useAnimation } from 'framer-motion';
// import { FiX, FiCalendar, FiDollarSign, FiInfo, FiUsers, FiTrendingUp, FiChevronDown } from 'react-icons/fi';
// import { useState, useRef, useEffect } from 'react';

// const AdvancedInput = ({ label, icon, error, children, className = '' }) => {
//   const controls = useAnimation();
  
//   const handleHoverStart = () => controls.start({
//     y: -2,
//     boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
//     transition: { type: 'spring', stiffness: 400, damping: 15 }
//   });

//   const handleHoverEnd = () => controls.start({
//     y: 0,
//     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
//     transition: { duration: 0.2 }
//   });

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       className={`mb-5 ${className}`}
//     >
//       <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2 flex items-center">
//         {icon && <span className="mr-2">{icon}</span>}
//         {label}
//       </label>
      
//       <motion.div
//         animate={controls}
//         whileFocus={{
//           scale: 1.01,
//           boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
//           transition: { type: 'spring', stiffness: 500 }
//         }}
//         onHoverStart={handleHoverStart}
//         onHoverEnd={handleHoverEnd}
//         className={`relative rounded-xl bg-white/5 backdrop-blur-sm border-2 ${
//           error ? 'border-red-400/80' : 'border-gray-200/80'
//         } transition-all duration-200`}
//       >
//         {children}
//       </motion.div>
      
//       {error && (
//         <motion.p 
//           initial={{ opacity: 0, y: -5 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mt-2 text-sm text-red-500/90 flex items-center"
//         >
//           <FiX className="mr-1" /> {error}
//         </motion.p>
//       )}
//     </motion.div>
//   );
// };

// const AdvancedSelect = ({ 
//   options, 
//   value, 
//   onChange, 
//   name, 
//   label, 
//   icon, 
//   error 
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const selectRef = useRef(null);
//   const controls = useAnimation();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (selectRef.current && !selectRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//     controls.start({
//       rotate: isOpen ? 0 : 180,
//       transition: { duration: 0.2 }
//     });
//   };

//   const handleSelect = (val) => {
//     onChange({ target: { name, value: val } });
//     setIsOpen(false);
//   };

//   return (
//     <div ref={selectRef} className="relative">
//       <AdvancedInput label={label} icon={icon} error={error}>
//         <button
//           type="button"
//           onClick={toggleDropdown}
//           className="w-full flex justify-between items-center py-2.5 px-4 text-sm text-left"
//         >
//           <span>{options.find(opt => opt.value === value)?.label || value}</span>
//           <motion.span animate={controls}>
//             <FiChevronDown />
//           </motion.span>
//         </button>
        
//         <AnimatePresence>
//           {isOpen && (
//             <motion.ul
//               initial={{ opacity: 0, y: -10, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -10, scale: 0.95 }}
//               transition={{ type: 'spring', damping: 25 }}
//               className="absolute z-10 mt-1 w-full bg-[var(--card-bg)] border border-gray-200/80 rounded-lg shadow-2xl overflow-hidden"
//             >
//               {options.map((option) => (
//                 <motion.li
//                   key={option.value}
//                   whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
//                   whileTap={{ scale: 0.98 }}
//                   className="px-4 py-2.5 text-sm cursor-pointer hover:bg-[var(--accent-color)/10] transition-colors"
//                   onClick={() => handleSelect(option.value)}
//                 >
//                   {option.label}
//                 </motion.li>
//               ))}
//             </motion.ul>
//           )}
//         </AnimatePresence>
//       </AdvancedInput>
//     </div>
//   );
// };

// const AdvancedRangeInput = ({ value, onChange, name, label, icon }) => {
//   const [isDragging, setIsDragging] = useState(false);
//   const rangeRef = useRef(null);

//   const handleChange = (e) => {
//     onChange(e);
//     setIsDragging(true);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return (
//     <AdvancedInput label={label} icon={icon}>
//       <div className="px-4 py-3">
//         <div className="flex justify-between items-center mb-2">
//           <span className="text-xs font-medium text-[var(--text-secondary)]">0%</span>
//           <motion.span
//             animate={{ scale: isDragging ? 1.2 : 1 }}
//             className="text-sm font-semibold text-[var(--accent-color)]"
//           >
//             {value}%
//           </motion.span>
//           <span className="text-xs font-medium text-[var(--text-secondary)]">100%</span>
//         </div>
        
//         <motion.div
//           whileTap={{ scale: 1.02 }}
//           className="relative h-3"
//         >
//           <input
//             type="range"
//             name={name}
//             value={value}
//             onChange={handleChange}
//             onMouseUp={handleMouseUp}
//             onTouchEnd={handleMouseUp}
//             min="0"
//             max="100"
//             ref={rangeRef}
//             className="absolute w-full h-full opacity-0 cursor-pointer z-10"
//           />
//           <div className="absolute w-full h-1.5 bg-gray-200/80 rounded-full top-1/2 -translate-y-1/2" />
//           <motion.div
//             animate={{
//               width: `${value}%`,
//               transition: isDragging ? { type: 'spring', stiffness: 500 } : { duration: 0.3 }
//             }}
//             className="absolute h-1.5 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-hover)] rounded-full top-1/2 -translate-y-1/2"
//           />
//           <motion.div
//             animate={{
//               left: `${value}%`,
//               x: '-50%',
//               scale: isDragging ? 1.3 : 1,
//               backgroundColor: isDragging ? 'var(--accent-hover)' : 'var(--accent-color)'
//             }}
//             className="absolute w-4 h-4 rounded-full bg-[var(--accent-color)] shadow-md top-1/2 -translate-y-1/2 z-20"
//           />
//         </motion.div>
//       </div>
//     </AdvancedInput>
//   );
// };

// const AddProjectForm = ({ 
//   showAddForm, 
//   setShowAddForm, 
//   newProject, 
//   setNewProject, 
//   errors, 
//   setErrors,
//   handleSubmit 
// }) => {
//   const formRef = useRef(null);
//   const modalControls = useAnimation();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
    
//     if (errors[name]) {
//       setErrors(prev => {
//         const newErrors = {...prev};
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
    
//     setNewProject(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleBackgroundClick = (e) => {
//     if (formRef.current && !formRef.current.contains(e.target)) {
//       modalControls.start({
//         scale: 0.95,
//         y: 10,
//         transition: { duration: 0.2 }
//       }).then(() => {
//         setShowAddForm(false);
//       });
//     }
//   };

//   const statusOptions = [
//     { value: 'pending', label: 'Pending' },
//     { value: 'in-progress', label: 'In Progress' },
//     { value: 'completed', label: 'Completed' }
//   ];

//   const priorityOptions = [
//     { value: 'low', label: 'Low' },
//     { value: 'medium', label: 'Medium' },
//     { value: 'high', label: 'High' }
//   ];

//   return (
//     <AnimatePresence>
//       {showAddForm && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={handleBackgroundClick}
//           className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
//         >
//           <motion.div
//             ref={formRef}
//             initial={{ scale: 0.9, y: 20, opacity: 0 }}
//             animate={{ 
//               scale: 1, 
//               y: 0,
//               opacity: 1,
//               transition: { type: 'spring', damping: 25, stiffness: 300 }
//             }}
//             exit={{ scale: 0.9, y: 20, opacity: 0 }}
//             className="bg-[var(--card-bg)] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto no-scrollbar border border-white/10"
//             style={{
//               boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
//             }}
//           >
//             <div className="p-6 md:p-8">
//               <div className="flex justify-between items-center mb-6">
//                 <motion.h3 
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.1 }}
//                   className="text-2xl font-bold text-[var(--text-primary)]"
//                 >
//                   <span className="bg-gradient-to-r from-[var(--accent-color)] to-purple-500 bg-clip-text text-transparent">
//                     Create New Project
//                   </span>
//                 </motion.h3>
//                 <motion.button
//                   whileHover={{ rotate: 90, scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => setShowAddForm(false)}
//                   className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1.5 rounded-full"
//                 >
//                   <FiX className="h-6 w-6" />
//                 </motion.button>
//               </div>
              
//               <form onSubmit={handleSubmit}>
//                 <div className="space-y-6">
//                   {/* Project Title */}
//                   <AdvancedInput 
//                     label="Project Title*" 
//                     icon={<FiInfo />} 
//                     error={errors.title}
//                   >
//                     <input
//                       type="text"
//                       name="title"
//                       value={newProject.title || ''}
//                       onChange={handleInputChange}
//                       className="w-full bg-transparent py-2.5 px-4 text-sm focus:outline-none placeholder:text-gray-400"
//                       placeholder="Enter project title"
//                     />
//                   </AdvancedInput>
                  
//                   {/* Description */}
//                   <AdvancedInput label="Description" icon={<FiInfo />}>
//                     <textarea
//                       name="description"
//                       value={newProject.description || ''}
//                       onChange={handleInputChange}
//                       rows={3}
//                       className="w-full bg-transparent py-2.5 px-4 text-sm focus:outline-none placeholder:text-gray-400 resize-none"
//                       placeholder="Enter project description"
//                     />
//                   </AdvancedInput>
                  
//                   {/* Status, Priority, Progress */}
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                     {/* Status */}
//                     <AdvancedSelect
//                       name="status"
//                       value={newProject.status || 'pending'}
//                       onChange={handleInputChange}
//                       options={statusOptions}
//                       label="Status*"
//                       icon={<FiInfo />}
//                       error={errors.status}
//                     />
                    
//                     {/* Priority */}
//                     <AdvancedSelect
//                       name="priority"
//                       value={newProject.priority || 'medium'}
//                       onChange={handleInputChange}
//                       options={priorityOptions}
//                       label="Priority*"
//                       icon={<FiInfo />}
//                       error={errors.priority}
//                     />
                    
//                     {/* Progress */}
//                     <AdvancedRangeInput
//                       value={newProject.progress || 0}
//                       onChange={handleInputChange}
//                       name="progress"
//                       label="Progress"
//                       icon={<FiTrendingUp />}
//                     />
//                   </div>
                  
//                   {/* Dates */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                     {/* Start Date */}
//                     <AdvancedInput 
//                       label="Start Date*" 
//                       icon={<FiCalendar />} 
//                       error={errors.startDate}
//                     >
//                       <input
//                         type="date"
//                         name="startDate"
//                         value={newProject.startDate || ''}
//                         onChange={handleInputChange}
//                         className="w-full bg-transparent py-2.5 px-4 text-sm focus:outline-none"
//                       />
//                     </AdvancedInput>
                    
//                     {/* End Date */}
//                     <AdvancedInput 
//                       label="End Date" 
//                       icon={<FiCalendar />} 
//                       error={errors.endDate}
//                     >
//                       <input
//                         type="date"
//                         name="endDate"
//                         value={newProject.endDate || ''}
//                         onChange={handleInputChange}
//                         className="w-full bg-transparent py-2.5 px-4 text-sm focus:outline-none"
//                       />
//                     </AdvancedInput>
//                   </div>
                  
//                   {/* Budget & Team Size */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                     {/* Budget */}
//                     <AdvancedInput 
//                       label="Budget ($)*" 
//                       icon={<FiDollarSign />} 
//                       error={errors.budget}
//                     >
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <span className="text-[var(--text-secondary)]">$</span>
//                         </div>
//                         <input
//                           type="text"
//                           name="budget"
//                           value={newProject.budget || ''}
//                           onChange={handleInputChange}
//                           className="block w-full pl-8 pr-12 bg-transparent py-2.5 px-4 text-sm focus:outline-none placeholder:text-gray-400"
//                           placeholder="0.00"
//                         />
//                         <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                           <span className="text-[var(--text-secondary)] text-sm">USD</span>
//                         </div>
//                       </div>
//                     </AdvancedInput>
                    
//                     {/* Team Size */}
//                     <AdvancedInput 
//                       label="Team Size*" 
//                       icon={<FiUsers />} 
//                       error={errors.teamSize}
//                     >
//                       <input
//                         type="number"
//                         name="teamSize"
//                         min="1"
//                         value={newProject.teamSize || ''}
//                         onChange={handleInputChange}
//                         className="w-full bg-transparent py-2.5 px-4 text-sm focus:outline-none placeholder:text-gray-400"
//                         placeholder="Number of team members"
//                       />
//                     </AdvancedInput>
//                   </div>
//                 </div>
                
//                 {/* Form Actions */}
//                 <motion.div 
//                   className="mt-8 flex flex-col sm:flex-row justify-end gap-3"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   <motion.button
//                     type="button"
//                     whileHover={{
//                       scale: 1.03,
//                       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
//                       backgroundColor: 'rgba(255,255,255,0.05)'
//                     }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => setShowAddForm(false)}
//                     className="px-6 py-3 border-2 border-gray-200/30 rounded-xl text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
//                   >
//                     Cancel
//                   </motion.button>
//                   <motion.button
//                     type="submit"
//                     whileHover={{
//                       scale: 1.03,
//                       boxShadow: '0 8px 20px var(--accent-color/0.3)',
//                       background: 'linear-gradient(to right, var(--accent-color), var(--accent-hover))'
//                     }}
//                     whileTap={{ scale: 0.98 }}
//                     className="px-6 py-3 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-hover)] rounded-xl text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
//                   >
//                     <span className="drop-shadow-md">Create Project</span>
//                   </motion.button>
//                 </motion.div>
//               </form>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default AddProjectForm;























// import { motion, AnimatePresence, useAnimation } from 'framer-motion';
// import { FiX, FiCalendar, FiDollarSign, FiInfo, FiUsers, FiTrendingUp, FiChevronDown, FiPlus, FiLink, FiTag, FiFileText, FiClock, FiSearch, FiCheck, FiEdit2, FiExternalLink, FiImage, FiLayers, FiBarChart2, FiAward, FiGlobe, FiLock, FiUnlock, FiStar, FiSettings, FiBell, FiBookmark, FiBox, FiCpu, FiDatabase, FiFilter, FiGrid, FiHeart, FiKey, FiList, FiMail, FiMessageSquare, FiMic, FiPieChart, FiRepeat, FiShield, FiSliders, FiTarget, FiTool, FiUpload, FiVideo, FiWifi, FiZap, FiPaperclip, FiUser } from 'react-icons/fi';
// import { useState, useRef, useEffect } from 'react';

// // CSS for enhanced styling
// const styles = `
// .glass-effect {
//   background: rgba(255, 255, 255, 0.07);
//   backdrop-filter: blur(12px);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   position: relative; /* Ensure this doesn't create a new stacking context */
//   z-index: auto; /* Reset z-index */
// }
  
//   .no-scrollbar::-webkit-scrollbar {
//     display: none;
//   }
  
//   .no-scrollbar {
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//   }
  
//   .gradient-border {
//     position: relative;
//     border-radius: 16px;
//     background: linear-gradient(45deg, #f3f4f6, #e5e7eb, #f3f4f6);
//   }
  
//   .gradient-border::before {
//     content: '';
//     position: absolute;
//     top: -2px;
//     left: -2px;
//     right: -2px;
//     bottom: -2px;
//     background: linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899, #6366f1);
//     border-radius: 18px;
//     z-index: -1;
//     animation: gradientShift 3s ease infinite;
//     background-size: 300% 300%;
//   }
  
//   @keyframes gradientShift {
//     0% { background-position: 0% 50%; }
//     50% { background-position: 100% 50%; }
//     100% { background-position: 0% 50%; }
//   }
  
//   .shimmer {
//     background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
//     background-size: 200% 100%;
//     animation: shimmerEffect 1.5s infinite;
//   }
  
//   @keyframes shimmerEffect {
//     0% { background-position: -200% 0; }
//     100% { background-position: 200% 0; }
//   }
  
//   .floating-label {
//     position: relative;
//     margin-bottom: 1.5rem;
//   }
  
//   .floating-label input, .floating-label textarea, .floating-label select {
//     padding-top: 1.5rem;
//     padding-bottom: 0.75rem;
//   }
  
//   .floating-label label {
//     position: absolute;
//     top: 0.75rem;
//     left: 1rem;
//     font-size: 0.75rem;
//     color: #9ca3af;
//     transition: all 0.2s ease;
//     pointer-events: none;
//   }
  
//   .floating-label input:focus ~ label, 
//   .floating-label textarea:focus ~ label,
//   .floating-label input:not(:placeholder-shown) ~ label,
//   .floating-label textarea:not(:placeholder-shown) ~ label {
//     top: 0.4rem;
//     font-size: 0.7rem;
//     color: #6366f1;
//   }
  
//   .line-clamp-1 {
//     display: -webkit-box;
//     -webkit-line-clamp: 1;
//     -webkit-box-orient: vertical;
//     overflow: hidden;
//   }
  
//   .line-clamp-2 {
//     display: -webkit-box;
//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;
//     overflow: hidden;
//   }
  
//   .custom-scrollbar {
//     scrollbar-width: thin;
//     scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
//   }
  
//   .custom-scrollbar::-webkit-scrollbar {
//     width: 6px;
//   }
  
//   .custom-scrollbar::-webkit-scrollbar-track {
//     background: transparent;
//   }
  
//   .custom-scrollbar::-webkit-scrollbar-thumb {
//     background-color: rgba(156, 163, 175, 0.5);
//     border-radius: 3px;
//   }
  
//   .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//     background-color: rgba(156, 163, 175, 0.7);
//   }
  
//   .animate-pulse-slow {
//     animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//   }
  
//   @keyframes pulse {
//     0%, 100% { opacity: 1; }
//     50% { opacity: 0.7; }
//   }
  
//   .animate-bounce-slow {
//     animation: bounce 3s infinite;
//   }
  
//   @keyframes bounce {
//     0%, 100% { transform: translateY(0); }
//     50% { transform: translateY(-5px); }
//   }
  
//   .animate-spin-slow {
//     animation: spin 4s linear infinite;
//   }
  
//   .bg-grid-pattern {
//     background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
//                       linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
//     background-size: 20px 20px;
//   }
// `;

// const AdvancedInput = ({ label, icon, error, children, className = '', isFloating = false, tooltip }) => {
//   const controls = useAnimation();
//   const [showTooltip, setShowTooltip] = useState(false);
  
//   const handleHoverStart = () => controls.start({
//     y: -2,
//     boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
//     transition: { type: 'spring', stiffness: 400, damping: 15 }
//   });

//   const handleHoverEnd = () => controls.start({
//     y: 0,
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//     transition: { duration: 0.2 }
//   });

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       className={`mb-6 ${className}`}
//     >
//       {!isFloating && (
//         <div className="flex items-center justify-between mb-2">
//           <label className="block text-sm font-medium text-gray-700 flex items-center">
//             {icon && <span className="mr-2 text-indigo-600">{icon}</span>}
//             {label}
//           </label>
//           {tooltip && (
//             <div className="relative">
//               <button 
//                 type="button"
//                 onMouseEnter={() => setShowTooltip(true)}
//                 onMouseLeave={() => setShowTooltip(false)}
//                 className="text-gray-500 hover:text-indigo-600 transition-colors"
//               >
//                 <FiInfo size={14} />
//               </button>
//               <AnimatePresence>
//                 {showTooltip && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 5 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 5 }}
//                     className="absolute right-0 top-6 w-48 p-2 text-xs bg-gray-900 text-white rounded-md shadow-lg z-10"
//                   >
//                     {tooltip}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           )}
//         </div>
//       )}
      
//       <motion.div
//         animate={controls}
//         whileFocus={{
//           scale: 1.01,
//           boxShadow: '0 12px 28px rgba(0, 0, 0, 0.2)',
//           transition: { type: 'spring', stiffness: 500 }
//         }}
//         onHoverStart={handleHoverStart}
//         onHoverEnd={handleHoverEnd}
//         className={`relative rounded-xl glass-effect border-2 ${
//           error ? 'border-red-400/80' : 'border-transparent'
//         } transition-all duration-300 overflow-hidden`}
//       >
//         {isFloating && (
//           <div className="absolute top-0 left-0 w-full h-full pointer-events-none gradient-border opacity-20"></div>
//         )}
//         {children}
//       </motion.div>
      
//       {error && (
//         <motion.p 
//           initial={{ opacity: 0, y: -5 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mt-2 text-sm text-red-500/90 flex items-center"
//         >
//           <FiX className="mr-1" /> {error}
//         </motion.p>
//       )}
//     </motion.div>
//   );
// };

// const AdvancedSelect = ({ 
//   options, 
//   value, 
//   onChange, 
//   name, 
//   label, 
//   icon, 
//   error,
//   zIndex = 10,
//   tooltip
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const selectRef = useRef(null);
//   const controls = useAnimation();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (selectRef.current && !selectRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//     controls.start({
//       rotate: isOpen ? 0 : 180,
//       transition: { duration: 0.2 }
//     });
//   };

//   const handleSelect = (val) => {
//     onChange({ target: { name, value: val } });
//     setIsOpen(false);
//   };

//   return (
//     <div ref={selectRef} className="relative">
//       <AdvancedInput label={label} icon={icon} error={error} tooltip={tooltip}>
//         <button
//           type="button"
//           onClick={toggleDropdown}
//           className="w-full flex justify-between items-center py-3 px-4 text-sm text-left"
//         >
//           <span className="text-gray-900">{options.find(opt => opt.value === value)?.label || value}</span>
//           <motion.span animate={controls} className="text-gray-500">
//             <FiChevronDown />
//           </motion.span>
//         </button>
        
//         <AnimatePresence>
//           {isOpen && (
//             <motion.ul
//               initial={{ opacity: 0, y: -10, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -10, scale: 0.95 }}
//               transition={{ type: 'spring', damping: 25 }}
//               className="absolute z-50 mt-1 w-full glass-effect border border-gray-200/30 rounded-xl shadow-2xl overflow-hidden"
//               style={{ zIndex: 9999 }}
//             >
//               {options.map((option) => (
//                 <motion.li
//                   key={option.value}
//                   whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
//                   whileTap={{ scale: 0.98 }}
//                   className="px-4 py-3 text-sm cursor-pointer text-gray-900 flex items-center justify-between"
//                   onClick={() => handleSelect(option.value)}
//                 >
//                   {option.label}
//                   {value === option.value && <FiCheck className="text-indigo-600" />}
//                 </motion.li>
//               ))}
//             </motion.ul>
//           )}
//         </AnimatePresence>
//       </AdvancedInput>
//     </div>
//   );
// };

// const AdvancedRangeInput = ({ value, onChange, name, label, icon, tooltip }) => {
//   const [isDragging, setIsDragging] = useState(false);
//   const rangeRef = useRef(null);

//   const handleChange = (e) => {
//     onChange(e);
//     setIsDragging(true);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return (
//     <AdvancedInput label={label} icon={icon} tooltip={tooltip}>
//       <div className="px-4 py-4">
//         <div className="flex justify-between items-center mb-3">
//           <span className="text-xs font-medium text-gray-500">0%</span>
//           <motion.span
//             animate={{ scale: isDragging ? 1.2 : 1 }}
//             className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent"
//           >
//             {value}%
//           </motion.span>
//           <span className="text-xs font-medium text-gray-500">100%</span>
//         </div>
        
//         <motion.div
//           whileTap={{ scale: 1.02 }}
//           className="relative h-3"
//         >
//           <input
//             type="range"
//             name={name}
//             value={value}
//             onChange={handleChange}
//             onMouseUp={handleMouseUp}
//             onTouchEnd={handleMouseUp}
//             min="0"
//             max="100"
//             ref={rangeRef}
//             className="absolute w-full h-full opacity-0 cursor-pointer z-10"
//           />
//           <div className="absolute w-full h-2 bg-gray-200/50 rounded-full top-1/2 -translate-y-1/2" />
//           <motion.div
//             animate={{
//               width: `${value}%`,
//               transition: isDragging ? { type: 'spring', stiffness: 500 } : { duration: 0.3 }
//             }}
//             className="absolute h-2 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full top-1/2 -translate-y-1/2"
//           />
//           <motion.div
//             animate={{
//               left: `${value}%`,
//               x: '-50%',
//               scale: isDragging ? 1.3 : 1,
//               backgroundColor: isDragging ? 'rgb(79 70 229)' : 'rgb(99 102 241)'
//             }}
//             className="absolute w-5 h-5 rounded-full bg-indigo-600 shadow-lg top-1/2 -translate-y-1/2 z-20 border-2 border-white"
//           />
//         </motion.div>
//       </div>
//     </AdvancedInput>
//   );
// };

// const TagInput = ({ tags, setTags, label, icon, error, tooltip }) => {
//   const [inputValue, setInputValue] = useState('');
//   const inputRef = useRef(null);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleInputKeyDown = (e) => {
//     if (e.key === 'Enter' && inputValue.trim() !== '') {
//       e.preventDefault();
//       setTags([...tags, inputValue.trim()]);
//       setInputValue('');
//     } else if (e.key === 'Backspace' && inputValue === '' && tags.length > 0) {
//       const newTags = [...tags];
//       newTags.pop();
//       setTags(newTags);
//     }
//   };

//   const removeTag = (index) => {
//     const newTags = [...tags];
//     newTags.splice(index, 1);
//     setTags(newTags);
//   };

//   return (
//     <AdvancedInput label={label} icon={icon} error={error} tooltip={tooltip}>
//       <div 
//         className="flex flex-wrap items-center py-2 px-4 cursor-text min-h-[52px]"
//         onClick={() => inputRef.current.focus()}
//       >
//         {tags.map((tag, index) => (
//           <motion.span
//             key={index}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full px-3 py-1.5 text-xs font-medium mr-2 mb-2"
//           >
//             {tag}
//             <button
//               type="button"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 removeTag(index);
//               }}
//               className="ml-1.5 text-indigo-700 hover:text-indigo-800 rounded-full"
//             >
//               <FiX size={14} />
//             </button>
//           </motion.span>
//         ))}
//         <input
//           ref={inputRef}
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           onKeyDown={handleInputKeyDown}
//           className="flex-1 bg-transparent outline-none text-sm py-1 min-w-[80px] text-gray-900"
//           placeholder="Type and press Enter to add tags"
//         />
//       </div>
//     </AdvancedInput>
//   );
// };

// const TeamMemberSelector = ({ members, setMembers, availableMembers, label, icon, error, tooltip }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isAddingNew, setIsAddingNew] = useState(false);
//   const [newMember, setNewMember] = useState({
//     name: '',
//     role: '',
//     skills: []
//   });
//   const selectRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (selectRef.current && !selectRef.current.contains(event.target)) {
//         setIsOpen(false);
//         setIsAddingNew(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//     setIsAddingNew(false);
//   };

//   const addMember = (member) => {
//     if (!members.some(m => m.id === member.id)) {
//       setMembers([...members, member]);
//     }
//     setIsOpen(false);
//     setSearchTerm('');
//   };

//   const removeMember = (memberId) => {
//     setMembers(members.filter(m => m.id !== memberId));
//   };

//   const addNewMember = () => {
//     if (newMember.name.trim() === '') return;
    
//     const memberToAdd = {
//       id: `new-${Date.now()}`,
//       name: newMember.name,
//       role: newMember.role || 'Team Member',
//       skills: newMember.skills,
//       avatar: '',
//       hours: 0
//     };
    
//     setMembers([...members, memberToAdd]);
//     setNewMember({ name: '', role: '', skills: [] });
//     setIsAddingNew(false);
//     setIsOpen(false);
//   };

//   const filteredMembers = availableMembers.filter(member =>
//     member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     member.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <div ref={selectRef} className="relative">
//       <AdvancedInput label={label} icon={icon} error={error} tooltip={tooltip}>
//         <button
//           type="button"
//           onClick={toggleDropdown}
//           className="w-full flex justify-between items-center py-3 px-4 text-sm text-left"
//         >
//           <span className="text-gray-900">Select team members ({members.length} selected)</span>
//           <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-gray-500">
//             <FiChevronDown />
//           </motion.span>
//         </button>
        
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -10, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -10, scale: 0.95 }}
//               transition={{ type: 'spring', damping: 25 }}
//               className=" z-50 mt-1 w-full glass-effect border border-gray-200/30 rounded-xl shadow-2xl overflow-visible"
//               style={{             zIndex: 9999,
//                 position: 'fixed', // Changed from absolute to fixed
//                 width: selectRef.current?.offsetWidth // Match the width of the trigger 
//                 }}
//             >
//               <div className="p-3 border-b border-gray-200/30">
//                 <div className="relative">
//                   <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
//                   <input
//                     type="text"
//                     placeholder="Search members..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full bg-transparent text-sm py-2.5 pl-9 pr-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 text-gray-900"
//                   />
//                 </div>
//               </div>
              
//               {!isAddingNew ? (
//                 <>
//                   <div className="max-h-60 overflow-y-auto custom-scrollbar">
//                     {filteredMembers.length > 0 ? (
//                       filteredMembers.map((member) => (
//                         <motion.div
//                           key={member.id}
//                           whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
//                           whileTap={{ scale: 0.98 }}
//                           className={`p-3 text-sm cursor-pointer transition-colors flex items-center ${
//                             members.some(m => m.id === member.id) 
//                               ? 'bg-indigo-100' 
//                               : 'hover:bg-indigo-50'
//                           }`}
//                           onClick={() => addMember(member)}
//                         >
//                           <div className="flex items-center w-full">
//                             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 flex items-center justify-center mr-3 text-white text-xs font-medium">
//                               {member.avatar ? (
//                                 <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-full" />
//                               ) : (
//                                 <span>
//                                   {member.name.split(' ').map(n => n[0]).join('')}
//                                 </span>
//                               )}
//                             </div>
//                             <div className="flex-1">
//                               <div className="font-medium text-gray-900">{member.name}</div>
//                               <div className="text-xs text-gray-500">{member.role}</div>
//                             </div>
//                             {members.some(m => m.id === member.id) && (
//                               <FiCheck className="text-indigo-600" />
//                             )}
//                           </div>
//                         </motion.div>
//                       ))
//                     ) : (
//                       <div className="p-3 text-sm text-center text-gray-500">
//                         No members found
//                       </div>
//                     )}
//                   </div>
//                   <div 
//                     className="p-3 border-t border-gray-200/30 flex items-center cursor-pointer text-indigo-600 hover:bg-indigo-50 transition-colors"
//                     onClick={() => setIsAddingNew(true)}
//                   >
//                     <FiPlus className="mr-2" />
//                     Add New Member
//                   </div>
//                 </>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   className="p-3"
//                 >
//                   <div className="text-sm font-medium text-gray-900 mb-3">Add New Team Member</div>
//                   <div className="space-y-3">
//                     <input
//                       type="text"
//                       placeholder="Name*"
//                       value={newMember.name}
//                       onChange={(e) => setNewMember({...newMember, name: e.target.value})}
//                       className="w-full bg-transparent text-sm py-2 px-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 text-gray-900"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Role"
//                       value={newMember.role}
//                       onChange={(e) => setNewMember({...newMember, role: e.target.value})}
//                       className="w-full bg-transparent text-sm py-2 px-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 text-gray-900"
//                     />
//                     <div className="flex justify-end space-x-2">
//                       <button
//                         type="button"
//                         onClick={() => setIsAddingNew(false)}
//                         className="px-3 py-1.5 text-sm border border-gray-200/50 rounded-lg hover:bg-gray-50 transition-colors"
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="button"
//                         onClick={addNewMember}
//                         disabled={newMember.name.trim() === ''}
//                         className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         Add Member
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </AdvancedInput>

//       {/* Selected members */}
//       {members.length > 0 && (
//         <motion.div 
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: 'auto' }}
//           className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3"
//         >
//           {members.map((member) => (
//             <motion.div
//               key={member.id}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               className="flex items-center justify-between p-3 glass-effect rounded-xl border border-gray-200/30"
//             >
//               <div className="flex items-center">
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 flex items-center justify-center mr-3 text-white text-xs font-medium">
//                   {member.avatar ? (
//                     <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full" />
//                   ) : (
//                     <span>
//                       {member.name.split(' ').map(n => n[0]).join('')}
//                     </span>
//                   )}
//                 </div>
//                 <div>
//                   <div className="text-sm font-medium text-gray-900">{member.name}</div>
//                   <div className="text-xs text-gray-500">{member.role}</div>
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => removeMember(member.id)}
//                 className="text-gray-500 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-100"
//               >
//                 <FiX size={16} />
//               </button>
//             </motion.div>
//           ))}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// const TaskManager = ({ tasks, setTasks, availableTasks, label, icon, error, tooltip }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isAdding, setIsAdding] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [newTask, setNewTask] = useState({
//     title: '',
//     description: '',
//     dueDate: '',
//     priority: 'medium',
//     completed: false
//   });
//   const selectRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (selectRef.current && !selectRef.current.contains(event.target)) {
//         setIsOpen(false);
//         setIsAdding(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//     setIsAdding(false);
//   };

//   const addTask = (task) => {
//     if (!tasks.some(t => t.id === task.id)) {
//       setTasks([...tasks, task]);
//     }
//     setIsOpen(false);
//     setSearchTerm('');
//   };

//   const removeTask = (taskId) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   const addNewTask = () => {
//     if (newTask.title.trim() === '') return;
    
//     const taskToAdd = {
//       id: `new-${Date.now()}`,
//       title: newTask.title,
//       description: newTask.description,
//       dueDate: newTask.dueDate,
//       priority: newTask.priority,
//       completed: false
//     };
    
//     setTasks([...tasks, taskToAdd]);
//     setNewTask({
//       title: '',
//       description: '',
//       dueDate: '',
//       priority: 'medium',
//       completed: false
//     });
//     setIsAdding(false);
//     setIsOpen(false);
//   };

//   const toggleTaskCompletion = (taskId) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     ));
//   };

//   const filteredTasks = availableTasks.filter(task =>
//     task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     task.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div ref={selectRef} className="relative">
//       <AdvancedInput label={label} icon={icon} error={error} tooltip={tooltip}>
//         <button
//           type="button"
//           onClick={toggleDropdown}
//           className="w-full flex justify-between items-center py-3 px-4 text-sm text-left"
//         >
//           <span className="text-gray-900">Manage tasks ({tasks.length} added)</span>
//           <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-gray-500">
//             <FiChevronDown />
//           </motion.span>
//         </button>
        
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -10, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 1, y: -10, scale: 0.95 }}
//               transition={{ type: 'spring', damping: 25 }}
//               className="absolute z-50 mt-1 w-full glass-effect border border-gray-200/30 rounded-xl shadow-2xl overflow-hidden"
//               style={{ zIndex: 9999 }}
//             >
//               <div className="p-3 border-b border-gray-200/30">
//                 <div className="relative">
//                   <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
//                   <input
//                     type="text"
//                     placeholder="Search tasks..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full bg-transparent text-sm py-2.5 pl-9 pr-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 text-gray-900"
//                   />
//                 </div>
//               </div>
              
//               {!isAdding ? (
//                 <>
//                   <div className="max-h-60 overflow-y-auto custom-scrollbar">
//                     {filteredTasks.length > 0 ? (
//                       filteredTasks.map((task) => (
//                         <motion.div
//                           key={task.id}
//                           whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
//                           whileTap={{ scale: 0.98 }}
//                           className={`p-3 text-sm cursor-pointer transition-colors flex items-center ${
//                             tasks.some(t => t.id === task.id) 
//                               ? 'bg-indigo-100' 
//                               : 'hover:bg-indigo-50'
//                           }`}
//                           onClick={() => addTask(task)}
//                         >
//                           <div className="flex items-center w-full">
//                             <div className="flex-1">
//                               <div className="font-medium text-gray-900">{task.title}</div>
//                               <div className="text-xs text-gray-500 mt-1 line-clamp-1">{task.description}</div>
//                             </div>
//                             {tasks.some(t => t.id === task.id) && (
//                               <FiCheck className="text-indigo-600 ml-2" />
//                             )}
//                           </div>
//                         </motion.div>
//                       ))
//                     ) : (
//                       <div className="p-3 text-sm text-center text-gray-500">
//                         No tasks found
//                       </div>
//                     )}
//                   </div>
//                   <div 
//                     className="p-3 border-t border-gray-200/30 flex items-center cursor-pointer text-indigo-600 hover:bg-indigo-50 transition-colors"
//                     onClick={() => setIsAdding(true)}
//                   >
//                     <FiPlus className="mr-2" />
//                     Add New Task
//                   </div>
//                 </>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   className="p-3"
//                 >
//                   <div className="text-sm font-medium text-gray-900 mb-3">Add New Task</div>
//                   <div className="space-y-3">
//                     <input
//                       type="text"
//                       placeholder="Task title*"
//                       value={newTask.title}
//                       onChange={(e) => setNewTask({...newTask, title: e.target.value})}
//                       className="w-full bg-transparent text-sm py-2 px-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 text-gray-900"
//                     />
//                     <textarea
//                       placeholder="Description (optional)"
//                       value={newTask.description}
//                       onChange={(e) => setNewTask({...newTask, description: e.target.value})}
//                       rows={2}
//                       className="w-full bg-transparent text-sm py-2 px-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 resize-none text-gray-900"
//                     />
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                       <input
//                         type="date"
//                         placeholder="Due date"
//                         value={newTask.dueDate}
//                         onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
//                         className="w-full bg-transparent text-sm py-2 px-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 text-gray-900"
//                       />
//                       <select
//                         value={newTask.priority}
//                         onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
//                         className="w-full bg-transparent text-sm py-2 px-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 text-gray-900"
//                       >
//                         <option value="low">Low Priority</option>
//                         <option value="medium">Medium Priority</option>
//                         <option value="high">High Priority</option>
//                       </select>
//                     </div>
//                     <div className="flex justify-end space-x-2">
//                       <button
//                         type="button"
//                         onClick={() => setIsAdding(false)}
//                         className="px-3 py-1.5 text-sm border border-gray-200/50 rounded-lg hover:bg-gray-50 transition-colors"
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="button"
//                         onClick={addNewTask}
//                         disabled={newTask.title.trim() === ''}
//                         className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         Add Task
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </AdvancedInput>

//       {/* Selected tasks */}
//       {tasks.length > 0 && (
//         <motion.div 
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: 'auto' }}
//           className="mt-4 space-y-3"
//         >
//           {tasks.map((task) => (
//             <motion.div
//               key={task.id}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="flex items-start justify-between p-3 glass-effect rounded-xl border border-gray-200/30"
//             >
//               <div className="flex items-start space-x-3 flex-1">
//                 <button
//                   type="button"
//                   onClick={() => toggleTaskCompletion(task.id)}
//                   className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//                     task.completed 
//                       ? 'bg-indigo-600 border-indigo-600' 
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   {task.completed && <FiCheck size={12} className="text-white" />}
//                 </button>
//                 <div className="flex-1">
//                   <div className={`text-sm font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
//                     {task.title}
//                   </div>
//                   {task.description && (
//                     <div className="text-xs text-gray-500 mt-1 line-clamp-2">
//                       {task.description}
//                     </div>
//                   )}
//                   <div className="flex items-center mt-2 space-x-2">
//                     {task.dueDate && (
//                       <div className="text-xs text-gray-500 flex items-center">
//                         <FiCalendar size={12} className="mr-1" />
//                         {new Date(task.dueDate).toLocaleDateString()}
//                       </div>
//                     )}
//                     <div className={`text-xs px-2 py-0.5 rounded-full ${
//                       task.priority === 'high' 
//                         ? 'bg-red-100 text-red-800' 
//                         : task.priority === 'medium'
//                           ? 'bg-yellow-100 text-yellow-800'
//                           : 'bg-green-100 text-green-800'
//                     }`}>
//                       {task.priority}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => removeTask(task.id)}
//                 className="text-gray-500 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-100 ml-2"
//               >
//                 <FiX size={16} />
//               </button>
//             </motion.div>
//           ))}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// const MilestoneTracker = ({ milestones, setMilestones, label, icon, error, tooltip }) => {
//   const [isAdding, setIsAdding] = useState(false);
//   const [newMilestone, setNewMilestone] = useState({
//     title: '',
//     description: '',
//     dueDate: '',
//     completed: false
//   });

//   const addMilestone = () => {
//     if (newMilestone.title.trim() === '') return;
    
//     const milestoneToAdd = {
//       id: `milestone-${Date.now()}`,
//       title: newMilestone.title,
//       description: newMilestone.description,
//       dueDate: newMilestone.dueDate,
//       completed: false
//     };
    
//     setMilestones([...milestones, milestoneToAdd]);
//     setNewMilestone({
//       title: '',
//       description: '',
//       dueDate: '',
//       completed: false
//     });
//     setIsAdding(false);
//   };

//   const removeMilestone = (milestoneId) => {
//     setMilestones(milestones.filter(m => m.id !== milestoneId));
//   };

//   const toggleMilestoneCompletion = (milestoneId) => {
//     setMilestones(milestones.map(m => 
//       m.id === milestoneId ? { ...m, completed: !m.completed } : m
//     ));
//   };

//   return (
//     <AdvancedInput label={label} icon={icon} error={error} tooltip={tooltip}>
//       <div className="p-4">
//         {milestones.length > 0 && (
//           <div className="space-y-3 mb-4">
//             {milestones.map((milestone, index) => (
//               <motion.div
//                 key={milestone.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="flex items-start justify-between p-3 glass-effect rounded-xl border border-gray-200/30"
//               >
//                 <div className="flex items-start space-x-3 flex-1">
//                   <button
//                     type="button"
//                     onClick={() => toggleMilestoneCompletion(milestone.id)}
//                     className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//                       milestone.completed 
//                         ? 'bg-indigo-600 border-indigo-600' 
//                         : 'border-gray-300'
//                     }`}
//                   >
//                     {milestone.completed && <FiCheck size={12} className="text-white" />}
//                   </button>
//                   <div className="flex-1">
//                     <div className={`text-sm font-medium ${milestone.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
//                       {milestone.title}
//                     </div>
//                     {milestone.description && (
//                       <div className="text-xs text-gray-500 mt-1">
//                         {milestone.description}
//                       </div>
//                     )}
//                     {milestone.dueDate && (
//                       <div className="text-xs text-gray-500 mt-2 flex items-center">
//                         <FiCalendar size={12} className="mr-1" />
//                         Due: {new Date(milestone.dueDate).toLocaleDateString()}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => removeMilestone(milestone.id)}
//                   className="text-gray-500 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-100 ml-2"
//                 >
//                   <FiX size={16} />
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         )}
        
//         {!isAdding ? (
//           <button
//             type="button"
//             onClick={() => setIsAdding(true)}
//             className="w-full py-2 px-4 text-sm border border-dashed border-gray-300/50 rounded-lg text-gray-500 hover:text-indigo-600 hover:border-indigo-600 transition-colors flex items-center justify-center"
//           >
//             <FiPlus className="mr-2" />
//             Add Milestone
//           </button>
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             className="space-y-3"
//           >
//             <input
//               type="text"
//               placeholder="Milestone title*"
//               value={newMilestone.title}
//               onChange={(e) => setNewMilestone({...newMilestone, title: e.target.value})}
//               className="w-full bg-transparent text-sm py-2 px-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 text-gray-900"
//             />
//             <textarea
//               placeholder="Description (optional)"
//               value={newMilestone.description}
//               onChange={(e) => setNewMilestone({...newMilestone, description: e.target.value})}
//               rows={2}
//               className="w-full bg-transparent text-sm py-2 px-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 resize-none text-gray-900"
//             />
//             <input
//               type="date"
//               placeholder="Due date"
//               value={newMilestone.dueDate}
//               onChange={(e) => setNewMilestone({...newMilestone, dueDate: e.target.value})}
//               className="w-full bg-transparent text-sm py-2 px-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 text-gray-900"
//             />
//             <div className="flex justify-end space-x-2">
//               <button
//                 type="button"
//                 onClick={() => setIsAdding(false)}
//                 className="px-3 py-1.5 text-sm border border-gray-200/50 rounded-lg hover:bg-gray-50 transition-colors"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 onClick={addMilestone}
//                 disabled={newMilestone.title.trim() === ''}
//                 className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 Add Milestone
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </AdvancedInput>
//   );
// };

// const FileUploader = ({ files, setFiles, label, icon, error, tooltip }) => {
//   const fileInputRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     setFiles([...files, ...selectedFiles]);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
    
//     const droppedFiles = Array.from(e.dataTransfer.files);
//     setFiles([...files, ...droppedFiles]);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//   };

//   const removeFile = (index) => {
//     const newFiles = [...files];
//     newFiles.splice(index, 1);
//     setFiles(newFiles);
//   };

//   const formatFileSize = (bytes) => {
//     if (bytes === 0) return '0 Bytes';
//     const k = 1024;
//     const sizes = ['Bytes', 'KB', 'MB', 'GB'];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
//   };

//   return (
//     <AdvancedInput label={label} icon={icon} error={error} tooltip={tooltip}>
//       <div 
//         className={`p-4 border-2 border-dashed rounded-xl transition-colors ${
//           isDragging 
//             ? 'border-indigo-600 bg-indigo-50' 
//             : 'border-gray-300/50 hover:border-gray-400/50'
//         }`}
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//       >
//         <div className="text-center mb-4">
//           <FiUpload className="mx-auto text-gray-500 mb-2" size={24} />
//           <p className="text-sm text-gray-500">
//             Drag & drop files here or{' '}
//             <button
//               type="button"
//               onClick={() => fileInputRef.current.click()}
//               className="text-indigo-600 hover:underline"
//             >
//               browse files
//             </button>
//           </p>
//           <p className="text-xs text-gray-500 mt-1">
//             Maximum file size: 10MB
//           </p>
//         </div>
        
//         <input
//           type="file"
//           ref={fileInputRef}
//           onChange={handleFileChange}
//           className="hidden"
//           multiple
//         />
        
//         {files.length > 0 && (
//           <div className="space-y-2 mt-4 max-h-40 overflow-y-auto custom-scrollbar">
//             {files.map((file, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
//               >
//                 <div className="flex items-center truncate">
//                   <FiFileText className="text-gray-500 mr-2 flex-shrink-0" />
//                   <div className="truncate">
//                     <div className="text-xs font-medium text-gray-900 truncate">
//                       {file.name}
//                     </div>
//                     <div className="text-xs text-gray-500">
//                       {formatFileSize(file.size)}
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => removeFile(index)}
//                   className="text-gray-500 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-100 ml-2"
//                 >
//                   <FiX size={14} />
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </AdvancedInput>
//   );
// };

// const AddProjectForm = ({ 
//   showAddForm, 
//   setShowAddForm, 
//   newProject, 
//   setNewProject, 
//   errors, 
//   setErrors,
//   handleSubmit
// }) => {
//   const formRef = useRef(null);
//   const modalControls = useAnimation();
//   const [activeTab, setActiveTab] = useState('basic');

//   // Sample data for demonstration
//   const sampleMembers = [
//     { id: '1', name: 'John Doe', role: 'Frontend Developer', skills: ['React', 'JavaScript', 'CSS'], avatar: '', hours: 20 },
//     { id: '2', name: 'Jane Smith', role: 'UI/UX Designer', skills: ['Figma', 'Sketch', 'Illustrator'], avatar: '', hours: 15 },
//     { id: '3', name: 'Mike Johnson', role: 'Backend Developer', skills: ['Node.js', 'Python', 'SQL'], avatar: '', hours: 25 },
//     { id: '4', name: 'Sarah Williams', role: 'Project Manager', skills: ['Agile', 'Scrum', 'JIRA'], avatar: '', hours: 30 },
//     { id: '5', name: 'Alex Chen', role: 'DevOps Engineer', skills: ['Docker', 'Kubernetes', 'AWS'], avatar: '', hours: 18 }
//   ];

//   const sampleTasks = [
//     { id: '1', title: 'Design Homepage', description: 'Create responsive homepage design with modern UI elements', dueDate: '2023-12-15', priority: 'high', completed: false },
//     { id: '2', title: 'Implement Authentication', description: 'Set up user authentication with JWT tokens', dueDate: '2023-12-20', priority: 'high', completed: false },
//     { id: '3', title: 'Database Schema', description: 'Design and implement database schema for user management', dueDate: '2023-12-10', priority: 'medium', completed: true },
//     { id: '4', title: 'API Integration', description: 'Integrate third-party API for payment processing', dueDate: '2023-12-25', priority: 'medium', completed: false },
//     { id: '5', title: 'Testing', description: 'Write unit and integration tests for core functionality', dueDate: '2023-12-30', priority: 'low', completed: false }
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
    
//     if (errors[name]) {
//       setErrors(prev => {
//         const newErrors = {...prev};
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
    
//     setNewProject(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleArrayChange = (name, value) => {
//     setNewProject(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleBackgroundClick = (e) => {
//     if (formRef.current && !formRef.current.contains(e.target)) {
//       modalControls.start({
//         scale: 0.95,
//         y: 10,
//         transition: { duration: 0.2 }
//       }).then(() => {
//         setShowAddForm(false);
//       });
//     }
//   };

//   const statusOptions = [
//     { value: 'pending', label: 'Pending' },
//     { value: 'in-progress', label: 'In Progress' },
//     { value: 'completed', label: 'Completed' },
//     { value: 'on-hold', label: 'On Hold' },
//     { value: 'canceled', label: 'Canceled' }
//   ];

//   const priorityOptions = [
//     { value: 'low', label: 'Low' },
//     { value: 'medium', label: 'Medium' },
//     { value: 'high', label: 'High' },
//     { value: 'critical', label: 'Critical' }
//   ];

//   const categoryOptions = [
//     { value: 'web-development', label: 'Web Development' },
//     { value: 'mobile-app', label: 'Mobile App' },
//     { value: 'ui-ux-design', label: 'UI/UX Design' },
//     { value: 'marketing', label: 'Marketing' },
//     { value: 'research', label: 'Research' },
//     { value: 'other', label: 'Other' }
//   ];

//   const tabs = [
//     { id: 'basic', label: 'Basic Info', icon: <FiInfo /> },
//     { id: 'team', label: 'Team & Tasks', icon: <FiUsers /> },
//     { id: 'advanced', label: 'Advanced', icon: <FiSettings /> }
//   ];

//   return (
//     <>
//       <style>{styles}</style>
//       <AnimatePresence>
//         {showAddForm && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={handleBackgroundClick}
//             className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
//           >
//             <motion.div
//               ref={formRef}
//               initial={{ scale: 0.9, y: 20, opacity: 0 }}
//               animate={{ 
//                 scale: 1, 
//                 y: 0,
//                 opacity: 1,
//                 transition: { type: 'spring', damping: 25, stiffness: 300 }
//               }}
//               exit={{ scale: 0.9, y: 20, opacity: 0 }}
//               className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto no-scrollbar border border-gray-200 glass-effect"
//               style={{
//                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
//               }}
//             >
//               <div className="p-6 md:p-8">
//                 <div className="flex justify-between items-center mb-6">
//                   <motion.h3 
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.1 }}
//                     className="text-2xl font-bold text-gray-900"
//                   >
//                     <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
//                       Create New Project
//                     </span>
//                   </motion.h3>
//                   <motion.button
//                     whileHover={{ rotate: 90, scale: 1.1, backgroundColor: 'rgba(0,0,0,0.05)' }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => setShowAddForm(false)}
//                     className="text-gray-500 hover:text-gray-700 transition-colors p-1.5 rounded-full glass-effect"
//                   >
//                     <FiX className="h-6 w-6" />
//                   </motion.button>
//                 </div>
                
//                 {/* Tab Navigation */}
//                 <div className="flex mb-6 border-b border-gray-200">
//                   {tabs.map((tab) => (
//                     <button
//                       key={tab.id}
//                       type="button"
//                       onClick={() => setActiveTab(tab.id)}
//                       className={`flex items-center px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
//                         activeTab === tab.id
//                           ? 'border-indigo-600 text-indigo-600'
//                           : 'border-transparent text-gray-500 hover:text-gray-700'
//                       }`}
//                     >
//                       <span className="mr-2">{tab.icon}</span>
//                       {tab.label}
//                     </button>
//                   ))}
//                 </div>
                
//                 <form onSubmit={handleSubmit}>
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={activeTab}
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -20 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       {activeTab === 'basic' && (
//                         <div className="space-y-6">
//                           {/* Project Title */}
//                           <AdvancedInput 
//                             label="Project Title*" 
//                             icon={<FiInfo />} 
//                             error={errors.title}
//                             isFloating={true}
//                             tooltip="Enter a descriptive name for your project"
//                           >
//                             <div className="floating-label">
//                               <input
//                                 type="text"
//                                 name="title"
//                                 value={newProject.title || ''}
//                                 onChange={handleInputChange}
//                                 className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-gray-900"
//                                 placeholder=" "
//                               />
//                               <label>
//                                 <span className="flex items-center">
//                                   <FiInfo className="mr-1" size={14} /> Project Title
//                                 </span>
//                               </label>
//                             </div>
//                           </AdvancedInput>
                          
//                           {/* Description */}
//                           <AdvancedInput 
//                             label="Description" 
//                             icon={<FiFileText />} 
//                             isFloating={true}
//                             tooltip="Provide a detailed description of your project goals and scope"
//                           >
//                             <div className="floating-label">
//                               <textarea
//                                 name="description"
//                                 value={newProject.description || ''}
//                                 onChange={handleInputChange}
//                                 rows={3}
//                                 className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent resize-none text-gray-900"
//                                 placeholder=" "
//                               />
//                               <label>
//                                 <span className="flex items-center">
//                                   <FiFileText className="mr-1" size={14} /> Description
//                                 </span>
//                               </label>
//                             </div>
//                           </AdvancedInput>
                          
//                           {/* Status, Priority, Category */}
//                           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                             {/* Status */}
//                             <AdvancedSelect
//                               name="status"
//                               value={newProject.status || 'pending'}
//                               onChange={handleInputChange}
//                               options={statusOptions}
//                               label="Status*"
//                               icon={<FiTrendingUp />}
//                               error={errors.status}
//                               zIndex={50}
//                               tooltip="Current status of the project"
//                             />
                            
//                             {/* Priority */}
//                             <AdvancedSelect
//                               name="priority"
//                               value={newProject.priority || 'medium'}
//                               onChange={handleInputChange}
//                               options={priorityOptions}
//                               label="Priority*"
//                               icon={<FiBarChart2 />}
//                               error={errors.priority}
//                               zIndex={49}
//                               tooltip="Priority level of the project"
//                             />
                            
//                             {/* Category */}
//                             <AdvancedSelect
//                               name="category"
//                               value={newProject.category || ''}
//                               onChange={handleInputChange}
//                               options={categoryOptions}
//                               label="Category"
//                               icon={<FiLayers />}
//                               error={errors.category}
//                               zIndex={48}
//                               tooltip="Project category or type"
//                             />
//                           </div>
                          
//                           {/* Dates */}
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                             {/* Start Date */}
//                             <AdvancedInput 
//                               label="Start Date*" 
//                               icon={<FiCalendar />} 
//                               error={errors.startDate}
//                               isFloating={true}
//                               tooltip="Project start date"
//                             >
//                               <div className="floating-label">
//                                 <input
//                                   type="date"
//                                   name="startDate"
//                                   value={newProject.startDate || ''}
//                                   onChange={handleInputChange}
//                                   className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-gray-900"
//                                   placeholder=" "
//                                 />
//                                 <label>
//                                   <span className="flex items-center">
//                                     <FiCalendar className="mr-1" size={14} /> Start Date
//                                   </span>
//                                 </label>
//                               </div>
//                             </AdvancedInput>
                            
//                             {/* End Date */}
//                             <AdvancedInput 
//                               label="End Date" 
//                               icon={<FiCalendar />} 
//                               error={errors.endDate}
//                               isFloating={true}
//                               tooltip="Project expected completion date"
//                             >
//                               <div className="floating-label">
//                                 <input
//                                   type="date"
//                                   name="endDate"
//                                   value={newProject.endDate || ''}
//                                   onChange={handleInputChange}
//                                   className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-gray-900"
//                                   placeholder=" "
//                                 />
//                                 <label>
//                                   <span className="flex items-center">
//                                     <FiCalendar className="mr-1" size={14} /> End Date
//                                   </span>
//                                 </label>
//                               </div>
//                             </AdvancedInput>
//                           </div>
                          
//                           {/* Budget & Team Size */}
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                             {/* Budget */}
//                             <AdvancedInput 
//                               label="Budget ($)*" 
//                               icon={<FiDollarSign />} 
//                               error={errors.budget}
//                               isFloating={true}
//                               tooltip="Total project budget in USD"
//                             >
//                               <div className="floating-label">
//                                 <div className="relative">
//                                   <input
//                                     type="number"
//                                     name="budget"
//                                     value={newProject.budget || ''}
//                                     onChange={handleInputChange}
//                                     className="block w-full bg-transparent py-3 px-4 pl-9 text-sm focus:outline-none placeholder-transparent text-gray-900"
//                                     placeholder=" "
//                                     min="0"
//                                     step="0.01"
//                                   />
//                                   <label>
//                                     <span className="flex items-center">
//                                       <FiDollarSign className="mr-1" size={14} /> Budget
//                                     </span>
//                                   </label>
//                                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <span className="text-gray-500">$</span>
//                                   </div>
//                                   <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                                     <span className="text-gray-500 text-sm">USD</span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </AdvancedInput>
                            
//                             {/* Team Size */}
//                             <AdvancedInput 
//                               label="Team Size*" 
//                               icon={<FiUsers />} 
//                               error={errors.teamSize}
//                               isFloating={true}
//                               tooltip="Number of team members working on this project"
//                             >
//                               <div className="floating-label">
//                                 <input
//                                   type="number"
//                                   name="teamSize"
//                                   min="1"
//                                   value={newProject.teamSize || ''}
//                                   onChange={handleInputChange}
//                                   className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-gray-900"
//                                   placeholder=" "
//                                 />
//                                 <label>
//                                   <span className="flex items-center">
//                                     <FiUsers className="mr-1" size={14} /> Team Size
//                                   </span>
//                                 </label>
//                               </div>
//                             </AdvancedInput>
//                           </div>
                          
//                           {/* Progress */}
//                           <AdvancedRangeInput
//                             value={newProject.progress || 0}
//                             onChange={handleInputChange}
//                             name="progress"
//                             label="Progress"
//                             icon={<FiTrendingUp />}
//                             tooltip="Current completion percentage of the project"
//                           />
                          
//                           {/* Tags */}
//                           <TagInput
//                             tags={newProject.tags || []}
//                             setTags={(tags) => handleArrayChange('tags', tags)}
//                             label="Tags"
//                             icon={<FiTag />}
//                             error={errors.tags}
//                             tooltip="Add relevant tags to categorize your project"
//                           />
//                         </div>
//                       )}
                      
//                       {activeTab === 'team' && (
//                         <div className="space-y-6">
//                           {/* Team Members */}
//                           <TeamMemberSelector
//                             members={newProject.teamMembers || []}
//                             setMembers={(members) => handleArrayChange('teamMembers', members)}
//                             availableMembers={sampleMembers}
//                             label="Team Members"
//                             icon={<FiUsers />}
//                             error={errors.teamMembers}
//                             tooltip="Select team members to assign to this project"
//                           />
                          
//                           {/* Tasks */}
//                           <TaskManager
//                             tasks={newProject.tasks || []}
//                             setTasks={(tasks) => handleArrayChange('tasks', tasks)}
//                             availableTasks={sampleTasks}
//                             label="Tasks"
//                             icon={<FiFileText />}
//                             error={errors.tasks}
//                             tooltip="Add and manage tasks for this project"
//                           />
                          
//                           {/* Milestones */}
//                           <MilestoneTracker
//                             milestones={newProject.milestones || []}
//                             setMilestones={(milestones) => handleArrayChange('milestones', milestones)}
//                             label="Milestones"
//                             icon={<FiAward />}
//                             error={errors.milestones}
//                             tooltip="Define key milestones for your project timeline"
//                           />
//                         </div>
//                       )}
                      
//                       {activeTab === 'advanced' && (
//                         <div className="space-y-6">
//                           {/* URLs */}
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                             {/* Demo URL */}
//                             <AdvancedInput 
//                               label="Demo URL" 
//                               icon={<FiGlobe />}
//                               isFloating={true}
//                               tooltip="Link to a live demo of the project"
//                             >
//                               <div className="floating-label">
//                                 <input
//                                   type="url"
//                                   name="demoUrl"
//                                   value={newProject.demoUrl || ''}
//                                   onChange={handleInputChange}
//                                   className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-gray-900"
//                                   placeholder=" "
//                                 />
//                                 <label>
//                                   <span className="flex items-center">
//                                     <FiGlobe className="mr-1" size={14} /> Demo URL
//                                   </span>
//                                 </label>
//                               </div>
//                             </AdvancedInput>
                            
//                             {/* Repo URL */}
//                             <AdvancedInput 
//                               label="Repository URL" 
//                               icon={<FiCpu />}
//                               isFloating={true}
//                               tooltip="Link to the project's source code repository"
//                             >
//                               <div className="floating-label">
//                                 <input
//                                   type="url"
//                                   name="repoUrl"
//                                   value={newProject.repoUrl || ''}
//                                   onChange={handleInputChange}
//                                   className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-gray-900"
//                                   placeholder=" "
//                                 />
//                                 <label>
//                                   <span className="flex items-center">
//                                     <FiCpu className="mr-1" size={14} /> Repository URL
//                                   </span>
//                                 </label>
//                               </div>
//                             </AdvancedInput>
//                           </div>
                          
//                           {/* Image URL */}
//                           <AdvancedInput 
//                             label="Project Image URL" 
//                             icon={<FiImage />}
//                             isFloating={true}
//                             tooltip="URL to a cover image for the project"
//                           >
//                             <div className="floating-label">
//                               <input
//                                 type="url"
//                                 name="image"
//                                 value={newProject.image || ''}
//                                 onChange={handleInputChange}
//                                 className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-gray-900"
//                                 placeholder=" "
//                               />
//                               <label>
//                                 <span className="flex items-center">
//                                   <FiImage className="mr-1" size={14} /> Project Image URL
//                                 </span>
//                               </label>
//                             </div>
//                           </AdvancedInput>
                          
//                           {/* File Uploads */}
//                           <FileUploader
//                             files={newProject.files || []}
//                             setFiles={(files) => handleArrayChange('files', files)}
//                             label="Attachments"
//                             icon={<FiPaperclip />}
//                             error={errors.files}
//                             tooltip="Upload relevant files for this project"
//                           />
                          
//                           {/* Client Information */}
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                             {/* Client Name */}
//                             <AdvancedInput 
//                               label="Client Name" 
//                               icon={<FiUser />}
//                               isFloating={true}
//                               tooltip="Name of the client for this project"
//                             >
//                               <div className="floating-label">
//                                 <input
//                                   type="text"
//                                   name="clientName"
//                                   value={newProject.clientName || ''}
//                                   onChange={handleInputChange}
//                                   className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-gray-900"
//                                   placeholder=" "
//                                 />
//                                 <label>
//                                   <span className="flex items-center">
//                                     <FiUser className="mr-1" size={14} /> Client Name
//                                   </span>
//                                 </label>
//                               </div>
//                             </AdvancedInput>
                            
//                             {/* Client Email */}
//                             <AdvancedInput 
//                               label="Client Email" 
//                               icon={<FiMail />}
//                               isFloating={true}
//                               tooltip="Email address of the client"
//                             >
//                               <div className="floating-label">
//                                 <input
//                                   type="email"
//                                   name="clientEmail"
//                                   value={newProject.clientEmail || ''}
//                                   onChange={handleInputChange}
//                                   className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-gray-900"
//                                   placeholder=" "
//                                 />
//                                 <label>
//                                   <span className="flex items-center">
//                                     <FiMail className="mr-1" size={14} /> Client Email
//                                   </span>
//                                 </label>
//                               </div>
//                             </AdvancedInput>
//                           </div>
                          
//                           {/* Notifications */}
//                           <AdvancedInput 
//                             label="Notifications" 
//                             icon={<FiBell />}
//                             tooltip="Configure how you want to receive project notifications"
//                           >
//                             <div className="p-4">
//                               <div className="flex items-center justify-between mb-3">
//                                 <div className="flex items-center">
//                                   <FiMail className="mr-2 text-gray-500" />
//                                   <span className="text-sm text-gray-900">Email Notifications</span>
//                                 </div>
//                                 <label className="relative inline-flex items-center cursor-pointer">
//                                   <input 
//                                     type="checkbox" 
//                                     className="sr-only peer" 
//                                     checked={newProject.emailNotifications !== false}
//                                     onChange={(e) => setNewProject({
//                                       ...newProject, 
//                                       emailNotifications: e.target.checked
//                                     })}
//                                   />
//                                   <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
//                                 </label>
//                               </div>
                              
//                               <div className="flex items-center justify-between">
//                                 <div className="flex items-center">
//                                   <FiBell className="mr-2 text-gray-500" />
//                                   <span className="text-sm text-gray-900">Push Notifications</span>
//                                 </div>
//                                 <label className="relative inline-flex items-center cursor-pointer">
//                                   <input 
//                                     type="checkbox" 
//                                     className="sr-only peer" 
//                                     checked={newProject.pushNotifications !== false}
//                                     onChange={(e) => setNewProject({
//                                       ...newProject, 
//                                       pushNotifications: e.target.checked
//                                     })}
//                                   />
//                                   <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
//                                 </label>
//                               </div>
//                             </div>
//                           </AdvancedInput>
                          
//                           {/* Privacy Settings */}
//                           <AdvancedSelect
//                             name="privacy"
//                             value={newProject.privacy || 'private'}
//                             onChange={handleInputChange}
//                             options={[
//                               { value: 'private', label: 'Private' },
//                               { value: 'team', label: 'Team Only' },
//                               { value: 'public', label: 'Public' }
//                             ]}
//                             label="Privacy Settings"
//                             icon={<FiLock />}
//                             tooltip="Control who can view this project"
//                           />
//                         </div>
//                       )}
//                     </motion.div>
//                   </AnimatePresence>
                  
//                   {/* Form Actions */}
//                   <motion.div 
//                     className="mt-8 flex flex-col sm:flex-row justify-end gap-3"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.4 }}
//                   >
//                     <motion.button
//                       type="button"
//                       whileHover={{
//                         scale: 1.03,
//                         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
//                         backgroundColor: 'rgba(0,0,0,0.05)'
//                       }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => setShowAddForm(false)}
//                       className="px-6 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 glass-effect"
//                     >
//                       Cancel
//                     </motion.button>
//                     <motion.button
//                       type="submit"
//                       whileHover={{
//                         scale: 1.03,
//                         boxShadow: '0 8px 20px rgba(99, 102, 241, 0.3)',
//                         background: 'linear-gradient(to right, rgb(99, 102, 241), rgb(79, 70, 229))'
//                       }}
//                       whileTap={{ scale: 0.98 }}
//                       className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 relative overflow-hidden"
//                     >
//                       <span className="drop-shadow-md relative z-10">Create Project</span>
//                       <div className="absolute inset-0 shimmer"></div>
//                     </motion.button>
//                   </motion.div>
//                 </form>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default AddProjectForm;






































import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FiX, FiCalendar, FiDollarSign, FiInfo, FiUsers, FiTrendingUp, FiChevronDown, FiPlus, FiLink, FiTag, FiFileText, FiClock, FiSearch, FiCheck, FiEdit2, FiExternalLink, FiImage, FiLayers, FiBarChart2, FiAward, FiGlobe, FiLock, FiUnlock, FiStar, FiSettings, FiBell, FiBookmark, FiBox, FiCpu, FiDatabase, FiFilter, FiGrid, FiHeart, FiKey, FiList, FiMail, FiMessageSquare, FiMic, FiPieChart, FiRepeat, FiShield, FiSliders, FiTarget, FiTool, FiUpload, FiVideo, FiWifi, FiZap, FiPaperclip, FiUser } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';

// CSS for enhanced styling
const styles = `
.glass-effect {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  // position: relative;
  z-index: auto;



  
}
  
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
  
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
  
.gradient-border {
  position: relative;
  border-radius: 16px;
  background: linear-gradient(45deg, #f8fafc, #f1f5f9, #f8fafc);
}
  
.gradient-border::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #e2e8f0, #cbd5e1, #e2e8f0);
  border-radius: 18px;
  z-index: -1;
  animation: gradientShift 3s ease infinite;
  background-size: 300% 300%;
}
  
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
  
.shimmer {
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
  background-size: 200% 100%;
  animation: shimmerEffect 1.5s infinite;
}
  
@keyframes shimmerEffect {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
  
.floating-label {
  position: relative;
  margin-bottom: 1.5rem;
}
  
.floating-label input, .floating-label textarea, .floating-label select {
  padding-top: 1.5rem;
  padding-bottom: 0.75rem;
}
  
.floating-label label {
  position: absolute;
  top: 0.75rem;
  left: 1rem;
  font-size: 0.75rem;
  color: #94a3b8;
  transition: all 0.2s ease;
  pointer-events: none;
}
  
.floating-label input:focus ~ label, 
.floating-label textarea:focus ~ label,
.floating-label input:not(:placeholder-shown) ~ label,
.floating-label textarea:not(:placeholder-shown) ~ label {
  top: 0.4rem;
  font-size: 0.7rem;
  color: #475569;
}
  
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
  
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
  
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(148, 163, 184, 0.5) transparent;
}
  
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
  
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
  
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(148, 163, 184, 0.5);
  border-radius: 3px;
}
  
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(148, 163, 184, 0.7);
}
  
.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
  
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
  
.animate-bounce-slow {
  animation: bounce 3s infinite;
}
  
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
  
.animate-spin-slow {
  animation: spin 4s linear infinite;
}
  
.bg-grid-pattern {
  background-image: linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
}

.dropdown-container {
  position: relative;
}

.dropdown-content {
  // position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: visible;
  z-index: 1000;
}

.dropdown-item {
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: rgba(0, 0, 0, 0.03);
}

.dropdown-search {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.dropdown-search input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 14px;
}

.dropdown-header {
  padding: 12px 16px;
  font-weight: 600;
  color: #475569;
  background: rgba(0, 0, 0, 0.02);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.dropdown-footer {
  padding: 12px 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
`;

const AdvancedInput = ({ label, icon, error, children, className = '', isFloating = false, tooltip }) => {
  const controls = useAnimation();
  const [showTooltip, setShowTooltip] = useState(false);
  
  const handleHoverStart = () => controls.start({
    y: -2,
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
    transition: { type: 'spring', stiffness: 400, damping: 15 }
  });

  const handleHoverEnd = () => controls.start({
    y: 0,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: { duration: 0.2 }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mb-6 ${className}`}
    >
      {!isFloating && (
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-slate-700 flex items-center">
            {icon && <span className="mr-2 text-slate-600">{icon}</span>}
            {label}
          </label>
          {tooltip && (
            <div className="relative">
              <button 
                type="button"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="text-slate-500 hover:text-slate-600 transition-colors"
              >
                <FiInfo size={14} />
              </button>
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute right-0 top-6 w-48 p-2 text-xs bg-slate-800 text-white rounded-md shadow-lg z-10"
                  >
                    {tooltip}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      )}
      
      <motion.div
        animate={controls}
        whileFocus={{
          scale: 1.01,
          boxShadow: '0 12px 28px rgba(0, 0, 0, 0.1)',
          transition: { type: 'spring', stiffness: 500 }
        }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        className={`relative rounded-xl glass-effect border-2 ${
          error ? 'border-red-300' : 'border-transparent'
        } transition-all duration-300 overflow-hidden`}
      >
        {isFloating && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none gradient-border opacity-20"></div>
        )}
        {children}
      </motion.div>
      
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-500 flex items-center"
        >
          <FiX className="mr-1" /> {error}
        </motion.p>
      )}
    </motion.div>
  );
};

const AdvancedSelect = ({ 
  options, 
  value, 
  onChange, 
  name, 
  label, 
  icon, 
  error,
  zIndex = 10,
  tooltip
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    controls.start({
      rotate: isOpen ? 0 : 180,
      transition: { duration: 0.2 }
    });
  };

  const handleSelect = (val) => {
    onChange({ target: { name, value: val } });
    setIsOpen(false);
  };

  return (
    <div ref={selectRef} className="dropdown-container">
      <AdvancedInput label={label} icon={icon} error={error} tooltip={tooltip}>
        <button
          type="button"
          onClick={toggleDropdown}
          className="w-full flex justify-between items-center py-3 px-4 text-sm text-left"
        >
          <span className="text-slate-900">{options.find(opt => opt.value === value)?.label || value}</span>
          <motion.span animate={controls} className="text-slate-500">
            <FiChevronDown />
          </motion.span>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25 }}
              className="dropdown-content"
              style={{ zIndex: 9999 }}
            >
              {options.map((option) => (
                <motion.div
                  key={option.value}
                  whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
                  whileTap={{ scale: 0.98 }}
                  className="dropdown-item text-slate-900 flex items-center justify-between"
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                  {value === option.value && <FiCheck className="text-slate-600" />}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </AdvancedInput>
    </div>
  );
};

const AdvancedRangeInput = ({ value, onChange, name, label, icon, tooltip }) => {
  const [isDragging, setIsDragging] = useState(false);
  const rangeRef = useRef(null);

  const handleChange = (e) => {
    onChange(e);
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <AdvancedInput label={label} icon={icon} tooltip={tooltip}>
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-medium text-slate-500">0%</span>
          <motion.span
            animate={{ scale: isDragging ? 1.2 : 1 }}
            className="text-sm font-semibold bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent"
          >
            {value}%
          </motion.span>
          <span className="text-xs font-medium text-slate-500">100%</span>
        </div>
        
        <motion.div
          whileTap={{ scale: 1.02 }}
          className="relative h-3"
        >
          <input
            type="range"
            name={name}
            value={value}
            onChange={handleChange}
            onMouseUp={handleMouseUp}
            onTouchEnd={handleMouseUp}
            min="0"
            max="100"
            ref={rangeRef}
            className="absolute w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div className="absolute w-full h-2 bg-slate-200 rounded-full top-1/2 -translate-y-1/2" />
          <motion.div
            animate={{
              width: `${value}%`,
              transition: isDragging ? { type: 'spring', stiffness: 500 } : { duration: 0.3 }
            }}
            className="absolute h-2 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full top-1/2 -translate-y-1/2"
          />
          <motion.div
            animate={{
              left: `${value}%`,
              x: '-50%',
              scale: isDragging ? 1.3 : 1,
              backgroundColor: isDragging ? 'rgb(71 85 105)' : 'rgb(100 116 139)'
            }}
            className="absolute w-5 h-5 rounded-full bg-slate-500 shadow-lg top-1/2 -translate-y-1/2 z-20 border-2 border-white"
          />
        </motion.div>
      </div>
    </AdvancedInput>
  );
};

const TagInput = ({ tags, setTags, label, icon, error, tooltip }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    } else if (e.key === 'Backspace' && inputValue === '' && tags.length > 0) {
      const newTags = [...tags];
      newTags.pop();
      setTags(newTags);
    }
  };

  const removeTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <AdvancedInput label={label} icon={icon} error={error} tooltip={tooltip}>
      <div 
        className="flex flex-wrap items-center py-2 px-4 cursor-text min-h-[52px]"
        onClick={() => inputRef.current.focus()}
      >
        {tags.map((tag, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="inline-flex items-center bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full px-3 py-1.5 text-xs font-medium mr-2 mb-2"
          >
            {tag}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeTag(index);
              }}
              className="ml-1.5 text-slate-700 hover:text-slate-800 rounded-full"
            >
              <FiX size={14} />
            </button>
          </motion.span>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          className="flex-1 bg-transparent outline-none text-sm py-1 min-w-[80px] text-slate-900"
          placeholder="Type and press Enter to add tags"
        />
      </div>
    </AdvancedInput>
  );
};

const TeamMemberSelector = ({ members, setMembers, availableMembers, label, icon, error, tooltip }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    skills: []
  });
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsAddingNew(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsAddingNew(false);
  };

  const addMember = (member) => {
    if (!members.some(m => m.id === member.id)) {
      setMembers([...members, member]);
    }
    setIsOpen(false);
    setSearchTerm('');
  };

  const removeMember = (memberId) => {
    setMembers(members.filter(m => m.id !== memberId));
  };

  const addNewMember = () => {
    if (newMember.name.trim() === '') return;
    
    const memberToAdd = {
      id: `new-${Date.now()}`,
      name: newMember.name,
      role: newMember.role || 'Team Member',
      skills: newMember.skills,
      avatar: '',
      hours: 0
    };
    
    setMembers([...members, memberToAdd]);
    setNewMember({ name: '', role: '', skills: [] });
    setIsAddingNew(false);
    setIsOpen(false);
  };

  const filteredMembers = availableMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div ref={selectRef} className="dropdown-container">
      <AdvancedInput label={label} icon={icon} error={error} tooltip={tooltip}>
        <button
          type="button"
          onClick={toggleDropdown}
          className="w-full flex justify-between items-center py-3 px-4 text-sm text-left"
        >
          <span className="text-slate-900">Select team members ({members.length} selected)</span>
          <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-slate-500">
            <FiChevronDown />
          </motion.span>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25 }}
              className="dropdown-content"
              style={{ zIndex: 9999 }}
            >
              <div className="dropdown-search">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={16} />
                  <input
                    type="text"
                    placeholder="Search members..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white text-sm py-2.5 pl-9 pr-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500 text-slate-900"
                  />
                </div>
              </div>
              
              {!isAddingNew ? (
                <>
                  <div className="max-h-60 overflow-y-auto custom-scrollbar">
                    {filteredMembers.length > 0 ? (
                      filteredMembers.map((member) => (
                        <motion.div
                          key={member.id}
                          whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
                          whileTap={{ scale: 0.98 }}
                          className={`dropdown-item flex items-center ${
                            members.some(m => m.id === member.id) 
                              ? 'bg-slate-100' 
                              : 'hover:bg-slate-50'
                          }`}
                          onClick={() => addMember(member)}
                        >
                          <div className="flex items-center w-full">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-slate-500 to-slate-600 flex items-center justify-center mr-3 text-white text-xs font-medium">
                              {member.avatar ? (
                                <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-full" />
                              ) : (
                                <span>
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-slate-900">{member.name}</div>
                              <div className="text-xs text-slate-500">{member.role}</div>
                            </div>
                            {members.some(m => m.id === member.id) && (
                              <FiCheck className="text-slate-600" />
                            )}
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="dropdown-item text-sm text-center text-slate-500">
                        No members found
                      </div>
                    )}
                  </div>
                  <div 
                    className="dropdown-footer flex items-center cursor-pointer text-slate-600 hover:bg-slate-50 transition-colors"
                    onClick={() => setIsAddingNew(true)}
                  >
                    <FiPlus className="mr-2" />
                    Add New Member
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-4"
                >
                  <div className="text-sm font-medium text-slate-900 mb-3">Add New Team Member</div>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Name*"
                      value={newMember.name}
                      onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                      className="w-full bg-white text-sm py-2 px-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500 text-slate-900"
                    />
                    <input
                      type="text"
                      placeholder="Role"
                      value={newMember.role}
                      onChange={(e) => setNewMember({...newMember, role: e.target.value})}
                      className="w-full bg-white text-sm py-2 px-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500 text-slate-900"
                    />
                    <div className="flex justify-end space-x-2">
                      <button
                        type="button"
                        onClick={() => setIsAddingNew(false)}
                        className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={addNewMember}
                        disabled={newMember.name.trim() === ''}
                        className="px-3 py-1.5 text-sm bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Add Member
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </AdvancedInput>

      {/* Selected members */}
      {members.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {members.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex items-center justify-between p-3 glass-effect rounded-xl border border-slate-200"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-slate-500 to-slate-600 flex items-center justify-center mr-3 text-white text-xs font-medium">
                  {member.avatar ? (
                    <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full" />
                  ) : (
                    <span>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900">{member.name}</div>
                  <div className="text-xs text-slate-500">{member.role}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeMember(member.id)}
                className="text-slate-500 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-100"
              >
                <FiX size={16} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

const TaskManager = ({ tasks, setTasks, availableTasks, label, icon, error, tooltip }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
    completed: false
  });
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsAdding(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsAdding(false);
  };

  const addTask = (task) => {
    if (!tasks.some(t => t.id === task.id)) {
      setTasks([...tasks, task]);
    }
    setIsOpen(false);
    setSearchTerm('');
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const addNewTask = () => {
    if (newTask.title.trim() === '') return;
    
    const taskToAdd = {
      id: `new-${Date.now()}`,
      title: newTask.title,
      description: newTask.description,
      dueDate: newTask.dueDate,
      priority: newTask.priority,
      completed: false
    };
    
    setTasks([...tasks, taskToAdd]);
    setNewTask({
      title: '',
      description: '',
      dueDate: '',
      priority: 'medium',
      completed: false
    });
    setIsAdding(false);
    setIsOpen(false);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = availableTasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={selectRef} className="dropdown-container">
      <AdvancedInput label={label} icon={icon} error={error} tooltip={tooltip}>
        <button
          type="button"
          onClick={toggleDropdown}
          className="w-full flex justify-between items-center py-3 px-4 text-sm text-left"
        >
          <span className="text-slate-900">Manage tasks ({tasks.length} added)</span>
          <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-slate-500">
            <FiChevronDown />
          </motion.span>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 1, y: -10, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25 }}
              className="dropdown-content"
              style={{  zIndex: 9999,
                position: 'fixed', // Changed from absolute to fixed
                width: selectRef.current?.offsetWidth // Match the width of the trigger 
}}
            >
              <div className="dropdown-search">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={16} />
                  <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white text-sm py-2.5 pl-9 pr-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500 text-slate-900"
                  />
                </div>
              </div>
              
              {!isAdding ? (
                <>
                  <div className="max-h-60 overflow-y-auto custom-scrollbar">
                    {filteredTasks.length > 0 ? (
                      filteredTasks.map((task) => (
                        <motion.div
                          key={task.id}
                          whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
                          whileTap={{ scale: 0.98 }}
                          className={`dropdown-item flex items-center ${
                            tasks.some(t => t.id === task.id) 
                              ? 'bg-slate-100' 
                              : 'hover:bg-slate-50'
                          }`}
                          onClick={() => addTask(task)}
                        >
                          <div className="flex items-center w-full">
                            <div className="flex-1">
                              <div className="font-medium text-slate-900">{task.title}</div>
                              <div className="text-xs text-slate-500 mt-1 line-clamp-1">{task.description}</div>
                            </div>
                            {tasks.some(t => t.id === task.id) && (
                              <FiCheck className="text-slate-600 ml-2" />
                            )}
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="dropdown-item text-sm text-center text-slate-500">
                        No tasks found
                      </div>
                    )}
                  </div>
                  <div 
                    className="dropdown-footer flex items-center cursor-pointer text-slate-600 hover:bg-slate-50 transition-colors"
                    onClick={() => setIsAdding(true)}
                  >
                    <FiPlus className="mr-2" />
                    Add New Task
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-4"
                >
                  <div className="text-sm font-medium text-slate-900 mb-3">Add New Task</div>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Task title*"
                      value={newTask.title}
                      onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                      className="w-full bg-white text-sm py-2 px-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500 text-slate-900"
                    />
                    <textarea
                      placeholder="Description (optional)"
                      value={newTask.description}
                      onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                      rows={2}
                      className="w-full bg-white text-sm py-2 px-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500 resize-none text-slate-900"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="date"
                        placeholder="Due date"
                        value={newTask.dueDate}
                        onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                        className="w-full bg-white text-sm py-2 px-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500 text-slate-900"
                      />
                      <select
                        value={newTask.priority}
                        onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                        className="w-full bg-white text-sm py-2 px-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500 text-slate-900"
                      >
                        <option value="low">Low Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                      </select>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <button
                        type="button"
                        onClick={() => setIsAdding(false)}
                        className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={addNewTask}
                        disabled={newTask.title.trim() === ''}
                        className="px-3 py-1.5 text-sm bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Add Task
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </AdvancedInput>

      {/* Selected tasks */}
      {tasks.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 space-y-3"
        >
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start justify-between p-3 glass-effect rounded-xl border border-slate-200"
            >
              <div className="flex items-start space-x-3 flex-1">
                <button
                  type="button"
                  onClick={() => toggleTaskCompletion(task.id)}
                  className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    task.completed 
                      ? 'bg-slate-600 border-slate-600' 
                      : 'border-slate-300'
                  }`}
                >
                  {task.completed && <FiCheck size={12} className="text-white" />}
                </button>
                <div className="flex-1">
                  <div className={`text-sm font-medium ${task.completed ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                    {task.title}
                  </div>
                  {task.description && (
                    <div className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {task.description}
                    </div>
                  )}
                  <div className="flex items-center mt-2 space-x-2">
                    {task.dueDate && (
                      <div className="text-xs text-slate-500 flex items-center">
                        <FiCalendar size={12} className="mr-1" />
                        {new Date(task.dueDate).toLocaleDateString()}
                      </div>
                    )}
                    <div className={`text-xs px-2 py-0.5 rounded-full ${
                      task.priority === 'high' 
                        ? 'bg-red-100 text-red-800' 
                        : task.priority === 'medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                    }`}>
                      {task.priority}
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeTask(task.id)}
                className="text-slate-500 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-100 ml-2"
              >
                <FiX size={16} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

const MilestoneTracker = ({ milestones, setMilestones, label, icon, error, tooltip }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newMilestone, setNewMilestone] = useState({
    title: '',
    description: '',
    dueDate: '',
    completed: false
  });

  const addMilestone = () => {
    if (newMilestone.title.trim() === '') return;
    
    const milestoneToAdd = {
      id: `milestone-${Date.now()}`,
      title: newMilestone.title,
      description: newMilestone.description,
      dueDate: newMilestone.dueDate,
      completed: false
    };
    
    setMilestones([...milestones, milestoneToAdd]);
    setNewMilestone({
      title: '',
      description: '',
      dueDate: '',
      completed: false
    });
    setIsAdding(false);
  };

  const removeMilestone = (milestoneId) => {
    setMilestones(milestones.filter(m => m.id !== milestoneId));
  };

  const toggleMilestoneCompletion = (milestoneId) => {
    setMilestones(milestones.map(m => 
      m.id === milestoneId ? { ...m, completed: !m.completed } : m
    ));
  };

  return (
    <AdvancedInput label={label} icon={icon} error={error} tooltip={tooltip}>
      <div className="p-4">
        {milestones.length > 0 && (
          <div className="space-y-3 mb-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start justify-between p-3 glass-effect rounded-xl border border-slate-200"
              >
                <div className="flex items-start space-x-3 flex-1">
                  <button
                    type="button"
                    onClick={() => toggleMilestoneCompletion(milestone.id)}
                    className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      milestone.completed 
                        ? 'bg-slate-600 border-slate-600' 
                        : 'border-slate-300'
                    }`}
                  >
                    {milestone.completed && <FiCheck size={12} className="text-white" />}
                  </button>
                  <div className="flex-1">
                    <div className={`text-sm font-medium ${milestone.completed ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                      {milestone.title}
                    </div>
                    {milestone.description && (
                      <div className="text-xs text-slate-500 mt-1">
                        {milestone.description}
                      </div>
                    )}
                    {milestone.dueDate && (
                      <div className="text-xs text-slate-500 mt-2 flex items-center">
                        <FiCalendar size={12} className="mr-1" />
                        Due: {new Date(milestone.dueDate).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeMilestone(milestone.id)}
                  className="text-slate-500 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-100 ml-2"
                >
                  <FiX size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        )}
        
        {!isAdding ? (
          <button
            type="button"
            onClick={() => setIsAdding(true)}
            className="w-full py-2 px-4 text-sm border border-dashed border-slate-300 rounded-lg text-slate-500 hover:text-slate-600 hover:border-slate-400 transition-colors flex items-center justify-center"
          >
            <FiPlus className="mr-2" />
            Add Milestone
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-3"
          >
            <input
              type="text"
              placeholder="Milestone title*"
              value={newMilestone.title}
              onChange={(e) => setNewMilestone({...newMilestone, title: e.target.value})}
              className="w-full bg-white text-sm py-2 px-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500 text-slate-900"
            />
            <textarea
              placeholder="Description (optional)"
              value={newMilestone.description}
              onChange={(e) => setNewMilestone({...newMilestone, description: e.target.value})}
              rows={2}
              className="w-full bg-white text-sm py-2 px-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500 resize-none text-slate-900"
            />
            <input
              type="date"
              placeholder="Due date"
              value={newMilestone.dueDate}
              onChange={(e) => setNewMilestone({...newMilestone, dueDate: e.target.value})}
              className="w-full bg-white text-sm py-2 px-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500 text-slate-900"
            />
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={addMilestone}
                disabled={newMilestone.title.trim() === ''}
                className="px-3 py-1.5 text-sm bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add Milestone
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </AdvancedInput>
  );
};

const FileUploader = ({ files, setFiles, label, icon, error, tooltip }) => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <AdvancedInput label={label} icon={icon} error={error} tooltip={tooltip}>
      <div 
        className={`p-4 border-2 border-dashed rounded-xl transition-colors ${
          isDragging 
            ? 'border-slate-400 bg-slate-50' 
            : 'border-slate-300 hover:border-slate-400'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="text-center mb-4">
          <FiUpload className="mx-auto text-slate-500 mb-2" size={24} />
          <p className="text-sm text-slate-500">
            Drag & drop files here or{' '}
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="text-slate-600 hover:underline"
            >
              browse files
            </button>
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Maximum file size: 10MB
          </p>
        </div>
        
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          multiple
        />
        
        {files.length > 0 && (
          <div className="space-y-2 mt-4 max-h-40 overflow-y-auto custom-scrollbar">
            {files.map((file, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between p-2 bg-slate-50 rounded-lg"
              >
                <div className="flex items-center truncate">
                  <FiFileText className="text-slate-500 mr-2 flex-shrink-0" />
                  <div className="truncate">
                    <div className="text-xs font-medium text-slate-900 truncate">
                      {file.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {formatFileSize(file.size)}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-slate-500 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-100 ml-2"
                >
                  <FiX size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </AdvancedInput>
  );
};

const AddProjectForm = ({ 
  showAddForm, 
  setShowAddForm, 
  newProject, 
  setNewProject, 
  errors, 
  setErrors,
  handleSubmit
}) => {
  const formRef = useRef(null);
  const modalControls = useAnimation();
  const [activeTab, setActiveTab] = useState('basic');

  // Sample data for demonstration
  const sampleMembers = [
    { id: '1', name: 'John Doe', role: 'Frontend Developer', skills: ['React', 'JavaScript', 'CSS'], avatar: '', hours: 20 },
    { id: '2', name: 'Jane Smith', role: 'UI/UX Designer', skills: ['Figma', 'Sketch', 'Illustrator'], avatar: '', hours: 15 },
    { id: '3', name: 'Mike Johnson', role: 'Backend Developer', skills: ['Node.js', 'Python', 'SQL'], avatar: '', hours: 25 },
    { id: '4', name: 'Sarah Williams', role: 'Project Manager', skills: ['Agile', 'Scrum', 'JIRA'], avatar: '', hours: 30 },
    { id: '5', name: 'Alex Chen', role: 'DevOps Engineer', skills: ['Docker', 'Kubernetes', 'AWS'], avatar: '', hours: 18 }
  ];

  const sampleTasks = [
    { id: '1', title: 'Design Homepage', description: 'Create responsive homepage design with modern UI elements', dueDate: '2023-12-15', priority: 'high', completed: false },
    { id: '2', title: 'Implement Authentication', description: 'Set up user authentication with JWT tokens', dueDate: '2023-12-20', priority: 'high', completed: false },
    { id: '3', title: 'Database Schema', description: 'Design and implement database schema for user management', dueDate: '2023-12-10', priority: 'medium', completed: true },
    { id: '4', title: 'API Integration', description: 'Integrate third-party API for payment processing', dueDate: '2023-12-25', priority: 'medium', completed: false },
    { id: '5', title: 'Testing', description: 'Write unit and integration tests for core functionality', dueDate: '2023-12-30', priority: 'low', completed: false }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
    
    setNewProject(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (name, value) => {
    setNewProject(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBackgroundClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      modalControls.start({
        scale: 0.95,
        y: 10,
        transition: { duration: 0.2 }
      }).then(() => {
        setShowAddForm(false);
      });
    }
  };

  const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
    { value: 'on-hold', label: 'On Hold' },
    { value: 'canceled', label: 'Canceled' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'critical', label: 'Critical' }
  ];

  const categoryOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'research', label: 'Research' },
    { value: 'other', label: 'Other' }
  ];

  const tabs = [
    { id: 'basic', label: 'Basic Info', icon: <FiInfo /> },
    { id: 'team', label: 'Team & Tasks', icon: <FiUsers /> },
    { id: 'advanced', label: 'Advanced', icon: <FiSettings /> }
  ];

  return (
    <>
      <style>{styles}</style>
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackgroundClick}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              ref={formRef}
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ 
                scale: 1, 
                y: 0,
                opacity: 1,
                transition: { type: 'spring', damping: 25, stiffness: 300 }
              }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto no-scrollbar border border-slate-200 glass-effect"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
              }}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <motion.h3 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl font-bold text-slate-900"
                  >
                    <span className="bg-gradient-to-r from-slate-700 to-slate-800 bg-clip-text text-transparent">
                      Create New Project
                    </span>
                  </motion.h3>
                  <motion.button
                    whileHover={{ rotate: 90, scale: 1.1, backgroundColor: 'rgba(0,0,0,0.05)' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowAddForm(false)}
                    className="text-slate-500 hover:text-slate-700 transition-colors p-1.5 rounded-full glass-effect"
                  >
                    <FiX className="h-6 w-6" />
                  </motion.button>
                </div>
                
                {/* Tab Navigation */}
                <div className="flex mb-6 border-b border-slate-200">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-slate-600 text-slate-600'
                          : 'border-transparent text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>
                
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {activeTab === 'basic' && (
                        <div className="space-y-6">
                          {/* Project Title */}
                          <AdvancedInput 
                            label="Project Title*" 
                            icon={<FiInfo />} 
                            error={errors.title}
                            isFloating={true}
                            tooltip="Enter a descriptive name for your project"
                          >
                            <div className="floating-label">
                              <input
                                type="text"
                                name="title"
                                value={newProject.title || ''}
                                onChange={handleInputChange}
                                className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-slate-900"
                                placeholder=" "
                              />
                              <label>
                                <span className="flex items-center">
                                  <FiInfo className="mr-1" size={14} /> Project Title
                                </span>
                              </label>
                            </div>
                          </AdvancedInput>
                          
                          {/* Description */}
                          <AdvancedInput 
                            label="Description" 
                            icon={<FiFileText />} 
                            isFloating={true}
                            tooltip="Provide a detailed description of your project goals and scope"
                          >
                            <div className="floating-label">
                              <textarea
                                name="description"
                                value={newProject.description || ''}
                                onChange={handleInputChange}
                                rows={3}
                                className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent resize-none text-slate-900"
                                placeholder=" "
                              />
                              <label>
                                <span className="flex items-center">
                                  <FiFileText className="mr-1" size={14} /> Description
                                </span>
                              </label>
                            </div>
                          </AdvancedInput>
                          
                          {/* Status, Priority, Category */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {/* Status */}
                            <AdvancedSelect
                              name="status"
                              value={newProject.status || 'pending'}
                              onChange={handleInputChange}
                              options={statusOptions}
                              label="Status*"
                              icon={<FiTrendingUp />}
                              error={errors.status}
                              zIndex={50}
                              tooltip="Current status of the project"
                            />
                            
                            {/* Priority */}
                            <AdvancedSelect
                              name="priority"
                              value={newProject.priority || 'medium'}
                              onChange={handleInputChange}
                              options={priorityOptions}
                              label="Priority*"
                              icon={<FiBarChart2 />}
                              error={errors.priority}
                              zIndex={49}
                              tooltip="Priority level of the project"
                            />
                            
                            {/* Category */}
                            <AdvancedSelect
                              name="category"
                              value={newProject.category || ''}
                              onChange={handleInputChange}
                              options={categoryOptions}
                              label="Category"
                              icon={<FiLayers />}
                              error={errors.category}
                              zIndex={48}
                              tooltip="Project category or type"
                            />
                          </div>
                          
                          {/* Dates */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Start Date */}
                            <AdvancedInput 
                              label="Start Date*" 
                              icon={<FiCalendar />} 
                              error={errors.startDate}
                              isFloating={true}
                              tooltip="Project start date"
                            >
                              <div className="floating-label">
                                <input
                                  type="date"
                                  name="startDate"
                                  value={newProject.startDate || ''}
                                  onChange={handleInputChange}
                                  className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-slate-900"
                                  placeholder=" "
                                />
                                <label>
                                  <span className="flex items-center">
                                    <FiCalendar className="mr-1" size={14} /> Start Date
                                  </span>
                                </label>
                              </div>
                            </AdvancedInput>
                            
                            {/* End Date */}
                            <AdvancedInput 
                              label="End Date" 
                              icon={<FiCalendar />} 
                              error={errors.endDate}
                              isFloating={true}
                              tooltip="Project expected completion date"
                            >
                              <div className="floating-label">
                                <input
                                  type="date"
                                  name="endDate"
                                  value={newProject.endDate || ''}
                                  onChange={handleInputChange}
                                  className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-slate-900"
                                  placeholder=" "
                                />
                                <label>
                                  <span className="flex items-center">
                                    <FiCalendar className="mr-1" size={14} /> End Date
                                  </span>
                                </label>
                              </div>
                            </AdvancedInput>
                          </div>
                          
                          {/* Budget & Team Size */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Budget */}
                            <AdvancedInput 
                              label="Budget ($)*" 
                              icon={<FiDollarSign />} 
                              error={errors.budget}
                              isFloating={true}
                              tooltip="Total project budget in USD"
                            >
                              <div className="floating-label">
                                <div className="relative">
                                  <input
                                    type="number"
                                    name="budget"
                                    value={newProject.budget || ''}
                                    onChange={handleInputChange}
                                    className="block w-full bg-transparent py-3 px-4 pl-9 text-sm focus:outline-none placeholder-transparent text-slate-900"
                                    placeholder=" "
                                    min="0"
                                    step="0.01"
                                  />
                                  <label>
                                    <span className="flex items-center">
                                      <FiDollarSign className="mr-1" size={14} /> Budget
                                    </span>
                                  </label>
                                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-slate-500">$</span>
                                  </div>
                                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <span className="text-slate-500 text-sm">USD</span>
                                  </div>
                                </div>
                              </div>
                            </AdvancedInput>
                            
                            {/* Team Size */}
                            <AdvancedInput 
                              label="Team Size*" 
                              icon={<FiUsers />} 
                              error={errors.teamSize}
                              isFloating={true}
                              tooltip="Number of team members working on this project"
                            >
                              <div className="floating-label">
                                <input
                                  type="number"
                                  name="teamSize"
                                  min="1"
                                  value={newProject.teamSize || ''}
                                  onChange={handleInputChange}
                                  className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-slate-900"
                                  placeholder=" "
                                />
                                <label>
                                  <span className="flex items-center">
                                    <FiUsers className="mr-1" size={14} /> Team Size
                                    </span>
                                </label>
                              </div>
                            </AdvancedInput>
                          </div>
                          
                          {/* Progress */}
                          <AdvancedRangeInput
                            value={newProject.progress || 0}
                            onChange={handleInputChange}
                            name="progress"
                            label="Progress"
                            icon={<FiTrendingUp />}
                            tooltip="Current completion percentage of the project"
                          />
                          
                          {/* Tags */}
                          <TagInput
                            tags={newProject.tags || []}
                            setTags={(tags) => handleArrayChange('tags', tags)}
                            label="Tags"
                            icon={<FiTag />}
                            error={errors.tags}
                            tooltip="Add relevant tags to categorize your project"
                          />
                        </div>
                      )}
                      
                      {activeTab === 'team' && (
                        <div className="space-y-6">
                          {/* Team Members */}
                          <TeamMemberSelector
                            members={newProject.teamMembers || []}
                            setMembers={(members) => handleArrayChange('teamMembers', members)}
                            availableMembers={sampleMembers}
                            label="Team Members"
                            icon={<FiUsers />}
                            error={errors.teamMembers}
                            tooltip="Select team members to assign to this project"
                          />
                          
                          {/* Tasks */}
                          <TaskManager
                            tasks={newProject.tasks || []}
                            setTasks={(tasks) => handleArrayChange('tasks', tasks)}
                            availableTasks={sampleTasks}
                            label="Tasks"
                            icon={<FiFileText />}
                            error={errors.tasks}
                            tooltip="Add and manage tasks for this project"
                          />
                          
                          {/* Milestones */}
                          <MilestoneTracker
                            milestones={newProject.milestones || []}
                            setMilestones={(milestones) => handleArrayChange('milestones', milestones)}
                            label="Milestones"
                            icon={<FiAward />}
                            error={errors.milestones}
                            tooltip="Define key milestones for your project timeline"
                          />
                        </div>
                      )}
                      
                      {activeTab === 'advanced' && (
                        <div className="space-y-6">
                          {/* URLs */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Demo URL */}
                            <AdvancedInput 
                              label="Demo URL" 
                              icon={<FiGlobe />}
                              isFloating={true}
                              tooltip="Link to a live demo of the project"
                            >
                              <div className="floating-label">
                                <input
                                  type="url"
                                  name="demoUrl"
                                  value={newProject.demoUrl || ''}
                                  onChange={handleInputChange}
                                  className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-slate-900"
                                  placeholder=" "
                                />
                                <label>
                                  <span className="flex items-center">
                                    <FiGlobe className="mr-1" size={14} /> Demo URL
                                  </span>
                                </label>
                              </div>
                            </AdvancedInput>
                            
                            {/* Repo URL */}
                            <AdvancedInput 
                              label="Repository URL" 
                              icon={<FiCpu />}
                              isFloating={true}
                              tooltip="Link to the project's source code repository"
                            >
                              <div className="floating-label">
                                <input
                                  type="url"
                                  name="repoUrl"
                                  value={newProject.repoUrl || ''}
                                  onChange={handleInputChange}
                                  className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-slate-900"
                                  placeholder=" "
                                />
                                <label>
                                  <span className="flex items-center">
                                    <FiCpu className="mr-1" size={14} /> Repository URL
                                  </span>
                                </label>
                              </div>
                            </AdvancedInput>
                          </div>
                          
                          {/* Image URL */}
                          <AdvancedInput 
                            label="Project Image URL" 
                            icon={<FiImage />}
                            isFloating={true}
                            tooltip="URL to a cover image for the project"
                          >
                            <div className="floating-label">
                              <input
                                type="url"
                                name="image"
                                value={newProject.image || ''}
                                onChange={handleInputChange}
                                className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-slate-900"
                                placeholder=" "
                              />
                              <label>
                                <span className="flex items-center">
                                  <FiImage className="mr-1" size={14} /> Project Image URL
                                </span>
                              </label>
                            </div>
                          </AdvancedInput>
                          
                          {/* File Uploads */}
                          <FileUploader
                            files={newProject.files || []}
                            setFiles={(files) => handleArrayChange('files', files)}
                            label="Attachments"
                            icon={<FiPaperclip />}
                            error={errors.files}
                            tooltip="Upload relevant files for this project"
                          />
                          
                          {/* Client Information */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Client Name */}
                            <AdvancedInput 
                              label="Client Name" 
                              icon={<FiUser />}
                              isFloating={true}
                              tooltip="Name of the client for this project"
                            >
                              <div className="floating-label">
                                <input
                                  type="text"
                                  name="clientName"
                                  value={newProject.clientName || ''}
                                  onChange={handleInputChange}
                                  className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-slate-900"
                                  placeholder=" "
                                />
                                <label>
                                  <span className="flex items-center">
                                    <FiUser className="mr-1" size={14} /> Client Name
                                  </span>
                                </label>
                              </div>
                            </AdvancedInput>
                            
                            {/* Client Email */}
                            <AdvancedInput 
                              label="Client Email" 
                              icon={<FiMail />}
                              isFloating={true}
                              tooltip="Email address of the client"
                            >
                              <div className="floating-label">
                                <input
                                  type="email"
                                  name="clientEmail"
                                  value={newProject.clientEmail || ''}
                                  onChange={handleInputChange}
                                  className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none placeholder-transparent text-slate-900"
                                  placeholder=" "
                                />
                                <label>
                                  <span className="flex items-center">
                                    <FiMail className="mr-1" size={14} /> Client Email
                                  </span>
                                </label>
                              </div>
                            </AdvancedInput>
                          </div>
                          
                          {/* Notifications */}
                          <AdvancedInput 
                            label="Notifications" 
                            icon={<FiBell />}
                            tooltip="Configure how you want to receive project notifications"
                          >
                            <div className="p-4">
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center">
                                  <FiMail className="mr-2 text-slate-500" />
                                  <span className="text-sm text-slate-900">Email Notifications</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input 
                                    type="checkbox" 
                                    className="sr-only peer" 
                                    checked={newProject.emailNotifications !== false}
                                    onChange={(e) => setNewProject({
                                      ...newProject, 
                                      emailNotifications: e.target.checked
                                    })}
                                  />
                                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-600"></div>
                                </label>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <FiBell className="mr-2 text-slate-500" />
                                  <span className="text-sm text-slate-900">Push Notifications</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input 
                                    type="checkbox" 
                                    className="sr-only peer" 
                                    checked={newProject.pushNotifications !== false}
                                    onChange={(e) => setNewProject({
                                      ...newProject, 
                                      pushNotifications: e.target.checked
                                    })}
                                  />
                                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-600"></div>
                                </label>
                              </div>
                            </div>
                          </AdvancedInput>
                          
                          {/* Privacy Settings */}
                          <AdvancedSelect
                            name="privacy"
                            value={newProject.privacy || 'private'}
                            onChange={handleInputChange}
                            options={[
                              { value: 'private', label: 'Private' },
                              { value: 'team', label: 'Team Only' },
                              { value: 'public', label: 'Public' }
                            ]}
                            label="Privacy Settings"
                            icon={<FiLock />}
                            tooltip="Control who can view this project"
                          />
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Form Actions */}
                  <motion.div 
                    className="mt-8 flex flex-col sm:flex-row justify-end gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.button
                      type="button"
                      whileHover={{
                        scale: 1.03,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                        backgroundColor: 'rgba(0,0,0,0.05)'
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowAddForm(false)}
                      className="px-6 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 glass-effect"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      whileHover={{
                        scale: 1.03,
                        boxShadow: '0 8px 20px rgba(100, 116, 139, 0.2)',
                        background: 'linear-gradient(to right, rgb(71, 85, 105), rgb(51, 65, 85))'
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-slate-500 relative overflow-hidden"
                    >
                      <span className="drop-shadow-md relative z-10">Create Project</span>
                      <div className="absolute inset-0 shimmer"></div>
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AddProjectForm;