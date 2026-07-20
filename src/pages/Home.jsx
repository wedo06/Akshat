import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-l, .reveal-r, .reveal-scale')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function Home() {
  useReveal()

  return (
    <div className="page home-page-trending">

      {/* ── RED BINARY ART HERO ── */}
      <section className="ht-hero">

        {/* The user's 101010 Binary Art image */}
        <div className="ht-binary-art">
          <img src="/binary_art_nobg.png" alt="Akshat " />
        </div>

        {/* Insane Typography Overlays */}
        <h1 className="ht-hero-title">
          <span>AKSHAT</span>
          <br />
          <span className="ht-stroke">AGRAWAL</span>
        </h1>

        <div className="ht-hero-bottom">
          <p className="ht-bio">
            AKSHAT AGRAWAL. <br />
            Blending logical precision (1010) with boundary-pushing design.
          </p>
          <div className="ht-scroll-indicator">
            <span>SCROLL</span>
            <div className="ht-line"></div>
          </div>
        </div>
      </section>



      {/* ── PREMIUM MINIMAL ECOSYSTEM GRID ── */}
      <section className="ht-bento-section">
        <div className="reveal" style={{ marginBottom: '60px' }}>
          <h2 className="ht-sec-h">THE ECOSYSTEM</h2>
          <p className="ht-sec-sub">Four domains, one massive vision.</p>
        </div>

        <div className="ht-bento-grid">

          {/* Bento Item: Engineering */}
          <Link to="/fullstack" className="premium-card premium-large reveal-scale">
            <div className="premium-card-inner">
              <span className="premium-tag">01 / Engineering</span>
              <h3 className="premium-title">Building scalable architectures.</h3>
              <div className="premium-arrow">↗</div>
            </div>
          </Link>

          {/* Bento Item: Data */}
          <Link to="/data" className="premium-card premium-tall reveal-scale" style={{ transitionDelay: '0.1s' }}>
            <div className="premium-card-inner">
              <span className="premium-tag">02 / Data</span>
              <h3 className="premium-title">Turning noise into narrative.</h3>
              <div className="premium-arrow">↗</div>
            </div>
          </Link>

          {/* Bento Item: Design */}
          <Link to="/design" className="premium-card premium-wide reveal-scale" style={{ transitionDelay: '0.2s' }}>
            <div className="premium-card-inner">
              <span className="premium-tag">03 / Design</span>
              <h3 className="premium-title">Visuals that stop the scroll.</h3>
              <div className="premium-arrow">↗</div>
            </div>
          </Link>

          {/* Bento Item: WeDo */}
          <Link to="/wedo" className="premium-card premium-small reveal-scale" style={{ transitionDelay: '0.3s' }}>
            <div className="premium-card-inner">
              <span className="premium-tag">04 / Agency</span>
              <h3 className="premium-title" style={{ fontSize: '2.5rem', color: '#111' }}>WeDo</h3>
              <div className="premium-arrow">↗</div>
            </div>
          </Link>

        </div>
      </section>

      {/* ── GIANT CTA ── */}
      <section className="ht-cta-section reveal">
        <h2 className="ht-giant-cta">LET'S<br/>BUILD</h2>
        <Link to="/contact" className="premium-cta-btn">START A PROJECT</Link>
      </section>

      <footer className="site-footer">
        <p>© 2025 Akshat Agrawal — Built with obsession.</p>
        <Link to="/wedo" className="footer-wedo-link">WeDo Agency ↗</Link>
        <div className="footer-soc">
          <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
          <a href="mailto:akshat@email.com">Email</a>
        </div>
      </footer>
    </div>
  )
}
