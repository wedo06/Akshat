import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Me' },
  { to: '/design', label: 'Designer' },
  { to: '/fullstack', label: 'Engineer' },
  { to: '/data', label: 'Data Analyst' },
  { to: '/wedo', label: 'WEDO' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <nav className={`modern-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">

          <NavLink to="/" className="nav-brand">
            <div className="brand-dot" />
            <span>Akshat Agrawal</span>
          </NavLink>

          <div className="nav-links-desktop">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/resume" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} style={{display: 'flex', alignItems: 'center', gap: '4px', opacity: 0.8}}>
              Resume <span style={{fontSize: '0.8rem'}}>↗</span>
            </NavLink>
          </div>

          <div className="nav-right">
            <NavLink to="/contact" className="nav-cta">Let's Talk</NavLink>
            <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>

        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {links.map((l, i) => (
            <NavLink key={l.to} to={l.to} style={{ animationDelay: `${i * 0.1}s` }}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/resume" onClick={() => setMenuOpen(false)} style={{ animationDelay: `${links.length * 0.1}s`, fontSize: '1.2rem', color: '#888' }}>
            Resume Options ↗
          </NavLink>
          <NavLink to="/contact" className="mob-cta" style={{ animationDelay: `${(links.length + 1) * 0.1}s` }}>
            Let's Connect
          </NavLink>
        </div>
      </div>
    </>
  )
}
