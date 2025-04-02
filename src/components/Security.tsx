import React, { useEffect } from 'react';
import { useBackground, backgrounds } from '../context/BackgroundContext';
import BackgroundWrapper from './BackgroundWrapper';

const Security: React.FC = () => {
  const { setBackground } = useBackground();
  
  useEffect(() => {
    const handleScroll = () => {
      const securitySection = document.getElementById('security');
      if (securitySection) {
        const rect = securitySection.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setBackground(backgrounds.security);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setBackground]);

  return (
    <BackgroundWrapper backgroundImage={backgrounds.security} sectionId="security">
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="section-title text-white">Uncompromising Security</h2>
          <p className="section-subtitle text-indigo-100">
            Your assets deserve the highest level of protection. Vultisig employs multiple layers of security to keep your crypto safe.
          </p>
        </div>

        <div className="mt-16 lg:mt-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-white">Bring Your Own Trusted Devices</h3>
                  <p className="mt-2 text-indigo-100">
                    The private key never exists in one piece, your devices just proof the collaborative access to it.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-white">Biometric Authentication</h3>
                  <p className="mt-2 text-indigo-100">
                    Use your fingerprint or face ID to authorize transactions, adding an extra layer of security.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-white">Multi-Signature Support</h3>
                  <p className="mt-2 text-indigo-100">
                    Require multiple approvals for transactions, perfect for team accounts or additional personal security.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img 
              src="https://waiting-wrist-6f6.notion.site/image/attachment%3A2dbb8315-7e27-468c-bb78-84839957d9d6%3AGroup_1000004713.png?table=block&id=19823043-5592-80b7-a839-cf3c22fbb58b&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=660&userId=&cache=v2" 
              alt="Security visualization" 
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Security;
