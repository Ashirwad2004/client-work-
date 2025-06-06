import React from 'react';
import './Navbar.css';
import logo from '../../assets/videos/scaled_logov1.mp4'; // Adjust the path as necessary

function Navbar() {
  return (

    <div className="custom-navbar fixed-bottom d-flex justify-content-center px-3">
      <div className="navbar-inner d-flex align-items-center">
        {/* <img src="/images/logo.png" alt="Profile" className="profile-img me-3" /> */}
        <video className="profile-img me-3" autoPlay loop muted playsInline>
          <source src={logo} type="video/mp4"></source>
        </video>

        <nav className="nav-links d-flex flex-nowrap overflow-auto">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Projects</a>
          <a href="#" className="nav-link">Journal</a>
        </nav>

        <button className="btn contact-btn ms-3">Contact +</button>
      </div>
    </div>
  )
};

export default Navbar;
