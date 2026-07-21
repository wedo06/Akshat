import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import './index.css'

// Lazy loaded routes for maximum performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const FullStack = lazy(() => import('./pages/FullStack'))
const Data = lazy(() => import('./pages/Data'))
const Design = lazy(() => import('./pages/Design'))
const WeDo = lazy(() => import('./pages/WeDo'))
const Contact = lazy(() => import('./pages/Contact'))
const Resume = lazy(() => import('./pages/Resume'))

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Minimal fallback while route chunks load
const PageLoader = () => (
  <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAFAFA' }}>
    <div style={{ width: '40px', height: '40px', border: '3px solid rgba(0,0,0,0.1)', borderTop: '3px solid #111', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
)

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/data" element={<Data />} />
          <Route path="/design" element={<Design />} />
          <Route path="/wedo" element={<WeDo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
