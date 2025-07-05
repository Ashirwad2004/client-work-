import React from 'react';
import './Navbar.css';
// import logo from '../../assets/videos/Scaled_logo_without_txt_v2.mp4'; // Adjust the path as necessary
import logo from "../../assets/images/logo-another.png";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <>

      <div className="custom-navbar fixed-bottom d-flex justify-content-center px-3">
        <div className="navbar-inner d-flex align-items-center">
          <div className="profile-img-wrapper me-3">
            <img src={logo} alt="Profile" className="profile-img-inner" />
          </div>

          <nav className="nav-links d-flex flex-nowrap overflow-auto">
            <HashLink smooth to="/#home" className="nav-link">Home</HashLink>
            <HashLink smooth to="/#services" className='nav-link'>Services</HashLink>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
          </nav>

          <HashLink smooth to="/#contact" className="btn contact-btn ms-3">Contact</HashLink>
        </div>
      </div>
    </>
  )
};

export default Navbar;
