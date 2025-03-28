import React, { useEffect } from 'react';
import { ArrowRight, Shield, Smartphone, Key, Layers } from 'lucide-react';
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
              Vultisig is a multi-chain, multi-factor, multi-device crypto wallet with enhanced security features designed to protect your digital assets.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#download" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors">
                Download Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 bg-opacity-20 hover:bg-opacity-30 transition-colors">
                Learn More
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-indigo-300" />
                <span className="ml-2 text-indigo-100">Multi-Factor Auth</span>
              </div>
              <div className="flex items-center">
                <Smartphone className="h-6 w-6 text-indigo-300" />
                <span className="ml-2 text-indigo-100">Multi-Device</span>
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
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl"
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
                alt="Vultisig wallet interface"
              />
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Hero;
