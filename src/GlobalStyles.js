import React from 'react';
import { useTheme } from '../ThemeContext';

const GlobalStyles = () => {
  const { theme } = useTheme();
  
  return (
    <style>
      {`
        :root {
          --primary-bg: ${theme.primaryBg};
          --secondary-bg: ${theme.secondaryBg};
          --text-primary: ${theme.textPrimary};
          --text-secondary: ${theme.textSecondary};
          --sidebar-bg: ${theme.sidebarBg};
          --sidebar-text: ${theme.sidebarText};
          --card-bg: ${theme.cardBg};
          --card-border: ${theme.cardBorder};
          --accent-color: ${theme.accentColor};
          --accent-hover: ${theme.accentHover};
          --success-color: ${theme.successColor};
          --warning-color: ${theme.warningColor};
          --danger-color: ${theme.dangerColor};
          --info-color: ${theme.infoColor};
        }
        
        .progress-ring__circle {
          transition: stroke-dashoffset 0.5s ease;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}
    </style>
  );
};

export default GlobalStyles;