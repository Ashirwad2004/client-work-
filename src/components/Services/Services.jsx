import React, { useState, useEffect, useRef } from 'react';
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


// import shortfilm from '../../assets/videos/shortfilm1.mp4';
// import wedding from '../../assets/videos/birds.mp4';
// import food from '../../assets/videos/food.mp4';
// import product from '../../assets/videos/shortfilm2.mp4';
// import mountain from '../../assets/videos/mountain.mp4';


// function Services() {
//   const services = [
//     {
//       file: shortfilm,
//       name: 'Short Film',
//       description: 'Memories fade, Our films won\'t. We don\'t just record. We sculpt memories with emotion, tone, and time.'
//     },
//     {
//       file: wedding,
//       name: 'Wedding',
//       description: 'Filming the silence between heartbeats. Where every frame holds a feeling, not just a face.'
//     },
//     {
//       file: food,
//       name: 'Food',
//       description: 'Let them taste it visually. Crave-worthy content that makes mouths water and brands grow.'
//     },
//     {
//       file: product,
//       name: 'Product',
//       description: 'Show it right, and it sells itself. Anything can be sold at the desired price if we know how to present it.'
//     },
//     {
//       file: mountain,
//       name: 'Landscape',
//       description: 'Elevate the soul through serene visuals. Where nature\'s majesty meets cinematic grace.'
//     }
//   ];
  

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const serviceNameRef = useRef(null);
//   const serviceDescRef = useRef(null);
//   const trackRef = useRef(null);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);

//   const updateCarousel = (newIndex) => {
//     if (isAnimating) return;
//     setIsAnimating(true);
    
//     const index = (newIndex + services.length) % services.length;
//     setCurrentIndex(index);
    
//     // Animate info text
//     if (serviceNameRef.current && serviceDescRef.current) {
//       serviceNameRef.current.style.opacity = '0';
//       serviceDescRef.current.style.opacity = '0';
      
//       setTimeout(() => {
//         serviceNameRef.current.style.opacity = '1';
//         serviceDescRef.current.style.opacity = '1';
//       }, 300);
//     }

//     setTimeout(() => setIsAnimating(false), 800);
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'ArrowRight') updateCarousel(currentIndex + 1);
//       if (e.key === 'ArrowLeft') updateCarousel(currentIndex - 1);
//     };
    
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [currentIndex]);

//   // Touch events for swipe
//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (touchStart - touchEnd > 100) {
//       // Swipe left
//       updateCarousel(currentIndex + 1);
//     }

//     if (touchStart - touchEnd < -100) {
//       // Swipe right
//       updateCarousel(currentIndex - 1);
//     }
//   };

//   // Auto-advance (optional)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       updateCarousel(currentIndex + 1);
//     }, 5000);
    
//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   return (
//     <section className="services-section">
//       <h1 className="services-title">SERVICES</h1>
      
//       <div className="services-carousel">
//         <button 
//           className="nav-arrow left" 
//           onClick={() => updateCarousel(currentIndex - 1)}
//           aria-label="Previous service"
//         >
//           ‹
//         </button>
        
//         <div 
//           className="carousel-track" 
//           ref={trackRef}
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         >
//           {services.map((service, index) => {
//             const offset = (index - currentIndex + services.length) % services.length;
            
//             let cardClass = 'service-card';
//             if (offset === 0) cardClass += ' center';
//             else if (offset === 1) cardClass += ' right-1';
//             else if (offset === 2) cardClass += ' right-2';
//             else if (offset === services.length - 1) cardClass += ' left-1';
//             else if (offset === services.length - 2) cardClass += ' left-2';
//             else cardClass += ' hidden';
            
//             return (
//               <div 
//                 key={index}
//                 className={cardClass}
//                 onClick={() => updateCarousel(index)}
//               >
//                 <video 
//                   src={service.file} 
//                   muted 
//                   autoPlay 
//                   loop 
//                   playsInline
//                   aria-hidden="true"
//                 />
//               </div>
//             );
//           })}
//         </div>
        
//         <button 
//           className="nav-arrow right" 
//           onClick={() => updateCarousel(currentIndex + 1)}
//           aria-label="Next service"
//         >
//           ›
//         </button>
//       </div>
      
//       <div className="service-info">
//         <h2 className="service-name" ref={serviceNameRef}>
//           {services[currentIndex].name}
//         </h2>
//         <p className="service-description" ref={serviceDescRef}>
//           {services[currentIndex].description}
//         </p>
//       </div>
      
//       {/* <div className="dots-container">
//         {services.map((_, index) => (
//           <button
//             key={index}
//             className={`dot ${index === currentIndex ? 'active' : ''}`}
//             onClick={() => updateCarousel(index)}
//             aria-label={`Go to service ${index + 1}`}
//           />
//         ))}
//       </div> */}
//     </section>
//   );
// }

// export default Services;