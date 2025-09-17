import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          {/* Contact Section */}
          <div className="footer-section">
            <h3 className="footer-title">Get in Touch</h3>
            <div className="contact-info">
              <a href="mailto:info@limehouse.ee" className="contact-link">
                info@limehouse.ee
              </a>
              <a href="tel:+37253443814" className="contact-link">
                +372 53443814
              </a>
              <a href="tel:+37256261204" className="contact-link">
                +372 56261204
              </a>
            </div>
          </div>
          
          {/* Address Section */}
          <div className="footer-section">
            <h3 className="footer-title">Visit Us</h3>
            <address className="footer-address">
              Limehouse Design Studio<br />
              Tuukri 50<br />
              Tallinn, 10120<br />
              Estonia
            </address>
          </div>
          
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <img src="/assets/logo_white.png" alt="Limehouse Design" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">
              Intelligent interiors.<br />
              Timeless design.
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Limehouse Design. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy</a>
              <span className="link-separator">·</span>
              <a href="#" className="footer-link">Terms</a>
              <span className="link-separator">·</span>
              <a href="#" className="footer-link">Instagram</a>
              <span className="link-separator">·</span>
              <a href="#" className="footer-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
