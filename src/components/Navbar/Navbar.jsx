import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "../../assets/images/logo.jpg";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className={`custom-navbar fixed-bottom d-flex justify-content-center px-3 ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="navbar-inner d-flex align-items-center">
          <div className="profile-img-wrapper me-3">
            <Link to="/#home" className="nav-link" onClick={handleLinkClick}>
              <img src={logo} alt="Cineptual Logo" className="profile-img-inner" />
            </Link>
          </div>

          <nav className={`nav-links d-flex flex-nowrap overflow-auto ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link 
              to="/#home" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link 
              to="/#services" 
              className='nav-link'
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Projects
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              About
            </Link>
          </nav>

          <Link 
            to="/#contact" 
            className="btn contact-btn ms-3"
            onClick={handleLinkClick}
          >
            Contact
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle d-lg-none"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>
    </>
  )
};

export default Navbar;
