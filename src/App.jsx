import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Header from './components/Header';
import { ModeContext } from './components/ModeContext';
import { useContext, useEffect, useState } from 'react';
import NotificationPage from './pages/Notifications';
import Navigator from './pages/Navigator';
import Courses from './pages/Courses';
import News from './pages/News';
import Applications from './pages/Applications';
import LandingPage from './pages/landingpage';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react';

import CalculateAPS from './components/CalculateAPS';
import ApplyUniversity from './components/ApplyUniversity';
import ApplyCollege from './components/ApplyCollege';
import ApplyBursaries from './components/ApplyBursaries';
import FilterAndSort from './components/FilterAndSort';
// import { Loader } from './pages/Loader';
import NotFound from './pages/NotFound';
import LoadingPage from './pages/Loader';

function App() {
  const { mode } = useContext(ModeContext);
  const [load, setLoad]= useState(true)
  const { user, isLoaded, isLoading  } = useUser();


  useEffect(() => {
    if (isLoaded && !isLoading) {
      setLoad(false)
    }
  }, [isLoaded ]);

  if (load) {
  return <LoadingPage />
  }

  return (
    <div className="bf h-[100vh]">
      <Router>
        <SignedIn>
          <div
            className={`${mode === 'dark' ? `bg-slate-950 text-white` : `bg-gray-50 text-black`} transition-all duration-1000 text-[11px] py-0 px-0 h-fit-content`}
          >
            <Header />
            <main className="pb-16 pt-12 px-0">
              <Routes>
                {/* Home Routes */}
                <Route path="/UniPath" element={<Home />} />
                <Route path="/UniPath/UniPath" element={<Home />} />

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

                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
          <Navigator />
        </SignedIn>
        
        <SignedOut>
          <Routes>
            <Route path="/UniPath" element={<LandingPage />} />
          </Routes>
        </SignedOut>
      </Router>
    </div>
  );
}

export default App;

