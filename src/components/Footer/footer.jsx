import "./footer.css"

export let Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>FlashBackQs</h3>
          <p>Your ultimate destination for previous year question papers.   </p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#browse">Browse Papers</a>
          <a href="#about">About Us</a>
        </div>
        
        <div className="footer-section">
          <h3>Support</h3>
          <a href="#help">Help Center</a>
          <a href="#contact">Contact Us</a> 
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-text">
          © 2025 FlashBackQs. All rights reserved.
        </div>
      </div>
    </footer>
  )
}