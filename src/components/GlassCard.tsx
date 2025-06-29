import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: '5' | '10' | '15' | '20';
  tint?: 'purple' | 'blue' | 'emerald' | 'orange' | 'white';
  animation?: 'float' | 'none';
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'none';
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  blur = 'md',
  opacity = '10',
  tint = 'white',
  animation = 'none',
  hoverEffect = 'lift',
  delay = 0,
}) => {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  const tintClasses = {
    purple: `bg-purple-500/${opacity}`,
    blue: `bg-blue-500/${opacity}`,
    emerald: `bg-emerald-500/${opacity}`,
    orange: `bg-orange-500/${opacity}`,
    white: `bg-white/${opacity}`,
  };

  const animationClasses = {
    float: 'floating-animation',
    none: '',
  };

  const hoverVariants = {
    lift: {
      hover: { y: -8, scale: 1.02 },
      tap: { scale: 0.98 }
    },
    glow: {
      hover: { boxShadow: '0 0 40px rgba(107, 70, 193, 0.4)' },
      tap: { scale: 0.98 }
    },
    scale: {
      hover: { scale: 1.05 },
      tap: { scale: 0.95 }
    },
    none: {}
  };

  const baseClasses = `
    ${blurClasses[blur]} 
    ${tintClasses[tint]} 
    ${animationClasses[animation]}
    border border-white/20 
    rounded-xl 
    shadow-lg 
    transition-all 
    duration-300
    ${className}
  `;

  return (
    <motion.div
      className={baseClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      variants={hoverVariants[hoverEffect]}
      whileHover="hover"
      whileTap="tap"
      style={{
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;