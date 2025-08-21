import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-content">
            <div className="section-header">
              <h2>About Happy Paws</h2>
              <p>Your trusted partner in pet care since 2015</p>
            </div>
            <div className="about-text">
              <p>
                At Happy Paws, we understand that your dog is more than just a pet – they're a beloved 
                member of your family. That's why we're committed to providing the highest quality care 
                and attention to every furry friend we meet.
              </p>
              <p>
                Founded by passionate dog lovers, our team consists of experienced, professional dog 
                walkers who are dedicated to ensuring your pet's safety, happiness, and well-being. 
                We're fully insured, bonded, and trained in pet first aid.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Happy Dogs</div>
                </div>
                <div className="stat">
                  <div className="stat-number">8+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5★</div>
                  <div className="stat-label">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-features">
            <h3>Why Choose Us?</h3>
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <div>
                  <h4>Experienced & Certified</h4>
                  <p>Our team is professionally trained and certified in pet care and first aid.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <div>
                  <h4>GPS Tracking</h4>
                  <p>Track your dog's walk in real-time with our GPS-enabled service.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <div>
                  <h4>Flexible Scheduling</h4>
                  <p>Book walks that fit your schedule, including weekends and holidays.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <div>
                  <h4>Photo Updates</h4>
                  <p>Receive photos and updates during every walk so you never miss a moment.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <div>
                  <h4>Insured & Bonded</h4>
                  <p>We're fully insured for your peace of mind and your pet's protection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
