import {useEffect} from 'react';
import './Gallery.css';

import video1 from '../../assets/videos/shortfilm1.mp4';
import video2 from '../../assets/videos/food.mp4';
import video3 from '../../assets/videos/product.mp4';
import video4 from '../../assets/videos/mountain.mp4';
import video5 from '../../assets/videos/jungle.mp4';
import video6 from '../../assets/videos/sea.mp4';

const mediaItems = [
  { src: video1 },
  { src: video2 },
  { src: video3 },
  { src: video4 },
  { src: video5 },
  { src: video6 },
];

const Gallery = () => {
  useEffect(() => {
  const cards = document.querySelectorAll('.gallery-card');

  cards.forEach(card => {
    const video = card.querySelector('video');
    card.addEventListener('mouseenter', () => video.play());
    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });

  return () => {
    cards.forEach(card => {
      const video = card.querySelector('video');
      card.removeEventListener('mouseenter', () => video.play());
      card.removeEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    });
  };
}, []);

  return (
    <section className="gallery-section py-5 px-3 px-md-5">
      <div className="container-fluid">
        <h2 className="text-center mb-5 fw-bold">Our Projects</h2>
        <div className="row g-4">
          {mediaItems.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <div className="gallery-card shadow rounded-4 overflow-hidden">
                <video
                  src={item.src}
                  autoplay
                  loop
                  muted
                  playsInline
                  className="w-100 h-100 gallery-video"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
