import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Circle, Plus, Trash2, Star, Clock } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

const initialTasks: Task[] = [
  { id: 1, title: 'Review quarterly reports', completed: false, priority: 'high' },
  { id: 2, title: 'Update project documentation', completed: true, priority: 'medium' },
  { id: 3, title: 'Schedule team meeting', completed: false, priority: 'low' },
  { id: 4, title: 'Optimize database queries', completed: false, priority: 'high' },
  { id: 5, title: 'Design new landing page', completed: true, priority: 'medium' },
];

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTask, setNewTask] = useState('');

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now(),
        title: newTask,
        completed: false,
        priority: 'medium'
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getPriorityConfig = (priority: string) => {
    switch (priority) {
      case 'high': 
        return { 
          color: 'bg-gradient-to-r from-red-500 to-pink-600 text-white', 
          icon: Star,
          border: 'border-red-200 dark:border-red-800'
        };
      case 'medium': 
        return { 
          color: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white', 
          icon: Clock,
          border: 'border-yellow-200 dark:border-yellow-800'
        };
      case 'low': 
        return { 
          color: 'bg-gradient-to-r from-green-400 to-emerald-500 text-white', 
          icon: Circle,
          border: 'border-green-200 dark:border-green-800'
        };
      default: 
        return { 
          color: 'bg-gradient-to-r from-gray-400 to-gray-500 text-white', 
          icon: Circle,
          border: 'border-gray-200 dark:border-gray-800'
        };
    }
  };

  const completedTasks = tasks.filter(t => t.completed).length;
  const totalTasks = tasks.length;
  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <motion.div 
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Task Management
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {completedTasks} of {totalTasks} tasks completed
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {Math.round(progressPercentage)}%
          </span>
        </div>
      </div>
      
      <motion.div 
        className="flex space-x-2 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-3 border border-gray-200/50 dark:border-gray-600/50 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-200"
        />
        <motion.button
          onClick={addTask}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-4 py-3 border border-transparent text-sm font-medium rounded-xl shadow-lg text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
        >
          <Plus className="h-4 w-4" />
        </motion.button>
      </motion.div>

      <div className="space-y-3">
        <AnimatePresence>
          {tasks.map((task, index) => {
            const priorityConfig = getPriorityConfig(task.priority);
            const PriorityIcon = priorityConfig.icon;
            
            return (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.01, x: 5 }}
                className={`flex items-center space-x-3 p-4 rounded-xl border ${priorityConfig.border} bg-gradient-to-r from-white/50 to-gray-50/50 dark:from-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm hover:shadow-lg transition-all duration-200 group`}
              >
                <motion.button
                  onClick={() => toggleTask(task.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex-shrink-0 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {task.completed ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <Circle className="h-5 w-5" />
                  )}
                </motion.button>
                
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium transition-all duration-200 ${
                    task.completed 
                      ? 'line-through text-gray-500 dark:text-gray-400' 
                      : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'
                  }`}>
                    {task.title}
                  </p>
                </div>
                
                <motion.span 
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${priorityConfig.color} shadow-sm`}
                  whileHover={{ scale: 1.05 }}
                >
                  <PriorityIcon className="w-3 h-3 mr-1" />
                  {task.priority}
                </motion.span>
                
                <motion.button
                  onClick={() => deleteTask(task.id)}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex-shrink-0 text-red-500 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Trash2 className="h-4 w-4" />
                </motion.button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
      {tasks.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8 text-gray-500 dark:text-gray-400"
        >
          <Circle className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p>No tasks yet. Add one above to get started!</p>
        </motion.div>
      )}
    </motion.div>
  );
}