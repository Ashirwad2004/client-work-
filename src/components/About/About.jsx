import React from 'react';

function About () {
return (
    <section className="about-section py-5" id="about">
    <div className="container">
      <h2 className="text-center mb-4">About Me</h2>
      <div className="row">
        <div className="col-md-6">
          <img src="/assets/images/about.jpg" className="img-fluid rounded" alt="About" />
        </div>
        <div className="col-md-6">
          <p>Hello! I'm a passionate photographer and videographer capturing the essence of life through my lens. My work spans across weddings, events, portraits, and artistic compositions.</p>
        </div>
      </div>
    </div>
  </section>
    )

}

export default About;
