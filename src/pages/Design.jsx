import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './Design.css'

export default function Design() {
  // Scroll reveal observer
  useEffect(() => {
    const els = document.querySelectorAll('.ds-reveal')
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

  return (
    <div className="page ds-extended-page">
      <SEO 
        title="UI/UX & Brand Design" 
        description="Design portfolio of Akshat Agrawal — Founder of WeDo Agency. Crafting high-converting digital products, brand identities, Figma systems, and Framer prototypes."
      />
      
      {/* ── 1. HERO POSTER ── */}
      <section className="ds-hero">
        <div className="ds-poster-canvas">
          
          {/* THE UNIFIED SVG GRAPHICS LAYER - FULLSCREEN */}
          <svg className="ds-poster-svg-layer" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice">
            
            {/* 1. YELLOW ARCH (Center X: 720, Top Y: 200, Width: 700, Radius: 350) */}
            <path d="M 370,1200 L 370,550 A 350,350 0 0,1 1070,550 L 1070,1200 Z" fill="#FFCE75" />
            
            {/* 2. PORTRAIT IMAGE */}
            <image href="/binary_art_nobg.webp" x="370" y="200" width="700" height="1000" preserveAspectRatio="xMidYMax meet" />
            
            {/* 3. DESIGNER CURVED TEXT */}
            <path id="designerCurve" d="M 330,1200 L 330,550 A 390,390 0 0,1 720,160" fill="transparent" />
            <text fill="#3A1C96" fontSize="100" fontFamily="Playfair Display" fontWeight="900" letterSpacing="10">
              <textPath href="#designerCurve" startOffset="10%">
                DESIGNER
              </textPath>
            </text>

            {/* 4. UI/UX TEXT (Vertical on the far left) */}
            <text x="-750" y="150" transform="rotate(-90)" fill="#3A1C96" fontSize="180" fontFamily="Inter" fontWeight="900" letterSpacing="30">
              UI/UX
            </text>

            {/* 5. ARROW & TEXT (Top Left space) */}
            <text x="350" y="150" fill="#3A1C96" fontSize="45" fontFamily="Inter" fontStyle="italic" fontWeight="600">Yes, that's Me!</text>
            <path d="M 450,180 Q 550,160 580,300" fill="none" stroke="#E6C875" strokeWidth="8" strokeLinecap="round" />
            <path d="M 560,280 L 580,300 L 595,270" fill="none" stroke="#E6C875" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* 6. LET'S TALK WIDGET (Bottom Right) */}
            <g transform="translate(1000, 750)">
              <path d="M 0,0 A 130,130 0 0,1 260,0 Z" fill="#3A1C96" />
              <path id="talkCurve" d="M 25,-20 A 105,105 0 0,1 235,-20" fill="transparent" />
              <text fill="#A67CFC" fontSize="28" fontFamily="Inter" fontWeight="700" letterSpacing="8">
                <textPath href="#talkCurve" startOffset="50%" textAnchor="middle">
                  LET'S TALK
                </textPath>
              </text>
            </g>

            {/* Interactive Pink Circle */}
            <g 
              transform="translate(1250, 750)" 
              onClick={() => window.location.href='/contact'} 
              style={{cursor: 'pointer'}} 
              className="ds-svg-btn"
            >
              <circle cx="0" cy="0" r="70" fill="#F34C7A" />
              <line x1="-25" y1="0" x2="25" y2="0" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
              <polyline points="0,-25 25,0 0,25" stroke="#fff" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>

          </svg>

        </div>
      </section>

      {/* ── 2. PHILOSOPHY / EDITORIAL TYPOGRAPHY ── */}
      <section className="ds-philosophy">
        <div className="ds-phil-container ds-reveal">
          <h2 className="ds-phil-title">Form Follows <br/><span className="ds-italic">Emotion.</span></h2>
          <div className="ds-phil-text">
            <p>
              I believe that great UI/UX is not just about usable interfaces. It is about crafting deeply emotional, visceral experiences that stick with the user long after they close the tab.
            </p>
            <p>
              I blend brutalist graphic design, high-fashion editorial layouts, and cutting-edge interaction design to build digital products that refuse to be ignored.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. ASYMMETRICAL DESIGN GALLERY ── */}
      <section className="ds-gallery">
        <div className="ds-gallery-grid">
          
          {/* Glassmorphic Element */}
          <div className="ds-gal-item ds-gal-glass ds-reveal">
            <div className="ds-glass-panel">
              <div className="ds-glass-circle"></div>
              <h3>Glassmorphism</h3>
              <p>Blur effects & depth layering.</p>
            </div>
          </div>

          {/* Brutalist Typography Element */}
          <div className="ds-gal-item ds-gal-brutal ds-reveal" style={{transitionDelay: '0.1s'}}>
            <h1 className="ds-brutal-huge">BOLD</h1>
            <p className="ds-brutal-sub">UNAPOLOGETIC TYPOGRAPHY</p>
          </div>

          {/* Neo-Gradient Mesh */}
          <div className="ds-gal-item ds-gal-mesh ds-reveal" style={{transitionDelay: '0.2s'}}>
            <div className="ds-mesh-orb ds-mesh-1"></div>
            <div className="ds-mesh-orb ds-mesh-2"></div>
            <span className="ds-mesh-text">Fluid Gradients</span>
          </div>

          {/* Wireframe to Hi-Fi */}
          <div className="ds-gal-item ds-gal-wire ds-reveal" style={{transitionDelay: '0.3s'}}>
            <div className="ds-wire-box"></div>
            <div className="ds-wire-box ds-filled"></div>
            <span className="ds-wire-text">Wireframe ➔ Prototype</span>
          </div>

        </div>
      </section>

      {/* ── 4. TOOLS OF THE TRADE ── */}
      <section className="ds-tools ds-reveal">
        <h2 className="ds-tools-title">My Toolkit</h2>
        <div className="ds-tools-flex">
          <div className="ds-tool-badge">Figma</div>
          <div className="ds-tool-badge">Framer</div>
          <div className="ds-tool-badge">Canva</div>
        </div>
      </section>

    </div>
  )
}
