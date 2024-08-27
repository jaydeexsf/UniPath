import { BrowserRouter as Router, Routes ,Route, useLocation  } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Resources from './pages/Resources';
import Header from './components/Header'
import { ModeContext } from './components/ModeContext';
import { useContext } from 'react';
import NotificationPage from './pages/Notifications';
import Navigator from './pages/Navigator';

function App() {

  const {mode} = useContext(ModeContext);

  //  const location = window.href.location.split('/').pop();
  // const shouldShowHeader = location.pathname !== '/notifications';

  return (
    <Router >
      <div  className={`${mode === 'dark' ? `bg-[#181818] text-white` : `bg-gray-50 text-black`} text-[11px] py-4 px-3 h-[100vh]`}>
       <Header />
        <main className="r">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="ht" element={<Resources />}/>
            <Route path='/notifications' element={<NotificationPage />}/>
          </Routes>
        </main>
        <Navigator />
      </div>
    </Router>
  )
}

export default App
