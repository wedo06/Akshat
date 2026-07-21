import { useEffect } from 'react'
import SEO from '../components/SEO'
import './Resume.css'

export default function Resume() {
  // Simple intersection observer for reveal animations
  useEffect(() => {
    const els = document.querySelectorAll('.rs-reveal')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('vis')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="page resume-page">
      <SEO 
        title="Resumes" 
        description="Download Akshat Agrawal's professional resumes for Software Engineering and Data Intelligence."
      />
      
      <div className="rs-marquee-bg">
        SOFTWARE ENGINEERING / DATA INTELLIGENCE / SYSTEMS ARCHITECTURE / UI/UX DESIGN / FULL-STACK DEVELOPMENT /
      </div>

      <div className="rs-container">
        <h1 className="rs-title rs-reveal">CHOOSE YOUR <br/> PORTFOLIO</h1>
        <p className="rs-subtitle rs-reveal">Select the profile that best fits.</p>

        <div className="rs-grid">
          
          <a href="/Full-Stack_Portfolio.pdf" target="_blank" rel="noopener noreferrer" className="rs-card rs-reveal">
            <div className="rs-card-content">
              <div className="rs-icon-wrapper">
                <span className="rs-icon">F</span>
              </div>
              <h2>Software Developer</h2>
              <p>Full-stack development, robust systems architecture, and modern UI/UX execution.</p>
              <div className="rs-btn">View Resume ↗</div>
            </div>
          </a>

          <a href="/Data-Analytics_Portfolio.pdf" target="_blank" rel="noopener noreferrer" className="rs-card rs-reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="rs-card-content">
              <div className="rs-icon-wrapper">
                <span className="rs-icon">D</span>
              </div>
              <h2>Data Analyst</h2>
              <p>Advanced analytics, Tableau dashboarding, Python automation, and market strategy.</p>
              <div className="rs-btn">View Resume ↗</div>
            </div>
          </a>

        </div>
      </div>
    </div>
  )
}
