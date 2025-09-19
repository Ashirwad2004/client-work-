import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import ScrollToTop from './ScrollToTop';
import Loading from './components/Loading/Loading';
import PerformanceMonitor from './components/PerformanceMonitor/PerformanceMonitor';
import "./main.css";

// Lazy load components for better performance
const Gallery = lazy(() => import('./components/Gallery/Gallery'));
const About = lazy(() => import('./components/About/About'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Pricing = lazy(() => import('./components/Pricing/Pricing'));
const Services = lazy(() => import('./components/Services/Services'));
const ReviewSection = lazy(() => import('./components/Review/ReviewSection'));

function HomePage() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <Suspense fallback={<Loading message="Loading services..." />}>
          <Services />
        </Suspense>
      </section>
      <Suspense fallback={<Loading message="Loading reviews..." />}>
        <ReviewSection />
      </Suspense>
      <section id="contact">
        <Suspense fallback={<Loading message="Loading contact form..." />}>
          <Contact />
        </Suspense>
      </section>
      <Suspense fallback={<Loading message="Loading footer..." />}>
        <Footer />
      </Suspense>
    </>
  )
}

function App() {
  return (
    <>
      <PerformanceMonitor />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/about" 
          element={
            <Suspense fallback={<Loading message="Loading about page..." />}>
              <About />
            </Suspense>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <Suspense fallback={<Loading message="Loading projects..." />}>
              <Gallery />
            </Suspense>
          } 
        />
        <Route 
          path="/pricing" 
          element={
            <Suspense fallback={<Loading message="Loading pricing..." />}>
              <Pricing />
            </Suspense>
          } 
        />
      </Routes>
    </>
  )
}

export default App
