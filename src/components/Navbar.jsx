import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-brand">
          <img src="/assets/logo_white.png" alt="Limehouse Design" className="brand-logo" />
        </a>
        
        <div className="navbar-menu">
          <a 
            href="#home" 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            <span className="nav-number">01</span>
            <span className="nav-text">HOME</span>
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            <span className="nav-number">02</span>
            <span className="nav-text">ABOUT</span>
          </a>
          <a 
            href="#portfolio" 
            className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
          >
            <span className="nav-number">03</span>
            <span className="nav-text">WORK</span>
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            <span className="nav-number">04</span>
            <span className="nav-text">CONTACT</span>
          </a>
        </div>
        
        <button className="navbar-menu-button" aria-label="Menu">
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
