import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Settings, LogOut, Edit, Camera, Mail, Phone, MapPin, Calendar } from 'lucide-react';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UserProfile({ isOpen, onClose }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    joinDate: 'January 2023',
    role: 'Product Manager'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would save the user info to your backend
    console.log('Saving user info:', userInfo);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    // Here you would implement logout logic
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl border-l border-white/20 dark:border-gray-700/50 z-50"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Profile
                </h2>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto">
                {/* Profile Picture */}
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {userInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute bottom-0 right-0 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg border border-gray-200 dark:border-gray-600"
                    >
                      <Camera className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </motion.button>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-3">
                    {userInfo.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">{userInfo.role}</p>
                </div>

                {/* Profile Information */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Personal Information
                    </h4>
                    <motion.button
                      onClick={() => setIsEditing(!isEditing)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-sm hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors"
                    >
                      <Edit className="h-3 w-3" />
                      <span>{isEditing ? 'Cancel' : 'Edit'}</span>
                    </motion.button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                        {isEditing ? (
                          <input
                            type="email"
                            value={userInfo.email}
                            onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                            className="w-full bg-transparent text-gray-900 dark:text-white focus:outline-none"
                          />
                        ) : (
                          <p className="text-gray-900 dark:text-white">{userInfo.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
                        {isEditing ? (
                          <input
                            type="tel"
                            value={userInfo.phone}
                            onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                            className="w-full bg-transparent text-gray-900 dark:text-white focus:outline-none"
                          />
                        ) : (
                          <p className="text-gray-900 dark:text-white">{userInfo.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                        {isEditing ? (
                          <input
                            type="text"
                            value={userInfo.location}
                            onChange={(e) => setUserInfo({...userInfo, location: e.target.value})}
                            className="w-full bg-transparent text-gray-900 dark:text-white focus:outline-none"
                          />
                        ) : (
                          <p className="text-gray-900 dark:text-white">{userInfo.location}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Member since</p>
                        <p className="text-gray-900 dark:text-white">{userInfo.joinDate}</p>
                      </div>
                    </div>
                  </div>

                  {isEditing && (
                    <motion.button
                      onClick={handleSave}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg"
                    >
                      Save Changes
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center space-x-3 p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Settings className="h-5 w-5" />
                  <span>Account Settings</span>
                </motion.button>
                <motion.button
                  onClick={handleLogout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center space-x-3 p-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}