import { useMemo } from 'react';
import { useResponsiveContext } from '../theme/ResponsiveThemeProvider';

export enum DIMENSION_TYPE {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical'
}

export const resolvedDimension = (
  type: DIMENSION_TYPE,
  value: number,
  scale: number
): number => {
  return parseFloat((value * scale).toFixed(2));
};

export const useResponsiveDimension = (
  type: DIMENSION_TYPE,
  value: number
): number => {
  const { scaleWidth, scaleHeight } = useResponsiveContext();
  const scale = type === DIMENSION_TYPE.HORIZONTAL ? scaleWidth : scaleHeight;

  return useMemo(() => resolvedDimension(type, value, scale), [type, value, scale]);
}; 