import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  loading = false,
  disabled = false,
  onClick,
  href,
  icon,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-glow';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-electric-500 text-white hover:from-primary-700 hover:to-electric-600 focus:ring-primary-500 shadow-lg hover:shadow-xl glow-effect',
    secondary: 'bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 focus:ring-white/50 glass-button',
    ghost: 'text-white/80 hover:text-white hover:bg-white/10 focus:ring-white/50',
    glass: 'glass-button text-white hover:bg-white/20',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;