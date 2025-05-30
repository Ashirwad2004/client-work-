import React, { useState, useEffect } from 'react';
import './Services.css';
import service1 from '../../assets/images/service1.png';
import service2 from '../../assets/images/service2.png';
import service3 from '../../assets/images/service3.png';

function Services() {
  const services = [
    {
      id: '01',
      title: 'Strategy',
      image: service1,
      desc: 'We craft digital experiences that elevate brands and engage audiences. Our services blend creativity with strategy, ensuring every design is not just visual but results-driven.',
    },
    {
      id: '02',
      title: 'Design',
      image: service2,
      desc: 'Our design process combines aesthetics with usability, ensuring each interaction leaves a lasting impression.',
    },
    {
      id: '03',
      title: 'Development',
      image: service3,
      desc: 'From prototypes to final products, we turn ideas into fast, functional digital solutions.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (

    <section className="services-section text-center">
      <h2 className="services-title">SERVICES</h2>

      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {services.map((s, index) => (
            <div key={index} className="carousel-card">
              <img src={s.image} alt={s.title} className="service-img" />
            </div>
          ))}
        </div>
      </div>

      <div className="service-label mt-3">
        <span>{services[activeIndex].id}</span> {services[activeIndex].title}
      </div>

      <p className="service-description mt-4 px-4">
        We craft digital experiences that elevate brands and engage audiences. Our services blend creativity with strategy, ensuring every design is not just visual but results-driven.
      </p>
    </section>
  )
};

export default Services;