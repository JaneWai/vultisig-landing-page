import React, { useState } from 'react';
import BackgroundWrapper from './BackgroundWrapper';
import { backgrounds } from '../context/BackgroundContext';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What makes Vultisig different from other crypto wallets?",
      answer: "Vultisig stands out with its multi-chain, multi-factor, and multi-device capabilities. Unlike most wallets that focus on just one aspect of security or usability, Vultisig provides comprehensive protection across all dimensions while maintaining an intuitive user experience."
    },
    {
      question: "How secure is Vultisig?",
      answer: "Vultisig employs industry-leading security measures including secure enclaves for private key storage, biometric authentication, multi-signature support, and encrypted backups. Your assets are protected by multiple layers of security, making it extremely difficult for unauthorized access."
    },
    {
      question: "Which blockchains does Vultisig support?",
      answer: "Vultisig supports all major blockchains including Ethereum, Bitcoin, Solana, Polkadot, Avalanche, Cardano, Cosmos, Polygon, Binance Smart Chain, and many more. We regularly add support for new chains based on user demand and security considerations."
    },
    {
      question: "Can I use Vultisig on multiple devices?",
      answer: "Yes, Vultisig is designed for multi-device use. You can securely access your wallet from your smartphone, tablet, and desktop with real-time synchronization. Changes made on one device are instantly reflected across all your devices."
    },
    {
      question: "What happens if I lose my device?",
      answer: "Vultisig provides multiple recovery options. You can restore your wallet using your recovery phrase, or if you've enabled multi-device support, you can use another authorized device to access your wallet. Additionally, our optional secure backup feature allows for encrypted cloud backups."
    },
    {
      question: "Is Vultisig open source?",
      answer: "Yes, Vultisig's core security components are open source, allowing the community to review and verify our security implementations. We believe in transparency while maintaining proprietary elements for our unique user experience features."
    }
  ];

  return (
    <BackgroundWrapper backgroundImage={backgrounds.features} sectionId="faq">
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="section-title text-white">Frequently Asked Questions</h2>
          <p className="section-subtitle text-indigo-100">
            Find answers to common questions about Vultisig and how it can help secure your digital assets.
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <button
                className="flex justify-between items-center w-full text-left p-6 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-md focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-indigo-300 transform ${openIndex === index ? 'rotate-180' : ''} transition-transform duration-200`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="mt-2 p-6 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-lg border border-white border-opacity-10">
                  <p className="text-indigo-100">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-indigo-100 mb-6">Still have questions?</p>
          <a href="#" className="btn-secondary">
            Contact Support
          </a>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default FAQ;
