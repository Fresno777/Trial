import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Bell, Search, User, Sparkles } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  onSearchClick: () => void;
  onNotificationClick: () => void;
  onProfileClick: () => void;
  unreadCount: number;
}

export function Header({ isDark, setIsDark, onSearchClick, onNotificationClick, onProfileClick, unreadCount }: HeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-gray-700/50 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => window.location.reload()}
          >
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Trial Dashboard
              </h1>
            </div>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <motion.button
                onClick={onSearchClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative flex items-center space-x-2 px-4 py-2 border border-gray-200/50 dark:border-gray-600/50 rounded-xl leading-5 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
              >
                <Search className="h-5 w-5" />
                <span className="text-sm">Search...</span>
                <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-600 rounded">
                  ⌘K
                </kbd>
              </motion.button>

              <motion.button 
                onClick={onNotificationClick}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 rounded-xl text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 backdrop-blur-sm"
              >
                <Bell className="h-6 w-6" />
                {unreadCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium"
                  >
                    {unreadCount}
                  </motion.span>
                )}
              </motion.button>

              <motion.button
                onClick={() => setIsDark(!isDark)}
                whileHover={{ scale: 1.1, rotate: isDark ? 180 : -180 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 backdrop-blur-sm"
              >
                {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </motion.button>

              <motion.button 
                onClick={onProfileClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 backdrop-blur-sm"
              >
                <User className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}