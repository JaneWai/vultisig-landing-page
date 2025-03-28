import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Security from './components/Security';
import Chains from './components/Chains';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Download from './components/Download';
import Footer from './components/Footer';
import { BackgroundProvider, backgrounds } from './context/BackgroundContext';

function App() {
  return (
    <BackgroundProvider>
      <div className="min-h-screen bg-white relative">
        {/* Main background that changes based on context */}
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: backgrounds.hero,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Global overlay for better text readability */}
        <div className="fixed inset-0 bg-vultisig-secondary bg-opacity-60 z-1"></div>
        
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Features />
            <Security />
            <Chains />
            <Testimonials />
            <FAQ />
            <Download />
          </main>
          <Footer />
        </div>
      </div>
    </BackgroundProvider>
  );
}

export default App;
