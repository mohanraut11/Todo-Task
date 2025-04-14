'use client';

import React from 'react';
import { useTodos } from '@/hooks/useTodos';
import TodoFilters from './TodoFilters'; // Ensure you import the TodoFilters component

const TodoStats = () => {
  const { tasks } = useTodos();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === 'completed').length;
  const pendingTasks = tasks.filter((task) => task.status === 'pending').length;

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-6 mb-6'>
      {/* My Task Section (left side) */}
      <div className='flex-1'>
        <div className='bg-gradient-to-tr from-blue-400 to-blue-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1'>
          <h3 className='text-sm font-medium text-white text-center uppercase tracking-wider'>
            Total Tasks
          </h3>
          <p className='text-3xl font-extrabold text-white text-center mt-2'>
            {totalTasks}
          </p>
        </div>

        <div className='flex gap-6 mt-6'>
          <div className='flex-1 bg-gradient-to-tr from-green-400 to-green-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1'>
            <h3 className='text-sm font-medium text-white text-center uppercase tracking-wider'>
              Completed
            </h3>
            <p className='text-3xl font-extrabold text-white text-center mt-2'>
              {completedTasks}
            </p>
          </div>

          <div className='flex-1 bg-gradient-to-tr from-rose-400 to-rose-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1'>
            <h3 className='text-sm font-medium text-white text-center uppercase tracking-wider'>
              Pending
            </h3>
            <p className='text-3xl font-extrabold text-white text-center mt-2'>
              {pendingTasks}
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section (right side) */}
      <div className='w-full sm:w-1/3'>
        <TodoFilters />
      </div>
    </div>
  );
};

export default TodoStats;
