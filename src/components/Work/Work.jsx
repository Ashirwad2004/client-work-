import React from 'react';
// import './Work.css';

const Work = () => {
  const works = [
    { img: '/images/photo1.jpg', title: 'Project One' },
    { img: '/images/photo2.jpg', title: 'Project Two' },
    { img: '/images/photo3.jpg', title: 'Project Three' }
  ];

  return (
    <section className="work-section py-5 bg-light" id="work">
      <div className="container">
        <h2 className="text-center mb-5">Our Work</h2>
        <div className="row">
          {works.map((work, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="work-card">
                <img src={work.img} className="img-fluid rounded" alt={work.title} />
                <h5 className="mt-2 text-center">{work.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;