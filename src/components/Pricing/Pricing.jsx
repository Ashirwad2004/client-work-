import React from "react";
import "./Pricing.css";

function Pricing() {
  const plans = [
    {
      title: "Basic",
      price: "₹5,000",
      description: "Perfect for small events or casual shoots.",
      features: [
        "Up to 2 hours coverage",
        "50+ Edited Photos",
        "Online Gallery Delivery",
        "1 Location"
      ]
    },
    {
      title: "Standard",
      price: "₹12,000",
      description: "Best for weddings, birthdays, or corporate shoots.",
      features: [
        "Up to 6 hours coverage",
        "150+ Edited Photos",
        "Online & USB Delivery",
        "2 Locations"
      ]
    },
    {
      title: "Premium",
      price: "₹20,000",
      description: "For full-day events and premium productions.",
      features: [
        "Full-day coverage",
        "300+ Edited Photos + Video",
        "Premium Album & USB Delivery",
        "Multiple Locations"
      ]
    }
  ];

  return (
    <section className="pricing-section py-5" id="pricing">
      <div className="container">
        <h2 className="text-center mb-4 pricing-title">Pricing Plans</h2>
        <div className="row">
          {plans.map((plan, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card pricing-card shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title pricing-plan">{plan.title}</h5>
                  <h2 className="pricing-price">{plan.price}</h2>
                  <p className="pricing-desc">{plan.description}</p>
                  <ul className="list-unstyled mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="pricing-feature">{feature}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn btn-primary pricing-btn">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
