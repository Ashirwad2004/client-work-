import React, { useEffect, useRef, useState } from 'react';
import './HeroSection.css';
import heroImage from '../../assets/images/home-imgv1.png';

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="custom-hero-wrapper" ref={heroRef}>
      <div className="hero-container container-fluid">
        <div className="row g-4 d-flex justify-content-center align-items-center">
          <div className={`col-lg-4 col-md-6 first-section text-center ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h1 className="hero-title">
              <span className="hero-title-main">CINEPTUAL</span>
              <span className="hero-title-accent">.</span>
            </h1>
            <p className="hero-subtitle">From Unseen to Scene.</p>
          </div>  

          <div className={`col-lg-4 col-md-12 text-start align-items-start ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="hero-image-wrapper">
              <img 
                src={heroImage} 
                alt="Cineptual - Creative Video Production" 
                className="img-fluid hero-img" 
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="hero-image-overlay"></div>
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 text-md-start text-center ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <p className="hero-description">
              At Cineptual, we break boundaries to transform the ordinary into extraordinary cinematography. We blend creativity with strategy to turn bold ideas into visual stories that delivers result.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary hero-btn">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>
    </section>
  );
}

export default HeroSection;
