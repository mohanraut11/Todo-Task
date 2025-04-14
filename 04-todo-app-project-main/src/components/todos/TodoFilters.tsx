// components/TodoFilters.tsx
'use client';

import React from 'react';
import { useTodoContext } from '@/context/TodoContext';
import Input from '../ui/Input';
import Select from '../ui/Select';
import { PRIORITIES } from '@/constants/priorities';
import { Filter } from 'lucide-react'; 

export const TodoFilters = () => {
  const { state, dispatch } = useTodoContext();

  const handleFilterChange = (key: string, value: string) => {
    dispatch({
      type: 'SET_FILTER_OPTIONS',
      payload: { [key]: value },
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange('search', e.target.value);
  };

  return (
    <div className='mb-6 bg-blue-50 p-4 rounded-lg shadow border border-blue-200'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-lg font-semibold text-blue-700 flex items-center'>
          <Filter className='h-5 w-5 mr-2 text-blue-600' />
          Filters
        </h3>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* Status Filter */}
        <Select
          label='Status'
          value={state.filterOptions.status}
          onChange={(e) => handleFilterChange('status', e.target.value)}
          options={[
            { value: 'all', label: 'All Tasks' },
            { value: 'active', label: 'Active' },
            { value: 'completed', label: 'Completed' },
          ]}
        />

        {/* Priority Filter */}
        <Select
          label='Priority'
          value={state.filterOptions.priority}
          onChange={(e) => handleFilterChange('priority', e.target.value)}
          options={[
            { value: 'all', label: 'All Priorities' },
            ...PRIORITIES.map((p) => ({
              value: p.value,
              label: p.label,
            })),
          ]}
        />

        {/* Search Input */}
        <Input
          label='Search'
          value={state.filterOptions.search}
          onChange={handleSearchChange}
          placeholder='Search'
        />
      </div>
    </div>
  );
};

export default TodoFilters;
