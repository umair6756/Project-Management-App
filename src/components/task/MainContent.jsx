import React, { useState } from 'react'
import Header from '../common/Header'
import { useEffect } from 'react';

import {sampleTasks, calculateTaskStats} from './SampleTasks.js'

import TaskStats from './TaskStats.jsx'
import TaskCharts from './TaskCharts.jsx'

const MainContent = () => {
    const [stats, setStats] = useState(null)
      useEffect(() => {

        setStats(calculateTaskStats(sampleTasks));
      }, []);

  return (
    <div className=" h-screen  overflow-auto bg-[var(--secondary-bg)] p-4 md:p-8">
        <Header 
        heading="Tasks Overview"
        buttonHeading="Add Task"
        />

        <TaskStats stats={stats} />

        <TaskCharts/>

        


    </div>
  )
}

export default MainContent