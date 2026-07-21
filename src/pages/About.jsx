import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './About.css'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-l, .reveal-r, .ab-bento-card')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function About() {
  useReveal()

  return (
    <div className="page about-page-split">
      <SEO 
        title="About Me" 
        description="Learn more about Akshat Agrawal — Founder of WeDo Agency, Full-Stack Engineer & Data Analyst. Experience, skills, and background."
      />

      <section className="split-hero">
        
        {/* Left Side: Designer */}
        <div className="split-side split-left">
          <div className="split-content">
            <h1 className="split-title">designer</h1>
            <p className="split-desc">
              UI/UX Designer with a passion for designing beautiful and functional user experiences.
            </p>
          </div>
        </div>

        {/* Right Side: Coder */}
        <div className="split-side split-right">
          <div className="split-content">
            <h1 className="split-title">&lt;coder&gt;</h1>
            <p className="split-desc">
              Front End Developer who focuses on writing clean, elegant and efficient code.
            </p>
          </div>
          <div className="code-overlay">
            &lt;html&gt;<br/>
            height:184px;&#125;<br/>
            class="jedi"&gt;<br/>
            <span className="big-code">CSS3 HTML5</span><br/>
            color:#000;<br/>
            jQuery
          </div>
        </div>

        {/* Center Split Image Container */}
        <div className="split-image-container">
          {/* Left Art Image */}
          <div className="img-half img-left">
            <img src="/binary_art_nobg.webp" alt="Designer Art" />
          </div>
          
          {/* Right Normal Image (Using same image but grayscale and desaturated to mimic clean code side) */}
          <div className="img-half img-right">
            <img src="/binary_art_nobg.webp" alt="Coder Photo" style={{ filter: 'grayscale(1) brightness(1.2)' }} />
          </div>
        </div>

      </section>

      {/* ── CREATIVE STORY SECTION ── */}
      <section className="creative-story">
        <div className="cs-container">
          <h2 className="cs-title">MY JOURNEY</h2>
          <div className="cs-grid">
            <div className="cs-card reveal-up">
              <span className="cs-year">01 / BEGINNINGS</span>
              <h3>Curiosity Ignited</h3>
              <p>It started with breaking things just to see how they worked. That curiosity quickly evolved into an obsession with digital craftsmanship.</p>
            </div>
            <div className="cs-card reveal-up" style={{ transitionDelay: '0.1s' }}>
              <span className="cs-year">02 / EVOLUTION</span>
              <h3>The Full Stack Mindset</h3>
              <p>I realized knowing how to code wasn't enough. To build exceptional products, you must understand the user, the design, and the data driving it.</p>
            </div>
            <div className="cs-card reveal-up" style={{ transitionDelay: '0.2s' }}>
              <span className="cs-year">03 / TODAY</span>
              <h3>Architecting Ecosystems</h3>
              <p>I blend data analytics, backend architecture, and obsessive visual design to bridge the gap between imagination and flawless execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MASSIVE BENTO BOX ── */}
      <section className="ab-bento-grid">

        {/* Profile Card */}
        <div className="ab-bento-card ab-card-profile" style={{ transitionDelay: '0s' }}>
          <div className="ab-profile-img">
            <img src="/binary_art_nobg.webp" alt="Akshat Agrawal" loading="lazy" decoding="async" width="120" height="120" />
          </div>
          <div className="ab-profile-info">
            <h2>Akshat Agrawal</h2>
            <p>Founder @ WeDo Agency</p>
          </div>
        </div>

        {/* Skills Card */}
        <div className="ab-bento-card ab-card-skills" style={{ transitionDelay: '0.1s' }}>
          <span className="ab-bento-tag">Toolkit</span>
          <div className="ab-skills-list">
            {['React', 'Next.js', 'Python', 'SQL', 'Figma', 'Tableau', 'Node.js', 'TypeScript'].map(s => (
              <span key={s} className="ab-skill-pill">{s}</span>
            ))}
          </div>
        </div>

        {/* Experience Card */}
        <div className="ab-bento-card ab-card-exp" style={{ transitionDelay: '0.2s' }}>
          <span className="ab-bento-tag">Journey</span>
          <div className="ab-exp-item">
            <span className="ab-year">2024 - Present</span>
            <h3>Founder & Developer</h3>
            <p>WeDo Agency</p>
          </div>
          <div className="ab-exp-item">
            <span className="ab-year">2023 - 2024</span>
            <h3>Full Stack Engineer</h3>
            <p>Freelance & Open Source</p>
          </div>
        </div>

        {/* Stats Card */}
        <div className="ab-bento-card ab-card-stats" style={{ transitionDelay: '0.3s' }}>
          <div className="ab-stat">
            <span className="ab-stat-n">12+</span>
            <span className="ab-stat-l">Products Shipped</span>
          </div>
          <div className="ab-stat">
            <span className="ab-stat-n">3</span>
            <span className="ab-stat-l">Core Disciplines</span>
          </div>
        </div>

        {/* CTA Card */}
        <Link to="/contact" className="ab-bento-card ab-card-cta" style={{ transitionDelay: '0.4s' }}>
          <h2>Ready to Build?</h2>
          <div className="ab-cta-circle">↗</div>
        </Link>

      </section>

      <footer className="site-footer split-footer">
        <p>© 2025 Akshat Agrawal — Built with obsession.</p>
        <Link to="/wedo" className="footer-wedo-link">WeDo Agency ↗</Link>
        <div className="footer-soc">
          <a href="https://www.linkedin.com/in/akshat-agrawal-955347316/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://github.com/Akshuu1" target="_blank" rel="noopener">GitHub</a>
          <a href="mailto:akshata.14feb@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  )
}
