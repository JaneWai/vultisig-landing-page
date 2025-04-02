import React, { useEffect } from 'react';
import { useBackground, backgrounds } from '../context/BackgroundContext';
import BackgroundWrapper from './BackgroundWrapper';

const Chains: React.FC = () => {
  const { setBackground } = useBackground();
  
  useEffect(() => {
    const handleScroll = () => {
      const chainsSection = document.getElementById('chains');
      if (chainsSection) {
        const rect = chainsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setBackground(backgrounds.chains);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setBackground]);

  // Chain logos and names
  const chains = [
    { name: 'Ethereum', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025' },
    { name: 'Bitcoin', logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025' },
    { name: 'Solana', logo: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=025' },
    { name: 'Polkadot', logo: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=025' },
    { name: 'Avalanche', logo: 'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=025' },
    { name: 'THORChain', logo: 'https://cryptologos.cc/logos/thorchain-rune-logo.png?v=025' },
    { name: 'Cosmos', logo: 'https://cryptologos.cc/logos/cosmos-atom-logo.png?v=025' },
    { name: 'Polygon', logo: 'https://cryptologos.cc/logos/polygon-matic-logo.png?v=025' },
    { name: 'Binance Smart Chain', logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=025' },
    { name: 'Arbitrum', logo: 'https://cryptologos.cc/logos/arbitrum-arb-logo.png?v=025' },
    { name: 'Optimism', logo: 'https://cryptologos.cc/logos/optimism-ethereum-op-logo.png?v=025' },
    { name: 'Ripple', logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png?v=025' },
  ];

  return (
    <BackgroundWrapper backgroundImage={backgrounds.chains} sectionId="chains">
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="section-title text-white">Supported Blockchains</h2>
          <p className="section-subtitle text-indigo-100">
            Vultisig supports a wide range of blockchains, allowing you to manage all your assets in one secure place.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {chains.map((chain, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4 border border-white border-opacity-20 shadow-xl">
                <img src={chain.logo} alt={`${chain.name} logo`} className="w-12 h-12 object-contain" />
              </div>
              <span className="text-white font-medium text-center">{chain.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-indigo-100 mb-6">And many more chains coming soon!</p>
          <a href="#download" className="btn-primary inline-flex items-center">
            Get Started
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Chains;
