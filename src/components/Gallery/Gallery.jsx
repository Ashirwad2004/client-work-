import { useEffect } from 'react';
import './Gallery.css';

const mediaItems = [
  { videoID: 'c-OhJTI-k68' },
  { videoID: '271y_tf91FQ' },
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
        <h2 className="text-center mb-5 fw-bold heading">Our Projects</h2>
        <div className="row g-4">
          {mediaItems.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <div className="gallery-card shadow rounded-4 overflow-hidden">
                {/* <video
                  src={item.src}
                  loop
                  muted
                  playsInline
                  className="w-100 h-100 gallery-video"
                /> */}

                <a href={`https://www.youtube.com/watch?v=${item.videoID}`} target="_blank">
                  <img src={`https://img.youtube.com/vi/${item.videoID}/maxresdefault.jpg`}
                    alt="Video Title" className="youtube-thumbnail" />
                </a>

{/*                <iframe width="560" height="315"
                  src={`https://www.youtube.com/embed/${item.videoID}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
                </iframe> */}


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
