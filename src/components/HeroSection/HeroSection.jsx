import React from 'react';
import './HeroSection.css';
import heroImage from '../../assets/images/hero-image.png';

function HeroSection() {
  return (
    <section className="custom-hero-wrapper d-flex align-items-center justify-content-center">
      <div className="hero-container container-fluid">
        <div className="row g-4 align-items-center">
          <div className="col-lg-4 col-md-6 text-md-start text-center">
            <h1 className="hero-title">CINEPTUAL</h1>
            <p className="hero-subtitle">DESIGN STUDIO · AHMEDABAD</p>
          </div>

          <div className="col-lg-4 col-md-12 text-center">
            <img src={heroImage} alt="Hero" className="img-fluid rounded-4 hero-img" />
          </div>

          <div className="col-lg-4 col-md-6 text-md-start text-center">
            <p className="hero-description">
              At Magnetto, we break boundaries to craft designs that stand out and deliver results.
              We blend creativity with strategy, turning bold ideas into digital experiences that captivate and inspire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
