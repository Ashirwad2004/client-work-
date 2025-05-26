import React from 'react';
// import './Gallery.css';

function Gallery () {
  const images = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg',
    '/images/photo4.jpg',
    '/images/photo5.jpg',
  ];

  return (
    <section className="gallery-section py-5 bg-light" id="gallery">
      <div className="container">
        <h2 className="text-center mb-4">Portfolio</h2>
        <div className="row">
          {images.map((src, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <img src={src} alt={`Gallery ${idx}`} className="img-fluid gallery-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
