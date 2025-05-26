import React from 'react';
// import './Services.css';

function Services () {
return (

    <section className="services-section py-5 bg-white" id="services">
    <div className="container text-center">
      <h2 className="mb-5">What We Do</h2>
      <div className="row">
        <div className="col-md-4">
          <h5>Branding</h5>
          <p>We build strong, lasting identities that connect with your audience.</p>
        </div>
        <div className="col-md-4">
          <h5>Motion</h5>
          <p>Animations and motion graphics that bring ideas to life.</p>
        </div>
        <div className="col-md-4">
          <h5>Web Design</h5>
          <p>Modern, responsive websites that look great on every device.</p>
        </div>
      </div>
    </div>
  </section>
)
};

export default Services;