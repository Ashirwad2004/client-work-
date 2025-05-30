import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Work from './components/Work/Work';

import "./main.css";

function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      {/* <Work /> */}
      {/* <Gallery /> */}
      {/* <About /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
