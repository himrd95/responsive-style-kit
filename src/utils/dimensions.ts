import { useMemo } from 'react';
import { useResponsiveContext } from '../theme/ResponsiveThemeProvider';

export const DIMENSION_TYPE = {
  HORIZONTAL: "HORIZONTAL",
  VERTICAL: "VERTICAL",
} as const;

type DimensionType = typeof DIMENSION_TYPE[keyof typeof DIMENSION_TYPE];

interface Viewport {
  width: number;
  height: number;
}

const DEFAULT_VIEWPORT: Viewport = {
  width: 360,
  height: 722,
};

const BASE_DIMENSIONS = {
  width: 360,
  height: 800,
} as const;

const DEBOUNCE_DELAY = 150; // milliseconds

function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function getWindowSize(): Viewport {
  if (typeof window === "undefined") {
    return DEFAULT_VIEWPORT;
  }
  
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export const getViewportToFit = (targetDimensions: Viewport): Viewport => {
  const { width: liveWidth, height: liveHeight } = getWindowSize();
  const verticalScale = liveHeight / targetDimensions.height;
  const horizontalScale = liveWidth / targetDimensions.width;
  const scale = Math.min(horizontalScale, verticalScale);

  return {
    width: targetDimensions.width * scale,
    height: targetDimensions.height * scale,
  };
};

const calculateDimension = (
  value: number,
  baseDimension: number,
  currentDimension: number,
  baseViewportDimension: number
): string => {
  const percentage = (value * 100) / baseDimension;
  const scale = currentDimension / baseViewportDimension;
  return `${(baseViewportDimension * percentage * scale) / 100}px`;
};

export const resolvedDimension = (
  ref: DimensionType,
  value: number
): string => {
  const calculatedViewport = getViewportToFit(DEFAULT_VIEWPORT);

  if (ref === DIMENSION_TYPE.VERTICAL) {
    return calculateDimension(
      value,
      BASE_DIMENSIONS.height,
      calculatedViewport.height,
      DEFAULT_VIEWPORT.height
    );
  }
  
  return calculateDimension(
    value,
    BASE_DIMENSIONS.width,
    calculatedViewport.width,
    DEFAULT_VIEWPORT.width
  );
};

export const useResponsiveDimension = (
  ref: DimensionType,
  value: number
): string => {
  const { baseViewport, currentViewport } = useResponsiveContext();
  
  return useMemo(() => {
    if (ref === DIMENSION_TYPE.VERTICAL) {
      return calculateDimension(
        value,
        BASE_DIMENSIONS.height,
        currentViewport.height,
        baseViewport.height
      );
    }
    
    return calculateDimension(
      value,
      BASE_DIMENSIONS.width,
      currentViewport.width,
      baseViewport.width
    );
  }, [ref, value, baseViewport, currentViewport]);
}; 