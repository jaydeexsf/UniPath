import { BrowserRouter as Router, Routes ,Route  } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Resources from './pages/Resources';
import Header from './components/Header'
import { ModeContext } from './components/ModeContext';
import { useContext } from 'react';

function App() {

  const {mode} = useContext(ModeContext);

  return (
    <Router >
      <div  className={`${mode === 'dark' ? `bg-[#181818] text-white` : `bg-gray-200 text-black`} text-[11px] py-4 px-3 h-[100vh]`}>
        <Header />
        <main className="r">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="ht" element={<Resources />}/>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
