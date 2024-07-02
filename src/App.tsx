import { useContext, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import ScrollToAnchor from './components/useScrollToAnchor'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeContext } from './components/ThemeContext'

function App() {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.className = theme === 'light' ? 'light' : 'dark';
    }
  }, [theme]);


  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <ScrollToAnchor />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
