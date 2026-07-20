import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './FullStack.css'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.fs-reveal')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { 
        if (e.isIntersecting) { 
          e.target.classList.add('vis'); 
          obs.unobserve(e.target) 
        } 
      })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

const projects = [
  {
    title: 'WeDo Agency',
    desc: 'Founded and designed the WeDo agency website. Showcases services, portfolio, and brand identity. Focused on performance, aesthetics, and conversions.',
    stack: ['React', 'Next.js', 'Framer Motion'],
    year: '2026',
    link: 'https://teamwedo.vercel.app/'
  },
  {
    title: 'Margify',
    desc: 'Multimodal travel planning system integrating Google Places API and interactive maps for intelligent route visualization.',
    stack: ['React', 'Express', 'MongoDB', 'GSAP'],
    year: '2025',
    link: 'https://margify-ten.vercel.app/'
  },
  {
    title: 'Stylee',
    desc: 'Full-stack fashion platform with animated frontend and MongoDB backend. Features role-based auth and CRUD operations.',
    stack: ['React', 'Node.js', 'Tailwind', 'Framer Motion'],
    year: '2025',
    link: 'https://stylee-gamma.vercel.app/'
  },
]

export default function FullStack() {
  useReveal()

  return (
    <div className="page fs-brutal-page">
      
      {/* ── HERO SECTION ── */}
      <section className="fs-hero-poster">
        
        <h1 className="fs-hero-title">
          <span>SOFTWARE</span>
          <span>ENGINEER</span>
        </h1>

        {/* Abstract Tech Graphic (Line art) */}
        <div className="fs-hero-graphic">
          <svg viewBox="0 0 800 400" className="fs-line-art" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round">
             <path d="M 50,300 C 150,300 100,100 250,150 C 400,200 300,350 450,300 C 600,250 550,50 750,100" />
             <circle cx="250" cy="150" r="10" />
             <circle cx="450" cy="300" r="10" />
             <path d="M 150,300 L 250,150 L 350,350 L 450,300 L 550,50" strokeDasharray="5,5" strokeOpacity="0.5" />
          </svg>
        </div>

        {/* Floating Actions */}
        

        {/* Slanted Image Reveal at bottom */}
        <div className="fs-hero-slant">
          <img src="/binary_art.png" alt="Engineering code" className="fs-slant-img" />
        </div>

      </section>

      {/* ── TICKER TAPE (Adds completeness and motion) ── */}
      

      {/* ── STATS / BRUTALIST METRICS ── */}
      <section className="fs-stats-section fs-reveal">
        <div className="fs-stat-box">
          <h2>10K+</h2>
          <p>LINES SHIPPED</p>
        </div>
        <div className="fs-stat-box">
          <h2>3+</h2>
          <p>FULL-STACK APPS</p>
        </div>
        <div className="fs-stat-box">
          <h2>∞</h2>
          <p>COFFEE CUPS</p>
        </div>
      </section>

      {/* ── PROJECTS SECTION ── */}
      <section id="projects" className="fs-projects-section">
        <h2 className="fs-section-title fs-reveal">SELECTED <br/> WORKS</h2>
        
        <div className="fs-project-list">
          {projects.map((p, i) => (
            <div key={i} className="fs-project-row fs-reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="fs-pr-year">{p.year}</div>
              <div className="fs-pr-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
              <div className="fs-pr-stack">
                {p.stack.map(s => <span key={s}>{s}</span>)}
              </div>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="fs-pr-arrow">↗</a>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS GRID (Thick borders, brutalist layout) ── */}
      <section className="fs-skills-section fs-reveal">
        <div className="fs-skills-grid">
          <div className="fs-skill-cell">
            <h3>FRONTEND</h3>
            <p>React<br/>JavaScript<br/>Tailwind CSS<br/>Framer Motion<br/>HTML / CSS</p>
          </div>
          <div className="fs-skill-cell">
            <h3>BACKEND</h3>
            <p>Node.js<br/>Express JS<br/>Prisma ORM</p>
          </div>
          <div className="fs-skill-cell">
            <h3>DATA & LOGIC</h3>
            <p>Python<br/>Pandas<br/>SQL</p>
          </div>
          <div className="fs-skill-cell">
            <h3>ARCHITECTURE</h3>
            <p>System Design</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="fs-brutal-footer">
        <div className="fs-footer-col">
          <h2>AKSHAT</h2>
          <p>© 2025 ALL RIGHTS RESERVED.</p>
        </div>
        <div className="fs-footer-col fs-right">
          <a href="https://github.com/Akshuu1" target="_blank" rel="noopener">GITHUB</a>
          <a href="https://www.linkedin.com/in/akshat-agrawal-955347316/" target="_blank" rel="noopener">LINKEDIN</a>
          <Link to="/contact">CONTACT</Link>
        </div>
      </footer>

    </div>
  )
}
