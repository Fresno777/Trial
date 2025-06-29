import React from 'react';
import { Clock, CheckCircle, AlertCircle, User } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'completed',
    title: 'Project Alpha completed',
    description: 'Successfully delivered the new dashboard feature',
    time: '2 hours ago',
    icon: CheckCircle,
    iconColor: 'text-green-500',
  },
  {
    id: 2,
    type: 'warning',
    title: 'Server maintenance scheduled',
    description: 'Planned downtime for system updates',
    time: '4 hours ago',
    icon: AlertCircle,
    iconColor: 'text-yellow-500',
  },
  {
    id: 3,
    type: 'user',
    title: 'New team member joined',
    description: 'Sarah Johnson has been added to the development team',
    time: '6 hours ago',
    icon: User,
    iconColor: 'text-blue-500',
  },
  {
    id: 4,
    type: 'time',
    title: 'Weekly report generated',
    description: 'Performance metrics for the past week are now available',
    time: '1 day ago',
    icon: Clock,
    iconColor: 'text-gray-500',
  },
];

export function ActivityFeed() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
        Recent Activity
      </h3>
      
      <div className="flow-root">
        <ul className="-mb-8">
          {activities.map((activity, activityIdx) => (
            <li key={activity.id}>
              <div className="relative pb-8">
                {activityIdx !== activities.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-800 ${activity.iconColor}`}>
                      <activity.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div>
                      <p className="text-sm text-gray-900 dark:text-white font-medium">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {activity.description}
                      </p>
                    </div>
                    <div className="text-right text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                      {activity.time}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}