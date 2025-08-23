// import { motion } from 'framer-motion';
// import { Chart as ChartJS, BarElement, LineElement, PointElement, PieController, ArcElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
// import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

// ChartJS.register(
//   BarElement, LineElement, PointElement, PieController, ArcElement,
//   LinearScale, CategoryScale, Tooltip, Legend
// );

// const chartOptions = {
//   responsive: true,
//   maintainAspectRatio: false,
//   plugins: {
//     legend: {
//       position: 'top',
//       labels: {
//         font: {
//           family: "'Inter', sans-serif",
//           size: 13
//         },
//         padding: 20,
//         usePointStyle: true,
//         pointStyle: 'circle'
//       }
//     },
//     tooltip: {
//       backgroundColor: '#1F2937',
//       titleFont: {
//         family: "'Inter', sans-serif",
//         size: 14
//       },
//       bodyFont: {
//         family: "'Inter', sans-serif",
//         size: 13
//       },
//       padding: 12,
//       usePointStyle: true,
//       callbacks: {
//         label: function(context) {
//           return `${context.dataset.label}: ${context.raw}`;
//         }
//       }
//     }
//   },
//   scales: {
//     y: {
//       beginAtZero: true,
//       grid: {
//         drawBorder: false,
//         color: '#E5E7EB'
//       },
//       ticks: {
//         font: {
//           family: "'Inter', sans-serif"
//         }
//       }
//     },
//     x: {
//       grid: {
//         display: false,
//         drawBorder: false
//       },
//       ticks: {
//         font: {
//           family: "'Inter', sans-serif"
//         }
//       }
//     }
//   }
// };

// const chartData = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//   datasets: [
//     {
//       label: 'Completed',
//       data: [3, 5, 7, 9, 6, 8, 10, 12, 9, 11, 13, 15],
//       backgroundColor: '#10B981',
//       borderColor: '#10B981',
//       borderWidth: 2,
//       tension: 0.4,
//       fill: false
//     },
//     {
//       label: 'In Progress',
//       data: [5, 8, 6, 9, 12, 10, 8, 6, 9, 7, 10, 8],
//       backgroundColor: '#3B82F6',
//       borderColor: '#3B82F6',
//       borderWidth: 2,
//       tension: 0.4,
//       fill: false
//     },
//     {
//       label: 'Pending',
//       data: [8, 5, 7, 4, 6, 3, 5, 7, 4, 6, 3, 2],
//       backgroundColor: '#F59E0B',
//       borderColor: '#F59E0B',
//       borderWidth: 2,
//       tension: 0.4,
//       fill: false
//     }
//   ]
// };

// const pieData = {
//   labels: ['High Priority', 'Medium Priority', 'Low Priority'],
//   datasets: [
//     {
//       data: [12, 19, 8],
//       backgroundColor: [
//         '#EF4444',
//         '#F59E0B',
//         '#10B981'
//       ],
//       borderWidth: 0,
//       hoverOffset: 10
//     }
//   ]
// };

// const ProjectCharts = ({ activeChart, setActiveChart }) => (
//   <motion.section 
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ delay: 0.2 }}
//     className="mb-8"
//   >
//     <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow border border-[var(--card-border)]">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//         <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2 md:mb-0">Project Analytics</h2>
//         <div className="flex space-x-2">
//           {['bar', 'line', 'pie', 'doughnut'].map(chartType => (
//             <motion.button
//               key={chartType}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setActiveChart(chartType)}
//               className={`px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors ${
//                 activeChart === chartType 
//                   ? 'bg-[var(--accent-color)] text-white' 
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               {chartType.charAt(0).toUpperCase() + chartType.slice(1)}
//             </motion.button>
//           ))}
//         </div>
//       </div>
      
//       <div className="h-80">
//         {activeChart === 'bar' && (
//           <Bar 
//             data={chartData} 
//             options={{
//               ...chartOptions,
//               plugins: {
//                 ...chartOptions.plugins,
//                 title: {
//                   display: true,
//                   text: 'Projects by Status Over Time',
//                   font: {
//                     size: 16,
//                     family: "'Inter', sans-serif"
//                   },
//                   padding: {
//                     top: 10,
//                     bottom: 20
//                   }
//                 }
//               }
//             }} 
//           />
//         )}
        
//         {activeChart === 'line' && (
//           <Line 
//             data={chartData} 
//             options={{
//               ...chartOptions,
//               plugins: {
//                 ...chartOptions.plugins,
//                 title: {
//                   display: true,
//                   text: 'Project Trends',
//                   font: {
//                     size: 16,
//                     family: "'Inter', sans-serif"
//                   },
//                   padding: {
//                     top: 10,
//                     bottom: 20
//                   }
//                 }
//               }
//             }} 
//           />
//         )}
        
//         {activeChart === 'pie' && (
//           <Pie 
//             data={pieData} 
//             options={{
//               ...chartOptions,
//               plugins: {
//                 ...chartOptions.plugins,
//                 title: {
//                   display: true,
//                   text: 'Projects by Priority',
//                   font: {
//                     size: 16,
//                     family: "'Inter', sans-serif"
//                   },
//                   padding: {
//                     top: 10,
//                     bottom: 20
//                   }
//                 }
//               }
//             }} 
//           />
//         )}
        
//         {activeChart === 'doughnut' && (
//           <Doughnut 
//             data={pieData} 
//             options={{
//               ...chartOptions,
//               plugins: {
//                 ...chartOptions.plugins,
//                 title: {
//                   display: true,
//                   text: 'Projects by Priority',
//                   font: {
//                     size: 16,
//                     family: "'Inter', sans-serif"
//                   },
//                   padding: {
//                     top: 10,
//                     bottom: 20
//                   }
//                 }
//               },
//               cutout: '65%'
//             }} 
//           />
//         )}
//       </div>
//     </div>
//   </motion.section>
// );

// export default ProjectCharts;















































import { motion } from 'framer-motion';
import { Chart as ChartJS, BarElement, LineElement, PointElement, PieController, ArcElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
// import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { useState } from 'react';
import ChartCard from '../common/ChartCard.jsx'
ChartJS.register(
  BarElement, LineElement, PointElement, PieController, ArcElement,
  LinearScale, CategoryScale, Tooltip, Legend
);

const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [12, 19, 15, 28, 22, 24, 31, 25, 28, 32, 35, 40],
      backgroundColor: '#10B981',
      borderColor: '#10B981',
        borderWidth: 2,
        tension: 0.4,
        fill: false
      },
      {
        label: 'Tasks In Progress',
        data: [8, 12, 15, 10, 14, 16, 12, 18, 15, 12, 10, 8],
      backgroundColor: '#3B82F6',
      borderColor: '#3B82F6',
        borderWidth: 2,
        tension: 0.4,
        fill: false
      },
      {
        label: 'Tasks Overdue',
        data: [2, 3, 5, 4, 6, 3, 5, 4, 3, 2, 1, 0],
      backgroundColor: '#F59E0B',
      borderColor: '#F59E0B',
        borderWidth: 2,
        tension: 0.4,
        fill: false
      }
    ]
  };
  
  const pieData = {
    labels: ['High Priority', 'Medium Priority', 'Low Priority'],
    datasets: [
      {
        data: [15, 25, 10],
      backgroundColor: [
        '#EF4444',
        '#F59E0B',
        '#10B981'
      ],
        borderWidth: 0,
        hoverOffset: 10
      }
    ]
  };

const ProjectCharts = () => {
  const [activeChart, setActiveChart] = useState('bar');
  return (
<>
<ChartCard
  activeChart={activeChart}
  setActiveChart={setActiveChart}
  title="Task Progress"
  chartData={chartData}
  pieData={pieData}
/>
</>)};

export default ProjectCharts;