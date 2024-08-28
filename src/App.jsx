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

function App() {

  const {mode, ddd} = useContext(ModeContext);

  // localStorage.setItem('mmd', mode);
//   const dddd = localStorage.getItem('mmd')
// console.log(dddd)
  //  const location = window.href.location.split('/').pop();
  // const shouldShowHeader = location.pathname !== '/notifications';

  return (
    <div className="bf h-[100vh]">
    <Router >
      <div  className={`${mode === 'dark' ? `bg-[#050413] text-white` : `bg-gray-50 text-black`} transition-all duration-1000 text-[11px] py-4 px-3 h-[100%]`}>
       <Header />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="ht" element={<Resources />}/>
            <Route path="/applications" element={<Applications />}/>
            <Route path="/news" element={<News />}/>
            <Route path="/courses" element={<Courses />}/>
            <Route path="/notifications" element={<NotificationPage />}/>
          </Routes>
        </main>
      </div>
      <Navigator />
    </Router>
    </div>
  )
}

export default App
