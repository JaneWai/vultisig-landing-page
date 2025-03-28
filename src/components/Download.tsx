import React from 'react';
import { Apple, Smartphone, Globe } from 'lucide-react';
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

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* iOS Download */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl text-center">
            <div className="flex justify-center mb-6">
              <Apple className="h-16 w-16 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-4">iOS App</h3>
            <p className="text-indigo-100 mb-6">
              Download Vultisig for iPhone and iPad from the App Store.
            </p>
            <a href="#" className="btn-primary w-full flex items-center justify-center">
              App Store
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
            <a href="#" className="btn-primary w-full flex items-center justify-center">
              Google Play
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>

          {/* Web App */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-xl text-center">
            <div className="flex justify-center mb-6">
              <Globe className="h-16 w-16 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-4">Web App</h3>
            <p className="text-indigo-100 mb-6">
              Access Vultisig directly from your browser with our secure web application.
            </p>
            <a href="#" className="btn-primary w-full flex items-center justify-center">
              Launch Web App
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
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-indigo-500 text-white px-4 py-3 rounded-r-md hover:bg-indigo-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Download;
