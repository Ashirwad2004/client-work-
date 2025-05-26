import React from 'react';
import "./Contact.css";
import contactBg from '../../assets/images/contact-bg.png';


function Contact() {
  return (

    <section className="contact-wrapper d-flex align-items-center justify-content-center text-white">
      <div className="overlay"></div>
      <img src={contactBg} alt="Background" className="bg-img" />

      <div className="container position-relative z-2 px-4">
        <div className="row align-items-center min-vh-100">
          {/* Left Content */}
          <div className="col-lg-6 text-start">
            <h1 className="display-1 fw-bold contact-title">GET IN<br />TOUCH</h1>
            <p className="lead mt-4 contact-description">
              Have a project in mind? Whether you're launching a brand, designing a product, or elevating your digital presence,
              we're here to bring your vision to life.
            </p>
          </div>

          {/* Right Form */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="contact-form p-4 p-md-5 rounded-5">
              <h6 className="text-uppercase small fw-bold mb-4">Contact Us</h6>
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
                  <button className="btn btn-light w-100 rounded-pill fw-bold">SUBMIT</button>
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