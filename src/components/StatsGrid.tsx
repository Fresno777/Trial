import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Activity, ArrowUp } from 'lucide-react';

const stats = [
  {
    name: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    changeType: 'positive',
    icon: DollarSign,
    color: 'from-green-400 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
  },
  {
    name: 'Active Users',
    value: '2,350',
    change: '+180.1%',
    changeType: 'positive',
    icon: Users,
    color: 'from-blue-400 to-cyan-600',
    bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
  },
  {
    name: 'Conversion Rate',
    value: '12.5%',
    change: '+19%',
    changeType: 'positive',
    icon: TrendingUp,
    color: 'from-purple-400 to-indigo-600',
    bgColor: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20',
  },
  {
    name: 'Active Sessions',
    value: '573',
    change: '+201',
    changeType: 'positive',
    icon: Activity,
    color: 'from-orange-400 to-red-600',
    bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.02, 
            y: -5,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          className={`relative bg-gradient-to-br ${item.bgColor} backdrop-blur-sm border border-white/20 dark:border-gray-700/50 pt-6 px-6 pb-8 shadow-xl rounded-2xl overflow-hidden group cursor-pointer`}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-800/40 dark:to-gray-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <dt className="relative">
            <motion.div 
              className={`absolute bg-gradient-to-br ${item.color} rounded-xl p-3 shadow-lg`}
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </motion.div>
            <p className="ml-16 text-sm font-medium text-gray-600 dark:text-gray-300 truncate">
              {item.name}
            </p>
          </dt>
          <dd className="ml-16 pb-2 flex items-baseline">
            <motion.p 
              className="text-2xl font-bold text-gray-900 dark:text-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10, delay: index * 0.1 + 0.2 }}
            >
              {item.value}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={`ml-2 flex items-center text-sm font-semibold ${
                item.changeType === 'positive'
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              {item.change}
            </motion.div>
          </dd>
          
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        </motion.div>
      ))}
    </div>
  );
}