import { useState } from "react"
import "./navbar.css"

export let Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className='navbar-container'>
      <div className="navbar-logo"> 
        <span className="logo-text">
          Flash<span className="logo-back">Back</span><span className="logo-qs">Qs</span>
        </span>
      </div>
      
      <div className={`navbar-menu-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <a href="#home" className="home-menu">Home</a>
        <a href="#subjects" className="subjects-menu">Subjects</a>
        <a href="#browse" className="browse-menu">Browse Papers</a>
        <a href="#contact" className="contact-menu">Contact Us</a>
      </div>
      
      <div className="navbar-search">
        🔍 Search
      </div>
      
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}
