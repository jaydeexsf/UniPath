import { BrowserRouter as Router, Routes ,Route  } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Resources from './pages/Resources';
import Header from './components/Header'
import { ModeContext } from './components/ModeContext';
import { useContext } from 'react';
import NotificationPage from './pages/Notifications';
import Navigator from './pages/Navigator';
import Courses from './pages/Courses';
import News from './pages/News';
import Applications from './pages/Applications';
import LandingPage from './pages/landingpage';
import { useUser, SignedOut } from '@clerk/clerk-react';

import CalculateAPS from './components/CalculateAPS';
import ApplyUniversity from './components/ApplyUniversity';
import ApplyCollege from './components/ApplyCollege';
import ApplyBursaries from './components/ApplyBursaries';
import FilterAndSort from './components/FilterAndSort';

function App() {

  const {mode, ddd} = useContext(ModeContext);
  const user = useUser();

  // localStorage.setItem('mmd', mode);
//   const dddd = localStorage.getItem('mmd')
// console.log(dddd)
  //  const location = window.href.location.split('/').pop();
  // const shouldShowHeader = location.pathname !== '/notifications';
  // i use this color before i might return to it [bg-[#050413]]

  console.log(user)

  return (
    user.isSignedIn ? 
    <div className="bf h-[100vh]">
    <Router >
      <div  className={`${mode === 'dark' ? `bg-slate-950 text-white` : `bg-gray-50 text-black`} transition-all duration-1000 text-[11px] py-0 px-0 h-fit-content`}>
        <Header />
        <main className="pb-16 pt-12 px-0">
          <Routes>
             {/* Home Routes */}
            <Route path="/UniPath" element={<Home />} />
            <Route path="/UniPath/home" element={<Home />} />

            {/* Main Feature Routes */}
            <Route path="/UniPath/resources" element={<Resources />} />
            <Route path="/UniPath/applications" element={<Applications />} />
            <Route path="/UniPath/news" element={<News />} />
            <Route path="/UniPath/courses" element={<Courses />} />
            <Route path="/UniPath/notifications" element={<NotificationPage />} />

            {/* Application Navigation */}
            <Route path="/UniPath/calculate-aps" element={<CalculateAPS />} />
            <Route path="/UniPath/apply-university" element={<ApplyUniversity />} />
            <Route path="/UniPath/apply-college" element={<ApplyCollege />} />
            <Route path="/UniPath/apply-bursaries" element={<ApplyBursaries />} />
            <Route path="/UniPath/filter-sort" element={<FilterAndSort />} />

            {/* if the user goes the other routes that are not defined */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
      </div>
      <Navigator />
    </Router>
    </div> : 
    
    <div>
      <Router>
        <Routes>
          {/* <Route path='/' element={<LandingPage />}/> */}
          <Route path='/UniPath' element={<LandingPage />}/>
        </Routes>
      </Router>
    </div>
  ) 
} 

export default App
