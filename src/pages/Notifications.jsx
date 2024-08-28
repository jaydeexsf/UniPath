import React, { useContext } from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineCalendar, AiOutlineFileText } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
import { ModeContext } from '../components/ModeContext';
import { Link } from 'react-router-dom';

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

  const {mode, toggleMode} = useContext(ModeContext);
// function back () {
//   window.location.href = 'home'
// }


  return (
    <div className="min-h-screen absolute top-0 left-0">
      <header className="bg-red-700 py-4 px-4 w-[100vw]">
        <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/home"><h1 className="text-xl font-bold">back</h1> </Link>
          <div className='flex items-center gap-3'>
              <button onClick={toggleMode}> 
                   <div className="dark-light hover:cursor-pointer w-8 h-8 flex justify-center items-center rounded-[50%] bg-gray-300">
                    <CiLight className={`${mode === 'dark' ? `block text-black` : `hidden`}`}/>
                    <MdDarkMode  className={`${mode === 'light' ? `block text-black` : `hidden text-black`}`}/>
                    </div>
              </button>
          <IoMdNotificationsOutline className='w-6 h-6 flex justify-center items-center rounded-[50%] text-black transition skew-y-0 skew-x-10' size={16} />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className=" rounded-lg shadow">
          {notifications.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {notifications.map(notification => (
                <li key={notification.id} className="p-4 hover:bg-red-600 flex items-center gap-4">
                  {notification.icon}
                  <div className="flex-grow">
                    <h2 className="text-sm font-semibold">{notification.title}</h2>
                    <p className="text-[11px] text-gray-600">{notification.message}</p>
                  </div>
                  <span className="text-[8px] text-gray-500">{notification.timestamp}</span>
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
