import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  CheckCircle,
  Users,
  AlertCircle,
  TrendingUp,
  BarChart2,
  PieChart,
  Settings,
  Bell,
  User,
  Calendar,
  LogOut,
} from 'react-feather';
import { useTheme } from '../../context/ThemeContext';

const Sidebar = ({ sidebarOpen, toggleSidebar, activeTab, setActiveTab }) => {
  const { darkMode } = useTheme();

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`md:flex md:flex-shrink-0 flex-col w-64 bg-[var(--sidebar-bg)] text-[var(--sidebar-text)]`}
        >
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
            <div className="flex items-center">
              <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="ml-2 text-xl font-semibold">ProjectHub</span>
            </div>
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col flex-grow px-4 py-4 overflow-y-auto">
            <nav className="flex-1 space-y-1">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all ${activeTab === 'dashboard' ? 'bg-indigo-700 text-white' : 'hover:bg-gray-700'}`}
              >
                <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all ${activeTab === 'projects' ? 'bg-indigo-700 text-white' : 'hover:bg-gray-700'}`}
              >
                <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Projects
              </button>
              <button
                onClick={() => setActiveTab('tasks')}
                className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all ${activeTab === 'tasks' ? 'bg-indigo-700 text-white' : 'hover:bg-gray-700'}`}
              >
                <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Tasks
              </button>
              <button
                onClick={() => setActiveTab('team')}
                className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all ${activeTab === 'team' ? 'bg-indigo-700 text-white' : 'hover:bg-gray-700'}`}
              >
                <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Team
              </button>
              <button
                onClick={() => setActiveTab('calendar')}
                className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all ${activeTab === 'calendar' ? 'bg-indigo-700 text-white' : 'hover:bg-gray-700'}`}
              >
                <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Calendar
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all ${activeTab === 'reports' ? 'bg-indigo-700 text-white' : 'hover:bg-gray-700'}`}
              >
                <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Reports
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all ${activeTab === 'settings' ? 'bg-indigo-700 text-white' : 'hover:bg-gray-700'}`}
              >
                <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </button>
            </nav>
          </div>
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center">
              <div className="relative">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User profile"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-700 rounded-full"></span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-gray-400">Project Manager</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;