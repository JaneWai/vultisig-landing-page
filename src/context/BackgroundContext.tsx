import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define background options
export const backgrounds = {
  hero: "url('https://waiting-wrist-6f6.notion.site/image/attachment%3Ad7a156fd-e2cf-4c17-a382-b004bfb2260b%3ABackground_1_light_(1).png?table=block&id=19123043-5592-8045-9b66-c6519b36ec00&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=1420&userId=&cache=v2')",
  features: "url('https://waiting-wrist-6f6.notion.site/image/attachment%3A04513d02-4c1c-4106-a3c8-04cbe7802920%3ABackground_2_light.png?table=block&id=19123043-5592-804e-8a4e-d1910c4c4a1a&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=1420&userId=&cache=v2')",
  security: "url('https://waiting-wrist-6f6.notion.site/image/attachment%3Ac914f3c3-919d-4ce9-a034-2518821fe1cd%3AVultisig_-_1200x630_-_42-_2x.png?table=block&id=19123043-5592-8029-bbd0-dd76425dde35&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=1420&userId=&cache=v2')",
  chains: "url('https://waiting-wrist-6f6.notion.site/image/attachment%3A746dfe28-b74b-4664-8aa3-ccf54aa7b5c5%3ABackground_3.png?table=block&id=19123043-5592-804e-a524-f4fa8b23c568&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=1420&userId=&cache=v2')",
  testimonials: "url('https://waiting-wrist-6f6.notion.site/image/attachment%3Ae3ac7d1a-0ad7-47c6-9034-7390c23f26e3%3ABackground_1.png?table=block&id=19123043-5592-80db-a763-c349dab75c61&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=1420&userId=&cache=v2')",
};

type BackgroundContextType = {
  currentBackground: string;
  setBackground: (background: string) => void;
};

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const BackgroundProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [currentBackground, setCurrentBackground] = useState(backgrounds.hero);

  const setBackground = (background: string) => {
    setCurrentBackground(background);
  };

  return (
    <BackgroundContext.Provider value={{ currentBackground, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
};
