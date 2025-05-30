import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (

  <div className="custom-navbar fixed-bottom d-flex justify-content-center px-3">
      <div className="navbar-inner d-flex align-items-center">
        <img src="/images/logo.png" alt="Profile" className="profile-img me-3" />

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
