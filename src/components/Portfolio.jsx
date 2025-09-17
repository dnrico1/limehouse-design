import React, { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const portfolioItems = [
    { 
      id: 1, 
      title: 'Merirahu Villad',
      category: 'residential',
      image: '/assets/limehouse_portfolio_1.jpg',
      location: 'Tallinn',
      year: '2024'
    },
    { 
      id: 2, 
      title: 'Rotermanni Kvartal',
      category: 'commercial',
      image: '/assets/limehouse_portfolio_2.jpg',
      location: 'Tallinn',
      year: '2023'
    },
    { 
      id: 3, 
      title: 'Das Haus',
      category: 'residential',
      image: '/assets/limehouse_portfolio_3.jpg',
      location: 'Tallinn',
      year: '2024'
    },
    { 
      id: 4, 
      title: 'TimeToWine',
      category: 'commercial',
      image: '/assets/limehouse_portfolio_4.jpeg',
      location: 'Tallinn',
      year: '2023'
    }
  ]

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div className="portfolio-title-section">
            <span className="section-label uppercase">Portfolio</span>
            <h2 className="portfolio-title">
              Selected <span className="title-outline">works</span>
            </h2>
          </div>
          
          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={`filter-button ${activeFilter === filter.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.value)}
              >
                <span className="filter-text">{filter.label}</span>
                <span className="filter-count">
                  ({filter.value === 'all' 
                    ? portfolioItems.length 
                    : portfolioItems.filter(item => item.category === filter.value).length})
                </span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="portfolio-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="portfolio-image"
                />
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <span className="item-category uppercase">{item.category}</span>
                    <h3 className="item-title">{item.title}</h3>
                    <div className="item-details">
                      <span>{item.location}</span>
                      <span className="detail-separator">/</span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-info">
                <span className="info-number">0{item.id}</span>
                <h4 className="info-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="portfolio-cta">
          <p className="cta-text">Interested in transforming your space?</p>
          <a href="#contact" className="cta-button">
            <span>Start Your Project</span>
            <span className="button-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
