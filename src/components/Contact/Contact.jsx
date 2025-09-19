import React, { useState, useRef, useEffect } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectDescription: "",
    duration: "",
    budget: "",
    deadline: "",
    file: null
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const [showToast, setShowToast] = useState(false);
  const toastRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFormData((prev) => ({
        ...prev,
        file: files[0]
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbzos3PqgRQTt9U4TwnmKA8-4ICSmEYh2xcJbXNgXzFNt2H_N8ILyuoX_-rba4pU_17_/exec";

    const payload = { ...formData };
    delete payload.file; // Remove file if you're not sending it via base64 or multipart

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
         },
        body: JSON.stringify(payload)
      });

      // Show success toast
      setShowToast(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectDescription: "",
        duration: "",
        budget: "",
        deadline: "",
        file: null
      });

      // Hide toast after 4 seconds
      setTimeout(() => setShowToast(false), 4000);

    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Error submitting form! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className="custom-toast">
          <div className="custom-toast-content">
            <span className="checkmark">✓</span>
            <span>Thank you! Our team will reach out to you soon.</span>
          </div>
        </div>
      )}

      <section className="contact-wrapper d-flex justify-content-center align-items-center text-white" ref={sectionRef}>
        <div className="container position-relative z-2 px-4">
          <div className="row">
            {/* Left Content */}
            <div className={`left-content col-lg-6 text-start contact-text ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h1 className="display-1 contact-title">
                <span className="title-line">READY TO</span>
                <span className="title-line accent">ELEVATE</span>
                <span className="title-line">YOUR STORY?</span>
              </h1>
              <p className="mt-4 contact-description">
                Whether you're looking to bring your brand to life, capture the magic of your wedding day, tell a compelling story through short films, or showcase your culinary creations. We're here to help.
              </p>
              <div className="contact-features">
                <div className="feature-item">
                  <span className="feature-icon">🎬</span>
                  <span>Professional Video Production</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✨</span>
                  <span>Creative Storytelling</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🚀</span>
                  <span>Fast Turnaround</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className={`col-lg-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="contact-form">
                <h6 className="text-uppercase text-center small fw-bold mb-4 sub-heading">
                  {isMobile ? "Ready to elevate your story?" : "Tell us your Story..."}
                </h6>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-6">
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Phone no."
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        name="projectDescription"
                        className="form-control"
                        placeholder="Project Description"
                        rows="3"
                        value={formData.projectDescription}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="col-md-6">
                      <input
                        type="number"
                        name="duration"
                        className="form-control"
                        placeholder="Project Duration (mins)"
                        value={formData.duration}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        name="budget"
                        className="form-control"
                        placeholder="What's your budget?"
                        value={formData.budget}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="d-flex">
                      <label className="col-md-6 mt-1 date-label">Best time to meet?</label>
                      <input
                        type="date"
                        name="deadline"
                        className="form-control"
                        placeholder="When do you need it?"
                        value={formData.deadline}
                        onChange={handleChange}
                      />
                    </div>

                    {/* <div className="col-md-6">
                      <input
                        type="file"
                        name="file"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div> */}

                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-light w-100 rounded-pill form-button fw-bold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Submitting...
                          </>
                        ) : (
                          'SUBMIT'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
