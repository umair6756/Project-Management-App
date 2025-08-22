import { motion } from "framer-motion";
import { FiFilter, FiChevronUp, FiChevronDown, FiPlus } from "react-icons/fi";

// interface DashboardHeaderProps {
//   heading: string;
//   subheading?: string;
//   showFilters: boolean;
//   onToggleFilters: () => void;
//   onAddProject?: () => void;
// }

export default function DashboardHeader({
  heading,
  subheading,
  showFilters,
  onToggleFilters,
  onAddProject,
}) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[var(--text-primary)]">
            {heading}
          </h1>
          {subheading && (
            <p className="text-[var(--text-secondary)]">{subheading}</p>
          )}
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button
            onClick={onToggleFilters}
            className="flex items-center px-4 py-2 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg shadow-sm text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--secondary-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-colors"
          >
            <FiFilter className="mr-2" />
            Filters
            {showFilters ? (
              <FiChevronUp className="ml-2" />
            ) : (
              <FiChevronDown className="ml-2" />
            )}
          </button>
          {onAddProject && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onAddProject}
              className="flex items-center px-4 py-2 bg-[var(--accent-color)] rounded-lg shadow-sm text-sm font-medium text-white hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-colors"
            >
              <FiPlus className="mr-2" />
              Add Project
            </motion.button>
          )}
        </div>
      </div>
    </motion.header>
  );
}
