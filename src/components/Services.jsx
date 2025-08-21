import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🚶',
      title: 'Daily Dog Walks',
      description: '30 or 60-minute walks tailored to your dog\'s needs and energy level.',
      features: ['Individual or group walks', 'Flexible scheduling', 'Weekend availability']
    },
    {
      icon: '🏃',
      title: 'Dog Running',
      description: 'High-energy exercise sessions for active dogs who need more than a walk.',
      features: ['Perfect for athletic breeds', 'Builds endurance', 'Helps with weight management']
    },
    {
      icon: '🏠',
      title: 'Pet Sitting',
      description: 'In-home pet care when you\'re away for extended periods.',
      features: ['Feeding & medication', 'Overnight stays available', 'Home security check']
    },
    {
      icon: '🐾',
      title: 'Puppy Visits',
      description: 'Special care for puppies including potty breaks and playtime.',
      features: ['Potty training support', 'Socialization', 'Basic training reinforcement']
    },
    {
      icon: '🚗',
      title: 'Pet Taxi',
      description: 'Safe transportation to vet appointments, grooming, or daycare.',
      features: ['Door-to-door service', 'Comfortable vehicles', 'Wait and return service']
    },
    {
      icon: '🎾',
      title: 'Dog Park Adventures',
      description: 'Supervised trips to local dog parks for socialization and play.',
      features: ['Social interaction', 'Off-leash exercise', 'Small group outings']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive care for your beloved pets</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
