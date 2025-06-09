import React, { useState, useEffect } from 'react';
import './Services.css';
import service1 from '../../assets/images/service1.png';
import service2 from '../../assets/images/service2.png';
import service3 from '../../assets/images/service3.png';
import video1 from '../../assets/videos/shortfilm1.mp4';
import video2 from '../../assets/videos/food.mp4';
import video3 from '../../assets/videos/product.mp4';
import video4 from '../../assets/videos/mountain.mp4';

function Services() {
  const services = [
    {
      id: '01',
      title: 'Short Films',
      subheading: 'Memories fade, Our films wont.',
      video: video1,
      // image: service1,
      desc: 'We don’t just record.We sculpt memories with emotion,tone and time.',
    },
    {
      id: '02',
      title: 'Wedding',
      subheading: 'Filming the silence between heart beats.',
      video: video2,
      // image: service2,
      desc: 'Where every frame holds a feeling, not just a face.',
    },
    {
      id: '03',
      title: 'Products',
      subheading: 'Show it right, and it sells itself.',
      video: video3,
      // image: service3,
      desc: 'Anything can be sold at desired price if we know how to present it.',
    },
    {
      id: '04',
      title: 'Food',
      subheading: 'Let them taste it visually.',
      video: video4,
      // image: service1,
      desc: 'Crave-worthy content that makes mouths water and Brands grow.',
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prev) => prev + 1);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   if (activeIndex === services.length) {
  //     const timeout = setTimeout(() => {
  //       setActiveIndex(0);
  //       document.querySelector('.carousel-track').style.transition = 'none';
  //       document.querySelector('.carousel-track').style.transform = `translateX(0%)`;

  //       // Trigger reflow to restart transition
  //       void document.querySelector('.carousel-track').offsetWidth;
  //       document.querySelector('.carousel-track').style.transition = 'transform 1s ease-in-out';
  //     }, 1000);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [activeIndex, services.length]);


  return (

    <section className="services-section text-center mt-1">
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

          {/* {[...services, services[0]].map((s, index) => {
            return (
              <div key={index} className="carousel-card">
                <video className="service-video" autoPlay loop muted>
                  <source src={s.video} type="video/mp4"></source>
                </video>
              </div>
            );
          })} */}

        </div>
      </div>

      <div className="service-label mt-3">
        {services[activeIndex].title}
      </div>

      <div className="service-subheading mt-3">
        {services[activeIndex].subheading}
      </div>

      <p className="service-description mt-2 px-4">
        {services[activeIndex].desc}
      </p>
    </section>
  )
};

export default Services;