import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Download, RefreshCw, Filter } from 'lucide-react';

export function ChartSection() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('6months');
  
  const data = [
    { month: 'Jan', value: 65, color: 'from-blue-400 to-blue-600' },
    { month: 'Feb', value: 78, color: 'from-indigo-400 to-indigo-600' },
    { month: 'Mar', value: 52, color: 'from-purple-400 to-purple-600' },
    { month: 'Apr', value: 82, color: 'from-pink-400 to-pink-600' },
    { month: 'May', value: 95, color: 'from-red-400 to-red-600' },
    { month: 'Jun', value: 87, color: 'from-orange-400 to-orange-600' },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
    console.log('Chart data refreshed');
  };

  const handleDownload = () => {
    console.log('Downloading chart data...');
    // Here you would implement actual download functionality
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Month,Performance\n"
      + data.map(item => `${item.month},${item.value}%`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "performance_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    console.log('Period changed to:', period);
    // Here you would fetch new data based on the selected period
  };

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
        <div className="flex items-center space-x-2">
          <motion.button
            onClick={handleRefresh}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isRefreshing}
            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`h-4 w-4 text-gray-600 dark:text-gray-300 ${isRefreshing ? 'animate-spin' : ''}`} />
          </motion.button>
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Download className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </motion.button>
          <div className="flex items-center text-green-600 dark:text-green-400">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">+12.5%</span>
          </div>
        </div>
      </div>

      {/* Period Selector */}
      <div className="flex space-x-2 mb-6">
        {['3months', '6months', '1year'].map((period) => (
          <motion.button
            key={period}
            onClick={() => handlePeriodChange(period)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              selectedPeriod === period
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {period === '3months' ? '3M' : period === '6months' ? '6M' : '1Y'}
          </motion.button>
        ))}
      </div>
      
      <div className="space-y-4">
        {data.map((item, index) => (
          <motion.div 
            key={item.month} 
            className="flex items-center group cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ x: 5 }}
            onClick={() => console.log(`Clicked on ${item.month}: ${item.value}%`)}
          >
            <div className="w-12 text-sm font-medium text-gray-600 dark:text-gray-300">
              {item.month}
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className={`bg-gradient-to-r ${item.color} h-3 rounded-full shadow-sm group-hover:shadow-md transition-shadow`}
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.value / maxValue) * 100}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                />
              </div>
            </div>
            <motion.div 
              className="w-12 text-sm font-semibold text-gray-900 dark:text-white text-right group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
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
        className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => console.log('Viewing detailed analytics for May')}
      >
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Best Month:</strong> May with 95% performance
        </p>
        <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">
          Click to view detailed analytics →
        </p>
      </motion.div>
    </motion.div>
  );
}