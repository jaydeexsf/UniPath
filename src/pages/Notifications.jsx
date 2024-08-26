import React from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineCalendar, AiOutlineFileText } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";

// Sample notification data
const notifications = [
  {
    id: 1,
    title: 'University Application Deadline Approaching',
    message: 'The deadline to apply for the University of Cape Town is 30th September 2024.',
    timestamp: '2 days ago',
    icon: <AiOutlineCalendar size={24} className="text-blue-600" />,
  },
  {
    id: 2,
    title: 'New Bursary Opportunity',
    message: 'Apply for the NSFAS bursary now! Applications are open until 31st October 2024.',
    timestamp: '1 week ago',
    icon: <FaMoneyCheckAlt size={24} className="text-green-600" />,
  },
  {
    id: 3,
    title: 'Application Received',
    message: 'Your application to Stellenbosch University has been successfully submitted.',
    timestamp: '5 hours ago',
    icon: <AiOutlineFileText size={24} className="text-yellow-600" />,
  },
  // Add more notifications as needed
];

const NotificationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Student Notifications</h1>
          <IoMdNotificationsOutline size={28} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-lg">
          {notifications.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {notifications.map(notification => (
                <li key={notification.id} className="p-4 hover:bg-gray-50 flex items-center gap-4">
                  {notification.icon}
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{notification.title}</h2>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                  </div>
                  <span className="text-sm text-gray-500">{notification.timestamp}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-4 text-center text-gray-600">No notifications available.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default NotificationPage;
