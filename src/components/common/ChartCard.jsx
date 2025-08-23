import { motion } from 'framer-motion';
import { Chart as ChartJS, BarElement, LineElement, PointElement, PieController, ArcElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  BarElement, LineElement, PointElement, PieController, ArcElement,
  LinearScale, CategoryScale, Tooltip, Legend
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: {
          family: "'Inter', sans-serif",
          size: 13
        },
        padding: 20,
        usePointStyle: true,
        pointStyle: 'circle'
      }
    },
    tooltip: {
      backgroundColor: '#1F2937',
      titleFont: {
        family: "'Inter', sans-serif",
        size: 14
      },
      bodyFont: {
        family: "'Inter', sans-serif",
        size: 13
      },
      padding: 12,
      usePointStyle: true,
      callbacks: {
        label: function(context) {
          return `${context.dataset.label}: ${context.raw}`;
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        drawBorder: false,
        color: '#E5E7EB'
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif"
        }
      }
    },
    x: {
      grid: {
        display: false,
        drawBorder: false
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif"
        }
      }
    }
  }
};




const ChartCard = ({ 
  activeChart, 
  setActiveChart, 
  title,
  chartData,
  pieData,
  chartTypes = ['bar', 'line', 'pie', 'doughnut']
}) => (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="mb-8"
  >
    <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow border border-[var(--card-border)]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2 md:mb-0">{title}</h2>
        <div className="flex space-x-2">
          {chartTypes.map(chartType => (
            <motion.button
              key={chartType}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveChart(chartType)}
              className={`px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                activeChart === chartType 
                  ? 'bg-[var(--accent-color)] text-white' 
                  : 'bg-[var(--secondary-bg)] text-[var(--text-primary)] hover:bg-[var(--card-border)]'
              }`}
            >
              {chartType.charAt(0).toUpperCase() + chartType.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>
      
      <div className="h-80">
        {activeChart === 'bar' && (
          <Bar 
            data={chartData} 
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: {
                  display: true,
                  text: `${title} Over Time`,
                  font: {
                    size: 16,
                    family: "'Inter', sans-serif"
                  },
                  padding: {
                    top: 10,
                    bottom: 20
                  }
                }
              }
            }} 
          />
        )}
        
        {activeChart === 'line' && (
          <Line 
            data={chartData} 
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: {
                  display: true,
                  text: `${title} Trends`,
                  font: {
                    size: 16,
                    family: "'Inter', sans-serif"
                  },
                  padding: {
                    top: 10,
                    bottom: 20
                  }
                }
              }
            }} 
          />
        )}
        
        {activeChart === 'pie' && (
          <Pie 
            data={pieData} 
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: {
                  display: true,
                  text: `${title} by Priority`,
                  font: {
                    size: 16,
                    family: "'Inter', sans-serif"
                  },
                  padding: {
                    top: 10,
                    bottom: 20
                  }
                }
              }
            }} 
          />
        )}
        
        {activeChart === 'doughnut' && (
          <Doughnut 
            data={pieData} 
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: {
                  display: true,
                  text: `${title} by Priority`,
                  font: {
                    size: 16,
                    family: "'Inter', sans-serif"
                  },
                  padding: {
                    top: 10,
                    bottom: 20
                  }
                }
              },
              cutout: '65%'
            }} 
          />
        )}
      </div>
    </div>
  </motion.section>
);

export default ChartCard;