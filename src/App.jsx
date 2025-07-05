import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import ScrollToTop from './ScrollToTop';

import "./main.css";
import { Routes, Route } from 'react-router-dom';

function HomePage() {
  return (
    <>
    <section id="home">
      <HeroSection />
    </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  )
}

function App() {

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      {/* <Work /> */}
        <Route path="/projects" element={<Gallery />} />
        {/* <Gallery /> */}
      {/* <About /> */}
      </Routes>
    </>
  )
}

export default App
