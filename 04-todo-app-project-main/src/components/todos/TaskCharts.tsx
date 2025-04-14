'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
  PieChart,
  Pie,
} from 'recharts';
import { useTodos } from '@/hooks/useTodos';

const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#601EF9', '#9ACD32']; // Green for Completed, Yellow for In Progress, Orange for Pending

export const TaskCharts = () => {
  const { tasks } = useTodos();

  const priorityData = [
    { name: 'High', value: tasks.filter((t) => t.priority === 'high').length },
    {
      name: 'Medium',
      value: tasks.filter((t) => t.priority === 'medium').length,
    },
    { name: 'Low', value: tasks.filter((t) => t.priority === 'low').length },
  ];

  const statusData = [
    {
      name: 'Pending',
      value: tasks.filter((t) => t.status === 'pending').length,
    },
    {
      name: 'In Progress',
      value: tasks.filter((t) => t.status === 'in-progress').length,
    },
    {
      name: 'Completed',
      value: tasks.filter((t) => t.status === 'completed').length,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Task Insights</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Status Chart - Bar Chart */}
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl p-4 shadow-lg dark:bg-blue-800">
          <h4 className="text-lg font-medium text-white mb-4">Tasks by Status</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={statusData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value">
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Priority Chart - Pie Chart */}
        <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-xl p-4 shadow-lg dark:bg-green-800">
          <h4 className="text-lg font-medium text-white mb-4">Tasks by Priority</h4>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={priorityData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
              >
                {priorityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TaskCharts;
