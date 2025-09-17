import React from 'react'
import './About.css'

const About = () => {
  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' }
  ]

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-grid">
          {/* Left Column - Content */}
          <div className="about-content">
            <div className="about-header">
              <span className="section-label uppercase">About</span>
              <h2 className="about-title">
                Precision meets
                <span className="title-accent"> passion</span>
              </h2>
            </div>
            
            <div className="about-text">
              <p className="about-lead">
                We craft intelligent spaces that balance form and function with meticulous precision.
              </p>
              <p className="about-description">
                For over two decades, Limehouse Design has been transforming visions into reality. 
                Our approach combines meticulous attention to detail with innovative design thinking, 
                creating interiors that are both timeless and contemporary.
              </p>
            </div>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="about-visual">
            <div className="about-image-wrapper">
              <img 
                src="/assets/limehouse_team_image.jpg" 
                alt="Limehouse Design Team" 
                className="about-image"
              />
              <div className="image-accent"></div>
            </div>
            
            <div className="about-quote">
              <blockquote>
                "Every space tells a story. We ensure it's one worth living."
              </blockquote>
              <cite>— Limehouse Design Team</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
