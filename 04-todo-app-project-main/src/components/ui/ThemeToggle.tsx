'use client';

import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className='w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 shadow-inner'
        aria-label='Theme toggle placeholder'
      >
        <MoonIcon className='w-6 h-6 text-gray-600 dark:text-gray-300' />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className='w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 shadow-md hover:scale-105 transition-transform duration-200 ease-in-out border border-gray-200 dark:border-gray-600'
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <SunIcon className='w-6 h-6 text-yellow-400' />
      ) : (
        <MoonIcon className='w-6 h-6 text-blue-500' />
      )}
    </button>
  );
};

export default ThemeToggle;