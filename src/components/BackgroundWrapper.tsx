import React, { ReactNode, useEffect } from 'react';
import { useBackground } from '../context/BackgroundContext';

interface BackgroundWrapperProps {
  children: ReactNode;
  backgroundImage: string;
  overlayOpacity?: number;
  sectionId?: string;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ 
  children, 
  backgroundImage, 
  overlayOpacity = 60,
  sectionId
}) => {
  const { setBackground } = useBackground();
  
  useEffect(() => {
    setBackground(backgroundImage);
  }, [backgroundImage, setBackground]);

  return (
    <section id={sectionId} className="relative">
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default BackgroundWrapper;
