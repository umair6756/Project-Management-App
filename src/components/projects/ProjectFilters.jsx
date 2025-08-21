import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const ProjectFilters = ({ 
  showFilters, 
  filters, 
  handleFilterChange, 
  resetFilters 
}) => (
  <AnimatePresence>
    {showFilters && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8 overflow-hidden"
      >
        <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow border border-[var(--card-border)]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">Filter Projects</h3>
            <button 
              onClick={resetFilters}
              className="text-sm text-[var(--accent-color)] hover:text-[var(--accent-hover)]"
            >
              Reset All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Status</label>
              <select
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] text-sm"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Priority</label>
              <select
                name="priority"
                value={filters.priority}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] text-sm"
              >
                <option value="all">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Date Range</label>
              <select
                name="dateRange"
                value={filters.dateRange}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] text-sm"
              >
                <option value="all">All Time</option>
                <option value="last30">Last 30 Days</option>
                <option value="thisYear">This Year</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Search</label>
              <div className="relative">
                <input
                  type="text"
                  name="searchQuery"
                  value={filters.searchQuery}
                  onChange={handleFilterChange}
                  placeholder="Search projects..."
                  className="w-full border border-gray-300 rounded-md py-2 px-3 pl-9 focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] text-sm"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ProjectFilters;