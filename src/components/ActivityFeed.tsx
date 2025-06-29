import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, AlertCircle, User, Zap } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'completed',
    title: 'Project Alpha completed',
    description: 'Successfully delivered the new dashboard feature',
    time: '2 hours ago',
    icon: CheckCircle,
    iconColor: 'text-green-500',
    bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
  },
  {
    id: 2,
    type: 'warning',
    title: 'Server maintenance scheduled',
    description: 'Planned downtime for system updates',
    time: '4 hours ago',
    icon: AlertCircle,
    iconColor: 'text-yellow-500',
    bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
  },
  {
    id: 3,
    type: 'user',
    title: 'New team member joined',
    description: 'Sarah Johnson has been added to the development team',
    time: '6 hours ago',
    icon: User,
    iconColor: 'text-blue-500',
    bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
  },
  {
    id: 4,
    type: 'time',
    title: 'Weekly report generated',
    description: 'Performance metrics for the past week are now available',
    time: '1 day ago',
    icon: Clock,
    iconColor: 'text-purple-500',
    bgColor: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20',
  },
];

export function ActivityFeed() {
  return (
    <motion.div 
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Activity
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Latest updates and notifications
          </p>
        </div>
        <motion.div 
          className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <Zap className="h-5 w-5 text-white" />
        </motion.div>
      </div>
      
      <div className="flow-root">
        <ul className="-mb-8">
          {activities.map((activity, activityIdx) => (
            <motion.li 
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: activityIdx * 0.1 }}
            >
              <div className="relative pb-8">
                {activityIdx !== activities.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gradient-to-b from-gray-200 to-transparent dark:from-gray-700"
                    aria-hidden="true"
                  />
                ) : null}
                <motion.div 
                  className="relative flex space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div>
                    <motion.span 
                      className={`h-8 w-8 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-gray-800 ${activity.iconColor} bg-gradient-to-br ${activity.bgColor} shadow-lg`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <activity.icon className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  </div>
                  <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div>
                      <p className="text-sm text-gray-900 dark:text-white font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {activity.description}
                      </p>
                    </div>
                    <div className="text-right text-xs whitespace-nowrap text-gray-400 dark:text-gray-500 font-medium">
                      {activity.time}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
      
      <motion.button
        className="w-full mt-4 py-2 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        View All Activities
      </motion.button>
    </motion.div>
  );
}