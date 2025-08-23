// import { motion } from 'framer-motion';
// import { FiList, FiCheck, FiTrendingUp, FiDollarSign } from 'react-icons/fi';

// const StatCard = ({ icon, title, value, color }) => (
//   <motion.div 
//     whileHover={{ y: -5 }}
//     className="bg-[var(--card-bg)] p-6 rounded-lg shadow border border-[var(--card-border)]"
//   >
//     <div className="flex items-center">
//       <div className={`p-3 rounded-full ${color.bg} ${color.text}`}>
//         {icon}
//       </div>
//       <div className="ml-4">
//         <h3 className="text-lg font-medium text-[var(--text-secondary)]">{title}</h3>
//         <p className="text-2xl font-semibold text-[var(--text-primary)]">{value}</p>
//       </div>
//     </div>
//   </motion.div>
// );

// const ProjectStats = ({ stats }) => {
//   if (!stats) return null;

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.2 }}
//       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
//     >
//       <StatCard 
//         icon={<FiList className="h-6 w-6" />}
//         title="Total Projects"
//         value={stats.total}
//         color={{ bg: 'bg-indigo-100', text: 'text-indigo-600' }}
//       />
//       <StatCard 
//         icon={<FiCheck className="h-6 w-6" />}
//         title="Completed"
//         value={stats.completed}
//         color={{ bg: 'bg-green-100', text: 'text-green-600' }}
//       />
//       <StatCard 
//         icon={<FiTrendingUp className="h-6 w-6" />}
//         title="Completion Rate"
//         value={`${stats.completionRate}%`}
//         color={{ bg: 'bg-blue-100', text: 'text-blue-600' }}
//       />
//       <StatCard 
//         icon={<FiDollarSign className="h-6 w-6" />}
//         title="Total Budget"
//         value={`$${stats.totalBudget.toLocaleString()}`}
//         color={{ bg: 'bg-purple-100', text: 'text-purple-600' }}
//       />
//     </motion.div>
//   );
// };

// export default ProjectStats;






























import { FiList, FiCheck, FiTrendingUp, FiDollarSign } from 'react-icons/fi';

import StatCard from '../common/StatCard.jsx';
const ProjectStats = ({ stats }) => {
  if (!stats) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard 
        icon={<FiList className="h-5 w-5" />}
        title="Total Projects"
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
        icon={<FiDollarSign className="h-5 w-5" />}
        title="Total Budget"
        value={`$${stats.totalBudget.toLocaleString()}`}
        color={{ bg: 'bg-purple-100', text: 'text-purple-600' }}
        delay={3}
      />
    </div>
  );
};

export default ProjectStats;