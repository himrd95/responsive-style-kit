import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useResponsiveContext } from '../theme/ResponsiveThemeProvider';

interface ResponsiveElementProps {
  width?: number;
  height?: number;
  fontSize?: number;
  margin?: number;
  padding?: number;
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

  const style = useMemo(() => ({
    width: props.width ? props.width * scaleWidth : undefined,
    height: props.height ? props.height * scaleHeight : undefined,
    fontSize: props.fontSize ? props.fontSize * scaleWidth : undefined,
    margin: props.margin ? props.margin * scaleWidth : undefined,
    padding: props.padding ? props.padding * scaleWidth : undefined,
  }), [props.width, props.height, props.fontSize, props.margin, props.padding, scaleWidth, scaleHeight]);

  return <Component style={style}>{children}</Component>;
};

export const responsiveElement = styled(ResponsiveElementBase)``; 