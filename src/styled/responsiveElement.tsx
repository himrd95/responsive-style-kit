import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useResponsiveContext } from '../theme/ResponsiveThemeProvider';
import { DIMENSION_TYPE } from '../utils/dimensions';

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
  const responsive = useResponsiveContext();
  const { scaleWidth, scaleHeight } = responsive;

  const style = useMemo(() => {
    const baseStyle: Record<string, number | undefined> = {
      // Horizontal dimensions
      width: props.width ? props.width * scaleWidth : undefined,
      marginLeft: props.marginLeft ? props.marginLeft * scaleWidth : undefined,
      marginRight: props.marginRight ? props.marginRight * scaleWidth : undefined,
      paddingLeft: props.paddingLeft ? props.paddingLeft * scaleWidth : undefined,
      paddingRight: props.paddingRight ? props.paddingRight * scaleWidth : undefined,
      fontSize: props.fontSize ? props.fontSize * scaleWidth : undefined,

      // Vertical dimensions
      height: props.height ? props.height * scaleHeight : undefined,
      marginTop: props.marginTop ? props.marginTop * scaleHeight : undefined,
      marginBottom: props.marginBottom ? props.marginBottom * scaleHeight : undefined,
      paddingTop: props.paddingTop ? props.paddingTop * scaleHeight : undefined,
      paddingBottom: props.paddingBottom ? props.paddingBottom * scaleHeight : undefined,
    };

    return baseStyle;
  }, [
    props.width,
    props.height,
    props.fontSize,
    props.marginTop,
    props.marginBottom,
    props.marginLeft,
    props.marginRight,
    props.paddingTop,
    props.paddingBottom,
    props.paddingLeft,
    props.paddingRight,
    scaleWidth,
    scaleHeight
  ]);

  return <Component style={style}>{children}</Component>;
};

export const responsiveElement = styled(ResponsiveElementBase)``; 