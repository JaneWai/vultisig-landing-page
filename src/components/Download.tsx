import React from 'react';
import { Apple, Smartphone, Globe, Monitor, Chrome, Package, Server } from 'lucide-react';
import BackgroundWrapper from './BackgroundWrapper';
import { backgrounds } from '../context/BackgroundContext';

const Download: React.FC = () => {
  return (
    <BackgroundWrapper backgroundImage={backgrounds.security} sectionId="download">
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="section-title text-white">Download Vultisig Today</h2>
          <p className="section-subtitle text-indigo-100">
            Get started with Vultisig on your preferred platform and take control of your digital assets.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* iOS Download */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl text-center">
            <div className="flex justify-center mb-6">
              <Apple className="h-16 w-16 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-4">iOS App</h3>
            <p className="text-indigo-100 mb-6">
              Download Vultisig for iPhone and iPad from the App Store.
            </p>
            <a 
              href="https://apps.apple.com/app/vultisig/id6503023896" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary w-full flex items-center justify-center"
            >
              App Store
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>

          {/* MacOS Download */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl text-center">
            <div className="flex justify-center mb-6">
              <Monitor className="h-16 w-16 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-4">MacOS</h3>
            <p className="text-indigo-100 mb-6">
              Download Vultisig for MacOS computers and laptops.
            </p>
            <a 
              href="https://github.com/vultisig/vultisig-ios/releases/download/v1.14.0/VultisigApp.v1.14.0.signed.pkg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary w-full flex items-center justify-center"
            >
              Download for Mac
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>

          {/* Android Download */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl text-center">
            <div className="flex justify-center mb-6">
              <Smartphone className="h-16 w-16 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-4">Android App</h3>
            <p className="text-indigo-100 mb-6">
              Download Vultisig for Android devices from the Google Play Store.
            </p>
            <a 
              href="https://play.google.com/store/apps/details?id=com.vultisig.wallet" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary w-full flex items-center justify-center"
            >
              Google Play
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>

          {/* Windows Download */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl text-center">
            <div className="flex justify-center mb-6">
              <Monitor className="h-16 w-16 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-4">Windows</h3>
            <p className="text-indigo-100 mb-6">
              Download Vultisig for Windows PCs and laptops.
            </p>
            <a 
              href="https://github.com/vultisig/vultisig-windows/releases/download/v1.0.18/Vultisig-amd64-installer-v1.0.18.exe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary w-full flex items-center justify-center"
            >
              Download for Windows
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>

          {/* Linux Download */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl text-center">
            <div className="flex justify-center mb-6">
              <Server className="h-16 w-16 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-4">Linux</h3>
            <p className="text-indigo-100 mb-6">
              Download Vultisig for Linux operating systems.
            </p>
            <a 
              href="https://github.com/vultisig/vultisig-windows/releases/download/v1.0.18/vultisig_1.0.18_amd64.deb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary w-full flex items-center justify-center"
            >
              Download for Linux
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>

          {/* Chrome Extension */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl text-center">
            <div className="flex justify-center mb-6">
              <Chrome className="h-16 w-16 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-4">Chrome Extension</h3>
            <p className="text-indigo-100 mb-6">
              Install VultiConnect browser extension for Chrome.
            </p>
            <a 
              href="https://chromewebstore.google.com/detail/vulticonnect/ggafhcdaplkhmmnlbfjpnnkepdfjaelb?authuser=0&hl=en-GB&pli=1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary w-full flex items-center justify-center"
            >
              Chrome Web Store
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>

          {/* Airdrop Web */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl text-center md:col-span-2 lg:col-span-3">
            <div className="flex justify-center mb-6">
              <Package className="h-16 w-16 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-4">Airdrop Web</h3>
            <p className="text-indigo-100 mb-6">
              Access Vultisig Airdrop directly from your browser with our secure web application.
            </p>
            <a 
              href="https://airdrop.vultisig.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary max-w-md mx-auto flex items-center justify-center"
            >
              Launch Airdrop Web
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Join Our Community</h3>
              <p className="text-indigo-100">
                Stay updated with the latest features, security enhancements, and community events.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://discord.gg/54wEtGYxuv" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  Discord
                </a>
                <a 
                  href="https://t.me/vultisig" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Download;
