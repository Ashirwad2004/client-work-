import React, { useState, useEffect } from 'react';
import './Services.css';
import service1 from '../../assets/images/service1.png';
import service2 from '../../assets/images/service2.png';
import service3 from '../../assets/images/service3.png';
import video1 from '../../assets/videos/food.mp4';
import video2 from '../../assets/videos/product.mp4';
import video3 from '../../assets/videos/shortfilm1.mp4';

function Services() {
  const services = [
    {
      id: '01',
      title: 'Strategy',
      video: video1,
      // image: service1,
      desc: 'We craft digital experiences that elevate brands and engage audiences. Our strategic approach ensures every project aligns with your business goals.',
    },
    {
      id: '02',
      title: 'Design',
      video: video2,
      // image: service2,
      desc: 'Our design process combines aesthetics with usability, ensuring each interaction leaves a lasting impression.',
    },
    {
      id: '03',
      title: 'Development',
      video: video3,
      // image: service3,
      desc: 'From prototypes to final products, we turn ideas into fast, functional digital solutions.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 8000);
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

        {services.map((s, index) => {
            let cardClass = "carousel-card";
            if (index === activeIndex) cardClass += " active";
            else if (index === activeIndex - 1 || (activeIndex === 0 && index === services.length - 1)) {
              cardClass += " prev";
            }

            return (
              <div key={index} className={cardClass}>
                {/* <img src={s.image} alt={s.title} className="service-img" /> */}
                <video className="service-video" autoPlay loop muted>
                  <source src={s.video} type="video/mp4"></source>
                </video>
              </div>
            );
          })}
        </div>
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