import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

function App() {
  return (
    <SimpleBar style={{  position: 'fixed', /* Stays fixed to the viewport */
      top: 0,
      left: 0,
      width: '100vw', /* Full viewport width */
      height: '100vh', /* Full viewport height */
      
      display: 'flex', /* Optional: for centering content */
      justifyContent: 'center', /* Center content horizontally */
      alignItems: 'center', /* Center content vertically */
      zIndex: 1000 }}>
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
    </SimpleBar>
  );
}

export default App;
