import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/about',
//     element: <About />,
//   }
// ])

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
