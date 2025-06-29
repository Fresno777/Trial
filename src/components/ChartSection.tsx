import React from 'react';
import { BarChart3 } from 'lucide-react';

export function ChartSection() {
  const data = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 78 },
    { month: 'Mar', value: 52 },
    { month: 'Apr', value: 82 },
    { month: 'May', value: 95 },
    { month: 'Jun', value: 87 },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Monthly Performance
        </h3>
        <BarChart3 className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.month} className="flex items-center">
            <div className="w-12 text-sm text-gray-500 dark:text-gray-400">
              {item.month}
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                />
              </div>
            </div>
            <div className="w-12 text-sm text-gray-900 dark:text-white text-right">
              {item.value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}