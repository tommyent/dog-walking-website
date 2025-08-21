import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Professional Dog Walking Services
            <span className="hero-subtitle">Your Dog's Happiness is Our Priority</span>
          </h1>
          <p className="hero-description">
            Trusted, reliable, and loving care for your furry friends. 
            We ensure your dogs get the exercise and attention they deserve while you're away.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Book a Walk
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
              Our Services
            </button>
          </div>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Insured & Licensed</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>GPS Tracking</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Daily Photo Updates</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <span className="dog-emoji">🐕‍🦺</span>
            <span className="dog-emoji-2">🦮</span>
            <span className="dog-emoji-3">🐩</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
