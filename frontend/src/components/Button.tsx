import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all active:scale-95 shadow-sm cursor-pointer";
  
  const variants = {
    primary: "bg-primary dark:bg-gold text-white dark:text-bg-dark hover:opacity-90",
    
    secondary: "bg-gray-200 dark:bg-secondary text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:opacity-80",
    
    danger: "bg-red-600 text-white hover:bg-red-700"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
