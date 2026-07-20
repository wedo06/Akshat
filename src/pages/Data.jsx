import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Data.css'

const DraggableWindow = ({ title, id, defaultPos, onClose, children, isActive, bringToFront, width = 'auto' }) => {
  const [pos, setPos] = useState(defaultPos);
  const [isDragging, setIsDragging] = useState(false);
  const [rel, setRel] = useState({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    // Only drag from the title bar (but not the close button)
    if (e.target.closest('.retro-close-btn') || e.target.closest('.retro-window-body')) {
      bringToFront(id);
      return;
    }
    
    bringToFront(id);
    setIsDragging(true);
    setRel({
      x: e.pageX - pos.x,
      y: e.pageY - pos.y
    });
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    setPos({
      x: e.pageX - rel.x,
      y: e.pageY - rel.y
    });
    e.stopPropagation();
    e.preventDefault();
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    } else {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, rel]);

  return (
    <div 
      className={`retro-window ${id}-win`} 
      style={{ left: pos.x, top: pos.y, width, right: 'auto', bottom: 'auto', zIndex: isActive ? 50 : 20, position: 'absolute' }}
      onMouseDown={() => bringToFront(id)}
    >
      <div className="retro-title-bar" onMouseDown={onMouseDown} style={{cursor: isDragging ? 'grabbing' : 'grab'}}>
        <div className="retro-title-text">{title}</div>
        <button className="retro-close-btn" onClick={(e) => { e.stopPropagation(); onClose(id); }}>X</button>
      </div>
      <div className="retro-window-body">
        {children}
      </div>
    </div>
  );
};

export default function Data() {
  const [openWindows, setOpenWindows] = useState({
    profile: true,
    stats: true,
    skills: true,
    projects: true,
    terminal: true
  })
  
  const [activeWindow, setActiveWindow] = useState('profile')
  const [activeTab, setActiveTab] = useState('databases')

  const toggleWindow = (win) => {
    setOpenWindows(prev => {
      const isOpening = !prev[win];
      if (isOpening) setActiveWindow(win);
      return { ...prev, [win]: isOpening };
    })
  }

  const bringToFront = (win) => setActiveWindow(win);

  // We need safe initial positions based on a typical desktop viewport, so they don't pile up.
  return (
    <div className="page retro-desktop">
      
      {/* ── DESKTOP ICONS ── */}
      <div className="retro-icons">
        <button className="retro-icon-btn" onDoubleClick={() => toggleWindow('profile')}>
          <div className="retro-icon-img">👤</div>
          <span>Profile.exe</span>
        </button>
        <button className="retro-icon-btn" onDoubleClick={() => toggleWindow('projects')}>
          <div className="retro-icon-img">📁</div>
          <span>Projects.dir</span>
        </button>
        <button className="retro-icon-btn" onDoubleClick={() => toggleWindow('stats')}>
          <div className="retro-icon-img">📊</div>
          <span>KPIs.dat</span>
        </button>
        <button className="retro-icon-btn" onDoubleClick={() => toggleWindow('skills')}>
          <div className="retro-icon-img">⚙️</div>
          <span>Skills.sys</span>
        </button>
        <button className="retro-icon-btn" onDoubleClick={() => toggleWindow('terminal')}>
          <div className="retro-icon-img">🖥️</div>
          <span>Query.bat</span>
        </button>
        <Link to="/contact" className="retro-icon-btn">
          <div className="retro-icon-img">📧</div>
          <span>Mail.exe</span>
        </Link>
      </div>

      <div className="retro-workspace">
        
        {/* ── PROFILE WINDOW ── */}
        {openWindows.profile && (
          <DraggableWindow 
            id="profile" 
            title="Profile.exe - Data Analyst" 
            defaultPos={{x: 100, y: 120}} 
            onClose={toggleWindow}
            isActive={activeWindow === 'profile'}
            bringToFront={bringToFront}
          >
            <div className="retro-menu-bar">
              <span>File</span><span>Edit</span><span>View</span><span>Help</span>
            </div>
            <div className="retro-content flex-content">
              <img src="/binary_art_nobg.png" alt="Akshat" className="retro-portrait" draggable="false" />
              <div className="retro-text">
                <h1 className="retro-h1">Akshat Agrawal</h1>
                <h2 className="retro-h2">DATA ANALYST // ENGINEER</h2>
                <p>
                  B.Tech Computer Science (AI) undergraduate at Newton School of Technology. I specialize in transforming complex data into actionable insights and building scalable digital products.
                </p>
                <p>
                  <b>Experience:</b> Founder @ WeDo | Software Developer @ Countrees AI.
                </p>
                <p style={{marginTop: '10px'}}>
                  <b>External Portfolio:</b> <a href="https://akshuu1.github.io/analysisPortfolio/" target="_blank" rel="noopener">View Here ↗</a>
                </p>
              </div>
            </div>
          </DraggableWindow>
        )}

        {/* ── PROJECTS WINDOW ── */}
        {openWindows.projects && (
          <DraggableWindow 
            id="projects" 
            title="C:\DATA\Case_Studies" 
            defaultPos={{x: 750, y: 150}}
            width="450px"
            onClose={toggleWindow}
            isActive={activeWindow === 'projects'}
            bringToFront={bringToFront}
          >
            <div className="retro-menu-bar">
              <span>File</span><span>View</span><span>Help</span>
            </div>
            <div className="retro-content">
              <ul className="retro-list retro-project-list">
                <li>
                  <b><a href="https://public.tableau.com/app/profile/akshat.agrawal2260/viz/Airbnb_17773079392460/MarketIntelligence?publish=yes" target="_blank" rel="noopener" style={{color: '#000080', textDecoration: 'underline'}}>Staywise (Airbnb Data Analysis) ↗</a></b>
                  <p>Analyzed Airbnb listings to understand market trends and revenue distribution. Identified pricing inefficiencies using gap analysis and proposed data-driven optimizations.</p>
                </li>
                <li>
                  <b><a href="https://public.tableau.com/app/profile/akshat.agrawal2260/viz/EVchargingAnalyticalDashboard/Dashboard1" target="_blank" rel="noopener" style={{color: '#000080', textDecoration: 'underline'}}>EV Charging Analytical ↗</a></b>
                  <p>Tracks EV charging performance by highlighting energy consumption, revenue, and usage time across cities. Enables data-driven decisions for scaling networks.</p>
                </li>
              </ul>
            </div>
          </DraggableWindow>
        )}

        {/* ── TERMINAL / SQL WINDOW ── */}
        {openWindows.terminal && (
          <DraggableWindow 
            id="terminal" 
            title="Query.bat - MS-DOS Prompt" 
            defaultPos={{x: 650, y: 520}}
            width="500px"
            onClose={toggleWindow}
            isActive={activeWindow === 'terminal'}
            bringToFront={bringToFront}
          >
            <div style={{background: '#000', color: '#0f0', fontFamily: 'monospace', padding: '10px', height: '100%', minHeight: '220px'}}>
              <p>C:\DATA&gt; executing query...</p>
              <br/>
              <p style={{color: '#fff'}}>SELECT city, </p>
              <p style={{color: '#fff'}}>&nbsp;&nbsp;SUM(energy_consumed) as total_kwh,</p>
              <p style={{color: '#fff'}}>&nbsp;&nbsp;AVG(revenue) as avg_revenue</p>
              <p style={{color: '#fff'}}>FROM ev_charging_stats</p>
              <p style={{color: '#fff'}}>WHERE usage_time &gt;= CURRENT_DATE - INTERVAL '30 days'</p>
              <p style={{color: '#fff'}}>GROUP BY 1 ORDER BY total_kwh DESC;</p>
              <br/>
              <p>&gt; Query successful. 248 rows returned (0.42s).</p>
              <p className="retro-cursor">_</p>
            </div>
          </DraggableWindow>
        )}

        {/* ── STATS WINDOW ── */}
        {openWindows.stats && (
          <DraggableWindow 
            id="stats" 
            title="C:\DATA\KPIs.dat" 
            defaultPos={{x: 200, y: 420}}
            onClose={toggleWindow}
            isActive={activeWindow === 'stats'}
            bringToFront={bringToFront}
          >
            <div className="retro-content">
              <div className="retro-stat-box">
                <span className="retro-stat-label">Rows Processed</span>
                <span className="retro-stat-val">50M+</span>
              </div>
              <div className="retro-stat-box">
                <span className="retro-stat-label">Pipelines Built</span>
                <span className="retro-stat-val">12</span>
              </div>
              <div className="retro-stat-box">
                <span className="retro-stat-label">Data Accuracy Check</span>
                <span className="retro-stat-val">99.99%</span>
              </div>
              <div className="retro-chart">
                <div className="retro-bar" style={{width: '70%'}}></div>
                <div className="retro-bar" style={{width: '85%'}}></div>
                <div className="retro-bar" style={{width: '95%'}}></div>
                <div className="retro-bar" style={{width: '60%'}}></div>
              </div>
            </div>
          </DraggableWindow>
        )}

        {/* ── SKILLS WINDOW ── */}
        {openWindows.skills && (
          <DraggableWindow 
            id="skills" 
            title="Skills Properties" 
            defaultPos={{x: 350, y: 620}}
            onClose={toggleWindow}
            isActive={activeWindow === 'skills'}
            bringToFront={bringToFront}
          >
            <div className="retro-tabs">
              <div className={`retro-tab ${activeTab === 'databases' ? 'active' : ''}`} onClick={() => setActiveTab('databases')}>Databases</div>
              <div className={`retro-tab ${activeTab === 'tools' ? 'active' : ''}`} onClick={() => setActiveTab('tools')}>Tools</div>
              <div className={`retro-tab ${activeTab === 'cloud' ? 'active' : ''}`} onClick={() => setActiveTab('cloud')}>Languages</div>
            </div>
            <div className="retro-tab-content" style={{minHeight: '120px'}}>
              {activeTab === 'databases' && (
                <ul className="retro-list">
                  <li><input type="checkbox" readOnly checked /> MongoDB</li>
                  <li><input type="checkbox" readOnly checked /> MySQL</li>
                </ul>
              )}
              {activeTab === 'tools' && (
                <ul className="retro-list">
                  <li><input type="checkbox" readOnly checked /> Tableau</li>
                  <li><input type="checkbox" readOnly checked /> PowerBI</li>
                </ul>
              )}
              {activeTab === 'cloud' && (
                <ul className="retro-list">
                  <li><input type="checkbox" readOnly checked /> Excel</li>
                  <li><input type="checkbox" readOnly checked /> Spreadsheets</li>
                </ul>
              )}
              
              <div className="retro-btn-group" style={{marginTop: '20px'}}>
                <button className="retro-btn" onClick={() => toggleWindow('skills')}>OK</button>
                <button className="retro-btn disabled">Apply</button>
              </div>
            </div>
          </DraggableWindow>
        )}

      </div>

      {/* ── TASKBAR ── */}
      <div className="retro-taskbar">
        <button className="retro-start-btn">
          <img src="/apple-touch-icon.png" alt="logo" className="retro-start-logo" onError={(e) => e.target.style.display='none'}/>
          Start
        </button>
        <div className="retro-task-tabs" style={{overflowX: 'auto'}}>
          {openWindows.profile && <div className={`retro-task-tab ${activeWindow === 'profile' ? 'active' : ''}`} onClick={() => bringToFront('profile')}>Profile.exe</div>}
          {openWindows.projects && <div className={`retro-task-tab ${activeWindow === 'projects' ? 'active' : ''}`} onClick={() => bringToFront('projects')}>Projects.dir</div>}
          {openWindows.stats && <div className={`retro-task-tab ${activeWindow === 'stats' ? 'active' : ''}`} onClick={() => bringToFront('stats')}>KPIs.dat</div>}
          {openWindows.skills && <div className={`retro-task-tab ${activeWindow === 'skills' ? 'active' : ''}`} onClick={() => bringToFront('skills')}>Skills Properties</div>}
          {openWindows.terminal && <div className={`retro-task-tab ${activeWindow === 'terminal' ? 'active' : ''}`} onClick={() => bringToFront('terminal')}>Query.bat</div>}
        </div>
        <div className="retro-time">
          {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
      </div>

    </div>
  )
}
