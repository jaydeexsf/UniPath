import { BrowserRouter as Router, Routes ,Route  } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Resources from './pages/Resources';
import Header from './components/Header'

function App() {

  return (
    <Router >
      <div className="py-4 px-2">
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
