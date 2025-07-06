import React, { useState } from 'react';
import './contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Have questions about FlashBackQs? Need help finding question papers? We're here to help!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email Support</h3>
            <p>For technical issues and general inquiries</p>
            <a href="mailto:support@flashbackqs.com" className="contact-link">
              support@flashbackqs.com
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🏫</div>
            <h3>University</h3>
            <p className="contact-address">
              DY Patil International University<br />
              Akurdi, Pune - 411044<br />
              Maharashtra, India
            </p>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="form-card">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="technical-issue">Technical Issue</option>
                  <option value="missing-papers">Missing Question Papers</option>
                  <option value="wrong-content">Wrong Content</option>
                  <option value="suggestion">Suggestion/Feedback</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Describe your issue or question in detail..."
                />
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {submitStatus === 'success' && (
              <div className="success-message">
                ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How do I download question papers?</h3>
            <p>Click on the download button next to any question paper. You'll need to be logged in to access the files.</p>
          </div>
          <div className="faq-item">
            <h3>Are the question papers free?</h3>
            <p>Yes, all question papers on FlashBackQs are completely free for DYPIU students.</p>
          </div>
          <div className="faq-item">
            <h3>Can I request missing question papers?</h3>
            <p>Absolutely! Use the contact form above or email us to request any missing papers from previous years.</p>
          </div>
          <div className="faq-item">
            <h3>How often are new papers added?</h3>
            <p>We update the database regularly with new question papers as they become available from the university.</p>
          </div>
        </div>
      </div>
    </section>
  );
}; 