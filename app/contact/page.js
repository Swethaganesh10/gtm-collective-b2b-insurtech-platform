'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      formData.append('access_key', '253c890e-514b-49aa-a72d-21cdf07dc7a9');
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav id="navbar" className="scrolled">
        <div className="nav-container">
          <Link href="/" className="logo">
            <img src="/logo.jpg" alt="GTM Collective" className="logo-img" />
          </Link>
          <div className="nav-links">
            <Link href="/" style={{ color: '#00B89F', fontWeight: 700 }}>← Back to Home</Link>
          </div>
        </div>
      </nav>

      {/* Contact Page - COMPACT LAYOUT */}
      <section className="contact-page-compact">
        <div className="container">
          <div className="contact-compact-grid">
            
            {/* Left Side - Contact Info */}
            <div className="contact-info-compact">
              <h1>Get in Touch</h1>
              <p>Ready to transform your GTM strategy? Reach out to Kerry and let's start the conversation.</p>
              
              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:kerry@gtm-collective.com">kerry@gtm-collective.com</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/kerrymacca" target="_blank" rel="noopener noreferrer">Connect with Kerry</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-compact">
              <div className="form-card-compact">
                <h3>Send an Inquiry</h3>
                <p className="form-subtitle-compact">Fill out the form and We will respond within 24 hours</p>
                
                {formStatus === 'success' && (
                  <div className="form-success">
                    ✓ Your inquiry has been sent! 
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="form-error">
                    ✕ Something went wrong. Please try emailing directly.
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Company</label>
                      <input 
                        type="text" 
                        name="company" 
                        placeholder="Company (Optional)" 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Phone</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Phone (Optional)" 
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Subject *</label>
                    <input 
                      type="text" 
                      name="subject" 
                      placeholder="What's this about?" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label>Message *</label>
                    <textarea 
                      name="message" 
                      placeholder="Tell Kerry about your GTM challenges..." 
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="form-submit-button"
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? 'SENDING...' : '📧 SEND MESSAGE'}
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Book a Call - BOTTOM CTA */}
          <div className="bottom-cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Schedule a 30-minute consultation to discuss your GTM strategy and explore how Kerry can help accelerate your growth.</p>
            <a 
              href="https://calendly.com/kerry-gtm-collective/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="calendly-cta-button"
            >
              📅 Book Your Call with Kerry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}