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
      desc: 'We craft digital experiences that elevate brands and engage audiences. Our strategic approach ensures every project aligns with your business goals.',
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
  // const extendedServices = [...services, services[0]];
  // const [displayIndex, setDisplayIndex] = useState(0);
  // const [isTransitioning, setIsTransitioning] = useState(true);



  // const realIndex = displayIndex % services.length;

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDisplayIndex((prev) => prev + 1);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   if (displayIndex === services.length) {
  //     // Wait for transition to finish
  //     const timeout = setTimeout(() => {
  //       setIsTransitioning(false);         // disable transition
  //       setDisplayIndex(0);                // jump back to real first
  //     }, 600); // match your CSS transition time

  //     return () => clearTimeout(timeout);
  //   } else {
  //     setIsTransitioning(true); // restore transition
  //   }
  // }, [displayIndex, services.length]);



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

        {services.map((s, index) => {
            let cardClass = "carousel-card";
            if (index === activeIndex) cardClass += " active";
            else if (index === activeIndex - 1 || (activeIndex === 0 && index === services.length - 1)) {
              cardClass += " prev";
            }

            return (
              <div key={index} className={cardClass}>
                <img src={s.image} alt={s.title} className="service-img" />
              </div>
            );
          })}
        </div>

        {/* <div
          className={`carousel-track ${!isTransitioning ? 'no-transition' : ''}`}
          style={{ transform: `translateX(-${displayIndex * 100}%)` }}
        >
          {[...services, services[0]].map((s, index) => (
            <div key={index} className="carousel-card">
              <img src={s.image} alt={s.title} className="service-img" />
            </div>
          ))}
        </div> */}
      </div>

      <div className="service-label mt-3">
        <span>{services[activeIndex].id}</span> {services[activeIndex].title}
      </div>

      <p className="service-description mt-4 px-4">
        {services[activeIndex].desc}
      </p>
    </section>
  )
};

export default Services;