import "./About.css";
import aboutUs from '../../assets/images/about-us-2.jpg'; // Assuming you have an image in this path
import aboutUsPromise from '../../assets/images/about-us-promise.jpg'; // Assuming you have an image in this path
import aboutUsWhyTrustUs from '../../assets/images/about-us-why-trust.jpg'; // Assuming you have an image in this path
import aboutUsExcitingPeople from '../../assets/images/about-us-exciting-people.jpg'; // Assuming you have an image in this path

function About() {
  const sections = [
    {
      title: "Our Mission",
      text: "To preserve your precious time, effort, and imagination by crafting content that feels alive, intentional, and truly yours. Because we know one thing for sure: no money or time can bring back a moment once it's gone — but the right film can.",
      image: aboutUsExcitingPeople,
    },
    {
      title: "Why Choose Us?",
      text: `We Listen First. Before we press record, we press pause — on our assumptions. Your story comes first.

We Think Like Scientists, Feel Like Artists. (Fun fact: our founder was a scientist at ISRO for 2 years. Yeah, rocket science.)

We Use the Latest AI & Tech to ensure max productivity in minimal time. More magic, less waiting.

We’re Not Just Creators — We’re Collaborators. You’ll find us bouncing ideas, swapping stories, and turning raw footage into pure soul.`,
      image: aboutUsWhyTrustUs,
    },
    {
      title: "A Bit of Our Story",
      text: `It started with a young kid and a digital camera (around age 10), capturing everything from badly framed family pics to sunsets that “looked better in person.” Somewhere between science labs and passion projects, that kid became a creator — not by degree, but by obsession. After a while, the inner voice got too loud to ignore. And thus, Cineptual was born.`,
      image: aboutUs,
    },
    {
      title: "Our Promise",
      text: "We deliver content that might take a little patience — but trust us, it's worth the wait.",
      image: aboutUsPromise,
    },
  ];

  return (
    <div className='container'>

      <div className="about-container py-5">
        {/* Top Heading Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-dark">About Us</h1>
          <p className="lead text-muted">At Cineptual, we don't just create videos — we capture feelings, freeze time, and turn ideas into cinematic reality.</p>
        </div>

        {/* Alternating Sections */}
        {sections.map((item, index) => (
          <div className={`row align-items-center py-5 px-md-3 px-2 mb-4 about-section ${index % 2 !== 0 ? 'flex-md-row-reverse' : ''}`}>
            <div className="col-md-6 d-flex justify-content-center">
              <img src={item.image} alt={item.title} className="img-fluid about-image" />
            </div>
            <div className="col-md-6">
              <div className="text-content-wrapper">
                <h2 className="fw-semibold mb-3">{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  )

}

export default About;
