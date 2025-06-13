import React, { createContext, useContext, ReactNode } from "react";
import { useResponsive, ResponsiveDimensions } from "../hooks/useResponsiveValue";

const ResponsiveContext = createContext<ResponsiveDimensions | undefined>(undefined);

interface ResponsiveThemeProviderProps {
  children: ReactNode;
  viewport?: {
    width: number;
    height: number;
  };
}

export const ResponsiveThemeProvider: React.FC<ResponsiveThemeProviderProps> = ({ 
  children,
  viewport
}) => {
  const responsive = useResponsive(viewport);

  return (
    <ResponsiveContext.Provider value={responsive}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsiveContext = (): ResponsiveDimensions => {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error("useResponsiveContext must be used within ResponsiveThemeProvider");
  }
  return context;
};
