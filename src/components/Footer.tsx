import React from 'react';
import BackgroundWrapper from './BackgroundWrapper';
import { backgrounds } from '../context/BackgroundContext';

const Footer: React.FC = () => {
  return (
    <BackgroundWrapper backgroundImage={backgrounds.hero}>
      <footer className="bg-vultisig-secondary bg-opacity-80 backdrop-filter backdrop-blur-lg border-t border-white border-opacity-10">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4">
                <img 
                  src="https://waiting-wrist-6f6.notion.site/image/attachment%3A25a1a8e3-bfa7-4ad8-a3ce-ebcc2d1662cf%3ALogo_NEW_(1).png?table=block&id=1ae23043-5592-807e-ab56-c27f2807dc4c&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=1420&userId=&cache=v2" 
                  alt="Vultisig Logo" 
                  className="h-10"
                />
              </div>
              <p className="text-indigo-100 mb-4">
                Secure your crypto assets with the most advanced multi-chain wallet.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/vultisig" className="text-indigo-300 hover:text-white transition-colors">
                  <span className="sr-only">X (Twitter)</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://github.com/Vultisig/" className="text-indigo-300 hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://discord.gg/54wEtGYxuv" className="text-indigo-300 hover:text-white transition-colors">
                  <span className="sr-only">Discord</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                </a>
                <a href="https://t.me/vultisig" className="text-indigo-300 hover:text-white transition-colors">
                  <span className="sr-only">Telegram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-indigo-100 hover:text-white transition-colors">Features</a></li>
                <li><a href="#security" className="text-indigo-100 hover:text-white transition-colors">Security</a></li>
                <li><a href="#chains" className="text-indigo-100 hover:text-white transition-colors">Supported Chains</a></li>
                <li><a href="#download" className="text-indigo-100 hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="https://docs.vultisig.com/" className="text-indigo-100 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="https://docs.vultisig.com/threshold-signature-scheme/security" className="text-indigo-100 hover:text-white transition-colors">Audits</a></li>
                <li><a href="#faq" className="text-indigo-100 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="https://discord.gg/54wEtGYxuv" className="text-indigo-100 hover:text-white transition-colors">User Support</a></li>
                <li><a href="mailto:contact@vultisig.com" className="text-indigo-100 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="https://vultisig.com/privacy" className="text-indigo-100 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="https://vultisig.com/termofservice" className="text-indigo-100 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white border-opacity-10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-indigo-100">&copy; {new Date().getFullYear()} Vultisig. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </BackgroundWrapper>
  );
};

export default Footer;
