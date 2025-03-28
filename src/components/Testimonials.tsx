import React, { useEffect } from 'react';
import { useBackground, backgrounds } from '../context/BackgroundContext';
import BackgroundWrapper from './BackgroundWrapper';

const Testimonials: React.FC = () => {
  const { setBackground } = useBackground();
  
  useEffect(() => {
    const handleScroll = () => {
      const testimonialsSection = document.getElementById('testimonials');
      if (testimonialsSection) {
        const rect = testimonialsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setBackground(backgrounds.testimonials);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setBackground]);

  const testimonials = [
    {
      content: "Vultisig has completely transformed how I manage my crypto portfolio. The multi-chain support is seamless, and I feel much more secure with the multi-factor authentication.",
      author: "Alex Thompson",
      role: "Crypto Investor",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      content: "As a DeFi developer, I needed a wallet that could handle complex interactions across multiple chains. Vultisig delivers this and more with its exceptional security features.",
      author: "Sarah Chen",
      role: "Blockchain Developer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      content: "Our investment fund requires the highest security standards. Vultisig's multi-signature functionality and device sync capabilities have made it our go-to wallet for managing client assets.",
      author: "Michael Rodriguez",
      role: "Crypto Fund Manager",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  return (
    <BackgroundWrapper backgroundImage={backgrounds.testimonials} sectionId="testimonials">
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="section-title text-white">What Our Users Say</h2>
          <p className="section-subtitle text-indigo-100">
            Join thousands of satisfied users who trust Vultisig with their digital assets.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-indigo-300">
                  <img src={testimonial.avatar} alt={testimonial.author} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">{testimonial.author}</h4>
                  <p className="text-indigo-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-indigo-100 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-indigo-300"></span>
            <span className="h-3 w-3 rounded-full bg-indigo-500"></span>
            <span className="h-3 w-3 rounded-full bg-indigo-300"></span>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Testimonials;
