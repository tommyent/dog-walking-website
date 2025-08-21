import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🐕</span>
              <span className="logo-text">Happy Paws</span>
            </div>
            <p className="footer-description">
              Professional dog walking and pet care services. 
              Your pet's happiness is our priority.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Dog Walking</a></li>
              <li><a href="#services">Pet Sitting</a></li>
              <li><a href="#services">Dog Running</a></li>
              <li><a href="#services">Puppy Care</a></li>
              <li><a href="#services">Pet Taxi</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li>📞 (555) 123-4567</li>
              <li>✉️ hello@happypaws.com</li>
              <li>📍 Downtown Area</li>
              <li>🕐 Mon-Sun: 7AM - 8PM</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Happy Paws Dog Walking. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
