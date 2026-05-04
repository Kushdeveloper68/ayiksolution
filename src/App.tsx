import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ContactStrip from './components/ContactStrip';
import Footer from './components/Footer';
import Modal from './components/Modal';
// import Team from "./components/Team"
import TeamSection from "./components/Teams"
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Reveal elements on scroll using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        } 
      });
    }, { threshold: 0.12 });

    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      elementsToReveal.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        {/* <Team /> */}
        <TeamSection/>
        <div>
          <Work />
          <Reviews />
        </div>
        
        <div>
          <Services />
          <Pricing openContact={() => setIsModalOpen(true)} />
          <FAQ />
          <ContactStrip />
        </div>
      </main>

      <Footer />
      
      {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
    </>
  );
}

export default App;
