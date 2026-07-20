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
          
          {/* ── WAX SEAL MONOGRAM ── */}
          <div className="wd-monogram-wrapper wd-reveal">
            <div className="wd-monogram">WD</div>
          </div>

          {/* ── HERO: THE TITLE PAGE ── */}
          <section className="wd-hero wd-reveal">
            <div className="wd-top-meta">
              <span>Vol. 02</span>
              <span>Bespoke Digital Agency</span>
              <span>Est. MMXXIV</span>
            </div>

            <div className="wd-title-wrapper">
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

          {/* ── SERVICES MENU (Vintage Menu Style) ── */}
          <section className="wd-catalogue wd-reveal">
            <h2 className="wd-section-title">Catalogue of Services</h2>
            
            <div className="wd-menu-list">
              {[
                { 
                  num: 'I.', 
                  title: 'Bespoke Software Engineering', 
                  desc: 'Meticulously crafted web applications, architected from foundation to pinnacle.',
                  price: 'Inquire'
                },
                { 
                  num: 'II.', 
                  title: 'Executive Data Intelligence', 
                  desc: 'Transforming raw information into actionable foresight with custom pipelines.',
                  price: 'Inquire'
                },
                { 
                  num: 'III.', 
                  title: 'Brand Legacy & Typography', 
                  desc: 'Establishing legacies through bespoke UI/UX systems and visual languages.',
                  price: 'Inquire'
                },
              ].map(s => (
                <div key={s.num} className="wd-menu-item wd-reveal">
                  <div className="wd-menu-header">
                    <span className="wd-menu-num">{s.num}</span>
                    <h3 className="wd-menu-title">{s.title}</h3>
                    <div className="wd-menu-dots"></div>
                    <span className="wd-menu-price">{s.price}</span>
                  </div>
                  <p className="wd-menu-desc">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="wd-menu-cta-wrapper">
              <Link to="/contact" className="wd-btn-gold">Commission Our Services</Link>
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
                <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
                <a href="mailto:akshat@email.com">Correspondence</a>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  )
}
