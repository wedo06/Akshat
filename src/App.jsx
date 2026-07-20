import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import About from './pages/About'
import FullStack from './pages/FullStack'
import Data from './pages/Data'
import Design from './pages/Design'
import WeDo from './pages/WeDo'
import Contact from './pages/Contact'
import './index.css'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/data" element={<Data />} />
        <Route path="/design" element={<Design />} />
        <Route path="/wedo" element={<WeDo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
