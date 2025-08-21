import React, { useState } from 'react';
import { Bell, User, LogOut, ChevronDown, ChevronUp } from 'react-feather';
import { useTheme } from '../../context/ThemeContext';

const TopNav = ({ sidebarOpen, toggleSidebar }) => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const notifications = [
    { id: 1, title: 'Project deadline approaching', message: 'Website Redesign due in 3 days', time: '1 hour ago', read: false },
    { id: 2, title: 'New task assigned', message: 'You have been assigned to "Implement dark mode"', time: '3 hours ago', read: false },
    { id: 3, title: 'Team meeting reminder', message: 'Sprint planning at 2:00 PM today', time: '5 hours ago', read: true },
    { id: 4, title: 'Budget approval needed', message: 'Please review and approve the Q4 marketing budget', time: '1 day ago', read: true }
  ];

  return (
    <div className="flex items-center justify-between h-16 px-4 border-b bg-[var(--primary-bg)] border-[var(--card-border)]">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-1 mr-2 text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold text-[var(--text-primary)]">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 px-4 py-2 text-sm border rounded-lg bg-[var(--secondary-bg)] border-[var(--card-border)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-2.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        
        <button
          onClick={toggleDarkMode}
          className="p-1 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {darkMode ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
        
        <div className="relative">
          <button 
            onClick={() => setNotificationOpen(!notificationOpen)}
            className="p-1 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <div className="relative">
              <Bell size={20} />
              {notifications.filter(n => !n.read).length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications.filter(n => !n.read).length}
                </span>
              )}
            </div>
          </button>
          {notificationOpen && (
            <div className="absolute right-0 z-10 w-64 mt-2 origin-top-right bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg shadow-lg">
              <div className="p-2">
                <div className="flex items-center justify-between px-2 py-1 border-b border-[var(--card-border)]">
                  <h3 className="text-sm font-medium text-[var(--text-primary)]">Notifications</h3>
                  <button className="text-xs text-[var(--accent-color)] hover:text-[var(--accent-hover)]">
                    Mark all as read
                  </button>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`px-2 py-2 text-sm ${!notification.read ? 'bg-[var(--accent-color)] bg-opacity-10' : ''}`}
                    >
                      <p className="font-medium text-[var(--text-primary)]">{notification.title}</p>
                      <p className="text-[var(--text-secondary)]">{notification.message}</p>
                      <p className="text-xs text-[var(--text-secondary)] mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
                <div className="px-2 py-1 text-center border-t border-[var(--card-border)]">
                  <button className="text-sm text-[var(--accent-color)] hover:text-[var(--accent-hover)]">
                    View all notifications
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="relative">
          <button 
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <div className="relative">
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User profile"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full dark:border-gray-800"></span>
            </div>
            <span className="hidden text-sm font-medium text-gray-700 md:inline-block dark:text-gray-300">John Doe</span>
          </button>
          {profileOpen && (
            <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg shadow-lg">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--secondary-bg)]">
                  Your Profile
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--secondary-bg)]">
                  Settings
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--secondary-bg)]">
                  Team
                </a>
                <div className="border-t border-[var(--card-border)]"></div>
                <a href="#" className="block px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--secondary-bg)]">
                  Sign out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;