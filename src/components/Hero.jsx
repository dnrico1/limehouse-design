import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-image-container">
        <img 
          src="/assets/limehouse_portfolio_1.jpg" 
          alt="Limehouse Interior Design" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <span className="hero-label uppercase">Interior Design Excellence</span>
          <h1 className="hero-title">
            <span className="hero-title-line">Intelligent</span>
            <span className="hero-title-line">Interiors</span>
          </h1>
          <p className="hero-description">
            Creating sophisticated spaces with precision and timeless elegance
          </p>
        </div>
        
        <div className="hero-cta">
          <a href="#portfolio" className="hero-button">
            <span className="button-text">View Work</span>
            <span className="button-arrow">→</span>
          </a>
        </div>
      </div>
      
      <div className="hero-bottom">
        <div className="hero-info">
          <span className="info-number">20+</span>
          <span className="info-text uppercase">Years of Excellence</span>
        </div>
        <div className="hero-scroll">
          <span className="scroll-text uppercase">Scroll</span>
          <span className="scroll-line"></span>
        </div>
      </div>
    </section>
  )
}

export default Hero
