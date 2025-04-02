import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-vultisig-secondary bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <img 
                src="https://waiting-wrist-6f6.notion.site/image/attachment%3A25a1a8e3-bfa7-4ad8-a3ce-ebcc2d1662cf%3ALogo_NEW_(1).png?table=block&id=1ae23043-5592-807e-ab56-c27f2807dc4c&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=1420&userId=&cache=v2" 
                alt="Vultisig Logo" 
                className="h-8"
              />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-indigo-100 hover:text-white transition-colors">Features</a>
            <a href="#security" className="text-indigo-100 hover:text-white transition-colors">Security</a>
            <a href="#chains" className="text-indigo-100 hover:text-white transition-colors">Chains</a>
            <a href="#testimonials" className="text-indigo-100 hover:text-white transition-colors">Testimonials</a>
            <a href="#faq" className="text-indigo-100 hover:text-white transition-colors">FAQ</a>
            <a href="#download" className="btn-primary">Download</a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-100 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-vultisig-secondary bg-opacity-90 backdrop-filter backdrop-blur-lg">
          <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-100 hover:text-white hover:bg-indigo-500 hover:bg-opacity-20 transition-colors">Features</a>
          <a href="#security" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-100 hover:text-white hover:bg-indigo-500 hover:bg-opacity-20 transition-colors">Security</a>
          <a href="#chains" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-100 hover:text-white hover:bg-indigo-500 hover:bg-opacity-20 transition-colors">Chains</a>
          <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-100 hover:text-white hover:bg-indigo-500 hover:bg-opacity-20 transition-colors">Testimonials</a>
          <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-100 hover:text-white hover:bg-indigo-500 hover:bg-opacity-20 transition-colors">FAQ</a>
          <a href="#download" className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition-colors">Download</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
