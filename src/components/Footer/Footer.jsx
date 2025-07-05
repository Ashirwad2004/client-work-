import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <div className='footer-wrapper'>
      <footer className="footer-container text-white p-5">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-md-4 mb-4">
              <p className="footer-tag mb-2">STAY CONNECTED.</p>
              <h2 className="footer-email">cineptual1@gmail.com</h2>
              <p className="footer-description">
                From the first shot to the last impression. Cineptual captures it all. <br /> Are you ready to take the Action? We're ready for Direction.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <ul className="list-unstyled footer-links align-items-left text-center">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <p className="footer-social-title">Social Media</p>
              <div className="footer-icons d-flex gap-3">
                {/* <i className="bi bi-twitter-x"></i> */}
                <a href="https://www.instagram.com/cineptual/" target='_blank' rel='noopener noreferrer'>
                  <i className="bi bi-instagram"></i>
                </a>
                {/* <i className="bi bi-linkedin"></i> */}
                <a href="https://www.youtube.com/@cineptual" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="https://wa.me/917984359268" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href="https://t.me/+CRl89w3ftQ00YTdl" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-telegram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            {/* <h1 className="footer-logo">Cineptual</h1> */}
            <p className="footer-copy mb-5">©2025 Cineptual. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )

}

export default Footer;
