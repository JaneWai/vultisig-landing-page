import React, { useEffect } from 'react';
import { Shield, Bot, Key, Layers } from 'lucide-react';
import { useBackground, backgrounds } from '../context/BackgroundContext';
import BackgroundWrapper from './BackgroundWrapper';

const Hero: React.FC = () => {
  const { setBackground } = useBackground();
  
  useEffect(() => {
    setBackground(backgrounds.hero);
  }, [setBackground]);

  return (
    <BackgroundWrapper backgroundImage={backgrounds.hero} sectionId="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 xl:col-span-5">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Secure Your</span>
              <span className="block text-indigo-300">Crypto Assets</span>
              <span className="block">Like Never Before</span>
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
              Vultisig - The first seedless, institutional-grade, multi-chain self-custodial crypto wallet with enhanced security features designed to protect your crypto assets.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#download" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors">
                Download Now
              </a>
              <a href="https://docs.vultisig.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 bg-opacity-20 hover:bg-opacity-30 transition-colors">
                Visit Vultisig Docs to Learn More
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-indigo-300" />
                <span className="ml-2 text-indigo-100">Multi-Factor Auth</span>
              </div>
              <div className="flex items-center">
                <Bot className="h-6 w-6 text-indigo-300" />
                <span className="ml-2 text-indigo-100">AI Agents Plug-Ins</span>
              </div>
              <div className="flex items-center">
                <Key className="h-6 w-6 text-indigo-300" />
                <span className="ml-2 text-indigo-100">Enhanced Security</span>
              </div>
              <div className="flex items-center">
                <Layers className="h-6 w-6 text-indigo-300" />
                <span className="ml-2 text-indigo-100">Multi-Chain</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 lg:col-span-6 xl:col-span-7">
            <div className="relative h-64 sm:h-80 lg:h-full flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* App mockup positioned to the left but closer to center */}
                <img
                  className="absolute object-contain z-0"
                  src="https://waiting-wrist-6f6.notion.site/image/attachment%3Aa8ae8f0c-2fb4-44c0-bf11-dabf324421d0%3AApp_Mobile_Screen_Mockup_2.png?table=block&id=19823043-5592-8040-bb76-decea390bf81&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=1420&userId=&cache=v2"
                  alt="Vultisig wallet interface"
                  style={{ 
                    height: "auto",
                    width: "55%",
                    maxWidth: "350px",
                    left: "45%",
                    transform: "translateX(-100%)",
                    bottom: "0"
                  }}
                />
                
                {/* Agent image positioned to the right but closer to center */}
                <img
                  className="absolute object-contain z-10"
                  src="https://waiting-wrist-6f6.notion.site/image/attachment%3A9ab6d696-f531-4caa-be40-3b55b9f93712%3AVulti_Agent_Reading_(2).png?table=block&id=19123043-5592-8083-8829-f0cc388abb48&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=660&userId=&cache=v2"
                  alt="Vultisig security agent"
                  style={{ 
                    height: "auto",
                    width: "45%",
                    maxWidth: "300px",
                    left: "55%",
                    bottom: "0"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Hero;
