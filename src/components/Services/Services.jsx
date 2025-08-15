import React, { useState, useEffect, useRef } from 'react';
import './Services.css';
import shortfilm from '../../assets/videos/shortfilm.mp4';
import wedding from '../../assets/videos/wedding.mp4';
import food from '../../assets/videos/foodProduct.mp4';
import product from '../../assets/videos/product.mp4';
import documentary from '../../assets/videos/documentary.mp4';


function Services() {
  const services = [
    {
      id: '01',
      file: shortfilm,
      title: 'Short Films',
      subheading: 'Memories fade, Our films won\'t.',
      desc: 'We don’t just record.We sculpt memories with emotion,tone and time.'
    },
    {
      id: '02',
      file: wedding,
      title: 'Wedding',
      subheading: 'Filming the silence between heart beats.',
      desc: 'Where every frame holds a feeling, not just a face.',
      comingSoon: true
    },
    {
      id: '03',
      file: product,
      title: 'Products',
      subheading: 'Show it right, and it sells itself.',
      desc: 'Anything can be sold at desired price if we know how to present it.',
      comingSoon: true
    },
    {
      id: '04',
      file: food,
      title: 'Food',
      subheading: 'Let them taste it visually.',
      desc: 'Crave-worthy content that makes mouths water and Brands grow.',
    },
    {
      id: '05',
      file: documentary,
      title: 'Documentary',
      subheading: 'Turning facts into timeless cinema.',
      desc: 'We blend raw reality with refined storytelling to make sure every moment means something.',
      comingSoon: true
    }
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const serviceTitleRef = useRef(null);
  const serviceSubheadingRef = useRef(null);
  const serviceDescRef = useRef(null);
  const trackRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const index = (newIndex + services.length) % services.length;
    setCurrentIndex(index);

    // Animate info text
    if (serviceTitleRef.current && serviceDescRef.current && serviceSubheadingRef.current) {
      serviceTitleRef.current.style.opacity = '0';
      serviceDescRef.current.style.opacity = '0';
      serviceSubheadingRef.current.style.opacity = '0';

      setTimeout(() => {
        serviceTitleRef.current.style.opacity = '1';
        serviceDescRef.current.style.opacity = '1';
        serviceSubheadingRef.current.style.opacity = '1';
      }, 300);
    }

    setTimeout(() => setIsAnimating(false), 800);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') updateCarousel(currentIndex + 1);
      if (e.key === 'ArrowLeft') updateCarousel(currentIndex - 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  // Touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      updateCarousel(currentIndex + 1);
    }

    if (touchStart - touchEnd < -100) {
      // Swipe right
      updateCarousel(currentIndex - 1);
    }
  };

  return (
    <section className="services-section">
      <h1 className="services-title">SERVICES</h1>

      <div className="services-carousel">
        <button
          className="nav-arrow left"
          onClick={() => updateCarousel(currentIndex - 1)}
          aria-label="Previous service"
        >
          ‹
        </button>

        <div
          className="carousel-track"
          ref={trackRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {services.map((service, index) => {
            const offset = (index - currentIndex + services.length) % services.length;

            let cardClass = 'service-card';
            if (offset === 0) cardClass += ' center';
            else if (offset === 1) cardClass += ' right-1';
            else if (offset === 2) cardClass += ' right-2';
            else if (offset === services.length - 1) cardClass += ' left-1';
            else if (offset === services.length - 2) cardClass += ' left-2';
            else cardClass += ' hidden';

            return (
              <div
                key={index}
                className={cardClass}
                onClick={() => updateCarousel(index)}
              >
                {/* <video
                  src={service.file}
                  muted
                  autoPlay
                  loop
                  playsInline
                  aria-hidden="true"
                /> */}

                <div className="video-wrapper">
                  <video
                    src={service.file}
                    muted
                    autoPlay
                    loop
                    playsInline
                    aria-hidden="true"
                    className={service.comingSoon ? "blurred-video" : ""}
                  />
                  {service.comingSoon && (
                    <div className="coming-soon-overlay">Coming Soon</div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        <button
          className="nav-arrow right"
          onClick={() => updateCarousel(currentIndex + 1)}
          aria-label="Next service"
        >
          ›
        </button>
      </div>



      <div className="service-info">
        <div className="service-name" ref={serviceTitleRef}>
          {services[currentIndex].title}
        </div>
        <div ref={serviceSubheadingRef} className="service-subheading">
          {services[currentIndex].subheading}
        </div>
        <p className="service-description" ref={serviceDescRef}>
          {services[currentIndex].desc}
        </p>
      </div>
    </section>
  );
}

export default Services;