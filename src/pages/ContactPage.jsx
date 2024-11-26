import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });

  const [showMap, setShowMap] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const locations = [
    {
      city: 'Marrakech',
      address: '123 Medina Street, Marrakech',
      phone: '+212 524 123 456',
      hours: '10:00 - 19:00',
      email: 'marrakech@artiso.com'
    },
    {
      city: 'Fez',
      address: '45 Talaa Kebira, Fez',
      phone: '+212 535 789 012',
      hours: '09:00 - 18:00',
      email: 'fez@artiso.com'
    },
    {
      city: 'Casablanca',
      address: '78 Mohammed V Boulevard, Casablanca',
      phone: '+212 522 345 678',
      hours: '10:00 - 20:00',
      email: 'casa@artiso.com'
    }
  ];

  return (
    <div className="contact-page">
      <Navbar />
      
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you</p>
      </div>

      <div className="contact-container">
        <section className="contact-intro">
          <div className="intro-text">
            <h2>Let's Connect</h2>
            <p>Whether you're interested in our collections, want to collaborate, or simply want to learn more about Moroccan craftsmanship, we're here to help.</p>
          </div>
          <div className="contact-cards">
            <div className="contact-card">
              <div className="card-icon">✉️</div>
              <h3>Email Us</h3>
              <p>info@artiso.com</p>
              <p>Response within 24 hours</p>
            </div>
            <div className="contact-card">
              <div className="card-icon">📞</div>
              <h3>Call Us</h3>
              <p>+212 524 123 456</p>
              <p>Mon-Fri, 9:00-18:00 GMT+1</p>
            </div>
            <div className="contact-card">
              <div className="card-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Available on WhatsApp</p>
              <p>Quick responses guaranteed</p>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="form-container">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="general">General Inquiry</option>
                  <option value="products">Product Information</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="custom">Custom Order</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
          <div className="form-image">
            <img src="https://images.squarespace-cdn.com/content/v1/5c5c8f20b10f25a6b7112c3c/1552302095671-7UKQRTC9PDLKLA6PKFHK/20190310_134552.jpg" alt="Artisan at work" />
          </div>
        </section>

        <section className="locations-section">
          <h2>Visit Our Showrooms</h2>
          <div className="locations-grid">
            {locations.map((location, index) => (
              <div key={index} className="location-card">
                <h3>{location.city}</h3>
                <div className="location-details">
                  <p><span className="icon">📍</span> {location.address}</p>
                  <p><span className="icon">📞</span> {location.phone}</p>
                  <p><span className="icon">🕒</span> {location.hours}</p>
                  <p><span className="icon">✉️</span> {location.email}</p>
                </div>
                <button 
                  className="view-map-btn"
                  onClick={() => setShowMap(true)}
                >
                  View on Map
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Do you ship internationally?</h3>
              <p>Yes, we ship worldwide through DHL and FedEx. Shipping costs vary by location and package size.</p>
            </div>
            <div className="faq-item">
              <h3>Can I customize my order?</h3>
              <p>Absolutely! We work closely with our artisans to create custom pieces. Contact us with your requirements.</p>
            </div>
            <div className="faq-item">
              <h3>What's your return policy?</h3>
              <p>We accept returns within 30 days of delivery. Items must be unused and in original packaging.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer wholesale?</h3>
              <p>Yes, we work with retailers worldwide. Please contact our wholesale team for more information.</p>
            </div>
          </div>
        </section>
      </div>

      {showMap && (
        <div className="map-modal-overlay" onClick={() => setShowMap(false)}>
          <div className="map-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowMap(false)}>×</button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.119244243697!2d-8.008075684885272!3d31.631044981330444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d973333db%3A0x570a8ff385b806ef!2sMedina%2C%20Marrakesh%2C%20Morocco!5e0!3m2!1sen!2sus!4v1627309876543!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}

    </div>
  );
};

export default ContactPage;