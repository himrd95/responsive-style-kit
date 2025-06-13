import React, { useMemo } from 'react';
import styled from 'styled-components';
import { DIMENSION_TYPE, useResponsiveDimension } from '../utils/dimensions';

interface ResponsiveElementProps {
  width?: number;
  height?: number;
  fontSize?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  as?: React.ElementType;
  children?: React.ReactNode;
}

const ResponsiveElementBase: React.FC<ResponsiveElementProps> = ({
  children,
  as: Component = 'div',
  ...props
}) => {
  // Calculate all responsive dimensions using the hook
  const width = props.width ? useResponsiveDimension(DIMENSION_TYPE.HORIZONTAL, props.width) : undefined;
  const height = props.height ? useResponsiveDimension(DIMENSION_TYPE.VERTICAL, props.height) : undefined;
  const fontSize = props.fontSize ? useResponsiveDimension(DIMENSION_TYPE.HORIZONTAL, props.fontSize) : undefined;
  
  const marginTop = props.marginTop ? useResponsiveDimension(DIMENSION_TYPE.VERTICAL, props.marginTop) : undefined;
  const marginBottom = props.marginBottom ? useResponsiveDimension(DIMENSION_TYPE.VERTICAL, props.marginBottom) : undefined;
  const marginLeft = props.marginLeft ? useResponsiveDimension(DIMENSION_TYPE.HORIZONTAL, props.marginLeft) : undefined;
  const marginRight = props.marginRight ? useResponsiveDimension(DIMENSION_TYPE.HORIZONTAL, props.marginRight) : undefined;
  
  const paddingTop = props.paddingTop ? useResponsiveDimension(DIMENSION_TYPE.VERTICAL, props.paddingTop) : undefined;
  const paddingBottom = props.paddingBottom ? useResponsiveDimension(DIMENSION_TYPE.VERTICAL, props.paddingBottom) : undefined;
  const paddingLeft = props.paddingLeft ? useResponsiveDimension(DIMENSION_TYPE.HORIZONTAL, props.paddingLeft) : undefined;
  const paddingRight = props.paddingRight ? useResponsiveDimension(DIMENSION_TYPE.HORIZONTAL, props.paddingRight) : undefined;

  const style = useMemo(() => ({
    width,
    height,
    fontSize,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  }), [
    width,
    height,
    fontSize,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  ]);

  return <Component style={style}>{children}</Component>;
};

export const responsiveElement = styled(ResponsiveElementBase)``; 