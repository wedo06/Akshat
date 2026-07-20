import { useState, useEffect } from 'react'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [bootLog, setBootLog] = useState([])

  useEffect(() => {
    const logs = [
      "akshatOS v2.0.4 loaded.",
      "Establishing secure connection...",
      "Connection established.",
      "Run payload: ./contact_form.sh",
      "--------------------------------"
    ]
    let delay = 0
    logs.forEach((log, index) => {
      delay += Math.random() * 300 + 200
      setTimeout(() => {
        setBootLog(prev => [...prev, log])
      }, delay)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.target.reset()
  }

  return (
    <div className="page contact-term2-page">
      <div className="term2-window">
        {/* Terminal Header */}
        <div className="term2-header">
          <div className="term2-btns">
            <span className="term2-btn close"></span>
            <span className="term2-btn min"></span>
            <span className="term2-btn max"></span>
          </div>
          <div className="term2-title">akshat@dev:~ /contact</div>
        </div>

        {/* Terminal Body */}
        <div className="term2-body">
          <div className="term2-boot">
            {bootLog.map((log, i) => (
              <div key={i} className="term2-log">{log}</div>
            ))}
          </div>

          {bootLog.length >= 5 && (
            <div className="term2-content fade-in">
              <p className="term2-desc">
                // System ready. Please fill out the parameters below to initiate contact.
              </p>

              <form className="term2-form" onSubmit={handleSubmit}>
                <div className="term2-field">
                  <label><span className="prompt">$&nbsp;</span>Name:</label>
                  <input type="text" placeholder="Type your name..." required />
                </div>
                
                <div className="term2-field">
                  <label><span className="prompt">$&nbsp;</span>Email:</label>
                  <input type="email" placeholder="Type your email..." required />
                </div>
                
                <div className="term2-field">
                  <label><span className="prompt">$&nbsp;</span>Topic:</label>
                  <select required defaultValue="">
                    <option value="" disabled>Select a topic...</option>
                    <option>Hire Me — Full Stack</option>
                    <option>Hire Me — Data</option>
                    <option>Hire Me — Design</option>
                    <option>WeDo — Agency Project</option>
                    <option>Just saying hi</option>
                  </select>
                </div>
                
                <div className="term2-field">
                  <label><span className="prompt">$&nbsp;</span>Message:</label>
                  <textarea rows={4} placeholder="Type your message here..." required></textarea>
                </div>

                <div className="term2-action">
                  <span className="prompt">$&nbsp;</span>
                  <button type="submit" className={`term2-submit ${sent ? 'sent' : ''}`}>
                    {sent ? './message_sent.sh' : './submit.sh'}
                  </button>
                  {!sent && <span className="blinking-cursor">_</span>}
                </div>
                
                {sent && (
                  <div className="term2-success-msg">
                    [SUCCESS]: Payload delivered successfully. I will respond shortly.
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
        
        {/* CRT Scanline Overlay */}
        <div className="term2-scanlines"></div>
      </div>
    </div>
  )
}
