import React from 'react';

export const VultisigLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
        <path d="M256 0L34.4331 128V384L256 512L477.567 384V128L256 0Z" fill="#6366F1"/>
        <path d="M256 42.6667L76.8 149.333V362.667L256 469.333L435.2 362.667V149.333L256 42.6667Z" fill="#18181B"/>
        <path d="M256 85.3333L119.467 170.667V341.333L256 426.667L392.533 341.333V170.667L256 85.3333Z" fill="#6366F1"/>
        <path d="M256 128L161.707 192V320L256 384L350.293 320V192L256 128Z" fill="#18181B"/>
        <path d="M256 170.667L204.8 213.333V298.667L256 341.333L307.2 298.667V213.333L256 170.667Z" fill="#6366F1"/>
      </svg>
      <span className="font-bold text-xl text-[#6366F1]">Vultisig</span>
    </div>
  );
};

export const VultisigIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 0L34.4331 128V384L256 512L477.567 384V128L256 0Z" fill="#6366F1"/>
        <path d="M256 42.6667L76.8 149.333V362.667L256 469.333L435.2 362.667V149.333L256 42.6667Z" fill="#18181B"/>
        <path d="M256 85.3333L119.467 170.667V341.333L256 426.667L392.533 341.333V170.667L256 85.3333Z" fill="#6366F1"/>
        <path d="M256 128L161.707 192V320L256 384L350.293 320V192L256 128Z" fill="#18181B"/>
        <path d="M256 170.667L204.8 213.333V298.667L256 341.333L307.2 298.667V213.333L256 170.667Z" fill="#6366F1"/>
      </svg>
    </div>
  );
};
