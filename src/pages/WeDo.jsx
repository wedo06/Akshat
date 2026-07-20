import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './WeDo.css'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.wd-reveal')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function WeDo() {
  useEffect(() => { 
    // Old money gold accent
    document.documentElement.style.setProperty('--accent', '#C5A059') 
  }, [])
  useReveal()

  return (
    <div className="page wedo-page">
      
      {/* ── DOUBLE BORDER FRAMING ── */}
      <div className="wd-frame-outer">
        <div className="wd-frame-inner">
          


          {/* ── HERO: THE TITLE PAGE ── */}
          <section className="wd-hero wd-reveal">
            <div className="wd-top-meta">
              <span>Vol. 02</span>
              <span>Bespoke Digital Agency</span>
              <span>Est. MMXXIV</span>
            </div>

            <div className="wd-title-wrapper">
              <a href="https://teamwedo.vercel.app/" target="_blank" rel="noopener" style={{textDecoration: 'none', color: 'inherit'}}>
                <img src="/wedo_logo.png" alt="WeDo Logo" style={{width: '140px', margin: '0 auto 40px', display: 'block'}} />
              </a>
              <h1 className="wd-title">
                <span className="wd-title-script">The</span>
                <br />
                WeDo Agency
              </h1>
              <p className="wd-subtitle">Purveyors of Fine Digital Architectures.</p>
            </div>

            <div className="wd-hero-divider">
              <div className="wd-divider-diamond"></div>
            </div>

            <div className="wd-hero-footer">
              <span>Software Engineering</span>
              <span className="wd-dot">✦</span>
              <span>Data Intelligence</span>
              <span className="wd-dot">✦</span>
              <span>Brand Identity</span>
            </div>
          </section>

          {/* ── THE LEDGER: STATS ── */}
          <section className="wd-ledger wd-reveal">
            <div className="wd-ledger-row">
              <div className="wd-ledger-col">
                <span className="wd-ledger-val">XII</span>
                <span className="wd-ledger-lbl">Projects Commissioned</span>
              </div>
              <div className="wd-ledger-col">
                <span className="wd-ledger-val">XX+</span>
                <span className="wd-ledger-lbl">Esteemed Clientele</span>
              </div>
              <div className="wd-ledger-col">
                <span className="wd-ledger-val">III</span>
                <span className="wd-ledger-lbl">Domains of Mastery</span>
              </div>
            </div>
          </section>

          {/* ── THE FOUR DISCIPLINES ── */}
          <section className="wd-disciplines wd-reveal">
            <h2 className="wd-section-title">What we Provide</h2>
            
            <div className="wd-disc-grid">
              
              {/* Discipline I */}
              <div className="wd-disc-card wd-reveal">
                <div className="wd-disc-header">
                  <span className="wd-disc-num">I.</span>
                  <span className="wd-disc-meta">Web Build</span>
                </div>
                <h3 className="wd-disc-title">Website Design <br/>& Development</h3>
                <p className="wd-disc-desc">Beautiful, responsive, scalable — built with modern stacks for performance and reliability.</p>
                <div className="wd-disc-tags">
                  <span>Design</span><span>Build</span><span>Next</span>
                </div>
              </div>

              {/* Discipline II */}
              <div className="wd-disc-card wd-reveal" style={{transitionDelay: '0.1s'}}>
                <div className="wd-disc-header">
                  <span className="wd-disc-num">II.</span>
                  <span className="wd-disc-meta">Brand</span>
                </div>
                <h3 className="wd-disc-title">Branding <br/>& Identity</h3>
                <p className="wd-disc-desc">Logos, colour, typography and visual systems that make brands instantly recognisable.</p>
                <div className="wd-disc-tags">
                  <span>Identity</span><span>Type</span><span>System</span>
                </div>
              </div>

              {/* Discipline III */}
              <div className="wd-disc-card wd-reveal" style={{transitionDelay: '0.2s'}}>
                <div className="wd-disc-header">
                  <span className="wd-disc-num">III.</span>
                  <span className="wd-disc-meta">AI + Ops</span>
                </div>
                <h3 className="wd-disc-title">AI Solutions <br/>& Automation</h3>
                <p className="wd-disc-desc">Chatbots, workflow automation and intelligent systems that quietly retire manual work.</p>
                <div className="wd-disc-tags">
                  <span>Automate</span><span>Scale</span><span>AI</span>
                </div>
              </div>

              {/* Discipline IV */}
              <div className="wd-disc-card wd-reveal" style={{transitionDelay: '0.3s'}}>
                <div className="wd-disc-header">
                  <span className="wd-disc-num">IV.</span>
                  <span className="wd-disc-meta">UX + Growth</span>
                </div>
                <h3 className="wd-disc-title">UI/UX & <br/>Digital Growth</h3>
                <p className="wd-disc-desc">Interfaces people enjoy — with SEO, analytics and optimisation that keep growing.</p>
                <div className="wd-disc-tags">
                  <span>SEO</span><span>Analytics</span><span>Optimize</span>
                </div>
              </div>

            </div>
          </section>

          {/* ── THE MANIFESTO ── */}
          <section className="wd-manifesto wd-reveal">
            <div className="wd-man-content">
              <p className="wd-man-quote">
                "True luxury in the digital age is the absolute absence of friction.<br/>
                We engineer products where code, data, and design exist in quiet harmony."
              </p>
              <span className="wd-man-author">— Akshat Agrawal, Proprietor</span>
            </div>
          </section>

          {/* ── FOOTER ── */}
          <footer className="wd-footer wd-reveal">
            <div className="wd-footer-divider">
              <div className="wd-divider-diamond"></div>
            </div>
            <div className="wd-footer-content">
              <span className="wd-footer-copy">© MMXXV The WeDo Agency.</span>
              <div className="wd-footer-links">
                <a href="https://www.linkedin.com/in/akshat-agrawal-955347316/" target="_blank" rel="noopener">LinkedIn</a>
                <a href="https://github.com/Akshuu1" target="_blank" rel="noopener">GitHub</a>
                <a href="mailto:akshata.14feb@gmail.com">Correspondence</a>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  )
}
