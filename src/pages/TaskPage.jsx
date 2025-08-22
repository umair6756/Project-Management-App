import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../components/common/Sidebar';
import TopNav from '../components/common/TopNav';
import MainContent from '../components/projects/MainContent';
import { ThemeProvider } from '../context/ThemeContext';

import '../App.css'

const TaskPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar 
          sidebarOpen={sidebarOpen} 
          toggleSidebar={toggleSidebar} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />

        {sidebarOpen && (
          <div
            className="fixed inset-0 z-10 bg-black bg-opacity-20 md:hidden"
            onClick={toggleSidebar}
          />
        )}

        <div className="flex flex-col flex-1 overflow-hidden">
          <TopNav 
            sidebarOpen={sidebarOpen} 
            toggleSidebar={toggleSidebar} 
          />
          {/* <MainContent /> */}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default TaskPage;