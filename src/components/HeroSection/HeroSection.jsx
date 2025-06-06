import React from 'react';
import './HeroSection.css';
import heroImage from '../../assets/images/home-imgv1.png';

function HeroSection() {
  return (
    <section className="custom-hero-wrapper d-flex align-items-center justify-content-center">
      <div className="hero-container container-fluid">
        <div className="row g-4 align-items-center">
          <div className="col-lg-4 col-md-6 text-md-start text-center">
            <h1 className="hero-title">CINEPTUAL</h1>
            <p className="hero-subtitle">You bring the moments. <br /> We bring the magic.</p>
          </div>

          <div className="col-lg-4 col-md-12 text-start align-items-start">
            <img src={heroImage} alt="Hero" className="img-fluid hero-img" />
          </div>

          <div className="col-lg-4 col-md-6 text-md-start text-center">
            <p className="hero-description">
              At Cineptual, we break boundaries to transform the ordinary into extraordinary cinematography. We blend creativity with strategy to turn bold ideas into visual stories that delivers result.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
