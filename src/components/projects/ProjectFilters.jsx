// import { motion, AnimatePresence } from 'framer-motion';
// import { FiX } from 'react-icons/fi';

// const ProjectFilters = ({ 
//   showFilters, 
//   filters, 
//   handleFilterChange, 
//   resetFilters 
// }) => (
//   <AnimatePresence>
//     {showFilters && (
//       <motion.div
//         initial={{ height: 0, opacity: 0 }}
//         animate={{ height: 'auto', opacity: 1 }}
//         exit={{ height: 0, opacity: 0 }}
//         transition={{ duration: 0.3 }}
//         className="mb-8 overflow-hidden"
//       >
//         <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow border border-[var(--card-border)]">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-lg font-semibold text-[var(--text-primary)]">Filter Projects</h3>
//             <button 
//               onClick={resetFilters}
//               className="text-sm text-[var(--accent-color)] hover:text-[var(--accent-hover)]"
//             >
//               Reset All
//             </button>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Status</label>
//               <select
//                 name="status"
//                 value={filters.status}
//                 onChange={handleFilterChange}
//                 className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] text-sm"
//               >
//                 <option value="all">All Statuses</option>
//                 <option value="pending">Pending</option>
//                 <option value="in-progress">In Progress</option>
//                 <option value="completed">Completed</option>
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Priority</label>
//               <select
//                 name="priority"
//                 value={filters.priority}
//                 onChange={handleFilterChange}
//                 className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] text-sm"
//               >
//                 <option value="all">All Priorities</option>
//                 <option value="high">High</option>
//                 <option value="medium">Medium</option>
//                 <option value="low">Low</option>
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Date Range</label>
//               <select
//                 name="dateRange"
//                 value={filters.dateRange}
//                 onChange={handleFilterChange}
//                 className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] text-sm"
//               >
//                 <option value="all">All Time</option>
//                 <option value="last30">Last 30 Days</option>
//                 <option value="thisYear">This Year</option>
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Search</label>
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="searchQuery"
//                   value={filters.searchQuery}
//                   onChange={handleFilterChange}
//                   placeholder="Search projects..."
//                   className="w-full border border-gray-300 rounded-md py-2 px-3 pl-9 focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] text-sm"
//                 />
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     )}
//   </AnimatePresence>
// );

// export default ProjectFilters;

























import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSearch, FiFilter, FiRefreshCw, FiChevronDown, FiCalendar, FiAlertCircle, FiCheckCircle, FiClock } from 'react-icons/fi';
import { useState } from 'react';

const ProjectFilters = ({ 
  showFilters, 
  filters, 
  handleFilterChange, 
  resetFilters 
}) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <AnimatePresence>
      {showFilters && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="mb-8 overflow-hidden"
        >
          <div className="bg-[var(--card-bg)] p-6 rounded-2xl shadow-2xl border border-[var(--card-border)]">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[var(--card-border)]">
              <div className="flex items-center">
                <motion.div
                  initial={{ scale: 0.8, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="p-2 mr-3 rounded-xl bg-gradient-to-r from-[var(--accent-color)] to-purple-500 text-white"
                >
                  <FiFilter className="text-lg" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">Advanced Filters</h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">Refine your project search with precision</p>
                </div>
              </div>
              <motion.button 
                onClick={resetFilters}
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-sm font-medium text-white bg-gradient-to-r from-[var(--accent-color)] to-purple-500 hover:from-purple-500 hover:to-[var(--accent-color)] py-2.5 px-5 rounded-xl transition-all duration-300"
              >
                <FiRefreshCw className="mr-2" />
                Reset All
              </motion.button>
            </div>
            
            {/* Quick Filters Bar */}
            <motion.div 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-6 flex flex-wrap gap-3"
            >
              <span className="text-sm font-medium text-[var(--text-secondary)] mr-2 flex items-center">Quick filters:</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterChange({ target: { name: 'status', value: 'in-progress' } })}
                className={`flex items-center py-1.5 px-3.5 rounded-lg text-xs font-medium transition-all ${filters.status === 'in-progress' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <FiClock className="mr-1.5" /> In Progress
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterChange({ target: { name: 'priority', value: 'high' } })}
                className={`flex items-center py-1.5 px-3.5 rounded-lg text-xs font-medium transition-all ${filters.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <FiAlertCircle className="mr-1.5" /> High Priority
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterChange({ target: { name: 'status', value: 'completed' } })}
                className={`flex items-center py-1.5 px-3.5 rounded-lg text-xs font-medium transition-all ${filters.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <FiCheckCircle className="mr-1.5" /> Completed
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterChange({ target: { name: 'dateRange', value: 'last30' } })}
                className={`flex items-center py-1.5 px-3.5 rounded-lg text-xs font-medium transition-all ${filters.dateRange === 'last30' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <FiCalendar className="mr-1.5" /> Recent
              </motion.button>
            </motion.div>
            
            {/* Filter Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Main Filters */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Status Filter */}
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2 ml-1 flex items-center">
                    <FiClock className="mr-2 text-[var(--accent-color)]" /> Status
                  </label>
                  <div className="relative">
                    <select
                      name="status"
                      value={filters.status}
                      onChange={handleFilterChange}
                      className="w-full border border-[var(--card-border)] rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent appearance-none text-sm bg-[var(--card-bg)] cursor-pointer shadow-sm transition-all"
                    >
                      <option value="all">All Statuses</option>
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FiChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </motion.div>
                
                {/* Priority Filter */}
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2 ml-1 flex items-center">
                    <FiAlertCircle className="mr-2 text-[var(--accent-color)]" /> Priority
                  </label>
                  <div className="relative">
                    <select
                      name="priority"
                      value={filters.priority}
                      onChange={handleFilterChange}
                      className="w-full border border-[var(--card-border)] rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent appearance-none text-sm bg-[var(--card-bg)] cursor-pointer shadow-sm transition-all"
                    >
                      <option value="all">All Priorities</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FiChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </motion.div>
                
                {/* Date Range Filter */}
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2 ml-1 flex items-center">
                    <FiCalendar className="mr-2 text-[var(--accent-color)]" /> Date Range
                  </label>
                  <div className="relative">
                    <select
                      name="dateRange"
                      value={filters.dateRange}
                      onChange={handleFilterChange}
                      className="w-full border border-[var(--card-border)] rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent appearance-none text-sm bg-[var(--card-bg)] cursor-pointer shadow-sm transition-all"
                    >
                      <option value="all">All Time</option>
                      <option value="last7">Last 7 Days</option>
                      <option value="last30">Last 30 Days</option>
                      <option value="thisQuarter">This Quarter</option>
                      <option value="thisYear">This Year</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FiChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </motion.div>
                
                {/* Search Filter */}
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2 ml-1 flex items-center">
                    <FiSearch className="mr-2 text-[var(--accent-color)]" /> Search
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="searchQuery"
                      value={filters.searchQuery}
                      onChange={handleFilterChange}
                      placeholder="Search projects by name, description..."
                      className="w-full border border-[var(--card-border)] rounded-xl py-3.5 px-4 pl-11 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-sm shadow-sm transition-all"
                    />
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FiSearch className="h-4 w-4 text-gray-400" />
                    </div>
                    {filters.searchQuery && (
                      <motion.button 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        onClick={() => handleFilterChange({ target: { name: 'searchQuery', value: '' } })}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-100 rounded-full p-1 transition-colors"
                      >
                        <FiX className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </div>
              
              {/* Advanced Filters Toggle */}
              <div className="lg:col-span-4">
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="h-full bg-gray-50 border border-[var(--card-border)] rounded-2xl p-4 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)] flex items-center">
                      <FiFilter className="mr-2 text-[var(--accent-color)]" /> 
                      Advanced Filters
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                      Apply additional filters for more precise results
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => toggleSection('advanced')}
                    className="mt-4 w-full py-2.5 px-4 bg-white border border-[var(--card-border)] rounded-xl text-sm font-medium text-[var(--accent-color)] flex items-center justify-between"
                  >
                    <span>Show Advanced</span>
                    <motion.span
                      animate={{ rotate: expandedSection === 'advanced' ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiChevronDown />
                    </motion.span>
                  </motion.button>
                </motion.div>
              </div>
            </div>
            
            {/* Advanced Filters Section */}
            <AnimatePresence>
              {expandedSection === 'advanced' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-5 overflow-hidden"
                >
                  <div className="pt-5 border-t border-[var(--card-border)]">
                    <h4 className="font-medium text-[var(--text-primary)] mb-4">Additional Filters</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Team Size</label>
                        <select className="w-full border border-gray-200 rounded-lg py-2 px-3 text-sm bg-white">
                          <option>Any</option>
                          <option>Small (1-5)</option>
                          <option>Medium (6-15)</option>
                          <option>Large (16+)</option>
                        </select>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Budget Range</label>
                        <select className="w-full border border-gray-200 rounded-lg py-2 px-3 text-sm bg-white">
                          <option>Any</option>
                          <option>Under $10k</option>
                          <option>$10k - $50k</option>
                          <option>$50k - $100k</option>
                          <option>Over $100k</option>
                        </select>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Tags</label>
                        <select className="w-full border border-gray-200 rounded-lg py-2 px-3 text-sm bg-white">
                          <option>Select tags</option>
                          <option>Web Development</option>
                          <option>Mobile App</option>
                          <option>UI/UX Design</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Active Filters Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 pt-5 border-t border-[var(--card-border)]"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-[var(--text-secondary)]">Active filters:</span>
                <span className="text-xs text-[var(--accent-color)] bg-[var(--accent-color)] bg-opacity-10 py-1 px-2.5 rounded-full">
                  {[filters.status !== 'all', filters.priority !== 'all', filters.dateRange !== 'all', filters.searchQuery].filter(Boolean).length} applied
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.status !== 'all' && (
                  <motion.span 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex items-center py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-700"
                  >
                    Status: {filters.status.replace('-', ' ')}
                    <button 
                      onClick={() => handleFilterChange({ target: { name: 'status', value: 'all' } })}
                      className="ml-1.5 rounded-full hover:bg-blue-200 p-0.5 transition-colors"
                    >
                      <FiX className="h-3 w-3" />
                    </button>
                  </motion.span>
                )}
                
                {filters.priority !== 'all' && (
                  <motion.span 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex items-center py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-700"
                  >
                    Priority: {filters.priority}
                    <button 
                      onClick={() => handleFilterChange({ target: { name: 'priority', value: 'all' } })}
                      className="ml-1.5 rounded-full hover:bg-red-200 p-0.5 transition-colors"
                    >
                      <FiX className="h-3 w-3" />
                    </button>
                  </motion.span>
                )}
                
                {filters.dateRange !== 'all' && (
                  <motion.span 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex items-center py-1.5 px-3 rounded-full text-xs font-medium bg-purple-100 text-purple-700"
                  >
                    Date: {filters.dateRange === 'last30' ? 'Last 30 Days' : 
                          filters.dateRange === 'last7' ? 'Last 7 Days' :
                          filters.dateRange === 'thisQuarter' ? 'This Quarter' : 'This Year'}
                    <button 
                      onClick={() => handleFilterChange({ target: { name: 'dateRange', value: 'all' } })}
                      className="ml-1.5 rounded-full hover:bg-purple-200 p-0.5 transition-colors"
                    >
                      <FiX className="h-3 w-3" />
                    </button>
                  </motion.span>
                )}
                
                {filters.searchQuery && (
                  <motion.span 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex items-center py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-700"
                  >
                    Search: {filters.searchQuery.length > 15 ? `${filters.searchQuery.substring(0, 15)}...` : filters.searchQuery}
                    <button 
                      onClick={() => handleFilterChange({ target: { name: 'searchQuery', value: '' } })}
                      className="ml-1.5 rounded-full hover:bg-green-200 p-0.5 transition-colors"
                    >
                      <FiX className="h-3 w-3" />
                    </button>
                  </motion.span>
                )}
                
                {filters.status === 'all' && filters.priority === 'all' && filters.dateRange === 'all' && !filters.searchQuery && (
                  <span className="inline-flex items-center py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                    No filters applied
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectFilters;