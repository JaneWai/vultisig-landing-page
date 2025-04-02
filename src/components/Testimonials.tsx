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
      content: "Amazing Team. Amazing Product. Very intuitive and simple to use. Vultisig is the most secure wallet available. Constant updates. Beautiful UI. There is no second best!",
      author: "Margi Armstrong",
      rating: 5
    },
    {
      content: "Securing crypto has never been easier and safer before. Onwards!",
      author: "Rokas Miller",
      rating: 5
    },
    {
      content: "This is the most powerful application in the DEFI ecosystem. This is an evolutionary crypto wallet - vault in which hacking or loss of the seed phrase is not possible. DYOR this unique product further. Super bullish on it",
      author: "Aurora Hunter",
      rating: 5
    },
    {
      content: "With Vultisig, we don't have to leak any of our personal details to anyone to have a safe and revolutionary way of storing wealth. In case you didn't know, Ledger's customer details were leaked a few years ago, with full names, addresses, emails, etc. Vultisig is invisible, cross airports, totalitarian countries without a problem whereas Ledger is visible so can be dangerous at times.",
      author: "Fidele Gastro",
      rating: 5
    },
    {
      content: "Vultisig maximizes security as you don't have a single key that can be exploited.",
      author: "Patriotsounds",
      rating: 5
    }
  ];

  // Function to render star rating
  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <BackgroundWrapper backgroundImage={backgrounds.testimonials} sectionId="testimonials">
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="section-title text-white">What Our Users Say</h2>
          <p className="section-subtitle text-indigo-100">
            Join thousands of satisfied users who trust Vultisig with their digital assets.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl">
              <div className="mb-4">
                <h4 className="text-lg font-medium text-white">{testimonial.author}</h4>
                <div className="flex mt-1">
                  {renderStars(testimonial.rating)}
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
