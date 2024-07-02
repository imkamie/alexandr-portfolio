import './App.css'
import { useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import ScrollToAnchor from './hooks/useScrollToAnchor'
import { ThemeContext } from './hooks/useThemeContext'
import About from './pages/About/About'
import Home from './pages/Home/Home'

function App() {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.className = theme === 'light' ? 'light' : 'dark'
    }
  }, [theme])

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <ScrollToAnchor />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
