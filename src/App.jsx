import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LaserFlow from './components/ui/LaserFlow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      {/* Hero Section with LaserFlow */}
      <div className="hero-section" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <LaserFlow />
        
        {/* Hero Content */}
        <div className="hero-content" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 10,
          color: 'white',
          width: '100%',
          padding: '0 20px',
          boxSizing: 'border-box'
        }}>
          <h1 className="hero-title" style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
          }}>
            Welcome to Business Productivity
          </h1>
          <p className="hero-subtitle" style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
            textShadow: '0 0 5px rgba(0, 0, 0, 0.7)'
          }}>
            Enhance your workflow with our powerful tools
          </p>
          <button 
            className="cta-button"
            style={{
              backgroundColor: '#FF79C6',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              fontSize: '1.1rem',
              borderRadius: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 15px rgba(255, 121, 198, 0.5)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 0 20px rgba(255, 121, 198, 0.8)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 0 15px rgba(255, 121, 198, 0.5)';
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section" style={{ padding: '50px 20px', textAlign: 'center' }}>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App