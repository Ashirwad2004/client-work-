import React from "react";
import "./ReviewSection.css";

const reviews = [
  { name: "Founder of Micro Cafe", comment: "Your work is amazing and appreciated among all my customers and planning a few more things to work with you soon" },
  { name: "Founder & CEO of Ido design Solutions", comment: "Background, music choice, editing, very mature. Very well shot." },
  { name: "Cynthia Adams", comment: "Exceeded expectations. Recommend!" },
  { name: "David Wilson", comment: "Room for improvement." },
  // { name: "Emily Turner", comment: "Great experience overall." },
  // { name: "Frank Martin", comment: "Quick and reliable!" },
  // { name: "Grace Cooper", comment: "Customer support was excellent!" },
];

const ReviewSection = () => {
  return (
    <section className="review-section py-4">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...reviews, ...reviews].map((review, index) => (
            <div className="card review-card" key={index}>
              <div className="card-body">
                <h5 className="card-title">{review.name}</h5>
                <p className="card-text">"{review.comment}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
