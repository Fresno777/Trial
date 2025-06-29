import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp } from 'lucide-react';

export function ChartSection() {
  const data = [
    { month: 'Jan', value: 65, color: 'from-blue-400 to-blue-600' },
    { month: 'Feb', value: 78, color: 'from-indigo-400 to-indigo-600' },
    { month: 'Mar', value: 52, color: 'from-purple-400 to-purple-600' },
    { month: 'Apr', value: 82, color: 'from-pink-400 to-pink-600' },
    { month: 'May', value: 95, color: 'from-red-400 to-red-600' },
    { month: 'Jun', value: 87, color: 'from-orange-400 to-orange-600' },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <motion.div 
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Monthly Performance
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Revenue growth over time
          </p>
        </div>
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
            <BarChart3 className="h-5 w-5 text-white" />
          </div>
          <div className="flex items-center text-green-600 dark:text-green-400">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">+12.5%</span>
          </div>
        </motion.div>
      </div>
      
      <div className="space-y-4">
        {data.map((item, index) => (
          <motion.div 
            key={item.month} 
            className="flex items-center group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-12 text-sm font-medium text-gray-600 dark:text-gray-300">
              {item.month}
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className={`bg-gradient-to-r ${item.color} h-3 rounded-full shadow-sm`}
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.value / maxValue) * 100}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                />
              </div>
            </div>
            <motion.div 
              className="w-12 text-sm font-semibold text-gray-900 dark:text-white text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 1 }}
            >
              {item.value}%
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Best Month:</strong> May with 95% performance
        </p>
      </motion.div>
    </motion.div>
  );
}