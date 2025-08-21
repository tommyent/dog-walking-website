import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Basic Walk',
      price: '$25',
      duration: '30 minutes',
      features: [
        'Individual walk',
        'Fresh water refill',
        'Photo update',
        'Basic report card',
        'Weekday availability'
      ],
      popular: false
    },
    {
      name: 'Standard Walk',
      price: '$35',
      duration: '45 minutes',
      features: [
        'Individual or group walk',
        'Fresh water & treat',
        'Multiple photo updates',
        'Detailed report card',
        'GPS tracking',
        'Weekend availability'
      ],
      popular: true
    },
    {
      name: 'Premium Walk',
      price: '$45',
      duration: '60 minutes',
      features: [
        'Individual walk only',
        'Fresh water & treats',
        'Video updates',
        'Comprehensive report',
        'GPS tracking',
        'Basic training reinforcement',
        'Priority scheduling'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the perfect plan for your furry friend</p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-duration">/{plan.duration}</span>
                </div>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
        <div className="pricing-extras">
          <h3>Additional Services</h3>
          <div className="extras-grid">
            <div className="extra-item">
              <span className="extra-name">Additional Dog</span>
              <span className="extra-price">+$10 per walk</span>
            </div>
            <div className="extra-item">
              <span className="extra-name">Pet Sitting</span>
              <span className="extra-price">$50/day</span>
            </div>
            <div className="extra-item">
              <span className="extra-name">Overnight Care</span>
              <span className="extra-price">$75/night</span>
            </div>
            <div className="extra-item">
              <span className="extra-name">Pet Taxi</span>
              <span className="extra-price">$30/trip</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
