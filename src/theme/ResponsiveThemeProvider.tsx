import React, { createContext, useContext, ReactNode } from "react";
import { useResponsive } from "../hooks/useResponsiveValue";

type ResponsiveContextType = ReturnType<typeof useResponsive>;

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(undefined);

interface ResponsiveThemeProviderProps {
  children: ReactNode;
}

export const ResponsiveThemeProvider: React.FC<ResponsiveThemeProviderProps> = ({ children }) => {
  const responsive = useResponsive();

  return (
    <ResponsiveContext.Provider value={responsive}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsiveContext = () => {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error("useResponsiveContext must be used within ResponsiveThemeProvider");
  }
  return context;
};
