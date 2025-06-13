import React, { createContext, useContext, useEffect, useState } from 'react';

interface Viewport {
  width: number;
  height: number;
}

interface ResponsiveContextType {
  baseViewport: Viewport;
  currentViewport: Viewport;
}

const DEFAULT_VIEWPORT: Viewport = {
  width: 360,
  height: 722
};

const ResponsiveContext = createContext<ResponsiveContextType>({
  baseViewport: DEFAULT_VIEWPORT,
  currentViewport: DEFAULT_VIEWPORT
});

interface ResponsiveThemeProviderProps {
  children: React.ReactNode;
  baseViewport?: Viewport;
}

export const ResponsiveThemeProvider: React.FC<ResponsiveThemeProviderProps> = ({
  children,
  baseViewport = DEFAULT_VIEWPORT
}) => {
  const [currentViewport, setCurrentViewport] = useState<Viewport>(() => {
    if (typeof window === 'undefined') return DEFAULT_VIEWPORT;
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  });

  useEffect(() => {
    const handleResize = () => {
      setCurrentViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ResponsiveContext.Provider value={{ baseViewport, currentViewport }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsiveContext = () => useContext(ResponsiveContext);
