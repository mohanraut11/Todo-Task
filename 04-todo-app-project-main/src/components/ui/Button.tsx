// src/components/ui/Button.tsx
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'text';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-sky-600 text-white shadow-lg hover:from-cyan-600 hover:to-sky-700 focus:ring-cyan-300',
    secondary:
      'bg-yellow-50 text-yellow-800 border border-yellow-300 hover:bg-yellow-100 focus:ring-yellow-400 dark:bg-yellow-900 dark:text-yellow-100 dark:border-yellow-800 dark:hover:bg-yellow-800',
    danger:
      'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg hover:from-rose-600 hover:to-amber-600 focus:ring-rose-300',
    ghost:
      'bg-transparent text-emerald-600 hover:bg-emerald-100 dark:text-emerald-300 dark:hover:bg-emerald-800',
    text:
      'bg-transparent text-slate-800 dark:text-slate-100 hover:underline',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={twMerge(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
