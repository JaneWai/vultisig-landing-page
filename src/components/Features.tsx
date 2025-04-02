import React, { useEffect } from 'react';
import { useBackground, backgrounds } from '../context/BackgroundContext';
import BackgroundWrapper from './BackgroundWrapper';

const Features: React.FC = () => {
  const { setBackground } = useBackground();
  
  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setBackground(backgrounds.features);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setBackground]);

  return (
    <BackgroundWrapper backgroundImage={backgrounds.features} sectionId="features">
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="section-title text-white">Key Features</h2>
          <p className="section-subtitle text-indigo-100">
            Vultisig combines cutting-edge security with user-friendly design to provide the ultimate wallet experience.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl">
            <div className="h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center mb-5">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Multi-Factor Authentication</h3>
            <p className="text-indigo-100">
              Secure your wallet with multiple layers of authentication, including biometrics and more.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl">
            <div className="h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center mb-5">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Multi-Chain Support</h3>
            <p className="text-indigo-100">
              Manage assets across multiple blockchains from a single interface, with support for all major networks.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl">
            <div className="h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center mb-5">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Advanced Security</h3>
            <p className="text-indigo-100">
              Industry-leading security with Threshold Signatures Scheme (TSS) protect your assets with multiple devices signatures - no single point of failure. Never lose funds with one compromised device.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl">
            <div className="h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center mb-5">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Multi-Device Sync</h3>
            <p className="text-indigo-100">
              Access your wallet securely from multiple devices with real-time synchronization.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl">
            <div className="h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center mb-5">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">DeFi Integration</h3>
            <p className="text-indigo-100">
              Seamlessly interact with DeFi protocols and earn yield on your assets without leaving the wallet.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl">
            <div className="h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center mb-5">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Transaction Policies</h3>
            <p className="text-indigo-100">
              Define transaction policies for your crypto wallet - spending limits, address whitelists and more. (COMING SOON)
            </p>
          </div>

          {/* Feature 7 - Vultisig Plug-Ins */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl md:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <div className="h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Vultisig Plug-Ins</h3>
              <p className="text-indigo-100">
                Unlock new possibilities with AI Agents Plug-Ins. From automated investments (DCA) to salary management, customize your wallet with features tailored to your needs. Simplify your crypto experiences with tools that work seamlessly together. (Still in development)
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center items-center">
              <div className="relative w-full max-w-[80%]">
                <img 
                  src="https://vultisig.com/_next/image?url=%2Fimages%2Fhome%2Fwallets-power.png&w=1920&q=75" 
                  alt="Vultisig Plug-Ins" 
                  className="w-auto h-auto object-contain mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Features;
