'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import Button from './ui/Button';
import ThemeToggle from '../components/ui/ThemeToggle';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className='bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative'>
        {/* Theme toggle in top-left */}
        <div className='absolute top-4 left-4'>
          <ThemeToggle />
        </div>

        {/* App name centered */}
        <h1 className='text-2xl font-bold tracking-wide mx-auto'>ToDo App</h1>

        <div className='flex items-center gap-4'>
          {isAuthenticated ? (
            <div className='flex items-center gap-3'>
              <span className='text-sm sm:text-base font-medium'>Hi, {user?.name}</span>
              <Button
                className='bg-white text-blue-600 border border-white hover:bg-blue-100 hover:text-blue-700 transition rounded px-4 py-2 text-sm font-semibold'
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              className='bg-white text-blue-600 border border-white hover:bg-blue-100 hover:text-blue-700 transition rounded px-4 py-2 text-sm font-semibold'
              onClick={() => router.push('/login')}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;