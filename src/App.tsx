import { useContext } from 'react'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeContext } from './components/ThemeContext'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
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
