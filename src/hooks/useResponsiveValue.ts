import { useEffect, useState, useCallback } from "react";

const DEFAULT_VIEWPORT = {
  width: 360,
  height: 722
};

interface Viewport {
  width: number;
  height: number;
}

export interface ResponsiveDimensions {
  vw: number;
  vh: number;
  scaleWidth: number;
  scaleHeight: number;
}

const getInitialDimensions = (viewport: Viewport): ResponsiveDimensions => {
  if (typeof window === 'undefined') {
    return {
      vw: viewport.width,
      vh: viewport.height,
      scaleWidth: 1,
      scaleHeight: 1
    };
  }

  return {
    vw: window.innerWidth,
    vh: window.innerHeight,
    scaleWidth: window.innerWidth / viewport.width,
    scaleHeight: window.innerHeight / viewport.height,
  };
};

export const useResponsive = (customViewport?: Viewport): ResponsiveDimensions => {
  const viewport = customViewport || DEFAULT_VIEWPORT;
  const [dimensions, setDimensions] = useState<ResponsiveDimensions>(() => 
    getInitialDimensions(viewport)
  );

  const updateDimensions = useCallback(() => {
    if (typeof window === 'undefined') return;

    setDimensions({
      vw: window.innerWidth,
      vh: window.innerHeight,
      scaleWidth: window.innerWidth / viewport.width,
      scaleHeight: window.innerHeight / viewport.height,
    });
  }, [viewport]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initial update
    updateDimensions();

    // Debounced resize handler
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDimensions, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [updateDimensions]);

  return dimensions;
};
