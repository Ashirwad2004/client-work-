import React from 'react';
import "./Contact.css";
import contactBg from '../../assets/images/contactus-bg.png';


function Contact() {
  return (

    <section className="contact-wrapper d-flex align-items-center justify-content-center text-white">

      <div className="container position-relative z-2 px-4">
        <div className="row align-items-center min-vh-100">
          {/* Left Content */}
          <div className="col-lg-6 text-start">
            <h1 className="display-1 contact-title">LET'S MAKE MAGIC TOGETHER</h1>
            <p className="mt-4 contact-description">
              Whether you're looking to bring your brand to life, capture the magic of your wedding day, tell a compelling story through short films, or showcase your culinary creations. We're here to help.
            </p>
          </div>

          {/* Right Form */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="contact-form">
              <h6 className="text-uppercase small fw-bold mb-4 sub-heading">Tell us your Story...</h6>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="col-md-6">
                  <input type="tel" className="form-control" placeholder="Phone no." />
                </div>
                <div className="col-12">
                  <button className="btn btn-light w-100 rounded-pill form-button fw-bold">SUBMIT</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
};

export default Contact;