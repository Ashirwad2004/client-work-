import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <div className='footer-wrapper'>
      <footer className="footer-container text-white p-5">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-md-4 mb-4">
              <p className="footer-tag mb-2">STAY CONNECTED.</p>
              <h2 className="footer-email">HI@MAGNETTO.COM</h2>
              <p className="footer-description">
                At Magnetto, we break boundaries to craft designs that stand out and deliver results.
                We blend creativity with strategy, turning bold ideas into digital experiences that
                captivate and inspire.
              </p>
              <p className="footer-credit">Made with Love by <span className="footer-brand">FutureThings.</span></p>
            </div>

            <div className="col-md-4 mb-4">
              <ul className="list-unstyled footer-links">
                <li>Home</li>
                <li>About</li>
                <li>Projects <sup>(08)</sup></li>
                <li>Journal <sup>(05)</sup></li>
                <li>Contact us</li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <p className="footer-social-title">Social Media</p>
              <div className="footer-icons d-flex gap-3">
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-youtube"></i>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <h1 className="footer-logo">Magnetto</h1>
            <p className="footer-copy mt-2">©2025 MAGNETTO Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )

}

export default Footer;
