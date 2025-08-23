import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const StatCard = ({ icon, title, value, color, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { delay: delay * 0.15, type: 'spring' }
    });
  }, [controls, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-[var(--card-bg)] p-6 rounded-2xl border border-[var(--card-border)] relative overflow-hidden h-full"
      style={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* 3D depth effect */}
      <motion.div 
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="h-full flex flex-col"
      >
        {/* Floating icon effect */}
        <motion.div
          animate={{
            y: isHovered ? -5 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ type: 'spring', stiffness: 400 }}
          className={`p-3 rounded-xl ${color.bg} ${color.text} w-12 h-12 flex items-center justify-center mb-4 relative`}
        >
          {icon}
          <motion.div 
            animate={{
              opacity: isHovered ? 0.3 : 0,
              scale: isHovered ? 1.5 : 1
            }}
            className="absolute inset-0 rounded-xl bg-current"
          />
        </motion.div>
        
        {/* Content with staggered animation */}
        <div className="flex-1">
          <motion.h3 
            initial={{ x: -10 }}
            animate={{ 
              x: 0,
              transition: { delay: delay * 0.15 + 0.1 } 
            }}
            className="text-lg font-medium text-[var(--text-secondary)] mb-1"
          >
            {title}
          </motion.h3>
          <motion.p 
            initial={{ scale: 0.9 }}
            animate={{ 
              scale: 1, 
              transition: { 
                type: 'spring', 
                delay: delay * 0.15 + 0.2 
              } 
            }}
            className="text-3xl font-bold text-[var(--text-primary)]"
          >
            {value}
          </motion.p>
        </div>

        {/* Animated underline effect */}
        <motion.div
          animate={{
            width: isHovered ? '100%' : '0%',
            opacity: isHovered ? 1 : 0.7
          }}
          className={`h-0.5 ${color.bg} mt-4 self-start`}
          initial={{ width: 0 }}
        />
      </motion.div>

      {/* Subtle particle effect on hover */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0,
                scale: 0.5,
                x: Math.random() * 40 - 20,
                y: Math.random() * 40 - 20
              }}
              animate={{ 
                opacity: [0, 0.4, 0],
                scale: [0.5, 1.2],
                x: Math.random() * 80 - 40,
                y: Math.random() * 80 - 40
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1
              }}
              className={`absolute rounded-full ${color.bg} ${color.text.replace('text-', 'text-opacity-30 ')}`}
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                top: '50%',
                left: '50%'
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};

export default StatCard;