import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { StatsGrid } from './components/StatsGrid';
import { ChartSection } from './components/ChartSection';
import { ActivityFeed } from './components/ActivityFeed';
import { TaskList } from './components/TaskList';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header isDark={isDark} setIsDark={setIsDark} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back! Here's what's happening with your projects today.
          </p>
        </div>

        <StatsGrid />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <ChartSection />
          <ActivityFeed />
        </div>
        
        <div className="mt-8">
          <TaskList />
        </div>
      </main>
    </div>
  );
}

export default App;