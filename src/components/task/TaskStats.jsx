


import { FiList, FiCheck, FiTrendingUp, FiAlertCircle  } from 'react-icons/fi';

// import '../App.css'

import StatCard from '../common/StatCard.jsx';
const TaskStats = ({ stats }) => {
  if (!stats) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard 
        icon={<FiList className="h-5 w-5" />}
        title="Total Tasks"
        value={stats.total}
        color={{ bg: 'bg-indigo-100', text: 'text-indigo-600' }}
        delay={0}
      />
      <StatCard 
        icon={<FiCheck className="h-5 w-5" />}
        title="Completed"
        value={stats.completed}
        color={{ bg: 'bg-green-100', text: 'text-green-600' }}
        delay={1}
      />
      <StatCard 
        icon={<FiTrendingUp className="h-5 w-5" />}
        title="Completion Rate"
        value={`${stats.completionRate}%`}
        color={{ bg: 'bg-blue-100', text: 'text-blue-600' }}
        delay={2}
      />
      <StatCard 
        icon={<FiAlertCircle className="h-5 w-5" />}
        title="Overdue"
        value={stats.overdue}
        color={{ bg: 'bg-purple-100', text: 'text-purple-600' }}
        delay={3}
      />
    </div>
  );
};

export default TaskStats;